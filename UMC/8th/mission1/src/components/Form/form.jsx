import React, { useState } from "react";
import styled from "styled-components";
import { useTodoApi } from "../../hooks/useTodoApi";

const TodoForm = ({ initialData, onSuccess }) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [content, setContent] = useState(initialData?.content || "");
  const { createTodo, updateTodo, isLoading } = useTodoApi();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) return;

    if (initialData) {
      await updateTodo(initialData.id, { title, content });
    } else {
      await createTodo(title, content);
    }

    setTitle("");
    setContent("");
    onSuccess?.();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="제목을 입력해주세요."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={isLoading}
      />
      <Input
        type="text"
        placeholder="내용을 입력해주세요."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={isLoading}
      />
      <Button type="submit" disabled={isLoading || !title || !content}>
        {initialData ? "수정" : "추가"}
      </Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export default TodoForm;
