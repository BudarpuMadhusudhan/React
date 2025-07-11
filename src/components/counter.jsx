import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div>
                <span className={this.getbadgeStyle()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className={this.getbadgeStyle()}>Increment</button>
            </div>
        );
    }

    getbadgeStyle() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes
    }

    formatCount() {
        // return this.state.count === 0 ? 'Zero' : this.state.count;
        const { count } = this.state;
        return count === 0 ? <h1>Zero</h1> : count;
    }
}

export default Counter;