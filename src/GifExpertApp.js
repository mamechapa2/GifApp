import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    //const categories = ['One Punch' , 'Dragon Ball', 'Death Note'];
    const [categories, setCategories] = useState(['Rick y Morty']);
    
    // const handleAdd = () => {
    //     setCategories([...categories, 'Shingeki']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr /> 
            <ol>
                {
                    categories.map((category) => 
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    )
                }
            </ol>
        </>
    );
}

export default GifExpertApp;