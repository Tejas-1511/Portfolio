import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "../style/work.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from '../assets/data.json'

export const Work = () => {
    return (
        <div id='work'>
            <h2>WORK</h2>
            <section className='sect'>
                <article className='art'>
                    <Carousel
                        showArrows={false}
                        showIndicators={false}
                        showStatus={false}
                        showThumbs={false}
                        interval={2000}
                        infiniteLoop={true}
                        autoPlay={true}
                    >
                        {data.projects.map((i) => (
                            <div key={i.title} className="workItem">
                                <img src={i.imgSrc} alt={i.title} />
                                <aside className='asides'>
                                    <h3>{i.title}</h3>
                                    <p>{i.description}</p>
                                    <a target={"blank"} href={i.url}>
                                        View Demo
                                    </a>
                                </aside>
                            </div>
                        ))}
                    </Carousel>
                </article>
            </section>
        </div>
    )
}
