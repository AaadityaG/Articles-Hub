import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "./index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// icons
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaBars } from "react-icons/fa6";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  // sidebar actions
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <header className="py-1 shadow text-white backdrop-blur-lg">
        <Container>
          <nav className="flex justify-between items-center">
            <Link className="flex justify-center items-center" to="/">
              <Logo />
            </Link>
            <div id="nav-content" className="flex justify-center items-center">
              <ul
                id="notSidebar"
                className="w-full flex ml-auto max-sm:hidden md:flex lg:flex p-4"
              >
                {navItems.map((item) =>
                  item.active ? (
                    <li key={item.name}>
                      <button
                        onClick={() => navigate(item.slug)}
                        className="inline-bock px-6 py-2 duration-200 bg-gradient-to-r hover:to-rose-500 hover:via-rose-500  hover:from-orange-300 rounded-full"
                      >
                        {item.name}
                      </button>
                    </li>
                  ) : null
                )}
                {authStatus && (
                  <li>
                    <LogoutBtn />
                  </li>
                )}
              </ul>
              {/* <ul id='sidebar' className='flex ml-auto visible max-sm:visible md:invisible lg:invisible p-4'> */}
              <ul
                id="sidebar"
                className="flex ml-auto max-sm:flex md:hidden lg:hidden p-4"
              >
                <li>
                  <button
                    onClick={toggleSidebar}
                    className="p-3 duration-200 bg-gradient-to-r hover:to-rose-500 hover:via-rose-500  hover:from-orange-300 rounded-full"
                  >
                    <FaBars />
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </Container>
      </header>


      {/* sidebar popup */}
      <Container>
        <div
          className={`sidebar lg:hidden backdrop-blur-xl text-white p-4 w-9/12 ${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          } flex items-center justify-center gap-28 flex-col z-20 list-none lg:translate-x-0 transition-transform duration-500 ease-in-out fixed top-0 right-0 h-full overflow-y-auto`}
        >
          <button
            className="text-2xl p-2 focus:outline-none lg:hidden p-3 duration-200 bg-gradient-to-r hover:to-rose-500 hover:via-rose-500  hover:from-orange-300 rounded-full"
            onClick={closeSidebar}
          >
            <IoMdCloseCircleOutline />
          </button>
          <div
            id="mylinks"
            className="flex items-center justify-start gap-5 h-full flex-col"
          >
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name} onClick={closeSidebar}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-bock px-6 py-2 duration-200 bg-gradient-to-r hover:to-rose-500 hover:via-rose-500  hover:from-orange-300 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Header;
