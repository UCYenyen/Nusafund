# Nusafund

Nusafund is a React Native mobile application built with Expo, featuring a comprehensive navigation system including bottom tabs and stack-based screen transitions.

## 🚀 Tech Stack

* **Framework**: Expo (~55.0.4)
* **Library**: React Native (0.83.2)
* **Language**: TypeScript
* **Navigation**: React Navigation (Bottom Tabs & Native Stack)
* **Icons**: Lucide React Native
* **UI Components**: React Native Safe Area Context, SVG support

## 📱 Features

The application is structured with a main tab-based navigation and specific detail stacks:
* **Home**: Main landing screen.
* **Discover**: Search and explore functionality.
* **Wallet**: Financial management and balance overview.
* **Profile**: User settings and account information.
* **Detail & Confirmation**: Dedicated stack screens for deep-linking and transaction flows.

## 🛠️ Getting Started

### Prerequisites

Ensure you have Node.js installed and the Expo Go app on your mobile device, or an emulator configured.

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install

### 🚀 How to Run Nusafund

Follow these steps to get the application running on your environment. Ensure you have installed the dependencies first using `npm install`.

#### 1. Running on Web
To run the application in a web browser using `react-native-web`:
1.  Open your terminal in the project root.
2.  Run the following command:
    ```bash
    npm run web
    ```
3.  The app will compile and open in your default browser at `http://localhost:8081`.

#### 2. Running on Android
You can run the app on a physical device or an emulator:
* **Physical Device**:
    1.  Install the **Expo Go** app from the Google Play Store.
    2.  Run `npm run start` (or `npm run android`) in your terminal.
    3.  Scan the QR code displayed in the terminal using the Expo Go app.
* **Emulator**:
    1.  Launch your Android Virtual Device (AVD) from Android Studio.
    2.  Run the following command:
        ```bash
        npm run android
        ```

#### 3. Running on iOS
* **Physical Device**:
    1.  Install the **Expo Go** app from the Apple App Store.
    2.  Run `npm run start` (or `npm run ios`) in your terminal.
    3.  Scan the QR code using your iPhone's **Camera app** and tap the notification to open Expo Go.
* **Simulator (macOS only)**:
    1.  Open the iOS Simulator via Xcode.
    2.  Run the following command:
        ```bash
        npm run ios
        ```

### 📋 Available Scripts
These scripts are defined in your `package.json`:
* `npm run start`: Starts Expo and displays the interactive menu.
* `npm run android`: Opens the app on Android.
* `npm run ios`: Opens the app on iOS.
* `npm run web`: Opens the app in a web browser.