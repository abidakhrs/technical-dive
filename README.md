# Abid's Technical Dive

This project is a **Vite + React frontend** with **Express backend** and can also be run on **Android** using Capacitor.  

---

## 1. Project Structure

myapp/ # Frontend (Vite + React + Capacitor)
myapp-be/ # Backend (Express + json-server)


---

## 2. Run Web Locally (Frontend)

1. Go to the frontend folder:

```bash
cd myapp
Install dependencies:

npm install
Run the development server:

npm run dev
The frontend will be served at http://localhost:5173/ (Vite default port).

You can open your browser to see it live.

3. Run Backend Locally
Go to the backend folder:

cd myapp-be
Install dependencies:

npm install
Run the backend server:

npm run dev
The backend API will run at http://localhost:4000/

Credentials for login
Email: user@example.com

Password: 123456

4. Run on Android Device
⚠️ Important: You need to connect your Android device to the same network as your laptop/PC to access the backend API.

In the frontend folder, update the Android environment file:

# .env.android
VITE_API_URL=http://<your_local_ip_address>:4000
Replace <your_local_ip_address> with your laptop/PC IPv4 address (check with ipconfig on Windows or ifconfig on Mac/Linux).

Build the project for production:

npm run build:android
Add Capacitor Android platform (only once):

npx cap add android
This generates an android/ folder with a native Android project.

Open the Android project in Android Studio:

npx cap open android
You can now see the Android project and run/debug it inside Android Studio.

Sync changes from your web build to Android:

npx cap sync
This updates the native project with the latest frontend build and any plugin changes.

Run the app on an Android device or emulator:

npx cap run android
It will ask which device to use (choose your connected phone or emulator).

After login, you will be redirected to /dashboard.

5. Notes
Make sure both backend and frontend are running and accessible on the same network.

Any changes in the frontend require rebuilding (npm run build:android) and syncing (npx cap sync) before testing on Android.

Thank you for checking out Abid's Technical Dive! 🚀