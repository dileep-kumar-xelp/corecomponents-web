import React from "react";
import styles from "./CheckBox.module.css";
export default class CheckBox extends React.Component {
    handleSelect(key) {
        if (this.props.onSelect) {
            const selected = this.props.selected ? this.props.selected : [];
            let val = [];
            if (this.props.selected) {
                val = val.concat(this.props.selected);
            }
            if (!selected.includes(key)) {
                val.push(key);
                this.props.onSelect(val);
            } else {
                const filteredOptions = val.filter(value => {
                    return value !== key;
                });

                this.props.onSelect(filteredOptions);
            }
        }
    }
    render() {
        return (
            <div className={styles.base}>
                {this.props.options &&
                    this.props.options.map(val => {
                        return (
                            <div
                                className={
                                    this.props.selected &&
                                    this.props.selected.includes(val.value)
                                        ? styles.buttonActive
                                        : styles.button
                                }
                                onClick={() => {
                                    this.handleSelect(val.value, val.label);
                                }}
                            >
                                <div className={styles.label}>{val.label}</div>
                            </div>
                        );
                    })}
            </div>
        );
    }
}
