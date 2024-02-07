import styled from "styled-components";
import bg from "../../asserts/images/bg1.jpg";

const Wrapped = styled.div`
  height: 100%;
  width: 100%;
  background-color: #1976d3;
  .container-fluid {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${bg}), #1976d3;
    background-blend-mode: screen; // lighten screen 2 luminosity
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    .row {
      min-height: 60vh;
      width: 60vw;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0px 0px 4px lightgray;
      .loginLeftCard {
        overflow: hidden;
        position: relative;
        .logoStyle img {
          overflow: hidden;
          margin: 10px 0px 0px 0px;
          width: 40%;
          height: 20%;
        }
        .iconStyle svg {
          position: absolute;
          bottom: 20px;
          height: 70%;
          width: 100%;
        }
      }
    }
  }

  @media all and (max-width: 1024px) {
    .container-fluid {
      .loginLeftCard {
        display: inline-block;
      }
      .row {
        min-height: 60vh;
        width: 80vw;
      }
    }
  }
  @media all and (max-width: 768px) {
    .container-fluid {
      .row {
        min-height: 60vh;
        width: 90vw;
      }
    }
  }
  @media all and (max-width: 576px) {
    .container-fluid {
      .row {
        .loginLeftCard {
          display: none;
        }
      }
    }
  }
`;

export default Wrapped;
