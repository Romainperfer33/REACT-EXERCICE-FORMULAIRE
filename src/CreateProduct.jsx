const CreateProduct = () => {
    const handleSubmit =(event) => {
        event.preventDefault();
        
        const title = event.target.title.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        console.log(title,description,price)
        };

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>:<input type="text" name="title"></input>
            </div>
            <div>
                <label htmlFor="description">Description Produit</label>:<br></br>
                <textarea name="description" id="description"></textarea>           
            </div>
            <div>
                <label>Price</label>:<input type="number" name="price"></input>
            </div>
            <div>
                <input type="submit" value="Envoyer le formulaire"></input>
            </div>
        </form>
    </div>
    );
};
export default CreateProduct