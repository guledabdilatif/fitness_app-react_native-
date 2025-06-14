import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function Index() {
  const router = useRouter();
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
        <Animated.View entering={FadeInDown.delay(1000).springify()} style={styles.grad}>
          <Text style={{ fontSize: hp(5), fontWeight: 'bold', color: 'white' }}>
            Best Workout
          </Text>
          <Text style={{ fontSize: hp(5), fontWeight: 'bold', color: 'white' }}>
            for You
          </Text>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(2000).springify()}>
          <TouchableOpacity 
          onPress={()=>router.push('home')} 
          style={{
            height: hp(7), width: wp(80),
            backgroundColor: 'red',
            display: 'flex',
            alignItems: 'center',
            justifyContent: "center",
            borderRadius: 30,
            borderColor: "white",
            borderWidth:1
          }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: hp(3) }}>Get Started</Text>
          </TouchableOpacity>
        </Animated.View>
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