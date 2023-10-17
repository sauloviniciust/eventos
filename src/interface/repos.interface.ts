export interface IRepo {
    id: number;
    create_at: Date;
    name: string;
    owner:{
        avatarurl: string;
    }
}