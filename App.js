import React, { Component } from 'react';
import { View } from 'react-native';

export default class App extends Component {

  componentDidMount() {
    const {handleLocalAction, localActions} = this.props;
    handleLocalAction({
      type: localActions.GET_USER_DATA
    })
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    alert(JSON.stringify(nextProps))
  }

  render() {
    return(
        <View/>
    );
  }
}
