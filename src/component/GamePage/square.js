import React from 'react';
/*
export default class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }
    render() {
        return (
            <button
                className="square"
                onClick={() => this.props.onClick()}
            >
                {this.props.value}
            </button>
        );
    }
}*/
export function Square(props) {
    return (
        <button
            className='square'
            onClick={props.onClick}>
            {props.value}
        </button>
    )
}