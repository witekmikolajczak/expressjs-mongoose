require('./config')
// delete
import {schemaDelete as productDelete} from './product/recreate'
import { schemaDelete as userDelete } from './user/recreate'
import { schemaDelete as teamDelete } from './team/recreate'
import { schemaDelete as notificationDelete } from './notification/recreate'

// create
import { schemaCreate as productCreate } from './product/recreate'
import { schemaCreate as userCreate} from './user/recreate'
import { schemaCreate as teamCreate } from './team/recreate'
import { schemaCreate as notificationCreate } from './notification/recreate'

async function deleteSchema() {
    await productDelete()
    await userDelete()
    await teamDelete()
    await notificationDelete()
}
async function createSchema() {
    await productCreate()
    await userCreate()
    await teamCreate()
    await notificationCreate()
}

async function dbReacreate(){
    await deleteSchema()
    await createSchema()
    
    
}
dbReacreate()

