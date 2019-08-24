import React, {Component} from 'react';
import {View, SafeAreaView, Text, StyleSheet, Image} from 'react-native';

class InstaClone extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Instagram</Text>
        </View>
        <View style={styles.userDeck}>

        </View>
        <Image
          style={styles.picHolder}
          source={{
            uri:
              'https://cdn1-www.dogtime.com/assets/uploads/2011/03/puppy-development.jpg',
          }}
        />
        <Text>Hello World</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(248,248,248)',
  },
  header: {
    width: '100%',
    height: 50,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(248,248,248)',
    borderBottomColor: 'rgb(230,230,230)',
    borderBottomWidth: 1,
  },
  userDeck: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgb(255,255,255)',
  },
  picHolder: {
    width: '100%',
    height: 200,
  },
});

export default InstaClone;
