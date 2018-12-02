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
    fetch('http://localhost:8080/mailHandler.php', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type for post

        }),
        body: `formCode=0&firstName=${values.firstName}&lastName=${values.lastName}&streetAddress=${values.streetAddress}` +
                `&city=${values.city}&zipcode=${values.zipcode}&email=${values.email}&signed=${values.signed}&resident=${values.resident}&updates=${values.updates}`
    }).then(res=> res.json());
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

const Petition = () => (
    <Grid>
        <Row>
            <Col/>
            <Col xs={8} style={{
                border: "1px solid #ccc",
                paddingLeft: "5vw",
                paddingRight: "5vw",
                paddingTop: "1vh",
                paddingBottom: "2vh",
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                borderRadius: "3px"
            }}>
            <Form
                onSubmit={sendSubmit}
                validate={values => {
                    const errors = {}
                    if (!values.firstName) {
                        errors.firstName = 'Required'
                    }
                    if (!values.lastName) {
                        errors.lastName = 'Required'
                    }
                    if (!values.streetAddress) {
                        errors.streetAddress = 'Required'
                    }
                    if (!values.city) {
                        errors.city = 'Required'
                    }

                    if (!values.zipcode) {
                        errors.zipcode = 'Required'
                    } else if (isNaN(values.zipcode)){
                        errors.zipcode = "Must be a zipcode."
                    }else if (values.zipcode.length < 5){
                        errors.zipcode = "Must be a zipcode."
                    }

                    if (!values.signed) {
                        errors.lastName = 'Required'
                    }
                    if (!values.resident) {
                        errors.resident = 'Required'
                    }
                    return errors
                }}

                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <Typography variant="h1" textAlign="center">PETITION</Typography>
                        <Typography variant="h2" textAlign="center">No Commercial Events in Residential Zones</Typography>
                        <br/>
                        <Typography variant="h4">We the citizens of the Town of Marbletown urge you to:</Typography>
                        <Typography variant="h4" fontWeight="bold">
                            Protect Marbletown's current zoning laws.  Keep commerical events (weddings, festivals, and concerts) out of residential areas.
                        </Typography>
                        <hr/>


                        <FormGroup>
                            <Label>First Name</Label>
                            <Field name="firstName" placeholder="First Name"
                                   component={AdaptedInput} validate={required} control />
                            <Error name="firstName"/>
                        </FormGroup>


                        <FormGroup>
                            <Label>Last Name</Label>
                            <Field name="lastName" placeholder="Last Name"
                                   component={AdaptedInput} validate={required} control/>
                            <Error name="lastName"/>

                        </FormGroup>

                        <FormGroup>
                            <label>Street Address</label>
                            <Field name="streetAddress" placeholder="Street Address"
                                   component={AdaptedInput} validate={required} control/>
                            <Error name="streetAddress"/>
                        </FormGroup>

                        <FormGroup>
                            <label>City</label>
                            <Field name="city" placeholder="City"
                                   component={AdaptedInput} validate={required} control/>
                            <Error name="city"/>
                        </FormGroup>

                        <FormGroup>
                            <label>Zipcode</label>
                            <Field name="zipcode" placeholder="Zipcode" type="number"
                                   component={AdaptedInput} validate={required} control/>
                            <Error name="zipcode"/>
                        </FormGroup>

                        <FormGroup>
                            <label>Email (optional)</label>
                            <Field name="email" placeholder="Email"
                                   component={AdaptedInput} control/>
                        </FormGroup>

                            <FormCheck>
                                        <Field name="signed"
                                               component={AdaptedCheckbox}
                                               validate={required}
                                               id="signed"
                                               type="checkbox"/>
                                        <FormCheckLabel>Checking this box acts as your signature.</FormCheckLabel>
                            </FormCheck>
                        <Error name="signed"/>
                        <br/>
                            <FormCheck>
                                <Field name="resident"
                                       component={AdaptedCheckbox}
                                       validate={required}
                                       id="resident"
                                       type="checkbox"/>
                                <FormCheckLabel>Are you an adult (over 18) resident of Marbletown, NY.</FormCheckLabel>
                            </FormCheck>
                        <Error name="resident"/>
                        <br/>

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

export default Petition;
