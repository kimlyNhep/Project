using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using artTechAPI.Helpers;
using artTechAPI.Models;

namespace artTechAPI.Services
{
    public class UserService : IUserService
    {
        private DataContext _context;
        public UserService(DataContext context) {
            this._context = context;
        }

        public User Authenticate(string username, string password)
        {
            if(string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
                return null;

            var user = _context.Users.SingleOrDefault(u => u.Username == username);

            //Check if username exists?
            if(user == null)
                return null;

            //Check if password is correct?
            if(!VerifyPasswordHash(password,user.PasswordHash,user.PasswordSalt))
                return null;

            //Authentication successful
            return user;
        }

        private static bool VerifyPasswordHash(string password,byte[] storedHash,byte[] storedSalt)
        {
            if(password == null) throw new ArgumentException("password");
            if(string.IsNullOrWhiteSpace(password)) 
                throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");
            if(storedHash.Length != 64) 
                throw new ArgumentException("Invalid length of password hash (64 bytes expected).", "passwordHash");
            if(storedSalt.Length != 128) 
                throw new ArgumentException("Invalid length of password salt (128 bytes expected).", "passwordHash");
        
            using(var hmac = new HMACSHA512(storedSalt)) 
            {
                var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
                for(int i = 0; i < computedHash.Length; i++){
                    if(computedHash[i] != storedHash[i]) return false;
                }
            }
            return true;
        }

        public User Create(User user, string password)
        {
            //Validation
            if(string.IsNullOrWhiteSpace(password))
                throw new AppException("Password is required");
            if(_context.Users.Any(u => u.Username == user.Username))
                throw new AppException("Username \"" + user.Username + "\" is already taken");

            byte[] passwordHash,PasswordSalt;
            CreatePasswordHash(password,out passwordHash, out PasswordSalt);
            
            user.PasswordHash = passwordHash;
            user.PasswordSalt = PasswordSalt;

            _context.Users.Add(user);
            _context.SaveChangesAsync();

            return user;
        }

        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] PasswordSalt)
        {
            if(password == null) throw new ArgumentNullException("Password");
            if(string.IsNullOrWhiteSpace(password)) 
                throw new ArgumentException("Value cannot be empty or whitespace only string.","passowrd");

            using(var hmac = new HMACSHA512())
            {
                PasswordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
            }
        }

        public void Delete(int id)
        {
            var user = _context.Users.Find(id);
            if(user != null)
            {
                _context.Users.Remove(user);
                _context.SaveChanges();
            }
        }

        public IEnumerable<User> GetAll()
        {
            return _context.Users;
        }

        public User GetById(int id)
        {
            return _context.Users.Find(id);
        }

        public void Update(User userParam, string password = null)
        {
            var user = _context.Users.Find(userParam.Id);
            
            if(user == null)
                throw new AppException("User not found");

            if(userParam.Username != user.Username)
            {
                if(_context.Users.Any(u => u.Username == userParam.Username))
                    throw new AppException("Username " + userParam.Username + " is already taken");
            }

            // update user properties
            user.FirstName = userParam.FirstName;
            user.LastName = userParam.LastName;
            user.Username = userParam.Username;

            // update password if it was entered
            if(!string.IsNullOrWhiteSpace(password))
            {
                byte[] passwordHash,PasswordSalt;
                CreatePasswordHash(password,out passwordHash,out PasswordSalt);

                user.PasswordHash = passwordHash;
                user.PasswordSalt = PasswordSalt;
            }

            _context.Users.Update(user);
            _context.SaveChanges();
        }
    }
}