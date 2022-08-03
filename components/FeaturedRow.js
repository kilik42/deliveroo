import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import sanityCLient from "../sanity";
const FeaturedRow = ({id, title, description}) => {
    const [restaurants, setRestaurants] = useState([]);


  useEffect(() =>{
    // console.log(id)
    sanityCLient.fetch(`*[_type == "featured" && id = $id]{
      ...,
      restaurants[] -> {
        ...,
        dishes[] ->,
        type-> {
          name
        }
      },
    }[0]

    `,{id})
    .then(data => {
      setRestaurants(data?.restaurants);
    })

  },[])

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
            {restaurants.map(restaurant => (
              <RestaurantCard 
              key={restaurant.id} 
              id={restaurant.id}
              name={restaurant.name}
              title={restaurant.title}
              short_description={restaurant.short_description}
              imgUrl={restaurant.image}
              type={restaurant.type}
              dishes={restaurant.dishes}
              rating={restaurant.rating}
              long = {restaurant.lon}
              lat = {restaurant.lat}
              genre = {restaurant.genre}
              address = {restaurant.address}
              // restaurant={restaurant} 
              />

            ))}
            
        </ScrollView>

    </View>
  )
}

export default FeaturedRow