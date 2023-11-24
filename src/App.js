import React, { useState } from 'react';
import Login from './Login';
import { LoginInfo, GlobalInfo } from './LoginContext';
import Child from './Child';

function App() {
  const [dark, setDark] = useState('white');
  const [color, setColor] = useState("red")
  const [day, setDay] = useState("Monday")
  const [bgcolor, setBGColor] = useState("orange")

  const getdarkmode = (item) => {
    console.log('Dark', item);
    setDark((item) => (item === 'black' ? 'white' : 'black'));
  };

  const getDay = (item) => {
    console.log(item)
    setDay((item) => (item === "Sunday" ? "Monday" : "Sunday"))
  }

  const getbgcol = (item) => {
    console.log("Back", item)
    setBGColor((item) => (item === "green" ? "orange" : "green"))
  }

  return (
    <>
      <LoginInfo.Provider value={{ darkbg: getdarkmode, chg: dark }}>
        <center>
          <Login />
        </center>
      </LoginInfo.Provider>
      <GlobalInfo.Provider value={{ AppColor: color, Day: getDay, bgcol: getbgcol, }}>
        <center>
          <h1>App Component</h1>
          <Child />
          <h1 style={{ backgroundColor: bgcolor }}>Day: {day}</h1>
        </center>
      </GlobalInfo.Provider>
    </>
  );
}

export default App;
