import React, {useState} from "react"
import './TimeWaster.css'

/**
 * Rewritten with hooks as practice
 * as well as thought process that leads me to believe it's more performant
 */

function TimeWaster() {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    return(
        <div className="time-waster">
            <div className="time-waster--element">Waste Time &nbsp;</div>
            <button className="button time-waster--element" onClick={increment}>{count}</button>
        </div>
    )
}

export default TimeWaster