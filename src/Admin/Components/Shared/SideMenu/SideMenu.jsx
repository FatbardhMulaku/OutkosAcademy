import React, { useState } from "react";
import { UpLinks } from "./data";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { ReactComponent as Dashboard } from "../../../../Assets/Admin/nav/icon1.svg";
import { ReactComponent as Course } from "../../../../Assets/Admin/nav/icon2.svg";
import { ReactComponent as Students } from "../../../../Assets/Admin/nav/icon3.svg";
import { ReactComponent as Schedule } from "../../../../Assets/Admin/nav/icon4.svg";
import { ReactComponent as Statistics } from "../../../../Assets/Admin/nav/icon5.svg";
import { ReactComponent as Settings } from "../../../../Assets/Admin/nav/settings.svg";
import { ReactComponent as Account } from "../../../../Assets/Admin/nav/account.svg";
import { ReactComponent as Search } from "../../../../Assets/Admin/nav/loupe.svg";
import Input from "../../../../Components/Shared/Form/Input";
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md";
import DownMenu from "./DownMenu";
import LogoutModal from "../../LogOut/LogOut";
import { Link } from "react-router-dom";

const SideMenu = ({ children }) => {
  const [headerToggle, setHeaderToggle] = useState(false);

  /*===== LINK ACTIVE  =====*/
 const addActiveClass = () => {
  const linkColor = document.querySelectorAll(".nav__link");

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }
  }
  linkColor.forEach((l) => l.addEventListener("click", colorLink));
 }

  const [input, setInput] = useState({
    search: "",
  });

  const handleChange = (input, setInput, event) => {
    event.persist();
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const [AvatarMenu, setAvatarMenu] = useState(false);
  return (
    <div
      className={`SideMenu ${headerToggle ? "body-pd" : "body-content"}`}
      id="body-pd"
    >
      <header className={`header ${headerToggle ? "body-pd" : ""}`} id="header">
        <div className="header__toggle">
          <i onClick={() => setHeaderToggle(!headerToggle)}>
            {headerToggle ? <AiOutlineClose /> : <FiMenu />}
          </i>
        </div>

        <form>
          <Input
            type="text"
            value={input.search}
            icon={<Search className="stroke-style" />}
            name="search"
            id="search"
            onChange={(e) => handleChange(input, setInput, e)}
            placeholder="search"
          />
        </form>

       {/*  header right side */}
        <div className="header__right">
          <div className="header__right--img1 BG"/>
          <div className="header__right--img2 BG"/>
          <p>Bleart Kepuska</p>
          <div onClick={() => setAvatarMenu(!AvatarMenu)}>
            <div className="header__right--avatar BG"></div>
            {AvatarMenu ? <MdKeyboardArrowUp size="23px"/> : <MdKeyboardArrowDown size="23px"/>}
          </div>
        </div>
        <DownMenu drawerToggle={AvatarMenu} />
      </header>

      <div className={`l-navbar ${headerToggle ? "show" : ""}`} id="nav-bar">
        <nav className="nav">
          <div>
            <a href="#" className="nav__logo">
              <div
                className={`${headerToggle ? "logo__big" : "small__logo"}`}
              ></div>
            </a>

            <div className="nav__list">
              <Link key={11} to="/dashboard" className="nav__link active" onClick={addActiveClass}>
                <Dashboard className="nav__icon stroke-style" />
                <span className="nav__name">Dashboard</span>
              </Link>

              <Link key={12} to="/dashboard/course" className="nav__link" onClick={addActiveClass}>
                <Course className="nav__icon stroke-style" />
                <span className="nav__name">Courses</span>
              </Link>

              <Link key={13} to="#" className="nav__link" onClick={addActiveClass}>
                <Students className="nav__icon stroke-style" />
                <span className="nav__name">Students</span>
              </Link>

              <Link key={14} to="#" className="nav__link" onClick={addActiveClass}>
                <Schedule className="nav__icon stroke-style" />
                <span className="nav__name">Schedule</span>
              </Link>

              <Link key={15} to="#" className="nav__link" onClick={addActiveClass}>
                <Statistics className="nav__icon stroke-style" />
                <span className="nav__name">Statistics</span>
              </Link>
              
            </div>
          </div>

          <div>
            <Link key={16} to="#" className="nav__link" onClick={addActiveClass}>
              <Settings className="nav__icon stroke-style" />
              <span className="nav__name">Settings</span>
            </Link>
            <Link key={17} to="#" className="nav__link" onClick={addActiveClass}>
              <Account className="nav__icon stroke-style" />
              <span className="nav__name">Account</span>
            </Link>
            <LogoutModal />
          </div>
        </nav>
      </div>

      <div className="main-content">{children}</div>
    </div>
  );
};

export default SideMenu;
