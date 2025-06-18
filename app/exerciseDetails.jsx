import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function ExerciseDetails() {
  const item = useLocalSearchParams();
  console.log(item);

  return (
    <View>
      <Text>Exercise Details</Text>
      {/* <Text>{JSON.stringify(item)}</Text> */}
    </View>
  );
}
