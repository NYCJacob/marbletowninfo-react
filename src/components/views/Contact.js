import React from 'react'
import { Form, Field } from 'react-final-form'
import {
    Box,
    Button,
    Checkbox,
    Col,
    ControlFeedback,
    FormCheck,
    FormCheckLabel,
    FormGroup,
    Grid,
    Input,
    Label,
    Row,
    Typography
} from "@smooth-ui/core-sc";


const sendSubmit = async (values) => {
    fetch('/backend/api/mailHandler.php', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type for post
        }),
        body: `formCode=1&fullName=${values.fullName}&` +
            `email=${values.email}&message=${values.message}&updates=${values.updates}`
    }).then( function (response) {
        if(response.ok){
            return response.blob();
        }
        throw new Error('Network response error')
    });
};

const Error = ({ name }) => (
    <Field
        name={name}
        subscription={{ touched: true, error: true }}
        render={({ meta: { touched, error } }) =>
            touched && error ? <ControlFeedback valid={!error}>{error}</ControlFeedback> : null
        }
    />
);

const required = value => (value ? undefined : "Required");

// ****************************************
//⬇️ THIS IS WHERE ALL THE MAGIC HAPPENS ⬇️   from final form smoothui example code
// ********************************************************************************
/* this is a HOC */
const adapt = Component => ({input, meta: { valid }, ...rest}) =>
    <Component {...input} {...rest} valid={valid} />;

const AdaptedInput = adapt(Input, Error);
const AdaptedCheckbox = adapt(Checkbox);

const Contact = () => (
    <Grid>
        <Row>
            <Col/>
            <Col xs={6} style={{
                border: "1px solid #ccc",
                paddingLeft: "5vw",
                paddingRight: "5vw",
                paddingTop: "1vh",
                paddingBottom: "2vh",
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                borderRadius: "3px"
            }}>
                <Form
                    onSubmit={sendSubmit }
                    validate={values => {
                        const errors = {}
                        if (!values.fullName) {
                            errors.firstName = 'Required'
                        }

                        return errors
                    }}

                    render={({ handleSubmit, form, submitting, pristine, values, reset }) => (
                        <form onSubmit={ event => {
                            handleSubmit(event).then(reset);
                        } }>
                            <Typography variant="h1" textAlign="center">Love to hear from you!</Typography>
                            <hr/>


                            <FormGroup>
                                <Label>Full Name</Label>
                                <Field name="fullName" placeholder="Full Name"
                                       component={AdaptedInput} validate={required} control />
                                <Error name="fullName"/>
                            </FormGroup>

                            <FormGroup>
                                <label>Email (optional)</label>
                                <Field name="email" placeholder="Email" validate={required} component={AdaptedInput} control/>
                            </FormGroup>

                            <FormGroup>
                                    <label>Message</label>
                                    <Field name="message" cols="50" rows="10" component="textarea" placeholder="Message" />
                            </FormGroup>

                            <FormGroup>
                                <FormCheck>
                                    <Field name="updates"
                                           component={AdaptedCheckbox}
                                           id="updates"
                                           type="checkbox"/>
                                    <FormCheckLabel>Check to receive future update by email.</FormCheckLabel>
                                </FormCheck>
                            </FormGroup>

                            <Box justifyContent="space-around" display="flex">
                                <Button
                                    type="submit"
                                    disabled={submitting || pristine}
                                    backgroundImage= "linear-gradient(#4f93ce, #285f8f)"
                                    border="1px solid #285f8f"
                                    fontSize="16px"
                                >
                                    Submit
                                </Button>
                                <Button
                                    type="button"
                                    onClick={form.reset}
                                    disabled={submitting || pristine}
                                    backgroundImage= "linear-gradient(#ffffff, #d5d5d5)"
                                    color= "#000"
                                    border="1px solid #d5d5d5"
                                    padding="5px 10px"
                                    fontSize="16px"
                                >
                                    Reset
                                </Button>
                            </Box>
                        </form>
                    )}
                />
            </Col>
            <Col/>
        </Row>
    </Grid>
);

export default Contact;