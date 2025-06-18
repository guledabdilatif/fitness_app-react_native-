import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack
    screenOptions={{headerShown:false}}
    initialRouteName='index'
    >
<Stack.Screen name='exercises' options={{presentation:'fullScreenModal'}}/>
<Stack.Screen name='exerciseDetails' options={{presentation:'modal'}}/>

    </Stack>
  )
}