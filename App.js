import { Text, View, SafeAreaView, StyleSheet, Image, StatusBar, TouchableOpacity, Vibration, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { posts } from './post'

export default function App() {

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar backgroundColor="#F56040" />

      <View style={styles.header}>
        <Image
          style={styles.logo}
          // source={require('./assets/instagram.png')}
          source={{ uri: 'https://i.redd.it/srbsixa0r7081.jpg' }}
        />
        <MaterialCommunityIcons name='chat-outline' size={30} color="#CCC" />
      </View>

      <ScrollView>
        {
          posts.map((post) => (
            <View>

              <View style={styles.headerPost}>
                <Text>{post.user}</Text>
                <MaterialCommunityIcons name='dots-horizontal' size={30} color="#000" />
              </View>

              <Image style={styles.imagePost} source={{ uri: post.image }} />

              <View style={styles.footerPost}>
                <TouchableOpacity onPress={() => Vibration.vibrate(500)}>
                  <MaterialCommunityIcons name='heart-outline' size={30} color="#CCC" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <MaterialCommunityIcons name='chat-outline' size={30} color="#CCC" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <MaterialCommunityIcons name='share-outline' size={30} color="#CCC" />
                </TouchableOpacity>
              </View>

              <Text style={styles.likeCount}> {post.likes} likes</Text>
              <Text style={styles.comment}>{post.caption}</Text>
            </View>
          ))
        }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  logo: {
    width: 40,
    height: 40
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    borderBottomColor: '#CCC',
    borderBottomWidth: 1
  },
  headerPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    alignItems: 'center'
  },
  imagePost: {
    width: '100%',
    height: 300
  },
  footerPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    alignItems: 'center'
  },
  likeCount: {
    fontWeight: 'bold',
    marginLeft: 5
  },
  comment: {
    textAlign: 'justify',
    marginLeft: 5
  }
})


