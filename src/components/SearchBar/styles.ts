import styled, { css } from 'styled-components'

interface SearchContainerProps {
  compact: boolean
}

export const SearchContainer = styled.div<SearchContainerProps>`
  margin: auto;

  width: 100%;

  max-width: 600px;

  ${props =>
    props.compact
      ? css`
          padding: 8px 8px 8px 22px;
          border-radius: 5rem;
          background: ${props => props.theme.colors.darkGray};
        `
      : css`
          transition: background 0.1s 0.2s, border-radius 0.1s 0.2s;
          background: ${props => props.theme.colors.white};
          padding: 6px 6px 6px 8px;
          border-radius: 4px;
        `}

  gap: 10px;
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: space-between;

  input {
    flex: 1;
    background: none;
    border: none;
    font-size: 1.3rem;

    ${props =>
      props.compact
        ? css`
            color: ${props => props.theme.colors.white};
          `
        : css`
            transition: color 0.1s 0.2s;
            color: ${props => props.theme.colors.darkBlue};
          `}

    font-weight: 700;

    outline: none;
    min-width: 15px;
  }

  button {
    width: 4rem;

    ${props =>
      props.compact
        ? css`
            height: 4rem;
            border-radius: 50%;
          `
        : css`
            transition: height 0.1s 0.2s, border-radius 0.1s 0.2s;
            border-radius: 4px;
            height: 2.5rem;
          `}

    border: none;

    padding: 8px;
    background: ${props => props.theme.colors.darkBlue};

    svg {
      fill: ${props => props.theme.colors.white};
      width: 100%;
      height: 100%;
    }
  }
`
