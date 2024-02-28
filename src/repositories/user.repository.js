const User=require("../models/user.model")

class UserRepository{
    async createUser(userData){
        try{
            const user=new User(userData);
            return await user.save()
        }catch(error){
            throw error;
        }
    }

    async findByUsername(username){
        try{
            return await User.findOne({username});
        }catch(error){
            throw error;
        }
    }
}


module.exports=new UserRepository();