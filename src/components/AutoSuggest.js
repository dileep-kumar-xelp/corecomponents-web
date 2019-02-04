import React, { Component } from "react";
import Searchable from "./functionalComponents/Searchable";
import DropDownBase from "./functionalComponents/DropDownBase";
import Input from "./Input";
import styles from "./DropDown.module.css";
export default class AutoSuggest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            highlight: -1
        };
        this.dropDownRef = React.createRef();
        this.highlightOption = React.createRef();
    }
    handleChange = val => {
        this.setState({ value: val, highlight: -1 });
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
        console.log(this.props);
        return (
            <DropDownBase
                onSelect={this.props.onSelect}
                selected={this.props.selected}
                onDropDown={val => this.handleDropDown(val)}
                render={props => (
                    <Searchable
                        keyName={this.props.keyName}
                        searchString={this.state.value}
                        data={this.props.options}
                        render={search => {
                            console.log(search);
                            return (
                                <div className={styles.base}>
                                    <div className={styles.selected}>
                                        <div
                                            className={styles.selected}
                                            onClick={props.handleDropDown}
                                        >
                                            {this.props.placeHolder &&
                                                !this.props.selected && (
                                                    <span
                                                        className={
                                                            styles.placeHolder
                                                        }
                                                    >
                                                        {this.props.placeHolder}
                                                    </span>
                                                )}
                                            {this.props.selected && (
                                                <span>
                                                    {this.props.selected.label}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {props.dropDownVisible && (
                                        <div
                                            style={{
                                                marginBottom: 42,
                                                position: "relative"
                                            }}
                                        >
                                            <Input
                                                value={this.state.value}
                                                onChange={val =>
                                                    this.handleChange(val)
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
                                            <div
                                                className={
                                                    props.distanceToBottom <
                                                        200 &&
                                                    props.distanceToTop > 200
                                                        ? styles.dropDownTop
                                                        : styles.dropDown
                                                }
                                                ref={this.dropDownRef}
                                            >
                                                {search &&
                                                    search.filterItems &&
                                                    search.filterItems.map(
                                                        (val, i) => {
                                                            return (
                                                                <div
                                                                    className={
                                                                        i ===
                                                                        this
                                                                            .state
                                                                            .highlight
                                                                            ? styles.optionHighlight
                                                                            : styles.option
                                                                    }
                                                                    onClick={() => {
                                                                        props.handleSelect(
                                                                            val
                                                                        );
                                                                        props.setDropDown(
                                                                            false
                                                                        );
                                                                    }}
                                                                    ref={
                                                                        i ===
                                                                        this
                                                                            .state
                                                                            .highlight
                                                                            ? this
                                                                                  .highlightOption
                                                                            : null
                                                                    }
                                                                >
                                                                    {val.label}
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                            </div>
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
