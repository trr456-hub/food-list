import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (e) => {
    //console.log(e.target.value);
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="text"
          placeholder="E-MAIL"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="PASSWORD"
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" value="로그인" />
      </form>
      <div>
        <button>GOOGLE 로그인</button>
      </div>
    </div>
  );
};

export default Auth;
