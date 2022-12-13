import {UserClassInterface, UserFullDataInterface} from './types'
export class UserClass implements UserClassInterface{

    async AddToRelation(
        user: Parse.User<Parse.Attributes>,
        relationObject: Parse.Object<Parse.Attributes>,
        relationName: string,
    ): Promise<void>
    {
        console.log('-----------------\nHERE---------------');
        console.log(relationObject);
        user.relation(relationName).add(relationObject)
        await user.save(undefined,{useMasterKey:true})
    }

    async UserFullData(
        user: Parse.User<Parse.Attributes>,
        params: Parse.Cloud.Params
    ): Promise<UserFullDataInterface>{
        const result = {
            id: user.id,
            firstname: user.get('firstname'),
            lastname: user.get('lastname'),
            username: user.getUsername(),
            email: user.getEmail(),
            createdAt: user.createdAt.toISOString(),
            sessionToken: user.getSessionToken()
        }

        return result
    }
}