import './carDetails.css'
function CarDetailsPage({carItem, editFun, delFun}){
    const deleteItem=()=>{
        delFun(carItem)
    }
    return(
        <>
            <div className="item-block">
                <h1 style={{width:'200px',paddingLeft:'20px'}}>{carItem}</h1>
                <div className="item-block-btn">
                <button style={{color:'white', fontSize:'16px', backgroundColor:'green'}} onClick={()=> editFun(carItem)}>Edit</button>
                <button style={{color:'white', fontSize:'16px', backgroundColor:'red'}} onClick={deleteItem}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default CarDetailsPage;
