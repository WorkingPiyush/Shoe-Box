const addresses = [
    {
        _id: new ObjectId('69b2e6722ce6a661f0ef5db1'),
        userId: new ObjectId('69ab2a4619304d938cd00e46'),
        label: 'Home',
        name: 'Manoj',
        phone: '8595594378',
        house: 'B-29',
        locality: 'Burari',
        state: 'Delhi',
        pincode: '110075',
        country: 'India',
        isDefault: true,
        createdAt: "2026-03 - 12T16: 14: 42.766Z",
        updatedAt: "2026-03 - 12T17: 29: 36.072Z"
    },
    {
        _id: new ObjectId('69b2e8f5317c1748d3146c5c'),
        userId: new ObjectId('69ab2a4619304d938cd00e46'),
        label: 'Work',
        name: 'Piyush',
        phone: '8595594378',
        house: 'B-29',
        locality: 'Rohini',
        state: 'Delhi',
        pincode: '110085',
        country: 'India',
        isDefault: true,
        createdAt: "2026-03 - 12T16: 25: 25.971Z",
        updatedAt: "2026-03 - 12T16: 25: 25.971Z"
    }
]

addresses(prev => {
    prev.map(addr => addr._id === savedAddress._id ? savedAddress : addr)
})
