import { IMessage } from '../../Models/messages';

export interface IMessagesStorage {    
    addMessage: (message: IMessage, channelName: string) => Promise<void>;
    getMessages: (channelName: string) => Promise<IMessage[]>;
}
