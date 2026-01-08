import {
	type Context,
	createContext as createReactContext,
	type Provider,
	useContext as useReactContext,
} from 'react'

export interface CreateContextOptions {
	strict?: boolean
	errorMessage?: string
	name?: string
}

export type CreateContextReturn<T> = [Provider<T>, () => T, Context<T>]

export function createContext<ContextType>(options: CreateContextOptions = {}) {
	let { strict = true, name, errorMessage } = options

	let Context = createReactContext<ContextType | undefined>(undefined)

	Context.displayName = name

	function useContext() {
		let context = useReactContext(Context)

		if (!context && strict) {
			let error = new Error(errorMessage)

			error.name = 'ContextError'
			Error.captureStackTrace?.(error, useReactContext)
			throw error
		}

		return context
	}

	return [
		Context.Provider,
		useContext,
		Context,
	] as CreateContextReturn<ContextType>
}