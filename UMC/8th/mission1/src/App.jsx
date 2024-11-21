import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./pages/TodoList";
import TodoDetail from "./pages/TodoDetail";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, content);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="제목을 입력해주세요."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        name="content"
        placeholder="내용을 입력해주세요."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">추가</button>
    </form>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/todo" element={<TodoList />} />
    //     <Route path="/todo/:id" element={<TodoDetail />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
