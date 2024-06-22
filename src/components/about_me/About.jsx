import React from 'react';
import './about.css';
import wave from '../../assets/wave.svg';

const About = () => {
    return (
        <div>
            <div className='spacer layer1'>
                <div className='cont_about'>
                    <div className='cont_heading'>
                        <h1>Let yourself be amazed</h1>
                        <br />
                        <br />
                        <h3>
                            Welcome to my online portfolio. I invite you to come in, learn more about me and my work, and stop to embrace the magic of visual effects.
                        </h3>
                        <button>Explore My Work</button>
                    </div>
                    <div className='about_img'></div>
                </div>
            </div>
        </div>
    );
}

export default About;
