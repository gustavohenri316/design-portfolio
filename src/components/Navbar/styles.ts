import styled from "styled-components";

export const Container = styled.div`
  width: 8.4rem;
  height: 29.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const IconContainer = styled.div`
  margin-top: 1rem;
  width: 5rem;
  height: 24.75rem;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-direction: column;
  background: var(--primary-light);
  box-shadow: 0px 2px 14px var(--primary-light);
`
export const IconItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .border{
    width: 0.4rem;
    height: 1.75rem;
    border: 8px;
    background: green;
  }

  .home {
    margin-left: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7.4rem;
    height: 2.75rem;
    border-radius: 8px;
    background: rgba(0,0,0, 0.8);
    color: #fff;
    z-index: 2;

    strong{
      margin-left: 0.5rem;
    }

    
      -moz-transition: all 0.3s;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;

      &:hover {
        -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
      }
    
  }
  img{
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
export const ImgUser = styled.div`
  margin-top: 1.3rem;
  height: 3.4rem;
  width: 3.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  -moz-transition: all 0.3s;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;

      &:hover {
        -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
      }
`