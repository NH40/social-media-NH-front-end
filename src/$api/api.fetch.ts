class FetchClient {
	private API_URL = process.env.API_URL as string

	constructor(private defaultHeaders: Record<string, string> = {}) {}

	async get<T>(
		path: string,
		isAuth: boolean = false,
		headers?: Record<string, string>
	): Promise<T> {
		return this.fetch<T>(path, 'GET', isAuth, undefined, headers)
	}

	async post<T>(
		path: string,
		body?: Record<string, any>,
		isAuth: boolean = false,
		headers?: Record<string, string>
	): Promise<T> {
		return this.fetch<T>(path, 'POST', isAuth, body, headers)
	}

	async put<T>(
		path: string,
		body?: Record<string, any>,
		isAuth: boolean = false,
		headers?: Record<string, string>
	): Promise<T> {
		return this.fetch<T>(path, 'PUT', isAuth, body, headers)
	}

	async delete<T>(
		path: string,
		isAuth: boolean = false,
		headers?: Record<string, string>
	): Promise<T> {
		return this.fetch<T>(path, 'DELETE', isAuth, undefined, headers)
	}

	async patch<T>(
		path: string,
		body?: Record<string, any>,
		isAuth: boolean = false,
		headers?: Record<string, string>
	): Promise<T> {
		return this.fetch<T>(path, 'PATCH', isAuth, body, headers)
	}

	private async fetch<T>(
		path: string,
		method: string,
		isAuth: boolean,
		body?: Record<string, any>,
		headers?: Record<string, string>
	): Promise<T> {
		const url = `${this.API_URL}${path}`

		const authorizationHeader: HeadersInit = isAuth
			? { Authorization: `Bearer ${localStorage.getItem('token')}` }
			: {}

		try {
			const response = await fetch(url, {
				method,
				headers: {
					'Content-Type': 'application/json',
					...this.defaultHeaders,
					...authorizationHeader,
					...headers,
				},
				body: body ? JSON.stringify(body) : null,
			})

			const data = await response.json()

			if (!response.ok) {
				throw new Error(data.error)
			}

			return data
		} catch (error) {
			throw error
		}
	}
}

export const $fetch = new FetchClient()
