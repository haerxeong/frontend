import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./pages/TodoList/TodoList";
import TodoDetail from "./pages/TodoDetail";
import styled from "styled-components";

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Routes>
          <Route path="/todo" element={<TodoList />} />
          <Route path="/todo/:id" element={<TodoDetail />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
