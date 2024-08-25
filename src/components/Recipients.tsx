import { FC, memo } from 'react';
import { RecipientType } from '../types';

import './Recipients.css';

type RecipientProps = {
	recipients: RecipientType[];
	handleSelectRecipient: (recipientIdx: number) => void;
};

const Recipients: FC<RecipientProps> = memo(({ recipients, handleSelectRecipient }) => {
	if (recipients.length === 0) return null;

	return (
		<div className='recipients'>
			<h3>Lis of Chats</h3>
			{recipients.map((recipient, idx) => {
				return (
					<div key={recipient.userId + idx.toString()} className='recipient'>
						<button onClick={() => handleSelectRecipient(idx)}>{recipient.name}</button>
					</div>
				);
			})}
		</div>
	);
});

export default Recipients;
