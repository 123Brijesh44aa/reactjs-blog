import express from 'express'
import mongoose from 'mongoose'
import { configDotenv } from 'dotenv'
import userRoute from './routes/User.route.js'
import authRoute from "./routes/Auth.route.js"

configDotenv()

const mongo_db_password = process.env.MONGO_DB_PASSWORD
const mongo_db_username = process.env.MONGO_DB_USERNAME
const port = process.env.PORT | 3008
let mongo_db_connection_url_string = process.env.MONGO_DB_CONNECTION_URL_STRING

mongo_db_connection_url_string = mongo_db_connection_url_string.replace(
  '<password>', mongo_db_password)
mongo_db_connection_url_string = mongo_db_connection_url_string.replace(
  '<username>', mongo_db_username)

const app = express();

app.use(express.json());

mongoose.connect(mongo_db_connection_url_string).then(
  () => {
      return console.log('mongo db database connected successfully')
  },
).catch(
  (error) => {
      return console.log(error)
  },
)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});




app.use("/api/user", userRoute);
app.use("/api/auth",authRoute);