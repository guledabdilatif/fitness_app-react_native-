// components/ImageSlider.jsx
import { Dimensions, Image, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { sliderImages } from '../constants';

const { width } = Dimensions.get('window');

export default function ImageSlider() {
  return (
    <Carousel
      width={width * 0.85}
      height={hp(27)}
      autoPlay
      data={sliderImages}
      scrollAnimationDuration={1000}
      style={{ alignSelf: 'center' }}
      renderItem={({ item }) => (
        <View
          style={{
            width: width * 0.85,
            height: 200,
            borderRadius: 15,
            overflow: 'hidden',
            backgroundColor: '#ddd',
          }}
        >
          <Image
            source={item}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
          />
        </View>
      )}
    />
  );
}
