import React, {Component} from 'react';
import Post from './Post';
import {Text, FlatList} from 'react-native';

class Feed extends Component {
  renderPost({item}) {
    return <Post user={item % 4} />;
  }
  extractKey(item) {
    return item.toString();
  }
  render() {
    return (
      <FlatList
        data={[1, 7, 9, 2, 15, 4, 6, 5, 8, 3, 12, 10, 13, 14]}
        keyExtractor={this.extractKey}
        renderItem={this.renderPost}
      />
    );
  }
}

export default Feed;
