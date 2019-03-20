import React, { Component } from 'react';
import {FlexWrapper} from '../Components'
import loading from './loading.svg';

class Callback extends Component {
  render() {
    return (
      <FlexWrapper >
        <img src={loading} alt="loading"/>
      </FlexWrapper>
    );
  }
}

export default Callback;