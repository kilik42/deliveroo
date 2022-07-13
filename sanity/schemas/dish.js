export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Dish Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required')
    },
    { name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required().error('Description is required')
    },
    { name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().error('Price is required')
    },
    { name: 'image',  
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required().error('Image is required')
    },
    { name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule) => Rule.required().error('Category is required')
    }
      
  ]
}
