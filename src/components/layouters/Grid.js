import React, { Component } from "react";
import styles from "./Grid.module.css";
export default class GridLayout extends Component {
    render() {
        const columnNumbers = [];
        for (let i = 0; i < this.props.columnNumber; i++) {
            columnNumbers.push(i);
        }
        const children = this.props.children;
        return (
            <div className={styles.base}>
                {columnNumbers.map(columnIndex => {
                    return (
                        <div
                            className={styles.column}
                            style={{
                                width: `${100 / this.props.columnNumber}%`,
                                paddingLeft: `${this.props.gutter}px`,
                                paddingRight: `${this.props.gutter}px`
                            }}
                        >
                            {children
                                .filter((val, i) => {
                                    return (
                                        (i - columnIndex) %
                                        this.props.columnNumber ===
                                        0
                                    );
                                })
                                .map(child => {
                                    return (
                                        <div
                                            className={styles.item}
                                            style={{
                                                paddingTop: `${
                                                    this.props.gutter
                                                }px`,
                                                paddingBottom: `${
                                                    this.props.gutter
                                                }px`
                                            }}
                                        >
                                            {child}
                                        </div>
                                    );
                                })}
                        </div>
                    );
                })}
            </div>
        );
    }
}
