import React from "react";
import ReactDOM from "react-dom";
const modalRoot = document.getElementById("modal-root");
const ModalContext = React.createContext();
export class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false
        };
    }

    handleModal = status => {
        // this.setState({ modalOpen: status });
        if (this.props.handleModal) {
            this.props.handleModal(status);
        }
    };

    render() {
        return (
            <ModalContext.Provider
                value={{ ...this.props, handleModal: this.handleModal }}
            >
                {this.props.children}
            </ModalContext.Provider>
        );
    }
}
export class ModalPanel extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement("div");
    }
    componentDidMount() {
        modalRoot.appendChild(this.el);
    }
    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            <ModalContext.Consumer>
                {context =>
                    context.modalOpen ? this.props.children(context) : null
                }
            </ModalContext.Consumer>,
            this.el
        );
    }
}

export class ModalControl extends React.Component {
    render() {
        return (
            <ModalContext.Consumer>
                {context => this.props.children(context)}
            </ModalContext.Consumer>
        );
    }
}
