import React from "react";
import HorizontalSlide from "../components/HorizontalSlide";
export default class SliderDemo extends React.Component {
    render() {
        return (
            <HorizontalSlide>
                <div
                    style={{
                        width: "100%",
                        height: "300px",
                        backgroundColor: "red"
                    }}
                />
                <div
                    style={{
                        width: "100%",
                        height: "300px",
                        backgroundColor: "yellow"
                    }}
                />
                <div
                    style={{
                        width: "100%",
                        height: "300px",
                        backgroundColor: "black"
                    }}
                />
            </HorizontalSlide>
        );
    }
}
