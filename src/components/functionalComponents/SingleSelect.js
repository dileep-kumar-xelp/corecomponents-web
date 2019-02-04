import React from "react";
export default class SingleSelect extends React.Component {
    onSelect(key) {
        return key;
    }
    render() {
        return (
            <React.Fragment>
                {this.props.render({ ...this.props, onSelect: this.onSelect })}
            </React.Fragment>
        );
    }
}
