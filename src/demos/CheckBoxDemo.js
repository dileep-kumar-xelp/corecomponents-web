import React from "react";
import CheckBox from "../components/CheckBox";

export default class CheckBoxDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleSelect(val) {
        this.setState({ selected: val });
    }
    render() {
        return (
            <CheckBox
                selected={this.state.selected}
                options={[
                    { label: "Option 1", value: "1" },
                    { label: "Option 2", value: "2" },
                    { label: "Option 3", value: "3" }
                ]}
                onSelect={val => this.handleSelect(val)}
            />
        );
    }
}
