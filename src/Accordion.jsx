import './AccordionStyles.css'
import PropTypes from'prop-types'

const AccordianItem = ({id , title, info, toggleAccordion, isActive}) => {
    const handleCLick = () => {
        toggleAccordion(id);
    }
    // console.log(data.data)
    // console.log({title})
    return (
        <div className="accordian-container">
            <div className="header">
                <h4 className="title">{title}</h4>
                <button className="toggleView" onClick={handleCLick} aria-expanded={isActive}>{isActive ? '-' : '+'}</button>
            </div>
            <div className={`accordian-content-${isActive ? 'open' : 'close'}`}>
                <p>{info}</p>
            </div>

        </div>
    )
}
AccordianItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    toggleAccordion: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
}
export default AccordianItem