import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getTodo, patchTodo, deleteTodo } from "../apis/todo";
import Button from "../components/Button/button";
import Input from "../components/Input/input";

const TodoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const fetchTodo = async () => {
    try {
      setIsLoading(true);
      const data = await getTodo({ id });
      setTodo(data);
      setEditTitle(data.title);
      setEditContent(data.content);
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, [id]);

  const handleUpdate = async () => {
    try {
      setIsLoading(true);
      await patchTodo({ id, title: editTitle, content: editContent });
      await fetchTodo(); // 상태 갱신
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      await deleteTodo({ id });
      // 삭제 후 목록 페이지로 이동
      navigate("/");
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error!</div>;
  }

  return (
    <Container>
      <Title>Todo Detail</Title>
      {todo && (
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
          <Button onClick={handleUpdate}>수정 완료</Button>
          <Button onClick={handleDelete}>삭제</Button>
        </>
      )}
    </Container>
  );
};

export default TodoDetail;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;
