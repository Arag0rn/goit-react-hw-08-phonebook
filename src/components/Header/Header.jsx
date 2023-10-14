import { useAuth } from "hooks/useAuth";
import "./Header.style.scss";
import { Link } from "react-router-dom";
import { UserMenu } from "components/UserMenu/UserMenu";



export const Header = () => {

  const { isLoggedIn } = useAuth();
  return (
    <div className="header">
        <div className="logo_text">
          <h1><Link to="/">Phonebook</Link></h1>
          <h2 className="under-logo-txt">Save your contacts</h2>
    </div>

      <div className="menubar">
        {isLoggedIn ?(<UserMenu />) : 
        ( <nav className="menu"> <Link className="navLink" to="/login">Login</Link>
          <Link className="navLink" to="/registration">Register</Link>
          <Link className="navLink" to="/">Home</Link></nav>)}
      </div>
   </div>

  );
};