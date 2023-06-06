import React from 'react'
import { Link } from 'react-router-dom'
import "../style/header.css"
import { AiOutlineMenu } from "react-icons/ai";
import tejas from '../assets/tejas.png'

export const Header = ({setMenuOpen, MenuOpen}) => {
  return (
    <>
      {console.log({setMenuOpen})}
      <nav>
        <NavContent setMenuOpen={setMenuOpen}/>
      </nav>
      <button className='navBtn' onClick={() => setMenuOpen(!MenuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  )
}
export const HeaderPhone = ({MenuOpen,setMenuOpen}) => {  /*for hidden nav bar due to responsiveness*/
  return (
    <div className={`navPhone ${MenuOpen ? 'navPhoneComes' : ""}`}>
      <NavContent setMenuOpen={setMenuOpen}/>
    </div>
  );
};

const NavContent = ({setMenuOpen}) => (
  <>
    <img src={tejas} alt="" className='me'/>
    <h2>Tejas</h2>
    <div>
      <Link onClick={()=>setMenuOpen(false)} to="/home">Home</Link>
      <Link onClick={()=>setMenuOpen(false)} to="/work">Work</Link>
      <Link onClick={()=>setMenuOpen(false)} to="/timeline">Experience</Link>
      <Link onClick={()=>setMenuOpen(false)} to="/services">Services</Link>
      <Link onClick={()=>setMenuOpen(false)} to="/testimonials">Testimonials</Link> 
      <a onClick={()=>setMenuOpen(false)} href="#brands">Socials</a>
    </div>
    <a href="mailto:2020.tejas.samant@ves.ac.in">
      <button>Email</button>
    </a>
  </>
);
