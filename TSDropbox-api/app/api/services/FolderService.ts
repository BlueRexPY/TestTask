import AuthStore from '@/store/AuthStore';
import { Dropbox } from 'dropbox';
import { IFile } from '../models/IFile';


export default class FolderService {
    static async fetchData(path: string) {
        const accessToken = AuthStore.AuthSettings.accessToken
        const dbx = new Dropbox({
            accessToken
        });

        let data: IFile[] = []
        await dbx.filesListFolder({
            path: path
        }).then(response => { data = response.result.entries; }).catch(e => console.log(e))
        return data
    }
    static async delete(path: string) {
        const accessToken = AuthStore.AuthSettings.accessToken
        const dbx = new Dropbox({
            accessToken
        });

        await dbx.filesDeleteV2({
            path: path
        })
    }

}