require "json"

package = JSON.parse(File.read(File.join(__dir__, "..", "package.json")))

Pod::Spec.new do |s|
  s.name         = "RNWechat"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.description  = <<-DESC
                      React Native 包使用微信分享、登录、收藏、支付等功能。
                   DESC
  s.homepage     = "https://github.com/uiwjs/react-native-wechat"
  # brief license entry:
  # s.license      = "MIT"
  # optional - use expanded license entry instead:
  # s.license    = { :type => "MIT", :file => "LICENSE" }
  s.license      = package["license"]
  s.author       = { package["author"]["name"] => package["author"]["email"] }
  s.platforms    = { :ios => "9.0" }
  s.source       = { :git => "https://github.com/uiwjs/react-native-wechat.git", :tag => "#{s.version}" }

  s.source_files = "**/*.{h,c,m,swift}"
  s.requires_arc = true
  # s.static_framework = true

  s.dependency "React"
  # 通过 CocoaPods 集成
  # https://developers.weixin.qq.com/doc/oplatform/Mobile_App/Access_Guide/iOS.html#_4-1-%E9%80%9A%E8%BF%87-CocoaPods-%E9%9B%86%E6%88%90
  # https://cocoapods.org/pods/WechatOpenSDK
  s.dependency "WechatOpenSDK", "1.8.7.1"
  # s.dependency "libWeChatSDK"
  # s.vendored_library "libWeChatSDK"
  # s.library = "c++", "z"
  # ...
  # s.dependency "..."
end

