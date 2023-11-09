
import {useRouter} from "next/router";
import { useEffect, useState} from "react";
import axios from "axios";
import Spinner from "./Spinner";
import {ReactSortable} from "react-sortablejs";

export default function ProductForm({
  _id,
  title:existingTitle,
  description:existingDescription,
  price:existingPrice,
  images:existingImages,
  category:assignedCategory,
  properties:assignedProperties,

  }) {
const [title,setTitle] = useState(existingTitle || '');
const [description,setDescription] = useState(existingDescription || '');
const [category,setCategory] = useState(assignedCategory || '');
const [productProperties,setProductProperties] = useState(assignedProperties || {});
const [price,setPrice] =useState(existingPrice || '');
const [goToProducts,setGoToProducts] = useState(false);
const [isUploading,setIsUploading] = useState(false);
const [images,setImages] = useState( existingImages || []);
const [categories, setCategories] = useState([]);
const router = useRouter();
useEffect (() => {
  axios.get('/api/categories').then(result => {
   setCategories(result.data);
  })
}, []);

async function saveProduct(ev) {
ev.preventDefault();
    const data = {
      title,description,price,images,category,
      properties:productProperties
    };
    if (_id) {
  await axios.put('/api/products', {...data,_id});
    } else {
 await axios.post('/api/products', data);
    }
      setGoToProducts(true);  
}
if (goToProducts) {
  router.push('/products');
}
  
async function uploadImages(ev) {
  const files = ev.target?.files;
   if (files?.length > 0) {
    setIsUploading(true);
    const data = new FormData();
    for (const file of files) {
     data.append('file',file);
    }
    const res = await axios.post('/api/upload', data) 
    setImages(oldImages => {
      return [...oldImages, ...res.data.links];
    });
    setIsUploading(false);
  }
}

function updateImagesOrder(images) {
  setImages(images);
}
  function setProductProp(propName,value) {
    setProductProperties(prev => {
      const newProductProps = {...prev};
      newProductProps[propName] = value;
      return newProductProps;
    });

  }

    const propertiesToFill = [];
    if (categories.length > 0 && category) {
    let catInfo = categories.find(({_id}) => _id === category);
    propertiesToFill.push(...catInfo.properties);
    while(catInfo?.parent?._id) {
    const parentCat = categories.find(({_id}) => _id === catInfo?.parent?._id);
    propertiesToFill.push(...parentCat.properties);
    catInfo = parentCat;

 }
}

return( 
<form onSubmit={saveProduct}>
<label>Product Name</label>
<input type="text" 
placeholder="product name" className="bg-dodger-blue-back"
value={title}
onChange={ev => setTitle(ev.target.value)}/>

<label>Category</label>
<select value={category}
onChange={ev => setCategory(ev.target.value)}>
  <option value="">Uncategorized</option>
  {categories.length > 0 && categories.map(c => (
    <option key={c._id} value={c._id}>{c.name}</option>
  ))}
</select>
{propertiesToFill.length > 0  &&  propertiesToFill.map(p => (
  <div div className="">
  <label>{p.name[0].toUpperCase()+p.name.substring(1)}</label>
  <div>
  <select value={productProperties[p.name]} 
  onChange={ev => 
    setProductProp(p.name,ev.target.value)}>

    {p.values.map(v => (
      <option value={v}>{v}</option>
    ))}
  </select>
  </div>

  </div>
))}
<label>
  Photos
</label>

<div className="mb-2 flex flex-wrap gap-1">
  <ReactSortable list= {images} className="flex flex-wrap gap-1"
setList={updateImagesOrder}>

  {!!images?.length && images.map(link => (
    <div key={link} className="h-24 bg-dodger-blue-back rounded-md border-2 border-neon-blue shadow-sm hover:opacity-80 hover:cursor-pointer">
      <img src={link} alt="" className="rounded-lg"/>
    </div>
  ))}
  </ReactSortable>
  {isUploading && (
    <div className="h-24 flex items-center">
      <Spinner/>
    </div>
  )}
  <label className="w-24 h-24 flex flex-col p-2 text-center items-center justify-center text-sm gap-1 text-dodger-blue-primary rounded-lg bg-gradient-to-r from-gray-400 to-white transparent-2 cursor-pointer shadow-md hover:text-neon-pink">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
</svg>
<div>
 Add Image
</div>
<input type="file" onChange={uploadImages} className="hidden"/>
</label>

</div>

<label>description</label>
<textarea placeholder="description" className="bg-dodger-blue-back"
value={description}
onChange={ev=> setDescription(ev.target.value)}
/>

<label>Price (USD)</label>
<input type="number" placeholder="price" className="bg-dodger-blue-back"
value={price}
onChange={ev=> setPrice(ev.target.value)}/>

<button type="submit" className="btn-primary">
  save</button>
</form>
);
}
