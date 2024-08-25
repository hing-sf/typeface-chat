export type RecipientType = {
	userId: string;
	name: string;
	messages: MessageType[];
};

export type MessageType = {
	sentTime: Date;
	message: string;
};
