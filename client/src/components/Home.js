import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Input type="text" style={{ marginTop: '3rem' }} name="title" id="title" placeholder="TITLE" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="textarea" style={{ marginTop: '3rem' }} name="description" id="description" placeholder="DESCRIPTION" />
                    </FormGroup>
                    <Button type="submit" style={{ marginTop: '3rem' }} block>SUBMIT</Button>
                </Form>
            </div>
        )
    }
}
