import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import { StackNavigator } from "react-navigation";
import PhotoDetails from "./PhotoDetails";

class RestContainer extends React.Component {
  static navigationOptions = {
    title: "Rest App"
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      dataSource: []
    };
  }

  componentDidMount() {
    this.makeRequest();
  }

  makeRequest = () => {
    const url = `https://jsonplaceholder.typicode.com/photos`;
    this.setState({ loading: true });
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          loading: false,
          dataSource: responseJson
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
        console.log(error);
      });
  };

  renderItem(dataSource) {
    let { item, index } = dataSource;
    return (
      <View style={styles.itemBlock}>        
          <Image source={{ uri: item.thumbnailUrl }} style={styles.itemImage} />
          <View style={styles.itemMeta}>
            <Text style={styles.itemName}>{item.id}</Text>
            <Text style={styles.itemLastMessage}>{item.title}</Text>
            </View>
      </View>
    );
  }
  // <TouchableHighlight onPress={() => this.props.navigation.navigate("PhotoDetails")}></TouchableHighlight>
  render() {
    return (
      // <View style={{ flex: 1, paddingTop: 20 }}>
      <ScrollView
      data={this.state.dataSource}
      renderItem={this.renderItem.bind(this)}
      keyExtractor={(item, index) => index}
      />
    );
  }

let styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  itemBlock: {
    flexDirection: "row",
    paddingBottom: 10
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  itemMeta: {
    marginLeft: 10,
    justifyContent: "center"
  },
  itemName: {
    fontSize: 20
  },
  itemLastMessage: {
    fontSize: 14,
    color: "#111"
  },
  separator: {
    height: 0.5,
    width: "80%",
    alignSelf: "center",
    backgroundColor: "#555"
  },
  header: {
    padding: 10
  },
  headerText: {
    fontSize: 30,
    fontWeight: "900"
  }
});

const RestApp = StackNavigator({
  Home: { screen: RestContainer },
  PhotoDetails: { screen: PhotoDetails }
});

module.exports = RestApp;
