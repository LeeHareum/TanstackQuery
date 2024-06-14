import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { register } from "../lib/api/auth";

export const Container = styled.main`
  max-width: 800px;
  width: 500px;
  height: 600px;
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

  &::placeholder {
    color: #c5d7c6;
  }
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

export default function SignUp() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (id.length < 4 || id.length > 10) {
      alert("아이디는 4~10글자 이내로 입력해주세요");
      return;
    }
    if (password.length < 4 || password.length > 15) {
      alert("비밀번호는 4~15글자 이내로 입력해주세요");
      return;
    }
    if (nickname.length < 1 || nickname.length > 10) {
      alert("닉네임은 1~10글자 이내로 입력해주세요");
      return;
    }
    const response = await register({
      id: id,
      password: password,
      nickname: nickname,
    });
    if (response) {
      confirm("가입이 완료되었습니다.");
      navigate("/sign_in");
    }
  };

  return (
    <Container>
      <InputGroup>
        <label htmlFor="id">아이디</label>
        <InputBox
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="ID"
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="password">비밀번호</label>
        <InputBox
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="password">닉네임</label>
        <InputBox
          type="password"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="nickname"
        />
      </InputGroup>
      <SubmitButton onClick={handleRegister}>회원가입</SubmitButton>
      <ToggleButton onClick={() => navigate("/sign_in")}>돌아가기</ToggleButton>
    </Container>
  );
}
