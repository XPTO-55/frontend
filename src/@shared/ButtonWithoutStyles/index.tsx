import React from 'react'
interface ButtonWithoutStylesProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export const ButtonWithoutStyles = (props: ButtonWithoutStylesProps) => {
  return <button {...props} />
}
