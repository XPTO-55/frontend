import styled from "styled-components"

export const PageContainer = styled.div`
width: 100%;
max-width: 1600px;
height: 300px;
display: flex;
align-items: center;
justify-content: center;
background-color: #0A6CB2;
`

export const Container = styled.div`
width: 1200px;
max-width: 1200px;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
color: #F0F2F2;


`

export const ContainerContent = styled.div`

width: 32%;
height: 95%;
display: flex;

&.redesSociais{
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

&.info{
    width: 70%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    h1{
        font-size: 24px;
        margin-top: 20px;
        font-weight: 500;
    }
    h2{
        font-size: 15px;
        font-weight: normal;
        margin-top: 3px;
    }
}

&.suporte{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding-left: 50px;

    h1{
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 5px;
    }
    h2{
        font-size: 15px;
        font-weight: normal;
        margin-bottom: 5px;
    }

    h3{
        font-size: 15px;
        font-weight: normal;
        margin-bottom: 15px; 
    }
}

&.imgCpa{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h2{
        margin-top: 15px;
        margin-left: 100px;
    }
}



`


export const Svg = styled.svg`

color: #F0F2F2;
width: 50px;
height: 50px;
margin-top: 25px;

`