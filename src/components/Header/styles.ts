import styled, { css } from 'styled-components'

interface HeaderStyleProps {
  hiddenBar: boolean
}

export const HeaderContainer = styled.header<HeaderStyleProps>`
  position: absolute;

  left: 0;
  right: 0;

  width: 100%;

  transition: top 1s ease;

  ${props =>
    props.hiddenBar
      ? css`
          top: 0;
          height: 100px;
        `
      : css`
          top: 50%;
          height: 360px;
          transform: translate(0, -50%);
        `}

  > div {
    margin: auto;

    > svg {
      margin: auto;
      color: ${props => props.theme.colors.white};

      ${props =>
        props.hiddenBar
          ? css`
              transition: width 0s 0.2s, height 0s 0.2s;
              width: 4.5rem;
              height: 4.5rem;
            `
          : css`
              transition: width 0.09s 0.151s, height 0.09s 0.151s;
              width: 15rem;
              height: 15rem;
            `}
    }
  }

  > div:first-child {
    height: 100%;
    max-width: 1440px;

    display: grid;
    gap: 4rem;

    transition: opacity 0.2s;

    ${props =>
      props.hiddenBar
        ? css`
            opacity: 0;
          `
        : css`
            opacity: 1;
          `}
  }

  > div:last-child {
    position: absolute;
    max-width: 1240px;

    padding: 10px;

    top: 0;
    left: 0;
    right: 0;
    height: 100px;

    gap: 10px;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;

    > svg {
      color: ${props => props.theme.colors.white};
    }

    ${props =>
      props.hiddenBar
        ? css`
            opacity: 1;
            transition: opacity 0.2s 0.2s;
          `
        : css`
            opacity: 0;
            transition: opacity 0.2s;
          `}
  }
`
