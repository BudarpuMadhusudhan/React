import React, { Component } from 'react'
class ComposingComponent extends Component {
    state = {
        value: this.props.value
    }
    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 })
    }
    render() {
        return (
            <>
                <span className={this.getStyle()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className={this.getStyle()}>Increment</button>
            <button
    onClick={() => {
        if (this.props.onDelete && this.props.id !== undefined) {
            this.props.onDelete(this.props.id);
        }
    }}
    className="btn btn-danger btn-sm"
>
    Delete
</button>
            </>
        );
    }
    getStyle() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        // return this.state.count === 0 ? 'Zero' : this.state.count;
        const { value: count } = this.state;
        return count === 0 ? <h1>Zero</h1> : count;
    }
}

export default ComposingComponent;