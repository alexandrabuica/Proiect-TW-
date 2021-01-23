import express from 'express';
import bodyParser from 'body-parser';
import db from './dbConfig.js';
import Users from './entities/Users.js';
import Reviews from './entities/Reviews.js';
import users from './routes/UsersRoute.js';
import reviews from './routes/ReviewsRoute.js';
import { get } from 'http';
import cors from "cors";


let app = express();
// let router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/users', users);
app.use('/reviews', reviews);

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  
  Users.hasMany(Reviews, {as : "Review-uri", foreignKey: "UserId"});
  Reviews.belongsTo(Users, {foreignKey: "UserId"});



let port = process.env.PORT || 8000;
app.listen(port);
console.log("API is running at " + port);

