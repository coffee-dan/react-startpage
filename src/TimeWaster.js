import React from "react"
import './TimeWaster.css'


class TimeWaster extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }

        this.increment = this.increment.bind(this)
    }

    increment() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
            <div className="TimeWasterContainer">
                <div className="TimeWasterElement">Waste Time &nbsp;</div>
                <button className="button TimeWasterElement" onClick={this.increment}>{this.state.count}</button>
            </div>
        )
    }
}

export default TimeWaster