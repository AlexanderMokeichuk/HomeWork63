import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className={"mt-auto"}>
      <div className={"container d-flex align-items-center justify-content-center p-3 gap-3 bg-dark"} style={{fontSize: 10,}}>
        <Link to={"/"}>Home</Link>
        <a href={"#"}>Security</a>
        <a href={"#"}>Docs</a>
        <a href={"#"}>About</a>
        <Link to={"/contacts"}>Contact</Link>
        <a href={"#"}>Status</a>
      </div>
    </footer>
  );
};

export default Footer;