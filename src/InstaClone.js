import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import config from './config';

class InstaClone extends Component {
  constructor() {
    super();
    this.state = {
      screenWidth: 0,
      liked: false,
    };
  }
  componentDidMount() {
    this.setState({
      screenWidth: Dimensions.get('window').width,
    });
  }

  handleLike() {
    this.setState({liked: !this.state.liked});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Instagram</Text>
        </View>
        <View style={styles.userDeck}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={styles.dp}
              source={{
                uri: 'https://randomuser.me/api/portraits/women/65.jpg',
              }}
            />
            <Text>Mary Jane</Text>
          </View>
          <View>
            <Text style={{fontSize: 30, alignItems: 'center'}}>...</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => {this.handleLike()}}>
          <Image
            style={styles.picHolder}
            source={{
              uri:
                'https://cdn1-www.dogtime.com/assets/uploads/2011/03/puppy-development.jpg',
            }}
          />
        </TouchableOpacity>
        <View style={styles.reaction}>
          <Image
            style={styles.reactIcon}
            source={this.state.liked ? config.images.liked : config.images.like}
          />
          <Image style={styles.reactIcon} source={config.images.comment} />
          <Image style={styles.reactIcon} source={config.images.share} />
        </View>
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

export default InstaClone;
