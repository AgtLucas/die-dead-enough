/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var SideMenu = require('react-native-side-menu');
var Menu = require('./App/Menu');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TabBarIOS,
  NavigatorIOS,
} = React;

var styles = StyleSheet.create({
  button: {
   position: 'absolute',
   bottom: 50,
   backgroundColor: 'red',
   borderRadius: 20,
  },
  button2: {
   position: 'absolute',
   bottom: 20,
   backgroundColor: 'red',
   borderRadius: 20,
  },
  caption: {
   fontSize: 20,
   fontWeight: 'bold',
   alignItems: 'center',
  },
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

class Button extends React.Component {
  handlePress(e) {
    this.props.menuActions.toggle();
    if (this.props.onPress) {
      this.props.onPress(e);
    }
  }

  render() {
    return(
      <TouchableOpacity
        onPress={this.handlePress.bind(this)}>
        <Text style={this.props.style}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

class StatusBar extends React.Component {

  render() {
    return(
      <NavigatorIOS initialRoute={{ title: 'React Native' }} />
    );
  }

}

class RVDB extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      touchToClose: false,
    };
  }

  handleOpenWithTouchToClose() {
    this.setState({
      touchToClose: true,
    });
  }

  handleChange(isOpen) {
    if (!isOpen) {
      this.setState({
        touchToClose: false,
      });
    }
  }

  render() {
    return(
      <SideMenu
        menu={<Menu />}
        touchToClose={this.state.touchToClose}
        onChange={this.handleChange.bind(this)}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Yo!!!
          </Text>
        </View>
          <Button style={styles.button}>Toggle Menu</Button>
          <Button style={styles.button2}
            onPress={this.handleOpenWithTouchToClose.bind(this)}>
              Open Menu (overlay closes)
          </Button>
      </SideMenu>
    );
  }
}


AppRegistry.registerComponent('RVDB', () => RVDB);
