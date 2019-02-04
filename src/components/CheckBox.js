import React from "react";
import MultiSelect from "./functionalComponents/MultiSelect";
import styles from "./CheckBox.module.css";
export default class CheckBox extends React.Component {
    render() {
        return (
            <MultiSelect
                onSelect={this.props.onSelect}
                selected={this.props.selected}
                render={props => (
                    <div className={styles.base}>
                        {this.props.options &&
                            this.props.options.map(val => {
                                return (
                                    <div
                                        className={
                                            this.props.selected &&
                                            this.props.selected.length > 0 &&
                                            this.props.selected.includes(
                                                val.value
                                            )
                                                ? styles.buttonActive
                                                : styles.button
                                        }
                                        onClick={() => {
                                            props.onSelect(val.value);
                                        }}
                                    >
                                        <div className={styles.label}>
                                            {val.label}
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                )}
            />
        );
    }
}
