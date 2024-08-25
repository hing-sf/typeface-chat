import { memo } from 'react';
import { RecipientType } from '../types';
import './Messages.css';

type MessagesProps = {
	activeChat: RecipientType | null;
	handleDelete: (idx: number) => void;
};

const Messages: React.FC<MessagesProps> = memo(({ activeChat, handleDelete }) => {
	if (!activeChat) return null;
	const { name, messages } = activeChat;

	return (
		<div className='messages'>
			<h3>{name} Messages</h3>
			{messages.map(({ sentTime, message }, idx) => {
				// Format the sentTime
				const formattedTime = new Date(sentTime).toLocaleString();

				return (
					<div key={formattedTime + idx} className='message'>
						<div className='content'>
							<p>{message}</p>
							<sub>{formattedTime}</sub>
						</div>
						<button onClick={() => handleDelete(idx)}>Delete</button>
					</div>
				);
			})}
		</div>
	);
});

export default Messages;
