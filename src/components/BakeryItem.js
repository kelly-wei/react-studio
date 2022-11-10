// TODO: create a component that displays a single bakery item
export default function DisplayBakeryItem(props){
    return(
        <div class="bakeryItem">
            <img class="itemImage" src={props.image} alt={props.name}></img>
            <div class="itemInfo">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <p>${props.price}</p>
            </div>
        </div>
    )
}