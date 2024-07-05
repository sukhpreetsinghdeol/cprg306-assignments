export default function Item({item, onSelect}){
    
    let {name, quantity, category} = item; 

return (
    <div className="text-xl m-5 max-w-lg p-1 border text-white font-bold border-white-100 bg-slate-600" >
        <ul>
            <li onClick={() => onSelect(name)}>{name}<br></br>Buy {quantity} in {category} </li>
        </ul>
    </div>
);
}