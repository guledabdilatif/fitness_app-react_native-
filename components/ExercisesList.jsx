import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function ExercisesList({ data }) {
  const router = useRouter()
  return (
    <View style={{ marginHorizontal: hp(1.5) }}>
      <FlatList

        data={data}
        numColumns={2}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: 'space-between'
        }}
        renderItem={({ item, index }) => <ExerciseCard router={router} item={item} index={index} />}
      />
    </View>
  )
}

const ExerciseCard = ({ item, router, index }) => {
 
  return (
    <TouchableOpacity

    onPress={()=>router.push({pathname: '/exerciseDetails', params: item})}
      style={{
        display: 'flex',
        paddingVertical: 10,
      }}>
      <View
        style={{ borderRadius: 10 }}
      >
        <Image source={{ uri: item.gifUrl}}
          contentFit='cover'
          style={{
            width: wp(44),
            height: wp(52),
            borderRadius: 25
          }}
        />
        <Text
          style={{
            fontSize: hp(1.7),
            fontWeight: 'bold'
          }}
        >

          {
            item.name.length > 20 ? item.name.slice(0, 14) + '...' : item.name
          }
        </Text>

      </View>
    </TouchableOpacity>
  )


}