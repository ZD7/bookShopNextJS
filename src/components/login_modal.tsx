import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setIsLogin, changeUserEmail } from "../store/reducers/auth_reducer";

export const LoginModal = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [formValid, setFormValid] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [passError, setPassError] = useState("");

  const loginHandler = (e) => {
    setEmail(e.target.value);
    if (!e.target.value) {
      setFormValid(false)
      setLoginError("the email field cannot be empty");
    } else {
      setLoginError("");
      pass ? setFormValid(true) : setFormValid(false);
    }
  };

  const passHandler = (e) => {
    setPass(e.target.value);
    if (!e.target.value) {
      setFormValid(false)
      setPassError("Your password must be at least 6 characters long");
    } else {
      setPassError("");
      email ? setFormValid(true) : setFormValid(false);
    }
  };

  const authHandler = () => {

    fetch("/api/auth", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: pass,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.success) {
          dispatch(setIsLogin({ isLogin: true }));
          dispatch(changeUserEmail({ email }));
        } else {
          setFormValid(false)
          data.type === "email" ? setLoginError(data.message) : setPassError(data.message)
        }
      });
  };

  return (
    <Container loginError={loginError} passError={passError}>
      <Header>Log in</Header>
      <label>
        Email
        {loginError && <div className="error">{loginError}</div>}
        <input
          type="text"
          onChange={(e) => loginHandler(e)}
          onBlur={(e) => loginHandler(e)}
          className="is-error-login"
        />
      </label>

      <label>
        Password
        {passError && <div className="error pass">{passError}</div>}
        <input
          type="password"
          value={pass}
          onChange={(e) => passHandler(e)}
          onBlur={(e) => passHandler(e)}
          className="is-error-pass"
        />
      </label>
      <ButtonAuth onClick={authHandler} disabled={!formValid}>LOG IN</ButtonAuth>
    </Container>
  );
};

const Container = styled.div<{ loginError: string, passError: string }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  top: 30px;
  right: 0px;

  width: 241px;
  height: 312px;
  padding-top: 17px;
  padding-left: 26px;
  padding-right: 39px;
  padding-bottom: 36px;

  box-shadow: 0px 4px 4px 0px #00000040;
  z-index: 4;
  background-color: #ffffff;

  label {
    display: flex;
    flex-direction: column;
    gap: 9px;
    font-size: 12px;
    line-height: 15px;
    color: #000000;
    margin-bottom: 24px;
    position: relative;

    & .error {
      position: absolute;
      top: 67px;
      text-align: center;
      width: 100%;

      font-family: "Montserrat";
      font-size: 8px;
      font-weight: 700;
      line-height: 10px;
      color: #ff353a;
    }
  }

  input {
    height: 35px;
    border-radius: 0px;
    color: #4c3db2;
    text-align: left;
    outline: none;

    box-sizing: border-box;
    padding-left: 9px;

    font-family: "Montserrat";
    font-size: 12px;

    &.is-error-pass {
      border: ${(props) => (props.passError ? "1px solid #FF353A" : "1px solid #4c3db2")};
      color: ${(props) => (props.passError ? "#FF353A" : "#4c3db2")};
    }

    &.is-error-login {
      border: ${(props) => (props.loginError ? "1px solid #FF353A" : "1px solid #4c3db2")};
      color: ${(props) => (props.loginError ? "#FF353A" : "#4c3db2")};
    }
  }
`;

const Header = styled.div`
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 14px;
`;

const ButtonAuth = styled.button`
  width: 176px;
  height: 32px;
  background-color: #9e98dc;
  font-size: 14px;
  color: #ffffff;
  margin-top: auto;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
