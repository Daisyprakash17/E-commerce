const SHOP_DATA = [
    {
      title: 'Hats',
      items: [
        {
          id: 1,
          name: 'Brown Brim',
          imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
          price: 25,
        },
        {
          id: 2,
          name: 'Blue Beanie',
          imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
          price: 18,
        },
        {
          id: 3,
          name: 'Brown Cowboy',
          imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
          price: 35,
        },
        {
          id: 4,
          name: 'Grey Brim',
          imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
          price: 25,
        },
        {
          id: 5,
          name: 'Green Beanie',
          imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
          price: 18,
        },
        {
          id: 6,
          name: 'Palm Tree Cap',
          imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
          price: 14,
        },
        {
          id: 7,
          name: 'Red Beanie',
          imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
          price: 18,
        },
        {
          id: 8,
          name: 'Wolf Cap',
          imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
          price: 14,
        },
        {
          id: 9,
          name: 'Blue Snapback',
          imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
          price: 16,
        },
        {
          id: 10,
          name: "White leaf",
          imageUrl: "https://images.unsplash.com/photo-1578998987066-88847474960c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGNhcHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          price: 12
        },
        {
          id: 11,
          name: "Black Ground",
          imageUrl: "https://images.unsplash.com/photo-1604532057336-2c4a09f71330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fGNhcHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          price: 13
        },
        {
          id: 12,
          name: "Plain White",
          imageUrl: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fwc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          price: 17
        },
        {
          id: 13,
          name: "Lightning Black",
          imageUrl: "https://images.unsplash.com/photo-1619184324666-a2912be71bad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          price: 11
        },
        {
          id: 14,
          name: "Equality",
          imageUrl: "https://images.unsplash.com/photo-1528994782105-67bd4c2b4be5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNhcHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          price:20
        },
        {
          id: 15,
          name: "Black Simley",
          imageUrl: "https://images.unsplash.com/photo-1606483956061-46a898dce538?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGNhcHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          price: 12
        }
      ],
    },
    {
      title: 'Sneakers',
      items: [
        {
          id: 16,
          name: 'Adidas NMD',
          imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
          price: 220,
        },
        {
          id: 17,
          name: 'Adidas Yeezy',
          imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
          price: 280,
        },
        {
          id: 18,
          name: 'Black Converse',
          imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
          price: 110,
        },
        {
          id: 19,
          name: 'Nike White AirForce',
          imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
          price: 160,
        },
        {
          id: 20,
          name: 'Nike Red High Tops',
          imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
          price: 160,
        },
        {
          id: 21,
          name: 'Nike Brown High Tops',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          price: 160,
        },
        {
          id: 22,
          name: 'Air Jordan Limited',
          imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          price: 190,
        },
        {
          id: 23,
          name: 'Timberlands',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          price: 200,
        },
        {
          id: 24,
          name: "Nike Rainbow",
          imageUrl: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          price: 220
        },
        {
          id: 25,
          name: "NIke Runner",
          imageUrl: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          price: 250
        },
        {
          id: 26,
          name: "Nike Rocket",
          imageUrl: "https://images.unsplash.com/photo-1584735175097-719d848f8449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          price: 240
        },
        {
          id: 27,
          name: "Puma light",
          imageUrl: "https://images.unsplash.com/photo-1604868189265-219ba7bf7ea3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM3fHxzbmVha2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          price: 150
        },
        {
          id: 28,
          name: "White Fila",
          imageUrl: "https://images.unsplash.com/photo-1579446565308-427218a2c60e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU0fHxzbmVha2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          price:220
        },
        {
          id: 29,
          name: "Nike regular",
          imageUrl: "https://images.unsplash.com/photo-1622920883841-5bf72e392d8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjE1fHxzbmVha2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          price: 200
        }
      ],
    },
    {
      title: 'Jackets',
      items: [
        {
          id: 30,
          name: 'Black Jean Shearling',
          imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
          price: 125,
        },
        {
          id: 31,
          name: 'Blue Jean Jacket',
          imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
          price: 90,
        },
        {
          id: 32,
          name: 'Grey Jean Jacket',
          imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
          price: 90,
        },
        {
          id: 33,
          name: 'Brown Shearling',
          imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
          price: 165,
        },
        {
          id: 34,
          name: 'Tan Trench',
          imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          price: 185,
        },
        {
          id: 35,
          name: "Black leather",
          imageUrl: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGphY2tldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          price: 200
        },
        {
          id: 36,
          name: "Denim Blue",
          imageUrl: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGphY2tldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          price: 13
        },
        {
          id: 37,
          name: "Rain Fighter",
          imageUrl: "https://images.unsplash.com/photo-1654719796836-62b889d4598d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc4fHxqYWNrZXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          price: 17
        },
        {
          id: 38,
          name: "Regular Red",
          imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          price: 11
        },
        {
          id: 39,
          name: "Wind cheater",
          imageUrl: "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGphY2tldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          price:20
        },
        {
          id: 40,
          name: "Army Green",
          imageUrl: "https://images.unsplash.com/photo-1594587639781-a68a2796bb90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM5fHxqYWNrZXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          price: 12
        }
      ],
    },
    {
      title: 'Womens',
      items: [
        {
          id: 41,
          name: 'Blue Tanktop',
          imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          price: 25,
        },
        {
          id: 42,
          name: 'Floral Blouse',
          imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
          price: 20,
        },
        {
          id: 43,
          name: 'Floral Dress',
          imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
          price: 80,
        },
        {
          id: 44,
          name: 'Red Dots Dress',
          imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
          price: 80,
        },
        {
          id: 45,
          name: 'Striped Sweater',
          imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          price: 45,
        },
        {
          id: 46,
          name: 'Yellow Track Suit',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          price: 135,
        },
        {
          id: 47,
          name: 'White Blouse',
          imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          price: 20,
        },
        {
          id: 48,
          name: "White triangle",
          imageUrl: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          price: 50
        },
        {
          id: 49,
          name: "Blue denim",
          imageUrl: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          price: 40
        },
        {
          id: 50,
          name: "Plain Tshirt",
          imageUrl: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW5zJTIwd2VhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          price: 75
        },
        {
          id: 51,
          name: "Black Combo",
          imageUrl: "https://images.unsplash.com/photo-1610502778270-c5c6f4c7d575?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM1fHxjbG90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          price: 80
        },
        {
          id: 52,
          name: "Full length",
          imageUrl: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHdvbWVucyUyMHdlYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          price:45
        },
        {
          id: 53,
          name: "Real black",
          imageUrl: "https://images.unsplash.com/photo-1578681994827-a9776963799c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUxfHxjbG90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          price: 65
        }
      ],
    },
    {
      title: 'Mens',
      items: [
        {
          id: 54,
          name: 'Camo Down Vest',
          imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
          price: 325,
        },
        {
          id: 55,
          name: 'Floral T-shirt',
          imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
          price: 20,
        },
        {
          id: 56,
          name: 'Black & White Longsleeve',
          imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
          price: 25,
        },
        {
          id: 57,
          name: 'Pink T-shirt',
          imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
          price: 25,
        },
        {
          id: 58,
          name: 'Jean Long Sleeve',
          imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
          price: 40,
        },
        {
          id: 59,
          name: 'Burgundy T-shirt',
          imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          price: 25,
        },
        {
          id: 60,
          name: "Blue fullsuit",
          imageUrl: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWVucyUyMGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          price: 125
        },
        {
          id: 61,
          name: "White regular",
          imageUrl: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fG1lbnMlMjBjbG90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          price: 35
        },
        {
          id: 62,
          name: "Checked Suit",
          imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbnMlMjBjbG90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          price: 95
        },
        {
          id: 63,
          name: "Black fire",
          imageUrl: "https://images.unsplash.com/photo-1618453292459-53424b66bb6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg1fHxtZW5zJTIwY2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          price: 80
        },
        {
          id: 64,
          name: "Plain White",
          imageUrl: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbnMlMjB0c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          price:20
        },
        {
          id: 65,
          name: "Premium Suit",
          imageUrl: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fG1lbnMlMjB0c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          price: 215
        }
      ],
    },
  ];

  export default SHOP_DATA;