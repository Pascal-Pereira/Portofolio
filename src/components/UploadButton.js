import React , {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import photoContext from './photoContext';
import API from '../API'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function UploadButtons() {
  const {updatePhoto} = useContext(photoContext)
  const classes = useStyles();


  const handleFile = (e) => {
    // // url Photo
    const photo = e.target.files[0];
    const url = process.env.REACT_APP_API_URL + '/project/photo';
    const formData = new FormData();
    formData.append('title', 'titre');
    formData.append("photo", photo);
    API.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(res => {
        updatePhoto(res.data.urlReference)
        alert('Photo postée')
      }
      )
      .catch(err => {                                                                                                                                           
        console.error(err);
      });

  }

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleFile}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="var(--grey)" component="span">
          Upload Picture
        </Button>
      </label>

      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
        </IconButton>
      </label>
    </div>
  );
}
