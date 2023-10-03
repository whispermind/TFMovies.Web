import { useCallback, PropsWithChildren, MouseEvent } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

interface IConfirmationModalProps extends PropsWithChildren {
	isOpen: boolean;
	handleClose: () => void;
	onConfrim: (confirmed: boolean) => void;
	title?: string;
}

export const ConfirmationModal = ({ isOpen, onConfrim, handleClose, title, children }: IConfirmationModalProps) => {
	const closeHandler = useCallback(
		(e: MouseEvent<HTMLButtonElement>) => {
			const target = e.target as HTMLElement;
			handleClose();
			if (target.nodeName === "BUTTON") {
				if (target.id === "cancel") onConfrim(false);
				if (target.id === "confirm") onConfrim(true);
			}
		},
		[handleClose, onConfrim]
	);

	return (
		<div>
			<Dialog
				open={isOpen}
				onClose={closeHandler}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{title}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">{children}</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button
						id="cancel"
						onClick={closeHandler}
					>
						Cancel
					</Button>
					<Button
						id="confirm"
						onClick={closeHandler}
						autoFocus
					>
						Confirm
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};
