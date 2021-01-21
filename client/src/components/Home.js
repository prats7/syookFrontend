import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Container, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
import { addNote } from '../actions/index';
import PropTypes from 'prop-types';
import NotesList from './NotesList';

class Home extends Component {

    //Initialize state
    state = {
        title: '',
        description: ''
    }

    static propTypes = {
        addNote: PropTypes.func.isRequired
    }

    //On change fn
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    //Function for adding data on form submit
    onSubmit = e => {

        const newNote = {
            title: this.state.title,
            description: this.state.description
        }

        // Add item via addNote action
        this.props.addNote(newNote);
    }


    render() {

        return (
            <div>
                <div><Container style={{ alignItems: 'center', width: 500 }}>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Input
                                onChange={this.onChange}
                                type="text" style={{ marginTop: '3rem' }}
                                name="title"
                                id="title"
                                placeholder="TITLE" />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="textarea"
                                onChange={this.onChange}
                                style={{ marginTop: '3rem' }}
                                name="description"
                                id="description"
                                placeholder="DESCRIPTION" />
                        </FormGroup>
                        <Button
                            type="submit"
                            style={{ marginTop: '3rem' }}
                            block>
                            SUBMIT</Button>
                    </Form></Container>
                </div>
                <div><NotesList /></div>
            </div>
        )
    }
}

//Mapping item to state
const mapStateToProps = state => ({
    title: state.title,
    description: state.description
});

//Connects react and redux of add item
export default connect(mapStateToProps, { addNote })(Home);