import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './SplashScreen';
import PhoneNumber from './PhoneNumber';
import Otp from './Otp';

const Stack = createNativeStackNavigator();

const AuthNavigator = ()=> {
return (
<Stack.Navigator initialRouteName="splash">
   <Stack.Screen
            name="splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="phonenumber"
            component={PhoneNumber}
            options={{ headerShown: false }}
          />

  <Stack.Screen
            name="otp"
            component={Otp}
            options={{ headerShown: false }}
          />
  
  </Stack.Navigator>
)

}



export default AuthNavigator
