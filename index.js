const mongo = require('./mongo')
const userSchema = require('./schemas/user-schema')

const connectToMongoDB = async () => {
    await mongo().then( async (mongoose) => {
        try {
            console.log('Conectado a MongoDB!')

            const user = {
                email: 'test2@email.com',
                username: 'Mark',
                password: 'Password2!',
            }

            await new userSchema(user).save()
        } finally {
            mongoose.connection.close()
        }
    })
}

connectToMongoDB()