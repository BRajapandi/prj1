import styled from "styled-components";
import bg from "../../asserts/images/bg1.jpg";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .forgotTitle {
    text-align: center;
    padding: 0px !important;
  }
  .forgotSubTitle {
    display: block;
    color: gray;
    font-weight: 600;
    text-align: center;
    margin-bottom: 30px;
  }
  .wrapperOtp {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
  }
  .forgotLogo {
    display: none;
  }
  .forgotLogo {
    display: none;
  }
  @media all and (max-width: 576px) {
    justify-content: flex-start;
    .forgotLogo {
      display: inline-block;
      overflow: hidden;
      margin: 20px 0px;
      width: 140px;
      height: 60px;
    }
  }
`;
export default Wrapper;
