import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface ListItemProps {
  id: string;
  name: string;
  image: string;
  description: string;
  onPress: any;
}

const ListItem: React.FC<ListItemProps> = ({ name, image, description, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.author}>{name}</Text>
        {description && description.trim() !== '' && (
          <Text style={styles.caption}>{description}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    width: 170,
    height: 150,
  },
  textContainer: {
    padding: 8,
  },
  author: {
    fontSize: 18,
    fontWeight: 'bold',

  },
  title: {
    fontSize: 16,
    color: 'gray',

  },
  caption: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ListItem;
