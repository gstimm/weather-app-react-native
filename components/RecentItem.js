import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../utils';

export default function RecentItem({ item, navigation }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('Details', { name: item.city, data: item })
      }
    >
      <View style={styles.main}>
        <Text style={styles.city}>{item.city}</Text>
        <View>
          <Text style={styles.ufCountry}>
            {item.state_code}, {item.country}
          </Text>
        </View>
      </View>
      <MaterialCommunityIcons
        name='arrow-right'
        size={30}
        color={colors.PRIMARY_COLOR}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    backgroundColor: colors.BORDER_COLOR,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 14,
    paddingVertical: 16,
    marginVertical: 5,
  },
  main: {
    paddingLeft: 10,
    borderLeftWidth: 4,
    borderLeftColor: colors.PRIMARY_COLOR,
  },
  city: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  ufCountry: {
    fontSize: 16,
  },
});
