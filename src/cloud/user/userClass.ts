import {UserClassInterface} from './types'
export class UserClass implements UserClassInterface{
    async AddToRelation(
        user: Parse.User<Parse.Attributes>,
        relationObject: Parse.Object<Parse.Attributes>,
        relationName: string,
    ): Promise<void>
    {
        user.relation(relationName).add(relationObject)
        await user.save(undefined,{useMasterKey:true})
    }
}