import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDebounce } from "../../hooks/useDebounce";
import { getTodoList } from "../../apis/todo";
import TodoForm from "../../components/Todo/TodoForm";
import TodoItem from "../../components/Todo/TodoItem";
import { LoadingSpinner } from "../../components/LoadingSpinner/loadingSpinner";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setIsLoading(true);
        const data = await getTodoList({ title: debouncedSearch });
        setTodos(data[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodos();
  }, [debouncedSearch]);

  if (error) {
    return <EmptyMessage>에러가 발생했습니다: {error}</EmptyMessage>;
  }

  return (
    <>
      <h1>📝 Todo List</h1>
      <TodoForm onSuccess={() => fetchTodos()} />
      <SearchInput
        type="text"
        placeholder="제목으로 검색..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {isLoading ? (
        <LoadingSpinner />
      ) : todos.length > 0 ? (
        <TodoListContainer>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onUpdate={() => fetchTodos()}
              onDelete={() => fetchTodos()}
            />
          ))}
        </TodoListContainer>
      ) : (
        <EmptyMessage>
          {search ? "검색 결과가 없습니다." : "할 일을 추가해보세요!"}
        </EmptyMessage>
      )}
    </>
  );
};

export default TodoList;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 20px;

  &:focus {
    outline: none;
    border-color: #ff1b6d;
  }
`;

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: #666;
  margin: 40px 0;
`;
