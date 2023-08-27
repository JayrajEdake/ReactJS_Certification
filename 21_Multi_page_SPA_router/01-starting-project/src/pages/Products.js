import { Link } from 'react-router-dom';

const PRODUCTS = [
	{ id: 'p1', title: 'product 1' },
	{ id: 'p2', title: 'product 2' },
	{ id: 'p3', title: 'product 3' },
];
function Products() {
	return (
		<>
			<h1> Products page</h1>
			<ul>
				{PRODUCTS.map((product) => (
					<li key={product.id}>
						<Link to={product.id}>{product.title}</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export default Products;
