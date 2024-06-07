

const CoffeeCard = ({ coffee }) => {

    const { name, quantity, supplier, taste, category, details, photo } = coffee;

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>Taste: {taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical">
                        <button className="btn ">View</button>
                        <button className="btn ">Edit</button>
                        <button className="btn ">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;