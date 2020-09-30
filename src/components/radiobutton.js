import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green, blue } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const BlueRadio = withStyles({
    root: {
      color: blue[400],
      '&$checked': {
        color: blue[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

export default function RadioButtons({handleRadioChange, selectedValue}) {
  /* const [selectedValue, setSelectedValue] = React.useState('name');

  const handleChange = (event) => {
   
    setSelectedValue(event.target.value);
   
  }; */
  

  return (
    <div>
         <FormControlLabel
          value="top"
          control={
            <Radio
            checked={selectedValue === 'name'}
            onChange={handleRadioChange}
            value="name"
            name="radio-button"
            inputProps={{ 'aria-label': 'Program' }}
          />
          }
          label="Program"
          labelPlacement="top"
        />
     
    
    
    <FormControlLabel
          value="top"
          control={ <BlueRadio
            checked={selectedValue === 'kanal'}
            onChange={handleRadioChange}
            value="kanal"
            name="radio-button"
            inputProps={{ 'aria-label': 'Kanal' }}
          />}
          label="Kanal"
          labelPlacement="top"
        />

    <FormControlLabel
          value="top"
          control={
            <GreenRadio
            checked={selectedValue === 'url'}
            onChange={handleRadioChange}
            value="url"
            name="radio-button"
            inputProps={{ 'aria-label': 'URL' }}
          />
          }
          label="URL/ID"
          labelPlacement="top"
        />
     
    </div>
  );
}