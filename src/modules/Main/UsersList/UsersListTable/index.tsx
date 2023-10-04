import { useMemo, ChangeEvent, useState, useCallback } from "react";
import { Button, Table, TableBody, TableHead, TablePagination, TableRow, Typography, SelectChangeEvent } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { enqueueSnackbar } from "notistack";

import { useGetUsersQuery, useGetUserRolesQuery } from "../../api";
import { useDeleteUserMutation, useChangeUserRoleMutation } from "../api";
import { Select, PageSpinner, ConfirmationModal } from "../../../../common/components";
import { snackBarMessages } from "../../../../common/utils";
import * as Styled from "./styled";
import { UserRoles } from "../../../../common/enums";

interface IUsersListTableProps {
	usersSearchQuery: string;
	roleSearchQuery: string;
	requestsTable?: boolean;
}

const columnsData = [
	{ id: "nickname", label: "Nickname" },
	{ id: "email", label: "E-mail" },
	{ id: "role", label: "Role", styles: { ml: "12px" } },
	{ id: "delete", label: "", align: "right" as const }
];

export const UsersListTable = ({ usersSearchQuery, roleSearchQuery, requestsTable }: IUsersListTableProps) => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const [isModalOpen, setModalOpen] = useState(false);
	const [deleteUserId, setDeleteUserId] = useState("");

	const { data: roles } = useGetUserRolesQuery();
	const [deleteUserReq] = useDeleteUserMutation();
	const [changeUserRoleReq] = useChangeUserRoleMutation();

	const queryString = `?page=${page + 1}&limit=${rowsPerPage}&users=${usersSearchQuery}&roleId=${roleSearchQuery}&RoleRequest=${!!requestsTable}`;
	const { data: users, isLoading, isSuccess } = useGetUsersQuery(queryString);

	const filteredRoles = useMemo(() => roles?.filter((userRole) => userRole.name !== UserRoles.admin), [roles]);

	const columns = useMemo(
		() =>
			columnsData.map(({ id, label, styles, align }) => {
				return (
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
				);
			}),
		[]
	);

	const rows = useMemo(
		() =>
			users?.data.map(({ id, email, nickname, role: { name } }) => {
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
					if (requestsTable) return;
					setModalOpen(true);
					setDeleteUserId(id);
				};

				const isAdmin = name === UserRoles.admin;

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
								data={filteredRoles}
								placeholder={name}
								width="110px"
								sx={{ fontWeight: "bold" }}
								onChange={onRoleChange}
								disableEmptyLane
								disabled={isAdmin}
							/>
						</Styled.TableCell>
						<Styled.TableCell>
							{!requestsTable && (
								<Button
									onClick={showModal}
									disabled={isAdmin}
								>
									<DeleteForeverIcon />
								</Button>
							)}
						</Styled.TableCell>
					</TableRow>
				);
			}),
		[users, changeUserRoleReq, requestsTable, setDeleteUserId, filteredRoles]
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
		<Styled.Paper>
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
				sx={{ alignSelf: "flex-end" }}
			/>
			<ConfirmationModal
				isOpen={isModalOpen}
				title="Are you sure you want to delete this user?"
				onConfrim={onUserDelete}
				handleClose={closeModal}
			/>
		</Styled.Paper>
	);
};
