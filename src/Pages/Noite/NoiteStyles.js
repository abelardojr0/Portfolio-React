import styled from "styled-components";

export const NoiteComponent = styled.section`
  width: 100%;
  height: 100%;
  background: linear-gradient(0, #050318, #000000);
`;

export const NoiteEstrelas = styled.div`
  @keyframes anim-stars {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-150px);
    }
  }

  position: relative;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  box-shadow: calc(50vw - 30px) calc(30vh - 10px) white,
    calc(10vw - 10px) calc(80vh - 20px) white,
    calc(40vw - 20px) calc(120vh - 30px) white,
    calc(90vw - 40px) calc(20vh - 20px) white,
    calc(75vw - 50px) calc(130vh - 40px) white,
    calc(60vw - 30px) calc(50vh - 20px) white,
    calc(30vw - 10px) calc(100vh - 30px) white,
    calc(95vw - 40px) calc(100vh - 20px) white,
    calc(90vw - 40px) calc(105vh - 20px) white,
    calc(95vw - 40px) calc(100vh - 20px) white,
    calc(50vw - 40px) calc(110vh - 20px) white,
    calc(85vw - 40px) calc(90vh - 20px) white,
    calc(70vw - 40px) calc(75vh - 20px) white,
    calc(15vw - 40px) calc(60vh - 20px) white,
    calc(25vw - 40px) calc(60vh - 20px) white,
    calc(35vw - 40px) calc(50vh - 20px) white,
    calc(45vw - 40px) calc(70vh - 20px) white,
    calc(45vw - 40px) calc(30vh - 20px) white,
    calc(20vw - 20px) calc(150vh - 10px) white,
    calc(80vw - 30px) calc(110vh - 30px) white,
    calc(15vw - 10px) calc(140vh - 20px) white,
    calc(60vw - 40px) calc(70vh - 40px) white,
    calc(90vw - 50px) calc(50vh - 10px) white,
    calc(40vw - 30px) calc(120vh - 30px) white,
    calc(70vw - 10px) calc(90vh - 20px) white,
    calc(30vw - 40px) calc(80vh - 20px) white,
    calc(30vw - 40px) calc(80vh - 20px) white,
    calc(10vw - 20px) calc(100vh - 30px) white,
    calc(80vw - 40px) calc(60vh - 20px) white,
    calc(50vw - 10px) calc(130vh - 40px) white,
    calc(65vw - 40px) calc(40vh - 20px) white,
    calc(55vw - 10px) calc(80vh - 30px) white,
    calc(25vw - 40px) calc(90vh - 20px) white,
    calc(45vw - 30px) calc(110vh - 20px) white,
    calc(75vw - 40px) calc(120vh - 40px) white,
    calc(80vw - 20px) calc(100vh - 10px) white,
    calc(10vw - 30px) calc(50vh - 20px) white,
    calc(85vw - 10px) calc(140vh - 30px) white,
    calc(20vw - 40px) calc(60vh - 10px) white,
    calc(40vw - 10px) calc(130vh - 20px) white,
    calc(50vw - 30px) calc(110vh - 40px) white,
    calc(70vw - 20px) calc(80vh - 10px) white,
    calc(90vw - 40px) calc(90vh - 30px) white,
    calc(55vw - 40px) calc(100vh - 20px) white,
    calc(30vw - 20px) calc(70vh - 30px) white,
    calc(65vw - 10px) calc(120vh - 10px) white,
    calc(75vw - 40px) calc(50vh - 20px) white,
    calc(15vw - 30px) calc(130vh - 40px) white,
    calc(35vw - 20px) calc(60vh - 10px) white,
    calc(80vw - 10px) calc(90vh - 30px) white,
    calc(45vw - 40px) calc(80vh - 20px) white,
    calc(25vw - 40px) calc(110vh - 30px) white,
    calc(90vw - 30px) calc(70vh - 20px) white,
    calc(70vw - 20px) calc(140vh - 20px) white,
    calc(40vw - 40px) calc(50vh - 20px) white,
    calc(55vw - 10px) calc(60vh - 30px) white,
    calc(15vw - 30px) calc(90vh - 10px) white,
    calc(65vw - 10px) calc(100vh - 20px) white,
    calc(30vw - 40px) calc(70vh - 30px) white,
    calc(85vw - 40px) calc(120vh - 10px) white,
    calc(25vw - 20px) calc(50vh - 20px) white,
    calc(90vw - 30px) calc(130vh - 40px) white,
    calc(80vw - 10px) calc(60vh - 10px) white,
    calc(35vw - 40px) calc(90vh - 20px) white,
    calc(50vw - 30px) calc(80vh - 30px) white,
    calc(70vw - 20px) calc(110vh - 10px) white,
    calc(40vw - 40px) calc(70vh - 20px) white,
    calc(55vw - 10px) calc(100vh - 30px) white,
    calc(15vw - 30px) calc(120vh - 10px) white,
    calc(65vw - 10px) calc(50vh - 20px) white,
    calc(30vw - 40px) calc(60vh - 30px) white,
    calc(85vw - 40px) calc(90vh - 10px) white,
    calc(25vw - 20px) calc(130vh - 20px) white,
    calc(90vw - 30px) calc(70vh - 30px) white,
    calc(70vw - 20px) calc(140vh - 10px) white,
    calc(40vw - 40px) calc(50vh - 20px) white,
    calc(55vw - 10px) calc(60vh - 30px) white,
    calc(15vw - 30px) calc(90vh - 10px) white,
    calc(65vw - 10px) calc(100vh - 20px) white,
    calc(30vw - 40px) calc(70vh - 30px) white,
    calc(85vw - 40px) calc(120vh - 10px) white,
    calc(25vw - 20px) calc(50vh - 20px) white,
    calc(90vw - 30px) calc(130vh - 40px) white;

  &::after {
    content: " ";
    position: absolute;
    top: 100vh;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    box-shadow: calc(50vw - 30px) calc(30vh - 10px) white,
      calc(10vw - 10px) calc(80vh - 20px) white,
      calc(40vw - 20px) calc(120vh - 30px) white,
      calc(90vw - 40px) calc(20vh - 20px) white,
      calc(75vw - 50px) calc(130vh - 40px) white,
      calc(60vw - 30px) calc(50vh - 20px) white,
      calc(30vw - 10px) calc(100vh - 30px) white,
      calc(95vw - 40px) calc(100vh - 20px) white,
      calc(90vw - 40px) calc(105vh - 20px) white,
      calc(95vw - 40px) calc(100vh - 20px) white,
      calc(50vw - 40px) calc(110vh - 20px) white,
      calc(85vw - 40px) calc(90vh - 20px) white,
      calc(70vw - 40px) calc(75vh - 20px) white,
      calc(15vw - 40px) calc(60vh - 20px) white,
      calc(25vw - 40px) calc(60vh - 20px) white,
      calc(35vw - 40px) calc(50vh - 20px) white,
      calc(45vw - 40px) calc(70vh - 20px) white,
      calc(45vw - 40px) calc(30vh - 20px) white,
      calc(20vw - 20px) calc(150vh - 10px) white,
      calc(80vw - 30px) calc(110vh - 30px) white,
      calc(15vw - 10px) calc(140vh - 20px) white,
      calc(60vw - 40px) calc(70vh - 40px) white,
      calc(90vw - 50px) calc(50vh - 10px) white,
      calc(40vw - 30px) calc(120vh - 30px) white,
      calc(70vw - 10px) calc(90vh - 20px) white,
      calc(30vw - 40px) calc(80vh - 20px) white,
      calc(30vw - 40px) calc(80vh - 20px) white,
      calc(10vw - 20px) calc(100vh - 30px) white,
      calc(80vw - 40px) calc(60vh - 20px) white,
      calc(50vw - 10px) calc(130vh - 40px) white,
      calc(65vw - 40px) calc(40vh - 20px) white,
      calc(55vw - 10px) calc(80vh - 30px) white,
      calc(25vw - 40px) calc(90vh - 20px) white,
      calc(45vw - 30px) calc(110vh - 20px) white,
      calc(75vw - 40px) calc(120vh - 40px) white,
      calc(80vw - 20px) calc(100vh - 10px) white,
      calc(10vw - 30px) calc(50vh - 20px) white,
      calc(85vw - 10px) calc(140vh - 30px) white,
      calc(20vw - 40px) calc(60vh - 10px) white,
      calc(40vw - 10px) calc(130vh - 20px) white,
      calc(50vw - 30px) calc(110vh - 40px) white,
      calc(70vw - 20px) calc(80vh - 10px) white,
      calc(90vw - 40px) calc(90vh - 30px) white,
      calc(55vw - 40px) calc(100vh - 20px) white,
      calc(30vw - 20px) calc(70vh - 30px) white,
      calc(65vw - 10px) calc(120vh - 10px) white,
      calc(75vw - 40px) calc(50vh - 20px) white,
      calc(15vw - 30px) calc(130vh - 40px) white,
      calc(35vw - 20px) calc(60vh - 10px) white,
      calc(80vw - 10px) calc(90vh - 30px) white,
      calc(45vw - 40px) calc(80vh - 20px) white,
      calc(25vw - 40px) calc(110vh - 30px) white,
      calc(90vw - 30px) calc(70vh - 20px) white,
      calc(70vw - 20px) calc(140vh - 20px) white,
      calc(40vw - 40px) calc(50vh - 20px) white,
      calc(55vw - 10px) calc(60vh - 30px) white,
      calc(15vw - 30px) calc(90vh - 10px) white,
      calc(65vw - 10px) calc(100vh - 20px) white,
      calc(30vw - 40px) calc(70vh - 30px) white,
      calc(85vw - 40px) calc(120vh - 10px) white,
      calc(25vw - 20px) calc(50vh - 20px) white,
      calc(90vw - 30px) calc(130vh - 40px) white,
      calc(80vw - 10px) calc(60vh - 10px) white,
      calc(35vw - 40px) calc(90vh - 20px) white,
      calc(50vw - 30px) calc(80vh - 30px) white,
      calc(70vw - 20px) calc(110vh - 10px) white,
      calc(40vw - 40px) calc(70vh - 20px) white,
      calc(55vw - 10px) calc(100vh - 30px) white,
      calc(15vw - 30px) calc(120vh - 10px) white,
      calc(65vw - 10px) calc(50vh - 20px) white,
      calc(30vw - 40px) calc(60vh - 30px) white,
      calc(85vw - 40px) calc(90vh - 10px) white,
      calc(25vw - 20px) calc(130vh - 20px) white,
      calc(90vw - 30px) calc(70vh - 30px) white,
      calc(70vw - 20px) calc(140vh - 10px) white,
      calc(40vw - 40px) calc(50vh - 20px) white,
      calc(55vw - 10px) calc(60vh - 30px) white,
      calc(15vw - 30px) calc(90vh - 10px) white,
      calc(65vw - 10px) calc(100vh - 20px) white,
      calc(30vw - 40px) calc(70vh - 30px) white,
      calc(85vw - 40px) calc(120vh - 10px) white,
      calc(25vw - 20px) calc(50vh - 20px) white,
      calc(90vw - 30px) calc(130vh - 40px) white;
  }
  animation: anim-stars 60s linear infinite;
`;
export const NoiteEstrelasMenores = styled.div`
  /* @keyframes anim-stars {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-150px);
    }
  } */
  @keyframes blink-animation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  position: relative;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  box-shadow: calc(10vw) calc(10vh) white, calc(15vw) calc(20vh) white,
    calc(13vw) calc(13vh) white, calc(18vw) calc(23vh) white,
    calc(20vw) calc(30vh) white, calc(25vw) calc(40vh) white,
    calc(30vw) calc(50vh) white, calc(35vw) calc(60vh) white,
    calc(40vw) calc(70vh) white, calc(45vw) calc(80vh) white,
    calc(50vw) calc(90vh) white, calc(55vw) calc(100vh) white,
    calc(60vw) calc(110vh) white, calc(65vw) calc(120vh) white,
    calc(70vw) calc(130vh) white, calc(75vw) calc(140vh) white,
    calc(80vw) calc(150vh) white, calc(85vw) calc(160vh) white,
    calc(90vw) calc(170vh) white, calc(95vw) calc(180vh) white,
    calc(50vw - 30px) calc(30vh - 10px) white,
    calc(10vw - 10px) calc(80vh - 20px) white,
    calc(40vw - 20px) calc(120vh - 30px) white,
    calc(90vw - 40px) calc(20vh - 20px) white,
    calc(75vw - 50px) calc(130vh - 40px) white,
    calc(60vw - 30px) calc(50vh - 20px) white,
    calc(30vw - 10px) calc(100vh - 30px) white,
    calc(95vw - 40px) calc(100vh - 20px) white,
    calc(90vw - 40px) calc(105vh - 20px) white,
    calc(95vw - 40px) calc(100vh - 20px) white,
    calc(50vw - 40px) calc(110vh - 20px) white,
    calc(85vw - 40px) calc(90vh - 20px) white,
    calc(70vw - 40px) calc(75vh - 20px) white,
    calc(15vw - 40px) calc(60vh - 20px) white,
    calc(25vw - 40px) calc(60vh - 20px) white,
    calc(35vw - 40px) calc(50vh - 20px) white,
    calc(45vw - 40px) calc(70vh - 20px) white,
    calc(45vw - 40px) calc(30vh - 20px) white;

  /* animation: anim-stars 60s linear infinite; */
  animation: blink-animation 1s infinite;
  &::after {
    content: " ";
    position: absolute;
    top: 150px;
    width: 1px;
    height: 1px;
    border-radius: 50%;
    box-shadow: calc(10vw) calc(10vh) white, calc(15vw) calc(20vh) white,
      calc(13vw) calc(13vh) white, calc(18vw) calc(23vh) white,
      calc(20vw) calc(30vh) white, calc(25vw) calc(40vh) white,
      calc(30vw) calc(50vh) white, calc(35vw) calc(60vh) white,
      calc(40vw) calc(70vh) white, calc(45vw) calc(80vh) white,
      calc(50vw) calc(90vh) white, calc(55vw) calc(100vh) white,
      calc(60vw) calc(110vh) white, calc(65vw) calc(120vh) white,
      calc(70vw) calc(130vh) white, calc(75vw) calc(140vh) white,
      calc(80vw) calc(150vh) white, calc(85vw) calc(160vh) white,
      calc(90vw) calc(170vh) white, calc(95vw) calc(180vh) white,
      calc(50vw - 30px) calc(30vh - 10px) white,
      calc(10vw - 10px) calc(80vh - 20px) white,
      calc(40vw - 20px) calc(120vh - 30px) white,
      calc(90vw - 40px) calc(20vh - 20px) white,
      calc(75vw - 50px) calc(130vh - 40px) white,
      calc(60vw - 30px) calc(50vh - 20px) white,
      calc(30vw - 10px) calc(100vh - 30px) white,
      calc(95vw - 40px) calc(100vh - 20px) white,
      calc(90vw - 40px) calc(105vh - 20px) white,
      calc(95vw - 40px) calc(100vh - 20px) white,
      calc(50vw - 40px) calc(110vh - 20px) white,
      calc(85vw - 40px) calc(90vh - 20px) white,
      calc(70vw - 40px) calc(75vh - 20px) white,
      calc(15vw - 40px) calc(60vh - 20px) white,
      calc(25vw - 40px) calc(60vh - 20px) white,
      calc(35vw - 40px) calc(50vh - 20px) white,
      calc(45vw - 40px) calc(70vh - 20px) white,
      calc(45vw - 40px) calc(30vh - 20px) white;
  }
`;
