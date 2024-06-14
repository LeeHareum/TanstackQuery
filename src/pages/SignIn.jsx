import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../lib/api/auth";

export const Container = styled.main`
  max-width: 800px;
  width: 500px;
  height: 500px;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 15px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    margin-bottom: 5px;
    font-size: 14px;
    color: #333;
    text-align: left;
  }

  input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
  }
`;

export const Title = styled.p`
  font-size: x-large;
  margin: 50px;
`;

export const InputTitle = styled.p`
  margin: 10px 0 13px 40px;
  text-align: left;
  font-size: larger;
`;

export const InputBox = styled.input`
  width: 400px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const SubmitButton = styled.button`
  margin-top: 20px;
  width: 410px;
  padding: 20px;
  background-color: #98d59b;
  color: white;
  font-size: large;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: white;
    border: 1px solid #3c803f;
    color: #3c803f;
  }

  &:active {
    background-color: #3c803f;
    color: white;
  }
`;

export const ToggleButton = styled.button`
  margin-top: 20px;
  width: 410px;
  padding: 20px;
  background-color: #98d59b;
  color: white;
  font-size: large;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: white;
    border: 1px solid #3c803f;
    color: #3c803f;
  }

  &:active {
    background-color: #3c803f;
    color: white;
  }
`;

export default function SignIn({ setUser }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    const response = await login({
      id: id,
      password: password,
    });
    if (response) {
      navigate("/");
      alert("로그인 되었습니다 :)");
    }
    // console.log(response);
    // alert("로그인완료 :)");
    // // setUser({ userId, nickname, avatar });
    // navigate("/");
  };

  return (
    <Container>
      <InputGroup>
        <label htmlFor="id">아이디</label>
        <InputBox
          type="text"
          onChange={(e) => setId(e.target.value)}
          placeholder="ID"
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="password">비밀번호</label>
        <InputBox
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
      </InputGroup>
      <SubmitButton onClick={handleSignIn}>로그인</SubmitButton>
      <ToggleButton onClick={() => navigate("/sign_up")}>회원가입</ToggleButton>
    </Container>
  );
}
