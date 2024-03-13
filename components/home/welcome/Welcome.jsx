import React from 'react'
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  TextInputComponent
} from 'react-native';
import { useRouter } from 'expo-router';
import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Hello Ian!</Text>
      <Text style={styles.welcomeMessage}>Find your perfect job</Text>

      <View style={styles.searchContainer}>
        <View style={styles.searchInput}>
          <TextInput style={styles.searchInput}
          value=""
          onChange={() => {}}
          placeholder='What are you looking for?' />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList />
      </View>
    </View>
  )
}

export default Welcome