import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      userData: []
    }
  }

  componentDidMount() {
    const {handleLocalAction, localActions} = this.props;
    handleLocalAction({
      type: localActions.GET_USER_DATA
    })
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps){
      this.setState({
        userData: nextProps.userData
      })
    }
  }

  render() {
    const { userData } = this.state;
    let id = userData && userData.length > 0 && userData[0].id && userData[0].id || 1
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>{id}</Text>
        </View>
    );
  }
}
