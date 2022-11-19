import * as S from './styles'
import React, { useState } from 'react'
import { ButtonPrimary } from '../../../@shared/ButtonPrimary'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export function Profissionais() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    }
  })

  return (
    <>
      <S.PageContainer>
        <S.Container>
          {loaded && instanceRef.current && (
            <div className="dots">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys()
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx)
                    }}
                    className={'dot' + (currentSlide === idx ? ' active' : '')}
                  ></button>
                )
              })}
            </div>
          )}

          <S.ContainerInfoProf
            style={{
              backgroundImage: 'url(../../../public/assets/img/fundoProfissinais.png)'
            }}
          >
            <div className="navigation-wrapper">
              <div className="keen-slider" ref={sliderRef} style={{ width: '80vw', alignSelf: 'center' }}>
                <div className="keen-slider__slide profissional">
                  <S.ContainerInfoProfContent className="texto">
                    <h1>Conheça nossos Profissionais</h1>
                    <h2>Rafael Leão</h2>
                    <h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam blandit magna rhoncus neque. Enim, amet, risus
                      aliquam sed lectus. Vulputate ullamcorper augue praesent
                      integer. Nunc volutpat laoreet curabitur lacinia.
                      ullamcorper augue praesent integer. Nunc volutpat laoreet
                      curabitur lacinia.
                    </h3>

                    <ButtonPrimary className="azul">Saiba mais!</ButtonPrimary>
                  </S.ContainerInfoProfContent>

                  <S.ContainerInfoProfContent className="imgProf">
                    <img src="/assets/img/fotoRafaelLeao.png" width="354px" height="452px" />
                  </S.ContainerInfoProfContent>
                  <S.bordaImgProf />
                </div>
                <div className="keen-slider__slide profissional">
                  <S.ContainerInfoProfContent className="texto">
                    <h1>Conheça nossos Profissionais</h1>
                    <h2>Marcelo Neto</h2>
                    <h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam blandit magna rhoncus neque. Enim, amet, risus
                      aliquam sed lectus. Vulputate ullamcorper augue praesent
                      integer. Nunc volutpat laoreet curabitur lacinia.
                      ullamcorper augue praesent integer. Nunc volutpat laoreet
                      curabitur lacinia.
                    </h3>

                    <ButtonPrimary className="azul">Saiba mais!</ButtonPrimary>
                  </S.ContainerInfoProfContent>

                  <S.ContainerInfoProfContent className="imgProf">
                    <img src="/assets/img/marceloNeto.png" width={354} height={452} />
                  </S.ContainerInfoProfContent>
                  <S.bordaImgProf />
                </div>
                <div className="keen-slider__slide profissional">
                  <S.ContainerInfoProfContent className="texto">
                    <h1>Conheça nossos Profissionais</h1>
                    <h2>Pedro Guedes</h2>
                    <h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam blandit magna rhoncus neque. Enim, amet, risus
                      aliquam sed lectus. Vulputate ullamcorper augue praesent
                      integer. Nunc volutpat laoreet curabitur lacinia.
                      ullamcorper augue praesent integer. Nunc volutpat laoreet
                      curabitur lacinia.
                    </h3>

                    <ButtonPrimary className="azul">Saiba mais!</ButtonPrimary>
                  </S.ContainerInfoProfContent>

                  <S.ContainerInfoProfContent className="imgProf">
                    <img src="/assets/img/pedroGuedes.png" width={354} height={452} />
                  </S.ContainerInfoProfContent>
                  <S.bordaImgProf />
                </div>
              </div>
              {loaded && instanceRef.current && (
                <>
                  <Arrow
                    left
                    onClick={(e) => {
                      e.stopPropagation()
                      instanceRef.current?.prev()
                    }
                    }
                    disabled={currentSlide === 0}
                  />

                  <Arrow
                    onClick={(e) => {
                      e.stopPropagation()
                      instanceRef.current?.next()
                    }}
                    disabled={
                      currentSlide ===
                      instanceRef.current.track.details.slides.length - 1
                    }
                  />
                </>
              )}

            </div>
          </S.ContainerInfoProf>
        </S.Container>
      </S.PageContainer>
      <S.Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#F0F2F2"
          fillOpacity="1"
          d="M0,256L34.3,234.7C68.6,213,137,171,206,170.7C274.3,171,343,213,411,224C480,235,549,213,617,176C685.7,139,754,85,823,69.3C891.4,53,960,75,1029,101.3C1097.1,128,1166,160,1234,144C1302.9,128,1371,64,1406,32L1440,0L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </S.Svg>
    </>
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
      className={`arrow ${props.left ? 'arrow--left' : 'arrow--right'
        } ${disabeld}`}
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
