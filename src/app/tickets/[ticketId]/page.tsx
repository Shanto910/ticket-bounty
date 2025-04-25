type TicketPageProps = {
	params: {
		ticketId: string;
	};
};

const TicketPage = ({ params }: TicketPageProps) => {
	return (
		<>
			<h2>Ticket Page {params.ticketId}</h2>
		</>
	);
};
export default TicketPage;
