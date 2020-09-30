import React, {useState} from 'react';
import { SRprograms } from './ProgramLista';
import './App.css';
import Input from './components/input';
import RadioButtons from './components/radiobutton';


import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, kanal, url) {
  return { name, kanal, url };
}



const App = () => {

  const classes = useStyles();
  const [result, setResult] = useState(false);
  const [selectedValue, setSelectedValue] = React.useState('name');

 

  const handleChange = (event) => {
   
    setSelectedValue(event.target.value);
   
  };

  console.log(selectedValue)

const handleSearch = (e) => {
  
  let res = SRprograms.filter(({name, kanal, url}) => {
    if(selectedValue === "name") {
       if(name.toUpperCase().includes(e.target.value.toUpperCase())) {
        return createData(name, kanal, url)
       }
       
    } 
    if(selectedValue === "kanal") {
      if(kanal.toUpperCase().includes(e.target.value.toUpperCase())) {
        return createData(name, kanal, url)
      }
    }
    if(selectedValue === "url") {
      if(url.toUpperCase().includes(e.target.value.toUpperCase())) {
        return createData(name, kanal, url)
      }
    }
  
  })
  
  setResult(res)
  
  }
 
const onSubmit = (e) => {
  e.preventDefault();
  e.target.reset();
}


  return (
    <div className="App">
        <h1>Sök efter program</h1>
      
      <Input onChange={handleSearch} onSubmit={onSubmit}/>
      <RadioButtons handleRadioChange={handleChange} selectedValue={selectedValue} />
      

     <TableContainer style={{width: "70%"}} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h4>Program</h4></TableCell>
            <TableCell align="left"><h4>kanal</h4></TableCell>
            <TableCell align="right"><h4>url</h4></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {result ? result.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.kanal}</TableCell>
              <TableCell align="right"><a href={row.url}>{row.url}</a></TableCell>
            </TableRow>
          )) : ""}
        </TableBody>
      </Table>
    </TableContainer>
        
        
    </div>
  );
}

export default App;
