import styled from "styled-components";

const Wrapped = styled.div`
  .centerFlex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  header {
    font-size: 24px;
    color: #074b8a;
    font-weight: 700;
    letter-spacing: 1px;
    margin: 10px;
  }
  .ProductsImgUploader {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 160px));
    gap: 20px;
  }
  .btn {
    padding: 6px 10px;
    border-radius: 8px;
    margin: 3px;
  }
  .clear,
  .upload {
    background-color: #074b8a;
    color: white;
  }
`;

export default Wrapped;
