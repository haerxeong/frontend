import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useTodoApi } from "../hooks/useTodoApi";
import { debounce } from "lodash";
import TodoForm from "../components/Form/form";
import TodoItem from "../components/Item/item";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [editingId, setEditingId] = useState("");
  const [editText, setEditText] = useState("");
  const { getTodos, isLoading, error } = useTodoApi();
  const navigate = useNavigate();

  const debouncedSearch = debounce((title) => {
    fetchTodos(title);
  }, 500);

  const fetchTodos = async (title = "") => {
    const data = await getTodos(title);
    setTodos(data[0]);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSearch = (e) => {
    setSearchTitle(e.target.value);
    debouncedSearch(e.target.value);
  };

  if (isLoading) return <Loading>로딩중...</Loading>;
  if (error) return <Error>{error}</Error>;

  return (
    <Container>
      <Title> 💖 Todo List 💖 </Title>
      <TodoForm onSuccess={() => fetchTodos()} />
      <SearchInput
        type="text"
        placeholder="제목으로 검색..."
        value={searchTitle}
        onChange={handleSearch}
      />
      <TodoListContainer>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            editingId={editingId}
            editText={editText}
            setEditText={setEditText}
            setEditingId={setEditingId}
            onUpdate={() => fetchTodos()}
            onDelete={() => fetchTodos()}
            onClick={() => navigate(`/todo/${todo.id}`)}
          />
        ))}
      </TodoListContainer>
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 20px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Loading = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 18px;
`;

const Error = styled.div`
  color: red;
  text-align: center;
  padding: 20px;
`;

export default TodoList;
