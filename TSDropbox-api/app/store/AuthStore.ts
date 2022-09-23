import { action, makeObservable, observable } from "mobx";

class AuthStore {
    AuthSettings = {
        auth: false,
        accessToken: "sl.BPsAwCPVMvnmtHGZvhsVURn_oIwBnPPLFcG7NITUfODVIvNv7JykyZsq3dpRTjFMmImmB9g-KhH8Eag3Pf6Y9hA3-UWomKVZjKaq5yHP3pv4gS9KY9h-8sBXAlC-WncpNXCbGeLm1n4Z"
    }
    constructor() {
        makeObservable(this, {
            AuthSettings: observable,
            Login: action,
            Logout: action
        })
    }
    Login(accessToken: string) {
        if (accessToken.length === 143) {
            this.AuthSettings = { auth: true, accessToken: accessToken }
        }else{
            this.AuthSettings = { ...this.AuthSettings, auth: false }
        }
    };
    Logout() {
        this.AuthSettings = { ...this.AuthSettings, auth: false }
    };
}

export default new AuthStore()