/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

class RVDB extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      position: 'unknown'
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({position}),
      (error) => console.log(error)
    );
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Position: {JSON.stringify(this.state.position)}
        </Text>
        <Text style={styles.instructions}>

        </Text>
        <Text style={styles.instructions}>

        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RVDB', () => RVDB);
