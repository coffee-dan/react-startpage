import React from "react"

/*
hacky implementation of react forms just for fun
it only displays pokemon that were available in black2 white2
it only displays animated
toggleable between shiny and non shiny version
emergent property where broken link shows up if inputted pokemon name is outside bounds of logic*/

class PokemonDisplay extends React.Component {
    constructor() {
        super()
        this.state = {
            pokemonName: "genesect",
            isShiny: false,
            pokemonURL: "https://img.pokemondb.net/sprites/black-white/anim/normal/genesect.gif"
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {

        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState({
                [name]: checked
            }) :
            this.setState({
                [name]: value
            })
    }

    handleSubmit(event) {
        const shinyText = this.state.isShiny ? "shiny" : "normal"
        const newURL = "https://img.pokemondb.net/sprites/black-white/anim/" + shinyText + "/" + this.state.pokemonName + ".gif"
        this.setState({pokemonURL: newURL})
        event.preventDefault()
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.pokemonName}
                        name="pokemonName"
                        placeholder="Pokemon Name"
                        onChange={this.handleChange}
                    />
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="isShiny"
                            checked={this.state.isShiny}
                            onChange={this.handleChange}
                        /> Is shiny?
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <a href={"http://pokemondb.net/pokedex/" + this.state.pokemonName}>
                    <img src={this.state.pokemonURL} alt={this.state.pokemonName} />
                </a>
            </div>
        )
    }
}

export default PokemonDisplay