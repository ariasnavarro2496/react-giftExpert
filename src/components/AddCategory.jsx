import { useState } from "react"




export const AddCategory = ({ oneNewCategory }) => {

const [ inputValue, setinputValue ] = useState( )

const onInputChanged = (event) =>{
    setinputValue ( event.target.value );
    
}

const onSubmit = ( event) => {
    event.preventDefault();
    if( inputValue.trim().length <= 1) return;

    // setCategories(categories =>[ inputValue, ...categories ]);
    oneNewCategory( inputValue.trim() );
    setinputValue('');

}
  return (

    <form onSubmit={ (event) => onSubmit(event) }>
            <input 
            
                type="text"
                placeholder="Buscar gifs" 
                value={ inputValue || '' }
                onChange={ (event) => onInputChanged(event) } 
                   
            />
    </form>
    
  )
}
