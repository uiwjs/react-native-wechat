#import <React/RCTBridgeModule.h>
#import "WXApi.h"
#import "WXApiObject.h"

@interface RNWechat : NSObject <RCTBridgeModule, WXApiDelegate>
@property NSString* appId;
@end
