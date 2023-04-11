
import { tours } from '../data/data'
import Title from './Title'
import './Tours.css'

const Tours = () => {
    return (
        <section className="section" id="tours">
            <Title title='featured' spanTitle='tours' />
            <div className="section-center featured-center">


                {tours.map(({ id, imgUrl, tourDate, tourTitle, tourText, iconClass, location, tourDuration, tourPrice }) => (
                    <article key={id} className="tour-card">
                        <div className="tour-img-container">
                            <img src={imgUrl} className="tour-img" alt={tourTitle} />
                            <p className="tour-date">{tourDate}</p>
                        </div>
                        <div className="tour-info">
                            <div className="tour-title">
                                <h4>{tourTitle}</h4>
                            </div>
                            <p>
                                {tourText}
                            </p>
                            <div className="tour-footer">
                                <p>
                                    <span><i className={iconClass}></i></span>{location}
                                </p>
                                <p>{tourDuration}</p>
                                <p>{tourPrice}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
export default Tours