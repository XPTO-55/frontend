import { useState } from "react";
import * as S from "./styles";
import { useKeenSlider } from "keen-slider/react";

export const Parceiros = () => {
  const parcerias = [
    {
      id: 1,
      nome: "Apple",
      url: "http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png",
    },
    {
      id: 2,
      nome: "Apple",
      url: "https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg",
    },
    {
      id: 3,
      nome: "Apple",
      url: "http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png",
    },
    {
      id: 4,
      nome: "Apple",
      url: "https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg",
    },
    {
      id: 5,
      nome: "Apple",
      url: "http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png",
    },
    {
      id: 6,
      nome: "Apple",
      url: "https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg",
    },
    {
      id: 7,
      nome: "Apple",
      url: "http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png",
    },
    {
      id: 8,
      nome: "Apple",
      url: "https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg",
    },
    {
      id: 9,
      nome: "Apple",
      url: "http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [itemsPerView, setitemsPerView] = useState(6);
  const [sliderRef2, instanceRef2] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <S.PageContainer>
      <S.Container>
        <div className="navigation-wrapper">
          <div
            className="keen-slider"
            ref={sliderRef2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "90vw",
              overflow: "hidden",
            }}
          >
            {parcerias.map((parceria) => {
              return (
                <div
                  key={parceria.id}
                  className="keen-slider__slide"
                  style={{ position: "relative", width: 300, minWidth: 300 }}
                >
                  <h3>{parceria.nome}</h3>
                  <img
                    src={parceria.url}
                    alt=""
                    style={{ objectFit: "cover", height: 300 }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </S.Container>
    </S.PageContainer>
  );
};

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
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
  );
}
