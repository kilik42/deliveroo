import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon} from 'react-native-heroicons/outline';
import {LocationMarkerIcon} from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';

const RestaurantCard = ({

    id,
    imgUrl, 
    title, 
    rating, 
    genre, 
    address, 
    short_description,
    dishes, 
    long, 
    lat,

}) => {
  return (
    <TouchableOpacity  className="bg-white mr-3 shadow">
     <Image 
        source = {{
            uri: urlFor (imgUrl).url(),
        }}
        className="h-36 w-64 rounded-sm"
        />
        <View className="px-3 pb-4">
            <Text className="text-lg pt-2 font-bold">
                {title}
                </Text>
            <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={20} />
                <Text className="text-sm text-gray-500">
                            <Text>{rating}</Text>  . {genre}
                </Text>
            </View>

            <View className="flex-row items-center space-x-1">
                <LocationMarkerIcon color="green" opacity={0.5} size={20} />
                <Text className="text-xs text-gray-500">
                  Nearby .   {address}
                </Text>
            </View>
        </View>
    </TouchableOpacity>
  )
};
   
  

export default RestaurantCard