const products = [
    {
        id: 1,
        title: "Black Myth: Wukong",
        description: "RPG de acción inspirado en Viaje al Oeste con combate estilo Soulslike.",
        price: 59.99,
        category: "rpg",
        image: "/public/images/capsule_616x353.jpg"
    },
    {
        id: 2,
        title: "The Last of Us Parte II Remastered",
        description: "Aventura postapocalíptica con mejoras gráficas y modo roguelike.",
        price: 49.99,
        category: "aventura",
        image: "/public/images/capsule_616x353 (1).jpg"
    },
    {
        id: 3,
        title: "Marvel's Spider-Man 2",
        description: "Acción y aventura con Peter Parker y Miles Morales.",
        price: 69.99,
        category: "accion",
        image: "/public/images/capsule_616x353 (2).jpg"
    },
    {
        id: 4,
        title: "Elden Ring",
        description: "El aclamado RPG de mundo abierto de FromSoftware.",
        price: 59.99,
        category: "rpg",
        image: "/public/images/movie_232x130.jpg"
    },
    {
        id: 5,
        title: "FC 24",
        description: "El simulador de fútbol más popular con licencia oficial.",
        price: 49.99,
        category: "deportes",
        image: "/public/images/840_560.jpeg"
    },
    {
        id: 6,
        title: "Cyberpunk 2077",
        description: "Mundo abierto futurista con historia inmersiva y acción intensa.",
        price: 39.99,
        category: "accion",
        image: "/public/images/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7.jpg"
    },
    {
        id: 7,
        title: "Minecraft",
        description: "Juego de construcción y supervivencia con creatividad infinita.",
        price: 29.99,
        category: "sandbox",
        image: "/public/images/15YR_Free_Cape-1-7cbcb0739e3df57534ec-9063efed017354d1b1c3.jpg"
    },
    {
        id: 8,
        title: "Mortal Kombat 1",
        description: "El clásico de peleas vuelve con gráficos de última generación.",
        price: 59.99,
        category: "lucha",
        image: "/public/images/EGS_MortalKombat1_NetherRealmStudios_S3_2560x1440-bea2296b499ceecfc1dc1a91ab0d9a36.jpg"
    }
]

export const getProducts = () => new Promise(resolve => setTimeout(() => resolve(products), 1000))
export const getProductById = (id) => new Promise(resolve => setTimeout(() => resolve(products.find(p => p.id === parseInt(id))), 1000))
export const getProductsByCategory = (category) => new Promise(resolve => setTimeout(() => resolve(products.filter(p => p.category === category)), 1000))
