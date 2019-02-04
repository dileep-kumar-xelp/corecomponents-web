import React from "react";
import MobileSliderTata from "../components/layouters/MobileSliderTata";

export default class MobileSliderTataDemo extends React.Component {
    render() {
        return (
            <MobileSliderTata itemWidth={85} onChange={val => console.log(val)}>
                <div
                    style={{
                        width: "100%",
                        height: "auto",
                        paddingBottom: "80%",
                        background: "grey",
                        borderRadius: "4px"
                    }}
                >
                    1
                </div>
                <div
                    style={{
                        width: "100%",
                        height: "auto",
                        paddingBottom: "80%",
                        background: "grey",
                        borderRadius: "4px"
                    }}
                >
                    2
                </div>
                <div
                    style={{
                        width: "100%",
                        height: "auto",
                        paddingBottom: "80%",
                        background: "grey",
                        borderRadius: "4px"
                    }}
                >
                    3
                </div>
                <div
                    style={{
                        width: "100%",
                        height: "auto",
                        paddingBottom: "80%",
                        background: "grey",
                        borderRadius: "4px"
                    }}
                >
                    4
                </div>
                <div
                    style={{
                        width: "100%",
                        height: "auto",
                        paddingBottom: "80%",
                        background: "grey",
                        borderRadius: "4px"
                    }}
                >
                    5
                </div>
                <div
                    style={{
                        width: "100%",
                        height: "auto",
                        paddingBottom: "80%",
                        background: "grey",
                        borderRadius: "4px"
                    }}
                >
                    6
                </div>
                <div
                    style={{
                        width: "100%",
                        height: "auto",
                        paddingBottom: "80%",
                        background: "grey",
                        borderRadius: "4px"
                    }}
                >
                    7
                </div>
                <div
                    style={{
                        width: "100%",
                        height: "auto",
                        paddingBottom: "80%",
                        background: "grey",
                        borderRadius: "4px"
                    }}
                >
                    8
                </div>
                <div
                    style={{
                        width: "100%",
                        height: "auto",
                        paddingBottom: "80%",
                        background: "grey",
                        borderRadius: "4px"
                    }}
                >
                    9
                </div>
                <div
                    style={{
                        width: "100%",
                        height: "auto",
                        paddingBottom: "80%",
                        background: "grey",
                        borderRadius: "4px"
                    }}
                >
                    10
                </div>
            </MobileSliderTata>
        );
    }
}
