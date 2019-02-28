exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('reception').del()
    .then(function () {
      // Inserts seed entries
      return knex('reception').insert([{
          id: 1,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/1.jpg'
        },
        {
          id: 2,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/2.jpg'
        },
        {
          id: 3,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/3.jpg'
        },
        {
          id: 4,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/4.jpg'
        },
        {
          id: 5,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/5.jpg'
        },
        {
          id: 6,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/6.jpg'
        },
        {
          id: 7,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/7.jpg'
        },
        {
          id: 8,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/8.jpg'
        },
        {
          id: 9,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/9.jpg'
        },
        {
          id: 10,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/10.jpg'
        },
        {
          id: 11,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/11.jpg'
        },
        {
          id: 12,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/12.jpg'
        },
        {
          id: 13,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/13.jpg'
        },
        {
          id: 14,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/14.jpg'
        },
        {
          id: 15,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/15.jpg'
        },
        {
          id: 16,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/16.jpg'
        },
        {
          id: 17,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/17.jpg'
        },
        {
          id: 18,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/18.jpg'
        },
        {
          id: 19,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/19.jpg'
        },
        {
          id: 20,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/20.jpg'
        },
        {
          id: 21,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/21.jpg'
        },
        {
          id: 22,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/22.jpg'
        },
        {
          id: 23,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/23.jpg'
        },
        {
          id: 24,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/24.jpg'
        },
        {
          id: 25,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/25.jpg'
        },
        {
          id: 26,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/26.jpg'
        },
        {
          id: 27,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/27.jpg'
        },
        {
          id: 28,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/28.jpg'
        },
        {
          id: 29,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/29.jpg'
        },
        {
          id: 30,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/30.jpg'
        },
        {
          id: 31,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/31.jpg'
        },
        {
          id: 32,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/32.jpg'
        },
        {
          id: 33,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/33.jpg'
        },
        {
          id: 34,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/34.jpg'
        },
        {
          id: 35,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/35.jpg'
        },
        {
          id: 36,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/36.jpg'
        },
        {
          id: 37,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/37.jpg'
        },
        {
          id: 38,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/38.jpg'
        },
        {
          id: 39,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/39.jpg'
        },
        {
          id: 40,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/40.jpg'
        },
        {
          id: 41,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/41.jpg'
        },
        {
          id: 42,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/42.jpg'
        },
        {
          id: 43,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/43.jpg'
        },
        {
          id: 44,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/44.jpg'
        },
        {
          id: 45,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/45.jpg'
        },
        {
          id: 46,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/46.jpg'
        },
        {
          id: 47,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/47.jpg'
        },
        {
          id: 48,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/48.jpg'
        },
        {
          id: 49,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/49.jpg'
        },
        {
          id: 50,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/50.jpg'
        },
        {
          id: 51,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/51.jpg'
        },
        {
          id: 52,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/52.jpg'
        },
        {
          id: 53,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/53.jpg'
        },
        {
          id: 54,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/54.jpg'
        },
        {
          id: 55,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/55.jpg'
        },
        {
          id: 56,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/56.jpg'
        },
        {
          id: 57,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/57.jpg'
        },
        {
          id: 58,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/58.jpg'
        },
        {
          id: 59,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/59.jpg'
        },
        {
          id: 60,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/60.jpg'
        },
        {
          id: 61,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/61.jpg'
        },
        {
          id: 62,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/62.jpg'
        },
        {
          id: 63,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/63.jpg'
        },
        {
          id: 64,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/64.jpg'
        },
        {
          id: 65,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/65.jpg'
        },
        {
          id: 66,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/66.jpg'
        },
        {
          id: 67,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/67.jpg'
        },
        {
          id: 68,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/68.jpg'
        },
        {
          id: 69,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/69.jpg'
        },
        {
          id: 70,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/70.jpg'
        },
        {
          id: 71,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/71.jpg'
        },
        {
          id: 72,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/72.jpg'
        },
        {
          id: 73,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Reception/73.jpg'
        }

      ]);
    });
};