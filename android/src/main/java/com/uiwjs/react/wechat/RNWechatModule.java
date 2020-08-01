package com.uiwjs.react.wechat;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.tencent.mm.opensdk.openapi.WXAPIFactory;
import com.tencent.mm.opensdk.openapi.IWXAPI;

public class RNWechatModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;
    private String appId;
    private IWXAPI api = null;

    public RNWechatModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "RNWechat";
    }

    @ReactMethod
    public void registerApp(String appid, Promise promise) {
        try {
            this.appId = appid;
            api = WXAPIFactory.createWXAPI(reactContext.getApplicationContext(), appid, true);
            promise.resolve(api.registerApp(appid));
        } catch (Exception e) {
            promise.reject("-1", e.getMessage());
        }
    }
}
