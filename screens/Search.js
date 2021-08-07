import React, { useState } from 'react';
import * as Location from 'expo-location';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Keyboard,
} from 'react-native';
import { colors } from '../utils';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import RecentItem from '../components/RecentItem';
import { WEATHER_API_KEY, BASE_WEATHER_URL } from '@env';

export default function Search({ navigation }) {
  const locations = useSelector((state) => state.locations);
  const dispatch = useDispatch();
  const [enteredLocation, setEnteredLocation] = useState('');

  const submitHandler = async () => {
    if (!enteredLocation) return;

    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?key=e85809527b0341b18712ec1bacc3aab9&q=${enteredLocation}`
      );
      const { results, status } = await response.json();

      if (status.code === 400) {
        throw new Error(result.status.message);
      }

      if (!results[0].components.city)
        return alert(
          'City not found, specify a state for a more accurate search. EX: São Paulo, SP.'
        );

      console.log(enteredLocation);
      console.log(results[0].components);

      const newLocation = {
        city: results[0].components.city,
        continent: results[0].components.continent,
        state_code: results[0].components.state_code,
        state: results[0].components.state,
        country: results[0].components.country,
        country_code: results[0].components.country_code,
        county: results[0].components.county,
        region: results[0].components.region,
        latitude: results[0].geometry.lat.toString(),
        longitude: results[0].geometry.lng.toString(),
      };

      console.log(newLocation);

      dispatch({ type: 'addLocation', location: newLocation });
      setEnteredLocation('');
      Keyboard.dismiss();
    } catch (error) {
      alert('City not found, verify and try again.');
    }
  };

  const getLocation = async () => {
    const location = await Location.getCurrentPositionAsync();
    const { latitude, longitude } = location.coords;
    const response = await fetch(
      `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`
    );

    const currentWeather = await response.json();

    const { name } = currentWeather;
    setEnteredLocation(name);
    submitHandler();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.typeTitle}>Type your location here:</Text>
      <TextInput
        style={styles.textInput}
        defaultValue={enteredLocation}
        onChangeText={(text) => setEnteredLocation(text)}
      />
      <View style={styles.buttonsDiv}>
        <TouchableOpacity onPress={submitHandler} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={getLocation} style={styles.button}>
          <MaterialCommunityIcons
            name='crosshairs-gps'
            size={30}
            color='#fff'
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.previousSearchTitle}>Previous Searches</Text>
      <FlatList
        data={locations}
        keyExtractor={(location) =>
          `${location.latitude}/${location.longitude}`
        }
        renderItem={({ item }) => (
          <RecentItem item={item} navigation={navigation} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    padding: 10,
  },
  typeTitle: {
    fontSize: 20,
    marginVertical: 16,
    fontWeight: '600',
  },
  textInput: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.BORDER_COLOR,
    borderRadius: 10,
    height: 60,
    width: '100%',
    paddingLeft: 6,
    fontSize: 18,
  },
  buttonsDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  button: {
    backgroundColor: colors.PRIMARY_COLOR,
    width: 130,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  previousSearchTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
