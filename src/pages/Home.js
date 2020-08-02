import React from 'react';
import Profile from '../components/Profile';
import References from '../components/References';
import Skills2 from '../components/Skills2';
import Grid from '@material-ui/core/Grid';
import './Home.css'
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '5vh',
    marginLeft: '20vw',
    // position: 'absolute',
    width: '100%',
    '& > * + *': {
      marginTop: 'theme.spacing(5)'
    },
    height: 100
  }
}));


function Home (props){
  const classes = useStyles();
  const theme = useTheme();
  return(
    <div className = 'home' >
          <Grid container spacing={2} className="détail2">
            <Grid item xs={12} sm={3}>
              <h2>Profile</h2>
              <Profile infos={props.infos}/>  
            </Grid>

            <Grid item xs={12} sm={4}>
            <h2>Références</h2>
              <References  infos={props.infos}/>  
            </Grid>

            <Grid item xs={12} sm={4}>
            <h2>Skills</h2>
              <Skills2 />  
            </Grid> 
            
          </Grid>
    </div>
      
  );
};

export default Home;