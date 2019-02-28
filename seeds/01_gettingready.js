exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('gettingready').del()
    .then(function () {
      // Inserts seed entries
      return knex('gettingready').insert([{
          id: 1,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/1.jpg'
        },
        {
          id: 2,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/2.jpg'
        },
        {
          id: 3,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/3.jpg'
        },
        {
          id: 4,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/4.jpg'
        },
        {
          id: 5,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/5.jpg'
        },
        {
          id: 6,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/6.jpg'
        },
        {
          id: 7,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/7.jpg'
        },
        {
          id: 8,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/8.jpg'
        },
        {
          id: 9,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/9.jpg'
        },
        {
          id: 10,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/10.jpg'
        },
        {
          id: 11,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/11.jpg'
        },
        {
          id: 12,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/12.jpg'
        },
        {
          id: 13,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/13.jpg'
        },
        {
          id: 14,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/14.jpg'
        },
        {
          id: 15,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/15.jpg'
        },
        {
          id: 16,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/16.jpg'
        },
        {
          id: 17,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/17.jpg'
        },
        {
          id: 18,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/18.jpg'
        },
        {
          id: 19,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/19.jpg'
        },
        {
          id: 20,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/20.jpg'
        },
        {
          id: 21,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/21.jpg'
        },
        {
          id: 22,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/22.jpg'
        },
        {
          id: 23,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/23.jpg'
        },
        {
          id: 24,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/24.jpg'
        },
        {
          id: 25,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/25.jpg'
        },
        {
          id: 26,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/26.jpg'
        },
        {
          id: 27,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/27.jpg'
        },
        {
          id: 28,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/28.jpg'
        },
        {
          id: 29,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/29.jpg'
        },
        {
          id: 30,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/30.jpg'
        },
        {
          id: 31,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/31.jpg'
        },
        {
          id: 32,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/32.jpg'
        },
        {
          id: 33,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/33.jpg'
        },
        {
          id: 34,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/34.jpg'
        },
        {
          id: 35,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/35.jpg'
        },
        {
          id: 36,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/36.jpg'
        },
        {
          id: 37,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/37.jpg'
        },
        {
          id: 38,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/38.jpg'
        },
        {
          id: 39,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/39.jpg'
        },
        {
          id: 40,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/40.jpg'
        },
        {
          id: 41,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/41.jpg'
        },
        {
          id: 42,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/42.jpg'
        },
        {
          id: 43,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/43.jpg'
        },
        {
          id: 44,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/44.jpg'
        },
        {
          id: 45,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/45.jpg'
        },
        {
          id: 46,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/46.jpg'
        },
        {
          id: 47,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/47.jpg'
        },
        {
          id: 48,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Getting-Ready/48.jpg'
        }
      ]);
    });
};