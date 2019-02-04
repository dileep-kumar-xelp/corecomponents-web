import React from "react";
import TagCloud from "../components/TagCloud";

export default class TagCloudDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: []
        };
    }
    handleSelect = tags => {
        this.setState({ tags });
    };
    render() {
        return <TagCloud onSelect={this.handleSelect} tags={this.state.tags} />;
    }
}
