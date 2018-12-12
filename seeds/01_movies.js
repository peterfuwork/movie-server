
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        { 
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
          name: "Inside Out",
          desc : "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
          type: "Animation",
          image: "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
          director: "Pete Docter",
          year: 2015,
          stars: 4,
          length_min: 95,
          MPAA: "PG"
        },
        {
          name: "Fifty Shades of Grey",
          desc : "Literature student Anastasia Steele's life changes forever when she meets handsome, yet tormented, billionaire Christian Grey.",
          type: "Drama",
          image: "https://m.media-amazon.com/images/M/MV5BMjE1MTM4NDAzOF5BMl5BanBnXkFtZTgwNTMwNjI0MzE@._V1_SY1000_CR0,0,631,1000_AL_.jpg",
          director: "Sam Taylor-Johnson",
          year: 2015,
          stars: 3.5,
          length_min: 125,
          MPAA: "R"
        },
        {
          name: "Batman Begins",
          desc : "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
          type: "Action",
          image: "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_SX750_AL_.jpg",
          director: "Christopher Nolan",
          year: 2005,
          stars: 4,
          length_min: 140,
          MPAA: "PG-13"
        },
        {
          name: "The Hunger Games",
          desc: "Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death.",
          type: "Sci-Fi",
          image: "https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
          director: "Gary Ross",
          year: 2012,
          stars: 3.5,
          length_min: 202,
          MPAA: "PG-13"
        },
        {
          name: "Mission: Impossible - Fallout",
          desc : "Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.",
          type: "Action",
          image: "https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_SY1000_CR0,0,639,1000_AL_.jpg",
          director: "Christopher McQuarrie",
          year: 2018,
          stars: 4,
          length_min: 147,
          MPAA: "PG-13"
        },
        {
          name: "Crazy Rich Asians",
          desc : "This contemporary romantic comedy, based on a global bestseller, follows native New Yorker Rachel Chu to Singapore to meet her boyfriend's family.",
          type: "Comedy",
          image: "https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
          director: "Jon M. Chu",
          year: 2018,
          stars: 3.5,
          length_min: 120,
          MPAA: "PG-13"
        },
        {
          name: "Fury",
          desc : "A grizzled tank commander makes tough decisions as he and his crew fight their way across Germany in April, 1945.",
          type: "War",
          image: "https://m.media-amazon.com/images/M/MV5BMjA4MDU0NTUyN15BMl5BanBnXkFtZTgwMzQxMzY4MjE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
          director: "David Ayer",
          year: 2014,
          stars: 4,
          length_min: 132,
          MPAA: "R"
        },
        {
          name: "Transformers: The Last Knight",
          desc : "Autobots and Decepticons are at war, with humans on the sidelines. Optimus Prime is gone. The key to saving our future lies buried in the secrets of the past, in the hidden history of Transformers on Earth.",
          type: "Action",
          image: "https://m.media-amazon.com/images/M/MV5BMTk3OTI3MDk4N15BMl5BanBnXkFtZTgwNDg2ODIyMjI@._V1_.jpg",
          director: "Michael Bay",
          year: 2017,
          stars: 5,
          length_min: 154,
          MPAA: "PG-13"
        },
        {
          name: "Captain America: Civil War",
          desc : "Political involvement in the Avengers' activities causes a rift between Captain America and Iron Man.",
          type: "Action",
          image: "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
          director: "Anthony Russo",
          year: 2016,
          stars: 3.5,
          length_min: 147,
          MPAA: "PG-13"
        },
        {
          name: "Spirited Away",
          desc : "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
          type: "Animation",
          image: "https://m.media-amazon.com/images/M/MV5BOGJjNzZmMmUtMjljNC00ZjU5LWJiODQtZmEzZTU0MjBlNzgxL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
          director: "Hayao Miyazaki",
          year: 2001,
          stars: 4,
          length_min: 125,
          MPAA: "PG"
        },
        {
          name: "Finding Dory",
          desc : "The friendly but forgetful blue tang fish, Dory, begins a search for her long-lost parents, and everyone learns a few things about the real meaning of family along the way.",
          type: "Animation",
          image: "https://m.media-amazon.com/images/M/MV5BNzg4MjM2NDQ4MV5BMl5BanBnXkFtZTgwMzk3MTgyODE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
          director: "Andrew Stanton",
          year: 2016,
          stars: 3,
          length_min: 97,
          MPAA: "PG"
        },
        {
          name: "Christmas Harmony",
          desc : "Kelley Jakle stars as young woman who returns to her small hometown to rediscover music, family bonds, and the magic of the Christmas season.",
          type: "Comedy",
          image: "https://m.media-amazon.com/images/M/MV5BMTkwNTQ4NTUtOTBlYi00ZGEwLWJkMTYtM2NlMzVlNGQ3N2FmXkEyXkFqcGdeQXVyOTA5MjY3ODM@._V1_SY1000_CR0,0,715,1000_AL_.jpg",
          director: "Nanea Miyata",
          year: 2018,
          stars: 2.5,
          length_min: 85,
          MPAA: "TV-PG"
        },
        {
          name: "Harry Potter and the Sorcerer's Stone",
          desc : "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
          type: "Adventure",
          image: "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
          director: "Chris Columbus",
          year: 2001,
          stars: 3.5,
          length_min: 152,
          MPAA: "PG"
        },
        {
          name: "Mary Queen of Scots",
          desc: "Mary Stuart's attempt to overthrow her cousin Elizabeth I, Queen of England, finds her condemned to years of imprisonment before facing execution.",
          type: "Biography",
          image: "https://m.media-amazon.com/images/M/MV5BNDVmOGI4MTMtYmNmNC00MTliLTlkYjQtYmU2N2EyNDk2YTAwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SY1000_SX675_AL_.jpg",
          director: "Josie Rourke",
          year: 2018,
          stars: 1.5,
          length_min: 124,
          MPAA: "R"
        }
      ]);
    });
};
