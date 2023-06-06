import React, { useRef } from 'react'
import Typewriter from 'typewriter-effect'
import { animate, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BsArrowUpRight, BsChevronDown } from 'react-icons/bs'
import { AiFillLinkedin, AiFillInstagram, AiFillPhone } from "react-icons/ai";
import '../style/home.css'
import vg from '../assets/vg.png'

export const Home = () => {

    const ClientCount = useRef(null);

    const AnimationClientCount = () => {
        animate(0, 100, {  //counts 0-100
            duration: 1,
            onUpdate: (v) => (ClientCount.current.textContent = v.toFixed()), //toFixed[] means natural no. shown, toFixed[1] decimal
        });
    };

    const animations = {
        h1: {
            initial: {
                x: '-100%',
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            }
        },
        button: {
            initial: {
                y: '-100%',
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            }
        }
    }
    return (
        <>
            <div id='home'>
                <section className='sec1'>
                    <div>
                        <motion.h1 {...animations.h1}>
                            Hi,I am <br /> Tejas Samant
                        </motion.h1>
                        <Typewriter options={{
                            strings: ["A developer", "A Leader", "A problem Solver"],
                            autoStart: true,
                            loop: true,
                            wrapperClassName: 'typewriterpara' //random name
                        }} />
                        <div className='temp2'>
                            <a href="mailto:2020.tejas.samant@ves.ac.in">
                                Hire Me
                            </a>
                            <Link to="/work">My Projects <BsArrowUpRight /></Link>
                        </div>
                        <article>
                            <p>
                                +<motion.span whileInView={AnimationClientCount} ref={ClientCount} className='span1'></motion.span>
                            </p>
                            <span>Clients Worldwide</span>
                        </article>
                        <aside>
                            <article>
                                <p>
                                    +500
                                </p>
                                <span>Projects Made</span>
                            </article>
                            <article data-special> {/* data special used so that we can design it seperately */}
                                <p>
                                    Contact
                                </p>
                                <span>2020.tejas.samant@ves.ac.in</span>
                            </article>
                        </aside>
                    </div>
                </section>
                <section className='sec2'>
                    <img src={vg} alt="" />
                </section>
                <div className='temp'>
                    <BsChevronDown />
                </div>
            </div>
            <div className="home4" id="brands">
                <div>

                    <article>

                        <div
                            style={{
                                animationDelay: "0.5s",
                            }}
                        >
                            
                            <a href='https://www.linkedin.com/in/tejas-samant-862594220/'><AiFillLinkedin />Linkedin</a>
                        </div>

                        <div
                            style={{
                                animationDelay: "3s",
                            }}
                        >
            
                            <a href='https://www.instagram.com/tejas_00009/'><AiFillInstagram />Instagram</a>
                        </div>
                        <div
                            style={{
                                animationDelay: "0.5s",
                            }}
                        >
                            
                            <a href="tel:933029633"><AiFillPhone/>Phone</a>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}
