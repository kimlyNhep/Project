import React from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxLabels(props) {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => event => {
        setChecked(prev => !prev);
    };

    return (
        <FormGroup row>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked}
                        onChange={handleChange()}
                        value='checkedB'
                        color='primary'
                    />
                }
                label={props.text}
            />
        </FormGroup>
    );
}
