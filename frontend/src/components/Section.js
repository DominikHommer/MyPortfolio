import React from 'react';



import './section.css';
import './about.css';
import './skills.css';
import './timeline.css';
import './projects.css';
import './contact.css';

const Section = ({ id, title, children, reverse, ...rest }) => {
    return (
        <section id={id} className={`section ${reverse ? 'reverse' : ''}`} {...rest}>
            <div className="section-content">
                <div className="section-title">
                    <h2>{title}</h2>
                </div>
                <div className="section-text">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Section;






