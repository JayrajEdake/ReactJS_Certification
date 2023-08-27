import { useEffect, useState } from 'react';

import { useLoaderData, json, defer } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
	const data = useLoaderData();

	if (data.isError) {
		return <p>{data.message}</p>;
	}
	const events = data.events;
	return <EventsList events={events} />;
}

export async function loader() {
	const response = await fetch('http://localhost:8080/events');
	if (!response.ok) {
		//return { isError: true, message: 'Could not fetch events' };
		//throw { message: 'Could not fetch events' };
		throw json(
			{ message: 'Could not fecth events' },
			{
				status: 500,
			}
		);
	} else {
		return response;
	}
}
export default EventsPage;
