import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Clerk } from "@clerk/clerk-js";

const clerk = new Clerk("pk_test_am9pbnQtbWFzdGlmZi0xOS5jbGVyay5hY2NvdW50cy5kZXYk");

clerk.load()
  .then(() => {
    console.log("Clerk chargé !");
    bootstrapApplication(AppComponent, appConfig)
      .catch(err => console.error(err));
  })
  .catch(err => console.error("Erreur Clerk:", err));

export { clerk };
