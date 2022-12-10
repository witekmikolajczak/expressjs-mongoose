import {
   TeamClassInterface, 
   TeamCreateReturnInterface,
   TeamObjectInterface,
} from './types'
export class Team implements TeamClassInterface{
   
   private team: TeamObjectInterface;
   constructor(){
      this.team = {
         id: '',
         name: '',
         users: [
            {
               id:'',
               firstname:'',
               lastname:'',
               email:''
            }
         ]
      }
   }

   async Create(
      user: Parse.User<Parse.Attributes>,
      params:Parse.Cloud.Params
   ): Promise<TeamCreateReturnInterface>{
      const Team = new Parse.Object('Team')
      Team.set('name', params.productName)
      Team.relation('users').add(user)
      const newTeam = await Team.save()

      const result = {
         id: newTeam.id,
         name: newTeam.get('name'),
         createdBy: user.id
      }
      return result
   }

   async Object(
      user: Parse.User<Parse.Attributes>,
      params:Parse.Cloud.Params
   ): Promise<TeamObjectInterface>{
      const Team = Parse.Object.extend('Team')
      const query = await new Parse.Query(Team).equalTo('objectId', params.id).first()
      const userQueryRelation = await query!.relation('users').query().find()
      const arr = []
      for (const user of userQueryRelation) {
         const currObj = {
            id:user.id,
            firstname:user.get('firstname'),
            lastname:user.get('lastname'),
            email:user.get('email')
         }

         arr.push(currObj)
      }

      this.team = {
         id: query!.id,
         name: query!.get('name'),
         users: arr
      }

      return this.team
   }
}