import React from "react";
import styles from "./ContentWithPanel.module.css";

export default class SideNav extends React.Component {
    render() {
        return (
            <div className={styles.base}>
                <div className={styles.panel}>{this.props.panel}</div>
                <div className={styles.content}>{this.props.children}</div>
            </div>
        );
    }
}
