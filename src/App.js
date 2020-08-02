import React, { useState } from 'react';
import Home from './pages/Home';
import Admin from './pages/Admin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import PhotContextProvider from './components/PhotoContextProvider'

import API from './API';


const Apps = styled.div`
    text-align: center;
    --grey: #595959;
    --red: #FB4974;

    font-family: 'BB-medium', serif;
    height: 90vh;
    display: flex;
    flex-direction: column;
    // margin: 0;
    margin-Left: 0vw;
    padding: 0;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      perso : {
        id:'',
        jobTitle:'',
        bio:'', 
      },

      projects: [{
        name: '',
        description:'',
        urlReference:'',
        projectLink:'',
        client:''
      }]
    };
  }

  componentDidMount = () => {
    const url = process.env.REACT_APP_API_URL +'/project'
    API.get(url)
    .then(res => res.data)
    .then(data => {
      this.setState({perso: data.bioJob[0]})
      this.setState({projects: data.projet})

    })
    .catch(err => console.error(err))
  }


  render() {
    return (
      <Apps>
        <PhotContextProvider>
            <Header />
          <Router>
              <Switch>
                <Route exact path='/'>
                  <Home infos={this.state}/>
                </Route>
                <Route>
                  <Admin infos={this.state} upDateProject={this.upDateProject}/>
                </Route>
              </Switch>
            {/* <Footer /> */}
          </Router>
        </PhotContextProvider>
    </Apps>
      
    );
  };
}


export default App;

