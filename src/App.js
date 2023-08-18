import './App.css'
import styled from 'styled-components';
import Employment from './pages/Employment';
import Home from './pages/Home';
import Settings from './pages/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Container = styled.div`

`
const Wrapper = styled.div``


const App = () => {
  return (
    <Container>
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employment" element={<Employment />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </Container>
  );
}

export default App
