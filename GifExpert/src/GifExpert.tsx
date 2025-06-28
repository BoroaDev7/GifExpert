import { useState } from "react"
import { AddCategory } from "./components/AddCategory";


export function GifExpert () {
    const [categories, setCategories] = useState(['Mob Psycho'])
    const onAddCategory =(newCategory:string)=>{
        setCategories([...categories,newCategory]);
    }
    return (
    <>
    {/* Titulo */}
        <h1> GifExpert App</h1>

    {/* Input */}
    {/* Listado de Gif */}
    <AddCategory onNewCategory={(value:string)=>onAddCategory(value)} />
    <ol>
        {categories.map((category,index)=>(
            <li key={category+index}>{category}</li>
        ))}
    </ol>
    {/* Gif Item */}
    </>
    
)
}
