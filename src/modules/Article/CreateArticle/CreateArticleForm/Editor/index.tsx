import { useCallback, useState } from "react";
import ReactQuill from "react-quill";
import { DeltaStatic } from "quill";
import "react-quill/dist/quill.snow.css";

import { useImageUploadMutation } from "../../api";
import { base64toBlob } from "../../../../../common/utils";
import * as Styled from "./styled";

interface IEditorProps {
	onChange: (state: string) => void;
	initState: string;
}

export const Editor = ({ onChange: onChangeFromProps, initState }: IEditorProps) => {
	const [editorState, setEditorState] = useState(initState);
	const [imageUploadReq] = useImageUploadMutation();

	const modules = {
		toolbar: [
			[{ header: [2, 3, false] }],
			["bold", "italic", "underline"],
			[{ background: [] }, { color: [] }],
			[{ list: "bullet" }, "blockquote"],
			["link", "image"]
		]
	};

	const onChange = useCallback(
		async (state: string, { ops }: DeltaStatic) => {
			setEditorState(state);
			if (ops) {
				const imageOperation = ops.find((obj) => typeof obj?.insert === "object" && "image" in obj.insert);
				if (imageOperation) {
					const imageSourceRegExp = /src="data:image.+?={1,2}"/;
					const matches = state.match(imageSourceRegExp);
					if (matches) {
						const imageSource = matches[0];
						const base64Image = imageSource.slice(imageSource.indexOf(",") + 1, imageSource.length - 1);
						const mimeType = imageSource.slice(imageSource.indexOf(":") + 1, imageSource.indexOf(";"));
						const blobImage = base64toBlob(base64Image, mimeType);
						try {
							const { fileUrl } = await imageUploadReq(blobImage).unwrap();
							const stateWithReplacedUrl = state.replace(imageSourceRegExp, `src="${fileUrl}"`);
							onChangeFromProps(stateWithReplacedUrl);
						} catch {
							// handled by middleware
						}
					}
				} else {
					onChangeFromProps(state);
				}
			}
		},
		[imageUploadReq, onChangeFromProps]
	);

	return (
		<Styled.EditorWrapper>
			<ReactQuill
				theme="snow"
				value={editorState}
				modules={modules}
				onChange={onChange}
			/>
		</Styled.EditorWrapper>
	);
};
