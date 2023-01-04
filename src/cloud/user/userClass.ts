import {UserClassInterface, UserFullDataInterface} from './types'
import { logger } from '../../logger/log'
export class UserClass implements UserClassInterface{

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