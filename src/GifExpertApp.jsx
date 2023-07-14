
//IMPORTACIONES DE LOS DEMAS COMPONENTES

import { useState } from "react";
import { AddCategory, GifGrid } from "./components";





export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);


    const onAddCategory = ( newCategory) => {

      if ( categories.includes(newCategory) ) return;

      // categories.push(newCategory);

      // setCategories([...cat, 'Valorant'] )
      setCategories([ newCategory , ...categories ]);


    }

  return (


    <>
        {/* TITULO */}
        <h1>GifExpertApp</h1>

        {/* INPUT */}
        <AddCategory
          // setCategories = { setCategories }

          oneNewCategory ={ (value) => onAddCategory(value) }

        />



        {/* LISTADO DE GIF */}


            {
            categories.map( ( category ) => ( 
            
                    <GifGrid
                        
                          key={ category } 
                          category={ category } 
                          
                          
                    /> 
            
                ))
            }

        {/* Gif Item */}

    </>
  )
}
