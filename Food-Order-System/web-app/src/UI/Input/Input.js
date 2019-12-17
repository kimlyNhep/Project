import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function BasicTextFields(props) {
    return (
        <TextField
            required={props.required}
            type={props.type}
            label={props.title}
            variant={props.variant}
            style={props.styled}
        />
    );
}
