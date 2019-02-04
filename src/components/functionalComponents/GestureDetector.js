import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
const SWIPE_DISTANCE = 30;
export default class GestureDetector extends React.Component {
    constructor(props) {
        super(props);
        this.swipeSensitivity = this.props.swipeSensitivity
            ? this.props.swipeSensitivity
            : SWIPE_DISTANCE;
    }
    componentDidMount() {
        ReactDOM.findDOMNode(this).ontouchstart = event => {
            this.handleSwipeStart(event);
        };
        ReactDOM.findDOMNode(this).ontouchmove = event => {
            this.handleSwipeMove(event);
        };
        ReactDOM.findDOMNode(this).ontouchend = () => {
            this.handleSwipeEnd();
        };
    }
    handleSwipeStart(evt) {
        evt.stopPropagation();
        this.setState({
            touchStartX: evt.touches[0].clientX,
            touchStartY: evt.touches[0].clientY
        });
    }
    handleSwipeMove(evt) {
        evt.stopPropagation();
        this.setState({
            touchEndX: evt.touches[0].clientX,
            touchEndY: evt.touches[0].clientY
        });
    }
    handleSwipeEnd() {
        if (
            this.state.touchStartX - this.state.touchEndX <
            this.swipeSensitivity
        ) {
            this.toRight();
        }
        if (
            this.state.touchStartX - this.state.touchEndX >
            this.swipeSensitivity
        ) {
            this.toLeft();
        }
        if (
            this.state.touchStartY - this.state.touchEndY <
            -this.swipeSensitivity
        ) {
            this.toBottom();
        }
        if (
            this.state.touchStartY - this.state.touchEndY >
            this.swipeSensitivity
        ) {
            this.toTop();
        }
    }
    toRight = () => {
        if (this.props.toRight) {
            this.props.toRight();
        }
    };
    toLeft = () => {
        if (this.props.toLeft) {
            this.props.toLeft();
        }
    };
    toTop = () => {
        if (this.props.toTop) {
            this.props.toTop();
        }
    };
    toBottom = () => {
        if (this.props.toBottom) {
            this.props.toBottom();
        }
    };

    render() {
        return <React.Fragment>{this.props.render(this.state)}</React.Fragment>;
    }
}

GestureDetector.propTypes = {
    swipeSensitivity: PropTypes.number,
    toLeft: PropTypes.func,
    toRight: PropTypes.func,
    toTop: PropTypes.func,
    toBottom: PropTypes.func
};
