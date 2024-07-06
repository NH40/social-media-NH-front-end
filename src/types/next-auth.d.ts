import 'next-auth'
declare module 'next-auth' {
	interface Session {
		user?: User
	}

	interface User {
		email?: string
		username?: string
		avatar?: string
		id?: string
		jwt?: string
		friends?: User[]
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		token: string
	}
}
