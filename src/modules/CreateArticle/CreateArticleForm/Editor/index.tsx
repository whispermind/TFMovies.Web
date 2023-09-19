import { useState } from "react";
import ReactQuill from "react-quill";
import { DeltaStatic } from "quill";
import "react-quill/dist/quill.snow.css";

import { useImageUpload } from "../../../../common/hooks";
import { base64toBlob } from "../../../../common/utils";
import * as Styled from "./styled";

interface IEditorProps {
	onChange?: (state: string) => void;
	initialState?: string;
}

export const Editor = ({ initialState, onChange: onChangeFromProps }: IEditorProps) => {
	const [imageUploadReq] = useImageUpload();
	const [value, setValue] = useState(initialState || "");

	const modules = {
		toolbar: [
			[{ header: [1, 2, 3, false] }],
			["bold", "italic", "underline"],
			[{ background: [] }, { color: [] }],
			[{ list: "bullet" }, "blockquote"],
			["link", "image"]
		]
	};

	const onChange = async (state: string, { ops }: DeltaStatic) => {
		if (ops) {
			const imageOperation = ops.find((obj) => typeof obj?.insert === "object" && "image" in obj.insert);
			if (imageOperation) {
				const imageSourceRegExp = /src="data:image.+"/g;
				const imageSource = state.match(imageSourceRegExp)![0];
				const base64Image = imageSource.slice(imageSource.indexOf(",") + 1, imageSource.length - 1);
				const mimeType = imageSource.slice(imageSource.indexOf(":") + 1, imageSource.indexOf(";"));
				const blobImage = base64toBlob(base64Image, mimeType);
				try {
					const { fileUrl } = await imageUploadReq(blobImage).unwrap();
					const stateWithReplacedUrl = state.replace(imageSourceRegExp, `src="${fileUrl}"`);
					setValue(stateWithReplacedUrl);
				} catch {
					// handled by middleware
				}
			} else {
				setValue(state);
			}
		}
		if (onChangeFromProps) onChangeFromProps(value);
	};

	return (
		<Styled.EditorWrapper>
			<ReactQuill
				theme="snow"
				value={value}
				modules={modules}
				onChange={onChange}
			/>
		</Styled.EditorWrapper>
	);
};
