const React = require("react");
const Layout = require("../layout/Default");

class Edit extends React.Component {
    render() {
        const { name, _id, description, price, image } = this.props.art;

        return(
            <Layout title={`Edit ${name}`}>
                <form action={`/art/${_id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={name} />
                    <br />
                    Description <input type="text" name="description" defaultValue={description} />
                    <br />
                    price <input type="number" name="price" defaultValue={price} />
                    <br />
                    <input type="image" src={``} alt={name} />
                    <br />
                    <input type="submit" value="Submit Changes" />
                </form>

            </Layout>
        )
    }
}