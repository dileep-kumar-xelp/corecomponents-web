import React from "react";
import {
    ModalControl,
    Modal,
    ModalPanel
} from "../components/functionalComponents/ModalRoot";
import PropReader from "../components/PropReader";
export default class ModalDemo2 extends React.Component {
    render() {
        return (
            <Modal>
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
                            <PropReader {...props} />
                        </div>
                    )}
                </ModalControl>
                <ModalPanel>
                    {props => (
                        <div
                            style={{
                                width: "100%",
                                height: "100vh",
                                background: "red",
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
