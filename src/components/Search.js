import React, { Component } from "react";
import Searchable from "./functionalComponents/Searchable";
import DropDownBase from "./functionalComponents/DropDownBase";
import Input from "./Input";
import styles from "./DropDown.module.css";

function Option(props) {
    return (
        <div
            className={props.highlight ? styles.optionHighlight : styles.option}
            onClick={() => {
                props.handleSelect(props.option);
                props.setDropDown(false);
            }}
        >
            {props.option.label}
        </div>
    );
}
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            highlight: -1
        };
        this.dropDownRef = React.createRef();
        this.highlightOption = React.createRef();
    }
    handleChange = (val, dropDownFunc) => {
        this.setState({ highlight: -1 });
        if (this.props.onChange) {
            this.props.onChange(val);
            dropDownFunc(true);
        }
    };
    handleKeyEvents = (key, options, selectFunc, dropDownFunc) => {
        if (key === "ArrowDown") {
            if (this.state.highlight < options.length - 1) {
                this.setState({ highlight: this.state.highlight + 1 }, () => {
                    if (this.highlightOption && this.highlightOption.current) {
                        this.highlightOption.current.scrollIntoView({
                            block: "center"
                        });
                    }
                });
            } else {
                this.setState({ highlight: 0 }, () => {
                    if (this.highlightOption && this.highlightOption.current) {
                        this.highlightOption.current.scrollIntoView({
                            block: "center"
                        });
                    }
                });
            }
        }
        if (key === "ArrowUp") {
            if (this.state.highlight > 0) {
                this.setState({ highlight: this.state.highlight - 1 }, () => {
                    if (this.highlightOption && this.highlightOption.current) {
                        this.highlightOption.current.scrollIntoView({
                            block: "center"
                        });
                    }
                });
            } else {
                this.setState({ highlight: options.length - 1 }, () => {
                    if (this.highlightOption && this.highlightOption.current) {
                        this.highlightOption.current.scrollIntoView({
                            block: "center"
                        });
                    }
                });
            }
        }
        if (key === "Enter") {
            selectFunc(options[this.state.highlight]);
            dropDownFunc(false);
        }
    };
    handleDropDown = val => {
        this.setState({ highlight: -1 });
    };
    render() {
        const componentMapping = {
            Input: this.props.inputComponent
                ? this.props.inputComponent
                : Input,
            Option: this.props.optionComponent
                ? this.props.optionComponent
                : Option
        };
        return (
            <DropDownBase
                onSelect={this.props.onSelect}
                selected={this.props.selected}
                onDropDown={val => this.handleDropDown(val)}
                render={props => (
                    <Searchable
                        keyName={this.props.keyName}
                        searchString={this.props.value}
                        data={this.props.options}
                        render={search => {
                            return (
                                <div className={styles.base}>
                                    <div onClick={props.handleDropDown}>
                                        <componentMapping.Input
                                            value={this.props.value}
                                            placeHolder={
                                                this.props.selected &&
                                                this.props.selected.label
                                            }
                                            onChange={val =>
                                                this.handleChange(
                                                    val,
                                                    props.setDropDown
                                                )
                                            }
                                            autoFocus={true}
                                            onKeyDown={(val, event) => {
                                                this.handleKeyEvents(
                                                    event.key,
                                                    search.filterItems,
                                                    props.handleSelect,
                                                    props.setDropDown
                                                );
                                            }}
                                        />
                                    </div>

                                    {props.dropDownVisible && (
                                        <div
                                            className={
                                                props.distanceToBottom < 200 &&
                                                props.distanceToTop > 200
                                                    ? styles.dropDownTop
                                                    : styles.dropDown
                                            }
                                            style={{
                                                ...this.props.dropDownStyle
                                            }}
                                            ref={this.dropDownRef}
                                        >
                                            {search &&
                                                search.filterItems &&
                                                search.filterItems.map(
                                                    (val, i) => {
                                                        return (
                                                            <div
                                                                ref={
                                                                    i ===
                                                                    this.state
                                                                        .highlight
                                                                        ? this
                                                                              .highlightOption
                                                                        : null
                                                                }
                                                            >
                                                                <componentMapping.Option
                                                                    highlight={
                                                                        i ===
                                                                        this
                                                                            .state
                                                                            .highlight
                                                                    }
                                                                    option={val}
                                                                    handleSelect={
                                                                        props.handleSelect
                                                                    }
                                                                    setDropDown={
                                                                        props.setDropDown
                                                                    }
                                                                />
                                                            </div>
                                                        );
                                                    }
                                                )}
                                            {search &&
                                                search.filterItems &&
                                                search.filterItems &&
                                                search.filterItems.length ===
                                                    0 && (
                                                    <div
                                                        className={
                                                            styles.option
                                                        }
                                                        style={{
                                                            color:
                                                                "rgba(0,0,0,0.6)",
                                                            pointerEvents:
                                                                "none",
                                                            borderBottom: "none"
                                                        }}
                                                    >
                                                        No results.
                                                    </div>
                                                )}
                                        </div>
                                    )}
                                </div>
                            );
                        }}
                    />
                )}
            />
        );
    }
}
