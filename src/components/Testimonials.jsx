import React from 'react'
import '../style/testimonials.css'
import { AiOutlineLinkedin } from 'react-icons/ai'

export const Testimonials = () => {
    return (
        <div id="testimonial">
            <h2>Testimonial</h2>

            <section>
                <TestimonialCard
                    name={"Rohit Tawde"}
                    feedback={"Your Teaching skills are so good"}
                    url={'https://www.linkedin.com/in/rohitt28/'}
                />

                <TestimonialCard
                    name={"Divisha Gupta"}
                    feedback={
                        "Wow what a portfolio,good luck for your journey"
                    }
                    url={'https://www.linkedin.com/in/divisha-gupta-929935218/'}
                />

                <TestimonialCard
                    name={"Shubham Pal"}
                    feedback={"Amazing skills,keep up the good work "}
                    url={'https://www.linkedin.com/in/shubham-pal-4a467b21a/'}
                />
            </section>
        </div>
    );
};

const TestimonialCard = ({ name, feedback, url }) => (
    <article>
        <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="User"
        />
        <h4>{name}</h4>
        <p>{feedback}</p>
        <a href={url}><AiOutlineLinkedin size={'30px'} className='pic'/></a>
    </article>
);
