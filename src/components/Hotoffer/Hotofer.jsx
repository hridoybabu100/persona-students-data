

const Hotofer = async() => {

    const res = await fetch("http://localhost:3000/data.json",{
        cache : "no-store"

        
    });

    const hots = await res.json();
    console.log('Hot offer', hots);
    
    return (
        <div>
            <h2 className="text-5xl font-bold text-center my-5">Hot Offer</h2>
        </div>
    );
};

export default Hotofer;