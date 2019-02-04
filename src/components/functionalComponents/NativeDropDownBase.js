import React from "react";
export default class NativeDropDownBase extends React.Component {
    onSelect = event => {
        const selectedValue = event.target.value;

        if (this.props.onSelect) {
            const selectedOption =
                this.props.options &&
                this.props.options.find(val => {
                    return val.key === selectedValue;
                });
            if (selectedOption) {
                this.props.onSelect(selectedOption);
            }
        }
    };
    render() {
        return (
            <React.Fragment>
                {this.props.render({ ...this.props, onSelect: this.onSelect })}
            </React.Fragment>
        );
    }
}
