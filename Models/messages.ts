export interface IMessage {
    text: string,
    user: string,
    time: string,
    data?: any,
    type: MessageTypes
}

export enum MessageTypes {
    userMessage = 'userMessage',
    systemMessage = 'systemMessage',
    handshakeMessage = 'handShakeMessage'
}
