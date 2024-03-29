'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import TopMenu from '../layouts/includes/TopMenu';
import MainHeader from '../layouts/includes/MainHeader';
import SubMenu from '../layouts/includes/SubMenu';
import Footer from '../layouts/includes/Footer';
import Loading from '../components/Loading';
import { supabase } from '../libs/supabaseClient';
import { v4 as uuidv4 } from 'uuid';

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: '',
    image: null,
    category: ''
  });

  const [file, setFile] = useState(null);
  let imageUrl;

  useEffect(() => {
    console.log(imageUrl);
  }, [imageUrl]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = name === 'price' ? parseInt(value) || '' : value;
    setProduct({ ...product, [name]: parsedValue });
  };

  const handleCategoryChange = (e) => {
    setProduct({ ...product, category: e.target.value });
  };
  
  const handleImageChange = (e) => {
      const selectedFile = e.target.files[0];
      setFile(selectedFile); // Set the file state
      setProduct({ ...product, image: selectedFile });
  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    const filename = `${uuidv4()}-${product.image.name}`;

    const { data, error } = await supabase.storage
      .from('documents') // Use your storage bucket name here
      .upload(filename, file); // Upload the image

      const filepath = data.path;
      console.log(filepath);

    if (error) {
      console.error('Error uploading image:', error.message);
    } else {

    const publicUrl = await supabase.storage
      .from('documents')
      .getPublicUrl(filename);

      imageUrl = publicUrl.data.publicUrl;

       console.log(imageUrl);

       
      setProduct({ ...product, image: imageUrl });
    
      try {

        console.log(product);
          let response = await fetch('/api/product/addProduct', {
            method: "POST",
            body: JSON.stringify(product)
        })
        
          console.log('Product uploaded:', response);
        } catch (error) {
          console.error('Error uploading product:', error);
        }
    }

  };




  return (
    <>
        <TopMenu />
        <MainHeader />
        <div className="flex justify-center m-5">
            <form class="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <h2>Add Product</h2>

                <div class="mb-5">
                    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input type="text" onChange={handleChange} id="title" name='title' class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Product Title" required />
                </div>
                <div class="mb-5">
                    <label for="description"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <input type="text" id="description" name='description' onChange={handleChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <div className="mb-5">
                  <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    onChange={handleCategoryChange}
                    value={product.category}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Motors">Motors</option>
                    <option value="Collectables">Collectables & Art</option>
                    <option value="Sports">Sports</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Health">Health & Beauty</option>
                    <option value="Industrial">Industrial Equipment</option>
                    <option value="Home/Garden">Home and Garden</option>
                  </select>
                </div>
                <div class="mb-5">
                    <label for="price"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                    <input type="number" name="price" id="price" onChange={handleChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <div class="mb-5">
                    <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                    <input type="file" accept="image/*" onChange={handleImageChange} id="image" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>

                <button type="submit" onClick={handleSubmit} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Product</button>
            </form>
        </div>
    </>
  );
};

export default AddProduct;
