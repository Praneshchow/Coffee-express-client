

const AddCoffee = () => {
    const handleAddCoffee = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const teste = form.teste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, teste, category, details, photo};
        console.log(newCoffee);
    }

    return (
        <div className="p-24">
            <h2 className="text-3xl font-extrabold">Add a Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Name</span>
                        </div>
                        <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full " />
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <div className="label">
                            <span className="label-text">Available Quantity</span>
                        </div>
                        <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full " />
                    </div>
                </div>

                {/* form supplier and teste row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Supplier Name</span>
                        </div>
                        <input type="text" name="supplier" placeholder="supplier" className="input input-bordered w-full" />
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <div className="label">
                            <span className="label-text">Teste</span>
                        </div>
                        <input type="text" name="teste" placeholder="teste" className="input input-bordered w-full" />
                    </div>
                </div>

                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Category</span>
                        </div>
                        <input type="text" name="category" placeholder="category" className="input input-bordered w-full" />
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <div className="label">
                            <span className="label-text">Details</span>
                        </div>
                        <input type="text" name="details" placeholder="details" className="input input-bordered w-full" />
                    </div>
                </div>

                {/* form category and details row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Photo URL</span>
                        </div>
                        <input type="text" name="photo" placeholder="URL" className="input input-bordered w-full" />
                    </div>
                </div>

                <input type="submit" value="Add Coffee" className="btn btn-block text-white bg-info" />
            </form>
        </div>
    );
};

export default AddCoffee;