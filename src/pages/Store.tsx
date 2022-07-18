import storeItems from '../data/storeItems.json';

export default function Store() {
    return (
        <>
            {storeItems.map(item => {
                <p className="text-blue-300">JSON.stringify(item)</p>;
            })}
        </>
    )
} 