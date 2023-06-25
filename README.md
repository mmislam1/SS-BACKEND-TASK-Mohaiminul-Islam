# SS-BACKEND-TASK-Mohaiminul-Islam


# RUN PROJECT

** Clone and setup .env file with variables:
   1. PORT = Port you want to work through.
   2. MONGODB_URL = set the  URL of your mongoDB database.
   3. JWT_SECRET = Secret code to encrypt data.
** Install Node modules and dependencies using npm init and build the project.

# APIs 

1. /api/users/signin
    => Lets authorized user signin through this route.
2. /api/users/register
    => Lets general users get registered.

3. /api/movie/
   => GET request that Returns names of the movies.
4. /api/movie/:id
   => GET request that takes ID as parameter and return details of that movie.
5. /api/movie/createMovie
   => POST request that creates a new data at Movie collection.

# SECURITY 

1. Jason web token was used to authenticate the registered user.
2. passwords are encrypted before saving. Encrypted passwords are used to validate.
3. Confidential informations are added to .env file that is prevented from being shared.
    


