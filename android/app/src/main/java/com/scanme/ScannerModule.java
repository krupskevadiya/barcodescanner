package com.scanme;

import android.content.Intent;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ScannerModule extends ReactContextBaseJavaModule {


    ScannerModule(ReactApplicationContext context) {
        super(context);

    }

    @NonNull
    @Override
    public String getName() {
        return "ScannerModule";
    }

    @ReactMethod
    public void scanBarcode() {
        Intent i = new Intent(getReactApplicationContext(), BarcodeScannerActivity.class);
        i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        getReactApplicationContext().startActivity(i);
    }


}
