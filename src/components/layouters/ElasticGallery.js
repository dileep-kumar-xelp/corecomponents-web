import React from "react";
import ReactDOM from "react-dom";
import styles from "./ElasticGallery.module.css";

export default class ElasticGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            touchX: 0,
            touchY: 0,
            touchStartX: 0,
            touchStartY: 0,
            touchEndX: 0,
            touchEndY: 0,
            position: 0,
            inJuke: false
        };
        this.node = null;
        this.offsetX = 0;
        this.offsetY = 0;
        this.totalOffset = 0;
    }

    componentDidMount() {
        this.node = ReactDOM.findDOMNode(this);
        console.log(this.node.getBoundingClientRect());
        const elementRect = this.node.getBoundingClientRect();

        this.offsetX = elementRect.x;
        this.offsetY = elementRect.y;
        this.left = elementRect.left;
        this.right = elementRect.right;
        this.width = elementRect.width;
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
        if (!this.state.inJuke) {
            this.setState({
                swiping: true,
                touchStartX: evt.touches[0].clientX,
                touchStartY: evt.touches[0].clientY,
                touchX: evt.touches[0].clientX,
                touchY: evt.touches[0].clientY
            });
        }
    }
    handleSwipeMove(evt) {
        evt.stopPropagation();
        if (!this.state.inJuke) {
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
                    if (this.state.touchStartX - this.state.touchEndX > 100) {
                        this.setState(
                            {
                                position: this.state.position + 1
                            },
                            () => {
                                this.totalOffset =
                                    this.state.position * -(this.width * 0.8);
                            }
                        );
                    } else {
                        this.totalOffset =
                            this.state.position * -(this.width * 0.8);
                    }
                    if (this.state.touchEndX - this.state.touchStartX > 100) {
                        this.setState(
                            {
                                inJuke: true,
                                position: this.state.position - 1
                            },
                            () => {
                                this.totalOffset =
                                    this.state.position * -(this.width * 0.8);
                            }
                        );
                    } else {
                        this.totalOffset =
                            this.state.position * -(this.width * 0.8);
                    }
                });
            }
        );
    }

    render() {
        const total = this.state.swiping
            ? this.state.touchX - this.state.touchStartX + this.totalOffset
            : this.state.position * -(this.width * 0.8);
        const transition = this.state.inJuke ? "200ms" : "0ms";

        return (
            <div className={styles.base}>
                <div
                    className={styles.slider}
                    style={{
                        transform: `translateX(${total}px`,
                        transition: transition
                    }}
                >
                    <div className={styles.item}>
                        <div className={styles.child}>1</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.child}>2</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.child}>3</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.child}>4</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.child}>5</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.child}>6</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.child}>7</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.child}>8</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.child}>9</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.child}>10</div>
                    </div>
                </div>
            </div>
        );
    }
}
