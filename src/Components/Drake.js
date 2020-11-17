import React from 'react';
import { yes, no } from '../objects';

class Drake extends React.Component {

    state = {
        clicked: false,
        yes,
        no
    };

    clickHandler = () => {
        this.setState((prevState) => ({ clicked: !prevState.clicked }));
    };

    render() {
        return (
            <>
                <h1>{this.state.clicked ? this.state.yes["yes-statement"] : this.state.no["no-statement"]}</h1>
                <img alt="Drake" src={this.state.clicked ? this.state.yes["yes-image"] : this.state.no["no-image"]} onClick={this.clickHandler} style={{ width: "40%", height: "40%" }} />
            </>
        );
    };
};

export default Drake;