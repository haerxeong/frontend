import styled from "styled-components";

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
