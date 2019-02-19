import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Grid from 'react-native-grid-component';

const SERVER_URL = 'http://192.168.0.34:3000'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      fruits: []
    }
  }

  async componentDidMount() {
    try {
      const fruits = await (await fetch(`${SERVER_URL}/fruits`)).json()
      await this.setState({
        isLoaded: true,
        fruits
      });
    }
    catch (error) {
      this.setState({
        error
      });
    }
  }

  async _onPressButton(fruit) {
    console.log(fruit);
    try {
      await fetch(`${SERVER_URL}/fruit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fruit: fruit
        })
      });

      this.setState({
        status: `Current fruit set to ${fruit}`
      });
    }
    catch (error) {
      console.log(err.message);
      this.setState({ status: err.message });
    }
  }

  _renderItem = (fruit, i) => (
    <View style={[styles.item]} key={i}>
      <Button onPress={() => this._onPressButton(fruit)}
        title={fruit}
        color="#841584" />
    </View>
  );

  _renderPlaceholder = i => <View style={styles.item} key={i} />;

  render() {
    const { error, isLoaded, fruits } = this.state;
    if (error) {
      return (<Text>Error: {error.message}</Text>);
    } else if (!isLoaded) {
      return (<Text>Loading...</Text>);
    } else {
      return (
        <Grid
          style={styles.list}
          renderItem={this._renderItem}
          renderPlaceholder={this._renderPlaceholder}
          data={fruits}
          itemsPerRow={2}
          itemHasChanged={(d1, d2) => d1 !== d2} />
      );
    }
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    height: 100,
    margin: 1
  },
  list: {
    flex: 1
  }
});
