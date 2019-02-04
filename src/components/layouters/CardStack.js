import React from "react";
import GestureElastic from "../functionalComponents/GestureElastic";
import styles from "./CardStack.module.css";

export default class CardStack extends React.Component {
    render() {
        const children = this.props.children.slice().reverse();
        const count = children.length - 1;
        return (
            <GestureElastic
                onChangeY={this.props.onChange}
                itemCount={children.length}
                transition={400}
                render={props => {
                    const opacity =
                        1 -
                        Math.abs(
                            (props.relativeY % props.height) / props.height
                        );
                    const scale = 0.8 + (1 - opacity) * 0.2;
                    const exitScale = 1 - (1 - opacity) * 0.2;

                    return (
                        <div className={styles.base}>
                            {children.map((child, i) => {
                                const inverseIndex = count - i;
                                let transform = "";
                                let display = "block";
                                if (
                                    inverseIndex === props.positionY &&
                                    props.relativeY < 0
                                ) {
                                    transform = `translateY(${
                                        props.yMovement
                                    }px`;
                                } else if (
                                    inverseIndex === props.positionY + 1 &&
                                    props.relativeY < 0
                                ) {
                                    transform = `scale(${scale})`;
                                } else if (
                                    inverseIndex === props.positionY &&
                                    props.relativeY > 0 &&
                                    props.swiping
                                ) {
                                    transform = `scale(${exitScale}`;
                                } else if (
                                    inverseIndex === props.positionY + 1 &&
                                    props.relativeY > 0 &&
                                    props.swiping
                                ) {
                                    display = "none";
                                } else if (
                                    inverseIndex === props.positionY + 1 &&
                                    props.relativeY > 0 &&
                                    !props.swiping
                                ) {
                                    transform = `scale(0.8)`;
                                } else if (
                                    inverseIndex === props.positionY - 1 &&
                                    props.relativeY > 0
                                ) {
                                    transform = `translateY(${props.yMovement -
                                        props.height}px`;
                                } else if (inverseIndex < props.positionY) {
                                    transform = `translateY(-110%)`;
                                } else {
                                    transform = null;
                                }
                                if (
                                    props.positionY === inverseIndex ||
                                    props.positionY === inverseIndex - 1 ||
                                    props.positionY === inverseIndex + 1
                                ) {
                                    return (
                                        <React.Fragment>
                                            <div
                                                className={styles.fader}
                                                style={{
                                                    opacity:
                                                        inverseIndex ===
                                                            props.positionY &&
                                                        props.relativeY < 0
                                                            ? opacity
                                                            : inverseIndex ===
                                                                  props.positionY -
                                                                      1 &&
                                                              props.relativeY >
                                                                  0 &&
                                                              props.swiping
                                                                ? 1 - opacity
                                                                : 0,

                                                    transition:
                                                        props.transitionY
                                                }}
                                            />
                                            <div
                                                className={styles.content}
                                                style={{
                                                    transform: transform,
                                                    display: display,
                                                    transition:
                                                        props.transitionY
                                                }}
                                            >
                                                {child}
                                            </div>
                                        </React.Fragment>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                        </div>
                    );
                }}
            />
        );
    }
}
