import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/core/app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);
