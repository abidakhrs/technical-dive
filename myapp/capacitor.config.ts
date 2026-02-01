import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.myapp.app',
  appName: 'myapp',
  webDir: 'dist',
  server: {
    androidScheme: 'http',
  }
};

export default config;
