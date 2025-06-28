import { useState } from "react"
export type AddCategoryProps={
     onNewCategory(value:string):void;

 }
export function AddCategory({onNewCategory}:AddCategoryProps) {
  const [inputValue, setInputValue] = useState('')
  function setNewValue({target}:React.ChangeEvent<HTMLInputElement>){
    setInputValue(target.value);
  }
  function onSubmit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    if(inputValue.trim().length<=1) return;
    onNewCategory(inputValue);
    setInputValue('');
  }
    return (
    <form onSubmit={ onSubmit}>
        <input type="text" value={inputValue} placeholder="Buscar Gifs" onChange={setNewValue}></input>

    </form>
  )
}
