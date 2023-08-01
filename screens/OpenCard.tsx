import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

type FullScreanImagePageProps = {
  route: any,
};

const FullScreenImagePage: React.FC<FullScreanImagePageProps> = ({ route }) => {
  
  const imageUrl = route.params.imageUrl;
  const author = route.params.name;
  const description = route.params.description;

  return (
<View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="contain" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{author}</Text>
        <Text style={styles.caption}>{description}</Text>
      </View>
    </View>
  );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: '80%',
    },
    textContainer: {
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
    },
    caption: {
      fontSize: 20,
      color: 'white',
    },
  });

export default FullScreenImagePage;
