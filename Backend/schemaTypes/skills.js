// export default{
//     name:'skills',
//     title:'Skills',
//     type: 'document',
//     fields:[
//         {
//             name:'name',
//             title:'Name',
//             type:'string'
//         },
//         {
//             name:'bgColor',
//             title:'BgColor',
//             type:'string'
//         },
//         {
//             name:'icon',
//             title:'Icon',
//             type: 'image',
//             options: {
//               hotspot: true,
//             },
//         },

//     ]
// }
export default {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'bgColor',
            title: 'BgColor',
            type: 'string'
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Languages', value: 'languages' },
                    { title: 'Web Developer Skills', value: 'webdev' },
                    { title: 'Web Developer Tools', value: 'devTools' },
                ],
                layout: 'radio', 
            },
        },
    ]
}
