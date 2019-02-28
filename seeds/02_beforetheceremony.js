exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('beforetheceremony')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('beforetheceremony').insert([{
          id: 1,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Before-Ceremony/1.jpg'
        },
        {
          id: 2,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Before-Ceremony/2.jpg'
        },
        {
          id: 3,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Before-Ceremony/3.jpg'
        },
        {
          id: 4,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Before-Ceremony/4.jpg'
        },
        {
          id: 5,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Before-Ceremony/5.jpg'
        },
        {
          id: 6,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Before-Ceremony/6.jpg'
        },
        {
          id: 7,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Before-Ceremony/7.jpg'
        },
        {
          id: 8,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Before-Ceremony/8.jpg'
        },
        {
          id: 9,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Before-Ceremony/9.jpg'
        },
        {
          id: 10,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Before-Ceremony/10.jpg'
        },
        {
          id: 11,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Before-Ceremony/11.jpg'
        },
        {
          id: 12,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Before-Ceremony/12.jpg'
        },
        {
          id: 13,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Before-Ceremony/13.jpg'
        },
        {
          id: 14,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Before-Ceremony/14.jpg'
        },
        {
          id: 15,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Before-Ceremony/15.jpg'
        },
        {
          id: 16,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Before-Ceremony/16.jpg'
        },
        {
          id: 17,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Before-Ceremony/17.jpg'
        },
        {
          id: 18,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Before-Ceremony/18.jpg'
        },
        {
          id: 19,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Before-Ceremony/19.jpg'
        },
        {
          id: 20,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Before-Ceremony/20.jpg'
        },
        {
          id: 21,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Before-Ceremony/21.jpg'
        },
        {
          id: 22,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Before-Ceremony/22.jpg'
        },
        {
          id: 23,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Before-Ceremony/23.jpg'
        },
        {
          id: 24,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Before-Ceremony/24.jpg'
        },
        {
          id: 25,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Before-Ceremony/25.jpg'
        }
      ])
    })
}