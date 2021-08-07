import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { colors } from '../utils';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Search() {
  return (
    <View style={styles.container}>
      <Text style={styles.typeTitle}>Type your location here:</Text>
      <TextInput style={styles.textInput} />
      <View style={styles.buttonsDiv}>
        <TouchableOpacity onPress={() => alert('kkk')} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('kkk')} style={styles.button}>
          <MaterialCommunityIcons name='target' size={30} color='#fff' />
        </TouchableOpacity>
      </View>
      <Text style={styles.previousSearchTitle}>Previous Searches</Text>
      <View style={styles.previousArea}>
        <View style={styles.previousCard}>
          <View style={styles.locationInfos}>
            <Text style={styles.locationInfosCity}>Rio de Janeiro</Text>
            <Text style={styles.locationInfosUfCountry}>RJ, Brazil</Text>
          </View>
          <View style={styles.locationArrow}>
            <MaterialCommunityIcons
              name='arrow-right'
              size={30}
              color={colors.PRIMARY_COLOR}
            />
          </View>
        </View>
        <View style={styles.previousCard}>
          <View style={styles.locationInfos}>
            <Text style={styles.locationInfosCity}>Rio de Janeiro</Text>
            <Text style={styles.locationInfosUfCountry}>RJ, Brazil</Text>
          </View>
          <View style={styles.locationArrow}>
            <MaterialCommunityIcons
              name='arrow-right'
              size={30}
              color={colors.PRIMARY_COLOR}
            />
          </View>
        </View>
        <View style={styles.previousCard}>
          <View style={styles.locationInfos}>
            <Text style={styles.locationInfosCity}>Rio de Janeiro</Text>
            <Text style={styles.locationInfosUfCountry}>RJ, Brazil</Text>
          </View>
          <View style={styles.locationArrow}>
            <MaterialCommunityIcons
              name='arrow-right'
              size={30}
              color={colors.PRIMARY_COLOR}
            />
          </View>
        </View>
      </View>
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
    fontSize: 16,
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
  },
  previousArea: {},
  previousCard: {
    width: '100%',
    height: 80,
    backgroundColor: colors.BORDER_COLOR,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 16,
    marginVertical: 5,
  },
  locationInfos: {
    borderLeftWidth: 4,
    borderLeftColor: colors.PRIMARY_COLOR,
  },
  locationInfosCity: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  locationInfosUfCountry: {
    fontSize: 16,
    paddingLeft: 10,
  },
  locationArrow: {
    justifyContent: 'center',
    marginRight: 10,
  },
});
