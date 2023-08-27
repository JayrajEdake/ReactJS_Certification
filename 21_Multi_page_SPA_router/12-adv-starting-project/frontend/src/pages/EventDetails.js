import {
	useParams,
	json,
	useLoaderData,
	useRouteLoaderData,
	redirect,
} from 'react-router-dom';
import EventItem from '../components/EventItem';

function EventDetailsPage() {
	const params = useParams();
	const data = useRouteLoaderData('event-detail');
	console.log(data);
	console.log(params);
	return <EventItem event={data.event} />;
}

export default EventDetailsPage;

export async function loader({ request, params }) {
	let id = params.eventId;

	const response = await fetch('http://localhost:8080/events/' + id);

	if (!response.ok) {
		throw json({ message: 'Could not fecth event details' }, { status: 500 });
	} else {
		return response;
	}
}

export async function action({ params, request }) {
	console.log('in action() of eventDetails');
	const eventId = params.eventId;

	const response = await fetch('http://localhost:8080/events/' + eventId, {
		method: request.method,
		//method: 'DELETE',
	});
	if (!response.ok) {
		throw json({ message: 'Could not delete event ' }, { status: 500 });
	}
	return redirect('/events');
}
