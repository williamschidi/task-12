import styled from 'styled-components';
import Header from './container/Header';
import TextArea from './container/TextArea';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 60%;
  margin: 0 auto;
  background: #0b7285;
`;
function App() {
  return (
    <Container>
      <Header />
      <TextArea />
    </Container>
  );
}

export default App;
