import React from 'react';
import {NativeModules, Button, SafeAreaView} from 'react-native';

const {CalendarModule} = NativeModules;

export default function App() {
  const onPress = () => {
    console.log('We will invoke the native module here!');
    CalendarModule.createCalendarEvent('Tanmay Jain', 'Gurugram');
  };

  return (
    <SafeAreaView>
      <Button
        title="Click to invoke your native module"
        color="#841584"
        onPress={onPress}
      />
    </SafeAreaView>
  );
}
