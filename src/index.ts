import "./scss/main.scss";
import * as bootstrap from "bootstrap";
import { AppController } from "./components/controller/appController";

const app: AppController = new AppController();
app.start();
