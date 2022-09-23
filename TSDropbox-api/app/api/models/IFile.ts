export interface IFile {
    ".tag": string;
    name: string;
    path_lower?: string;
    path_display?: string;
    id?: string;
    client_modified?: string;
    content_hash?: string;
    is_downloadable?: boolean;
    rev?: string;
    server_modified?: string;
    size?: number;
}