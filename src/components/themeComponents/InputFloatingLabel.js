import React from "react";
import InputController from "../functionalComponents/InputController";
import styles from "./InputFloatingLabel.module.css";
export default class InputFloatingLabel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            float: this.props.value ? true : false
        };
    }
    handleChange = (value, event) => {
        if (this.props.onChange) {
            this.props.onChange(value, event);
        }
    };
    handleFocus = (value, event) => {
        console.log("called");
        if (this.props.onFocus) {
            this.props.onFocus(value, event);
        }
        this.setState({ float: true });
    };
    handleBlur = (value, event) => {
        if (this.props.onBlur) {
            this.props.onBlur(value, event);
        }
        if (!this.props.value) {
            this.setState({ float: false });
        }
    };
    handleKeyPress = (value, event) => {
        if (this.props.onKeyPress) {
            this.props.onKeyPress(value, event);
        }
    };
    handleKeyUp = (value, event) => {
        if (this.props.onKeyUp) {
            this.props.onKeyUp(value, event);
        }
    };
    handleKeyDown = (value, event) => {
        if (this.props.onKeyDown) {
            this.props.onKeyDown(value, event);
        }
    };
    render() {
        console.log(this.state);
        return (
            <InputController
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                onKeyUp={this.handleKeyUp}
                onKeyDown={this.handleKeyDown}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                render={funcs => (
                    <div
                        className={
                            this.state.float ? styles.baseActive : styles.base
                        }
                    >
                        <input
                            {...this.props}
                            placeholder=""
                            onChange={event => {
                                funcs.onChange(event);
                            }}
                            onFocus={event => {
                                funcs.onFocus(event);
                            }}
                            onBlur={event => {
                                funcs.onBlur(event);
                            }}
                            onKeyPress={event => {
                                funcs.onKeyPress(event);
                            }}
                            onKeyUp={event => {
                                funcs.onKeyUp(event);
                            }}
                            onKeyDown={event => {
                                funcs.onKeyDown(event);
                            }}
                            ref={this.inputRef}
                            style={{ color: this.props.primaryColour }}
                        />
                        <div
                            className={styles.label}
                            style={{
                                color: this.props.primaryColour
                            }}
                        >
                            {this.props.placeholder}
                        </div>
                        <div
                            className={styles.underline}
                            style={{
                                backgroundColor: this.props.secondaryColour
                            }}
                        >
                            <div
                                className={styles.scaler}
                                style={{
                                    backgroundColor: this.props.primaryColour
                                }}
                            />
                        </div>
                    </div>
                )}
            />
        );
    }
}
