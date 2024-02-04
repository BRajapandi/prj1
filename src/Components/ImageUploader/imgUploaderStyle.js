import styled from "styled-components";

const Wrapped = styled.div`
  margin-top: 8px;
  border: 1px dotted gray;
  border-radius: 8px;
  display: inline-block;
  .UploaderImage {
    position: relative;
    height: 150px;
    width: 150px;
    background-color: lightgray;
    border: 1px dotted gray;
    margin: 4px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 40px;
    }
    .deleteIcon {
      position: absolute;
      bottom: 5px;
      right: 5px;
      color: red;
      svg {
        font-size: 20px;
      }
    }
  }
`;
export default Wrapped;
