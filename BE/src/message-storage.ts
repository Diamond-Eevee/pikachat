import { IMessage } from "../../Models/messages";
import { IMessagesStorage } from "../model/messages.storage.model";


export class MessageStorage implements IMessagesStorage {
    public storageLimit = 100;
    private data: IMessage[] = [];

    public addMessage(message): Promise<any> {
        this.data.push(message);
        if (this.data.length > this.storageLimit) {
            this.data.shift();
        }

        return Promise.resolve();
    }

    public getMessages(): Promise<IMessage[]> {
        return Promise.resolve(this.data);
    }
}
