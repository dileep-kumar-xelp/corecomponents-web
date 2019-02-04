import React from "react";
import { Form, FormElement } from "../components/functionalComponents/Form";
import Input from "../components/Input";
import RadioButton from "../components/RadioButtons";
import TagCloud from "../components/TagCloud";
import CheckBox from "../components/CheckBox";
import DropDown from "../components/DropDown";
import NativeDropDown from "../components/NativeDropDown";
import {
    Modal,
    ModalPanel
} from "../components/functionalComponents/ModalRoot";
import { noNumbers, isEmpty, isEmail } from "../utils/validators";
import styles from "./FormDemo.module.css";

export default class FormDemo extends React.Component {
    constructor(props) {
        super(props);
        this.name = React.createRef();
        this.email = React.createRef();
        this.number = React.createRef();
        this.state = { showSignUp: false };
    }
    handleError(val) {
        switch (val[0].key) {
            case "name":
                this.name.current.focusInput();
                break;
            case "email":
                this.email.current.focusInput();

                this.handleShowSignUp(true);

                break;
            case "number":
                this.number.current.focusInput();
                break;
            default:
        }
        if (
            !val
                .map(value => {
                    return value.key;
                })
                .includes("email")
        ) {
            this.handleShowSignUp(false);
        }
    }
    handleShowSignUp = val => {
        this.setState({ showSignUp: val });
    };
    handleSubmit(val) {
        console.log(val);
    }
    render() {
        return (
            <React.Fragment>
                <Form
                    onError={val => this.handleError(val)}
                    onSubmit={val => this.handleSubmit(val)}
                    validations={{
                        name: [
                            {
                                validator: isEmpty,
                                message: "Name cannot be empty"
                            },
                            {
                                validator: noNumbers,
                                message: "Name cannot have numbers"
                            }
                        ],
                        email: [
                            {
                                validator: isEmpty,
                                message: "Email cannot be empty"
                            },
                            { validator: isEmail, message: "Invalid email" }
                        ],
                        rating: [
                            {
                                validator: isEmpty,
                                message: "Rating is mandatory"
                            }
                        ]
                    }}
                >
                    <div className={styles.base}>
                        <div className={styles.row}>
                            <div className={styles.twoColumns}>
                                <FormElement>
                                    {props => (
                                        <React.Fragment>
                                            <Input
                                                placeholder={"Enter name"}
                                                value={props.name}
                                                onBlur={() => {
                                                    props.validateField("name");
                                                }}
                                                ref={this.name}
                                                onChange={val =>
                                                    props.updateForm({
                                                        name: val
                                                    })
                                                }
                                            />
                                            {props.error.name &&
                                                props.error.name.status && (
                                                    <div
                                                        className={
                                                            styles.errorMessage
                                                        }
                                                    >
                                                        {
                                                            props.error.name
                                                                .message
                                                        }
                                                    </div>
                                                )}
                                        </React.Fragment>
                                    )}
                                </FormElement>
                            </div>
                            <div className={styles.twoColumns}>
                                <FormElement>
                                    {props => (
                                        <React.Fragment>
                                            <Input
                                                value={props.email}
                                                ref={this.email}
                                                onChange={val =>
                                                    props.updateForm({
                                                        email: val
                                                    })
                                                }
                                                // onBlur={() => {
                                                //     props.validateField(
                                                //         "email"
                                                //     );
                                                // }}
                                            />
                                            {props.error.email &&
                                                props.error.email.status && (
                                                    <div
                                                        className={
                                                            styles.errorMessage
                                                        }
                                                    >
                                                        {
                                                            props.error.email
                                                                .message
                                                        }
                                                    </div>
                                                )}
                                        </React.Fragment>
                                    )}
                                </FormElement>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.twoColumns}>
                                <FormElement>
                                    {props => (
                                        <Input
                                            value={props.number}
                                            ref={this.number}
                                            onChange={val =>
                                                props.updateForm({
                                                    number: val
                                                })
                                            }
                                        />
                                    )}
                                </FormElement>
                            </div>
                            <div className={styles.twoColumns}>
                                <FormElement>
                                    {props => (
                                        <React.Fragment>
                                            <RadioButton
                                                {...props}
                                                selected={props.rating}
                                                options={[
                                                    {
                                                        label: "Good",
                                                        value: "1"
                                                    },
                                                    {
                                                        label: "Average",
                                                        value: "2"
                                                    },
                                                    { label: "Bad", value: "3" }
                                                ]}
                                                onSelect={val =>
                                                    props.updateForm({
                                                        rating: val
                                                    })
                                                }
                                            />
                                            {props.error.rating &&
                                                props.error.rating.status && (
                                                    <div
                                                        className={
                                                            styles.errorMessage
                                                        }
                                                    >
                                                        {
                                                            props.error.rating
                                                                .message
                                                        }
                                                    </div>
                                                )}
                                        </React.Fragment>
                                    )}
                                </FormElement>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.twoColumns}>
                                <FormElement>
                                    {props => (
                                        <CheckBox
                                            {...props}
                                            selected={props.options2}
                                            options={[
                                                {
                                                    label: "Option 1",
                                                    value: "1"
                                                },
                                                {
                                                    label: "Option 2",
                                                    value: "2"
                                                },
                                                {
                                                    label: "Option 3",
                                                    value: "3"
                                                }
                                            ]}
                                            onSelect={val =>
                                                props.updateForm({
                                                    options2: val
                                                })
                                            }
                                        />
                                    )}
                                </FormElement>
                            </div>
                            <div className={styles.twoColumns}>
                                <FormElement>
                                    {props => (
                                        <TagCloud
                                            tags={props.tags}
                                            onSelect={val =>
                                                props.updateForm({ tags: val })
                                            }
                                        />
                                    )}
                                </FormElement>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.twoColumns}>
                                <FormElement>
                                    {props => (
                                        <DropDown
                                            onSelect={val =>
                                                props.updateForm({
                                                    region: val
                                                })
                                            }
                                            placeHolder="Select an option"
                                            selected={props.region}
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
                                    )}
                                </FormElement>
                            </div>
                            <div className={styles.twoColumns}>
                                <FormElement>
                                    {props => (
                                        <NativeDropDown
                                            onSelect={val =>
                                                props.updateForm({
                                                    preference: val
                                                })
                                            }
                                            placeHolder="Select a preference"
                                            selected={props.preference}
                                            options={[
                                                {
                                                    key: "1",
                                                    label: "Preference1"
                                                },
                                                {
                                                    key: "2",
                                                    label: "Preference2"
                                                },
                                                {
                                                    key: "3",
                                                    label: "Preference3"
                                                },
                                                {
                                                    key: "4",
                                                    label: "Preference4"
                                                },
                                                {
                                                    key: "5",
                                                    label: "Preference5"
                                                },
                                                {
                                                    key: "6",
                                                    label: "Preference6"
                                                },
                                                {
                                                    key: "7",
                                                    label: "Preference7"
                                                }
                                            ]}
                                        />
                                    )}
                                </FormElement>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.buttonHolder}>
                                <FormElement>
                                    {props => (
                                        <div
                                            className={styles.button}
                                            onClick={() => props.onSubmit()}
                                        >
                                            Submit
                                        </div>
                                    )}
                                </FormElement>
                            </div>
                        </div>
                    </div>
                    <Modal
                        modalOpen={this.state.showSignUp}
                        handleModal={val => {
                            this.handleShowSignUp(val);
                        }}
                    >
                        <ModalPanel>
                            {props => (
                                <div
                                    style={{
                                        width: "100%",
                                        height: "100vh",
                                        position: "fixed",
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        right: 0,
                                        margin: "auto",
                                        background: "rgba(0,0,0,0.7)"
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "40%",
                                            height: "600px",
                                            background: "white",
                                            position: "fixed",
                                            left: 0,
                                            top: 0,
                                            bottom: 0,
                                            right: 0,
                                            margin: "auto",
                                            padding: "80px 40px 40px 40px"
                                        }}
                                    >
                                        <div className={styles.row}>
                                            DUMMY SIGNUP SCREEN
                                        </div>
                                        <div className={styles.row} />
                                        <div className={styles.row}>
                                            <div className={styles.twoColumns}>
                                                <FormElement>
                                                    {props => (
                                                        <React.Fragment>
                                                            <Input
                                                                value={
                                                                    props.email
                                                                }
                                                                onChange={val =>
                                                                    props.updateForm(
                                                                        {
                                                                            email: val
                                                                        }
                                                                    )
                                                                }
                                                            />
                                                            {props.error
                                                                .email &&
                                                                props.error
                                                                    .email
                                                                    .status && (
                                                                    <div
                                                                        className={
                                                                            styles.errorMessage
                                                                        }
                                                                    >
                                                                        {
                                                                            props
                                                                                .error
                                                                                .email
                                                                                .message
                                                                        }
                                                                    </div>
                                                                )}
                                                        </React.Fragment>
                                                    )}
                                                </FormElement>
                                            </div>
                                        </div>
                                        <div className={styles.row}>
                                            <FormElement>
                                                {props => (
                                                    <div
                                                        className={
                                                            styles.button
                                                        }
                                                        onClick={() =>
                                                            props.onSubmit()
                                                        }
                                                    >
                                                        Submit
                                                    </div>
                                                )}
                                            </FormElement>
                                        </div>
                                        <div
                                            style={{
                                                width: 50,
                                                height: 50,
                                                background: "black",
                                                position: "absolute",
                                                right: 40,
                                                top: 40
                                            }}
                                            onClick={() => {
                                                props.handleModal(false);
                                            }}
                                        />
                                    </div>
                                </div>
                            )}
                        </ModalPanel>
                    </Modal>
                </Form>
            </React.Fragment>
        );
    }
}
