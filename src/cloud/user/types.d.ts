export interface UserClassInterface {
    AddToRelation:(
        user: Parse.User<Parse.Attributes>,
        relationObject: Parse.Object<Parse.Attributes>,
        relationName:string
    ) => Promise<void>
}  