import React from 'react'
import {yes, no} from '../objects'

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            no_statement: no.no_statement,
            no_image: no.no_image
        }
    }

    clickHandler =() => {
        if (this.state.no_image === no.no_image) {
            this.setState({no_image: yes.yes_image})
            this.setState({no_statement: yes.yes_statement})
        }
        else {
            this.setState({no_image: no.no_image})
            this.setState({no_statement: no.no_statement})
        }
    }


    render () {
        // console.log(no.no_statement)
        return (
            <div>
                <h1>{this.state.no_statement}</h1>
                <img alt="profile" src={this.state.no_image} onClick={this.clickHandler}></img> 
            </div>
        )
    }
}


export default Header