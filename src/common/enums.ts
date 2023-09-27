export enum UserRoles {
	admin = "Admin",
	user = "User",
	author = "Author"
}

export enum IconSizes {
	medium = "medium",
	large = "large",
	small = "small",
	inherit = "inherit"
}

export enum Routes {
	signUp = "/signup",
	signIn = "/auth/signin",
	forgotPass = "/auth/forgotpass",
	passRecovery = "/auth/passrecovery",
	article = "/article",
	createArticle = "/article/create",
	editArticle = "/article/edit",
	articlePublished = "/article/published",
	favorites = "article/favorites",
	search = "/search",
	author = "/author",
	usersList = "/userslist"
}
