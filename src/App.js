import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { withRouter } from "react-router";
import HorizontalSlide from "./demos/SliderDemo";
import Input from "./demos/InputDemo";
import FormDemo from "./demos/FormDemo";
import CheckBoxDemo from "./demos/CheckBoxDemo";
import CenteredContent from "./components/layouters/CenteredContent";
import ContentWithPanel from "./components/layouters/ContentWithPanel";
import SideNav from "./components/SideNav";
import ModalDemo from "./demos/ModalDemo";
import AutoSuggestDemo from "./demos/AutoSuggestDemo";
import SearchDemo from "./demos/SearchDemo";
import OmniBarDemo from "./demos/OmniBarDemo";
import { Modal } from "./components/functionalComponents/ModalRoot";
import Animator from "./components/functionalComponents/Animator";
import DropDownDemo from "./demos/DropDownDemo";
import GridDemo from "./demos/GridDemo";
import MobileSliderTataDemo from "./demos/MobileSliderTataDemo";
import CardStackDemo from "./demos/CardStackDemo";
import TagCloudDemo from "./demos/TagCloudDemo";
import logo from "./logo.svg";
// import o from "core";
// "core" points to the components/index.js in root folder
import "./App.css";
const SideNavWithHistory = withRouter(SideNav);
class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <CenteredContent contentWidth={1200}>
                        <ContentWithPanel
                            panel={
                                <SideNavWithHistory
                                    links={[
                                        { label: "Form", url: "/Form" },
                                        { label: "Input", url: "/Input" },
                                        { label: "Checkbox", url: "/Checkbox" },
                                        {
                                            label: "Tag Cloud",
                                            url: "/TagCloud"
                                        },
                                        {
                                            label: "Drop Down",
                                            url: "/DropDown"
                                        },
                                        { label: "Modal", url: "/Modal" },
                                        {
                                            label: "Elastic Slider",
                                            url: "/ElasticSlider"
                                        },
                                        {
                                            label: "Card Stack",
                                            url: "/CardStack"
                                        },
                                        {
                                            label: "Grid",
                                            url: "/Grid"
                                        },

                                        {
                                            label: "OmniBar",
                                            url: "/OmniBar"
                                        },
                                        {
                                            label: "Search",
                                            url: "/Search"
                                        },
                                        {
                                            label: "AutoSuggest",
                                            url: "/AutoSuggest"
                                        }
                                    ]}
                                />
                            }
                        >
                            <div>
                                <Switch>
                                    <Route
                                        path="/HorizontalSlide"
                                        component={HorizontalSlide}
                                    />
                                    <Route path="/Input" component={Input} />
                                    <Route path="/Form" component={FormDemo} />
                                    <Route
                                        path="/CheckBox"
                                        component={CheckBoxDemo}
                                    />
                                    <Route
                                        path="/TagCloud"
                                        component={TagCloudDemo}
                                    />
                                    <Route
                                        path="/DropDown"
                                        component={DropDownDemo}
                                    />
                                    <Route
                                        path="/Modal"
                                        component={ModalDemo}
                                    />
                                    <Route
                                        path="/ElasticSlider"
                                        component={MobileSliderTataDemo}
                                    />
                                    <Route
                                        path="/CardStack"
                                        component={CardStackDemo}
                                    />
                                    <Route
                                        path="/Animator"
                                        component={Animator}
                                    />
                                    <Route path="/Grid" component={GridDemo} />
                                    <Route
                                        path="/AutoSuggest"
                                        component={AutoSuggestDemo}
                                    />
                                    <Route
                                        path="/Search"
                                        component={SearchDemo}
                                    />
                                    <Route
                                        path="/OmniBar"
                                        component={OmniBarDemo}
                                    />
                                </Switch>
                            </div>
                        </ContentWithPanel>
                    </CenteredContent>
                </BrowserRouter>
                <Modal />
            </div>
        );
    }
}

{
}
export default App;
