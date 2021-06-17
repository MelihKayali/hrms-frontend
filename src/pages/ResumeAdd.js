import React, { Component } from 'react'
import 'semantic-ui-css/semantic.css';
import { Form, Input, Dropdown, TextArea } from 'semantic-ui-react-form-validator'
import { Header, Container, Button, Grid, Segment } from 'semantic-ui-react';

export default class ResumeAdd extends Component {
    onSubmit = () => {
        alert("İş ilanı eklendi");
    }
    state = {
        value: ""
    }

    componentDidMount() {
        Form.addValidationRule('isFoo', value => {
            var foo = /foo/;
            return foo.test(value)
        })
    }
    render() {
        return (
            <Container>
                <Grid centered columns={1}>
                    <Grid.Column width={10}>
                        <Segment>
                            <Segment inverted color="teal"><Header inverted content="İş İlanı Ekleme" centered /></Segment>

                            <Form onSubmit={this.onSubmit} ref="form">
                                <Input type="text"
                                    label="Advert Description"
                                    onChange={(e) => { this.setState({ value: e.target.value }) }}
                                    value={this.state.value}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                                <Input
                                    type="text"
                                    label="Open Position"
                                    onChange={(e) => { this.setState({ value2: e.target.value }) }}
                                    value={this.state.value2}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />


                                <Input type="text"
                                    label="City Name"
                                    onChange={(e) => { this.setState({ value3: e.target.value }) }}
                                    value={this.state.value3}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                                <Input
                                    type="text"
                                    label="Job Position"
                                    onChange={(e) => { this.setState({ value4: e.target.value }) }}
                                    value={this.state.value4}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />

                                <Input type="text"
                                    label="Working Place"
                                    onChange={(e) => { this.setState({ value5: e.target.value }) }}
                                    value={this.state.value5}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                                <Input
                                    type="text"
                                    label="Working Time"
                                    onChange={(e) => { this.setState({ value6: e.target.value }) }}
                                    value={this.state.value6}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />


                                <Input
                                    type="text"
                                    label="Min-Max Salary"
                                    onChange={(e) => { this.setState({ value7: e.target.value }) }}
                                    value={this.state.value7}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                                <Button color="teal">Ekle</Button>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid>

            </Container>
        )
    }
}
