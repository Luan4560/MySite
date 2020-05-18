import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  max-width: 1920px;
  width: 100%;
  height: 100px;
  background: #1C221B;
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;

  img {
    margin-left: 87.73px;
    height: 150px;
  
  }

  .nav-header ul {
    display: flex;
    align-items: center;
    justify-content: center; 
    margin-right: 48.21;
    
    li {
      margin: 0 24.64px;
      list-style: none; 

      a {
        text-decoration: none;
        font-family: 'Roboto Mono', sans-serif;
        font-size: 24px;
        font-weight: 500;
        letter-spacing: 1px;
        color: #0DAB76;
        transition: 0.3s; 

        &:hover {
          text-shadow: 0px 0px 5px #0DAB76;
        }
      }
    }
  }
`;