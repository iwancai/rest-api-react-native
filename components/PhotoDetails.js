import React from 'react';
import { View, TouchableHighlight, Text, Image } from 'react-native';
// import styles from './styles/styles';

class ContactDetails extends React.Component {
    static navigationOptions = {
        title: `Photo Detail`,
      };
    render() {
        const { item } = this.props.navigation.state.params;
        return (
          <View style={styles.contactDetail}>
            
            <Image source={uri(item.url)} style={styles.imgProfile} />
            <View>
                <Text>Album Id: {item.albumId}</Text>
                <Text>Title: {item.title}</Text>
            </View>
          </View>
        );
      }
}
// "albumId": 1,
//     "id": 1,
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "http://placehold.it/600/92c952",
//     "thumbnailUrl": "http://placehold.it/150/92c952"
//   },
export default PhotoDetails;