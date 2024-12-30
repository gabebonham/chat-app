export default class User {
	id: number;
	username: string;
	password: string;
	img: string;
	friends: number[];
	constructor(
		id: number,
		username: string,
		password: string,
		img: string,
		friends: number[],
	) {
		this.id = id;
		this.username = username;
		this.password = password;
		this.img = img;
		this.friends = friends;
	}
}
