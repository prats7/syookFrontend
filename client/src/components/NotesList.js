import React, { Component, useState, useEffect } from 'react';
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    CardBody,
    CardTitle,
    CardSubtitle,
    Form,
    FormGroup,
    Input,
    CardText
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getNotes, deleteNote } from '../actions/index';
import PropTypes from 'prop-types';


//Assignment list 
class NotesList extends Component {

    static propTypes = {
        getNotes: PropTypes.func.isRequired,
        note: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }

    componentDidMount() {
        this.props.getNotes();
    }

    //Delete button fn
    onDeleteClick = id => {
        this.props.deleteNote(id);
    };

    render() {
        const notes = this.props;
        return (
            this.props.isAuthenticated ?
                <Container>
                    <ListGroup>
                        <TransitionGroup className="notes-list">

                            {notes.map(({ _id, title, description }) => (
                                <CSSTransition key={_id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                        <CardBody>
                                            <CardTitle tag="h5">{title}</CardTitle>
                                            <CardText>{description}</CardText>
                                            <Button className="remove-btn"
                                                color="danger"
                                                onClick={this.onDeleteClick.bind(this, _id)}
                                            >Delete
                                    </Button>
                                        </CardBody>
                                    </ListGroupItem>
                                </CSSTransition>
                            ))};
                    </TransitionGroup>
                    </ListGroup>
                </Container> : null

        );
    }
}


const mapStateToProps = (state) => ({
    note: state.note
});

export default connect(mapStateToProps, { getNotes, deleteNote })(NotesList);