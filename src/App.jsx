import React from "react";
import ReactDom from "react-dom";
import Note from "./Note";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <>
      <Header></Header>
      <Note></Note>
      <Footer className="footer"></Footer>
    </>
  );
}
export default App;
