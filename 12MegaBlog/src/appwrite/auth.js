import conf from '../conf/conf.js'
import {Client, Account, ID} from 'appwrite'

export class AuthService{
    client = new Client;
    account;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                return this.loginAccount(email, password)
                //call another account
            }else{
                return userAccount
            }
        } catch (error) {
            throw error;
        }
    }
    async loginAccount({email, password}){
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error;
            
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Get User Account:: ",error);
        }
        return null;
    }
    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("logout ::", error);
        }
    }
}

const authService = new AuthService();

export default authService