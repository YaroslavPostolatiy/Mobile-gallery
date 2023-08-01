import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { View, FlatList, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';

interface ImgData {
  full: string,
}

interface UserData {
  name: string,
}

interface PhotoData {
  user: UserData,
  id: string,
  name: string,
  description: string,
  urls: ImgData,
}

interface OpenScreansParams {
  imageUrl: string,
  name: string,
  description: string,
};

type Props = NativeStackScreenProps<{OpenCard: OpenScreansParams} >;

const Home: React.FC<Props> = ( {navigation} : Props) => {
  const [data, setData] = useState<PhotoData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse = await axios.get('https://api.unsplash.com/search/photos', {
          params: {
            query: 'Car',
            client_id: 'LmZCLANmbgpHBWg5PuW6qDDLRJTEQkQ7wygmu2A8WqA'
          }
        });
        setData(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item } : {item:PhotoData}) => ( 
    <View style={styles.item}> 
      <ListItem onPress={() => navigation.navigate('OpenCard', {imageUrl: item.urls.full, name: item.user.name, description: item.description})} id={item.id} name={item.user.name} image={item.urls.full} description={item.description}/>
    </View> 
  ); 

  return (
    <View>
      <FlatList 
        data={data} 
        numColumns={2}
        keyExtractor={(item) => item.id} 
        renderItem={renderItem} 
        contentContainerStyle={styles.container} 
      /> 
    </View>
  );
};

const styles = StyleSheet.create({ 
  container: { 
    paddingHorizontal: 16, 
    paddingVertical: 8, 
  }, 
  item: { 
    flex: 1, 
    margin: 5, 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 5, 
  }, 
});

export default Home;
