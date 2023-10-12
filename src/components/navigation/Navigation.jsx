import "./navigation.css";

function Navigation() {
  return (
    <>
      <nav>
        <Link to={"/competitions"}></Link>
        <Link to={"/events"}></Link>
        <Link to={"/about"}></Link>
        <Link to={"/team"}></Link>
        <Link to={"/join"}></Link>
        <Link to={"/getinvolved"}></Link>
        <Link to={"/contact"}></Link>
      </nav>
    </>
  );
}

export default Navigation;
