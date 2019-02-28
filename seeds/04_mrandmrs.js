exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('mrandmrs')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('mrandmrs').insert([{
          id: 1,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/1.jpg'
        },
        {
          id: 2,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/2.jpg'
        },
        {
          id: 3,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/3.jpg'
        },
        {
          id: 4,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/4.jpg'
        },
        {
          id: 5,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/5.jpg'
        },
        {
          id: 6,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/6.jpg'
        },
        {
          id: 7,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/7.jpg'
        },
        {
          id: 8,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/8.jpg'
        },
        {
          id: 9,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/9.jpg'
        },
        {
          id: 10,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/10.jpg'
        },
        {
          id: 11,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/11.jpg'
        },
        {
          id: 12,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/12.jpg'
        },
        {
          id: 13,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/13.jpg'
        },
        {
          id: 14,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/14.jpg'
        },
        {
          id: 15,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/15.jpg'
        },
        {
          id: 16,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/16.jpg'
        },
        {
          id: 17,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/17.jpg'
        },
        {
          id: 18,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/18.jpg'
        },
        {
          id: 19,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/19.jpg'
        },
        {
          id: 20,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/20.jpg'
        },
        {
          id: 21,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/21.jpg'
        },
        {
          id: 22,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/22.jpg'
        },
        {
          id: 23,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/23.jpg'
        },
        {
          id: 24,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/24.jpg'
        },
        {
          id: 25,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/25.jpg'
        },
        {
          id: 26,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/26.jpg'
        },
        {
          id: 27,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/27.jpg'
        },
        {
          id: 28,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/28.jpg'
        },
        {
          id: 29,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/29.jpg'
        },
        {
          id: 30,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/30.jpg'
        },
        {
          id: 31,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/31.jpg'
        },
        {
          id: 32,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/32.jpg'
        },
        {
          id: 33,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/33.jpg'
        },
        {
          id: 34,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/34.jpg'
        },
        {
          id: 35,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/35.jpg'
        },
        {
          id: 36,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/36.jpg'
        },
        {
          id: 37,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/37.jpg'
        },
        {
          id: 38,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/38.jpg'
        },
        {
          id: 39,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/39.jpg'
        },
        {
          id: 40,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/40.jpg'
        },
        {
          id: 41,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/41.jpg'
        },
        {
          id: 42,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/42.jpg'
        },
        {
          id: 43,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/43.jpg'
        },
        {
          id: 44,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Mr-Mrs/44.jpg'
        }
      ])
    })
}