###Steps for run the web-application:

1. Clone this repository

```git clone https://github.com/endorphin82/nextjs-shop.git```
      
2. Please create in root directory file `.env` with the contents below and replace words "user" and "password" on own.

```
API_URL="http://localhost:3000/api/graphql"
DATABASE_URL="mysql://user:passworw@localhost:3306/nextjs-shop"
DATABASE_USER="user"
DATABASE_PASSWORD="password"
DATABASE_NAME="nextjs-shop"
DATABASE_HOST="127.0.0.1"
DATABASE_PORT=3306
DATABASE_DIALECT="mysql"
```

3. Install dependencies

```npm i```

4. Create DB and Tables in MySql

```npm run migration```

5. Run the web-application in development environment

```npm run dev```


By default run on 
[http://localhost:3000/](#http://localhost:3000/) 