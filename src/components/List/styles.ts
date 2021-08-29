import styled from 'styled-components'

export const ListContainer = styled.main`
  z-index: 2;
  margin-top: 100px;

  > div {
    width: 100%;
    max-width: 1340px;
    margin: auto;
    height: calc(90vh - 100px);

    animation: fadeIn 0.8s;
  }
`
export const ContentBox = styled.div`
  display: grid;

  grid-template-columns: 25% 1fr;
  gap: 20px;

  > h1 {
    text-align: center;
    grid-area: 1 / 1 / 2 / 3;
    color: ${props => props.theme.colors.white};
  }

  > aside {
    background-color: ${props => props.theme.colors.dark};
    text-align: center;
    padding: 1rem;
    border-radius: 6px;

    a img {
      border-radius: 50%;
      max-width: 200px;
      width: 70%;
    }

    h1 {
      margin: 1rem 0;

      display: grid;
      gap: 0.5rem;

      text-align: left;
      color: ${props => props.theme.colors.white};
      span {
        width: 100%;
      }
      span:first-child {
        font-size: 1.4rem;
      }
      span:last-child {
        color: ${props => props.theme.colors.gray};
        font-size: 1.2rem;
        font-weight: 300;
      }
    }
  }

  > div {
    overflow: auto;
    background-color: ${props => props.theme.colors.dark};
    padding: 12px;
    border-radius: 6px;

    ::-webkit-scrollbar {
      width: 6px;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    div {
      gap: 4px;
      display: grid;
      align-items: center;
      padding: 12px;
      border-radius: 6px;
      background-color: ${props => props.theme.colors.darkBlue};
    }
  }

  .loader {
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;

    background: ${props => `linear-gradient(
      to right,
      ${props.theme.colors.dark} 10%,
      ${props.theme.colors.darkBlue} 18%,
      ${props.theme.colors.dark} 25%
    );`};
    background-size: 2560px 104px;

    a,
    h1 {
      display: none;
    }
  }

  @keyframes placeHolderShimmer {
    0% {
      background-position: -700px 0;
    }
    100% {
      background-position: 600px 0;
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 1080px) {
    grid-template-columns: 30% 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;

    > aside {
      height: fit-content;
      h1 {
        text-align: center;
      }
    }
  }
`
