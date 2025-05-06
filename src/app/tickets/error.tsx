'use client';

import Placeholder from '@/components/placeholder';

const Error = ({ error }: { error: Error }) => (
	<Placeholder label={error.message || 'Something went wrong!'} />
);

export default Error;
