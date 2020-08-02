import React, { useState, useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import API from '../API';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import ActualReferences from './ActualReferences';
import './Admin.css';
import UploadButton from '../components/UploadButton';
import photoContext from '../components/photoContext'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: '15vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Admin(props) {
  const {postNewRef} = useContext(photoContext)
  const [open, setOpen] = React.useState(false);
  const [openPasswordsNotEqual, setOpenPasswordsNotEqual] = useState(false);
  const [openErrorDuplicateEmail, setOpenErrorDuplicateEmail] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();
  const history = useHistory();
  const [checked, setChecked] = useState(false);
  const {urlReference, updatePhoto, putPersoInfos} = useContext(photoContext)

  const [references, setReferences] = useState({
    jobTitle: '',
    bio: '',
    name: '',
    urlReference: '',
    description: '',
    projectLink: '',
    client: ''
  });

  const handlesubmit = (e) => {
    // Function à créer pour gérer champs vides, sensibilité de la case
    e.preventDefault();
    postNewRef({...references, urlReference:urlReference});
    console.log(e.target)

  };

  const handleBiosubmit = (e) => {
    e.preventDefault();
    putPersoInfos({bio: references.bio, jobTitle: references.jobTitle});

  }

  return (
    <div className="admin"> 
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar style={{ backgroundColor: 'var(--red)' }} className={classes.avatar}>
            <TagFacesIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Add a new project
          </Typography>
          <form className={classes.form} noValidate onSubmit={handlesubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete='name'
                  name='name'
                  variant='outlined'
                  required
                  fullWidth
                  id='name'
                  label="Project's name"
                  autoFocus
                  onChange={(e) => setReferences({ ...references, name: e.target.value })}
                  value={references.name}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='url'
                  label="Website's url"
                  name='url'
                  autoComplete='url'
                  onChange={(e) => setReferences({ ...references, projectLink: e.target.value })}
                  value={references.projectLink}
                />
              </Grid>
              <Grid item xs={12} fullWidth>
                <TextField
                  id="outlined-multiline-static"
                  label="Description"
                  name='description'
                  multiline
                  fullWidth
                  rows={3}
                  variant="outlined"
                  onChange={(e) => setReferences({ ...references, description: e.target.value })}
                  value={references.description}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  autoComplete='client'
                  name='client'
                  variant='outlined'
                  required
                  fullWidth
                  id='client'
                  label="client"
                  autoFocus
                  onChange={(e) => setReferences({ ...references, client: e.target.value })}
                  value={references.client}
                />
              </Grid>

            </Grid>
            <div className='uploadphoto' >
              <UploadButton />
            </div>
            <Button
              type='submit'
              onChange={handlesubmit}
              value='submit'
              id="btnsubmit"
              variant='contained'
              color='primary'
              className={classes.submit}
              style={{ backgroundColor: 'var(--red)' }}
              to='/edition_compte'
            >
              Add a Reference
            </Button>
            </form>
            <form onSubmit={handleBiosubmit}>
            onSubmit={handleBiosubmit}
            <div className='infosbio' >
              <div className =  'titleinfos' >
            <Typography component='h1' variant='h5'>
            Modify personnal informations
          </Typography>
                
              </div>

              <div className='jobtilte' >

                <Grid item xs={12} >
                  <TextField
                    autoComplete='jobTitle'
                    name='jobTitle'
                    variant='outlined'
                    required
                    fullWidth
                    id='jobTitle'
                    label='jobTitle'
                    autoFocus
                    onChange={(e) => setReferences({ ...references, jobTitle: e.target.value })}
                    value={references.jobTitle}
                  />
                </Grid>

              </div>
              <div className='bio' >
                <Grid item xs={12} fullWidth>
                  <TextField
                    id="outlined-multiline-static"
                    label="Bio"
                    name='bio'
                    required
                    multiline
                    fullWidth
                    rows={3}
                    variant="outlined"
                    onChange={(e) => setReferences({ ...references, bio: e.target.value })}
                    value={references.bio}
                  />
                </Grid>

              </div>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                className={classes.submit}
                style={{ backgroundColor: 'var(--red)' }}
                to='/edition_compte'
              >
                Update personnal informations
            </Button>
            </div>
          </form>
        </div>

      </Container>
      <ActualReferences infos={props.infos} upDateProject={props.upDateProject} />
    </div>
  );
}

