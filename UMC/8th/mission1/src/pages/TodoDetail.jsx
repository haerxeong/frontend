import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useTodoApi } from "../hooks/useTodoApi";
import TodoForm from "../components/Form/form";

const TodoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getTodoById, deleteTodo, updateTodo, isLoading, error } =
    useTodoApi();
  const [todo, setTodo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchTodo = async () => {
      const data = await getTodoById(id);
      setTodo(data);
    };
    fetchTodo();
  }, [id]);

  const handleDelete = async () => {
    await deleteTodo(id);
    navigate("/todo");
  };

  const handleUpdate = async () => {
    setIsEditing(true);
  };

  const handleUpdateSuccess = () => {
    setIsEditing(false);
    navigate("/todo");
  };

  if (isLoading) return <Loading>로딩중...</Loading>;
  if (error) return <Error>{error}</Error>;
  if (!todo) return null;

  return (
    <Container>
      {isEditing ? (
        <TodoForm initialData={todo} onSuccess={handleUpdateSuccess} />
      ) : (
        <>
          <Header>
            <Title>{todo.title}</Title>
            <StatusBadge checked={todo.checked}>
              {todo.checked ? "완료" : "진행중"}
            </StatusBadge>
          </Header>
          <Content>{todo.content}</Content>
          <TimeInfo>
            <div>생성: {new Date(todo.createdAt).toLocaleString()}</div>
            <div>수정: {new Date(todo.updatedAt).toLocaleString()}</div>
          </TimeInfo>
          <ButtonGroup>
            <Button onClick={handleUpdate}>수정</Button>
            <Button onClick={handleDelete} variant="danger">
              삭제
            </Button>
            <Button onClick={() => navigate("/todo")} variant="secondary">
              목록으로
            </Button>
          </ButtonGroup>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  margin: 0;
  color: #333;
`;

const StatusBadge = styled.span`
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${(props) => (props.checked ? "#4CAF50" : "#ff1b6d")};
  color: white;
`;

const Content = styled.p`
  margin: 20px 0;
  line-height: 1.6;
  color: #666;
`;

const TimeInfo = styled.div`
  margin: 20px 0;
  color: #888;
  font-size: 14px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${(props) => {
    if (props.variant === "danger") return "#ff1b6d";
    if (props.variant === "secondary") return "#6c757d";
    return "#4CAF50";
  }};
  color: white;

  &:hover {
    opacity: 0.9;
  }
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

export default TodoDetail;
