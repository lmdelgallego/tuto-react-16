import React, { PureComponent } from 'react';

import classes from './App.css';
import Layout from '../components/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';


class App extends PureComponent {
  render () {
    return (
        <div>
          <Layout>
            <BurgerBuilder />
          </Layout>
        </div>
    );
  }
}

export default App;