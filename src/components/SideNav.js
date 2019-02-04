import React from "react";
import styles from "./SideNav.module.css";

export default class SideNav extends React.Component {
    goToPage(url) {
        if (this.props.history) {
            this.props.history.push(url);
        }
    }
    render() {
        return (
            <div className={styles.base}>
                {this.props.links &&
                    this.props.links.map(val => {
                        return (
                            <div
                                className={styles.link}
                                onClick={() => this.goToPage(val.url)}
                            >
                                {val.label}
                            </div>
                        );
                    })}
            </div>
        );
    }
}
