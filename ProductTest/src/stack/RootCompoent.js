import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DanhSachBooking from '../screens/DanhSachBooking'
import DanhSachLeadTimNang from '../screens/DanhSachLeadTimNang'

const Stack = createStackNavigator();
function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}
function DetailsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}


export default RootComponent = ({ route, navigation }) => {

    // <NavigationContainer>
    //     <Stack.Navigator initialRouteName='DanhSachBooking' screenOptions={{ headerShown: false }}>
    //         <Stack.Screen name="DanhSachBooking" component={DanhSachBooking} />
    //         {/* <Stack.Screen name="Home" component={Home} />
    //         <Stack.Screen name="Setting" component={Setting} /> */}
    //         {/* <Stack.Screen name="HomeTab" component={MyTabs} /> */}
    //         {/* <Stack.Screen name="Animate" component={Animate} /> */}

    //     </Stack.Navigator>
    // </NavigationContainer>
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="DanhSachBooking" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="DanhSachBooking" component={DanhSachBooking} />
                <Stack.Screen name="DanhSachLeadTimNang" component={DanhSachLeadTimNang} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}
