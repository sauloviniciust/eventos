export interface IUser {
    full_name: string;
    id: number;
    create_at: Date;
    name: string;
    owner: {
        avatar_url: string ;
    }
    login: string
   
}