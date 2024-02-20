import styled from "styled-components";

const Wrapped = styled.div`
  box-sizing: border-box;
  background-color: #074b8a;
  height: 100vh;
  width: 100vw;
  padding: 15px;
  .header {
    height: calc(12vh - 30px);
    margin-bottom: 15px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 1px 1px 4px lightgrey;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .imgWrapper {
      width: 150px;
    }
    .logout {
      cursor: pointer;
      color: #074b8a;
      font-weight: 800;
      font-size: 16px;
      background-color: lightgray;
      padding: 5px;
      border-radius: 5px;
      svg {
        stroke-width: 60px !important;
      }
    }
  }
  .NavBody {
    display: grid;
    grid-template-columns: 20% calc(80% - 10px);
    grid-auto-flow: column;
    gap: 0px 10px;
    height: calc(88vh - 15px);
    .sideNav .title {
      color: #074b8a;
      font-size: 20px;
      font-weight: 600;
      margin: 10px 10px 0px 15px;
      .closeIcon {
        visibility: hidden;
      }
    }
  }
  .sideNav {
    background-color: white;
    border-radius: 8px;
    box-shadow: 1px 1px 4px lightgrey;
    .nav-list {
      display: flex;
      flex-direction: column;
      padding: 10px 7px;
      .navlink {
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 7px 3px;
        color: #074b8a;
        font-size: 18px;
        font-weight: 600;
        border-radius: 3px;
        margin-bottom: 3px;
        &:hover {
          transition: ease 200ms;
          color: black;
          background-color: lightgray;
          border-left: 4px solid black;
        }
      }
      .active {
        color: black;
      }
    }
  }
  .outlet {
    overflow-y: auto;
    background-color: white;
    border-radius: 8px;
    box-shadow: 1px 1px 4px lightgrey;
  }
  .hambergerWrapper {
    display: none;
  }
  @media all and (max-width: 768px) {
    .hambergerWrapper {
      display: inline-block;
    }
    .NavBody {
      display: grid;
      grid-template-columns: 100%;
      grid-auto-flow: column;
      height: calc(88vh - 15px);
    }
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .sideNav {
      /* display: none; */
      transition: all 1s ease-in-out;
      position: fixed;
      top: 0px;
      left: -210px;
      background-color: white;
      border-radius: 0px;
      box-shadow: 1px 1px 4px lightgrey;
      height: 100%;
      width: 200px;
      z-index: 1;
      .nav-list {
        display: flex;
        flex-direction: column;
        padding: 10px 7px;
        .navlink {
          display: flex;
          align-items: center;
          text-decoration: none;
          padding: 7px 3px;
          color: #074b8a;
          font-size: 18px;
          font-weight: 600;
          border-radius: 3px;
          margin-bottom: 3px;
          &:hover {
            transition: ease 200ms;
            color: black;
            background-color: lightgray;
            border-left: 4px solid black;
          }
        }
        .active {
          color: black;
        }
      }
    }
    .toggled {
      left: 0px;
      transition: all 1s ease-in-out;
    }
    .closeIcon {
      visibility: visible;
    }
  }
  @media all and (max-width: 576px) {
  }
`;
export default Wrapped;
