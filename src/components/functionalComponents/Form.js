import React from "react";
const FormContext = React.createContext();
export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: {} };
    }
    checkIfOnlySpaces;

    updateForm = val => {
        this.setState({ ...val });
    };
    validateField = field => {
        const validations = this.props.validations[field];
        if (validations) {
            const error = Object.assign({}, this.state.error);
            error[field] = {};
            validations.some(val => {
                if (val.validator(this.state[field])) {
                    error[field].status = true;
                    error[field].message = val.message;
                    this.setState({ error });
                } else {
                    error[field].status = false;
                    error[field].message = "";
                    this.setState({ error });
                }

                return val.validator(this.state[field]);
            });
        }
    };
    onSubmit = () => {
        const validations = Object.assign({}, this.props.validations);
        let error = Object.assign({}, this.state.error);
        const errorList = [];
        for (let property in this.props.validations) {
            if (validations.hasOwnProperty(property)) {
                error[property] = {};
                if (this.state.hasOwnProperty(property)) {
                    validations[property].some(val => {
                        if (val.validator(this.state[property])) {
                            error[property].status = val.validator(
                                this.state[property]
                            );
                            error[property].message = val.message;
                            if (this.props.onError) {
                                errorList.push({
                                    key: property,
                                    message: error[property].message
                                });
                            }
                        } else {
                            error[property].status = val.validator(
                                this.state[property]
                            );
                            error[property].message = "";
                        }
                        return val.validator(this.state[property]);
                    });
                } else {
                    error[property].status = true;
                    if (validations[property] && validations[property][0]) {
                        error[property].message =
                            validations[property][0].message;
                    }
                    if (this.props.onError) {
                        errorList.push({
                            key: property,
                            message: error[property].message
                        });
                    }
                }
            }
        }

        this.setState({ error }, () => {
            if (errorList.length > 0) {
                if (this.props.onError) {
                    this.props.onError(errorList);
                }
            } else {
                if (this.props.onSubmit) {
                    const data = Object.assign({}, this.state);
                    delete data.error;
                    this.props.onSubmit(data);
                }
            }
        });
    };
    render() {
        console.log(this.state);
        return (
            <FormContext.Provider
                value={{
                    ...this.state,
                    validateField: this.validateField,
                    updateForm: this.updateForm,
                    onSubmit: this.onSubmit
                }}
            >
                {this.props.children}
            </FormContext.Provider>
        );
    }
}

export class FormElement extends React.Component {
    render() {
        return (
            <FormContext.Consumer>
                {context => this.props.children(context)}
            </FormContext.Consumer>
        );
    }
}
