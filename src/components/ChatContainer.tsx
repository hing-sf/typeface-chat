import { FC, useCallback, useEffect, useState } from 'react';
import { recipientFactory } from '../services/messages';
import { RecipientType } from '../types';
import './ChatContainer.css';
import ChatForm from './ChatForm';
import Messages from './Messages';
import Recipients from './Recipients';

const ChatContainer: FC = () => {
	const [recipients, setRecipients] = useState<RecipientType[]>([]);
	const [activeRecipientIdx, setActiveRecipientIdx] = useState<number>(0);

	useEffect(() => {
		// this will create 5 recipients messages
		setRecipients(recipientFactory(5));
	}, []);

	const handleSubmit = useCallback(
		({ message }: { message: string }) => {
			if (message === '') return;
			const clonedRecipients = [...recipients];
			clonedRecipients[activeRecipientIdx].messages.push({
				sentTime: new Date(),
				message: message
			});
			setRecipients(clonedRecipients);
		},
		[recipients, activeRecipientIdx]
	);

	const handleDelete = useCallback(
		(idx: number) => {
			const cloneRecipients = [...recipients];
			const targetRecipient = cloneRecipients[activeRecipientIdx];

			targetRecipient.messages.splice(idx, 1);
			setRecipients(cloneRecipients);
		},
		[recipients, activeRecipientIdx]
	);

	const handleSelectRecipient = useCallback((recipientIdx: number) => {
		setActiveRecipientIdx(recipientIdx);
	}, []);

	return (
		<div className='chat-container'>
			<Recipients recipients={recipients} handleSelectRecipient={handleSelectRecipient} />
			<Messages activeChat={recipients[activeRecipientIdx]} handleDelete={handleDelete} />
			<ChatForm handleSubmit={handleSubmit} />
		</div>
	);
};

export default ChatContainer;
