import React from "react";

const Footer = () => {
  let footerStyle = {
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    background: "#000",
    color: "white",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0",
    zIndex: "1000",
  };
  return (
    <footer style={footerStyle}>
      <p style={{ marginTop: "13px" }}>Copyright &copy; MyTodos by DEVDEE</p>
    </footer>
  );
};

export default Footer;
