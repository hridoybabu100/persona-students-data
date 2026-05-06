import HotCard from "./HotCard";


const Hotofer = async() => {

    const res = await fetch("http://localhost:3000/data.json",{
        cache : "no-store"

        
    });

    const hots = await res.json();
    console.log('Hot offer', hots);
    
    return (
        <div>
            <h2 className="text-5xl font-bold text-center my-5">Hot Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    hots.map((item) => <HotCard key={item.id} item={item}></HotCard>)
                }
            </div>
        </div>
    );
};

export default Hotofer;