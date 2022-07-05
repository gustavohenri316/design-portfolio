import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: -8rem;
  z-index: 2;
`
export const SectionOne = styled.div`

  img {
      cursor: pointer;
      -moz-transition: all 0.3s;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
  }
  img:hover {
      -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
  } 

`
export const SectionTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
      cursor: pointer;
     
    }
    .line{
      width: 2px;
      height: 5rem;
      margin-left: 4rem;
      margin-top: -1.9rem;
      background: linear-gradient(141.51deg, var(--secundary-main) -18.34%, var(--primary-main) 66.03%);
    }
`

export const SectionTree = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
.line-sec {
  width: 38rem;
  height: 2px;
  margin-left: -6rem;
  background: linear-gradient(141.51deg, var(--secundary-main) -18.34%, var(--primary-main) 66.03%);
}
table {
  flex: 1;
  width: 100%;
  border-spacing: 0 0.5rem;
  display: flex;
  flex-direction: column;
  th{
      font-weight: 400;
      padding: 0.6rem 3rem;
      line-height: 1.5rem;
    }
    
    td{
      padding: 0.4rem 3rem;
      border: 0;
      font-weight: 400;
      padding-bottom: 0.6rem;
    }
  h1{
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 1.5rem;
    line-height: 29px;
    color: rgba(0, 0, 0, 0.87);
  }
  p{
    margin-top: 0.56rem;
    font-family: 'Lato';
    font-weight: 400;
    font-size: 1rem;
    line-height: 19px;
    color: rgba(0, 0, 0, 0.87);
  }
  span{
    margin-top: 0.75rem;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 19px;
    color: rgba(0, 0, 0, 0.54);
  }
  progress{
    margin-top: 1.75rem;
    width: 300px;
    height: 15px;
  }
}
`
export const SectionFour = styled.div`
  display: flex;
  gap: 5rem;
  margin-left: -20rem;

  .table{
  margin-left: -7.6rem;
  }
.line-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10rem;
}
.line-height{
  width: 2px;
  height: 6.12rem;
  margin-left: -3.5rem;
  background: linear-gradient(141.51deg, var(--secundary-main) -18.34%, var(--primary-main) 66.03%);
}
.boll{
  margin-left: -3.5rem;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  border: 4px solid #fff;
  background: linear-gradient(141.51deg, var(--secundary-main) -18.34%, var(--primary-main) 66.03%);

}

`