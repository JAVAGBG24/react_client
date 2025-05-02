# Install

## Finns redan installerat, vi behöver köra npm install

npm install react-router-dom axios react-cookie js-cookie

# Routes

src/
├── api/ # API service
├── components/ # Components
├── contexts/ # Context providers
├── hooks/ # Custom hooks
├── pages/ # Page components
├── utils/ # Utility functions
└── App.jsx # Main

# Backend config

spring.application.name=security
spring.data.mongodb.auto-index-creation=true
spring.data.mongodb.host=localhost
spring.data.mongodb.port=27017
spring.data.mongodb.database=auth

jwt.secret=hfaiehfisehfosndfejndfeswljrfeowfnjehwbewios4ngvhtrwglp4rkledf
jwt.expirationMs=36000000

# Fonts

```css
font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-style: normal;

font-family: "Anton SC", sans-serif;
font-style: normal;
```

# .env.local

VITE_API_URL=http://localhost:8080

# JSON data

```json
[
  {
    "name": "Silver Ribbed Off-Shoulder Dress",
    "price": 89.99,
    "image": "https://media-hosting.imagekit.io/abf799f7c15846ce/ovayo-ntlabati-f_WTk4JqwiM-unsplash.jpg?Expires=1840039041&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vcmGqxDOLihqnUan12FP~hwBq~RLscLF0hRyHuvekxc-zPJ2OS5A003Y02XFgC6~-ynwDw0JvOsmKBlFuw0YEOyh8n46AalztZDv-H2unP~D2Yi0xUZf7JsMCw34aND8Y5WA18H~dCVGnCOOznJpN9S8hZIm4fmg23pxUPQzh4LkcRRAiMc~AjRZ5M4SNAONS0ksFfbLviOXkbZ9SWwEZ2egtDX243BZy6JX9Bkaadg2gH6Ck5sDoVBkJ1Ct6eta~rcxSHTU0JCYl35wmrLyko7uWY9juDM-~rg1KBCMLJLxkLk4QUGv7uNzW1BFX4WDI1E7NQX8KM9pvU5lkEEbdA__",
    "description": "Elegant silver ribbed form-fitting dress featuring an off-shoulder design, long sleeves, and a sophisticated silhouette. Perfect for special occasions or formal events. The shimmering fabric adds a touch of glamour while maintaining a modern urban aesthetic."
  },
  {
    "name": "Black Leather Lace-Up Set",
    "price": 129.99,
    "image": "https://media-hosting.imagekit.io/f7cc86e167a345c7/dom-hill-JqZlSnI2ctA-unsplash.jpg?Expires=1840038987&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=g2dKI8RziZm00pUfNNsMUjjL1rqapJKMhBE0UtXHfPccAYkfh3OgFrt2Tl29qPW2aO-a3NoSzGS6Ee7Cq7SODGYwxobu7RXgZYJLUXIXjZmyxT8ZvVN7YEVRqKCof4B5Z~pbmX8xN7X5B5lgfXFXclUtRMICZwM4kH-3OPXbznx~8YAuPutzfH5zFfK0sQRP4fJfu8YYL74MG4OKLgvGFgWqhnSq1929kkObI8AzkYCtjTdmAYIvvs5aINJyemtGF5cWlu~wCARL43UNGEnOX1zEhUEgnGei06sXq9DCJ3R71uT6zMUOOA1VLunhkHUhrz-4ZiY4WqPibJLeg~iz-A__",
    "description": "Edgy black leather ensemble featuring lace-up details and fishnet elements. This bold streetwear look includes a black crop top with mesh sleeves and statement leather pants with cutout design. Completed with platform combat boots for the ultimate urban fashion statement."
  },
  {
    "name": "Yellow Cropped Hoodie Sweatsuit",
    "price": 74.95,
    "image": "https://media-hosting.imagekit.io/5ae5210957f74d8f/dom-hill-nimElTcTNyY-unsplash.jpg?Expires=1840043342&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=UlWi3DCtY25H~Y2pER0~FJ~abLhKXeJjR2p6IS2SAql64aFUf4ycAE8su5Y~R~mCK9Urh~5jRbecg0N2UkzT1yKUNxfwyQpnu8V79pBWukVDSB4dmgTPQMWMmH4WkykFSAC0iXzNorrpjPvE3I4oBFWltk6MAGSVee2RPiQmd66S8zh2HmxMh2Cw0RGH~AF76MIPhhs3VR-9FgQjkxI2DdCjgE8198s5O~xw73PMMrEThwwV7LOVSnGedIf0X4ESXIEG1IMtIDrh7wmOZcHBpzTnxGw02gfVS1zRhSO7NEg446Nk~vZGZ~uERH~YyJy3YIuewp07hAIrkYze7zkY-A__",
    "description": "Vibrant yellow two-piece sweatsuit featuring a cropped hoodie and matching jogger sweatpants. This comfortable yet fashionable athleisure set is perfect for casual outings or relaxed weekends. The bright color and clean lines create a striking urban look, paired with white ankle boots for style contrast."
  }
]
```

# UPDATE PRODUCT JSON

```json
[
  {
    "name": "Black Leather Lace-Up Pants",
    "price": 129.99,
    "color": "Black",
    "category": "BOTTOM",
    "inventory": {
      "XS": 3,
      "S": 5,
      "M": 8,
      "L": 4,
      "XL": 2,
      "XXL": 0
    },
    "image": "https://media-hosting.imagekit.io/f7cc86e167a345c7/dom-hill-JqZlSnI2ctA-unsplash.jpg?Expires=1840038987&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=g2dKI8RziZm00pUfNNsMUjjL1rqapJKMhBE0UtXHfPccAYkfh3OgFrt2Tl29qPW2aO-a3NoSzGS6Ee7Cq7SODGYwxobu7RXgZYJLUXIXjZmyxT8ZvVN7YEVRqKCof4B5Z~pbmX8xN7X5B5lgfXFXclUtRMICZwM4kH-3OPXbznx~8YAuPutzfH5zFfK0sQRP4fJfu8YYL74MG4OKLgvGFgWqhnSq1929kkObI8AzkYCtjTdmAYIvvs5aINJyemtGF5cWlu~wCARL43UNGEnOX1zEhUEgnGei06sXq9DCJ3R71uT6zMUOOA1VLunhkHUhrz-4ZiY4WqPibJLeg~iz-A__",
    "description": "Edgy black leather pants with bold lace-up detailing along the sides. Features a high waist and form-fitting silhouette. Pair with our mesh crop top for a complete statement look. Perfect for nights out and making a fashion statement."
  },
  {
    "name": "Yellow Cropped Hoodie Sweatsuit",
    "price": 74.95,
    "color": "Yellow",
    "category": "TOPS",
    "inventory": {
      "XS": 4,
      "S": 7,
      "M": 10,
      "L": 6,
      "XL": 3,
      "XXL": 1
    },
    "image": "https://media-hosting.imagekit.io/5ae5210957f74d8f/dom-hill-nimElTcTNyY-unsplash.jpg?Expires=1840043342&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=UlWi3DCtY25H~Y2pER0~FJ~abLhKXeJjR2p6IS2SAql64aFUf4ycAE8su5Y~R~mCK9Urh~5jRbecg0N2UkzT1yKUNxfwyQpnu8V79pBWukVDSB4dmgTPQMWMmH4WkykFSAC0iXzNorrpjPvE3I4oBFWltk6MAGSVee2RPiQmd66S8zh2HmxMh2Cw0RGH~AF76MIPhhs3VR-9FgQjkxI2DdCjgE8198s5O~xw73PMMrEThwwV7LOVSnGedIf0X4ESXIEG1IMtIDrh7wmOZcHBpzTnxGw02gfVS1zRhSO7NEg446Nk~vZGZ~uERH~YyJy3YIuewp07hAIrkYze7zkY-A__",
    "description": "Vibrant yellow two-piece sweatsuit featuring a cropped hoodie and matching jogger sweatpants. This comfortable yet fashionable athleisure set is perfect for casual outings or relaxed weekends. The bright color and clean lines create a striking urban look."
  },
  {
    "name": "Silver Ribbed Off-Shoulder Dress",
    "price": 89.99,
    "color": "Silver",
    "category": "DRESSES",
    "inventory": {
      "XS": 2,
      "S": 6,
      "M": 9,
      "L": 5,
      "XL": 3,
      "XXL": 0
    },
    "image": "https://media-hosting.imagekit.io/abf799f7c15846ce/ovayo-ntlabati-f_WTk4JqwiM-unsplash.jpg?Expires=1840039041&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vcmGqxDOLihqnUan12FP~hwBq~RLscLF0hRyHuvekxc-zPJ2OS5A003Y02XFgC6~-ynwDw0JvOsmKBlFuw0YEOyh8n46AalztZDv-H2unP~D2Yi0xUZf7JsMCw34aND8Y5WA18H~dCVGnCOOznJpN9S8hZIm4fmg23pxUPQzh4LkcRRAiMc~AjRZ5M4SNAONS0ksFfbLviOXkbZ9SWwEZ2egtDX243BZy6JX9Bkaadg2gH6Ck5sDoVBkJ1Ct6eta~rcxSHTU0JCYl35wmrLyko7uWY9juDM-~rg1KBCMLJLxkLk4QUGv7uNzW1BFX4WDI1E7NQX8KM9pvU5lkEEbdA__",
    "description": "Elegant silver ribbed knit dress with an off-shoulder neckline. This figure-hugging dress features a sophisticated midi length and subtle shimmer throughout the fabric. The perfect blend of comfort and glamour for special occasions or upscale events."
  },
  {
    "name": "Pink Faux Fur Jacket",
    "price": 109.95,
    "color": "Pink",
    "category": "OUTERWEAR",
    "inventory": {
      "XS": 3,
      "S": 7,
      "M": 8,
      "L": 4,
      "XL": 2,
      "XXL": 0
    },
    "image": "https://media-hosting.imagekit.io/4dbc085f192e4281/freepik__a-full-shot-captures-a-black-woman-around-23-years__63570.jpeg?Expires=1840043329&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jDw42jMsd8JZ8JeupUIt3xT9e7pPSatsaKTqKamclnh~Rw5skX-s6GsNbMpTNZnjfCKgwZzZZGuyhBjwfrjW-UZcQcYYhBFMLfngdm~QkNfbfh2ln~1zp2e4LesLtbjTON4YQbhneuFrOPn-w61PuiPdlf9TqUHJgMNCTmblxgtXzUBLK8uxCtiu7~5LPiKgg2~rhXPEcrL7gVdotH83uOkSKdviopvfUGc~f6pb79fpDD1Jxy2ZTHU2lo3~dXRZuNOSLGWQfCFAUtiIvdLgSaA0hKvl5v2fquk24bP~5U1GgTVFm6mwLD2geEXFrR5Y1YCHvei517dBvoCXvZuquQ__",
    "description": "Trendy pink faux fur jacket with a soft plush texture. This stylish outerwear piece features a relaxed silhouette, front closure, and luxurious feel. The perfect statement piece for fashion-forward looks in cooler weather. Pair with white boots and minimal accessories for a complete ensemble."
  },
  {
    "name": "Oversized Black Blazer",
    "price": 119.99,
    "color": "Black",
    "category": "OUTERWEAR",
    "inventory": {
      "XS": 2,
      "S": 5,
      "M": 12,
      "L": 8,
      "XL": 4,
      "XXL": 1
    },
    "image": "https://media-hosting.imagekit.io/a95aa4886fa94313/kevin-laminto-hjAkD8o2rmg-unsplash.jpg?Expires=1840727936&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=r1m7STABZufxT3jM2f8f13R-eihTNF1XDLw9xEBkpoBLIHbi36g6cSX1Wf~DQvm3-e-gdtDtkSH8EdSLZHHyOm2V1m43ThmiC5tDGwRU16ipR1dTsqlua0itv4k08zOsF~5F2khfGPLNGgjJufOTKpb8Jpu03BtQxFXBW7ZiWfemjy2inEQPrlHOvlthN-3RXeo17XMlOBvxr-42lMihmAphya-mdguNJAF~PsVd3z4YOflUhE-WEyp-5U0Q85DaYSegbQOO3J7RyDu3Fq8VMgoVzTQBqLvmMlnhmE9NY4A1H2lSI1wwXn0BWdAWrdlAVlNk5~bfQ9DOVZoy4JMamw__",
    "description": "Classic oversized black blazer with structured shoulders and single-button closure. This versatile piece can be styled for both formal and casual occasions. The relaxed fit offers a modern silhouette while maintaining a timeless appeal. Perfect for creating effortlessly chic looks."
  },
  {
    "name": "Black Leather Oversized Jacket",
    "price": 149.99,
    "color": "Black",
    "category": "OUTERWEAR",
    "inventory": {
      "XS": 3,
      "S": 6,
      "M": 11,
      "L": 7,
      "XL": 4,
      "XXL": 2
    },
    "image": "https://media-hosting.imagekit.io/1b9e2c3adfb04eb3/ali-pazani-fCe-52iIZIM-unsplash.jpg?Expires=1840727936&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=G8UbWE8Kn3K3c9L9fNMd~74scytXpygdIsfuU8vcw9HBGSxVkg1dMFgMyxiXegMP37kC~OLxKyE8dTQM4VtAA95Q~~TN73lptfU1FVt-H4uWG5cdodznMJlJqineGM3WnQqFgLAXuVkdo-YswX7lX8St5eVcmGU7mlxxqoamyD8X-2VRz2mITdieTka3j6ns34Cz-s-oXLapvPJmOt0ZEu51jL2jSwHbLweVk1oK5gRdl7qR9Uharun~dFI7OVv03IA897tS1eNCqwLMtGwshbfzzJPreel1Iow-nW5UKZHQ42Mn0rYZlv0lc1Bk1~SZaYSU~QSkcP8Wqvh439jKFw__",
    "description": "Sleek black leather oversized jacket with voluminous sleeves and button details. This contemporary piece combines high fashion with street style, featuring a minimalist design and premium faux leather. Perfect for elevating any outfit with its bold silhouette and luxurious texture."
  },
  {
    "name": "Black Mesh Crop Top",
    "price": 34.99,
    "color": "Black",
    "category": "TOPS",
    "inventory": {
      "XS": 5,
      "S": 8,
      "M": 12,
      "L": 6,
      "XL": 4,
      "XXL": 2
    },
    "image": "https://media-hosting.imagekit.io/7e8e7a79f2224af4/freepik__a-lowangle-full-shot-captures-a-mixed-race-woman-a__63574.jpeg?Expires=1840727936&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=hEQtFv-Zuz3wqKOzMhwW1ea-H0GawT6LEm65h7X9JX5R6vy7cJfSwttpTvkMwSis~mnMxdQbkA4WjLFObvSfsWPK4ygMekArm87A7XI3Hb1Vd-WQtFIrJwwOvw97Jc2emuKxYfA6sTyH7hmBDsy4M6vvJg3I2bmv3nz2Bc1ygiTf1VdDE7s~pkfsv4DU1H3jUUBX3f8Xr25KtCA-d1hJYfV6fu5wCaxRZ9UBUcta1-VyLQVi2lfDnR6bS9QpVNAnXjXUVzp6ZAMCOrCJd775Vpqr1D9YhRpP2cXa83ib1dqhttB8B4MS24Ix-o053P9-dd5l7gan2ng~sHzu~4yT6A__",
    "description": "Stylish black mesh crop top with sheer detail and casual fit. This versatile piece features short sleeves and a modern silhouette that pairs perfectly with high-waisted bottoms. The semi-transparent design adds an edgy touch to any outfit while maintaining a comfortable, breathable feel."
  }
]
```
