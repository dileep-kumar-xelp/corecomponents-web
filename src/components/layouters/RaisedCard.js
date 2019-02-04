import React from "react";
import styles from "./RaisedCard.module.css";

export default class Grid extends React.Component {
    render() {
        let className = styles.base;
        switch (this.props.elevation) {
            case 1:
                className = styles.elevation1;
                break;
            case 2:
                className = styles.elevation2;
                break;
            case 3:
                className = styles.elevation3;
                break;
            case 4:
                className = styles.elevation4;
                break;

            default:
                className = styles.base;
        }
        return (
            <div
                className={className}
                styles={{
                    padding: `${this.props.gutter}px`,
                    borderRadius: `${this.props.borderRadius}px`
                }}
            >
                {this.props.children}
            </div>
        );
    }
}
