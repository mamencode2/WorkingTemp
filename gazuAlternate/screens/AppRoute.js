import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/authSlice';

const AppRoute = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <NavigationContainer>
            {/* Conditional stack navigator rendering based on login state */}

            {
                isLoggedIn ? <AppNavigator /> : <AuthNavigator />
            }
        </NavigationContainer>
    )
}

export default AppRoute
