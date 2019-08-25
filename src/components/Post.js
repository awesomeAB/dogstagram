import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import config from '../config';

const users = [
  {
    name: 'Mary Jane',
    dpLink: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Peter Parker',
    dpLink: 'data:image/jpeg;base64,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',
  },
  {
    name: 'Pepper Potts',
    dpLink: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Tony Stark',
    dpLink: 'https://cdn.shopify.com/s/files/1/1894/2897/products/HTB1Fi9zSa6qK1RjSZFmq6x0PFXa5_800x.jpg?v=1560939614',
  },
];

class Post extends Component {
  constructor(props) {
    super();
    let likes = Math.floor(Math.random() * 1000 + 1);
    this.state = {
      screenWidth: Dimensions.get('window').width,
      liked: false,
      likes: likes,
      user: users[props.user],
      imageLink: null,
    };
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          imageLink: responseJson.message,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  handleLike() {
    this.setState({liked: !this.state.liked});
    if (this.state.liked) {
      this.setState({liked: false, likes: --this.state.likes});
    } else {
      this.setState({liked: true, likes: ++this.state.likes});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.userDeck}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={styles.dp}
              source={{
                uri: this.state.user.dpLink,
              }}
            />
            <Text style={{fontSize: 15}}>{this.state.user.name}</Text>
          </View>
          <View>
            <Text style={{fontSize: 30, alignItems: 'center'}}>...</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            this.handleLike();
          }}>
          <Image
            style={styles.picHolder}
            source={{
              uri: this.state.imageLink,
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
        <View>
          <Text
            style={{marginLeft: 10, marginVertical: 10, fontWeight: 'bold'}}>
            {this.state.likes} likes
          </Text>
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
  userDeck: {
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(255,255,255)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'rgb(230,230,230)',
    borderBottomWidth: 1,
    borderTopWidth: 1,
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

export default Post;
