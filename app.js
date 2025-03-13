const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config()
const productRouter = require('./router/productRouter')
const userRouter = require('./router/userRouter');
const { User } = require('./model/userModel');
const { Product } = require('./model/productModel');
const app = express();
const mongoUri = process.env.MONGO_URI;
app.use(express.json())
app.use(cors())
app.use("/product", productRouter);
app.use("/user", userRouter)
mongoose.connect(mongoUri)
.then(() => {
    app.listen(3001, () => {
        console.log("server is listening to port 3001");
    })
})
.catch((err) => {
    console.log(err)
})




const addProduct = async() => {
  const res = await Product.insertMany(arr)
  console.log(res)
}
const arr = [
    {
      "name": "CoolBreeze AC 1.5 Ton",
      "description": "High-efficiency air conditioner with fast cooling technology.",
      "price": 45000,
      "category": "air conditioner",
      "brand": "CoolBreeze",
      "stocks": 10,
      "image": "https://img.freepik.com/free-vector/air-conditioner-with-cold-wind_107791-2884.jpg?ga=GA1.1.1997722858.1737911527&semt=ais_hybrid",
      "ratings": 0,
      "specifications": {
        "Capacity": "1.5 Ton",
        "Energy Rating": "5 Star",
        "Cooling Technology": "Inverter"
      },
      "reviews": []
    },
    {
      "name": "ChillMax Split AC 2 Ton",
      "description": "Premium 2-ton split AC with smart cooling features.",
      "price": 60000,
      "category": "air conditioner",
      "brand": "ChillMax",
      "stocks": 8,
      "image": "https://img.freepik.com/free-photo/air-conditioning-decoration-interior_74190-6226.jpg?ga=GA1.1.1997722858.1737911527&semt=ais_hybrid",
      "ratings": 0,
      "specifications": {
        "Capacity": "2 Ton",
        "Energy Rating": "4 Star",
        "Cooling Technology": "Dual Inverter"
      },
      "reviews": []
    },
    {
      "name": "Galaxy S24 Ultra",
      "description": "Latest flagship smartphone with AI-enhanced camera.",
      "price": 125000,
      "category": "mobile",
      "brand": "Samsung",
      "stocks": 15,
      "image": "https://img.freepik.com/free-vector/realistic-style-new-smartphone-model_23-2148380821.jpg?ga=GA1.1.1997722858.1737911527&semt=ais_hybrid",
      "ratings": 0,
      "specifications": {
        "Display": "6.8 inch Dynamic AMOLED",
        "Processor": "Snapdragon 8 Gen 3",
        "Battery": "5000mAh"
      },
      "reviews": []
    },
    {
      "name": "iPhone 15 Pro Max",
      "description": "Apple's latest Pro series phone with A17 Bionic chip.",
      "price": 140000,
      "category": "mobile",
      "brand": "Apple",
      "stocks": 12,
      "image": "https://img.freepik.com/free-vector/realistic-smartphone-device_52683-29765.jpg?ga=GA1.1.1997722858.1737911527&semt=ais_hybrid",
      "ratings": 0,
      "specifications": {
        "Display": "6.7 inch Super Retina XDR",
        "Processor": "A17 Bionic",
        "Battery": "4500mAh"
      },
      "reviews": []
    },
    {
      "name": "FrostGuard 350L Refrigerator",
      "description": "Energy-efficient double-door refrigerator with frost-free cooling.",
      "price": 55000,
      "category": "refrigerator",
      "brand": "FrostGuard",
      "stocks": 7,
      "image": "https://img.freepik.com/free-psd/sleek-stainless-steel-french-door-refrigerator_632498-25850.jpg?ga=GA1.1.1997722858.1737911527&semt=ais_hybrid",
      "ratings": 0,
      "specifications": {
        "Capacity": "350L",
        "Cooling System": "Frost-Free",
        "Energy Rating": "4 Star"
      },
      "reviews": []
    },
    {
      "name": "HyperCool 450L Side-by-Side Fridge",
      "description": "Modern refrigerator with smart inverter compressor.",
      "price": 70000,
      "category": "refrigerator",
      "brand": "HyperCool",
      "stocks": 5,
      "image": "https://img.freepik.com/free-psd/stainless-steel-french-door-refrigerator-modern-kitchen-appliance_84443-34725.jpg?ga=GA1.1.1997722858.1737911527&semt=ais_hybrid",
      "ratings": 0,
      "specifications": {
        "Capacity": "450L",
        "Cooling System": "Smart Inverter",
        "Energy Rating": "5 Star"
      },
      "reviews": []
    },
    {
      "name": "UltraBook X1 Pro",
      "description": "High-performance laptop for professionals and gamers.",
      "price": 95000,
      "category": "laptop",
      "brand": "UltraBook",
      "stocks": 9,
      "image": "https://img.freepik.com/free-vector/laptop-cartoon-2_78370-509.jpg?ga=GA1.1.1997722858.1737911527&semt=ais_hybrid",
      "ratings": 0,
      "specifications": {
        "Processor": "Intel Core i9",
        "RAM": "32GB",
        "Storage": "1TB SSD"
      },
      "reviews": []
    },
    {
      "name": "GamerX ROG Zephyrus",
      "description": "Premium gaming laptop with RTX 4080 and high refresh rate display.",
      "price": 180000,
      "category": "laptop",
      "brand": "ASUS ROG",
      "stocks": 6,
      "image": "https://img.freepik.com/free-photo/open-modern-laptop-with-white-screen-white-desk-against-concrete-wall_23-2148041872.jpg?ga=GA1.1.1997722858.1737911527&semt=ais_hybrid",
      "ratings": 0,
      "specifications": {
        "Processor": "AMD Ryzen 9",
        "RAM": "64GB",
        "Storage": "2TB SSD"
      },
      "reviews": []
    },
    {
      "name": "DolbyX 5.1 Home Theater",
      "description": "Immersive home theater system with surround sound.",
      "price": 35000,
      "category": "audio video",
      "brand": "DolbyX",
      "stocks": 10,
      "image": "https://img.freepik.com/free-psd/stereo-speakers-black-base-modern-audio-system-black-design_632498-54270.jpg?ga=GA1.1.1997722858.1737911527&semt=ais_hybrid",
      "ratings": 0,
      "specifications": {
        "Speaker Configuration": "5.1",
        "Power Output": "1000W",
        "Connectivity": "Bluetooth, HDMI, Optical"
      },
      "reviews": []
    },
    {
      "name": "SoundBlast Wireless Speaker",
      "description": "Portable Bluetooth speaker with deep bass and 24-hour battery life.",
      "price": 15000,
      "category": "audio video",
      "brand": "SoundBlast",
      "stocks": 20,
      "image": "https://img.freepik.com/free-vector/home-cinema-interior-with-round-table_1284-20540.jpg?ga=GA1.1.1997722858.1737911527&semt=ais_hybrid",
      "ratings": 0,
      "specifications": {
        "Battery Life": "24 Hours",
        "Connectivity": "Bluetooth 5.0",
        "Waterproof": "IPX7"
      },
      "reviews": []
    },
    {
      "name": "ChefPro Mixer Grinder",
      "description": "Powerful 750W mixer grinder with stainless steel jars.",
      "price": 5000,
      "category": "kitchen appliances",
      "brand": "ChefPro",
      "stocks": 25,
      "image": "https://img.freepik.com/free-photo/metal-food-blender-close-up-with-fresh-exotic-tropic-fruits-it-kitchen-background-with-empty-space-blender-wooden-table-kitchen_639032-170.jpg?ga=GA1.1.1997722858.1737911527&semt=ais_hybrid",
      "ratings": 0,
      "specifications": {
        "Power": "750W",
        "Jars": "3 Stainless Steel Jars",
        "Speed Settings": "3"
      },
      "reviews": []
    },
    {
      "name": "SmartOven Convection Microwave",
      "description": "Multi-functional microwave oven with grill and convection modes.",
      "price": 15000,
      "category": "kitchen appliances",
      "brand": "SmartOven",
      "stocks": 18,
      "image": "https://img.freepik.com/free-vector/microwave-oven-with-light-inside-isolated-white-background-kitchen-appliances_134830-658.jpg?ga=GA1.1.1997722858.1737911527&semt=ais_hybrid",
      "ratings": 0,
      "specifications": {
        "Capacity": "30L",
        "Functions": "Grill, Convection, Microwave",
        "Touch Control": "Yes"
      },
      "reviews": []
    },
        {
          "name": "WindFlow Window AC 1 Ton",
          "description": "Compact and energy-efficient window AC for small rooms.",
          "price": 35000,
          "category": "air conditioner",
          "brand": "WindFlow",
          "stocks": 12,
          "image": "https://img.freepik.com/free-photo/air-conditioner-mounted-white-wall_53876-128235.jpg?ga=GA1.1.1997722858.1737911527&semt=ais_hybrid",
          "ratings": 0,
          "specifications": {
            "Capacity": "1 Ton",
            "Energy Rating": "3 Star",
            "Cooling Technology": "Non-Inverter"
          },
          "reviews": []
        },
        {
          "name": "SuperCool Tower AC",
          "description": "Tall and powerful air conditioner for larger spaces.",
          "price": 85000,
          "category": "air conditioner",
          "brand": "SuperCool",
          "stocks": 6,
          "image": "https://img.freepik.com/free-vector/air-conditioner-with-cold-wind-remote-control_107791-2881.jpg?ga=GA1.1.1997722858.1737911527&semt=ais_hybrid",
          "ratings": 0,
          "specifications": {
            "Capacity": "2.5 Ton",
            "Energy Rating": "5 Star",
            "Cooling Technology": "Smart Inverter"
          },
          "reviews": []
        },
        {
          "name": "OnePlus 12 Pro",
          "description": "Flagship Android phone with powerful camera and performance.",
          "price": 90000,
          "category": "mobile",
          "brand": "OnePlus",
          "stocks": 10,
          "image": "https://img.freepik.com/free-vector/triple-camera-black-smartphone-concept-mockup_1017-19784.jpg?ga=GA1.1.1997722858.1737911527&semt=ais_hybrid",
          "ratings": 0,
          "specifications": {
            "Display": "6.7 inch Fluid AMOLED",
            "Processor": "Snapdragon 8 Gen 3",
            "Battery": "5000mAh"
          },
          "reviews": []
        },
        {
          "name": "Google Pixel 8",
          "description": "Google's premium phone with AI-powered photography.",
          "price": 80000,
          "category": "mobile",
          "brand": "Google",
          "stocks": 9,
          "image": "https://img.freepik.com/free-vector/mobile-phones-illustration_1319-183.jpg?ga=GA1.1.1997722858.1737911527&semt=ais_hybrid",
          "ratings": 0,
          "specifications": {
            "Display": "6.3 inch OLED",
            "Processor": "Google Tensor G3",
            "Battery": "4800mAh"
          },
          "reviews": []
        },
        {
          "name": "Samsung Side-by-Side Refrigerator",
          "description": "Large fridge with multi-zone cooling and smart features.",
          "price": 120000,
          "category": "refrigerator",
          "brand": "Samsung",
          "stocks": 4,
          "image": "https://img.freepik.com/free-psd/sleek-stainless-steel-french-door-refrigerator_632498-25850.jpg?ga=GA1.1.1997722858.1737911527&semt=ais_hybrid",
          "ratings": 0,
          "specifications": {
            "Capacity": "600L",
            "Cooling System": "Multi-Zone",
            "Energy Rating": "5 Star"
          },
          "reviews": []
        },
        {
          "name": "LG Smart Convertible Refrigerator",
          "description": "Convertible fridge with energy-saving features.",
          "price": 65000,
          "category": "refrigerator",
          "brand": "LG",
          "stocks": 6,
          "image": "https://img.freepik.com/free-vector/refridgerator-with-opened-door_1308-91570.jpg?ga=GA1.1.1997722858.1737911527&semt=ais_hybrid",
          "ratings": 0,
          "specifications": {
            "Capacity": "450L",
            "Cooling System": "Smart Inverter",
            "Energy Rating": "4 Star"
          },
          "reviews": []
        },
        {
          "name": "MacBook Pro M3",
          "description": "Apple’s latest powerful laptop with M3 chip.",
          "price": 220000,
          "category": "laptop",
          "brand": "Apple",
          "stocks": 7,
          "image": "https://img.freepik.com/free-photo/halfclosed-laptop-wooden-table-screen-glows-with-colors_169016-33669.jpg?ga=GA1.1.1997722858.1737911527&semt=ais_hybrid",
          "ratings": 0,
          "specifications": {
            "Processor": "Apple M3",
            "RAM": "16GB",
            "Storage": "1TB SSD"
          },
          "reviews": []
        },
        {
          "name": "Dell XPS 15",
          "description": "Sleek and powerful laptop for professionals.",
          "price": 150000,
          "category": "laptop",
          "brand": "Dell",
          "stocks": 8,
          "image": "https://img.freepik.com/free-vector/laptop-coloured_78370-510.jpg?ga=GA1.1.1997722858.1737911527&semt=ais_hybrid",
          "ratings": 0,
          "specifications": {
            "Processor": "Intel Core i7",
            "RAM": "32GB",
            "Storage": "1TB SSD"
          },
          "reviews": []
        },
        {
          "name": "Sony 7.1 Home Theater System",
          "description": "Premium surround sound with Dolby Atmos support.",
          "price": 75000,
          "category": "audio video",
          "brand": "Sony",
          "stocks": 5,
          "image": "https://img.freepik.com/free-vector/realistic-black-speaker-group-background_52683-10363.jpg?ga=GA1.1.1997722858.1737911527&semt=ais_hybrid",
          "ratings": 0,
          "specifications": {
            "Speaker Configuration": "7.1",
            "Power Output": "1200W",
            "Connectivity": "Bluetooth, Wi-Fi, Optical"
          },
          "reviews": []
        },
        {
          "name": "Bose SoundLink Revolve",
          "description": "Portable 360-degree speaker with deep bass.",
          "price": 25000,
          "category": "audio video",
          "brand": "Bose",
          "stocks": 12,
          "image": "https://img.freepik.com/free-vector/flat-black-speaker-background_23-2148154690.jpg?ga=GA1.1.1997722858.1737911527&semt=ais_hybrid",
          "ratings": 0,
          "specifications": {
            "Battery Life": "16 Hours",
            "Connectivity": "Bluetooth 5.0",
            "Waterproof": "IPX4"
          },
          "reviews": []
        },
        {
          "name": "Prestige Induction Cooktop",
          "description": "Smart induction stove with multiple cooking modes.",
          "price": 4000,
          "category": "kitchen appliances",
          "brand": "Prestige",
          "stocks": 15,
          "image": "https://img.freepik.com/free-vector/realistic-vector-icon-illustration-kitchen-appliance-electric-induction-cooking-surface-c_134830-2428.jpg?ga=GA1.1.1997722858.1737911527&semt=ais_hybrid",
          "ratings": 0,
          "specifications": {
            "Power": "2000W",
            "Modes": "Multiple Cooking Modes",
            "Touch Control": "Yes"
          },
          "reviews": []
        },
        {
          "name": "Philips Air Fryer",
          "description": "Healthy cooking with rapid air technology.",
          "price": 12000,
          "category": "kitchen appliances",
          "brand": "Philips",
          "stocks": 10,
          "image": "https://img.freepik.com/free-photo/close-up-air-fryer_23-2151723525.jpg?ga=GA1.1.1997722858.1737911527&semt=ais_hybrid",
          "ratings": 0,
          "specifications": {
            "Capacity": "4L",
            "Technology": "Rapid Air",
            "Temperature Control": "Yes"
          },
          "reviews": []
        }
      
  ]
  addProduct()
  