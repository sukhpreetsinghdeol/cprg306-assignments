import ItemList from "./item-list";

export default function Page(){

    return(
        <main className="bg-slate-800">
        <h1 className="text-2xl text-white font-extrabold p-2">Shopping List</h1>
        <ItemList/>
        </main>
    );
}