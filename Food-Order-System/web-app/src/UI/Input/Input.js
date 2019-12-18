import React from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

export default function BasicTextFields(props) {
    switch (props.elementType) {
        case 'input':
            switch (props.elementStyle) {
                case 'standard':
                    return (
                        <TextField
                            label={props.elementConfig.placeholder}
                            type={props.elementConfig.valueType}
                        />
                    );
                case 'filled':
                    return (
                        <TextField
                            label={props.elementConfig.placeholder}
                            variant={props.elementStyle.styleType}
                            type={props.elementConfig.valueType}
                        />
                    );
                case 'outlined':
                    return (
                        <TextField
                            label={props.elementConfig.placeholder}
                            variant={props.elementStyle.styleType}
                            type={props.elementConfig.valueType}
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
                        />
                    );
            }
        default:
            return null;
    }
}
