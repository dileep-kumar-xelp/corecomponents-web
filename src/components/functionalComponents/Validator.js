import React from "react";
// import Input from "./Input";
export default class Validator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { valid: true, value: "" };
    }
    validate = () => {
        if (this.props.validate) {
            this.props.validate.every((func, index) => {
                if (!func(this.state.value)) {
                    this.setState({ valid: false });
                    if (this.props.onError) {
                        this.props.onError();
                    }
                    return false;
                } else {
                    this.setState({ valid: true });
                    return true;
                }
            });
        }
    };
    onChange = value => {
        this.setState({ value });
    };
    render() {
        return (
            <React.Fragment>
                {this.props.render({
                    ...this.state,
                    onChange: this.onChange,
                    validate: this.validate
                })}
            </React.Fragment>
        );
    }
}
