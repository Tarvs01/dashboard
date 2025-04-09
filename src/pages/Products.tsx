import { useState, ChangeEvent, FormEvent } from 'react'

type Categories = "Foodstuffs" | "Cosmetics" | "Appliances" | "Accessories";
interface ProductType{
  name: string,
  price: number,
  tags: string[],
  category: Categories,
  stock: number,
  image: string,
  id: number
}

function Products() {
  const categories: Categories[] = ["Accessories", "Appliances", "Cosmetics", "Foodstuffs"];
  const baseProducts : ProductType[] = [
    {
      name: "Cosmetic Box",
      price: 80,
      tags: ["cosmetic", "beauty", "container", "art"],
      category: "Cosmetics",
      stock: 15,
      image: "../src/assets/images/product-images/box.jpg",
      id: 0
    },
    {
      name: "Bread",
      price: 5,
      tags: ["foodstuff", "baked", "flour", "cheap"],
      category: "Foodstuffs",
      stock: 4000,
      image: "../src/assets/images/product-images/bread.jpg",
      id: 1
    },
    {
      name: "Camera",
      price: 400,
      tags: ["camon", "photography", "photo", "electronics", "images"],
      category: "Appliances",
      stock: 500,
      image: "../src/assets/images/product-images/camera.jpg",
      id: 2
    },
    {
      name: "Cheese",
      price: 50,
      tags: ["milk", "diary", "lactose", "fresh", "farm"],
      category: "Foodstuffs",
      stock: 395,
      image: "../src/assets/images/product-images/cheese.jpg",
      id: 3
    },
    {
      name: "Cherries",
      price: 20,
      tags: ["fruit", "farm", "fresh", "red", "small"],
      category: "Foodstuffs",
      stock: 2000,
      image: "../src/assets/images/product-images/cherries.jpg",
      id: 4
    },
    {
      name: "Coffee",
      price: 15,
      tags: ["drink", "caffine", "beans", "energy"],
      category: "Foodstuffs",
      stock: 609,
      image: "../src/assets/images/product-images/coffee.jpg",
      id: 5
    },
    {
      name: "Cupcake",
      price: 5,
      tags: ["muffin", "cake", "baked", "cup"],
      category: "Foodstuffs",
      stock: 200,
      image: "../src/assets/images/product-images/cupcake.jpg",
      id: 6
    },
    {
      name: "Eyeglass",
      price: 30,
      tags: ["glasses", "eye", "fashion"],
      category: "Accessories",
      stock: 248,
      image: "../src/assets/images/product-images/glasses.jpg",
      id: 7
    },
    {
      name: "Lip Gloss",
      price: 19,
      tags: ["shiny", "lipstick", "lips", "fashion"],
      category: "Cosmetics",
      stock: 600,
      image: "../src/assets/images/product-images/lip-gloss.jpg",
      id: 8
    },
    {
      name: "Perfume",
      price: 300,
      tags: ["scent", "fashion", "smell", "aroma", "beauty"],
      category: "Cosmetics",
      stock: 156,
      image: "../src/assets/images/product-images/perfume.jpg",
      id: 9
    },
    {
      name: "Potato",
      price: 25,
      tags: ["root", "tuber", "farm", "crop", "food"],
      category: "Foodstuffs",
      stock: 1047,
      image: "../src/assets/images/product-images/potato.jpg",
      id: 10
    },
    {
      name: "Wristwatch",
      price: 250,
      tags: ["fashion", "time", "clock", "hand"],
      category: "Accessories",
      stock: 497,
      image: "../src/assets/images/product-images/watch.jpg",
      id: 11
    },
    {
      name: "Wheelchair",
      price: 1500,
      tags: ["paralyzed", "medical", "legs"],
      category: "Appliances",
      stock: 0,
      image: "../src/assets/images/product-images/wheelchair.jpg",
      id: 12
    },
    {
      name: "Lobster",
      price: 470,
      tags: ["shellfood", "luxury", "shellfish"],
      category: "Foodstuffs",
      stock: 259,
      image: "../src/assets/images/product-images/lobster.jpg",
      id: 13
    },
    {
      name: "Almond Nuts",
      price: 50,
      tags: ["nuts", "fruit", "tree"],
      category: "Foodstuffs",
      stock: 9800,
      image: "../src/assets/images/product-images/almond.jpg",
      id: 14
    },
    {
      name: "Toaster",
      price: 140,
      tags: ["Kitchen", "electronic", "utensil"],
      category: "Appliances",
      stock: 390,
      image: "../src/assets/images/product-images/toaster.jpg",
      id: 15
    },
    {
      name: "Strawberries",
      price: 10,
      tags: ["fruit", "sweet", "fresh", "red"],
      category: "Foodstuffs",
      stock: 2050,
      image: "../src/assets/images/product-images/strawberries.jpg",
      id: 16
    },
    {
      name: "Vacuum Cleaner",
      price: 600,
      tags: ["health", "cleaner", "electronic"],
      category: "Appliances",
      stock: 450,
      image: "../src/assets/images/product-images/vacuum_cleaner.jpg",
      id: 17
    },
    {
      name: "Golden Ring",
      price: 4500,
      tags: ["jewellery", "gold", "luxury"],
      category: "Accessories",
      stock: 87,
      image: "../src/assets/images/product-images/ring.jpg",
      id: 18
    },
    {
      name: "Carrot",
      price: 13,
      tags: ["vegetable", "fresh", "farm", "orange"],
      category: "Foodstuffs",
      stock: 3407,
      image: "../src/assets/images/product-images/carrot.jpg",
      id: 19
    },
    {
      name: "Coconut",
      price: 25,
      tags: ["fruit", "nut", "tree", "fibre"],
      category: "Foodstuffs",
      stock: 1200,
      image: "../src/assets/images/product-images/coconut.jpg",
      id: 20
    },
    {
      name: "Straw Hat",
      price: 200,
      tags: ["hat", "fashion", "headgear"],
      category: "Accessories",
      stock: 95,
      image: "../src/assets/images/product-images/hat.jpg",
      id: 21
    },
    {
      name: "Lipstick",
      price: 150,
      tags: ["beauty", "pink"],
      category: "Cosmetics",
      stock: 58,
      image: "../src/assets/images/product-images/lipstick.jpg",
      id: 22
    },
    {
      name: "Burger",
      price: 13,
      tags: ["fast food", "junk", "calorie", "meat"],
      category: "Foodstuffs",
      stock: 1008,
      image: "../src/assets/images/product-images/burger.jpg",
      id: 23
    },
    {
      name: "Tomato",
      price: 40,
      tags: ["fruit", "red", "fresh", "farm"],
      category: "Foodstuffs",
      stock: 980,
      image: "../src/assets/images/product-images/tomato.jpg",
      id: 24
    },
    {
      name: "Brown Belt",
      price: 350,
      tags: ["leather", "brown", "fashion", "men"],
      category: "Accessories",
      stock: 496,
      image: "../src/assets/images/product-images/brown_belt.jpg",
      id: 25
    },
    {
      name: "Zucchini",
      price: 30,
      tags: ["vegetable", "plant", "yellow", "fresh"],
      category: "Foodstuffs",
      stock: 900,
      image: "../src/assets/images/product-images/zucchini.jpg",
      id: 26
    }, 
    {
      name: "Tote Bag",
      price: 45,
      tags: ["handbag", "fashion", "light"],
      category: "Accessories",
      stock: 690,
      image: "../src/assets/images/product-images/tote.jpg",
      id: 27
    },
    {
      name: "Brown Rice",
      price: 60,
      tags: ["grain", "crop", "farm"],
      category: "Foodstuffs",
      stock: 450,
      image: "../src/assets/images/product-images/brown_rice.jpg",
      id: 28
    },
    {
      name: "Sandwich Maker",
      price: 150,
      tags: ["electronic", "toaster", "bread"],
      category: "Appliances",
      stock: 300,
      image: "../src/assets/images/product-images/sandwich_maker.jpg",
      id: 29
    },
    {
      name: "Serrano Pepper",
      price: 29,
      tags: ["spice", "farm", "vegetable", "fruit", "green"],
      category: "Foodstuffs",
      stock: 680,
      image: "../src/assets/images/product-images/serrano.jpg",
      id: 30
    },
    {
      name: "Silver Bangles",
      price: 300,
      tags: ["silver", "bracelet", "jewellery"],
      category: "Accessories",
      stock: 570,
      image: "../src/assets/images/product-images/bangle.jpg",
      id: 31
    },
    {
      name: "Lemon",
      price: 6,
      tags: ["fruit", "sour", "tree", "citrus"],
      category: "Foodstuffs",
      stock: 900,
      image: "../src/assets/images/product-images/lemon.jpg",
      id: 32
    },
    {
      name: "Neon Shoes",
      price: 500,
      tags: ["footwear", "lights", "fashion", "luxury"],
      category: "Accessories",
      stock: 700,
      image: "../src/assets/images/product-images/neon_shoe.jpg",
      id: 33
    },
    {
      name: "Habanero Pepper",
      price: 50,
      tags: ["fruit", "vegetable", "spice", "orange", "farm"],
      category: "Foodstuffs",
      stock: 1500,
      image: "../src/assets/images/product-images/habanero.jpg",
      id: 34
    },
    {
      name: "Black Belt",
      price: 510,
      tags: ["leather", "fashion", "buckle"],
      category: "Accessories",
      stock: 690,
      image: "../src/assets/images/product-images/black_belt.jpg",
      id: 35
    },
    {
      name: "Radish",
      price: 36,
      tags: ["tuber", "vegetable", "root", "red"],
      category: "Foodstuffs",
      stock: 1704,
      image: "../src/assets/images/product-images/radish.jpg",
      id: 36
    },
    {
      name: "Beauty Soap",
      price: 270,
      tags: ["bath", "clean", "beauty", "bubbles"],
      category: "Cosmetics",
      stock: 900,
      image: "../src/assets/images/product-images/soap.jpg",
      id: 37
    },
    {
      name: "Banana",
      price: 30,
      tags: ["fruit", "berry", "farm", "sweet"],
      category: "Foodstuffs",
      stock: 1200,
      image: "../src/assets/images/product-images/banana.jpg",
      id: 38
    },
    {
      name: "Shouzhu Bracelet",
      price: 250,
      tags: ["beads", "chinese"],
      category: "Accessories",
      stock: 590,
      image: "../src/assets/images/product-images/shouzhu.jpg",
      id: 39
    },
    {
      name: "Pumpkin",
      price: 100,
      tags: ["vegetable", "farm", "orange"],
      category: "Foodstuffs",
      stock: 700,
      image: "../src/assets/images/product-images/pumpkin.jpg",
      id: 40
    },
    {
      name: "Scarf",
      price: 150,
      tags: ["cloth", "luxury", "fashion"],
      category: "Accessories",
      stock: 430,
      image: "../src/assets/images/product-images/scarf.jpg",
      id: 41
    },
    {
      name: "Walnut",
      price: 25,
      tags: ["nuts", "fruit", "plant", "farm"],
      category: "Foodstuffs",
      stock: 5000,
      image: "../src/assets/images/product-images/walnut.jpg",
      id: 42
    },
    {
      name: "Electric Iron",
      price: 200,
      tags: ["electronic", "press"],
      category: "Appliances",
      stock: 390,
      image: "../src/assets/images/product-images/electric_iron.jpg",
      id: 43
    },
    {
      name: "Potato Chips",
      price: 20,
      tags: ["snack", "potato", "junk", "fried"],
      category: "Foodstuffs",
      stock: 3600,
      image: "../src/assets/images/product-images/potato_chips.jpg",
      id: 44
    },
    {
      name: "Handbag",
      price: 350,
      tags: ["fashion", "leather", "women"],
      category: "Accessories",
      stock: 680,
      image: "../src/assets/images/product-images/handbag.jpg",
      id: 45
    },
    {
      name: "Dates",
      price: 10,
      tags: ["fruit", "tree", "orange"],
      category: "Foodstuffs",
      stock: 2900,
      image: "../src/assets/images/product-images/dates.jpg",
      id: 46
    },
    {
      name: "Blender",
      price: 200,
      tags: ["electronic", "food", "sharp"],
      category: "Appliances",
      stock: 800,
      image: "../src/assets/images/product-images/blender.jpg",
      id: 47
    },
    {
      name: "Honey",
      price: 210,
      tags: ["bees", "sweet", "orange", "natural"],
      category: "Foodstuffs",
      stock: 310,
      image: "../src/assets/images/product-images/honey.jpg",
      id: 48
    },
    {
      name: "Sling Bag",
      price: 150,
      tags: ["leather", "fashion"],
      category: "Accessories",
      stock: 550,
      image: "../src/assets/images/product-images/sling_bag.jpg",
      id: 49
    },
    {
      name: "Roulade",
      price: 50,
      tags: ["bread", "pastry", "dough"],
      category: "Foodstuffs",
      stock: 1400,
      image: "../src/assets/images/product-images/roulade.jpg",
      id: 50
    },
    {
      name: "Makeup Kit",
      price: 400,
      tags: ["fashion", "beauty", "pink", "luxury"],
      category: "Cosmetics",
      stock: 300,
      image: "../src/assets/images/product-images/makeup_kit.jpg",
      id: 51
    },
    {
      name: "Meat",
      price: 550,
      tags: ["chicken", "beef", "pork"],
      category: "Foodstuffs",
      stock: 962,
      image: "../src/assets/images/product-images/meat.jpg",
      id: 52
    },
    {
      name: "Earring",
      price: 660,
      tags: ["fashion", "luxury", "jewellery"],
      category: "Accessories",
      stock: 1234,
      image: "../src/assets/images/product-images/earring.jpg",
      id: 53
    },
    {
      name: "Cashew Nut",
      price: 11,
      tags: ["nuts", "fruit", "tree", "farm"],
      category: "Foodstuffs",
      stock: 6800,
      image: "../src/assets/images/product-images/cashew_nut.jpg",
      id: 54
    },
    {
      name: "Electric Fan",
      price: 250,
      tags: ["electronic", "coolant", "fresh air"],
      category: "Appliances",
      stock: 2790,
      image: "../src/assets/images/product-images/fan.jpg",
      id: 55
    },
    {
      name: "Bell Pepper",
      price: 70,
      tags: ["fruit", "vegetable", "spice", "fresh"],
      category: "Foodstuffs",
      stock: 910,
      image: "../src/assets/images/product-images/bell_pepper.jpg",
      id: 56
    },
    {
      name: "Bow Tie",
      price: 120,
      tags: ["clothing", "corporate", "fashion"],
      category: "Accessories",
      stock: 700,
      image: "../src/assets/images/product-images/bowtie.jpg",
      id: 57
    },
    {
      name: "Blueberry",
      price: 9,
      tags: ["fruit", "blue", "berry", "black", "plant"],
      category: "Foodstuffs",
      stock: 4902,
      image: "../src/assets/images/product-images/blueberry.jpg",
      id: 58
    },
    {
      name: "Phone Casing",
      price: 60,
      tags: ["iphone", "rubber", "cover"],
      category: "Accessories",
      stock: 1040,
      image: "../src/assets/images/product-images/casing.jpg",
      id: 59
    },
    {
      name: "Hazelnut",
      price: 15,
      tags: ["fruit", "nut", "brown"],
      category: "Foodstuffs",
      stock: 3500,
      image: "../src/assets/images/product-images/hazelnut.jpg",
      id: 60
    },
    {
      name: "Hairdryer",
      price: 250,
      tags: ["electronic", "heat", "hair"],
      category: "Appliances",
      stock: 580,
      image: "../src/assets/images/product-images/hairdryer.jpg",
      id: 61
    },
    {
      name: "Black Beans",
      price: 37,
      tags: ["beans", "grain", "plant"],
      category: "Foodstuffs",
      stock: 4200,
      image: "../src/assets/images/product-images/black_beans.jpg",
      id: 62
    },
    {
      name: "Electric Whisk",
      price: 230,
      tags: ["electronic", "mixer", "kitchen"],
      category: "Appliances",
      stock: 490,
      image: "../src/assets/images/product-images/whisk.jpg",
      id: 63
    },
    {
      name: "Pistachio",
      price: 10,
      tags: ["nuts", "plant", "fruit"],
      category: "Foodstuffs",
      stock: 9800,
      image: "../src/assets/images/product-images/pistachio.jpg",
      id: 64
    },
    {
      name: "Face Powder",
      price: 170,
      tags: ["beauty", "organic"],
      category: "Cosmetics",
      stock: 430,
      image: "../src/assets/images/product-images/face_powder.jpg",
      id: 65
    },
    {
      name: "Artichoke",
      price: 45,
      tags: ["vegetable", "plant", "fresh"],
      category: "Foodstuffs",
      stock: 940,
      image: "../src/assets/images/product-images/artichoke.jpg",
      id: 66
    },
    {
      name: "Boombox",
      price: 670,
      tags: ["music", "loud", "bass", "electronic"],
      category: "Appliances",
      stock: 2600,
      image: "../src/assets/images/product-images/boombox.png",
      id: 67
    },
    {
      name: "Garlic",
      price: 50,
      tags: ["white", "vegetable", "spice"],
      category: "Foodstuffs",
      stock: 3280,
      image: "../src/assets/images/product-images/garlic.jpg",
      id: 68
    },
    {
      name: "Clarifying Lotion",
      price: 375,
      tags: ["beauty", "skin", "cream"],
      category: "Cosmetics",
      stock: 880,
      image: "../src/assets/images/product-images/cream.jpg",
      id: 69
    },
    {
      name: "Wheat",
      price: 24,
      tags: ["grain", "plant", "crop", "brown"],
      category: "Foodstuffs",
      stock: 5300,
      image: "../src/assets/images/product-images/wheat.jpg",
      id: 70
    },
    {
      name: "Black Wallet",
      price: 180,
      tags: ["leather", "container", "safety"],
      category: "Accessories",
      stock: 402,
      image: "../src/assets/images/product-images/black_wallet.jpg",
      id: 71
    },
    {
      name: "White Beans",
      price: 30,
      tags: ["grain", "plant", "legume"],
      category: "Foodstuffs",
      stock: 8200,
      image: "../src/assets/images/product-images/white_beans.jpg",
      id: 72
    },
    {
      name: "Makeup Brush",
      price: 150,
      tags: ["brush", "beauty", "facial"],
      category: "Cosmetics",
      stock: 710,
      image: "../src/assets/images/product-images/makeup_brushes.jpg",
      id: 73
    },
    {
      name: "Unripe Figs",
      price: 28,
      tags: ["fruit", "green", "plant", "fresh"],
      category: "Foodstuffs",
      stock: 1300,
      image: "../src/assets/images/product-images/unripe_figs.jpg",
      id: 74
    },
    {
      name: "Cooking Utensils",
      price: 420,
      tags: ["spoon", "fork", "wood", "brown"],
      category: "Appliances",
      stock: 499,
      image: "../src/assets/images/product-images/cooking_utensils.jpg",
      id: 75
    },
    {
      name: "Lentils",
      price: 18,
      tags: ["grain", "plant", "legume"],
      category: "Foodstuffs",
      stock: 4920,
      image: "../src/assets/images/product-images/lentil.jpg",
      id: 76
    },
    {
      name: "Cigar",
      price: 90,
      tags: ["smoke", "cigarette", "tobacco"],
      category: "Accessories",
      stock: 870,
      image: "../src/assets/images/product-images/cigar.jpg",
      id: 77
    },
    {
      name: "Black Pepper",
      price: 16,
      tags: ["spice", "black", "vegetable", "fruit"],
      category: "Foodstuffs",
      stock: 5070,
      image: "../src/assets/images/product-images/black_pepper.jpg",
      id: 78
    },
    {
      name: "Blush",
      price: 400,
      tags: ["beauty", "powder", "facial"],
      category: "Cosmetics",
      stock: 630,
      image: "../src/assets/images/product-images/blush.jpg",
      id: 79
    },
    {
      name: "Green Beans",
      price: 32,
      tags: ["green", "grain", "legume"],
      category: "Foodstuffs",
      stock: 3200,
      image: "../src/assets/images/product-images/green_beans.jpg",
      id: 80
    },
    {
      name: "Brown Wallet",
      price: 290,
      tags: ["leather", "safety", "container"],
      category: "Accessories",
      stock: 598,
      image: "../src/assets/images/product-images/brown_wallet.jpg",
      id: 81
    },
    {
      name: "Zircon Necklace",
      price: 4800,
      tags: ["jewellery", "luxury", "chain"],
      category: "Accessories",
      stock: 600,
      image: "../src/assets/images/product-images/zircon.jpg",
      id: 82
    },
    {
      name: "Measuring Pan",
      price: 130,
      tags: ["kitchen", "flour", "baking"],
      category: "Appliances",
      stock: 840,
      image: "../src/assets/images/product-images/measures.jpg",
      id: 83
    },
    {
      name: "Purse",
      price: 300,
      tags: ["women", "bag", "red", "leather"],
      category: "Accessories",
      stock: 820,
      image: "../src/assets/images/product-images/purse.jpg",
      id: 84
    },
    {
      name: "Bath Balls",
      price: 340,
      tags: ["mint", "bath", "beauty", "soap"],
      category: "Cosmetics",
      stock: 1290,
      image: "../src/assets/images/product-images/bath_balls.jpg",
      id: 85
    },
    {
      name: "Buttons",
      price: 15,
      tags: ["cloth", "connector"],
      category: "Accessories",
      stock: 3600,
      image: "../src/assets/images/product-images/buttons.jpg",
      id: 86
    },
    {
      name: "Fragrance Oil",
      price: 450,
      tags: ["perfume", "beauty", "luxury"],
      category: "Cosmetics",
      stock: 374,
      image: "../src/assets/images/product-images/fragrance.jpg",
      id: 87
    },
    {
      name: "Diamond Earring",
      price: 8200,
      tags: ["expensive", "luxury", "jewellery", "fashion"],
      category: "Accessories",
      stock: 10,
      image: "../src/assets/images/product-images/diamond.jpg",
      id: 88
    },
    {
      name: "Refrigerator",
      price: 500,
      tags: ["coolant", "electronic", "kitchen"],
      category: "Appliances",
      stock: 180,
      image: "../src/assets/images/product-images/refrigerator.jpg",
      id: 89
    },
    {
      name: "Female Shoes",
      price: 280,
      tags: ["footwear", "black", "fashion"],
      category: "Accessories",
      stock: 630,
      image: "../src/assets/images/product-images/female_shoes.jpg",
      id: 90
    },
    {
      name: "Mascara",
      price: 340,
      tags: ["powder", "facial", "colors"],
      category: "Cosmetics",
      stock: 90,
      image: "../src/assets/images/product-images/mascara.jpg",
      id: 91
    },
    {
      name: "Multipurpose Cooker",
      price: 400,
      tags: ["electronic", "heat", "stove"],
      category: "Appliances",
      stock: 0,
      image: "../src/assets/images/product-images/stove.jpg",
      id: 92
    },
    {
      name: "Lux Scent",
      price: 800,
      tags: ["perfume", "fragrance", "luxury", "beauty"],
      category: "Cosmetics",
      stock: 389,
      image: "../src/assets/images/product-images/lux_scent.jpg",
      id: 93
    }
  ];

  const [allProducts, setAllProducts] = useState<ProductType[]>(baseProducts);
  const [displayedProducts, setDisplayedProducts] = useState<ProductType[]>(allProducts);
  const [filter, setFilter] = useState<Categories | "All">("All");
  const [openProductModal, setOpenProductModal] = useState("");
  const [singleProduct, setSingleProduct] = useState<ProductType>({
    name: "",
    price: 0,
    tags: [],
    category: categories[0],
    stock: 0,
    image: "",
    id: (allProducts.slice(-1)[0]?.id + 1) || 0
  });
  const [currentTag, setCurrentTag] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [formErrors, setFormErrors] = useState({
    name: "",
    image: ""
  })

  function handleCategorySelectChange(e: ChangeEvent<HTMLSelectElement>){
    if(e.target.value === "All"){
      setDisplayedProducts(allProducts);
      setFilter("All");
    }
    else{
      let tempProducts = allProducts.filter((product) => product.category === e.target.value);
      setDisplayedProducts(tempProducts);
      setFilter(e.target.value as Categories); //Had no other choice. Could only typecast to fix the type issue.
    }
  }

  function handleEditCategorySelectChange(e: ChangeEvent<HTMLSelectElement>){
    setSingleProduct({...singleProduct, category: e.target.value as Categories});
  }

  function handleInputChange(e: FormEvent<HTMLInputElement>, prop: string){
    if(prop === "name"){
      if(e.currentTarget.value.trim() !== ""){
        setFormErrors({...formErrors, name: ""});
        setSingleProduct({...singleProduct, name: e.currentTarget.value});
      }
      else{
        setSingleProduct({...singleProduct, name: ""});
      }
    }
    else if(prop === "price"){
      let tempPrice = Number(e.currentTarget.value);
      setSingleProduct({...singleProduct, price: tempPrice})
    }
    else if(prop === "stock"){
      let tempStock = Number(e.currentTarget.value);
      setSingleProduct({...singleProduct, stock: tempStock});
    }
    else if(prop === "tag"){
      if(e.currentTarget.value.trim() !== ""){
        setCurrentTag(e.currentTarget.value);
      }
      else{
        setCurrentTag("");
      }
    }
    else if(prop === "image"){
      setFormErrors({...formErrors, image: ""});
      let reader = new FileReader();
      reader.onloadend = () => {
        let newImg = typeof reader.result === "string" ? reader.result : ""; //Just to ensure that what is gotten back is a string and not null or ArrayBuffer
        setSingleProduct({...singleProduct, image: newImg})
      };

      let file = e.currentTarget.files ? e.currentTarget.files[0] : null;
      if(file){
        reader.readAsDataURL(file);
      }
      else{
        setSingleProduct({...singleProduct, image: ""});
      }
      console.log(e.currentTarget.files);
    }
  }

  function addTag(){
    if(currentTag !== ""){
      setSingleProduct({...singleProduct, tags: [...singleProduct.tags, currentTag]});
      setCurrentTag("");
    }
  }

  function deleteTag(tagID: number){
    let newTags = singleProduct.tags.filter((_, index) => tagID !== index);
    setSingleProduct({...singleProduct, tags: newTags});
  }

  function setProductChange(state: number | undefined = undefined){
    if(state == undefined){
      let currentState: ProductType = {
        name: "",
        price: 0,
        tags: [],
        category: categories[0],
        stock: 0,
        image: "",
        id: (allProducts.slice(-1)[0]?.id + 1) || 0
      };
      setSingleProduct(currentState);
    }
    else{
      let currentState = allProducts.filter((product) => product.id === state)[0];
      currentState = JSON.parse(JSON.stringify(currentState));
      setSingleProduct(currentState);
    }
  }

  function handleFormSubmit(e: FormEvent){
    e.preventDefault();
  }

  function addNewProduct(){
    if(singleProduct.name.trim() === ""){
      setFormErrors({...formErrors, name: "Enter a name"});
      return;
    }

    if(singleProduct.image.trim() === ""){
      setFormErrors({...formErrors, image: "Add an image"});
      return;
    }

    setFormErrors({name: "", image: ""});

    const tempSingleProduct: ProductType = JSON.parse(JSON.stringify(singleProduct));
    let tempAllProducts = [...allProducts, tempSingleProduct];
    setAllProducts(tempAllProducts);

    if(filter === "All"){
      setDisplayedProducts(tempAllProducts);
    }
    else{
      let tempDisplayedProducts = tempAllProducts.filter((prod) => prod.category === filter);
      setDisplayedProducts(tempDisplayedProducts);
    }

    setOpenProductModal("");
  }

  function editProduct(){
    if(singleProduct.name.trim() === ""){
      setFormErrors({...formErrors, name: "Enter a name"});
      return;
    }

    if(singleProduct.image.trim() === ""){
      setFormErrors({...formErrors, image: "Add an image"});
      return;
    }

    setFormErrors({name: "", image: ""});

    const tempProduct: ProductType = JSON.parse(JSON.stringify(singleProduct));
    let tempAllProducts = allProducts.map((product) => {
      if(product.id === tempProduct.id){
        return tempProduct;
      }
      else{
        return product;
      }
    });
    setAllProducts(tempAllProducts);

    if(filter === "All"){
      setDisplayedProducts(tempAllProducts);
    }
    else{
      let tempDisplayedProducts = tempAllProducts.filter((prod) => prod.category === filter);
      setDisplayedProducts(tempDisplayedProducts);
    }

    setOpenProductModal("");
  }

  function deleteProduct(productID: number){
    if(!confirm("Are you sure you want to delete this product")){
      return;
    }

    let tempAllProducts: ProductType[] = JSON.parse(JSON.stringify(allProducts));
    tempAllProducts = tempAllProducts.filter((prod) => prod.id !== productID);
    setAllProducts(tempAllProducts);

    if(filter === "All"){
      setDisplayedProducts(tempAllProducts);
    }
    else{
      let tempDisplayedProducts = tempAllProducts.filter((prod) => prod.category === filter);
      setDisplayedProducts(tempDisplayedProducts);
    }
  }

  function handleSearchChange(e: ChangeEvent<HTMLInputElement>){
    setSearchTerm(e.target.value);
    if(e.target.value.trim() !== ""){
      let searchString = e.target.value.trim();
      let matches = allProducts.filter((prod) => {
        if(prod.name.toLowerCase().match(new RegExp(searchString.toLowerCase()))){
          return true;
        }

        let tempState = false;
        prod.tags.map((tag) => {
          if(tag.toLowerCase().match(new RegExp(searchString.toLowerCase()))){
            tempState = true;
          }
        });

        return tempState;
      });

      setDisplayedProducts(matches);
    }
    else{
      setDisplayedProducts(allProducts);
    }
  }

  return (
    <div id='products-page'>
      {openProductModal && <div className="product-modal-cont">
        <form className="product-modal form-modal" onClick={(e) => e.stopPropagation()} onSubmit={handleFormSubmit}>
          <h2>{openProductModal === "new" ? "Add new product" : "Edit product"}</h2>
          <label htmlFor="name">Product Name</label>
          {formErrors.name && <p className='form-error'>{formErrors.name}</p>}
          <input type="text" name="name" id="name" required value={singleProduct.name} onInput={(e) => handleInputChange(e, "name")}/>

          <label htmlFor="category">Category</label>
          <select name="category" id="category" onChange={handleEditCategorySelectChange}>
            {
              categories.map((category, index) => {
                return <option key={index} value={category} selected={singleProduct.category === category}>{category}</option>
              })
            }
          </select>

          <p>Tags</p>
          <div className="tags-container">
            <div className="tags-cont">
              {
                singleProduct.tags.map((tag, index) => {
                  return <div key={index} className='single-tag'><span>{tag}</span><div onClick={() => deleteTag(index)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></div></div>
                })
              }
            </div>

            <div className="tags-input-cont">
              <input type="text" name="tags" id="tags" value={currentTag} onInput={(e) => handleInputChange(e, "tag")}/>
              <div role='button' onClick={addTag}>Add</div>
            </div>
          </div>

          <div className="nums-cont">
            <div>
              <label htmlFor="price">Price ($):</label>
              <input type="number" min={0} name="price" id="price" value={String(singleProduct.price)} onInput={(e) => handleInputChange(e, "price")}/>
            </div>

            <div>
              <label htmlFor="stock">Stock</label>
              <input type="number" min={0} name="stock" id="stock" value={String(singleProduct.stock)} onInput={(e) => handleInputChange(e, "stock")}/>
            </div>
          </div>

          <p>Images</p>
          {formErrors.image && <p className="form-error">{formErrors.image}</p>}
          <div className="form-image-cont">
            {singleProduct.image && <img src={singleProduct.image} alt="product image" />}
            <label htmlFor="image" className='image-upload-label'>
              <input type="file" name="image" required id="image" onChange={(e) => handleInputChange(e, "image")} />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128l-368 0zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39L296 392c0 13.3 10.7 24 24 24s24-10.7 24-24l0-134.1 39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
              <span>Upload</span>
            </label>
          </div>

          <div className="form-buttons">
            <button onClick={() => setOpenProductModal("")}>Close Form</button>
            <button onClick={openProductModal === "new" ? addNewProduct : editProduct}>Submit Form</button>
          </div>
        </form>
      </div>}

      <div className="products-header">
        <input type="text" name="product-search" id="product-search" placeholder='Enter search term' value={searchTerm} onInput={handleSearchChange}/>
        <select name="categories" id="categories" className="product-categories" onChange={handleCategorySelectChange}>
          <option value="All" selected>All</option>
          {
            categories.map((category, index) => {
              return <option value={category} key={index}>{category}</option>
            })
          }
        </select>
        <button onClick={() => {setOpenProductModal("new"); setProductChange()}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg><span>Add New</span></button>
      </div>
      
      {displayedProducts.length === 0 && <h2>No Product to show</h2>}
        <div className="products-cont">
          {
            displayedProducts.map((product) => {
              return <div key={product.id} className='product-cont'>
                <div className="product-img-cont">
                <img src={product.image} alt={`Picture of ${product.name}`} />
                </div>
                <div className="product-text-cont">
                  <h4>{product.name}</h4>
                  <p>${product.price}</p>
                  <p className='stock'>Stock: {product.stock > 0 ? product.stock : <span className='out-of-stock'>Out of stock</span>}</p>
                  <div className="product-action-cont">
                    <button onClick={() => {setProductChange(product.id) ;setOpenProductModal("edit")}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg><span>Edit</span></button>
                    <button onClick={() => deleteProduct(product.id)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg><span>Delete</span></button>
                  </div>
                </div>
              </div>
            })
          }
        </div>
    </div>
  )
}

export default Products