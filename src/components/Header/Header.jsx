import { NavLink } from "react-router-dom";
import c from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={c.header}>
      <div className={c.container}>
        <div className={c.row}>
          <a href="#s" className={c.logo}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4474/4474196.png"
              alt="logo"
            />
            <span>DSN</span>
          </a>
          <div className={c.login}>
            {props.isAuth ? (
              props.login
            ) : (
              <NavLink to={"/login"}>Log in</NavLink>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
