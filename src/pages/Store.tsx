import storeItems from '../data/storeItems.json';

export default function Store() {
    return (
        <>
        <h1>Store</h1>

  {storeItems.map(item => (
   <p className="text-blue-300">{JSON.stringify(item)}</p>
            ))}
        </>
    )
} 