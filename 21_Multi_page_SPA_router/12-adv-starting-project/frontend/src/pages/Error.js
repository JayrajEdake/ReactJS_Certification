import PageContent from '../components/PageContent';
import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

function ErrorPage() {
	const error = useRouteError();

	let title = 'An Error Ocurred';
	let message = 'Something went wrong!';

	if (error.status === 500) message = error.data.message;

	if (error.status === 404) {
		title = 'not found';
		message = 'could not found resource';
	}
	return (
		<>
			<MainNavigation />
			<PageContent title={title}>{message}</PageContent>;
		</>
	);
}

export default ErrorPage;
