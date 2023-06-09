import express, {Application} from "express";
import bodyParser from "body-parser";

class App {
  public app: Application;

  constructor() {
    this.app = express() as Application;
    this.config();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  }
}

export default new App().app;