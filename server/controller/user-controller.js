const User = require('./../models/user-schema')



const addUser = async (req, res) => {
    const user = req.body

    const newUser = new User(user) // validating user

    try {
        
        await newUser.save() // saving to DB
        res.status(201).json(newUser)

    } catch (error) {
        res.status(409).json({message: error.message})
    }
    
}

const getUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)
    }
    catch (error) {
        res.status(404).json({message: error.message})
    }
}

module.exports = { addUser, getUsers }