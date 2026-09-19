# BrainSpace

BrainSpace is an offline mobile physics-puzzle game built with Three.js. Draw
objects with a finger, release them into gravity, and solve 62 progressively
arranged levels with walls, targets, cups, gears, variable motion, and route
checkpoints.

## Android app

The `android/` directory contains a native Android WebView shell. It packages
the self-contained `dist/index.html` build, so gameplay works without a server
or network connection.

```powershell
$env:JAVA_HOME = "C:\Program Files\Android\Android Studio\jbr"
$env:ANDROID_HOME = "$env:LOCALAPPDATA\Android\Sdk"
& ".\android\gradlew.bat" -p android assembleDebug
```

The debug APK is generated at
`android/app/build/outputs/apk/debug/app-debug.apk`.

## Web build checks

```powershell
node scripts/build-offline.mjs
node scripts/verify-offline.mjs
node scripts/smoke-mobile.mjs
```
