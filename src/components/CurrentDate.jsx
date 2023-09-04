import { useEffect, useState } from "react"
import date from "../assets/items/calendar4.png";
import open from "../assets/items/openweather.png";

const CurrentDate = () => {

    const [currentDateTime, setCurrentDateTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date())
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])

  return (
    <>
        <article className="data-container display-flex">
            <div className="data-info display-flex">
                <h3>Current Date and Time:</h3>
                <p>
                {currentDateTime.toLocaleDateString()}{' . '}{' // '} {' . '} 
                {currentDateTime.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                })}
                </p>
            </div>
            <div>
                <img className="date-img" src={date} alt="" />
            </div>
        </article>
        <div className="open-container display-flex ">
            <img className="open-img defaul-background" src={open} alt="" /> 
        </div>
    </>
  )
}

export default CurrentDate