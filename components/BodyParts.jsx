import { LinearGradient } from 'expo-linear-gradient';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { bodyParts } from '../constants';



export default function BodyParts() {
    return (
        <View style={{ marginHorizontal: hp(1.5) }}>
            <Text style={{ fontSize: hp(3), fontWeight: 'semibold' }}>Exercises</Text>
            <FlatList
                data={bodyParts}
                numColumns={2}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
                columnWrapperStyle={{
                    justifyContent: 'space-between'
                }}
                renderItem={({ item, index }) => <BodyPartCard item={item} index={index} />}
            />
        </View>
    )
}
const BodyPartCard = ({ item, index }) => {
    return (
        <View>
            <TouchableOpacity
                style={{
                    width: wp(44),
                    // height: wp(52),
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems:'center',
                    padding: 4,
                    marginBottom: 4
                }}
            >
                <Image
                    source={item.image}

                    style={{
                        width: wp(44),
                        height: wp(52),
                        borderRadius: wp(5),
                        resizeMode:"cover"
                    }}
                />
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.9)']}
                    style={{
                        width: wp(44),
                        height: hp(25),
                        position:'absolute',
                        bottom:0.5,
                        borderRadius:wp(5)
                    }}
                    start={{x:0.5, y:0}}
                    end={{x:0.5, y:1}}

                />
                <Text
                style={{
                    fontSize:hp(2.5),
                    color:'#fff',
                    fontWeight:'semibold',
                    position:'absolute',
                    bottom:0,
                    paddingBottom:hp(2)
                   
                }}
                >{item.name}</Text>
            </TouchableOpacity>
        </View>
    )

}