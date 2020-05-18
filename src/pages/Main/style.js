import styled from 'styled-components';

export const Container = styled.div`
   display: flex; 
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title {
    text-align: center;
    
    h1 {
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 64px;
      margin-top: 54px;
    } 

    h2 {
      margin-top: 18px;
      font-family: 'Roboto Mono', sans-serif;
      font-weight: bold;
      font-size: 36px;
      color: #0DAB76;
    }
  
  }

  .section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 993px;

    img  {
      margin: 92px 0px;
    }

    p {
      text-align: center;
      font-family: 'Roboto Mono', sans-serif;
      font-size: 18px;
      line-height: 35px;
    }
  }
`;

  