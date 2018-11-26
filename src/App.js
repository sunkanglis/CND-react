import React, { Component } from 'react';

import MainContainer from '@views/main/MainContainer'
import DetailContainer from '@views/detail/DetailContainer'

import {Route,Redirect} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path= '/'  exact render={()=><Redirect to='/main' />} />
        <Route path='/main' component={MainContainer} />
        <Route path='/detail' component={DetailContainer} />
      </div>
    );
  }
}

export default App;
