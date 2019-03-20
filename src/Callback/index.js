import React, { Component } from 'react';
import {FlexWrapper} from '../Components'
import loading from './loading.svg';
import {withAuth} from '../Auth'

class Callback extends Component {
  componentDidMount(){
      const {handleAuthentication} = this.props;
      if(handleAuthentication){
          handleAuthentication()
      }
  }

  render() {
    return (
      <FlexWrapper >
        <img src={loading} alt="loading"/>
      </FlexWrapper>
    );
  }
}

export default withAuth(Callback);