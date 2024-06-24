import { ISessionObject, ISessionService } from "../model/session.service";

export class SessionService implements ISessionService {
    login(loginObject: any) {
        return Promise.resolve();
    }

    getSession(sessionToken: string) {
        return Promise.resolve({} as ISessionObject);
    }

    verifyAuthentication(sessionToken: string) {
        if (sessionToken) {
            return Promise.resolve(true);
        }
        return Promise.reject(true);
    } 
}
