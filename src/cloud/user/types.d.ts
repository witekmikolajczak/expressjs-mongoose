export interface UserClassInterface {
    UserFullData:(
        user: Parse.User<Parse.Attributes>,
        params: Parse.Cloud.Params
    ) => Promise<any>
} 

export interface UserFullDataInterface {
    id: string;
    firstname: string;
    lastname: string;
    username: string | undefined;
    email: string | undefined;
    createdAt: string;
    sessionToken: string;
}