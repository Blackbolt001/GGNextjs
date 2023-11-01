import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import  {withSwal}   from 'react-sweetalert2'


 function Categories({swal}) {
    const [editedCategory, setEditedCategory] = useState(null);
    const [name,setName] = useState('');
    const [parentCategory,setParentCategory] = useState('');
    const [categories,setCategories] = useState([]);
    useEffect(() => {
      fetchCategories();
    }, [])
    function fetchCategories() {
        axios.get('/api/categories').then(result => {
            setCategories(result.data);
         });
    }

 async function saveCategory(ev){
    ev.preventDefault();
    const data = {name,parentCategory};

    if (editedCategory) {
        data._id = editedCategory._id;
        await axios.put('/api/categories', data);
        setEditedCategory(null);
    } else {
        await axios.post('/api/categories', data); 
    }
    setName('');
    setParentCategory('');
    fetchCategories();
}

function editCategory(category){
    setEditedCategory(category);
    setName(category.name);
    setParentCategory(category.parent?._id);
}

function deleteCategory(category) {
    swal.fire({
        title: 'Category will be Deleted',
        text: `Are you Sure you want to delete ${category.name}?`,
        showCancelButton: true,
        cancelButtonText: 'Cancel',
        confirmButtonText:'Delete',
        confirmButtonColor: '#d55',
        reverseButtons:true, 
    })
      .then(async result => {
        if (result.isConfirmed) {
            const {_id} = category;
            await axios.delete('/api/categories?_id='+_id);
            fetchCategories();
        }
      });

}

    return (
        <Layout> 
            <h1> Categories</h1>
            <label>
            {editedCategory 
            ? `Edit category ${editedCategory.name}`
            : 'Create new category'}
            </label>
            <form onSubmit={saveCategory}>
                <div className="flex gap-1">
                <input
               
                type="text"
                placeholder= {'Category name'}
                onChange={ev => setName(ev.target.value)}
                value={name}/>
                <select
                onChange={ev => setParentCategory(ev.target.value)}
                value={parentCategory}>
                    <option value="">No parent category</option>
                    {categories.length > 0 && categories.map(category => (
                    <option key={category._id} value={category._id}>
                    {category.name}</option>
                    ))}
                </select>
                </div>
                <div>
                    <label>Properties</label>
                </div>
                <button type="submit" className="btn-primary py-1 flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8" color="red" fontWeight="bold">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
</svg> Add properties


                </button>
                </form>
                {!editedCategory && (
                <table className="basic mt-4">
                    <thead>
                        <tr>
                            <td>Category name</td>
                            <td>Parent category</td>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.length > 0 && categories.map(category => (
                            <tr>
                            <td>{category.name}</td>
                            <td>{category?.parent?.name}</td>
                            <td>
                                <button onClick={() => editCategory(category)}
                                className="btn-primary mr-1">
                                    Edit
                                </button>
                                <button onClick={() => deleteCategory(category)}
                                 className="btn-primary">Delete</button>

                            </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                )}
         </Layout>
    );
}

export default withSwal(({swal}, ref) => (
    <Categories swal={swal} />
));
