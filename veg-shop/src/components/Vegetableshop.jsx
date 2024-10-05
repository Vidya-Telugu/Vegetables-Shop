import React,{useState} from 'react'

function vegetableshop() {
    const[newItem,setnewItem]=useState("");
    const[items,setItems]=useState([]);
    const[price,setPrice]=useState("");
    const[quantity,setQuantity]=useState("");
    const[total,setTotal]=useState(0);
    const[buyQuantity,setBuyQuantity]=useState("");
    function handleName(event){
       setnewItem(event.target.value);
    }
    function handleQuantity(event){
        setQuantity(Number(event.target.value));
    }
    function handlePrice(event){
        setPrice(Number(event.target.value));
    }
    function addItem(){
   
       const newItemobj={
        name:newItem,
        price:price,
        quantity:quantity,
       }
       setItems(i=>[...i,newItemobj])
       setTotal(c=>c+1);
       setnewItem("");
       setQuantity("");
       setPrice("");
   
    }

    function handleChange(event){
        setBuyQuantity(event.target.value);
    }
    function clickChange(index){
        setItems((prev)=>prev.map((item,i)=>
            i==index? {...item,quantity:item.quantity-buyQuantity}:item
      ))
      setBuyQuantity("");
    }
    function deleteItem(index){
        let updatedItems=items.filter((_,i)=>i!=index);
        setItems(updatedItems);
    }
  return (
    <div>
      <div>
         Name :
        <input type="text" onChange={handleName} value={newItem}></input><br></br><br></br>

        Quantity :
        <input type="number" onChange={handleQuantity} value={quantity}></input><br></br><br></br>

        Price :
        <input type="number" onChange={handlePrice} value={price}></input><br></br><br></br>

        <button onClick={addItem}>ADD TO SHOP</button><br></br>
      </div>
      <ol>
        {
            items.map((item,index)=><li key="index">
                <span>{item.name}      </span>
                <span>RS.{item.price}      </span>
                <span>{item.quantity} KG      </span>
                <input type="number" onChange={handleChange} value={buyQuantity}></input>
                <button onClick={()=>clickChange(index)}>BUY      </button>
                <button onClick={()=>deleteItem(index)}>delete      </button>
            </li>)
        }
      </ol>
      <h1>Total:{total}</h1>
    </div>
  )
}

export default vegetableshop
