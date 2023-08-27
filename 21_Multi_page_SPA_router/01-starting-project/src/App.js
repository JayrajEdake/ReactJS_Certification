import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ProductDetailPage from './pages/ProductDetails';
import Products from './pages/Products';
import RootLayout from './pages/Root';

const homeRouter = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			//	{ path: '', element: <HomePage /> },
			{ index: true, element: <HomePage /> },
			{ path: 'products', element: <Products /> },
			{ path: 'products/:productId', element: <ProductDetailPage /> },
		],
	},
]);

function App() {
	return <RouterProvider router={homeRouter} />;
}

export default App;
