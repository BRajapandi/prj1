import styled from "styled-components";
import bg from "../../asserts/images/bg1.jpg";
const Wrapper = styled.div`
  overflow: hidden;
  .loginTitle {
    margin: 30px 0px 0px 0px;
    text-align: center;
    padding: 0px !important;
  }
  .loginSubTitle {
    display: block;
    color: gray;
    font-weight: 600;
    text-align: center;
    margin-bottom: 30px;
  }
  .forgotstyle a {
    text-decoration: none;
    color: #074b8a;
    border-bottom: 2px solid #074b8a;
  }
  .loginLogo {
    display: none;
  }
  @media all and (max-width: 576px) {
    .loginLogo {
      display: block;
      text-align: center;
      img {
        overflow: hidden;
        margin: 10px 0px 0px 0px;
        width: 140px;
        height: 60px;
      }
    }
    .loginTitle {
      margin: 10px 0px 0px 0px;
    }
  }
`;
export default Wrapper;
