import React from "react";
import "/public/styles.css";
const today = new Date();
const currYear = today.getFullYear();
console.log(currYear);

function Footer() {
  return (
    <footer>
      <p>Copyright &copy, {currYear}</p>;
    </footer>
  );
}
export default Footer;
