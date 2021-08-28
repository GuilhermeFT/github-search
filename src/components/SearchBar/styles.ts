import styled from 'styled-components'

export const SearchContainer = styled.div`
  margin: auto;
  padding: 8px 8px 8px 22px;

  width: 100%;
  height: 5rem;
  max-width: 600px;

  border-radius: 5rem;
  background: ${props => props.theme.colors.darkGray};

  gap: 10px;
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: space-between;

  input {
    flex: 1;
    background: none;
    border: none;
    font-size: 1.3rem;

    color: ${props => props.theme.colors.white};
    font-weight: 700;

    outline: none;
    min-width: 15px;
  }

  button {
    width: 4rem;
    height: 4rem;

    border-radius: 50%;
    border: none;

    padding: 8px;
    background: ${props => props.theme.colors.darkBlue};

    svg {
      width: 70%;
    }
  }
`
