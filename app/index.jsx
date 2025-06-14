import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function index() {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <Image source={require("../assets/images/fitness.png")} style={styles.welcomeimage} />
      <LinearGradient
        colors={['transparent', '#18181b']}
        style={{ width: wp(100), height: hp(70),  display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 30 }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
      >
        <View style={styles.grad}>
          <Text style={{ fontSize: hp(5), fontWeight: 'bold', color: 'white' }}>
            Best Workout
          </Text>
          <Text style={{ fontSize: hp(5), fontWeight: 'bold', color: 'white' }}>
            for You
          </Text>
        </View>
        <View>
          <TouchableOpacity style={{
            height: hp(7), width: wp(80),
            backgroundColor: 'red',
            display: 'flex',
            alignItems: 'center',
            justifyContent: "center",
            borderRadius: 30,
            border: "1px solid white"
          }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: hp(3) }}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end'

  },
  grad: {
    display: 'flex',
    alignItems: 'center',
    // position:'absolute',
    paddingVertical:30,
    justifyContent: 'center',

  },
  welcomeimage: {
    width: "100%",
    height: "100%",
    // resizeMode: 'cover',
    position: 'absolute'


  }


});