import { useCallback } from "react";
import ReactQuill from "react-quill";
import { DeltaStatic } from "quill";
import "react-quill/dist/quill.snow.css";

import { useImageUploadMutation } from "../../api";
import { base64toBlob } from "../../../../common/utils";
import * as Styled from "./styled";

interface IEditorProps {
	onChange: (state: string) => void;
	formFieldState: string;
}

export const Editor = ({ formFieldState = "", onChange: onChangeFromProps }: IEditorProps) => {
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
		async (editorState: string, { ops }: DeltaStatic) => {
			if (ops) {
				const imageOperation = ops.find((obj) => typeof obj?.insert === "object" && "image" in obj.insert);
				if (imageOperation) {
					const imageSourceRegExp = /src="data:image.+?={1,2}"/;
					const matches = editorState.match(imageSourceRegExp);
					if (matches) {
						const imageSource = matches[0];
						const base64Image = imageSource.slice(imageSource.indexOf(",") + 1, imageSource.length - 1);
						const mimeType = imageSource.slice(imageSource.indexOf(":") + 1, imageSource.indexOf(";"));
						const blobImage = base64toBlob(base64Image, mimeType);
						try {
							const { fileUrl } = await imageUploadReq(blobImage).unwrap();
							const stateWithReplacedUrl = editorState.replace(imageSourceRegExp, `src="${fileUrl}"`);
							onChangeFromProps(stateWithReplacedUrl);
						} catch {
							// handled by middleware
						}
					}
				} else {
					onChangeFromProps(editorState);
				}
			}
		},
		[imageUploadReq, onChangeFromProps]
	);

	return (
		<Styled.EditorWrapper>
			<ReactQuill
				theme="snow"
				value={formFieldState}
				modules={modules}
				onChange={onChange}
			/>
		</Styled.EditorWrapper>
	);
};
