import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Feed from './components/Feed';

class Dogstagram extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Dogstagram</Text>
        </View>
        <Feed />
      </SafeAreaView>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(248,248,248)',
    borderBottomColor: 'rgb(230,230,230)',
    borderBottomWidth: 1,
  },
  userDeck: {
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(255,255,255)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'rgb(230,230,230)',
    borderBottomWidth: 1,
  },
  dp: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginVertical: 5,
    marginRight: 10,
  },
  picHolder: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
  reaction: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'rgb(248,248,248)',
    borderColor: 'rgb(230,230,230)',
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  reactIcon: {
    height: 30,
    width: 30,
    margin: 10,
  },
});

export default Dogstagram;
