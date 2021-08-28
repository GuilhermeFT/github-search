import styled from 'styled-components'

export const HeaderContainer = styled.header`
  margin: auto;
  width: 100%;
  height: 360px;

  > div {
    margin: auto;
    max-width: 1440px;
    height: 100%;

    display: grid;
    gap: 4rem;

    transition: display 0.2s;

    svg {
      color: ${props => props.theme.colors.white};
      width: 100%;
      height: 100%;
    }
  }
`
