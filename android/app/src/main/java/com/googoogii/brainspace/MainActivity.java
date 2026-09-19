package com.googoogii.brainspace;

import android.app.Activity;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

/**
 * A deliberately small native shell around the verified offline web game.
 * WebView keeps the same Three.js physics and touch behavior on Android while
 * local assets make the game playable without a network connection.
 */
public final class MainActivity extends Activity {
    private WebView gameView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().setStatusBarColor(Color.rgb(120, 152, 207));
        getWindow().setNavigationBarColor(Color.rgb(120, 152, 207));

        gameView = new WebView(this);
        gameView.setBackgroundColor(Color.rgb(120, 152, 207));
        gameView.setOverScrollMode(View.OVER_SCROLL_NEVER);
        gameView.setVerticalScrollBarEnabled(false);
        gameView.setHorizontalScrollBarEnabled(false);
        gameView.setWebViewClient(new WebViewClient());
        gameView.setWebChromeClient(new WebChromeClient());

        WebSettings settings = gameView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setAllowFileAccess(true);
        settings.setAllowContentAccess(false);
        settings.setMediaPlaybackRequiresUserGesture(false);
        settings.setBuiltInZoomControls(false);
        settings.setDisplayZoomControls(false);
        settings.setSupportZoom(false);

        setContentView(gameView);
        gameView.loadUrl("file:///android_asset/index.html");
    }

    @Override
    public void onBackPressed() {
        if (gameView == null) {
            super.onBackPressed();
            return;
        }
        gameView.evaluateJavascript(
                "(() => { const app = document.querySelector('#gameApp'); " +
                        "if (app && !app.classList.contains('hidden')) { " +
                        "document.querySelector('#levelMenuButton')?.click(); return true; } return false; })()",
                value -> {
                    if (!"true".equals(value)) {
                        MainActivity.super.onBackPressed();
                    }
                });
    }

    @Override
    protected void onDestroy() {
        if (gameView != null) {
            gameView.stopLoading();
            gameView.destroy();
            gameView = null;
        }
        super.onDestroy();
    }
}
