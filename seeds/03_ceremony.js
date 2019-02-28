exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ceremony')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('ceremony').insert([{
          id: 1,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/1.jpg'
        },
        {
          id: 2,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/2.jpg'
        },
        {
          id: 3,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/3.jpg'
        },
        {
          id: 4,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/4.jpg'
        },
        {
          id: 5,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/5.jpg'
        },
        {
          id: 6,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/6.jpg'
        },
        {
          id: 7,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/7.jpg'
        },
        {
          id: 8,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/8.jpg'
        },
        {
          id: 9,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/9.jpg'
        },
        {
          id: 10,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/10.jpg'
        },
        {
          id: 11,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/11.jpg'
        },
        {
          id: 12,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/12.jpg'
        },
        {
          id: 13,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/13.jpg'
        },
        {
          id: 14,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/14.jpg'
        },
        {
          id: 15,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/15.jpg'
        },
        {
          id: 16,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/16.jpg'
        },
        {
          id: 17,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/17.jpg'
        },
        {
          id: 18,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/18.jpg'
        },
        {
          id: 19,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/19.jpg'
        },
        {
          id: 20,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/20.jpg'
        },
        {
          id: 21,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/21.jpg'
        },
        {
          id: 22,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/22.jpg'
        },
        {
          id: 23,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/23.jpg'
        },
        {
          id: 24,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/24.jpg'
        },
        {
          id: 25,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/25.jpg'
        },
        {
          id: 26,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/26.jpg'
        },
        {
          id: 27,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/27.jpg'
        },
        {
          id: 28,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/28.jpg'
        },
        {
          id: 29,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/29.jpg'
        },
        {
          id: 30,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/30.jpg'
        },
        {
          id: 31,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/31.jpg'
        },
        {
          id: 32,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/32.jpg'
        },
        {
          id: 33,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/33.jpg'
        },
        {
          id: 34,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/34.jpg'
        },
        {
          id: 35,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/35.jpg'
        },
        {
          id: 36,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/36.jpg'
        },
        {
          id: 37,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/37.jpg'
        },
        {
          id: 38,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/38.jpg'
        },
        {
          id: 39,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/39.jpg'
        },
        {
          id: 40,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/40.jpg'
        },
        {
          id: 41,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/41.jpg'
        },
        {
          id: 42,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/42.jpg'
        },
        {
          id: 43,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/43.jpg'
        },
        {
          id: 44,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/44.jpg'
        },
        {
          id: 45,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/45.jpg'
        },
        {
          id: 46,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/46.jpg'
        },
        {
          id: 47,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/47.jpg'
        },
        {
          id: 48,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/48.jpg'
        },
        {
          id: 49,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/49.jpg'
        },
        {
          id: 50,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/50.jpg'
        },
        {
          id: 51,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/51.jpg'
        },
        {
          id: 52,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/52.jpg'
        },
        {
          id: 53,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/53.jpg'
        },
        {
          id: 54,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/54.jpg'
        },
        {
          id: 55,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/55.jpg'
        },
        {
          id: 56,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/56.jpg'
        },
        {
          id: 57,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/57.jpg'
        },
        {
          id: 58,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/58.jpg'
        },
        {
          id: 59,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/59.jpg'
        },
        {
          id: 60,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/60.jpg'
        },
        {
          id: 61,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/61.jpg'
        },
        {
          id: 62,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/62.jpg'
        },
        {
          id: 63,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/63.jpg'
        },
        {
          id: 64,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/64.jpg'
        },
        {
          id: 65,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/65.jpg'
        },
        {
          id: 66,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/66.jpg'
        },
        {
          id: 67,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/67.jpg'
        },
        {
          id: 68,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/68.jpg'
        },
        {
          id: 69,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/69.jpg'
        },
        {
          id: 70,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/70.jpg'
        },
        {
          id: 71,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/71.jpg'
        },
        {
          id: 72,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/72.jpg'
        },
        {
          id: 73,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/73.jpg'
        },
        {
          id: 74,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/74.jpg'
        },
        {
          id: 75,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/75.jpg'
        },
        {
          id: 76,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/76.jpg'
        },
        {
          id: 77,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/77.jpg'
        },
        {
          id: 78,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/78.jpg'
        },
        {
          id: 79,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/79.jpg'
        },
        {
          id: 80,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/80.jpg'
        },
        {
          id: 81,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/81.jpg'
        },
        {
          id: 82,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/82.jpg'
        },
        {
          id: 83,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/83.jpg'
        },
        {
          id: 84,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/84.jpg'
        },
        {
          id: 85,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/85.jpg'
        },
        {
          id: 86,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/86.jpg'
        },
        {
          id: 87,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/87.jpg'
        },
        {
          id: 88,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/88.jpg'
        },
        {
          id: 89,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/89.jpg'
        },
        {
          id: 90,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/90.jpg'
        },
        {
          id: 91,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/91.jpg'
        },
        {
          id: 92,
          image_url: 'https://s3.us-east-2.amazonaws.com/two-less-fishes-in-the-sea/Ceremony/92.jpg'
        }
      ])
    })
}