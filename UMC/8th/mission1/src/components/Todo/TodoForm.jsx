import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Input/input";
import Button from "../Button/button";
import { postTodo } from "../../apis/todo";

const TodoForm = ({ onSuccess }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) return;

    try {
      setIsSubmitting(true);
      await postTodo({ title, content });
      setTitle("");
      setContent("");
      onSuccess?.();
    } catch (error) {
      console.error("Todo 생성 실패:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={isSubmitting}
      />
      <Input
        placeholder="내용을 입력하세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={isSubmitting}
      />
      <ButtonGroup>
        <Button type="submit" disabled={isSubmitting || !title || !content}>
          {isSubmitting ? "추가 중..." : "추가하기"}
        </Button>
      </ButtonGroup>
    </Form>
  );
};

export default TodoForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
