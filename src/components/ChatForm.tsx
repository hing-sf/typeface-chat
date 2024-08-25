type ChatFormProps = {
	handleSubmit: ({ message }: { message: string }) => void;
};

const ChatForm: React.FC<ChatFormProps> = ({ handleSubmit }) => {
	const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.target)) as { message: string };
		handleSubmit(data);
		e.target.reset();
	};

	return (
		<form onSubmit={onSubmit}>
			<input type='text' name='message' aria-label='Message' />
			<button type='submit'>Submit</button>
		</form>
	);
};

export default ChatForm;
