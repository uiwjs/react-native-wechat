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
RCT_REMAP_METHOD(registerApp, resolver: (RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
    if ([WXApi registerApp:@"wxd930ea5d5a258f4f" universalLink:@"wxd930ea5d5a258f4f"]) {
        resolve(@[[NSNull null]]);
    } else {
        reject(@"-10404", INVOKE_FAILED, nil);
    }
}

@end
