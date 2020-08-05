#import "RNWechat.h"

// Define error messages
#define INVOKE_FAILED (@"WeChat API invoke returns false.")

@implementation RNWechat {
    BOOL *_api;
}

RCT_EXPORT_MODULE()
- (instancetype)init {
    self = [super init];
    if (self) {
        [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(handleOpenURL:) name:@"RCTOpenURLNotification" object:nil];
        // 在register之前打开log, 后续可以根据log排查问题
        [WXApi startLogByLevel:WXLogLevelDetail logBlock:^(NSString *log) {
            NSLog(@"WeChatSDK: %@", log);
        }];
    }
    return self;
}

- (void)dealloc
{
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}

- (BOOL)handleOpenURL:(NSNotification *)aNotification
{
    NSString * aURLString =  [aNotification userInfo][@"url"];
    NSURL * aURL = [NSURL URLWithString:aURLString];

    if ([WXApi handleOpenURL:aURL delegate:self])
    {
        return YES;
    } else {
        return NO;
    }
}

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

+ (BOOL)requiresMainQueueSetup {
    return YES;
}

// 注册 appid
RCT_REMAP_METHOD(registerApp, appid:(NSString *)appid universalLink:(NSString*)universalLink resolver: (RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
    @try {
        self.appId = appid;
        resolve(@([WXApi registerApp: appid universalLink: universalLink]));
    } @catch (NSException *exception) {
        reject(@"-10404", [NSString stringWithFormat:@"%@ %@", exception.name, exception.userInfo], nil);
    }
}

// 检查微信是否已被用户安装, 微信已安装返回YES，未安装返回NO。
RCT_EXPORT_METHOD(isWXAppInstalled: (RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
    if ([WXApi isWXAppInstalled]) {
        resolve(@YES);
    } else {
        resolve(@NO);
    }
}

/*! @brief 打开微信
 * @return 成功返回YES，失败返回NO。
 */
RCT_EXPORT_METHOD(openWXApp: (RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
    if ([WXApi openWXApp]) {
        resolve(@YES);
    } else {
        resolve(@NO);
    }
}

// 判断当前微信的版本是否支持OpenApi，支持返回YES，不支持返回NO。
RCT_EXPORT_METHOD(isWXAppSupportApi: (RCTPromiseResolveBlock)resolve :(RCTPromiseRejectBlock)reject) {
    if ([WXApi isWXAppSupportApi]) {
        resolve(@YES);
    } else {
        resolve(@NO);
    }
}

// 获取当前微信SDK的版本号
RCT_EXPORT_METHOD(getApiVersion: (RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
    resolve([WXApi getApiVersion]);
}

@end
