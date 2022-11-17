import React from 'react'
import { ToastProps } from './types'

import * as S from './styles'

export function Toast(props: ToastProps) {
  return (
    <>
      <S.ToastRoot duration={300}>
        <S.ToastTitle>
          {props.title}
        </S.ToastTitle>
        {props.description
          ? <S.ToastDescription >
            {props.description}
          </S.ToastDescription>

          : null}

        {/* <S.ToastAction /> */}
        {props.close ? <S.ToastClose altText='anyone'>{props.close}</S.ToastClose> : null}
      </S.ToastRoot>

      <S.ToastViewport />
    </>
  )
};
