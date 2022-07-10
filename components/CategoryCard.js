import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity>
        <Image source ={{
            uri: imgUrl,
        }}/>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard