import React from 'react';
import photoContext from './photoContext';
import API from '../API'

class PhotContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobTitle: '',
      bio: '',
      name: '',
      urlReference: '',
      description: '',
      projectLink: '', 
      client: ''

    };
  }

  postNewRef = ({name, description, client, projectLink}) => {
    this.setState({name,  description, client, projectLink})
    const urlReference = this.state.urlReference
    const payload = {name, urlReference, description, client, projectLink}
    const url = process.env.REACT_APP_API_URL

    API.post(url + '/' + 'project/post', payload)
      .then(res => {

        alert('Post reussi')
      })
      .catch(err =>
        console.error(err))
        
  }

  putPersoInfos = ({bio, jobTitle}) => {
    this.setState({bio, jobTitle})
    const payload = {bio, jobTitle}
    const url = process.env.REACT_APP_API_URL

    API.patch(url + '/' + 'project/patchBio/1', payload)
      .then(res => {

        alert('Patch reussi')
      })
      .catch(err =>
        console.error(err))
  }



  updatePhoto = (photo) => {
    this.setState({ urlReference:photo });
  }




  render() {
    return (
      <photoContext.Provider value={{ ...this.state, putPersoInfos: this.putPersoInfos,updatePhoto: this.updatePhoto, postNewRef: this.postNewRef }}>
        {this.props.children}
      </photoContext.Provider>

    );
  };
}

export default PhotContextProvider;