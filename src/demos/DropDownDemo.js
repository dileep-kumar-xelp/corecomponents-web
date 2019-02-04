import React from "react";
import DropDown from "../components/DropDown";

export default class DropDownDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        };
    }
    handleSelect = selected => {
        this.setState({ selected });
    };
    render() {
        return (
            <DropDown
                onSelect={this.handleSelect}
                placeHolder="Select an option"
                selected={this.state.selected}
                options={[
                    { key: "1", label: "Option1" },
                    { key: "2", label: "Option2" },
                    { key: "3", label: "Option3" },
                    { key: "4", label: "Option4" },
                    { key: "5", label: "Option5" },
                    { key: "6", label: "Option6" },
                    { key: "7", label: "Option7" }
                ]}
            />
        );
    }
}
