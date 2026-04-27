import { useEffect, useState } from 'react'
import './App.css'
import CardDetails from './carDetails/carDetails'

function App() {
const [carList, setCarList] = useState(['XUV 700', 'Thar'])
const [inputCurrentValue, setInputCurrentValue] = useState("")
const [itemExist,setItemExist] = useState("")
const InputData = (e)=>{
  setInputCurrentValue(e.target.value)
}

const addItem = ()=>{
  if(!carList.includes(inputCurrentValue)){
  setCarList([...carList,inputCurrentValue])
  setInputCurrentValue("")
  setItemExist("")
  } else{
    setInputCurrentValue("")
    setItemExist("item exist..so i am not adding")
  }

}

const editValueFun = (value)=>{
  console.log(value)
  setInputCurrentValue(value)
}

const delValueFun = (value)=>{
  console.log(value)
  const removedItem = carList.filter( i => i !== value);
  setCarList(removedItem)
  setItemExist("")
}

useEffect(()=>{
  console.log(carList)
},[carList])
return (
    <>
     <h1 className='heading'>Todo List</h1>
     <div className="add-item">
      <input type="text" placeholder='add todo item' onChange={InputData} value={inputCurrentValue}/>
      <button onClick={addItem}>Add Item</button>
     </div>
     {itemExist && (
          <p style={{position:'relative',left:'36rem'}}>{itemExist}</p>
      )}
     <div className="items-data">
      {
        carList.map( (item,index) =>{
          return <CardDetails carItem={item} key={index} editFun={editValueFun} delFun={delValueFun}/>
        })
      }
     </div>
    </>
  )
}

export default App
