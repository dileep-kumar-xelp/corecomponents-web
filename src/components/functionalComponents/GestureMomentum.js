import React from "react";
import ReactDOM from "react-dom";
import styles from "./GestureMomentum.module.css";

export default class GestureMomentum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            touchX: 0,
            touchY: 0,
            touchStartX: 0,
            touchStartY: 0,
            touchEndX: 0,
            touchEndY: 0
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
        this.node.ontouchstart = event => {
            this.handleSwipeStart(event);
        };
        this.node.ontouchmove = event => {
            this.handleSwipeMove(event);
        };
        this.node.ontouchend = () => {
            this.handleSwipeEnd();
        };
    }
    handleSwipeStart(evt) {
        evt.stopPropagation();

        this.setState({
            touchStartX: evt.touches[0].clientX,
            touchStartY: evt.touches[0].clientY,
            touchX: evt.touches[0].clientX,
            touchY: evt.touches[0].clientY
        });
    }
    handleSwipeMove(evt) {
        evt.stopPropagation();

        this.setState({
            touchX: evt.touches[0].clientX,
            touchY: evt.touches[0].clientY
        });
    }
    handleSwipeEnd() {
        this.setState({
            touchEndX: this.state.touchX,
            touchEndY: this.state.touchY
        });
        this.totalOffset =
            this.state.touchX - this.state.touchStartX + this.totalOffset;
    }

    render() {
        const total =
            this.state.touchX - this.state.touchStartX + this.totalOffset;

        return (
            <div className={styles.base}>
                <div
                    className={styles.slider}
                    style={{
                        transform: `translateX(${total}px`
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
        /* <div
                style={{
                    width: "100%",
                    height: "100vh",
                    background: "black",
                    position: "relative"
                }}
            >
                <div
                    style={{
                        width: 100,
                        height: 100,
                        background: "white",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        transform: `translate(${this.state.touchX -
                            50}px , ${this.state.touchY - 20}px)`
                    }}
                /> 
            </div>*/
    }
}
