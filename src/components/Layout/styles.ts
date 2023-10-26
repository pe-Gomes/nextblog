import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  overflow: hidden;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
  }
`
export const BlurBackgroundLeft = styled.div`
  position: fixed;
  top: 20px;
  transform: translateX(-45%);
  background-attachment: fixed;

  background-image: radial-gradient(at 71% 77%, #7d7aff 0, transparent 21%),
    radial-gradient(at 36% 47%, #00fff0 0, transparent 50%),
    radial-gradient(at 54% 29%, #00fff0 0, transparent 28%),
    radial-gradient(at 45% 51%, #7d7aff 0, transparent 53%),
    radial-gradient(at 73% 44%, #2121e2 0, transparent 54%),
    radial-gradient(at 24% 7%, #2121e2 0, transparent 40%),
    radial-gradient(at 76% 46%, #7d7aff 0, transparent 50%);

  filter: blur(44px);

  max-height: 800px;
  height: 70vh;
  max-width: 1400px;
  width: 100%;
  z-index: -1;
`
export const BlurBackgroundRight = styled.div`
  position: fixed;
  top: 20px;
  transform: translateX(45%) rotate(190deg);
  background-attachment: fixed;

  background-image: radial-gradient(at 71% 77%, #f832ee 0, transparent 21%),
    radial-gradient(at 36% 47%, #00aaff 0, transparent 50%),
    radial-gradient(at 54% 29%, #00aaff 0, transparent 28%),
    radial-gradient(at 45% 51%, #f832ee 0, transparent 53%),
    radial-gradient(at 73% 44%, #7d7aff 0, transparent 54%),
    radial-gradient(at 24% 7%, #7d7aff 0, transparent 40%),
    radial-gradient(at 76% 46%, #f832ee 0, transparent 50%);

  filter: blur(44px);

  max-height: 800px;
  height: 70vh;
  max-width: 1400px;
  width: 100%;
  z-index: -1;
`
