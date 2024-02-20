import React, {useState} from 'react';
import "../styles/Services.css";


function Services() {
    const [activeTab, setActiveTab] = useState(0);

    
  return (
    <section className="services section">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">
                        Product <br/> Designer
                    </h3>
                </div>

                <span className="services__button"
                    onClick={() => {
                        setActiveTab(1);
                    }}>
                    View More
                    <i className="uil uil-arrow-right 
                    services__button-icon"></i>
                </span>
                    
                <div className={activeTab === 1 ?
                     "services__modal active-modal" : "services__modal" }
                     onClick={() => {
                        setActiveTab(0);
                    }}>
                    <div className="services__modal-content">
                        <i className="uil uil-times 
                            services__modal-close" 
                            onClick={() => {
                                setActiveTab(0);
                            }}></i>

                        <h3 className="services__modal-title">Product Designer</h3>
                        <p className="services__modal-description">
                            Service with more than 3 years of experience.
                            Providing quality work to clients and companies.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I develop user interface.
                                </p>
                            </li>
                        </ul>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Web page development.
                                </p>
                            </li>
                        </ul>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Design and mockups of products for companies.
                                </p>
                            </li>
                        </ul>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I create UX elements interactions.
                                </p>
                            </li>
                        </ul>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I position your company brands.
                                </p>
                            </li>
                        </ul>



                    </div>
                </div>

            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">
                        Ui/Ux <br/> Designer
                    </h3>
                </div>

                <span className="services__button"
                    onClick={() => {
                        setActiveTab(2);
                    }}>
                    View More
                    <i className="uil uil-arrow-right 
                    services__button-icon"></i>
                </span>

                <div className={activeTab === 2 ?
                     "services__modal active-modal" : "services__modal" }
                     onClick={() => {
                        setActiveTab(0);
                    }}>
                    <div className="services__modal-content">
                        <i className="uil uil-times 
                            services__modal-close" 
                            onClick={() => {
                                setActiveTab(0);
                            }}></i>

                        <h3 className="services__modal-title">Ui/Ux Designer</h3>
                        <p className="services__modal-description">
                            Service with more than 3 years of experience.
                            Providing quality work to clients and companies.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I develop user interface.
                                </p>
                            </li>
                        </ul>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Web page development.
                                </p>
                            </li>
                        </ul>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Design and mockups of products for companies.
                                </p>
                            </li>
                        </ul>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I create UX elements interactions.
                                </p>
                            </li>
                        </ul>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I position your company brands.
                                </p>
                            </li>
                        </ul>



                    </div>
                </div>

            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">
                        Visual <br/> Designer
                    </h3>
                </div>

                <span className="services__button"
                onClick={() => {
                    setActiveTab(3);
                }}>
                    View More
                    <i className="uil uil-arrow-right 
                    services__button-icon"></i>
                </span>

                <div className={activeTab === 3 ?
                     "services__modal active-modal" : "services__modal"}
                     onClick={() => {
                        setActiveTab(0);
                    }}>
                    <div className="services__modal-content">
                        <i className="uil uil-times 
                            services__modal-close" 
                            onClick={() => {
                                setActiveTab(0);
                            }}></i>

                        <h3 className="services__modal-title">Visual Designer</h3>
                        <p className="services__modal-description">
                            Service with more than 3 years of experience.
                            Providing quality work to clients and companies.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I develop user interface.
                                </p>
                            </li>
                        </ul>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Web page development.
                                </p>
                            </li>
                        </ul>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Design and mockups of products for companies.
                                </p>
                            </li>
                        </ul>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I create UX elements interactions.
                                </p>
                            </li>
                        </ul>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I position your company brands.
                                </p>
                            </li>
                        </ul>



                    </div>
                </div>

            </div>

        </div>
    </section>
  )
}

export default Services