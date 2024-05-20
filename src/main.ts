import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { environment } from './assets/environments/environment';

// Initialize Firebase app
const app = initializeApp(environment.firebaseConfig);

// Initialize Google Analytics
const analytics = getAnalytics(app);



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err));
