import React from 'react';
//import { useState, useEffect } from 'react/cjs/react.development';
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className='card animate__animated animate__backInLeft'>{category}</h3>

            {loading && <p className='animate__animated animate__flash'>Loading...</p>}

            <div className='card-grid'>            
                
                    {
                        images.map(image => (
                            <GifGridItem 
                                key={image.id}
                                {...image} />
                            ))
                    }
                    
            </div>
        </>
        );
};
