import "./Nav.css";

const Nav = () => {
  return (
    <nav className='nav'>
      <h2>Employee</h2>
      <ul className='menu'>
        <li>HOME</li>
        <li>ADD EMPLOYEE</li>
        <li>EMPLOYEE LIST</li>
        <li>LOGOUT</li>
      </ul>
    </nav>
  );
};

export default Nav;
