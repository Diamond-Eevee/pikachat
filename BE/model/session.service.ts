export interface ISessionService {
    login: (loginObject: any) => Promise<any>;
    getSession: (sessionToken: string) => Promise<ISessionObject>;
    verifyAuthentication: (sessionToken: string) => Promise<boolean>;
}

export interface ISessionObject {
    sessionToken: string;
    userId: string;
    expiresAt: Date;
    data: any;
}
