import React from 'react'
import SearchPage from './SearchPage'
import ImgCard from './ImgCard'
const ProductListArr = [
    {
        "id": 1,
        "brand": "Campus",
        "name": "Campus Walking Pro 101",
        "price": 7404,
        "discount": 10,
        "sizes": [
            9,
            10,
            11,
            12
        ],
        "rating": 4.1,
        "category": "Walking",
        "description": "High-performance Campus Walking shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Campus+1"
    },
    {
        "id": 2,
        "brand": "Mochi",
        "name": "Mochi Walking Pro 102",
        "price": 4377,
        "discount": 50,
        "sizes": [
            7,
            8,
            9,
            12
        ],
        "rating": 4,
        "category": "Walking",
        "description": "High-performance Mochi Walking shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Mochi+2"
    },
    {
        "id": 3,
        "brand": "Asics",
        "name": "Asics Training Pro 103",
        "price": 3318,
        "discount": 15,
        "sizes": [
            7,
            8,
            9,
            10,
            12
        ],
        "rating": 4.9,
        "category": "Training",
        "description": "High-performance Asics Training shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Asics+3"
    },
    {
        "id": 4,
        "brand": "Jordan",
        "name": "Jordan Walking Pro 104",
        "price": 13329,
        "discount": 15,
        "sizes": [
            7,
            9,
            10,
            11
        ],
        "rating": 4.9,
        "category": "Walking",
        "description": "High-performance Jordan Walking shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Jordan+4"
    },
    {
        "id": 5,
        "brand": "Sparx",
        "name": "Sparx Sneakers Pro 105",
        "price": 12694,
        "discount": 0,
        "sizes": [
            8,
            9,
            10,
            11,
            12
        ],
        "rating": 4.4,
        "category": "Sneakers",
        "description": "High-performance Sparx Sneakers shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Sparx+5"
    },
    {
        "id": 6,
        "brand": "Relaxo",
        "name": "Relaxo Basketball Pro 106",
        "price": 4116,
        "discount": 0,
        "sizes": [
            7,
            8,
            9
        ],
        "rating": 3.6,
        "category": "Basketball",
        "description": "High-performance Relaxo Basketball shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Relaxo+6"
    },
    {
        "id": 7,
        "brand": "Hoka",
        "name": "Hoka Running Pro 107",
        "price": 7347,
        "discount": 15,
        "sizes": [
            9,
            10,
            11,
            12
        ],
        "rating": 3.5,
        "category": "Running",
        "description": "High-performance Hoka Running shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Hoka+7"
    },
    {
        "id": 8,
        "brand": "Hoka",
        "name": "Hoka Basketball Pro 108",
        "price": 16695,
        "discount": 50,
        "sizes": [
            7,
            8,
            9,
            12
        ],
        "rating": 3.7,
        "category": "Basketball",
        "description": "High-performance Hoka Basketball shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Hoka+8"
    },
    {
        "id": 9,
        "brand": "Skechers",
        "name": "Skechers Running Pro 109",
        "price": 2619,
        "discount": 5,
        "sizes": [
            11,
            12
        ],
        "rating": 4.6,
        "category": "Running",
        "description": "High-performance Skechers Running shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Skechers+9"
    },
    {
        "id": 10,
        "brand": "Sparx",
        "name": "Sparx Walking Pro 110",
        "price": 15040,
        "discount": 50,
        "sizes": [
            7,
            10,
            12
        ],
        "rating": 3.8,
        "category": "Walking",
        "description": "High-performance Sparx Walking shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Sparx+10"
    },
    {
        "id": 11,
        "brand": "Asics",
        "name": "Asics Training Pro 111",
        "price": 13678,
        "discount": 5,
        "sizes": [
            7,
            10,
            11,
            12
        ],
        "rating": 3.9,
        "category": "Training",
        "description": "High-performance Asics Training shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Asics+11"
    },
    {
        "id": 12,
        "brand": "Hoka",
        "name": "Hoka Training Pro 112",
        "price": 2040,
        "discount": 10,
        "sizes": [
            8,
            9,
            11,
            12
        ],
        "rating": 4.1,
        "category": "Training",
        "description": "High-performance Hoka Training shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Hoka+12"
    },
    {
        "id": 13,
        "brand": "Mochi",
        "name": "Mochi Lifestyle Pro 113",
        "price": 11205,
        "discount": 5,
        "sizes": [
            8,
            9,
            10
        ],
        "rating": 4.1,
        "category": "Lifestyle",
        "description": "High-performance Mochi Lifestyle shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Mochi+13"
    },
    {
        "id": 14,
        "brand": "Bata",
        "name": "Bata Running Pro 114",
        "price": 5026,
        "discount": 15,
        "sizes": [
            7,
            9,
            10,
            12
        ],
        "rating": 3,
        "category": "Running",
        "description": "High-performance Bata Running shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Bata+14"
    },
    {
        "id": 15,
        "brand": "Campus",
        "name": "Campus Lifestyle Pro 115",
        "price": 12930,
        "discount": 15,
        "sizes": [
            9,
            10,
            12
        ],
        "rating": 4.2,
        "category": "Lifestyle",
        "description": "High-performance Campus Lifestyle shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Campus+15"
    },
    {
        "id": 16,
        "brand": "Skechers",
        "name": "Skechers Walking Pro 116",
        "price": 18559,
        "discount": 10,
        "sizes": [
            8,
            9
        ],
        "rating": 4.8,
        "category": "Walking",
        "description": "High-performance Skechers Walking shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Skechers+16"
    },
    {
        "id": 17,
        "brand": "Skechers",
        "name": "Skechers Sneakers Pro 117",
        "price": 10139,
        "discount": 50,
        "sizes": [
            7,
            10,
            11,
            12
        ],
        "rating": 3.9,
        "category": "Sneakers",
        "description": "High-performance Skechers Sneakers shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Skechers+17"
    },
    {
        "id": 18,
        "brand": "Bata",
        "name": "Bata Training Pro 118",
        "price": 14180,
        "discount": 50,
        "sizes": [
            9,
            10,
            12
        ],
        "rating": 4.7,
        "category": "Training",
        "description": "High-performance Bata Training shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Bata+18"
    },
    {
        "id": 19,
        "brand": "Jordan",
        "name": "Jordan Running Pro 119",
        "price": 12571,
        "discount": 10,
        "sizes": [
            7,
            8,
            9,
            10,
            11
        ],
        "rating": 3.8,
        "category": "Running",
        "description": "High-performance Jordan Running shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Jordan+19"
    },
    {
        "id": 20,
        "brand": "Asics",
        "name": "Asics Lifestyle Pro 120",
        "price": 12914,
        "discount": 5,
        "sizes": [
            9,
            10,
            11,
            12
        ],
        "rating": 3.3,
        "category": "Lifestyle",
        "description": "High-performance Asics Lifestyle shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Asics+20"
    },
    {
        "id": 21,
        "brand": "Sparx",
        "name": "Sparx Sneakers Pro 121",
        "price": 16459,
        "discount": 50,
        "sizes": [
            8,
            9,
            10,
            12
        ],
        "rating": 3.4,
        "category": "Sneakers",
        "description": "High-performance Sparx Sneakers shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Sparx+21"
    },
    {
        "id": 22,
        "brand": "Red Tape",
        "name": "Red Tape Lifestyle Pro 122",
        "price": 10760,
        "discount": 5,
        "sizes": [
            7,
            8,
            10,
            11
        ],
        "rating": 4.6,
        "category": "Lifestyle",
        "description": "High-performance Red Tape Lifestyle shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Red Tape+22"
    },
    {
        "id": 23,
        "brand": "Asics",
        "name": "Asics Running Pro 123",
        "price": 4452,
        "discount": 10,
        "sizes": [
            7,
            8,
            9,
            11
        ],
        "rating": 4.3,
        "category": "Running",
        "description": "High-performance Asics Running shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Asics+23"
    },
    {
        "id": 24,
        "brand": "Sparx",
        "name": "Sparx Walking Pro 124",
        "price": 4048,
        "discount": 20,
        "sizes": [
            7,
            8,
            9,
            10,
            11,
            12
        ],
        "rating": 4.4,
        "category": "Walking",
        "description": "High-performance Sparx Walking shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Sparx+24"
    },
    {
        "id": 25,
        "brand": "Sparx",
        "name": "Sparx Basketball Pro 125",
        "price": 13285,
        "discount": 5,
        "sizes": [
            7,
            8,
            10,
            11,
            12
        ],
        "rating": 3.8,
        "category": "Basketball",
        "description": "High-performance Sparx Basketball shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Sparx+25"
    },
    {
        "id": 26,
        "brand": "Skechers",
        "name": "Skechers Basketball Pro 126",
        "price": 11431,
        "discount": 50,
        "sizes": [
            10,
            11,
            12
        ],
        "rating": 4,
        "category": "Basketball",
        "description": "High-performance Skechers Basketball shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Skechers+26"
    },
    {
        "id": 27,
        "brand": "Red Tape",
        "name": "Red Tape Sneakers Pro 127",
        "price": 15112,
        "discount": 0,
        "sizes": [
            7,
            9,
            10,
            11,
            12
        ],
        "rating": 4,
        "category": "Sneakers",
        "description": "High-performance Red Tape Sneakers shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Red Tape+27"
    },
    {
        "id": 28,
        "brand": "Skechers",
        "name": "Skechers Training Pro 128",
        "price": 5662,
        "discount": 50,
        "sizes": [
            7,
            8,
            9,
            11
        ],
        "rating": 3.9,
        "category": "Training",
        "description": "High-performance Skechers Training shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Skechers+28"
    },
    {
        "id": 29,
        "brand": "Red Tape",
        "name": "Red Tape Sneakers Pro 129",
        "price": 16258,
        "discount": 50,
        "sizes": [
            7,
            9,
            10,
            11
        ],
        "rating": 3.1,
        "category": "Sneakers",
        "description": "High-performance Red Tape Sneakers shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Red Tape+29"
    },
    {
        "id": 30,
        "brand": "Campus",
        "name": "Campus Training Pro 130",
        "price": 16142,
        "discount": 15,
        "sizes": [
            8,
            9,
            11
        ],
        "rating": 3.6,
        "category": "Training",
        "description": "High-performance Campus Training shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Campus+30"
    },
    {
        "id": 31,
        "brand": "Skechers",
        "name": "Skechers Training Pro 131",
        "price": 3899,
        "discount": 20,
        "sizes": [
            7,
            9,
            11,
            12
        ],
        "rating": 4.8,
        "category": "Training",
        "description": "High-performance Skechers Training shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Skechers+31"
    },
    {
        "id": 32,
        "brand": "Bata",
        "name": "Bata Sneakers Pro 132",
        "price": 19008,
        "discount": 10,
        "sizes": [
            7,
            8,
            10,
            11,
            12
        ],
        "rating": 3.3,
        "category": "Sneakers",
        "description": "High-performance Bata Sneakers shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Bata+32"
    },
    {
        "id": 33,
        "brand": "Bata",
        "name": "Bata Walking Pro 133",
        "price": 11954,
        "discount": 50,
        "sizes": [
            7,
            9,
            10,
            12
        ],
        "rating": 3.4,
        "category": "Walking",
        "description": "High-performance Bata Walking shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Bata+33"
    },
    {
        "id": 34,
        "brand": "Red Tape",
        "name": "Red Tape Lifestyle Pro 134",
        "price": 4105,
        "discount": 15,
        "sizes": [
            7,
            8,
            12
        ],
        "rating": 4.3,
        "category": "Lifestyle",
        "description": "High-performance Red Tape Lifestyle shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Red Tape+34"
    },
    {
        "id": 35,
        "brand": "Skechers",
        "name": "Skechers Walking Pro 135",
        "price": 2468,
        "discount": 5,
        "sizes": [
            7,
            9,
            10,
            12
        ],
        "rating": 4.8,
        "category": "Walking",
        "description": "High-performance Skechers Walking shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Skechers+35"
    },
    {
        "id": 36,
        "brand": "Relaxo",
        "name": "Relaxo Sneakers Pro 136",
        "price": 15395,
        "discount": 20,
        "sizes": [
            7,
            9,
            10,
            11
        ],
        "rating": 3.4,
        "category": "Sneakers",
        "description": "High-performance Relaxo Sneakers shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Relaxo+36"
    },
    {
        "id": 37,
        "brand": "Red Tape",
        "name": "Red Tape Training Pro 137",
        "price": 19001,
        "discount": 10,
        "sizes": [
            9,
            10,
            11,
            12
        ],
        "rating": 3.4,
        "category": "Training",
        "description": "High-performance Red Tape Training shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Red Tape+37"
    },
    {
        "id": 38,
        "brand": "Skechers",
        "name": "Skechers Running Pro 138",
        "price": 18469,
        "discount": 50,
        "sizes": [
            7,
            8,
            9,
            10,
            11,
            12
        ],
        "rating": 3.9,
        "category": "Running",
        "description": "High-performance Skechers Running shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Skechers+38"
    },
    {
        "id": 39,
        "brand": "Red Tape",
        "name": "Red Tape Basketball Pro 139",
        "price": 5173,
        "discount": 10,
        "sizes": [
            7,
            10
        ],
        "rating": 4.5,
        "category": "Basketball",
        "description": "High-performance Red Tape Basketball shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Red Tape+39"
    },
    {
        "id": 40,
        "brand": "Mochi",
        "name": "Mochi Sneakers Pro 140",
        "price": 3723,
        "discount": 20,
        "sizes": [
            7,
            8,
            9,
            10,
            11,
            12
        ],
        "rating": 3,
        "category": "Sneakers",
        "description": "High-performance Mochi Sneakers shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Mochi+40"
    },
    {
        "id": 41,
        "brand": "Sparx",
        "name": "Sparx Training Pro 141",
        "price": 3849,
        "discount": 15,
        "sizes": [
            8,
            12
        ],
        "rating": 3.2,
        "category": "Training",
        "description": "High-performance Sparx Training shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Sparx+41"
    },
    {
        "id": 42,
        "brand": "Asics",
        "name": "Asics Training Pro 142",
        "price": 8049,
        "discount": 20,
        "sizes": [
            7,
            9,
            11,
            12
        ],
        "rating": 4.1,
        "category": "Training",
        "description": "High-performance Asics Training shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Asics+42"
    },
    {
        "id": 43,
        "brand": "Asics",
        "name": "Asics Lifestyle Pro 143",
        "price": 15941,
        "discount": 5,
        "sizes": [
            9,
            11,
            12
        ],
        "rating": 4.8,
        "category": "Lifestyle",
        "description": "High-performance Asics Lifestyle shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Asics+43"
    },
    {
        "id": 44,
        "brand": "Hoka",
        "name": "Hoka Basketball Pro 144",
        "price": 11652,
        "discount": 15,
        "sizes": [
            7,
            9,
            10,
            11
        ],
        "rating": 3.8,
        "category": "Basketball",
        "description": "High-performance Hoka Basketball shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Hoka+44"
    },
    {
        "id": 45,
        "brand": "Skechers",
        "name": "Skechers Basketball Pro 145",
        "price": 16613,
        "discount": 15,
        "sizes": [
            8,
            9,
            12
        ],
        "rating": 4.2,
        "category": "Basketball",
        "description": "High-performance Skechers Basketball shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Skechers+45"
    },
    {
        "id": 46,
        "brand": "Skechers",
        "name": "Skechers Training Pro 146",
        "price": 15511,
        "discount": 0,
        "sizes": [
            7,
            8,
            9,
            11,
            12
        ],
        "rating": 3.5,
        "category": "Training",
        "description": "High-performance Skechers Training shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Skechers+46"
    },
    {
        "id": 47,
        "brand": "Mochi",
        "name": "Mochi Sneakers Pro 147",
        "price": 4386,
        "discount": 10,
        "sizes": [
            8,
            9,
            12
        ],
        "rating": 4.1,
        "category": "Sneakers",
        "description": "High-performance Mochi Sneakers shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Mochi+47"
    },
    {
        "id": 48,
        "brand": "Mochi",
        "name": "Mochi Basketball Pro 148",
        "price": 17782,
        "discount": 20,
        "sizes": [
            7,
            8,
            9,
            10
        ],
        "rating": 4.5,
        "category": "Basketball",
        "description": "High-performance Mochi Basketball shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Mochi+48"
    },
    {
        "id": 49,
        "brand": "Red Tape",
        "name": "Red Tape Basketball Pro 149",
        "price": 7446,
        "discount": 20,
        "sizes": [
            8,
            9,
            10,
            12
        ],
        "rating": 4.5,
        "category": "Basketball",
        "description": "High-performance Red Tape Basketball shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Red Tape+49"
    },
    {
        "id": 50,
        "brand": "Mochi",
        "name": "Mochi Walking Pro 150",
        "price": 12743,
        "discount": 50,
        "sizes": [
            7,
            10,
            11,
            12
        ],
        "rating": 3.4,
        "category": "Walking",
        "description": "High-performance Mochi Walking shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Mochi+50"
    },
    {
        "id": 51,
        "brand": "Asics",
        "name": "Asics Sneakers Pro 151",
        "price": 9220,
        "discount": 5,
        "sizes": [
            8,
            11
        ],
        "rating": 3.8,
        "category": "Sneakers",
        "description": "High-performance Asics Sneakers shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Asics+51"
    },
    {
        "id": 52,
        "brand": "Campus",
        "name": "Campus Lifestyle Pro 152",
        "price": 19025,
        "discount": 5,
        "sizes": [
            7,
            8,
            9,
            10,
            11,
            12
        ],
        "rating": 3.3,
        "category": "Lifestyle",
        "description": "High-performance Campus Lifestyle shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Campus+52"
    },
    {
        "id": 53,
        "brand": "Bata",
        "name": "Bata Running Pro 153",
        "price": 6228,
        "discount": 0,
        "sizes": [
            7,
            8,
            9,
            10
        ],
        "rating": 4.6,
        "category": "Running",
        "description": "High-performance Bata Running shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Bata+53"
    },
    {
        "id": 54,
        "brand": "Bata",
        "name": "Bata Sneakers Pro 154",
        "price": 13332,
        "discount": 0,
        "sizes": [
            7,
            8,
            9,
            10,
            12
        ],
        "rating": 3.3,
        "category": "Sneakers",
        "description": "High-performance Bata Sneakers shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Bata+54"
    },
    {
        "id": 55,
        "brand": "Jordan",
        "name": "Jordan Walking Pro 155",
        "price": 6330,
        "discount": 20,
        "sizes": [
            7,
            9,
            12
        ],
        "rating": 3.3,
        "category": "Walking",
        "description": "High-performance Jordan Walking shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Jordan+55"
    },
    {
        "id": 56,
        "brand": "Red Tape",
        "name": "Red Tape Lifestyle Pro 156",
        "price": 17082,
        "discount": 15,
        "sizes": [
            12
        ],
        "rating": 5,
        "category": "Lifestyle",
        "description": "High-performance Red Tape Lifestyle shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Red Tape+56"
    },
    {
        "id": 57,
        "brand": "Red Tape",
        "name": "Red Tape Training Pro 157",
        "price": 3746,
        "discount": 15,
        "sizes": [
            7,
            10,
            11,
            12
        ],
        "rating": 3.1,
        "category": "Training",
        "description": "High-performance Red Tape Training shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Red Tape+57"
    },
    {
        "id": 58,
        "brand": "Sparx",
        "name": "Sparx Lifestyle Pro 158",
        "price": 13713,
        "discount": 15,
        "sizes": [
            8,
            9,
            10
        ],
        "rating": 3.7,
        "category": "Lifestyle",
        "description": "High-performance Sparx Lifestyle shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Sparx+58"
    },
    {
        "id": 59,
        "brand": "Jordan",
        "name": "Jordan Walking Pro 159",
        "price": 19738,
        "discount": 50,
        "sizes": [
            8,
            10
        ],
        "rating": 3.1,
        "category": "Walking",
        "description": "High-performance Jordan Walking shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Jordan+59"
    },
    {
        "id": 60,
        "brand": "Sparx",
        "name": "Sparx Basketball Pro 160",
        "price": 12473,
        "discount": 15,
        "sizes": [
            7,
            8,
            9,
            11,
            12
        ],
        "rating": 4.4,
        "category": "Basketball",
        "description": "High-performance Sparx Basketball shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Sparx+60"
    },
    {
        "id": 61,
        "brand": "Campus",
        "name": "Campus Basketball Pro 161",
        "price": 19392,
        "discount": 20,
        "sizes": [
            8,
            9,
            10,
            11,
            12
        ],
        "rating": 4.1,
        "category": "Basketball",
        "description": "High-performance Campus Basketball shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Campus+61"
    },
    {
        "id": 62,
        "brand": "Campus",
        "name": "Campus Basketball Pro 162",
        "price": 3637,
        "discount": 15,
        "sizes": [
            9
        ],
        "rating": 4.3,
        "category": "Basketball",
        "description": "High-performance Campus Basketball shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Campus+62"
    },
    {
        "id": 63,
        "brand": "Asics",
        "name": "Asics Basketball Pro 163",
        "price": 9136,
        "discount": 50,
        "sizes": [
            9,
            11,
            12
        ],
        "rating": 4.4,
        "category": "Basketball",
        "description": "High-performance Asics Basketball shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Asics+63"
    },
    {
        "id": 64,
        "brand": "Asics",
        "name": "Asics Sneakers Pro 164",
        "price": 11525,
        "discount": 10,
        "sizes": [
            9,
            10,
            11,
            12
        ],
        "rating": 3,
        "category": "Sneakers",
        "description": "High-performance Asics Sneakers shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Asics+64"
    },
    {
        "id": 65,
        "brand": "Hoka",
        "name": "Hoka Running Pro 165",
        "price": 15671,
        "discount": 50,
        "sizes": [
            7,
            10,
            12
        ],
        "rating": 4.6,
        "category": "Running",
        "description": "High-performance Hoka Running shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Hoka+65"
    },
    {
        "id": 66,
        "brand": "Relaxo",
        "name": "Relaxo Sneakers Pro 166",
        "price": 5823,
        "discount": 15,
        "sizes": [
            7,
            8
        ],
        "rating": 4.7,
        "category": "Sneakers",
        "description": "High-performance Relaxo Sneakers shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Relaxo+66"
    },
    {
        "id": 67,
        "brand": "Asics",
        "name": "Asics Running Pro 167",
        "price": 12297,
        "discount": 5,
        "sizes": [
            7,
            9,
            10,
            11,
            12
        ],
        "rating": 4.9,
        "category": "Running",
        "description": "High-performance Asics Running shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Asics+67"
    },
    {
        "id": 68,
        "brand": "Hoka",
        "name": "Hoka Sneakers Pro 168",
        "price": 10650,
        "discount": 20,
        "sizes": [
            7,
            9,
            11,
            12
        ],
        "rating": 4.1,
        "category": "Sneakers",
        "description": "High-performance Hoka Sneakers shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Hoka+68"
    },
    {
        "id": 69,
        "brand": "Hoka",
        "name": "Hoka Basketball Pro 169",
        "price": 2115,
        "discount": 0,
        "sizes": [
            7,
            9,
            12
        ],
        "rating": 4.4,
        "category": "Basketball",
        "description": "High-performance Hoka Basketball shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Hoka+69"
    },
    {
        "id": 70,
        "brand": "Campus",
        "name": "Campus Walking Pro 170",
        "price": 18716,
        "discount": 10,
        "sizes": [
            7,
            9,
            10,
            11,
            12
        ],
        "rating": 4.1,
        "category": "Walking",
        "description": "High-performance Campus Walking shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Campus+70"
    },
    {
        "id": 71,
        "brand": "Bata",
        "name": "Bata Training Pro 171",
        "price": 2238,
        "discount": 10,
        "sizes": [
            7,
            11
        ],
        "rating": 4.7,
        "category": "Training",
        "description": "High-performance Bata Training shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Bata+71"
    },
    {
        "id": 72,
        "brand": "Red Tape",
        "name": "Red Tape Training Pro 172",
        "price": 9933,
        "discount": 20,
        "sizes": [
            8,
            9,
            11,
            12
        ],
        "rating": 3.5,
        "category": "Training",
        "description": "High-performance Red Tape Training shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Red Tape+72"
    },
    {
        "id": 73,
        "brand": "Mochi",
        "name": "Mochi Basketball Pro 173",
        "price": 10387,
        "discount": 5,
        "sizes": [
            7,
            9,
            11,
            12
        ],
        "rating": 4.4,
        "category": "Basketball",
        "description": "High-performance Mochi Basketball shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Mochi+73"
    },
    {
        "id": 74,
        "brand": "Relaxo",
        "name": "Relaxo Basketball Pro 174",
        "price": 6074,
        "discount": 5,
        "sizes": [
            8,
            9,
            10,
            11,
            12
        ],
        "rating": 3.6,
        "category": "Basketball",
        "description": "High-performance Relaxo Basketball shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Relaxo+74"
    },
    {
        "id": 75,
        "brand": "Sparx",
        "name": "Sparx Training Pro 175",
        "price": 16212,
        "discount": 10,
        "sizes": [
            7,
            8,
            9,
            10,
            11,
            12
        ],
        "rating": 4.1,
        "category": "Training",
        "description": "High-performance Sparx Training shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Sparx+75"
    },
    {
        "id": 76,
        "brand": "Hoka",
        "name": "Hoka Sneakers Pro 176",
        "price": 4756,
        "discount": 5,
        "sizes": [
            7,
            10,
            11,
            12
        ],
        "rating": 3.3,
        "category": "Sneakers",
        "description": "High-performance Hoka Sneakers shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Hoka+76"
    },
    {
        "id": 77,
        "brand": "Bata",
        "name": "Bata Training Pro 177",
        "price": 3686,
        "discount": 0,
        "sizes": [
            7,
            9,
            10
        ],
        "rating": 3.4,
        "category": "Training",
        "description": "High-performance Bata Training shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Bata+77"
    },
    {
        "id": 78,
        "brand": "Skechers",
        "name": "Skechers Training Pro 178",
        "price": 7120,
        "discount": 50,
        "sizes": [
            7,
            11
        ],
        "rating": 3.1,
        "category": "Training",
        "description": "High-performance Skechers Training shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Skechers+78"
    },
    {
        "id": 79,
        "brand": "Skechers",
        "name": "Skechers Walking Pro 179",
        "price": 4338,
        "discount": 0,
        "sizes": [
            7,
            8,
            9,
            10,
            11,
            12
        ],
        "rating": 4.1,
        "category": "Walking",
        "description": "High-performance Skechers Walking shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Skechers+79"
    },
    {
        "id": 80,
        "brand": "Asics",
        "name": "Asics Running Pro 180",
        "price": 16405,
        "discount": 5,
        "sizes": [
            7,
            10,
            11
        ],
        "rating": 4.6,
        "category": "Running",
        "description": "High-performance Asics Running shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Asics+80"
    },
    {
        "id": 81,
        "brand": "Red Tape",
        "name": "Red Tape Basketball Pro 181",
        "price": 15010,
        "discount": 20,
        "sizes": [
            7,
            8,
            9,
            10
        ],
        "rating": 4.2,
        "category": "Basketball",
        "description": "High-performance Red Tape Basketball shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Red Tape+81"
    },
    {
        "id": 82,
        "brand": "Hoka",
        "name": "Hoka Training Pro 182",
        "price": 5407,
        "discount": 5,
        "sizes": [
            7,
            9,
            11
        ],
        "rating": 4,
        "category": "Training",
        "description": "High-performance Hoka Training shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Hoka+82"
    },
    {
        "id": 83,
        "brand": "Relaxo",
        "name": "Relaxo Lifestyle Pro 183",
        "price": 2826,
        "discount": 20,
        "sizes": [
            7,
            9,
            11
        ],
        "rating": 4.5,
        "category": "Lifestyle",
        "description": "High-performance Relaxo Lifestyle shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Relaxo+83"
    },
    {
        "id": 84,
        "brand": "Asics",
        "name": "Asics Running Pro 184",
        "price": 13906,
        "discount": 0,
        "sizes": [
            9,
            10,
            11
        ],
        "rating": 3.5,
        "category": "Running",
        "description": "High-performance Asics Running shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Asics+84"
    },
    {
        "id": 85,
        "brand": "Relaxo",
        "name": "Relaxo Sneakers Pro 185",
        "price": 16825,
        "discount": 15,
        "sizes": [
            7,
            9,
            11
        ],
        "rating": 3.3,
        "category": "Sneakers",
        "description": "High-performance Relaxo Sneakers shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Relaxo+85"
    },
    {
        "id": 86,
        "brand": "Sparx",
        "name": "Sparx Sneakers Pro 186",
        "price": 7195,
        "discount": 0,
        "sizes": [
            8,
            9,
            10
        ],
        "rating": 3.4,
        "category": "Sneakers",
        "description": "High-performance Sparx Sneakers shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Sparx+86"
    },
    {
        "id": 87,
        "brand": "Asics",
        "name": "Asics Sneakers Pro 187",
        "price": 14986,
        "discount": 5,
        "sizes": [
            8,
            9,
            12
        ],
        "rating": 3.7,
        "category": "Sneakers",
        "description": "High-performance Asics Sneakers shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Asics+87"
    },
    {
        "id": 88,
        "brand": "Relaxo",
        "name": "Relaxo Running Pro 188",
        "price": 5863,
        "discount": 10,
        "sizes": [
            9,
            10
        ],
        "rating": 3.5,
        "category": "Running",
        "description": "High-performance Relaxo Running shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Relaxo+88"
    },
    {
        "id": 89,
        "brand": "Asics",
        "name": "Asics Training Pro 189",
        "price": 16819,
        "discount": 20,
        "sizes": [
            7,
            8,
            10,
            11,
            12
        ],
        "rating": 4.9,
        "category": "Training",
        "description": "High-performance Asics Training shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Asics+89"
    },
    {
        "id": 90,
        "brand": "Mochi",
        "name": "Mochi Lifestyle Pro 190",
        "price": 17193,
        "discount": 15,
        "sizes": [
            8,
            9,
            10,
            11
        ],
        "rating": 4.7,
        "category": "Lifestyle",
        "description": "High-performance Mochi Lifestyle shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Mochi+90"
    },
    {
        "id": 91,
        "brand": "Campus",
        "name": "Campus Sneakers Pro 191",
        "price": 13364,
        "discount": 5,
        "sizes": [
            7,
            8,
            9,
            10,
            11
        ],
        "rating": 3,
        "category": "Sneakers",
        "description": "High-performance Campus Sneakers shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Campus+91"
    },
    {
        "id": 92,
        "brand": "Hoka",
        "name": "Hoka Training Pro 192",
        "price": 8675,
        "discount": 50,
        "sizes": [
            7,
            9,
            12
        ],
        "rating": 3.2,
        "category": "Training",
        "description": "High-performance Hoka Training shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Hoka+92"
    },
    {
        "id": 93,
        "brand": "Hoka",
        "name": "Hoka Sneakers Pro 193",
        "price": 18728,
        "discount": 15,
        "sizes": [
            9,
            10
        ],
        "rating": 3.4,
        "category": "Sneakers",
        "description": "High-performance Hoka Sneakers shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Hoka+93"
    },
    {
        "id": 94,
        "brand": "Campus",
        "name": "Campus Lifestyle Pro 194",
        "price": 17936,
        "discount": 15,
        "sizes": [
            7,
            8,
            10,
            11
        ],
        "rating": 3,
        "category": "Lifestyle",
        "description": "High-performance Campus Lifestyle shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Campus+94"
    },
    {
        "id": 95,
        "brand": "Mochi",
        "name": "Mochi Basketball Pro 195",
        "price": 7231,
        "discount": 20,
        "sizes": [
            7,
            8,
            9
        ],
        "rating": 4.6,
        "category": "Basketball",
        "description": "High-performance Mochi Basketball shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Mochi+95"
    },
    {
        "id": 96,
        "brand": "Campus",
        "name": "Campus Lifestyle Pro 196",
        "price": 11258,
        "discount": 15,
        "sizes": [
            8,
            9,
            10,
            11
        ],
        "rating": 3.4,
        "category": "Lifestyle",
        "description": "High-performance Campus Lifestyle shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Campus+96"
    },
    {
        "id": 97,
        "brand": "Skechers",
        "name": "Skechers Training Pro 197",
        "price": 10292,
        "discount": 0,
        "sizes": [
            7,
            8,
            9,
            11
        ],
        "rating": 3.7,
        "category": "Training",
        "description": "High-performance Skechers Training shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Skechers+97"
    },
    {
        "id": 98,
        "brand": "Bata",
        "name": "Bata Lifestyle Pro 198",
        "price": 3229,
        "discount": 20,
        "sizes": [
            7,
            8,
            9,
            12
        ],
        "rating": 4.5,
        "category": "Lifestyle",
        "description": "High-performance Bata Lifestyle shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Bata+98"
    },
    {
        "id": 99,
        "brand": "Sparx",
        "name": "Sparx Lifestyle Pro 199",
        "price": 3376,
        "discount": 50,
        "sizes": [
            8
        ],
        "rating": 3.7,
        "category": "Lifestyle",
        "description": "High-performance Sparx Lifestyle shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Sparx+99"
    },
    {
        "id": 100,
        "brand": "Bata",
        "name": "Bata Basketball Pro 200",
        "price": 16847,
        "discount": 5,
        "sizes": [
            8,
            12
        ],
        "rating": 4.4,
        "category": "Basketball",
        "description": "High-performance Bata Basketball shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Bata+100"
    },
    {
        "id": 101,
        "brand": "Skechers",
        "name": "Skechers Sneakers Pro 201",
        "price": 17977,
        "discount": 0,
        "sizes": [
            7,
            8
        ],
        "rating": 3.8,
        "category": "Sneakers",
        "description": "High-performance Skechers Sneakers shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Skechers+101"
    },
    {
        "id": 102,
        "brand": "Skechers",
        "name": "Skechers Running Pro 202",
        "price": 15436,
        "discount": 0,
        "sizes": [
            7,
            9,
            10
        ],
        "rating": 4.4,
        "category": "Running",
        "description": "High-performance Skechers Running shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Skechers+102"
    },
    {
        "id": 103,
        "brand": "Mochi",
        "name": "Mochi Training Pro 203",
        "price": 16098,
        "discount": 15,
        "sizes": [
            8,
            9,
            10,
            12
        ],
        "rating": 4.3,
        "category": "Training",
        "description": "High-performance Mochi Training shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Mochi+103"
    },
    {
        "id": 104,
        "brand": "Hoka",
        "name": "Hoka Running Pro 204",
        "price": 15385,
        "discount": 15,
        "sizes": [
            7,
            8,
            10
        ],
        "rating": 3.4,
        "category": "Running",
        "description": "High-performance Hoka Running shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Hoka+104"
    },
    {
        "id": 105,
        "brand": "Mochi",
        "name": "Mochi Training Pro 205",
        "price": 9603,
        "discount": 15,
        "sizes": [
            7,
            8,
            11,
            12
        ],
        "rating": 4.9,
        "category": "Training",
        "description": "High-performance Mochi Training shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Mochi+105"
    },
    {
        "id": 106,
        "brand": "Hoka",
        "name": "Hoka Walking Pro 206",
        "price": 5169,
        "discount": 15,
        "sizes": [
            8,
            9,
            11
        ],
        "rating": 4.8,
        "category": "Walking",
        "description": "High-performance Hoka Walking shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Hoka+106"
    },
    {
        "id": 107,
        "brand": "Sparx",
        "name": "Sparx Running Pro 207",
        "price": 15724,
        "discount": 20,
        "sizes": [
            8,
            9,
            10
        ],
        "rating": 3.6,
        "category": "Running",
        "description": "High-performance Sparx Running shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Sparx+107"
    },
    {
        "id": 108,
        "brand": "Sparx",
        "name": "Sparx Basketball Pro 208",
        "price": 10884,
        "discount": 15,
        "sizes": [
            7,
            8,
            9,
            11,
            12
        ],
        "rating": 4.1,
        "category": "Basketball",
        "description": "High-performance Sparx Basketball shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Sparx+108"
    },
    {
        "id": 109,
        "brand": "Hoka",
        "name": "Hoka Basketball Pro 209",
        "price": 12052,
        "discount": 0,
        "sizes": [
            7,
            9,
            11
        ],
        "rating": 4.1,
        "category": "Basketball",
        "description": "High-performance Hoka Basketball shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Hoka+109"
    },
    {
        "id": 110,
        "brand": "Relaxo",
        "name": "Relaxo Basketball Pro 210",
        "price": 3820,
        "discount": 5,
        "sizes": [
            9,
            10,
            11,
            12
        ],
        "rating": 4.8,
        "category": "Basketball",
        "description": "High-performance Relaxo Basketball shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Relaxo+110"
    },
    {
        "id": 111,
        "brand": "Hoka",
        "name": "Hoka Running Pro 211",
        "price": 2847,
        "discount": 5,
        "sizes": [
            7,
            8,
            11
        ],
        "rating": 3.4,
        "category": "Running",
        "description": "High-performance Hoka Running shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Hoka+111"
    },
    {
        "id": 112,
        "brand": "Red Tape",
        "name": "Red Tape Training Pro 212",
        "price": 16969,
        "discount": 5,
        "sizes": [
            7,
            11,
            12
        ],
        "rating": 3.6,
        "category": "Training",
        "description": "High-performance Red Tape Training shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Red Tape+112"
    },
    {
        "id": 113,
        "brand": "Asics",
        "name": "Asics Walking Pro 213",
        "price": 9332,
        "discount": 0,
        "sizes": [
            10
        ],
        "rating": 4,
        "category": "Walking",
        "description": "High-performance Asics Walking shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Asics+113"
    },
    {
        "id": 114,
        "brand": "Relaxo",
        "name": "Relaxo Sneakers Pro 214",
        "price": 5114,
        "discount": 0,
        "sizes": [
            7,
            9
        ],
        "rating": 4,
        "category": "Sneakers",
        "description": "High-performance Relaxo Sneakers shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Relaxo+114"
    },
    {
        "id": 115,
        "brand": "Sparx",
        "name": "Sparx Sneakers Pro 215",
        "price": 5349,
        "discount": 10,
        "sizes": [
            7,
            10
        ],
        "rating": 4.4,
        "category": "Sneakers",
        "description": "High-performance Sparx Sneakers shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Sparx+115"
    },
    {
        "id": 116,
        "brand": "Hoka",
        "name": "Hoka Training Pro 216",
        "price": 3238,
        "discount": 50,
        "sizes": [
            9,
            11,
            12
        ],
        "rating": 3.8,
        "category": "Training",
        "description": "High-performance Hoka Training shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Hoka+116"
    },
    {
        "id": 117,
        "brand": "Hoka",
        "name": "Hoka Training Pro 217",
        "price": 15135,
        "discount": 5,
        "sizes": [
            7,
            8,
            9,
            11
        ],
        "rating": 4,
        "category": "Training",
        "description": "High-performance Hoka Training shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Hoka+117"
    },
    {
        "id": 118,
        "brand": "Relaxo",
        "name": "Relaxo Walking Pro 218",
        "price": 15549,
        "discount": 50,
        "sizes": [
            7,
            10,
            11
        ],
        "rating": 3.3,
        "category": "Walking",
        "description": "High-performance Relaxo Walking shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Relaxo+118"
    },
    {
        "id": 119,
        "brand": "Red Tape",
        "name": "Red Tape Training Pro 219",
        "price": 17413,
        "discount": 10,
        "sizes": [
            7,
            8,
            10,
            12
        ],
        "rating": 3.1,
        "category": "Training",
        "description": "High-performance Red Tape Training shoes designed for maximum durability.",
        "isNew": true,
        "image": "https://via.placeholder.com/200x200?text=Red Tape+119"
    },
    {
        "id": 120,
        "brand": "Asics",
        "name": "Asics Lifestyle Pro 220",
        "price": 16432,
        "discount": 5,
        "sizes": [
            8,
            9,
            10,
            11,
            12
        ],
        "rating": 4.2,
        "category": "Lifestyle",
        "description": "High-performance Asics Lifestyle shoes designed for maximum durability.",
        "isNew": false,
        "image": "https://via.placeholder.com/200x200?text=Asics+120"
    }
]

function ProductList() {
    return (
        <div>
            <div>
                <SearchPage />
                <div className='bg-red-700 flex flex-wrap p-1 absolute top-50 left-80 rounded-xl'>
                    {/* {ProductListArr.map((item) => {
                       return <ImgCard props={item} />
                    })} */}
                    {ProductListArr.slice(0, 8).map(item => {
                        return <ImgCard key={item.id} props={item} />
                    })}
                </div>
            </div>

        </div>
    )
}

export default ProductList
