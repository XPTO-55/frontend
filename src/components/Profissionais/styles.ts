import styled from "styled-components";

export const PageContainer = styled.div`
width: 100%;
height: 700px;
display: flex;
align-items: center;
justify-content: center;
background-image: linear-gradient(rgba(0, 0, 0, 0.5),
                       rgba(0, 0, 0, 0.5)), url('/assets/img/fundoProfissionais.jpg');
background-repeat: no-repeat, repeat-x;
background-position: top right, center;
background-size: cover;
`

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 600px;
    color: white;
`

export const ContainerStep = styled.div`
width: 100%;
height: 20%;
display: flex;
align-items: center;
justify-content: center;
`

export const Step = styled.div`
width: 250px;
height: 12px;
margin: 25px;
border-radius: 10px;
background-color: rgba(172, 172, 172, 0.315);


&.atual{
    background-color: rgba(172, 172, 172, 0.800);
}
`


export const ContainerInfoProf = styled.div`
width: 100%;
height: 80%;
display: flex;
align-items: center;
justify-content: center;
`

export const ContainerInfoProfContent = styled.div`
width: 50%;
height: 100%;

&.texto{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding-left: 150px;

    h1{
        font-size: 36px;
        font-weight: bold;
        width: 300px;
        margin-bottom: 40px;
    }

    h2{
        font-size: 24px;
    }

    h3{
        margin-top: 10px;
        font-size: 17px;
        width: 500px;
        margin-bottom: 10px;
    }
}

&.imgProf {
    padding-top: 50px;
    padding-left: 75px;
    z-index: 2;
    img{
        border-radius: 7px;
    }
}
`

export const bordaImgProf = styled.div`
width: 354px;
height: 452px;
position: absolute;
margin-left: 650px;
margin-top: 70px;
border-radius: 7px;
background-color: #2a8dd2;
z-index: 1;
`

export const Svg = styled.svg`
margin-top: -280px;
    max-width: 1600px;
    z-index: 0;

`




