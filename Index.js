import express from 'express';
import cors from 'cors';

const app = express();
app.listen(33000, () => {
  console.log('Connected to backend to port:33000');

});

app.use(cors());
app.use(express.json());

let users = [
  {
    id: 1,
    img: 'https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    lastName: 'Decisa',
    firstName: 'Jazmin',
    email: 'kewez@@gmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
    verified: true,
  },
  {
    id: 2,
    img: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600',
    lastName: 'Trosado',
    firstName: 'Andres',
    email: 'comhuhmit@gmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
    verified: true,
  },
  {
    id: 3,
    img: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600',
    lastName: 'de Hesa',
    firstName: 'Hanna Busado',
    email: 'ujudokon@hottmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
    verified: true,
  },
  {
    id: 4,
    img: 'https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600',
    lastName: 'Nava',
    firstName: 'Nory',
    email: 'tinhavabe@gmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
    verified: true,
  },
  {
    id: 5,
    img: 'https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600',
    lastName: 'Querozo',
    firstName: 'Mathias',
    email: 'gobtagbes@yahoo.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
  },
  {
    id: 6,
    img: 'https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600',
    lastName: 'Tiya',
    firstName: 'Aitor',
    email: 'vulca.eder@mail.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
    verified: true,
  },
  {
    id: 7,
    img: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600',
    lastName: 'Casas',
    firstName: 'Armando',
    email: 'reso.bilic@gmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
  },
  {
    id: 8,
    img: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600',
    lastName: 'Osaurio',
    firstName: 'Dean',
    email: 'codaic@mail.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
    verified: true,
  },
  {
    id: 9,
    img: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600',
    lastName: 'Surero',
    firstName: 'Elba',
    email: 'uzozor@gmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
  },
  {
    id: 10,
    img: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600',
    lastName: 'Tumokito',
    firstName: 'Tesaka',
    email: 'tuhkabapu@gmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
    verified: true,
  },
  {
    id: 11,
    img: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600',
    lastName: 'Delano',
    firstName: 'Dolores',
    email: 'gibo@gmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
    verified: true,
  },
  {
    id: 12,
    img: 'https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600',
    lastName: 'Chufe',
    firstName: 'Helen',
    email: 'tic.harvey@hotmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
  },
  {
    id: 13,
    img: 'https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600',
    lastName: 'Bustos',
    firstName: 'Hemma Amado ',
    email: 'ceuc@gmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
  },
  {
    id: 14,
    img: 'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600',
    lastName: 'Tito',
    firstName: 'Elton',
    email: 'bafuv@hotmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
  },
  {
    id: 15,
    img: 'https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    lastName: 'Cremento',
    firstName: 'Alex',
    email: 'ubo@gmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
  },
  {
    id: 16,
    img: '/userPhoto2.PNG',
    lastName: 'Honda',
    firstName: 'Heidy',
    email: 'ubi@gmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
  },
  {
    id: 17,
    img: '',
    lastName: 'Gina',
    firstName: 'Elba',
    email: 'ita-col@gmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2024',
  },
  {
    id: 18,
    img: 'userPhoto3.png',
    lastName: 'Galindo',
    firstName: 'Monica',
    email: 'uba-ur@gmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2024',
  },
  {
    id: 19,
    img: 'userPhoto4.png',
    lastName: 'Rita',
    firstName: 'Lazo',
    email: 'uba-ar@gmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2024',
  },
  {
    id: 20,
    img: 'userPhoto5.png',
    lastName: 'Gando',
    firstName: 'Veronica',
    email: 'uba-tx@gmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2024',
  },
  {
    id: 21,
    img: 'userPhoto6.png',
    lastName: 'Vergaras',
    firstName: 'Deborah',
    email: 'uba-ven@gmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2024',
  },
  {
    id: 22,
    img: 'userPhoto.PNG',
    lastName: 'Caza',
    firstName: 'Jane Doea',
    email: 'uba-usa@gmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2024',
  },
  {
    id: 23,
    img: 'userPhoto10.png',
    lastName: 'Sones',
    firstName: 'Penelope',
    email: 'uba-usa@gmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2024',
  },
  {
    id: 24,
    img: 'userPhoto9.png',
    lastName: 'Serda',
    firstName: 'Zoila',
    email: 'ubax-usa@gmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2024',
  },
  {
    id: 25,
    img: 'userPhoto11.png',
    lastName: 'Ricoh',
    firstName: 'Alma Maria',
    email: 'ubax-usa@gmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2024',
  },
  {
    id: 26,
    img: 'userPhoto7.png',
    lastName: 'Pito',
    firstName: 'Elsa',
    email: 'ubax-usa@gmail.com',
    phone: '321 456 789',
    createdAt: '01.03.2022',
  },
];

let products = [
  {
    id: 1,
    img: 'https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png',
    title: 'Playstation 5 Digital Edition',
    color: 'white',
    producer: 'Sony',
    price: '$250.99',
    createdAt: '01.02.2023',
    inStock: true,
  },
  {
    id: 2,
    img: 'https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png',
    title: 'Dell Laptop KR211822',
    color: 'black',
    producer: 'Dell',
    price: '$499.99',
    createdAt: '01.02.2023',
    inStock: true,
  },
  {
    id: 3,
    img: 'http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front',
    title: 'Samsung TV 4K SmartTV',
    color: 'gray',
    producer: 'Samsung',
    price: '$999.49',
    createdAt: '01.02.2023',
    inStock: true,
  },
  {
    id: 4,
    img: 'https://raylo.imgix.net/iphone-14-blue.png',
    title: 'Apple Iphone 14 Pro Max',
    color: 'white',
    producer: 'Apple',
    price: '$799.49',
    createdAt: '01.02.2023',
    inStock: true,
  },
  {
    id: 5,
    img: 'https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png',
    title: 'Philips Hue Play Gradient',
    color: 'rainbow',
    producer: 'Philips',
    price: '$39.99',
    createdAt: '01.02.2023',
  },
  {
    id: 6,
    img: 'https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png',
    title: 'Logitech MX Master 3',
    color: 'black',
    producer: 'Logitech',
    price: '$59.49',
    createdAt: '01.02.2023',
    inStock: true,
  },
  {
    id: 7,
    img: 'https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png',
    title: 'Rode Podcast Microphone',
    color: 'gray',
    producer: 'Rode',
    price: '$119.49',
    createdAt: '01.02.2023',
  },
  {
    id: 8,
    img: 'https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png',
    title: 'Toshiba Split AC 2',
    color: 'white',
    producer: 'Toshiba',
    price: '$899.99',
    createdAt: '01.02.2023',
    inStock: true,
  },
  {
    id: 9,
    img: 'https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png',
    title: 'Sony Bravia KDL-47W805A',
    color: 'black',
    producer: 'Sony',
    price: '$970.49',
    createdAt: '01.02.2023',
  },
  {
    id: 10,
    img: 'https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all',
    title: 'Acer Laptop 16 KL-4804',
    color: 'black',
    producer: 'Acer',
    price: '$599.99',
    createdAt: '01.02.2023',
    inStock: true,
  },
];

//GET USERS
app.get('/api/users', (req, res) => {
  res.json(users);
});

//GET USER
app.get('/api/users/:id', (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  res.json(user);
});

//ADD NEW USER
app.post('/api/users', (req, res) => {
  users.unshift(req.body);
  res.json(users);
});

//DELETE USER
app.delete('/api/users/:id', (req, res) => {
  (users = users.filter((user) => user.id !== parseInt(req.params.id))),
    res.json(`User ${params.id} was deleted!`);
});

//************** */
//GET productS
app.get('/api/products', (req, res) => {
  res.json(products);
});

//GET product
app.get('/api/products/:id', (req, res) => {
  const product = products.find(
    (product) => product.id === parseInt(req.params.id)
  );
  res.json(product);
});

//ADD NEW product
app.post('/api/products', (req, res) => {
  products.unshift(req.body);
  res.json(products);
});

//DELETE product
app.delete('/api/products/:id', (req, res) => {
  (products = products.filter(
    (product) => product.id !== parseInt(req.params.id)
  )),
    res.json(`product ${params.id} was deleted!`);
});
