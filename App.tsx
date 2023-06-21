import React from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './src/store';
import HomeScreen from './src/screens/HomeScreen';
import AddUserScreen from './src/screens/AddUserScreen';
import EditUserScreen from './src/screens/EditUserScreen';

const queryClient = new QueryClient();

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="AddUser" component={AddUserScreen} />
            <Stack.Screen name="EditUser" component={EditUserScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
