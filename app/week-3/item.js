export default function Item({item}){
    
    let {name, quantity, category} = item; 

return (
    <div className="text-lg m-5 max-w-lg p-1 border border-white-100 bg-slate-600" >
        <ul>
            <li>{name}<br></br>Buy {quantity} in {category} </li>
        </ul>
    </div>
);
}