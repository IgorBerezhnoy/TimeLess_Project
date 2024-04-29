import { ChangeEvent, FC, useState } from 'react'

import { TextField, TextFieldProps } from '@/components/textField'

export type DebounceInput = {
  onDebouncedChange?: (value: string) => void
} & TextFieldProps

export const DebouncedInput: FC<DebounceInput> = ({
  onChange,
  onDebouncedChange,
  ...restProps
}) => {
  const [timerId, setTimerId] = useState<number | undefined>(undefined)

  const onChangeTextCallback = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value

    onChange?.(event)
    if (onDebouncedChange) {
      clearTimeout(timerId)
      const timer = setTimeout(() => {
        onDebouncedChange(value)
      }, 300)

      setTimerId(Number(timer))
    }
  }

  return <TextField onChange={onChangeTextCallback} {...restProps} />
}
