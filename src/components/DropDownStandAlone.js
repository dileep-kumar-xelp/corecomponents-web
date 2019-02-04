import React from "react";
import styles from "./DropDown.module.css";

export default class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropDownVisible: false
        };
        this.node = React.createRef();
    }
    handleDropDown = () => {
        this.setState({ dropDownVisible: !this.state.dropDownVisible }, () => {
            if (this.state.dropDownVisible) {
                document.addEventListener("mousedown", this.handleClick, false);
            } else {
                document.removeEventListener(
                    "mousedown",
                    this.handleClick,
                    false
                );
            }
        });
    };
    handleClick = evt => {
        if (!this.node.current.contains(evt.target)) {
            this.setState({ dropDownVisible: false });
        }
    };
    handleSelect(val) {
        if (this.props.onSelect) {
            this.setState({ dropDownVisible: false }, () => {
                this.props.onSelect(val);
            });
        }
    }

    render() {
        return (
            <div
                className={styles.base}
                ref={this.node}
                onClick={this.handleClick}
            >
                <div className={styles.selected} onClick={this.handleDropDown}>
                    {this.props.placeHolder && !this.props.selected && (
                        <span className={styles.placeHolder}>
                            {this.props.placeHolder}
                        </span>
                    )}
                    {this.props.selected && <span>{this.props.selected}</span>}
                </div>
                {this.state.dropDownVisible && (
                    <div className={styles.dropDown}>
                        {this.props.options.map(val => {
                            return (
                                <div
                                    className={styles.option}
                                    onClick={() => {
                                        this.handleSelect(val);
                                    }}
                                >
                                    {val.label}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    }
}
