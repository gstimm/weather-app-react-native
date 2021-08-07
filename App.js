import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import Home from './screens/Home';
import Search from './screens/Search';
import Details from './screens/Details';
import { colors } from './utils';
import { Provider } from 'react-redux';
import store from './store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={Home}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Search')}
                  style={styles.searchButton}
                >
                  <Ionicons
                    name='search'
                    size={30}
                    color={colors.PRIMARY_COLOR}
                  />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name='Search'
            component={Search}
            options={{ title: 'Search' }}
          />
          <Stack.Screen
            name='Details'
            component={Details}
            options={{ title: 'Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  searchButton: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});
