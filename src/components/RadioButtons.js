import React from "react";
import styles from "./RadioButtons.module.css";
export default class RadioButtons extends React.Component {
    handleSelect(key, value) {
        if (this.props.onSelect) {
            this.props.onSelect(key, value);
        }
    }
    render() {
        return (
            <div className={styles.base}>
                {this.props.options &&
                    this.props.options.map((val, i) => {
                        return (
                            <div
                                key={i}
                                className={
                                    val.value === this.props.selected
                                        ? styles.buttonActive
                                        : styles.button
                                }
                                onClick={() => {
                                    this.handleSelect(val.value, val.label);
                                }}
                            >
                                <div className={styles.lable}>{val.label}</div>
                            </div>
                        );
                    })}
            </div>
        );
    }
}
