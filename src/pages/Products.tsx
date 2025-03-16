import { useState, ChangeEvent, FormEvent } from 'react'

type Categories = "Foodstuffs" | "Cosmetics" | "Appliances" | "Accessories"

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
      stock: 90,
      image: "../src/assets/images/product-images/wheelchair.jpg",
      id: 12
    },
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
    else{
      console.log("Possible image");
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

  return (
    <div id='products-page'>
      {openProductModal && <div className="product-modal-cont">
        <form className="product-modal" onClick={(e) => e.stopPropagation()} onSubmit={handleFormSubmit}>
          <h2>{openProductModal === "new" ? "Add new product" : "Edit product"}</h2>
          <label htmlFor="name">Product Name</label>
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

          <label htmlFor="image">Image</label>
          <input type="file" name="image" id="image" onChange={(e) => handleInputChange(e, "image")} />

          <div className="form-buttons">
            <button onClick={() => setOpenProductModal("")}>Close Form</button>
            <button onClick={openProductModal === "new" ? addNewProduct : editProduct}>Submit Form</button>
          </div>
        </form>
      </div>}

      <div className="products-header">
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