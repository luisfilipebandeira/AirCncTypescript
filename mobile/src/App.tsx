import 'react-native-gesture-handler';
import React from 'react'
import {View, StatusBar} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Routes from './routes'

const App: React.FC = () => (
      <NavigationContainer>
        <View style={{backgroundColor: '#fff', flex: 1}}>
          <StatusBar barStyle="light-content" backgroundColor="#d60834" />
          <Routes />
        </View>
      </NavigationContainer>
)
export default App