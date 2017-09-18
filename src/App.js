import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './Header';
import Sidebar from './Sidebar';
import ImageCollection from './ImageCollection';
import ImageDetail from './ImageDetail';
import CategorySelect from './CategorySelect';
import Landing from './Landing';

require('./main.css');


const ImageCollectionWrapper = (images) => (
  <ImageCollection images={images} />
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeURL: window.location.href,
    }

  }

  render() {
   
    return (
      <BrowserRouter>



      <div className="App">
       
        <Header />
       
        <Sidebar homeURL={this.state.homeURL}/>

        <div className="App__body">
            <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/ImageCollection" component={ImageCollection} />
              <Route path="/imageDetail/:id" component={ ImageDetail } />
              <Route path="/:name" component={ CategorySelect } />
            </Switch>
        </div>

      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
