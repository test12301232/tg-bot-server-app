import express, { Express } from "express"
import mongoose, { ConnectOptions } from "mongoose"
import { config } from "dotenv"
import cors from "cors"
import router from "./router/index"
import ErrorMiddleware from "./middlewares/ErrorMiddleware"


config({ path: __dirname + '/.env' });
const PORT: string = process.env.PORT || '5000';
const app: Express = express();

app.use(cors({
   //credentials: true, 
   // origin: process.env.CLIENT_URL,
   origin: '*',
   exposedHeaders: ['X-Total-Count'],
}));
app.use(express.json());
app.use('/api', router);
app.use(ErrorMiddleware);

const start = async (): Promise<void> => {
   try {
      await mongoose.connect(<string>process.env.DB_URL,
         <ConnectOptions>{ useUnifiedTopology: true, useNewUrlParser: true });

      app.listen(PORT, (): void => console.log(`server started on ${PORT} port`));

   } catch (e: any) {
      if (e) console.log(e.message);
   }
}

start();
