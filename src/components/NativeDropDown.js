import React from "react";
import NativeDropDownBase from "./functionalComponents/NativeDropDownBase";
import styles from "./NativeDropDown.module.css";

export default class NativeDropDown extends React.Component {
    render() {
        return (
            <NativeDropDownBase
                onSelect={this.props.onSelect}
                selected={this.props.selected}
                options={this.props.options}
                render={props => (
                    <div className={styles.base}>
                        <select
                            name={this.props.name}
                            className={styles.hideSelect}
                            onChange={event => props.onSelect(event)}
                            value={
                                this.props.selected
                                    ? this.props.selected.key
                                    : null
                            }
                        >
                            {this.props.options &&
                                this.props.options.map((item, i) => {
                                    return (
                                        <option key={i} value={item.key}>
                                            {item.label}
                                        </option>
                                    );
                                })}
                        </select>
                        <div className={styles.visibleBox}>
                            {this.props.selected &&
                            this.props.selected.label ? (
                                this.props.selected.label
                            ) : (
                                <span className={styles.placeHolder}>
                                    {this.props.placeHolder}
                                </span>
                            )}
                        </div>
                    </div>
                )}
            />
        );
    }
}
