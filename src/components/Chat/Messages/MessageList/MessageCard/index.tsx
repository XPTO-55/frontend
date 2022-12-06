import React, { useState } from 'react'
import { IMessageCardProps } from './types'
import * as S from './styles'
import { MessageInfo } from './MessageInfo'
import { BsArrowReturnRight } from 'react-icons/bs'
import { ButtonWithoutStyles } from '../../../../../@shared/ButtonWithoutStyles'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { MessageReply } from './MessageReply'

export function MessageCard({ message, ...props }: IMessageCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <S.Container open={open} className={props.className} onOpenChange={setOpen}>
      <MessageInfo data={message} />
      <S.ContainerReplyes>
        <S.ButtonActionReplyes asChild>
          <button>
            <BsArrowReturnRight />
            {open ? 'Hide' : 'View'} Replyes
          </button>

        </S.ButtonActionReplyes>
        <S.ButtonActionReplyes asChild>
          <ButtonWithoutStyles >
            <AiOutlineClockCircle />
            <p>
              {message.createdAt ? new Intl.DateTimeFormat('pt-BR').format(new Date(message.createdAt)) : null}
            </p>
          </ButtonWithoutStyles>
        </S.ButtonActionReplyes>
      </S.ContainerReplyes>
      <S.ContentReplyes>
        {message.replyes.map(reply => <MessageReply key={reply.id} data={reply} />)}
      </S.ContentReplyes>
    </S.Container >
  )
}
