import { useCallback, useState } from 'react'
import './App.css'
import data from './data'
import AccordianItem from './Accordion'
const App = () => {
  const [activeAccordions, setActiveAccordians] = useState(new Set())
  const [allowMultiple, setAllowMultiple] = useState(true)
  const handleCheckboxChange = useCallback(() => {
    setAllowMultiple((prev) => !prev)
  }, [])
  const toggleAccordion = useCallback((id) => {
    setActiveAccordians((prev) => {
      const updatedAccordions = new Set(prev);
      if (updatedAccordions.has(id)) {
        updatedAccordions.delete(id)
      }
      else {
        if (!allowMultiple) {
          updatedAccordions.clear();
        }
        updatedAccordions.add(id)
      }
      return updatedAccordions
    })
  }, [allowMultiple])
  return (
    <>
      <div className="app-container">
        <div className="checkboxContainer">
          <label htmlFor="mulriple-open" className='checkboxLabel'>
            Allow multiple accordians to open ?
          </label>
          <input type="checkbox" className="checkboxInput" checked={allowMultiple} onChange={handleCheckboxChange}/>
        </div>
        <div className="accordians">
          {data.map(item => 
          <AccordianItem 
          key={item.id} 
          {...item}
          toggleAccordion={toggleAccordion}
          isActive={activeAccordions.has(item.id)}></AccordianItem>)}
        </div>
      </div>
    </>
  )
}

export default App
