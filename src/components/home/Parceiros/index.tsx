import React, { useState } from 'react'
import * as S from './styles'
import { useKeenSlider } from 'keen-slider/react'

export const Parceiros = () => {
  const parcerias = [
    {
      id: 1,
      nome: 'Apple',
      url: 'assets/img/mcparceiro.jpeg'
    },
    {
      id: 2,
      nome: 'Apple',
      url: '/assets/img/raiaparceira.jpeg'
    },
    {
      id: 3,
      nome: 'Apple',
      url: 'assets/img/ondaparceiro.jpeg'
    },
    {
      id: 4,
      nome: 'Apple',
      url: 'assets/img/aacdoarceiro.jpeg'
    },
    {
      id: 5,
      nome: 'Apple',
      url: 'assets/img/cinemarkparceiro.jpeg'
    },
    {
      id: 6,
      nome: 'Apple',
      url: 'assets/img/masterparceira.jpeg'
    }
  ]

  const [, setLoaded] = useState(false)
  const [, setCurrentSlide] = useState(0)
  const [sliderRef2, instanceRef2] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 3
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    }
  })

  return (
    <S.PageContainer>
      <h1>Parceiros</h1>

      <S.Container>
        <S.ContainerNavigator>
          <div
            className="keen-slider"
            style={{ width: '100vw', alignSelf: 'center' }}
            ref={sliderRef2}
          >
            {parcerias.map((parceria) => {
              return (
                <div
                  key={parceria.id}
                  className="keen-slider__slide"
                  style={{ position: 'relative', width: 300, minWidth: 300 }}
                >
                  <img
                    src={parceria.url}
                    style={{ objectFit: 'cover', height: 200, borderRadius: 7 }}
                    alt="fundo parceria"
                  />
                </div>
              )
            })}
          </div>
          <>
            <Arrow
              left
              onClick={(e) => {
                e.stopPropagation()
                instanceRef2.current?.prev()
              }
              }
              disabled={false}
            />

            <Arrow
              onClick={(e) => {
                e.stopPropagation()
                instanceRef2.current?.next()
              }
              }
              disabled={false}
            />
          </>
        </S.ContainerNavigator>
      </S.Container>
    </S.PageContainer>
  )
}

function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: React.MouseEventHandler<SVGSVGElement>
}) {
  const disabeld = props.disabled ? ' arrow--disabled' : ''
  return (
    <svg
      onClick={props.onClick}
      className={`arrow2 ${props.left ? 'arrow--left' : 'arrow--right'} ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}
