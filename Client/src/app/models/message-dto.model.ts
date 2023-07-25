export class MessageDto {
    public username: string = '';
    public text: string = '';

    constructor(userName?: string, text?: string) {
        if (userName) {
            this.username = userName;
        }

        if (text) {
            this.text = text;
        }
    }
}