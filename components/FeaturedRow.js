import { View, Text } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({id, title, description}) => {
  return (
    <View>
      <View className = "mt-4 flex-row items-center justify-between px-4">
        <Text className= 'font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color="#00CCBB"/>
      </View>

      <Text className= "text-xs text-gray-500 px-4">{description}</Text>

        <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
        >
            {/* Restaurant Cards */}
            <RestaurantCard 
             id = {123}
             imgUrl = 'https://picsum.photos/id/237/200/300'
             title = 'Restaurant 1'
             rating = {4.5}
             genre = 'Chinese'
             address = '123 Main St'
             short_description= 'This is a short description'
             dishes = 'Dishes'
             long = {-122.4}
             lat=   {37.7}
            />

            <RestaurantCard 
             id = {123}
             imgUrl = 'https://picsum.photos/id/237/200/300'
             title = 'Restaurant 1'
             rating = {4.5}
             genre = 'Chinese'
             address = '123 Main St'
             short_description= 'This is a short description'
             dishes = 'Dishes'
             long = {-122.4}
             lat=   {37.7}
            />

            <RestaurantCard 
             id = {123}
             imgUrl = 'https://picsum.photos/id/237/200/300'
             title = 'Restaurant 1'
             rating = {4.5}
             genre = 'Chinese'
             address = '123 Main St'
             short_description= 'This is a short description'
             dishes = 'Dishes'
             long = {-122.4}
             lat=   {37.7}
            />
        </ScrollView>

    </View>
  )
}

export default FeaturedRow