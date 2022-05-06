import styled from 'styled-components';

export const Container = styled.div`
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 0 1rem;
  background-color: #FF7C7C;
  height: 3rem;

  .pokeball {
    background-color: red;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }

  .title {
    color: #fdfdfd;
    font-weight: 700;
  }
`

export const Menu = styled.div`
  background-color: #FFA9A9;
  display: flex;
  height: 1.8rem;
  align-items: center;
  padding: 0 1rem 0 1rem;
  gap: 1rem;

  p {
    color: #fdfdfd;
    cursor: pointer;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    padding: 0.2rem;
    border-radius: .5rem;

    :hover {
      background-color: #ff7c7c;
    }
  }

`
