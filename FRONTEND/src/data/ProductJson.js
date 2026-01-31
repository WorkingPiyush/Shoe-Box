const brands = ["Bata", "Campus", "Mochi", "Red Tape", "Relaxo", "Sparx", "Asics", "Skechers", "Hoka", "Jordan"];
const categories = ["Running", "Sneakers", "Basketball", "Training", "Walking", "Lifestyle"];
const shoes = [];

for (let i = 1; i <= 120; i++) {
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const category = categories[Math.floor(Math.random() * categories.length)];

    shoes.push({
        id: i,
        brand: brand,
        name: `${brand} ${category} Pro ${i + 100}`,
        price: Math.floor(Math.random() * (20000 - 2000) + 2000),
        discount: [0, 5, 10, 15, 20, 50][Math.floor(Math.random() * 6)],
        sizes: [7, 8, 9, 10, 11, 12].filter(() => Math.random() > 0.4),
        rating: parseFloat((Math.random() * (5 - 3) + 3).toFixed(1)),
        category: category,
        description: `High-performance ${brand} ${category} shoes designed for maximum durability.`,
        isNew: Math.random() > 0.7,
        image: `https://via.placeholder.com/200x200?text=${brand}+${i}`
    });
}

console.log(JSON.stringify(shoes, null, 2));