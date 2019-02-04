import React from "react";
import PropTypes from "prop-types";
import styles from "./CenteredContent.module.css";
export default class CenteredContent extends React.Component {
    render() {
        return (
            <div
                className={styles.base}
                style={{ backgroundColor: this.props.backgroundColor }}
            >
                <div
                    className={styles.content}
                    style={{ maxWidth: this.props.contentWidth }}
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}

CenteredContent.propTypes = {
    backgroundColor: PropTypes.string,
    contentWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
