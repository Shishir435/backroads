

import { services } from '../data/data'
import './Service.css'
import Title from './Title'


const Service = () => {
    return (
        <section className="section services" id="services">
            <Title title='our' spanTitle='services' />
            <div className="section-center services-center">

                {services.map(({ id, iconClass, serviceTitle, serviceText }) => (
                    <article key={id} className="service">
                        <span className="service-icon"><i className={iconClass}></i></span>
                        <div className="service-info">
                            <h4 className="service-title">{serviceTitle}</h4>
                            <p className="service-text">
                                {serviceText}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
export default Service