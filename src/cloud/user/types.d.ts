export interface UserClassInterface {
    AddToRelation:(
        user: Parse.User<Parse.Attributes>,
        relationObject: Parse.Object<Parse.Attributes>,
        relationName:string
    ) => Promise<void>

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