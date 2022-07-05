import styled from "styled-components";
import bitmapImg from '../../assets/Bitmap.png'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

`
export const Content = styled.div`
  z-index: 1;
  flex: 1;
  width: 100%;
  border-radius: 34px;
  height: 30.37rem;
  background-image: url(${bitmapImg});
  background-repeat: round;
`
export const Box = styled.div`
  margin-top: 3.93rem;
  margin-left: 6.56rem;
  width: 50rem;
  height: 21.62rem;
  background: linear-gradient(141.51deg, var(--secundary-main) -18.34%, var(--primary-main) 66.03%);
  mix-blend-mode: normal;
  opacity: 0.79;
  border-radius: 34px;
  main{
    padding-top: 1.9rem;
    margin-left: 2.31rem;
  }
  h2{
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 43px;
    color: #FFFFFF;
   
  }
  h1{
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 3rem;
    line-height: 58px;
    color: #FFFFFF;
    margin-top: 1.56rem;
    margin-bottom: 1.43rem;
  }
  span{
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.37rem;
    line-height: 33px;
    color: #FFFFFF;
    
  }

`
export const SocialMidia = styled.div`
  margin-top: 1.37rem;
  display: flex;
  align-items: center;
  gap: 1.75rem;
  img{
    cursor: pointer;
  
      -moz-transition: all 0.3s;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;

      &:hover {
        -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
      }
    
  }
`