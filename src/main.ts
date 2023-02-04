import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLicense } from '@syncfusion/ej2-base';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  export const BaseURL = "http://127.0.0.1:8000/api";



// Registering Syncfusion license key
registerLicense('ORg4AjUWIQA/Gnt2VVhkQlFadVdJX3xLekx0RWFab116cVFMYF9BJAtUQF1hSn5SdEBiX39ccHJcQWBU');
