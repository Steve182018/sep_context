import React, { useContext } from 'react';
import { LoginInfo } from './LoginContext';

const Login = () => {
  const { darkbg, chg } = useContext(LoginInfo);

  return (
    <>
      <div style={{ backgroundColor: chg }}>
        <input type="text" placeholder="Enter Your Name" /><br /><br />
        <input type="email" placeholder="Enter Your Email" /><br /><br />
      </div>
      <button onClick={() => darkbg(chg)}>Dark Mode</button>
    </>
  );
}

export default Login;
