import { LucideIcon } from 'lucide-react'
import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface IFieldProps {
	placeholder: string
	error?: FieldError
	Icon?: LucideIcon
}

export type TypeInputProps = InputHTMLAttributes<HTMLInputElement> & IFieldProps
