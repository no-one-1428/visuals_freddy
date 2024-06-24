import React, { useEffect } from "react";
import "./card.css";

const Card = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));

        // Cleanup function to unobserve elements when the component unmounts
        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <div className="spacer_1">
            <div className="card_contt">
                <div className="card hidden">
                    <div className="img_1_c"></div>
                    <div className="other_then_img">
                        <h1 className="heading_txt_Card">My VFX process</h1>
                        <p>
                            The choice of software, techniques and details are not
                            insignificant, discover more about my artistic process.
                        </p>
                        <button className="button_card">More Information</button>
                    </div>
                </div>
                <div className="card hidden">
                    <div className="img_1_c"></div>
                    <div className="other_then_img">
                        <h1 className="heading_txt_Card">My VFX process</h1>
                        <p>
                            The choice of software, techniques and details are not
                            insignificant, discover more about my artistic process.
                        </p>
                        <button className="button_card">More Information</button>
                    </div>
                </div>
                <div className="card hidden">
                    <div className="img_1_c"></div>
                    <div className="other_then_img">
                        <h1 className="heading_txt_Card">My VFX process</h1>
                        <p>
                            The choice of software, techniques and details are not
                            insignificant, discover more about my artistic process.
                        </p>
                        <button className="button_card">More Information</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
