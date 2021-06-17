import React, { Component } from 'react'
import 'semantic-ui-css/semantic.css';
import { Form, Input, Dropdown, TextArea } from 'semantic-ui-react-form-validator'
import { Header, Container, Button, Grid, Segment, GridColumn } from 'semantic-ui-react';

export default class JobAdvertAdd extends Component {
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
            
                <Grid>
                    <Grid.Column style={{marginLeft : '20em' , marginTop:'2em'}} width = {10}>
                        <Segment>
                            <Segment inverted color="teal"><Header inverted content="İş İlanı Ekleme" centered /></Segment>

                            <Form onSubmit={this.onSubmit} ref="form">
                                <Input type="text"
                                   style={{marginLeft : '4.5em'}} placeholder  ="İlan Açıklaması"
                                    onChange={(e) => { this.setState({ value: e.target.value }) }}
                                    value={this.state.value}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                                <Input
                                    type="text"
                                    style={{marginLeft : '4.5em'}}placeholder="Açık pozisyon"
                                    onChange={(e) => { this.setState({ value2: e.target.value }) }}
                                    value={this.state.value2}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />


                                <Input type="text"
                                    style={{marginLeft : '4.5em'}}placeholder="Şehir İsmi"
                                    onChange={(e) => { this.setState({ value3: e.target.value }) }}
                                    value={this.state.value3}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                                <Input
                                    type="text"
                                    style={{marginLeft : '4.5em'}}placeholder="İş pozisyonu"
                                    onChange={(e) => { this.setState({ value4: e.target.value }) }}
                                    value={this.state.value4}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />

                                <Input type="text"
                                    style={{marginLeft : '4.5em'}}placeholder="Çalışma Yeri"
                                    onChange={(e) => { this.setState({ value5: e.target.value }) }}
                                    value={this.state.value5}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                                <Input
                                    style={{marginLeft : '4.5em'}}type="text"
                                    placeholder="Çalışma Saati"
                                    onChange={(e) => { this.setState({ value6: e.target.value }) }}
                                    value={this.state.value6}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />


                                <Input
                                    type="text"
                                    style={{marginLeft : '4.5em'}}placeholder="En Düşük - En yüksek Maaş"
                                    onChange={(e) => { this.setState({ value7: e.target.value }) }}
                                    value={this.state.value7}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                                <Button color="teal">Ekle</Button>
                            </Form>
                        </Segment>
                    </Grid.Column>
                    <GridColumn width={6}>
                    <img style={{ marginLeft: '-30em', marginTop: '-60em' }} src={process.env.PUBLIC_URL + '/image/01.-Advertising.svg'} alt="Photo" width="500" height="500"></img>    
                    </GridColumn>
                </Grid>           
        )
    }
}
