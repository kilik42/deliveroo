// rnfe
import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import sanityClient, { urlFor } from "../sanity";
const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    sanityClient.fetch(`
      *[_type == "category"]
    `)
    .then((data)=>{
      setCategories(data);
    })
  },[])
  return (
    <ScrollView 
    
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
        {/* Category card */}

        {categories.map((category)=>(
          <CategoryCard
          key={category._id}
          imgUrl = {urlFor(category.image).url()}
          title= {category.name}
          />
        ))}
        {/* <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing 1"/>
        <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing 2"/>
        <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing 3"/>
        <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing 3"/>
        <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing 3"/>
        <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing 3"/> */}
      <Text>Categories</Text>
    </ScrollView>
  )
}

export default Categories