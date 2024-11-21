import styled from "styled-components";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import TodoList from "./pages/TodoList";
import TodoDetail from "./pages/TodoDetail";
import { useEffect, useState } from "react";
import Button from "./components/Button/button";
import Form from "./components/Form/form";
import Input from "./components/Input/input";
import { useDebounce } from "./hooks/useDebounce";
import {
  getTodo,
  postTodo,
  getTodoList,
  patchTodo,
  deleteTodo,
} from "./apis/todo";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  const navigate = useNavigate();

  const fetchTodos = async () => {
    try {
      setIsLoading(true);
      const response = await getTodoList({ title: debouncedSearch });
      setTodos(response[0]);
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [debouncedSearch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await postTodo({ title, content });
      setTitle("");
      setContent("");
      await fetchTodos(); // 목록 새로고침
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheckboxChange = async (id, checked) => {
    try {
      setIsLoading(true);
      await patchTodo({ id, checked });
      await fetchTodos(); // 상태 갱신
    } catch (error) {
      console.error("체크박스 업데이트 중 오류 발생", error);
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (todo) => {
    setEditingId(todo.id);
    setEditTitle(todo.title);
    setEditContent(todo.content);
  };

  const handleUpdate = async (id) => {
    try {
      setIsLoading(true);
      await patchTodo({ id, title: editTitle, content: editContent });
      setEditingId(null);
      await fetchTodos(); // 상태 갱신
    } catch (error) {
      console.error("수정 중 오류 발생", error);
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setIsLoading(true);
      await deleteTodo({ id });
      await fetchTodos(); // 상태 갱신
    } catch (error) {
      console.error("삭제 중 오류 발생", error);
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTodoClick = (id) => {
    navigate(`/todo/${id}`);
  };

  return (
    <Container>
      <Title> 💖 Todo List 💖 </Title>
      <Form onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="제목으로 검색..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Input
          name="title"
          placeholder="제목을 입력해주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          name="content"
          placeholder="내용을 입력해주세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button type="submit" disabled={isLoading || !title || !content}>
          추가
        </Button>
      </Form>
      {isLoading && <LoadingSpinner />}
      {isError && (
        <ErrorMessage>에러가 발생했습니다: {isError.message}</ErrorMessage>
      )}
      {todos?.map((todo) => (
        <div key={todo.id}>
          <TodoListContainer>
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={() => handleCheckboxChange(todo.id, !todo.checked)}
              disabled={isLoading}
            />
            <p>{todo.id}</p>
            <TodoItemContainer onClick={() => handleTodoClick(todo.id)}>
              {editingId === todo.id ? (
                <>
                  <Input
                    name="editTitle"
                    placeholder="제목을 입력해주세요."
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  <Input
                    name="editContent"
                    placeholder="내용을 입력해주세요."
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                  />
                  <Button
                    onClick={() => handleUpdate(todo.id)}
                    disabled={isLoading}
                  >
                    수정 완료
                  </Button>
                </>
              ) : (
                <>
                  <p>{todo.title}</p>
                  <p>{todo.content}</p>
                  <Button onClick={() => handleEdit(todo)} disabled={isLoading}>
                    수정
                  </Button>
                </>
              )}
            </TodoItemContainer>
            <Button onClick={() => handleDelete(todo.id)} disabled={isLoading}>
              삭제
            </Button>
          </TodoListContainer>
        </div>
      ))}
    </Container>
  );
}

const AppWrapper = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/todo/:id" element={<TodoDetail />} />
    </Routes>
  </BrowserRouter>
);

export default AppWrapper;

const TodoItemContainer = styled.div`
  width: 100%;
  cursor: pointer;
`;

const TodoListContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const SearchInput = styled.input`
  width: 50%;
  padding: 10px;
  margin: 20px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #22a6b3;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  margin-top: 20px;
`;
