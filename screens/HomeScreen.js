import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { UserIcon, ChevronDownIcon, SearchIconm, AdjustmentsIcon, SearchIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from 'react-native-safe-area-context'; 
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';


const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,  
        
    });
}, []);
  return (
    <SafeAreaView className='bg-white pt-5'>
      
        {/* Header */}
        <View className='flex-row pb-3 items-center mx-4 space-x-2 '>
            
                <Image source={{
                    uri: 'https://picsum.photos/id/237/200/300',
                }}
                className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                />
            <View>
                <Text className='text-gray-400 font-bold text-xs'>
                    Deliver now
                </Text>
                <Text className='text-gray-400 font-bold text-xl'>
                    Current Location 
                    <ChevronDownIcon size={20} color='#00CCBB' />


                </Text>
            </View>

            <UserIcon size={35} color='#00CCBB' />
        </View>

        {/* Search Bar */}
        <View className='flex-row items-center space-x-2 pb-2 mx-4'>
            <View className='flex-row space-x-2 flex-1 bg-gray-200 p-3'>
                <SearchIcon size={20} color='gray' />
                <TextInput placeholder='restaurants and cuisines'
                 keyboardType="default"
                />
            </View>
            <AdjustmentsIcon color='#00CCBB' />

        </View>

        {/*Body */}

            <ScrollView className='bg-gray-100'
            contentContainerStyle={{
                paddingBottom: 100,
            }}
            >
                {/* categories */}
                    <Categories/>

                {/* featured */}

                <FeaturedRow 
                id="1"
                    title="Featured"
                    description = "paid placements from our partners"
                    featuredCategory ="featured"
                />

                {/* tasty discounts */}
                 <FeaturedRow 
                id="2"
                    title="Featured"
                    description = "paid placements from our partners"
                    featuredCategory ="featured"
                /> 

                {/* offers near you */}'
                 <FeaturedRow 
                id="3"
                    title="Featured"
                    description = "paid placements from our partners"
                    featuredCategory ="featured"
                />

            </ScrollView>

       

      

    </SafeAreaView>
  )
}

export default HomeScreen