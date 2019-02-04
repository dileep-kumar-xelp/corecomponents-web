import React from "react";
import ReactDOM from "react-dom";

export default class GestureElastic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            touchX: 0,
            touchY: 0,
            touchStartX: 0,
            touchStartY: 0,
            touchEndX: 0,
            touchEndY: 0,
            positionX: 0,
            positionY: 0,
            inJuke: false
        };
        this.node = null;
        this.offsetX = 0;
        this.offsetY = 0;
        this.totalOffsetX = 0;
        this.totalOffsetY = 0;
        this.left = null;
        this.right = null;
        this.width = null;
        this.height = null;
    }

    componentDidMount() {
        this.node = ReactDOM.findDOMNode(this);
        const elementRect = this.node.getBoundingClientRect();

        this.offsetX = elementRect.x;
        this.offsetY = elementRect.y;
        this.left = elementRect.left;
        this.right = elementRect.right;
        this.width = elementRect.width;
        this.height = elementRect.height;
        this.node.ontouchstart = event => {
            this.handleSwipeStart(event);
        };
        this.node.ontouchmove = event => {
            this.handleSwipeMove(event);
        };
        this.node.ontouchend = () => {
            this.handleSwipeEnd();
        };
        this.node.addEventListener("transitionend", () => {
            this.handleTransitionEnd();
        });
    }
    handleTransitionEnd() {
        this.setState({ inJuke: false });
    }
    handleSwipeStart(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        this.setState({
            swiping: true,
            touchStartX: evt.touches[0].clientX,
            touchStartY: evt.touches[0].clientY,
            touchX: evt.touches[0].clientX,
            touchY: evt.touches[0].clientY,
            startNoMove: true
        });
    }
    handleSwipeMove(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        if (this.state.swiping) {
            this.setState({ startNoMove: false });
            this.setState({
                touchX: evt.touches[0].clientX,
                touchY: evt.touches[0].clientY
            });
        }
    }
    handleSwipeEnd() {
        this.setState(
            {
                swiping: false,
                touchEndX: this.state.touchX,
                touchEndY: this.state.touchY
            },
            () => {
                this.setState({ inJuke: true }, () => {
                    if (
                        this.state.touchStartX - this.state.touchEndX >
                            this.props.swipeLimit &&
                        this.state.positionX < this.props.itemCount - 1
                    ) {
                        this.setState(
                            {
                                positionX: this.state.positionX + 1
                            },
                            () => {
                                this.totalOffsetX =
                                    (this.state.positionX *
                                        -(this.width * this.props.itemWidth)) /
                                    100;
                                if (this.props.onChangeX) {
                                    this.props.onChangeX(this.state.positionX);
                                }
                            }
                        );
                    } else {
                        this.totalOffsetX =
                            (this.state.positionX *
                                -(this.width * this.props.itemWidth)) /
                            100;
                    }
                    if (
                        this.state.touchEndX - this.state.touchStartX >
                            this.props.swipeLimit &&
                        this.state.positionX !== 0
                    ) {
                        this.setState(
                            {
                                positionX: this.state.positionX - 1
                            },
                            () => {
                                this.totalOffsetX =
                                    (this.state.positionX *
                                        -(this.width * this.props.itemWidth)) /
                                    100;
                                if (this.props.onChangeX) {
                                    this.props.onChangeX(this.state.positionX);
                                }
                            }
                        );
                    } else {
                        this.totalOffsetX =
                            (this.state.positionX *
                                -(this.width * this.props.itemWidth)) /
                            100;
                    }

                    if (
                        this.state.touchStartY - this.state.touchEndY >
                            this.props.swipeLimit &&
                        this.state.positionY < this.props.itemCount - 1
                    ) {
                        this.setState(
                            {
                                positionY: this.state.positionY + 1
                            },
                            () => {
                                this.totalOffsetY =
                                    (this.state.positionY *
                                        -(
                                            this.height * this.props.itemHeight
                                        )) /
                                    100;
                                if (this.props.onChangeY) {
                                    this.props.onChangeY(this.state.positionY);
                                }
                            }
                        );
                    } else {
                        this.totalOffsetY =
                            (this.state.positionY *
                                -(this.height * this.props.itemHeight)) /
                            100;
                    }
                    if (
                        this.state.touchEndY - this.state.touchStartY >
                            this.props.swipeLimit &&
                        this.state.positionY !== 0
                    ) {
                        this.setState(
                            {
                                positionY: this.state.positionY - 1
                            },
                            () => {
                                this.totalOffsetY =
                                    (this.state.positionY *
                                        -(
                                            this.height * this.props.itemHeight
                                        )) /
                                    100;
                                if (this.props.onChangeY) {
                                    this.props.onChangeY(this.state.positionY);
                                }
                            }
                        );
                    } else {
                        this.totalOffsetY =
                            (this.state.positionY *
                                -(this.height * this.props.itemHeight)) /
                            100;
                    }
                });
            }
        );
        if (this.state.startNoMove) {
            this.handleTransitionEnd();
            this.setState({ startNoMove: false });
        }
    }

    render() {
        const totalX = this.state.swiping
            ? this.state.touchX - this.state.touchStartX + this.totalOffsetX
            : (this.state.positionX * -(this.width * this.props.itemWidth)) /
              100;
        const relativeX = this.state.touchX - this.state.touchStartX;

        const totalY = this.state.swiping
            ? this.state.touchY - this.state.touchStartY + this.totalOffsetX
            : (this.state.positionX * -(this.width * this.props.itemWidth)) /
              100;
        const relativeY = this.state.touchY - this.state.touchStartY;
        const transitionY = this.state.inJuke
            ? Math.abs(relativeY) < this.props.swipeLimit
                ? `${50 +
                      (Math.abs(relativeY) / this.height) *
                          this.props.transition}ms`
                : `${this.props.transition +
                      50 -
                      (Math.abs(relativeY) / this.height) *
                          this.props.transition}ms`
            : "0ms";

        const transitionX = this.state.inJuke
            ? Math.abs(relativeY) < this.props.swipeLimit
                ? `${50 +
                      (Math.abs(relativeX) / this.width) *
                          this.props.transition}ms`
                : `${this.props.transition +
                      50 -
                      (Math.abs(relativeX) / this.width) *
                          this.props.transition}ms`
            : "0ms";

        return (
            <React.Fragment>
                {this.props.render({
                    ...this.state,
                    xMovement: totalX,
                    relativeX,
                    relativeY,
                    yMovement: totalY,
                    width: this.width,
                    height: this.height,
                    transitionX,
                    transitionY,
                    onSelect: this.onSelect
                })}
            </React.Fragment>
        );
    }
}
GestureElastic.defaultProps = {
    itemWidth: 100,
    itemHeight: 100,
    swipeLimit: 100,
    transition: 300
};
