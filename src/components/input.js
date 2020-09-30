import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Inputs({onSubmit, onChange}) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmit}>
   
      <Input onChange={onChange} placeholder="Search" inputProps={{ 'aria-label': 'description' }} />
      
    </form>
  );
}

