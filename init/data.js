const Listing = require("../models/listing");

const sampleListings = [{
        title: "Cozy Beachfront Cottage",
        description: "Escape to this charming beachfront cottage for a relaxing getaway.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60"
        },
        price: 1500,
        location: "Malibu",
        country: "United States"
    },
    {
        title: "Mountain View Cabin",
        description: "A cozy cabin with breathtaking mountain views.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60"
        },
        price: 2000,
        location: "Manali",
        country: "India"
    },
    {
        title: "Luxury Villa",
        description: "Spacious villa with a private pool.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=60"
        },
        price: 5000,
        location: "Goa",
        country: "India"
    },
    {
        title: "Urban Apartment",
        description: "Modern apartment in the heart of the city.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
        },
        price: 3000,
        location: "New York",
        country: "United States"
    },
    {
        title: "Desert Camp",
        description: "Traditional tents under the starry desert sky.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1549887534-4b449b355b04?auto=format&fit=crop&w=800&q=60"
        },
        price: 1200,
        location: "Jaisalmer",
        country: "India"
    },
    {
        title: "Forest Treehouse",
        description: "Stay high up among the trees with panoramic views.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
        },
        price: 2500,
        location: "Kerala",
        country: "India"
    },
    {
        title: "Countryside Farmhouse",
        description: "Relax in a quiet farmhouse with natural beauty all around.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1600585154206-0f4f9f95d1c4?auto=format&fit=crop&w=800&q=60"
        },
        price: 1800,
        location: "Punjab",
        country: "India"
    },
    {
        title: "Secluded Lake Cabin",
        description: "A peaceful cabin by the lake, perfect for fishing.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1598928506312-e7a2d6f9e77e?auto=format&fit=crop&w=800&q=60"
        },
        price: 2200,
        location: "Nainital",
        country: "India"
    },
    {
        title: "Cliffside Bungalow",
        description: "Enjoy dramatic views of the ocean from this cliffside stay.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1600585154176-894a4c53f67f?auto=format&fit=crop&w=800&q=60"
        },
        price: 4000,
        location: "Santorini",
        country: "Greece"
    },
    {
        title: "Japanese Ryokan",
        description: "Experience traditional Japanese hospitality.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60"
        },
        price: 3500,
        location: "Kyoto",
        country: "Japan"
    },
    {
        title: "Snowy Chalet",
        description: "A warm chalet with a fireplace in the snowy mountains.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60"
        },
        price: 4500,
        location: "Swiss Alps",
        country: "Switzerland"
    },
    {
        title: "Riverside Tent",
        description: "Simple riverside tent for adventure lovers.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60"
        },
        price: 800,
        location: "Rishikesh",
        country: "India"
    },
    {
        title: "Safari Lodge",
        description: "Stay in the middle of the jungle with luxury comforts.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60"
        },
        price: 6000,
        location: "Masai Mara",
        country: "Kenya"
    },
    {
        title: "Floating House",
        description: "Unique experience of staying on water.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1617196035234-8b9cf5db2f55?auto=format&fit=crop&w=800&q=60"
        },
        price: 3800,
        location: "Kumarakom",
        country: "India"
    },
    {
        title: "Island Hut",
        description: "Rustic hut on a private island.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1617196035234-8b9cf5db2f55?auto=format&fit=crop&w=800&q=60"
        },
        price: 1700,
        location: "Maldives",
        country: "Maldives"
    },
    {
        title: "Historic Palace",
        description: "Live like royalty in this restored palace.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1617196035234-8b9cf5db2f55?auto=format&fit=crop&w=800&q=60"
        },
        price: 7000,
        location: "Jaipur",
        country: "India"
    },
    {
        title: "Modern Loft",
        description: "Trendy loft in the city center.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60"
        },
        price: 2700,
        location: "Berlin",
        country: "Germany"
    },
    {
        title: "Tropical Bungalow",
        description: "A peaceful bungalow surrounded by palm trees.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60"
        },
        price: 2100,
        location: "Bali",
        country: "Indonesia"
    },
    {
        title: "Artistic Studio",
        description: "Perfect stay for creatives and digital nomads.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
        },
        price: 1900,
        location: "Paris",
        country: "France"
    },
    {
        title: "Himalayan Homestay",
        description: "Cozy homestay with local hospitality in the Himalayas.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1600585154176-894a4c53f67f?auto=format&fit=crop&w=800&q=60"
        },
        price: 1400,
        location: "Leh",
        country: "India"
    },
    {
        title: "Lakeside Cottage",
        description: "Small cottage with serene lake views.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1598928506312-e7a2d6f9e77e?auto=format&fit=crop&w=800&q=60"
        },
        price: 1600,
        location: "Udaipur",
        country: "India"
    },
    {
        title: "Desert Villa",
        description: "Luxury villa in the middle of the desert.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1549887534-4b449b355b04?auto=format&fit=crop&w=800&q=60"
        },
        price: 4800,
        location: "Dubai",
        country: "UAE"
    },
    {
        title: "Hilltop Cottage",
        description: "Quiet cottage on a hilltop with sunrise views.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60"
        },
        price: 1700,
        location: "Shimla",
        country: "India"
    },
    {
        title: "Cultural Riad",
        description: "Traditional Moroccan riad with courtyard.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60"
        },
        price: 3200,
        location: "Marrakech",
        country: "Morocco"
    },
    {
        title: "Beach Shack",
        description: "Simple beachside shack for budget travelers.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
        },
        price: 900,
        location: "Gokarna",
        country: "India"
    },
    {
        title: "Ski Resort Lodge",
        description: "Stay right next to the ski slopes.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60"
        },
        price: 5500,
        location: "Aspen",
        country: "United States"
    },
    {
        title: "Island Resort",
        description: "Private island resort with luxury facilities.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1617196035234-8b9cf5db2f55?auto=format&fit=crop&w=800&q=60"
        },
        price: 9500,
        location: "Phuket",
        country: "Thailand"
    }
];
Listing.insertMany(sampleListings);

module.exports = { data: sampleListings };