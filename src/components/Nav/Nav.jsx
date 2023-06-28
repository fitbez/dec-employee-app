import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className='nav'>
      <h2>Employee</h2>
      <ul className='menu'>
        <li>
          <Link style={StyledLink} to='/home'>
            HOME
          </Link>
        </li>
        <li>
          <Link style={StyledLink} to='/add-employee'>
            ADD EMPLOYEE
          </Link>
        </li>
        <li>
          <Link style={StyledLink} to='/employee-list'>
            EMPLOYEE LIST
          </Link>
        </li>
        <li>
          <Link style={StyledLink} to='/home'>
            LOGOUT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const StyledLink = {
  textDecoration: "none",
};

export default Nav;
