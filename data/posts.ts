const posts = [
  {
    id: "p1",
    user: {
      id: "u1",
      username: "@deneme",
      name: "deneme",
      image:
        "https://instagram.fada1-14.fna.fbcdn.net/v/t51.2885-19/302715394_590710095862488_8705732755495836892_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fada1-14.fna.fbcdn.net&_nc_cat=100&_nc_ohc=j2fW7PUZHzwAX_cBg7H&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDGDPnaIkYNew1IXIf74t-ZltQxOB36Uq4TZT9XRo_Vyw&oe=636E8ADC&_nc_sid=1527a3",
    },
    createdAt: "2022-07-07T12:00:00.000Z",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.LALALALALALALALLAALAL LALALALALALALLALALA İYİ BAYRAMLAR TM",
    numberOfComments: 3,
    numberOfLikes: 7,
    numberOfUnlikes: 1,
  },
  {
    id: "p2",
    user: {
      id: "u1",
      username: "@yusufipsum",
      name: "Yusuf",
      image:
        "https://instagram.fada1-14.fna.fbcdn.net/v/t51.2885-19/302715394_590710095862488_8705732755495836892_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fada1-14.fna.fbcdn.net&_nc_cat=100&_nc_ohc=j2fW7PUZHzwAX_cBg7H&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDGDPnaIkYNew1IXIf74t-ZltQxOB36Uq4TZT9XRo_Vyw&oe=636E8ADC&_nc_sid=1527a3",
    },
    createdAt: "2022-07-07T12:00:00.000Z",
    content:
      "I'm trying to create a Bluetooth-based social media infrastructure.",
    image:
      "https://i2.milimaj.com/i/milliyet/75/0x0/61763db045d2a03848762a76.jpg",
    numberOfComments: 42,
    numberOfLikes: 27,
    numberOfUnlikes: 3,
  },
  {
    id: "p3",
    user: {
      id: "u3",
      username: "@hello",
      name: "Hello",
      image:
        "https://instagram.fada1-14.fna.fbcdn.net/v/t51.2885-19/292164509_1071308726794776_5465116345670360624_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fada1-14.fna.fbcdn.net&_nc_cat=100&_nc_ohc=Relohv0_-GoAX-thylD&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfB6YJKUVyBnmGDa4r_3Q5dcjG3mQ0KEQk4gkPOl6CvB1A&oe=636F96A8&_nc_sid=1527a3",
    },
    createdAt: "2022-07-07T12:00:00.000Z",
    content: "I'm developing a new application. Join me in this project!",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/screen-shot-2019-05-24-at-10-37-14-am-1558708961.png?crop=1.00xw:0.653xh;0,0.0647xh&resize=640:*",
    numberOfComments: 7,
    numberOfLikes: 24,
    numberOfUnlikes: 2,
  },
  {
    id: "p4",
    user: {
      id: "u4",
      username: "@gossipcats",
      name: "GossipCats",
      image:
        "https://instagram.fada1-14.fna.fbcdn.net/v/t51.2885-19/292164509_1071308726794776_5465116345670360624_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fada1-14.fna.fbcdn.net&_nc_cat=100&_nc_ohc=Relohv0_-GoAX-thylD&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfB6YJKUVyBnmGDa4r_3Q5dcjG3mQ0KEQk4gkPOl6CvB1A&oe=636F96A8&_nc_sid=1527a3",
    },
    createdAt: "2022-07-07T12:00:00.000Z",
    content: "Hello it's me",
    image:
      "https://i4.hurimg.com/i/hurriyet/75/866x494/5efd782445d2a04ed8f62cb8.jpg",
    numberOfComments: 13,
    numberOfLikes: 37,
    numberOfUnlikes: "",
  },
];

export default posts;
