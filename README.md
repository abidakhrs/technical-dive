
# Abid's Technical Dive

  

This project features a **Vite + React** frontend integrated with an **Express** backend. It is cross-platform compatible, supporting web browsers and **Android** devices via Capacitor.

  

---

  

## 📂 Project Structure

  

*  **myapp/**: Frontend (Vite + React + Capacitor)

*  **myapp-be/**: Backend (Express + json-server)

  

---

  

## 🌐 1. Run Web Locally (Frontend)

  

1.  **Navigate to the frontend folder:**

```bash

cd myapp

```

2.  **Install dependencies:**

```bash

npm install

```

3.  **Start the development server:**

```bash

npm run dev

```

> The frontend will be served at: `http://localhost:5173/`

  

---

  

## ⚙️ 2. Run Backend Locally

  

1.  **Navigate to the backend folder:**

```bash

cd myapp-be

```

2.  **Install dependencies:**

```bash

npm install

```

3.  **Start the backend server:**

```bash

npm run dev

```

> The backend API will run at: `http://localhost:4000/`

  

### 🔑 Login Credentials

*  **Email:**  `user@example.com`

*  **Password:**  `123456`

  

---

  

## 📱 3. Run on Android Device

  

> [!IMPORTANT]

> Ensure your Android device and your development machine are connected to the **same Wi-Fi network**.

  

1.  **Update the Android environment file** in the `myapp/` folder:

* Edit `.env.android`

* Set `VITE_API_URL=http://<your_local_ip_address>:4000` if you are using adb. if emulator then can use localhost:4000 as the url.

*  *Note: Use `ipconfig` (Windows) or `ifconfig` (Mac/Linux) to find your IPv4 address.*

  

2.  **Build the project for Android:**

```bash

npm run build:android

```

  

3.  **Add the Capacitor Android platform** (first-time setup only):

```bash

npx cap add android

```

  

4.  **Sync and Open in Android Studio:**

```bash

npx cap sync

npx cap open android

```

  

5.  **Run the App:**

Select your connected device or emulator within Android Studio, or use the CLI:

```bash

npx cap run android

```

  

---

  

## 📝 Key Notes

  

*  **Workflow:** Any changes made to the React frontend require a rebuild (`npm run build:android`) and a sync (`npx cap sync`) before they will appear on the Android device.

*  **Network:** The backend must be active and the firewall must allow connections on port `4000` for the Android app to communicate with the API.

  

---

  

**Thank you for your time and looking forward for the next hiring process! 🚀**