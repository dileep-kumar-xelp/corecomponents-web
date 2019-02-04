import React from "react";
import Input from "../components/Input";
import InputFloatLabel from "../components/themeComponents/InputFloatingLabel";
export default class InputDemo extends React.Component {
    constructor(props) {
        super(props);
        this.child = this.child = React.createRef();
        this.state = {
            default: "",
            name: "",
            place: "",
            animal: "",
            thing: ""
        };
    }

    onChange = val => {
        this.setState({ ...val });
    };

    blurInput = () => {
        this.child.current.blurInput();
    };
    focusInput = () => {
        this.child.current.focusInput();
    };
    render() {
        return (
            <div>
                <div style={{ marginTop: 50 }}>
                    <Input
                        onChange={val => this.onChange({ default: val })}
                        ref={this.child}
                        value={this.state.default}
                    />
                    <div
                        style={{
                            width: 50,
                            height: 50,
                            backgroundColor: "black",
                            display: "inline-block"
                        }}
                        onClick={this.blurInput}
                    />
                    <div
                        style={{
                            width: 50,
                            height: 50,
                            backgroundColor: "grey",
                            display: "inline-block"
                        }}
                        onClick={this.focusInput}
                    />
                </div>
                <div
                    style={{
                        marginTop: 50,
                        width: 250,
                        display: "inline-block",
                        paddingRight: 20
                    }}
                >
                    <InputFloatLabel
                        placeholder="Name"
                        onChange={val => this.onChange({ name: val })}
                        value={this.state.name}
                    />
                </div>
                <div
                    style={{
                        marginTop: 50,
                        width: 250,
                        display: "inline-block",
                        paddingRight: 20
                    }}
                >
                    <InputFloatLabel
                        placeholder="Place"
                        onChange={val => this.onChange({ place: val })}
                        value={this.state.place}
                        primaryColour={"#2dde98"}
                    />
                </div>
                <div
                    style={{
                        marginTop: 50,
                        width: 250,
                        display: "inline-block",
                        paddingRight: 20
                    }}
                >
                    <InputFloatLabel
                        placeholder="Animal"
                        onChange={val => this.onChange({ animal: val })}
                        value={this.state.animal}
                        primaryColour={"#e60023"}
                    />
                </div>
                <div
                    style={{
                        marginTop: 50,
                        width: 250,
                        display: "inline-block",
                        paddingRight: 20
                    }}
                >
                    <InputFloatLabel
                        placeholder="Thing"
                        onChange={val => this.onChange({ thing: val })}
                        value={this.state.thing}
                        primaryColour={"#0d4b4e"}
                    />
                </div>
            </div>
        );
    }
}
