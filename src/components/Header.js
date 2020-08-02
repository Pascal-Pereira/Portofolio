import React, { useContext } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory, Link } from 'react-router-dom';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  grow: {
    marginLeft : 0, 
    padding: 0,
    flexGrow: 1,
    flexWrap: "wrap",
    width:'100vw',
    textAlign: 'center',
  },
  toolbar: {
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  title : {
    textAlign: 'center',
    margin: '0 auto',
  }
}));

export default function PrimarySearchAppBar (props) {
  const classes = useStyles();


  return (
    <div className={classes.grow}>
      <AppBar position='static'>
        <div className = {classes.toolbar} >
        <Toolbar style={{ backgroundColor: 'var(--grey)', textAlign: 'center' }}>
          <Typography className={classes.title} variant='h6' >
          PASCAL PEREIRA - Front-End developer Javascript, React, Node JS
          </Typography>
        </Toolbar>
          
        </div>
      </AppBar>
    </div>
  );
}
