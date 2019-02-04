import React from "react";
import GestureElastic from "../functionalComponents/GestureElastic";
import styles from "./MobileSliderTata.module.css";
export default class MobileSliderTata extends React.Component {
    render() {
        return (
            <GestureElastic
                itemWidth={this.props.itemWidth}
                onChangeX={this.props.onChange}
                itemCount={this.props.children.length}
                render={props => {
                    const scaleSecondary =
                        0.9 +
                        Math.abs(
                            ((props.relativeX % props.width) / props.width) *
                                0.1
                        );
                    const scalePrimary =
                        1 -
                        Math.abs(
                            ((props.relativeX % props.width) / props.width) *
                                0.1
                        );
                    return (
                        <div className={styles.base}>
                            <div
                                className={styles.slider}
                                style={{
                                    transform: `translateX(${
                                        props.xMovement
                                    }px`,
                                    transition: `${props.transitionX} ease-out`
                                }}
                            >
                                {this.props.children &&
                                    this.props.children.map((child, i) => {
                                        return (
                                            <div
                                                className={styles.item}
                                                style={{
                                                    width: `${
                                                        this.props.itemWidth
                                                    }%`,
                                                    transform: `scale(${
                                                        props.swiping
                                                            ? props.positionX ===
                                                              i
                                                                ? scalePrimary
                                                                : props.positionX -
                                                                      1 ===
                                                                      i ||
                                                                  props.positionX +
                                                                      1 ===
                                                                      i
                                                                    ? scaleSecondary
                                                                    : 0.9
                                                            : props.positionX ===
                                                              i
                                                                ? 1
                                                                : 0.9
                                                    })`,

                                                    transition: `${
                                                        props.transitionX
                                                    } ease-out`
                                                }}
                                            >
                                                {child}
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    );
                }}
            />
        );
    }
}
