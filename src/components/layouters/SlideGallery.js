import React from "react";
import PropTypes from "prop-types";
import styles from "./SlideGallery.module.css";
export default class SlideGallery extends React.Component {
    render() {
        return (
            <div className={styles.base}>
                <div
                    className={styles.slider}
                    style={{
                        transform: `translateX(${this.props.position * -100}%)`,
                        ...this.props.galleryStyles
                    }}
                >
                    {this.props.children &&
                        this.props.children.map(child => {
                            return (
                                <div
                                    className={styles.item}
                                    style={{ ...this.props.itemStyle }}
                                >
                                    {child}
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}
SlideGallery.propTypes = {
    position: PropTypes.number,
    galleryStyles: PropTypes.object,
    itemStyle: PropTypes.object
};
