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
        <form className="product-modal" onClick={(e) => e.stopPropagation()} onSubmit={handleFormSubmit}>
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