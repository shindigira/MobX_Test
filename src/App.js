// import React, { Component } from "react";
// // import logo from "./logo.svg";
// import "./App.css";
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         {/* <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p> */}
//
//       </div>
//     );
//   }
// }
//
// export default App;

import React, { Component } from "react";
import styled, { css } from "styled-components";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
import JSONPretty from "react-json-pretty";

const styles = {
  night: {
    color: "#fff",
    backgroundColor: "#000"
  },
  day: {
    color: "#000",
    backgroundColor: "#fff"
  }
};

const Headline = styled.h1`
  font-size: 3rem;

  ${({ theme }) =>
    css`
      color: ${styles[theme].color};
      background-color: ${styles[theme].backgroundColor};
    `};
`;

@inject("store1", "store2")
@observer
class App extends Component {
  render() {
    console.log("App Render", this.props);
    const { store1, store2 } = this.props;
    const { value1 } = store1;
    const { value2 } = store2;
    console.log(toJS(store1));
    return (
      <div className="App">
        <Headline theme={"day"}>
          {[
            value1.text,
            ", ",
            value2.text,
            ", ",
            value1.newKey ? value1.newKey : "not yet"
          ]}
          {store1.arr && store1.arr[0] && store1.arr[0].msg ? (
            <span style={{ color: "blue" }}> {store1.arr[0].msg} </span>
          ) : null}
        </Headline>
        <JSONPretty json={store1} />
        <button
          onClick={() => {
            // store1.value1 = { text: "first clicked", newKey: "added key" };
            store1.value1.text = "first clicked";
            store1.value1.newKey = "added key";
            store1.value1.arr = [{ msg: "blue" }];
          }}
        >
          first button
        </button>
        <button
          onClick={() => {
            // store1.value1.text = "second clicked";
            // store1.value1.newKey = "changed key";
            store1.value1.arr = [{ msg: "red" }];
            console.log("second button clicked", store1.value1);
          }}
        >
          second button
        </button>
        <button
          onClick={() => {
            store1.pushArrayTest({ push: "pushed" });
          }}
        >
          third button
        </button>
      </div>
    );
  }
}

export default App;
