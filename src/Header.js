import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import "./Header.css";
import { useStateValue } from "./Stateprovider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, loggedinuser }, dispatch] = useStateValue();

  const logoutUser = () => {
    if (loggedinuser) {
      auth.signOut();
    }
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <img
        class="header__logo"
        src="https://www.logomoose.com/wp-content/uploads/2015/11/MET-LM.jpg"
        alt="logo"
      />
      <div className="header__search">
        <input
          type="text "
          className="header__searchInput"
          placeholder="Search..."
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header__productCount">
              {basket?.length}
            </span>
          </div>
        </Link>
        <Link to={!loggedinuser && "/login"} className="header__link">
          <div onClick={logoutUser} className="header__option">
            <span className="header__optionLineOne">
              Welcome, {loggedinuser?.email}
            </span>
            <span className="header__optionLineTwo">
              {loggedinuser ? "Sign out " : "Sign in"}
            </span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns </span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
export default Header;
