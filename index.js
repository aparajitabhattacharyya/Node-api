import express from "express";
import bodyParser from 'body-parser';

const server = express();
const PORT = 5000;
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

const products =
    [
        {
            id: 1,
            name: "Jumpsuit",
            description: "A very stylish Leopard Printed Jumpsuit",
            ratingCount: 5,
            discountedPrice: 3000,
            price: 5000,

            imageURL: ("add"),
            reviews:
                [{
                    rating: 5,
                    comment: "Best Product Ever",
                }]

        }
        ,
        {
            id: 2,
            name: "Anarkali suit",
            description: "The best Anarkali suit for you this Puja!",
            ratingCount: 5,
            discountedPrice: 10000,
            price: 6000,

            imageURL: ("add"),
            reviews:
                [{
                    rating: 5,
                    comment: "Best Product Ever",
                }]

        }
        ,
        {
            id: 3,
            name: "Men's T-Shirt",
            description: "Best Cotton T-Shirt for the men to wear!",
            ratingCount: 4,
            discountedPrice: 5000,
            price: 9000,

            imageURL: ("add"),
            reviews:
                [{
                    rating: 5,
                    comment: "Best Product Ever",
                }]

        },
        {
            id: 4,
            name: "Sherwani",
            description: "Best Sherwani for Men",
            ratingCount: 5,
            discountedPrice: 9000,
            price: 15000,

            imageURL: ("add"),
            reviews:
                [{
                    rating: 5,
                    comment: "Best Product Ever",
                }]

        },
        {
            id: 5,
            name: "Men's Kurta",

            description: "Comfy and the best Kurta",
            ratingCount: 4.5,
            discountedPrice: 4000,
            price: 6000,

            imageURL: ("add"),
            reviews:
                [{
                    rating: 3,
                    comment: "Best Product Ever",
                }]

        },

        {
            id: 6,
            name: "Women's Kurti",
            description: "Cotton Kurtis for sale",
            ratingCount: 4,
            discountedPrice: 500,
            price: 1000,

            imageURL: ("add"),
            reviews:
                [{
                    rating: 4.5,
                    comment: "Best Product Ever",
                }]

        }
        ,
        {
            id: 7,
            name: "Salwar",
            description: "Get Ready for the Pujo season with this salwar",
            ratingCount: 5,
            discountedPrice: 20000,
            price: 25000,

            imageURL: ("add"),
            reviews:
                [{
                    rating: 5,
                    comment: "Best Product Ever",
                }]

        }
        ,
        {
            id: 8,
            name: "Women's T-shirt",
            description: "Comfy T-Shirts for women",
            ratingCount: 3.5,
            discountedPrice: 500,
            price: 600,

            imageURL: ("add"),
            reviews:
                [{
                    rating: 3,
                    comment: "Best Product Ever",
                }]

        }
        ,
        {
            id: 9,
            name: "T-Shirts for boys",
            description: "Kid's T-Shirt for boys aged 4- 10",
            ratingCount: 2,
            discountedPrice: 300,
            price: 900,

            imageURL: ("add"),
            reviews:
                [{
                    rating: 5,
                    comment: "Best Product Ever",
                }]

        }
        ,
        {
            id: 10,
            name: "Gowns for girls",
            description: "Best gowns for party wear for children aged 5-11",
            ratingCount: 4,
            discountedPrice: 1000,
            price: 1500,

            imageURL: "add",
            reviews:
                [{
                    rating: 5,
                    comment: "Best Product Ever",
                }]

        }

    ]

server.get('/', (req, res) => {
    res.send('Hello World - Home');
})
server.get('/about', (req, res) => {
    res.send('Hello World - About');
})
//Query Param
server.get('/products', (req, res) => {
    const query = req.query.s;
    let result = null;

    if (search) {
        result = products.filter((pd) => { return pd.name.toLowerCase().startsWith(search.toLowerCase()) })
    } else {
        result = products;
    }
    res.send(result);
    res.send(query);
})
//Param
server.get('/products/:id', (req, res) => {
    const productID = req.params.id;

    let products = products.find((st) => { return pd.id == productId });
    if (!products) {
        res.status(404).send({ message: 'Product Not Found!' });
    } else {
        res.send(products);
    }

    res.send(params);
})
server.post('/products', (req, res) => {
    const products = req.body;
    const lastId = products[products.length - 1].id;
    products.id = lastId + 1;
    v.push(products);
    res.send({ message: 'New product information saved!' });
})



server.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
})

