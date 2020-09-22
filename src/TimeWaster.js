import React from "react"
import './TimeWaster.css'


class TimeWaster extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
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
                <button className="button TimeWasterElement" onClick={this.handleClick}>{this.state.count}</button>
            </div>
        )
    }
}

export default TimeWaster