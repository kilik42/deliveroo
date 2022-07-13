export default {
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required')
    },
    {
      name: 'image',
      title: 'image',
      type: 'text',
    },
  ],
}
