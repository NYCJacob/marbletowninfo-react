import React from 'react'
import styled from "styled-components";
import { Grid, Col, Row, Typography} from '@smooth-ui/core-sc';
import { Form, Field } from 'react-final-form'
import Formstyles from '../../styles/Formstyles'



const sendSubmit = async (values) => {
    fetch('http://localhost:8080/api/mailHandler.php', {
        method: 'POST',
        body: JSON.stringify(values)
    }).catch((err) => console.log(err));
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
}


const Petition = () => (
    <Formstyles>
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <h2>Petition Form</h2>
                    <div>
                        <label>First Name</label>
                        <Field name="firstName" component="input" placeholder="First Name" />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <Field name="lastName" component="input" placeholder="Last Name" />
                    </div>
                    <div>
                        <label>Street Address</label>
                        <Field name="streetAddress" component="input" placeholder="Street Address" />
                    </div>
                    <div>
                        <label>City</label>
                        <Field name="city" component="input" placeholder="City" />
                    </div>
                    <div>
                        <label>Zipcode</label>
                        <Field name="zipcode" component="input" placeholder="Zipcode" />
                    </div>
                    <div>
                        <label>Email</label>
                        <Field name="email" component="input" placeholder="Email" />
                    </div>
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <label>
                                    <Field
                                        name="adultAcknowledged"
                                        component="input"
                                        type="checkbox"
                                    />{' '}
                                    Checking this box will act as your signature.
                                </label>
                            </Col>
                            <Col xs={12}>
                                <label>
                                    <Field
                                        name="receiveUpdates"
                                        component="input"
                                        type="checkbox"
                                    />{' '}
                                    Check to receive future update by email.
                                </label>
                            </Col>
                        </Row>
                    </Grid>

                    <div className="buttons">
                        <button type="submit" disabled={submitting || pristine}>
                            Submit
                        </button>

                    </div>
                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                </form>
            )}
        />
    </Formstyles>
);

export default Petition;
