import styled from "styled-components";

const Wrapped = styled.div`
  .changePinTitle {
    margin: 30px 0px 0px 0px;
    text-align: center;
    padding: 0px !important;
  }
  .changePinSubTitle {
    display: block;
    color: gray;
    font-weight: 600;
    text-align: center;
    margin-bottom: 30px;
  }
  .confirmLogo {
    display: none;
  }
  @media all and (max-width: 576px) {
    .confirmLogo {
      display: block;
      text-align: center;
      img {
        overflow: hidden;
        margin: 20px 0px;
        width: 140px;
        height: 60px;
      }
    }
    .changePinTitle {
      margin: 10px 0px 0px 0px;
    }
  }
`;

export default Wrapped;
