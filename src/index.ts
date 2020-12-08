import * as dotenv from 'dotenv';
import "reflect-metadata";
import {createConnection} from "typeorm";
import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.js';
import cors from 'cors';
import {Routes} from './routes'

if(process.env.NODE_ENV !== 'production') dotenv.config({ path: __dirname+'/../../.env' });
if (!process.env.DB_USER_NAME || !process.env.DB_HOST || !process.env.DB_NAME || !process.env.DB_USER_PASSWORD || !process.env.DB_PORT) {
  throw new Error("Missing db variables.");
}

createConnection({
  type: "postgres",
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER_NAME,
  password: process.env.DB_USER_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + "/entity/*{.ts,.js}"],
  synchronize: true,
  logging: false
}).then(async connection => {
  const app = express();
  const port = process.env.PORT;


  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use(cors());

  // register express routes from defined application routes
  Routes.forEach(route => {
    // eslint-disable-next-line @typescript-eslint/ban-types
    (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
      const result = (new (route.controller as any))[route.action](req, res, next);
      if (result instanceof Promise) {
        result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

      } else if (result !== null && result !== undefined) {
        res.json(result);
      }
    });
  });

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  });

}).catch(error => console.error(error));

