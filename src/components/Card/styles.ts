import styled, { css } from 'styled-components'

interface CardContainerProps {
  expand: boolean
}

export const CardContainer = styled.div<CardContainerProps>`
  display: grid;
  grid-template-columns: 1fr auto;
  transition: height 0.2s ease, box-shadow 0.2s;

  :hover {
    box-shadow: 0 0 10px #2c2d38;
  }

  ${props =>
    !props.expand
      ? css`
          grid-template-areas: 'title arrow' 'desc arrow';
          height: 74px;
          hr {
            display: none !important;
          }
          ul {
            display: none !important;
          }
          a {
            display: none !important;
          }
        `
      : css`
          grid-template-areas: 'title arrow' 'desc arrow' 'hr hr' 'ul button';
          height: 156px;
        `}

  & + div {
    margin: 12px 0;
  }

  h2 {
    grid-area: title;
    color: ${props => props.theme.colors.white};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  p {
    grid-area: desc;
    color: ${props => props.theme.colors.gray};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  svg {
    ${props =>
      props.expand &&
      css`
        transform: rotate(180deg);
      `}
    cursor: pointer;
    grid-area: arrow;
    fill: ${props => props.theme.colors.white};
    justify-self: end;
  }

  hr {
    margin: 10px 0;
    grid-area: hr;
    border-color: gray;
  }

  ul {
    grid-area: ul;
    display: flex;
    list-style-type: none;

    li {
      text-align: center;
      padding: 6px 10px 10px 10px;
      display: grid;
      color: ${props => props.theme.colors.white};

      span {
        font-size: 0.8rem;
        color: gray;
      }
    }
  }

  a {
    border: none;
    border-radius: 4px;
    padding: 10px 18px;
    grid-area: button;
    background: ${props => props.theme.colors.dark};
    color: ${props => props.theme.colors.white};
    font-weight: 600;
    font-size: 0.9rem;
  }
`
