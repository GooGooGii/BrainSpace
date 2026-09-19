# BrainSpace Android App

This is a native Android WebView shell for the offline BrainSpace game. The
Android build packages the verified `../dist/index.html` build as local assets,
so the game does not require a server or network connection.

## Build a debug APK

From the repository root:

```powershell
$env:JAVA_HOME = "C:\Program Files\Android\Android Studio\jbr"
$env:ANDROID_HOME = "$env:LOCALAPPDATA\Android\Sdk"
& ".\android\gradlew.bat" -p android assembleDebug
```

The APK is written to `android/app/build/outputs/apk/debug/app-debug.apk`.
