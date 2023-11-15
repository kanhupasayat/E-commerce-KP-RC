import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div className="nav">
        <h1>A-store</h1>
        <ul className="list">
          <li>
            <a href="#Home.jsx">home</a>
          </li>
          <li>
            <a href="Products.jsx">products</a>
          </li>
          <li>
            <a href="">contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default NavBar;
