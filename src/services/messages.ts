import { faker } from '@faker-js/faker';
import { MessageType, RecipientType } from '../types';

export const recipientFactory = (num: number): RecipientType[] => {
	const recipients = [];
	while (num !== 0) {
		recipients.push({
			userId: faker.string.uuid(),
			name: faker.name.firstName(),
			messages: messageFactory(Math.floor(Math.random() * 5) + 1)
		});
		num--;
	}
	return recipients;
};

export const messageFactory = (num: number): MessageType[] => {
	const messages = [];
	for (let i = 0; i < num; i++) {
		messages.push({
			// id: faker.string.uuid(),
			sentTime: new Date(),
			message: faker.lorem.lines(1)
		});
	}
	return messages;
};
