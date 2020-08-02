import React, { useState, useEffect, createRef } from 'react';
import Container from '@material-ui/core/Container';
import API from '../API';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './actualReferences.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function ActualReferences(props) {
  const classes = useStyles();
  const url = process.env.REACT_APP_API_URL
  const [references, setReferences] = useState([]);



  useEffect(() => {
    API.get(url + '/project')
      .then(res => {
        setReferences(res.data.projet);
      })
      .catch(err =>
        console.error(err))
  }, [references])

  const handleDelete = (e) => {
    const idRef = e.currentTarget.name
    const projectToDelete = references.find(ref => ref.id == idRef);

    API.delete(url + '/project/delete/' + idRef)
      .then(res => {
        alert('projet supprimé')
      })
      .catch(err =>
        console.error(err))
  }

  return (
    <div className='actualReferences' >

      {references.length && references.map(reference => {
        return (

          <Grid item xs={12} key={reference.id}>
            <div className='accordionref' >
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    <div className='titlereference' >
                      <h2>
                        {reference.name}
                      </h2>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className='actualReference' >
                    <div className='description' >
                      <TextField
                        name={reference.id}
                        autoComplete='description'
                        disabled
                        id="outlined-multiline-static"
                        label="description"
                        name='description'
                        multiline
                        fullWidth
                        rows={3}
                        variant="outlined"
                        onChange={(e) => setReferences({ ...reference, description: e.target.value })}
                        value={reference.description}
                      />
                    </div>
                    <div className='imagereference' >
                      {reference.urlReference && <img src={reference.urlReference ? url + '/' + reference.urlReference : ''} alt={reference.name} />}
                      <h4>
                        <a href={reference.projectLink} target="_blank">{reference.name}</a>
                        {/* <p>Client : {reference.client}</p> */}
                      </h4>
                    </div>
                    <div className='updatedelete' >
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<DeleteIcon />}
                        name={reference.id}
                        onClick={handleDelete}
                      >
                        Delete
                    </Button>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>

            </div>
            {/* <TextField
                disabled
                autoComplete='client'
                name='client'
                variant='outlined'
                // disabled
                // fullWidth
                id='client'
                label='client'
                autoFocus
                onChange={(e) => setReferences({ ...reference, client: e.target.value })}
                value={reference.client}
              /> */}
          </Grid>
        )
      })}
    </div>
  );
};

export default ActualReferences;