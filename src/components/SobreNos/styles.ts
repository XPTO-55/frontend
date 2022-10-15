import styled from "styled-components";

export const PageContainer = styled.div`

    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F0F2F2;
    flex-direction: column;

`

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -100px;
`

export const ContainerContent = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    &.imgSobreNos{
        margin-top: 70px;
        margin-left: 30px;
    height: 80%;

    }

    &.textoSobreNos{
        flex-direction: column;
        padding-top: 330px;
        padding-left: 100px;
        margin-left: -50px;

        h1{
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 30px;
        }

        h2{
            font-size: 17px;
            margin-bottom: 10px;
            width: 500px;
        }
    }
`


export const Img = styled.img`
    width: 800px;
    height: 500px;
    margin-left: -110px;

`

export const Svg = styled.svg`
  margin-top: -160px;
  max-width: 1600px;
`;