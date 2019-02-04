import React from "react";
import {
    ModalControl,
    Modal,
    ModalPanel
} from "../components/functionalComponents/ModalRoot";
export default class ModalDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showScreen: false };
    }

    handleModal(val) {
        this.setState({ showScreen: val });
    }

    render() {
        return (
            <Modal
                modalOpen={this.state.showScreen}
                handleModal={val => {
                    this.handleModal(val);
                }}
            >
                <div>
                    <ModalControl>
                        {props => (
                            <div>
                                <div
                                    style={{
                                        width: 50,
                                        height: 50,
                                        display: "inline-block",
                                        background: "black"
                                    }}
                                    onClick={() => props.handleModal(true)}
                                />
                                <div
                                    style={{
                                        width: 50,
                                        height: 50,
                                        display: "inline-block",
                                        background: "grey"
                                    }}
                                    onClick={() => props.handleModal(false)}
                                />
                            </div>
                        )}
                    </ModalControl>
                </div>
                <ModalPanel>
                    {props => (
                        <div
                            style={{
                                width: "100%",
                                height: "100vh",
                                background: "green",
                                position: "fixed",
                                left: 0,
                                top: 0
                            }}
                        >
                            <div
                                style={{
                                    width: 50,
                                    height: 50,
                                    background: "black",
                                    position: "absolute",
                                    right: 40,
                                    top: 40
                                }}
                                onClick={() => {
                                    props.handleModal(false);
                                }}
                            />
                        </div>
                    )}
                </ModalPanel>
            </Modal>
        );
    }
}
