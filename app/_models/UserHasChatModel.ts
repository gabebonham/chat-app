export default class UserHasChat {
	id: number;
	userId: number;
	chatId: number;
	constructor(id: number, userId: number, chatId: number) {
		this.id = id;
		this.userId = userId;
		this.chatId = chatId;
	}
}
