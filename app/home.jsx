import AntDesign from '@expo/vector-icons/AntDesign';
import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BodyParts from '../components/BodyParts';
import ImageSlider from '../components/ImageSlider';
// import ImageSlider from '../components/ImageSlider';
export default function Home() {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <StatusBar style="dark" />
            {/* puncline and avatar  */}
            <View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: 'flex-start',
                padding: hp(2)
            }}>
                <View style={{ paddingVertical: 10 }}>
                    <Text style={{ fontSize: hp(4.5), fontWeight: "bold" }}>READY TO</Text>
                    <Text style={{ fontSize: hp(4.5), fontWeight: "bold", color: "red" }}>WORKOUT</Text>
                </View>
                <View style={{
                    display: "flex",
                    gap: hp(1),
                    justifyContent: "space-between",
                    alignItems: 'center',
                    paddingVertical: 10

                }}>
                    <Image source={require('../assets/images/avatar.png')} style={{ height: hp(6), width: hp(6), }} />
                    <View
                        style={{
                            height: hp(5.5),
                            width: hp(5.5),
                            borderColor: "white",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'lightgray'
                        }}>
                        <AntDesign name="bells" size={hp(3)} color="gray" />
                    </View>
                </View>
            </View>
            {/* image carousel  */}
            <View>
                <ImageSlider />
            </View>
            <View style={{ flex: 1 }}>
                <BodyParts />
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    }
})