import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../utils';

const Details = ({
  route: {
    params: { data },
  },
}) => {
  return (
    <View style={styles.container}>
      {data.city && (
        <View style={styles.title}>
          <Text style={styles.cityTitle}>{data.city}</Text>
        </View>
      )}
      {data.continent && (
        <View style={styles.info}>
          <Text style={styles.label}>Continent: </Text>
          <Text style={styles.text}>{data.continent}</Text>
        </View>
      )}
      {data.country && (
        <View style={styles.info}>
          <Text style={styles.label}>Country: </Text>
          <Text style={styles.text}>{data.country}</Text>
        </View>
      )}
      {data.country_code && (
        <View style={styles.info}>
          <Text style={styles.label}>Country Code: </Text>
          <Text style={styles.text}>{data.country_code}</Text>
        </View>
      )}
      {data.state && (
        <View style={styles.info}>
          <Text style={styles.label}>State: </Text>
          <Text style={styles.text}>{data.state}</Text>
        </View>
      )}
      {data.state_code && (
        <View style={styles.info}>
          <Text style={styles.label}>State Code: </Text>
          <Text style={styles.text}>{data.state_code}</Text>
        </View>
      )}
      {data.county && (
        <View style={styles.info}>
          <Text style={styles.label}>County: </Text>
          <Text style={styles.text}>{data.county}</Text>
        </View>
      )}
      {data.region && (
        <View style={styles.info}>
          <Text style={styles.label}>Region: </Text>
          <Text style={styles.text}>{data.region}</Text>
        </View>
      )}
      {data.latitude && (
        <View style={styles.info}>
          <Text style={styles.label}>Latitude: </Text>
          <Text style={styles.text}>{data.latitude}</Text>
        </View>
      )}
      {data.longitude && (
        <View style={styles.info}>
          <Text style={styles.label}>Longitude: </Text>
          <Text style={styles.text}>{data.longitude}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  main: {
    borderWidth: 1,
    borderColor: colors.BORDER_COLOR,
    borderRadius: 8,
    padding: 10,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  label: {
    fontWeight: 'bold',
    color: colors.TEXT_COLOR,
    fontSize: 20,
  },
  text: {
    color: colors.TEXT_COLOR,
    fontSize: 16,
  },
  title: {
    alignItems: 'center',
    marginBottom: 20,
  },
  cityTitle: {
    fontSize: 28,
    color: colors.TEXT_COLOR,
    fontWeight: 'bold',
  },
});
export default Details;
