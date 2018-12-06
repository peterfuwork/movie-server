
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        { 
          m_id: "MkwrisHGRA",
          name: "Pirates of the Caribbean: The Curse of the Black Pearl",
          desc : "Blacksmith Will Turner teams up with eccentric pirate \"Captain\" Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.",
          type: "Action",
          image: "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
          director: "Gore Verbinski",
          year: 2003,
          stars: 4,
          length_min: 143,
          MPAA: "PG-13"
        },
        {
          m_id: "9n1FttK7MQ",
          name: "Inside Out",
          desc : "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
          type: "Animation",
          image: "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
          director: "Pete Docter",
          year: 2015,
          stars: 4,
          length_min: 95,
          MPAA: "PG"
        }
      ]);
    });
};
