import { useState } from "react";
import styled from "styled-components";
import { updateProfile } from "../lib/api/auth";
import { useNavigate } from "react-router-dom";

export const Container = styled.main`
  max-width: 800px;
  width: 500px;
  height: auto;
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

export const Nickname = styled.p`
  margin: 5px 0 15px 0;
  text-align: center;
  font-size: medium;
  color: #6e8970;
`;

export const InputTitle = styled.p`
  margin: 30px 0 13px 0;
  text-align: left;
  font-size: larger;
`;

export const InputBox = styled.input`
  width: 95%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`;

export const SubmitButton = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 20px;
  background-color: #7cb37f;
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

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto 20px;
  display: block;
`;

export const ChangeImageButton = styled.button`
  padding: 10px 20px;
  margin-bottom: 20px;
  background-color: #88cf8a;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export default function Profile({ user, setUser }) {
  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();

  const handleUpdateProfile = async () => {
    const formdata = new FormData();
    formdata.append("nickname", nickname);
    formdata.append("avatar", avatar);
    const response = await updateProfile(formdata);

    if (response.success) {
      setUser({
        ...user,
        nickname: response.nickname,
        avatar: response.avatar,
      });
      navigate("/");
    }
  };

  return (
    <Container>
      <Title>My Page</Title>
      <InputGroup>
        <label htmlFor="avatar">프로필 사진 변경</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </InputGroup>
      <InputGroup>
        <InputTitle>닉네임</InputTitle>
        <InputBox
          type="text"
          minLength="1"
          maxLength="10"
          placeholder="새 닉네임을 입력하세요"
          onChange={(e) => setNickname(e.target.value)}
        />
      </InputGroup>
      <SubmitButton onClick={handleUpdateProfile}>저 장</SubmitButton>
    </Container>
  );
}
