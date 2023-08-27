import classes from './NewsletterSignup.module.css';
import { useFetcher } from 'react-router-dom';
import { useEffect } from 'react';

function NewsletterSignup() {
	console.log('NewsletterSignup');
	const fetcher = useFetcher();
	const { data, state } = fetcher;

	useEffect(() => {
		console.log('useEffect started');
		console.log(state);
		console.log(data);
		if (state === 'idle' && data && data.message) {
			console.log('in if');
			window.alert('Signup succesful');
		}
	}, [data, state]);
	return (
		<fetcher.Form method='post' className={classes.newsletter}>
			<input
				type='email'
				placeholder='Sign up for newsletter...'
				aria-label='Sign up for newsletter'
				action='/newsletter'
			/>
			<button>Sign up</button>
		</fetcher.Form>
	);
}

export default NewsletterSignup;
