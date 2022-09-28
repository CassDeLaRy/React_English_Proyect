
function Card(props){ 
    return (     
        <>     
        <div className='sellers' 
            id={props.id}>         
            <img src ={props.img}></img>         
            <p className='title'>{props.title}</p>          
            <p className='description'>{props.description}</p>     
        </div>     
        </>      
        ) 
    } 
    
export default Card;