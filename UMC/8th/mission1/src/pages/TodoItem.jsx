import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useTodoApi } from "../../hooks/useTodoApi";

const TodoItem = ({ todo, onUpdate }) => {
  const navigate = useNavigate();
  const { updateTodo, deleteTodo } = useTodoApi();

  const handleCheckboxChange = async () => {
    await updateTodo(todo.id, { checked: !todo.checked });
    onUpdate();
  };

  const handleDelete = async () => {
    await deleteTodo(todo.id);
    onUpdate();
  };

  return (
    <ItemContainer>
      <Checkbox
        type="checkbox"
        checked={todo.checked}
        onChange={handleCheckboxChange}
      />
      <Content onClick={() => navigate(`/todo/${todo.id}`)}>
        <Title checked={todo.checked}>{todo.title}</Title>
        <Description>{todo.content}</Description>
      </Content>
      <ButtonGroup>
        <EditButton onClick={() => navigate(`/todo/${todo.id}`)}>
          수정
        </EditButton>
        <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
      </ButtonGroup>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
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

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 15px;
  cursor: pointer;
`;

const Content = styled.div`
  flex: 1;
  cursor: pointer;
`;

const Title = styled.h3`
  margin: 0;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  color: ${(props) => (props.checked ? "#888" : "#333")};
`;

const Description = styled.p`
  margin: 5px 0 0;
  font-size: 14px;
  color: #666;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const EditButton = styled(Button)`
  background-color: #4caf50;
  color: white;
`;

const DeleteButton = styled(Button)`
  background-color: #ff1b6d;
  color: white;
`;

export default TodoItem;
