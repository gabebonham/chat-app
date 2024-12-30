export default class Chat {
	chatId: number;
	id: number;
	msg: string;
	userId: number;
	createdAt: Date;
	constructor(
		chatId: number,
		id: number,
		msg: string,
		userId: number,
		createdAt: Date,
	) {
		this.chatId = chatId;
		this.id = id;
		this.msg = msg;
		this.userId = userId;
		this.createdAt = createdAt;
	}
}
