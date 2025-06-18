import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-virtualized-view';
import { fetchexerciseByBodyParts } from '../api/exerciseDB';
import ExercisesList from '../components/ExercisesList';
import { bodyPartImages, dummyExercises } from '../constants';
export default function Exercises() {
    const [exercises, setExercises] = useState(dummyExercises);

    const router = useRouter();
    const item = useLocalSearchParams()
    console.log(item);

    useEffect(() => {
        // if (item) getExercises(item.name);


    }, [item]);
    const getExercises = async (bodyParts) => {
        let data = await fetchexerciseByBodyParts(bodyParts);
        // console.log(data);
        setExercises(data);
    }
    // getExercises()
    return (
        <ScrollView>
            <StatusBar style='light' />
            <Image
                source={bodyPartImages[item.name]}
                style={{ width: wp(100), height: hp(45), borderRadius: 20 }}
            />
            <TouchableOpacity
                onPress={() => router.back()}
                style={{
                    marginHorizontal: 4,
                    position: 'absolute',
                    borderRadius: 50,
                    top: 0,
                    left: 0,
                    height: hp(5.5),
                    width: hp(5.5)

                }}
            >
                <FontAwesome5 name="arrow-circle-left" size={hp(6)} color="white" />

            </TouchableOpacity>

            <View>
                <Text
                    style={{
                        fontSize: hp(3),
                        padding: 20,
                        fontWeight: 'bold'
                    }}
                >{item.name} Exercises</Text>
            </View>
            <View
                style={{
                    marginBottom: 10
                }}>
                {/* component */}
                <ExercisesList data={exercises} />
            </View>
           

        </ScrollView>
    )
}