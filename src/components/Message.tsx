type MessageProps = {
	name: string;
	sentTime: string;
	message: string;
};

const Message: React.FC<MessageProps> = ({ name: sentTime, message }) => {
	return <div>Message</div>;
};

export default Message;
