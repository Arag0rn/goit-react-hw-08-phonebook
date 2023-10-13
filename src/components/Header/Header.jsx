import "./Header.style.scss";
import { Link } from "react-router-dom";



export const Header = () => {


  return (
    <div className="header">
   <div className="head-container">
   <div className="logo">
        <div className="logo_text">
          <h1><Link to="/">Phonebook</Link></h1>
          <h2 className="under-logo-txt">Save your contacts</h2>
        </div>
      </div>

      <div className="menubar">
        <nav className="menu">
          <Link className="navLink" to="/login">Login</Link>
          <Link className="navLink" to="/registration">Register</Link>
          <Link className="navLink" to="/">Home</Link>


        </nav>
      </div>
   </div>
    </div>
  );
};