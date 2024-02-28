const bcrypt = require('bcrypt');
const UserRepository = require('../repositories/user.repository');

class AuthService {
    
  async register(username, password) {
    try {
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
      // Create user
      const user = await UserRepository.createUser({ username, password: hashedPassword });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async login(username, password) {
    try {
      const user = await UserRepository.findByUsername(username);
      if (!user) {
        throw new Error('User not found');
      }
      
      // Compare passwords
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new Error('Invalid password');
      }
      
      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new AuthService();