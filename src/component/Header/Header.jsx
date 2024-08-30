import { NavLink, useParams } from "react-router-dom"
import logo from "../../assets/images/logo.png"
import avtar from "../../assets/images/patient-avatar.png"
import "./Header.css"
import { useEffect, useRef, useState } from "react"
import useScrollLock from "../../CostomHooks/StopScrolling"



const navlink = [
  {
    display: "Home",
    path: "/"
  },
  {
    display: "Find my Doctor",
    path: "/doctors"
  },
  {
    display: "Services",
    path: "/services"
  },
  {
    display: "Contact",
    path: "/contact"
  }
]


const Header = () => {
  const menuref = useRef(null)
  const [menu, setMenu] = useState(false)
  const param = useParams()
  const user = false

  const menuClick = (e) => {
    setMenu(e.target.checked)
  }
  useScrollLock(menu)

  useEffect(() => {
    menuref.current.checked = false
    setMenu(false)
  }, [param])




  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 769 && menu) {
      setMenu(false)
      menuref.current.checked = false
    }
  }, [windowWidth]);
  return (
    <>
      <header className="main-header z-50 fixed w-full">
        <nav>
          <div className="container p-4 px-5 md:px-16 lg:px-24 flex justify-between text-center">
            <figure className="lg:w-[10vw] md:w-[20vw] w-[30vw]  p-2 overflow-hidden">
              <img src={logo} className="w-[100%] object-cover " alt="" />
            </figure>
            <ul className=" gap-5 text-center items-center hidden lg:flex">
              {navlink.map((item, index) => (
                <li key={index}>
                  <NavLink to={item.path} className={navclass => navclass.isActive ? " text-primaryColor font-bold " : "text-black"}>{item.display}</NavLink>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 md:gap-5">
              {user ? <div className="w-10 h-10 rounded-full overflow-hidden bottom-1 ">
                <img src={avtar} className="h-full w-full object-cover" alt="" />
              </div>:
              <button className="btn py-2 rounded-full text-[3vw] md:text-base"> Login</button>}


              <span className="h-10 grid place-items-center" >
                <span className='max-h-10 lg:hidden relative z-10  p-2 '  >
                  <input type="checkbox" id="checkbox" ref={menuref} onClick={(e) => menuClick(e)} />
                  <label htmlFor="checkbox" className="toggle">
                    <div className="bars" id="bar1"></div>
                    <div className="bars" id="bar2"></div>
                    <div className="bars" id="bar3"></div>
                  </label>
                </span>
              </span>
            </div>
            {menu && <div className='h-screen hero-bg bg-white grid place-items-center
                  absolute top-0 left-0 w-screen black-glass-background'>
              <ul className='grid gap-10 '>
                {navlink.map((item, index) => (
                  <li key={index}>
                    <NavLink to={item.path} className={navclass => navclass.isActive ? " text-primaryColor font-bold " : "text-black"}>{item.display}</NavLink>
                  </li>
                ))}</ul>
            </div>}
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header