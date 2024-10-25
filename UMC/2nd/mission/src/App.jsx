import { useState } from "react";
import "./App.css";
import Button from "./components/button";
import Input from "./components/Input";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "ㅇㅇㅇ" },
    { id: 2, task: "ddd" },
  ]);

  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState("");
  const [editText, setEditText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText("");
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId("");
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <Button onClick={addTodo}>할 일 등록</Button>
      </form>

      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            {editingId !== todo.id ? (
              <div className="todo-text">
                <p className="todo-id">{todo.id}.</p>
                <p className="todo-task">{todo.task}</p>
              </div>
            ) : (
              <Input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            )}
            <Button onClick={() => deleteTodo(todo.id)}>삭제하기</Button>

            {editingId === todo.id ? (
              <Button onClick={() => updateTodo(editingId, editText)}>
                수정 완료
              </Button>
            ) : (
              <Button onClick={() => setEditingId(todo.id)}>수정 진행</Button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
