import React from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

export default function BasicTextFields(props) {
    switch (props.elementType) {
        case 'input':
            switch (props.elementStyle.styleType) {
                case 'standard':
                    return (
                        <TextField
                            label={props.elementConfig.placeholder}
                            inputProps={{
                                className: props.elementStyle.inputProps
                            }}
                            type={props.elementConfig.valueType}
                            value={props.value}
                            onChange={props.changed}
                            style={props.styled}
                            autoFocus={props.autoFocus}
                        />
                    );
                case 'filled':
                    return (
                        <TextField
                            label={props.elementConfig.placeholder}
                            inputProps={{
                                className: props.elementStyle.inputProps
                            }}
                            variant={props.elementStyle.styleType}
                            type={props.elementConfig.valueType}
                            value={props.value}
                            onChange={props.changed}
                            style={props.styled}
                            autoFocus={props.autoFocus}
                        />
                    );
                case 'outlined':
                    return (
                        <TextField
                            label={props.elementConfig.placeholder}
                            inputProps={{
                                className: props.elementStyle.inputProps
                            }}
                            variant={props.elementStyle.styleType}
                            type={props.elementConfig.valueType}
                            value={props.value}
                            onChange={props.changed}
                            style={props.styled}
                            autoFocus={props.autoFocus}
                        />
                    );
                default:
                    return (
                        <Input
                            placeholder={props.elementConfig.placeholder}
                            inputProps={{
                                className: props.elementStyle.inputProps
                            }}
                            color={props.elementStyle.outlineColor}
                            type={props.elementConfig.valueType}
                            value={props.value}
                            onChange={props.changed}
                            style={props.styled}
                            autoFocus={props.autoFocus}
                        />
                    );
            }
        default:
            return null;
    }
}
