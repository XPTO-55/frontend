import React, { forwardRef, ForwardRefRenderFunction } from 'react'
interface ButtonWithoutStylesProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const ButtonWithoutBase: ForwardRefRenderFunction<HTMLButtonElement, ButtonWithoutStylesProps> =
(props: ButtonWithoutStylesProps, ref) => {
  return <button ref={ref} {...props} />
}

export const ButtonWithoutStyles = forwardRef(ButtonWithoutBase)
