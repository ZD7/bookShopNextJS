import styled from "styled-components";
import Image from "next/image";
import profileImage from "../images/profile.jpg";
import { useSelector, useDispatch } from "react-redux";
import { AppRootStoreType } from "../store/store";
import Layout from "../components/layout";
import {
  changeUserName,
  changeUserEmail,
  changeAboutUser,
} from "../store/reducers/auth_reducer";
import { useState } from "react";

export default function Profile() {
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();

  const userName = useSelector<AppRootStoreType, string>(
    (state) => state.auth.userName
  );

  const userEmail = useSelector<AppRootStoreType, string>(
    (state) => state.auth.userEmail
  );

  const aboutUser = useSelector<AppRootStoreType, string>(
    (state) => state.auth.aboutUser
  );

  function changeDescription(e) {
    dispatch(changeAboutUser({ description: e.target.value }));
  }

  function changeEmail(e) {
    dispatch(changeUserEmail({ email: e.target.value }));
  }

  function changeName(e) {
    dispatch(changeUserName({ name: e.target.value }));
  }

  return (
    <Layout title={"Profile Page"}>
      <Wrapper>
        <ImageBlock>
          <Title>Profile</Title>
          <Image
            src={profileImage}
            alt="profile-image"
            width={235}
            height={235}
          ></Image>
        </ImageBlock>
        <PersonalData>
          <label>
            YOUR NAME
            <input
              type="text"
              value={userName}
              onChange={(e) => changeName(e)}
              disabled={!isEdit}
              title="изменить имя"
            />
          </label>

          <label>
            YOUR EMAIL
            <input
              type="text"
              value={userEmail}
              onChange={(e) => changeEmail(e)}
              disabled={!isEdit}
              title="изменить email"
            />
          </label>

          {!isEdit && (
            <EditProfile onClick={() => setIsEdit(!isEdit)}>
              EDIT PROFILE
            </EditProfile>
          )}
        </PersonalData>
        <AboutUser>
          <div className="title-about">About me</div>
          <Description
            value={aboutUser}
            onChange={(e) => changeDescription(e)}
            disabled={!isEdit}
            title="редактировать описание"
          />
        </AboutUser>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 87px;
  width: 1120px;
`;

const ImageBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 17px;
`;

const Title = styled.div`
  color: #1c2a39;
  font-size: 24px;
  line-height: 29px;
`;

const PersonalData = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 41px;
  width: 400px;

  label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 12px;
    line-height: 15px;
    color: #000000;
    margin-bottom: 25px;
  }

  input {
    height: 29px;
    font-family: "Montserrat";
    font-size: 24px;
    border: none;
    cursor: pointer;
    text-overflow: ellipsis;

    &:focus {
      outline: 1.5px solid #ffe0e2;
      border-radius: 5px;
      cursor: text;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: inherit;
      color: inherit;
    }
  }
`;

const AboutUser = styled.div`
  background-color: #ffe0e2;
  width: 353px;
  height: 345px;
  padding-left: 28px;
  padding-right: 28px;
  padding-top: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;

  font-size: 12px;
  line-height: 15px;
  color: #5c6a79;

  .title-about {
    color: #000000;
    margin-bottom: 29px;
  }
`;

const Description = styled.textarea`
  width: 296px;  
  height: 256px;
  line-height: 15px;

  font-family: "Montserrat";
  font-size: 12px;
  color: #5c6a79;
  overflow-y: auto;

  border: none;
  resize: none;
  outline: none;
  cursor: pointer;
  background-color: inherit;

  &:focus {
    outline: 1px solid #efeef6;
    border-radius: 5px;
    cursor: text;
    background-color: #ffffff;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const EditProfile = styled.button`
  width: 176px;
  height: 45px;
  border: 1px solid #4c3db2;
  color: #4c3db2;
  background-color: #ffffff;
  font-size: 8px;
  line-height: 10px;
  margin-top: 16px;
`;
