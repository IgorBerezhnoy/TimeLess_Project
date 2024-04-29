import { DetailedHTMLProps, ElementRef, InputHTMLAttributes, JSX, forwardRef, memo } from 'react'

import { clsx } from 'clsx'

import s from './textField.module.scss'

export interface TextFieldProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  classNameWrapper?: string
  errorMessage?: string
  label?: string
}

export const TextField = forwardRef<ElementRef<'input'>, TextFieldProps>(
  memo(
    ({ className, classNameWrapper, disabled, errorMessage, label, ...rest }, ref): JSX.Element => {
      return <input className={clsx(s.input, className)} {...rest} ref={ref} />
    }
  )
)
