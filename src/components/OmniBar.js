import React from "react";
import Search from "./Search";
import SearchBarMac from "./themeComponents/SearchBarMac";
import {
    ModalControl,
    Modal,
    ModalPanel
} from "./functionalComponents/ModalRoot";
import styles from "./OmniBar.module.css";

export default class OmniBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showScreen: false };
    }

    handleModal(val) {
        this.setState({ showScreen: val });
    }
    handleSelect = selected => {
        if (this.props.onSelect) {
            this.props.onSelect(selected);
            this.setState({ value: selected.label });
        }
    };
    handleChange = val => {
        this.setState({ value: val });
    };
    render() {
        return (
            <Modal
                modalOpen={this.state.showScreen}
                handleModal={val => {
                    this.handleModal(val);
                }}
            >
                <ModalControl>
                    {props => (
                        <div
                            className={styles.button}
                            onClick={() => props.handleModal(true)}
                        >
                            {this.props.selected
                                ? this.props.selected.label
                                : "Click to show Omnibar"}
                        </div>
                    )}
                </ModalControl>
                <ModalPanel>
                    {props => (
                        <div className={styles.base}>
                            <div
                                className={styles.panel}
                                onClick={() => props.handleModal(false)}
                            />
                            <div className={styles.centeredContent}>
                                <Search
                                    inputComponent={SearchBarMac}
                                    options={this.props.options}
                                    value={this.state.value}
                                    keyName={this.props.keyName}
                                    selected={this.props.selected}
                                    onSelect={this.handleSelect}
                                    onChange={this.handleChange}
                                    dropDownStyle={{ position: "static" }}
                                />
                            </div>
                        </div>
                    )}
                </ModalPanel>
            </Modal>
        );
    }
}
