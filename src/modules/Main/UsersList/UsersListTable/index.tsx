import { useMemo, ChangeEvent, useState, useCallback } from "react";
import { Paper, Table, TableBody, TableHead, TablePagination, TableRow, Typography, SelectChangeEvent } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { enqueueSnackbar } from "notistack";

import { useGetUsersQuery, useGetUserRolesQuery } from "../../api";
import { useDeleteUserMutation, useChangeUserRoleMutation } from "../api";
import { Select, PageSpinner, ConfirmationModal } from "../../../../common/components";
import { snackBarMessages } from "../../../../common/utils";
import * as Styled from "./styled";

interface IUsersListTableProps {
	usersSearchQuery: string;
	roleSearchQuery: string;
}

const columnsData = [
	{ id: "nickname", label: "Nickname" },
	{ id: "email", label: "E-mail" },
	{ id: "role", label: "Role", styles: { ml: "12px" } },
	{ id: "delete", label: "", align: "right" as const }
];

export const UsersListTable = ({ usersSearchQuery, roleSearchQuery }: IUsersListTableProps) => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const [isModalOpen, setModalOpen] = useState(false);
	const [deleteUserId, setDeleteUserId] = useState("");

	const { data: roles } = useGetUserRolesQuery();
	const [deleteUserReq] = useDeleteUserMutation();
	const [changeUserRoleReq] = useChangeUserRoleMutation();

	const queryString = `?page=${page + 1}&limit=${rowsPerPage}&users=${usersSearchQuery}&roleId=${roleSearchQuery}`;
	const { data: users, isLoading, isSuccess } = useGetUsersQuery(queryString);

	const columns = useMemo(
		() =>
			columnsData.map(({ id, label, styles, align }) => (
				<Styled.TableCell
					key={id}
					align={align}
				>
					<Typography
						variant="HBodyBold"
						sx={styles || {}}
					>
						{" "}
						{label}
					</Typography>
				</Styled.TableCell>
			)),
		[]
	);

	const rows = useMemo(
		() =>
			users?.data.map(({ id, email, nickname, role }) => {
				const onRoleChange = async ({ target: { value } }: SelectChangeEvent<unknown>) => {
					if (value) {
						const requestData = {
							id,
							newRoleId: value as string
						};
						try {
							await changeUserRoleReq(requestData);
							enqueueSnackbar(snackBarMessages.changedUserRole, { variant: "success" });
						} catch {
							// handled by middleware
						}
					}
				};

				const showModal = () => {
					setModalOpen(true);
					setDeleteUserId(id);
				};

				return (
					<TableRow key={id}>
						<Styled.TableCell>
							<Typography variant="HBody">{nickname}</Typography>
						</Styled.TableCell>
						<Styled.TableCell>
							<Typography variant="HBody">{email}</Typography>
						</Styled.TableCell>
						<Styled.TableCell>
							<Select
								data={roles}
								placeholder={role.name}
								width="110px"
								sx={{ fontWeight: "bold" }}
								onChange={onRoleChange}
								disableEmptyLane
							/>
						</Styled.TableCell>
						<Styled.TableCell onClick={showModal}>
							<DeleteForeverIcon />
						</Styled.TableCell>
					</TableRow>
				);
			}),
		[roles, users, changeUserRoleReq, setDeleteUserId]
	);

	const handleChangePage = useCallback(
		(e: unknown, newPage: number) => {
			setPage(newPage);
		},
		[setPage]
	);

	const handleChangeRowsPerPage = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(Number(e.target.value));
		setPage(0);
	}, []);

	const closeModal = useCallback(() => {
		setModalOpen(false);
	}, [setModalOpen]);

	const onUserDelete = useCallback(
		async (confirmation: boolean) => {
			if (!confirmation) return;
			try {
				await deleteUserReq(deleteUserId);
				enqueueSnackbar(snackBarMessages.deletedUser, { variant: "success" });
			} catch {
				// handled by middleware
			}
		},
		[deleteUserReq, deleteUserId]
	);

	return (
		<Paper sx={{ width: "100%" }}>
			<Styled.TableContainer>
				{isLoading && <PageSpinner />}
				{isSuccess && (
					<Table stickyHeader>
						<TableHead>
							<TableRow>{columns}</TableRow>
						</TableHead>
						<TableBody>{rows}</TableBody>
					</Table>
				)}
			</Styled.TableContainer>
			<TablePagination
				rowsPerPageOptions={[10, 25, 100]}
				component="div"
				count={users?.totalRecords || 0}
				rowsPerPage={rowsPerPage}
				page={(users?.page && users.page - 1) || 0}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
			<ConfirmationModal
				isOpen={isModalOpen}
				title="Are you sure you want to delete this user?"
				onConfrim={onUserDelete}
				handleClose={closeModal}
			/>
		</Paper>
	);
};
