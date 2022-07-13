export default {
    name: 'featured',
    title: 'Featured Menu Categories ',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required().error('Title is required')
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule) => Rule.required().error('Description is required')
        },
        {   
            name: 'address',    
            title: 'Address',   
            type: 'string',

            validation: (Rule) => Rule.required().error('Address is required')
        },
        { name: 'long',

            title: 'Longitude',
            type: 'number',

            validation: (Rule) => Rule.required().error('Longitude is required')
        },
    ]
}