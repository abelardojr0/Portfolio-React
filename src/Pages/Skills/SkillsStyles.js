import styled, { keyframes } from "styled-components";
import responsivo, { breakpoints } from "../../Responsivo";

export const SkillsComponent = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;
  box-sizing: border-box;
`;
export const SkillsDivisoria = styled.div`
  width: 100%;
  max-width: 960px;
  display: flex;
  justify-content: center;
  gap: 100px;
  align-items: center;
  ${responsivo(breakpoints.desktop)} {
    max-width: 768px;
  }
  ${responsivo(breakpoints.tablet)} {
    max-width: 480px;
  }
  ${responsivo(breakpoints.mobile)} {
    max-width: 300px;
  }
`;

const movendo = keyframes`
  0% {
    transform: translate3d(0, -30px, 0);
  }
  50% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, -30px, 0);
  }
`;
export const SkillsImagemDetalhe = styled.img`
  max-width: 480px;
  animation: ${movendo} 5s infinite linear;
  ${responsivo(breakpoints.desktop)} {
    display: none;
  }
  ${responsivo(breakpoints.tablet)} {
    display: none;
  }
  ${responsivo(breakpoints.mobile)} {
    display: none;
  }
`;
export const SkillsGrade = styled.ul`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  ${responsivo(breakpoints.desktop)} {
    gap: 30px;
  }
  ${responsivo(breakpoints.tablet)} {
    gap: 20px;
  }
  ${responsivo(breakpoints.mobile)} {
    gap: 10px;
  }
  li {
    background-color: black;
    width: 60px;
    padding: 1rem;
    position: relative;
    border-radius: 10px 15px 15px 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ${responsivo(breakpoints.desktop)} {
      width: 80px;
    }
    ${responsivo(breakpoints.tablet)} {
      width: 80px;
    }
    ${responsivo(breakpoints.mobile)} {
      width: 40px;
    }
    img {
      max-width: 100%;
    }
    &::before {
      content: "";
      width: 10px;
      height: 100%;
      background-color: red;
      border-radius: 15px 0px 0px 15px;
      position: absolute;
      top: 0;
      left: 0;
    }
    &.html {
      &::before {
        background-color: #ff4e1d;
        box-shadow: 10px 10px 30px 5px #ff4e1d;
      }
    }
    &.css {
      &::before {
        background-color: #0074be;
        box-shadow: 10px 10px 30px 5px #0074be;
      }
    }
    &.sass {
      &::before {
        background-color: #d56fa4;
        box-shadow: 10px 10px 30px 5px #d56fa4;
      }
    }
    &.bootstrap {
      &::before {
        background-color: #8c13fd;
        box-shadow: 10px 10px 30px 5px #8c13fd;
      }
    }
    &.js {
      &::before {
        background-color: #f7df1e;
        box-shadow: 10px 10px 30px 5px #f7df1e;
      }
    }
    &.react {
      &::before {
        background-color: #00ccff;
        box-shadow: 10px 10px 30px 5px #00ccff;
      }
    }
    &.typescript {
      &::before {
        background-color: #017acb;
        box-shadow: 10px 10px 30px 5px #017acb;
      }
    }
    &.styled-components {
      &::before {
        background-color: #a06940;
        box-shadow: 10px 10px 30px 5px #a06940;
      }
    }
    &.node {
      &::before {
        background-color: #539e43;
        box-shadow: 10px 10px 30px 5px #539e43;
      }
    }
    &.python {
      &::before {
        background-color: #f8c63d;
        box-shadow: 10px 10px 30px 5px #f8c63d;
      }
    }
    &.mysql {
      &::before {
        background-color: #3765af;
        box-shadow: 10px 10px 30px 5px #3765af;
      }
    }
    &.git {
      &::before {
        background-color: #f05033;
        box-shadow: 10px 10px 30px 5px #f05033;
      }
    }
    &.next {
      &::before {
        background-color: #89dad5;
        box-shadow: 10px 10px 30px 5px #89dad5;
      }
    }
    &.styled_components {
      &::before {
        background-color: #d56fad;
        box-shadow: 10px 10px 30px 5px #d56fad;
      }
    }
    &.flask {
      &::before {
        background-color: #fff;
        box-shadow: 10px 10px 30px 5px #fff;
      }
    }
    &.postgreSQL {
      &::before {
        background-color: #336791;
        box-shadow: 10px 10px 30px 5px #336791;
      }
    }
    &.mongoDB {
      &::before {
        background-color: #60b24f;
        box-shadow: 10px 10px 30px 5px #60b24f;
      }
    }
  }
`;
