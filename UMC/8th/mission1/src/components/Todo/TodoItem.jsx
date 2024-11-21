import React from "react";
import Button from "../Button/button";
import Input from "../Input/input";
import styled from "styled-components";

function TodoItem({
  todo,
  editingId,
  editText,
  setEditText,
  deleteTodo,
  updateTodo,
  setEditingId,
  onUpdate,
}) {
  const handleCheckboxChange = async () => {
    await updateTodo(todo.id, { checked: !todo.checked });
    onUpdate(); // 목록 새로고침
  };

  return (
    <TodoItemContainer>
      <Checkbox
        type="checkbox"
        checked={todo.checked}
        onChange={handleCheckboxChange}
      />
      {editingId !== todo.id ? (
        <TodoText>
          <TodoId>{todo.id}.</TodoId>
          <TodoTask checked={todo.checked}>{todo.title}</TodoTask>
          <TodoTask checked={todo.checked}>{todo.content}</TodoTask>
        </TodoText>
      ) : (
        <Input value={editText} onChange={(e) => setEditText(e.target.value)} />
      )}
      <Button onClick={() => deleteTodo(todo.id)}>삭제하기</Button>
      {editingId === todo.id ? (
        <Button onClick={() => updateTodo(editingId, editText)}>
          수정 완료
        </Button>
      ) : (
        <Button onClick={() => setEditingId(todo.id)}>수정하기</Button>
      )}
    </TodoItemContainer>
  );
}

export default TodoItem;

export const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

export const TodoText = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TodoId = styled.span`
  font-weight: bold;
  color: #666;
`;

export const TodoTask = styled.span`
  color: ${(props) => (props.checked ? "#888" : "#333")};
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  transition: all 0.2s ease;
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 15px;
  cursor: pointer;
`;
