require('./config')
// delete
import {schemaDelete as productDelete} from './product/recreate'
import { schemaDelete as userDelete } from './user/recreate'

// create
import { schemaCreate as productCreate } from './product/recreate'
import { schemaCreate as userCreate} from './user/recreate'

async function deleteSchema() {
    await productDelete()
    await userDelete()
}
async function createSchema() {
    await productCreate()
    await userCreate()
}

async function dbReacreate(){
    await deleteSchema()
    await createSchema()
    
    
}
dbReacreate()

