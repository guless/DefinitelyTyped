// Type definitions for wechat miniprogram v2.2.2
// Project: https://developers.weixin.qq.com/miniprogram/dev/api/
// Definitions by: Samlv9 <https://github.com/Samlv9>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// ================================================================================
/*< 微信小程序框架 >*/
/// ================================================================================
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html
 */
type SceneID = 1001 | 1005 | 1006 | 1007 | 1008 | 1011 | 1012 | 1013 | 1014 | 1017 | 1019 | 1020 | 1022 | 1023 | 1024 | 1025 | 1026 | 1027 | 1028 | 1029 | 1030 | 1031 | 1032 | 1034 | 1035 | 1036 | 1037 | 1038 | 1039 | 1042 | 1043 | 1044 | 1045 | 1046 | 1047 | 1048 | 1049 | 1052 | 1053 | 1054 | 1056 | 1057 | 1058 | 1059 | 1064 | 1067 | 1068 | 1069 | 1071 | 1072 | 1073 | 1074 | 1077 | 1078 | 1079 | 1081 | 1082 | 1084 | 1089 | 1090 | 1091 | 1092 | 1095 | 1096 | 1097 | 1099 | 1102 | 1103 | 1104;

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/app.html
 */
interface ReferrerInfo {
    appId?: string; 
    extraData?: object;
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/app.html
 */
interface WXApplication {
    onLaunch?( options: { path: string; query: object; scene: SceneID; shareTicket?: string; referrerInfo?: ReferrerInfo } ): void;
    onShow?( options: { path: string; query: object; scene: SceneID; shareTicket?: string; referrerInfo?: ReferrerInfo } ): void;
    onHide?(): void;
    onUnlaunch?(): void;
    onError?( message: string ): void;
    onPageNotFound?( options: { path: string; query: object; isEntryPage: boolean; } ): void;
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
 */
interface WXPageModel {
    readonly route: string;
    setData( value: object, callback?: Function ): void;
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html#%E9%A1%B5%E9%9D%A2%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E5%87%BD%E6%95%B0
 */
interface ShareAppMessageConfiguration {
    title?: string;
    path?: string;
    imageUrl?: string;
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
 */
interface WXPage extends WXPageModel {
    data: object;
    onLoad?( query: object ): void;
    onShow?(): void;
    onReady?(): void;
    onHide?(): void;
    onUnload(): void;
    onPullDownRefresh?(): void;
    onReachBottom?(): void;
    onShareAppMessage?( options: { from: "button" | "menu"; target?: object; webViewUrl?: string; } ): ShareAppMessageConfiguration;
    onPageScroll?( options: { scrollTop: number } ): void;
    onTabItemTap?( options: { index: number; pagePath: string; text: string }): void;
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html
 */
interface WXComponentPropertyConstructor<T> {
    new (): T;
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html
 */
interface WXComponentPropertyDescriptor<T> {
    type: WXComponentPropertyConstructor<T> | null;
    value?: T;
    observer?: ( newValue: T, oldValue: T, changedPath: string ) => void;
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html
 */
type WXComponentPropertyConstructors = WXComponentPropertyConstructor<String> 
    | WXComponentPropertyConstructor<Number> 
    | WXComponentPropertyConstructor<Boolean> 
    | WXComponentPropertyConstructor<Object> 
    | WXComponentPropertyConstructor<Array<any>>;
    
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html
 */
type WXComponentPropertyDescriptors = WXComponentPropertyDescriptor<String>
    | WXComponentPropertyDescriptor<Number>
    | WXComponentPropertyDescriptor<Boolean>
    | WXComponentPropertyDescriptor<Object>
    | WXComponentPropertyDescriptor<Array<any>>;

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html
 */
interface WXComponentProperties {
    [ name: string ]: WXComponentPropertyConstructors | WXComponentPropertyDescriptors | null;
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html
 */
interface WXComponentMethods {
    [ name: string ]: Function;
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/relations.html
 */
interface WXComponentRelationDefinitions {
    [ path: string ]: WXComponentRelation;
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/relations.html
 */
interface WXComponentRelation {
    type: "parent" | "child" | "ancestor" | "descendant";
    target?: WXPartialComponent;
    linked?: ( target: WXPartialComponent ) => void;
    linkChanged?: ( target: WXPartialComponent ) => void;
    unlinked?: ( target: WXPartialComponent ) => void;
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/extend.html
 */
interface WXComponentDefinitionFilter {
    ( target: WXPartialComponent, filters: WXComponentDefinitionFilter ): void;
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html
 */
interface WXComponentLifeTimes {
    created?: Function;
    attached?: Function;
    ready?: Function;
    moved?: Function;
    detached?: Function;
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html
 */
interface WXComponentPageLifeTimes {
    show?: Function;
    hide?: Function;
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/behaviors.html
 */
interface WXPartialComponent extends WXComponentLifeTimes {
    properties?: WXComponentProperties;
    data?: object;
    methods?: WXComponentMethods,
    behaviors?: Array<WXPartialComponent | string>;
    relations?: WXComponentRelationDefinitions;
    externalClasses?: Array<string>;
    options?: object;
    lifetimes?: WXComponentLifeTimes;
    pageLifetimes?: WXComponentPageLifeTimes;
    definitionFilter?: WXComponentDefinitionFilter;
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html
 */
interface WXComponent extends WXPartialComponent {}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/app.html
 */
declare function App( properties: WXApplication ): void;

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
 */
declare function Page( properties: WXPage ): void;

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/behaviors.html
 */
declare function Behavior( properties: WXPartialComponent ): WXPartialComponent;

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html
 */
declare function Component( properties: WXComponent ): void;

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/app.html
 */
declare function getApp( options?: { allowDefault: boolean } ): WXApplication;

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/route.html
 */
declare function getCurrentPages(): Array<WXPage>;

/// ================================================================================
/*< 微信小程序 API >*/
/// ================================================================================
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/api.html
 */
interface WXAsyncAPICallBackOptions {
    success?: ( response: WXAsyncAPIResponse ) => void;
    fail?: ( response: WXAsyncAPIResponse ) => void;
    complete?: ( response: WXAsyncAPIResponse ) => void;
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/api.html
 */
interface WXAsyncAPIResponse {
    errMsg: string;
    errCode?: number;
}

/**
 * @see https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers
 */
interface WXRequestHeaders {
    [ name: string ]: string;
}

/**
 * @see https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers
 */
interface WXResponseHeaders {
    [ name: string ]: string;
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
 */
type WXRequestMethods = "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "CONNECT" | "OPTIONS" | "TRACE" | "PATCH";

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html
 */
type WXResponseDataType = "json" | string;

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html
 */
type WXResponseType = "text" | "arraybuffer";

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html
 */
interface WXRequestOptions extends WXAsyncAPICallBackOptions {
    url: string; 
    data?: object | string | ArrayBuffer; 
    header?: WXRequestHeaders; 
    method: WXRequestMethods;
    dataType: WXResponseDataType;
    responseType: WXResponseType;
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html
 */
interface TaskAsync {
    abort(): void;
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.html
 */
interface TaskRequest extends TaskAsync {}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html
 */
interface WXAPI {
    /** 网络 */
    request( options: WXRequestOptions ): TaskRequest;
}
/// ================================================================================
/*< 微信小游戏 API >*/
/// ================================================================================
/**
 * @see https://developers.weixin.qq.com/minigame/dev/api/render/canvas/wx.createCanvas.html
 */
interface WXAPI {
    
    
    
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/api/
 */
declare var wx: WXAPI;
// "invokeWebviewMethod|drawCanvas|createContext|createCanvasContext|canvasToTempFilePath|canvasGetImageData|canvasPutImageData|getAccountInfoSync|getShareInfo|pageScrollTo|chooseInvoiceTitle|arrayBufferToBase64|base64ToArrayBuffer|openSetting|getExtConfig|chooseMedia|chooseWeChatContact|uploadEncryptedFileToCDN|onUploadEncryptedFileToCDNProgress|getExtConfigSync|showShareMenu|hideShareMenu|updateShareMenu|openUrl|setNavigationBarColor|setNavigationBarAlpha|vibrateShort|vibrateLong|getSetting|checkIsSupportFacialRecognition|startFacialRecognitionVerify|startFacialRecognitionVerifyAndUploadVideo|sendBizRedPacket|sendGoldenRedPacket|openGoldenRedPacketDetail|addPhoneContact|setScreenBrightness|getScreenBrightness|getWeRunData|uploadWeRunData|addWeRunData|canIUse|setPageStyle|triggerGettingWidgetData|navigateToMiniProgram|navigateToDevMiniProgram|navigateBackMiniProgram|setNavigationBarRightButton|onTapNavigationBarRightButton|setTopBarText|setTabBarBadge|removeTabBarBadge|showTabBarRedDot|hideTabBarRedDot|showTabBar|hideTabBar|setTabBarStyle|setTabBarItem|setBackgroundColor|setBackgroundTextStyle|setEnableDebug|captureScreen|onUserCaptureScreen|setKeepScreenOn|checkIsSupportSoterAuthentication|startSoterAuthentication|checkIsSoterEnrolledInDevice|openDeliveryList|reportIDKey|reportKeyValue|setNavigationBarTitle|showNavigationBarLoading|hideNavigationBarLoading|startPullDownRefresh|stopPullDownRefresh|operateWXData|getOpenDeviceId|getMenuButtonBoundingClientRect|openBluetoothAdapter|closeBluetoothAdapter|getBluetoothAdapterState|onBluetoothAdapterStateChange|startBluetoothDevicesDiscovery|stopBluetoothDevicesDiscovery|getBluetoothDevices|getConnectedBluetoothDevices|createBLEConnection|closeBLEConnection|getBLEDeviceServices|getBLEDeviceCharacteristics|notifyBLECharacteristicValueChanged|notifyBLECharacteristicValueChange|readBLECharacteristicValue|writeBLECharacteristicValue|onBluetoothDeviceFound|onBLEConnectionStateChanged|onBLEConnectionStateChange|onBLECharacteristicValueChange|startBeaconDiscovery|stopBeaconDiscovery|getBeacons|onBeaconUpdate|onBeaconServiceChange|startWifi|stopWifi|getWifiList|getConnectedWifi|connectWifi|presetWifiList|setWifiList|onGetWifiList|onWifiConnected|onEvaluateWifi|getHCEState|startHCE|stopHCE|sendHCEMessage|onHCEMessage|redirectTo|reLaunch|navigateTo|switchTab|navigateBack|onAppShow|offAppShow|onAppHide|offAppHide|onError|offError|getLaunchOptionsSync|getStorage|getStorageSync|setStorage|setStorageSync|removeStorage|removeStorageSync|clearStorage|clearStorageSync|getStorageInfo|getStorageInfoSync|connectSocket|closeSocket|sendSocketMessage|onSocketOpen|onSocketClose|onSocketMessage|onSocketError|uploadFile|downloadFile|addNativeDownloadTask|calRqt|chooseImage|previewImage|getImageInfo|saveImageToPhotosAlbum|startRecord|stopRecord|playVoice|pauseVoice|stopVoice|onVoicePlayEnd|chooseVideo|saveVideoToPhotosAlbum|loadFontFace|getLocation|openLocation|chooseLocation|startLocationUpdate|stopLocationUpdate|onLocationChange|getNetworkType|onNetworkStatusChange|getSystemInfo|getSystemInfoSync|getBatteryInfo|getBatteryInfoSync|startAccelerometer|stopAccelerometer|onAccelerometerChange|startCompass|stopCompass|onCompassChange|reportAction|getBackgroundAudioManager|getRecorderManager|getBackgroundAudioPlayerState|playBackgroundAudio|pauseBackgroundAudio|seekBackgroundAudio|stopBackgroundAudio|onBackgroundAudioPlay|onBackgroundAudioPause|onBackgroundAudioStop|login|checkSession|authorize|getUserInfo|requestPayment|verifyPaymentPassword|bindPaymentCard|requestPaymentToBank|requestVirtualPayment|openOfflinePayView|openWCPayCardList|requestMallPayment|addCard|openCard|scanCode|openQRCode|chooseAddress|saveFile|openDocument|getSavedFileList|getSavedFileInfo|getFileInfo|removeSavedFile|getFileSystemManager|chooseContact|removeUserCloudStorage|setUserCloudStorage|makePhoneCall|makeVoIPCall|onAppRoute|onAppRouteDone|onAppEnterBackground|onAppEnterForeground|onAppUnhang|onPageReload|onPageNotFound|offPageNotFound|createAnimation|createInnerAudioContext|getAvailableAudioSources|createAudioContext|createVideoContext|createMapContext|createCameraContext|createLivePlayerContext|createLivePusherContext|onWebviewEvent|onNativeEvent|hideKeyboard|getPublicLibVersion|showModal|showToast|hideToast|showLoading|hideLoading|showActionSheet|reportAnalytics|reportMonitor|getClipboardData|setClipboardData|createSelectorQuery|createIntersectionObserver|nextTick|updatePerfData|traceEvent|onMemoryWarning|getUpdateManager|createWorker|voiceSplitJoint|uploadSilkVoice|downloadSilkVoice|getResPath|setResPath|env|getLogManager|cloud|version"
// 0 addCard 批量添加卡券。
// 1 addPhoneContact 调用后，用户可以选择将该表单以“新增联系人”或“添加到已有联系人”的方式，写入手机系统通讯录，完成手机通讯录联系人和联系方式的增加。
// 2 arrayBufferToBase64 将 ArrayBuffer 数据转成 Base64 字符串
// 3 authorize 提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。
// 4 base64ToArrayBuffer 将 Base64 字符串转成 ArrayBuffer 数据
// 5 canIUse 判断小程序的API，回调，参数，组件等是否在当前版本可用。
// 6 canvasGetImageData 返回一个数组，用来描述 canvas 区域隐含的像素数据
// 7 canvasPutImageData 将像素数据绘制到画布的方法
// 8 canvasToTempFilePath 把当前画布指定区域的内容导出生成指定大小的图片，并返回文件路径。
// 9 checkIsSoterEnrolledInDevice 获取设备内是否录入如指纹等生物信息的接口
// 10 checkIsSupportSoterAuthentication 获取本机支持的 SOTER 生物认证方式
// 11 checkSession 通过上述接口获得的用户登录态拥有一定的时效性。用户越久未使用小程序，用户登录态越有可能失效。反之如果用户一直在使用小程序，则用户登录态一直保持有效。具体时效逻辑由微信维护，对开发者透明。开发者只需要调用wx.checkSession接口**检测当前用户登录态是否有效**。登录态过期后开发者可以再调用wx.login获取新的用户登录态。
// 12 chooseAddress 调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址。
// 13 chooseContact 调起选择手机通讯录联系人界面，返回用户选择的联系人信息。
// 14 chooseImage 从本地相册选择图片或使用相机拍照。
// 15 chooseInvoiceTitle 选择用户的发票抬头。
// 16 chooseLocation 打开地图选择位置。
// 17 chooseVideo 拍摄视频或从手机相册中选视频，返回视频的临时文件路径。
// 18 clearStorage 清理本地数据缓存。
// 19 clearStorageSync 同步清理本地数据缓存
// 20 closeBLEConnection 断开与低功耗蓝牙设备的连接
// 21 closeBluetoothAdapter 关闭蓝牙模块，使其进入未初始化状态。调用该方法将断开所有已建立的链接并释放系统资源。建议在使用小程序蓝牙流程后调用，与`wx.openBluetoothAdapter`成对调用。
// 22 closeSocket 关闭 WebSocket 连接。
// 23 connectSocket 创建一个 [WebSocket](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket) 连接。**使用前请先阅读[说明](./api-network.md)**。
// 24 connectWifi 连接 Wi-Fi。若已知 Wi-Fi 信息，可以直接利用该接口连接。仅 Android 与 iOS 11 以上版本支持。
// 25 createAnimation 创建一个动画实例[animation](#animation)。调用实例的方法来描述动画。最后通过动画实例的`export`方法导出动画数据传递给组件的`animation`属性。
// 26 createAudioContext 创建并返回 audio 上下文 `audioContext` 对象。在自定义组件下，第二个参数传入组件实例this，以操作组件内 `<audio/>` 组件
// 27 createBLEConnection 连接低功耗蓝牙设备。
// 28 createCameraContext 创建并返回 camera 上下文 `cameraContext` 对象，`cameraContext` 与页面的 `camera` 组件绑定，一个页面只能有一个camera，通过它可以操作对应的 `<camera/>` 组件。
// 29 createCanvasContext 创建 canvas 绘图上下文（指定 canvasId）。在自定义组件下，第二个参数传入组件实例this，以操作组件内 `<canvas/>` 组件
// 30 createContext 创建并返回绘图上下文。
// 31 createInnerAudioContext 创建并返回内部 audio 上下文 `innerAudioContext` 对象。*本接口是 `wx.createAudioContext` 升级版。*
// 32 createLivePlayerContext 操作对应的 `<live-player/>` 组件。
// 33 createLivePusherContext 创建并返回 `live-pusher` 上下文 `LivePusherContext` 对象，`LivePusherContext` 与页面的 `<live-pusher />` 组件绑定，一个页面只能有一个 `live-pusher`，通过它可以操作对应的 `<live-pusher/>` 组件。
// 34 createMapContext 创建并返回 map 上下文 `mapContext` 对象。在自定义组件下，第二个参数传入组件实例this，以操作组件内 `<map/>` 组件
// 35 createSelectorQuery undefined
// 36 createVideoContext 创建并返回 video 上下文 `videoContext` 对象。在自定义组件下，第二个参数传入组件实例this，以操作组件内 `<video/>` 组件
// 37 downloadFile 下载文件资源到本地，客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径。**使用前请先阅读[说明](./api-network.md)**。
// 38 getBLEDeviceCharacteristics 蓝牙设备characteristic(特征值)信息
// 39 getBLEDeviceServices 获取蓝牙设备所有 service（服务）
// 40 getBackgroundAudioManager 获取**全局唯一**的背景音频管理器 `backgroundAudioManager`。
// 41 getBackgroundAudioPlayerState 获取后台音乐播放状态。
// 42 getBeacons 获取所有已搜索到的`iBeacon`设备
// 43 getBluetoothAdapterState 获取本机蓝牙适配器状态
// 44 getBluetoothDevices 获取在小程序蓝牙模块生效期间所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备。
// 45 getClipboardData 获取系统剪贴板内容
// 46 getConnectedBluetoothDevices 根据 uuid 获取处于已连接状态的设备
// 47 getConnectedWifi 获取已连接中的 Wi-Fi 信息
// 48 getExtConfig 获取第三方平台自定义的数据字段。
// 49 getExtConfigSync 获取第三方平台自定义的数据字段的同步接口。
// 50 getFileInfo 获取文件信息
// 51 getHCEState 判断当前设备是否支持 HCE 能力。
// 52 getImageInfo 获取图片信息
// 53 getLocation 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用；当用户点击“显示在聊天顶部”时，此接口可继续调用。
// 54 getNetworkType 获取网络类型。
// 55 getOpenDeviceId 获取微信替设备生成的唯一标识，用于判断设备是否更换。获取的数据为AES加密数据，需要自行解密。
// 56 getRecorderManager 获取**全局唯一**的录音管理器 `recorderManager`。
// 57 getSavedFileInfo 获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 [wx.getFileInfo](./getFileInfo.md) 接口。
// 58 getSavedFileList 获取本地已保存的文件列表
// 59 getScreenBrightness 获取屏幕亮度。
// 60 getSetting 获取用户的当前设置。
// 61 getShareInfo 获取转发详细信息
// 62 getStorage 从本地缓存中异步获取指定 key 对应的内容。
// 63 getStorageInfo 异步获取当前storage的相关信息
// 64 getStorageInfoSync 同步获取当前storage的相关信息
// 65 getStorageSync 从本地缓存中同步获取指定 key 对应的内容。
// 66 getSystemInfo 获取系统信息。
// 67 getSystemInfoSync 获取系统信息同步接口
// 68 getUserInfo 获取用户信息，withCredentials 为 true 时需要先调用 [wx.login](./api-login.md#wxloginobject) 接口。
// 69 getWeRunData 获取用户过去三十天微信运动步数，需要先调用 [wx.login](./api-login.md#wxloginobject) 接口。
// 70 getWifiList 请求获取 Wi-Fi 列表，在 `onGetWifiList` 注册的回调中返回 wifiList 数据。iOS 将跳转到系统的 Wi-Fi 界面，Android 不会跳转。
// 71 hideLoading 隐藏 loading 提示框
// 72 hideNavigationBarLoading 隐藏导航条加载动画。
// 73 hideShareMenu 隐藏转发按钮
// 74 hideTabBar 隐藏 tabBar
// 75 hideTabBarRedDot 隐藏 tabBar 某一项的右上角的红点
// 76 hideToast 隐藏消息提示框
// 77 login 调用接口获取**登录凭证（code）**进而换取用户登录态信息，包括用户的**唯一标识（openid）** 及本次登录的 **会话密钥（session_key）**等。**用户数据的加解密通讯**需要依赖会话密钥完成。
// 78 makePhoneCall wx.makePhoneCall({
// 79 makeVoIPCall 调起 VoIP 音视频通话界面。
// 80 navigateBack 关闭当前页面，返回上一页面或多级页面。可通过 [`getCurrentPages()`](../framework/app-service/page.md#getCurrentPages()) 获取当前的页面栈，决定需要返回几层。
// 81 navigateBackMiniProgram 返回到上一个小程序，只有在当前小程序是被其他小程序打开时可以调用成功
// 82 navigateTo 保留当前页面，跳转到应用内的某个页面，使用`wx.navigateBack`可以返回到原页面。
// 83 navigateToMiniProgram 打开同一公众号下关联的另一个小程序。**（注：必须是同一公众号下，而非同个 open 账号下）**
// 84 notifyBLECharacteristicValueChange 启用低功耗蓝牙设备特征值变化时的 notify 功能，订阅特征值。注意：必须设备的特征值支持`notify`或者`indicate`才可以成功调用，具体参照 characteristic 的 properties 属性 
// 85 onAccelerometerChange 监听加速度数据，频率：5次/秒，接口调用后会自动开始监听，可使用 `wx.stopAccelerometer` 停止监听。
// 86 onBLECharacteristicValueChange 监听低功耗蓝牙设备的特征值变化。必须先启用`notify`接口才能接收到设备推送的notification。
// 87 onBLEConnectionStateChange 监听低功耗蓝牙连接的错误事件，包括设备丢失，连接异常断开等等。
// 88 onBackgroundAudioPause 监听音乐暂停。
// 89 onBackgroundAudioPlay 监听音乐播放。
// 90 onBackgroundAudioStop 监听音乐停止。
// 91 onBeaconServiceChange 监听 `iBeacon` 服务的状态变化
// 92 onBeaconUpdate 监听 `iBeacon` 设备的更新事件
// 93 onBluetoothAdapterStateChange 监听蓝牙适配器状态变化事件
// 94 onBluetoothDeviceFound 监听寻找到新设备的事件
// 95 onCompassChange 监听罗盘数据，频率：5次/秒，接口调用后会自动开始监听，可使用`wx.stopCompass`停止监听。
// 96 onEvaluateWifi 监听需要评估连上的 Wi-Fi 的请求，在回调里必须返回 `confidence` 字段
// 97 onGetWifiList 监听在获取到 Wi-Fi 列表数据时的事件，在回调中将返回 wifiList。
// 98 onHCEMessage 监听 NFC 设备的消息回调，并在回调中处理。返回参数中 `messageType` 表示消息类型，目前有如下值：
// 99 onNetworkStatusChange 监听网络状态变化。
// 100 onSocketClose 监听WebSocket关闭。
// 101 onSocketError 监听WebSocket错误。
// 102 onSocketMessage 监听WebSocket接受到服务器的消息事件。
// 103 onSocketOpen 监听WebSocket连接打开事件。
// 104 onUserCaptureScreen 监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件
// 105 onWifiConnected 监听连接上 Wi-Fi 的事件。
// 106 openBluetoothAdapter 初始化小程序蓝牙模块，生效周期为调用`wx.openBluetoothAdapter`至调用`wx.closeBluetoothAdapter`或小程序被销毁为止。
// 107 openCard 查看微信卡包中的卡券。
// 108 openDocument 新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx
// 109 openLocation ​使用微信内置地图查看位置。
// 110 openSetting 调起客户端小程序设置界面，返回用户设置的操作结果。
// 111 pageScrollTo 将页面滚动到目标位置。
// 112 pauseBackgroundAudio 暂停播放音乐。
// 113 pauseVoice 暂停正在播放的语音。再次调用wx.playVoice播放同一个文件时，会从暂停处开始播放。如果想从头开始播放，需要先调用 wx.stopVoice。
// 114 playBackgroundAudio 使用后台播放器播放音乐，对于微信客户端来说，只能同时有一个后台音乐在播放。当用户离开小程序后，音乐将暂停播放；当用户点击“显示在聊天顶部”时，音乐不会暂停播放；当用户在其他小程序占用了音乐播放器，原有小程序内的音乐将停止播放。
// 115 playVoice 开始播放语音，同时只允许一个语音文件正在播放，如果前一个语音文件还没播放完，将中断前一个语音播放。
// 116 previewImage 预览图片。
// 117 reLaunch 关闭所有页面，打开到应用内的某个页面。
// 118 readBLECharacteristicValue 读取低功耗蓝牙设备的特征值的二进制数据值。注意：必须设备的特征值支持`read`才可以成功调用，具体参照 characteristic 的 properties 属性
// 119 redirectTo 关闭当前页面，跳转到应用内的某个页面。
// 120 removeSavedFile 删除本地存储的文件
// 121 removeStorage 从本地缓存中异步移除指定 key 。
// 122 removeStorageSync 从本地缓存中同步移除指定 key 。
// 123 removeTabBarBadge 移除 tabBar 某一项右上角的文本
// 124 reportAnalytics 自定义分析数据上报接口。使用前，需要在小程序管理后台自定义分析中新建事件，配置好事件名与字段。

// 126 requestPayment 发起微信支付。
// 127 saveFile 保存文件到本地。**注意：saveFile 会把临时文件移动，因此调用成功后传入的 tempFilePath 将不可用**
// 128 saveImageToPhotosAlbum 保存图片到系统相册。需要[用户授权](./authorize-index.md) scope.writePhotosAlbum
// 129 saveVideoToPhotosAlbum 保存视频到系统相册。需要[用户授权](./authorize-index.md) scope.writePhotosAlbum
// 130 scanCode 调起客户端扫码界面，扫码成功后返回对应的结果
// 131 seekBackgroundAudio 控制音乐播放进度。
// 132 sendHCEMessage 发送 NFC 消息。仅在安卓系统下有效。
// 133 sendSocketMessage 通过 WebSocket 连接发送数据，需要先 [wx.connectSocket](#wxconnectsocketobject)，并在 [wx.onSocketOpen](#wxonsocketopencallback) 回调之后才能发送。
// 134 setClipboardData 设置系统剪贴板的内容
// 135 setEnableDebug 设置是否打开调试开关，此开关对正式版也能生效。
// 136 setKeepScreenOn 设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效。
// 137 setNavigationBarColor wx.setNavigationBarColor({
// 138 setNavigationBarTitle 动态设置当前页面的标题。
// 139 setScreenBrightness 设置屏幕亮度。
// 140 setStorage 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。
// 141 setStorageSync 将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。
// 142 setTabBarBadge 为 tabBar 某一项的右上角添加文本
// 143 setTabBarItem 动态设置 tabBar 某一项的内容
// 144 setTabBarStyle 动态设置 tabBar 的整体样式
// 145 setTopBarText 动态设置置顶栏文字内容，只有当前小程序被置顶时能生效，如果当前小程序没有被置顶，也能调用成功，但是不会立即生效，只有在用户将这个小程序置顶后才换上设置的文字内容。**注意：调用成功后，需间隔 5s 才能再次调用此接口，如果在 5s 内再次调用此接口，会回调 fail，errMsg："setTopBarText: fail invoke too frequently"**
// 146 setWifiList 在 `onGetWifiList` 回调后，利用接口设置 wifiList 中 AP 的相关信息。
// 147 showActionSheet ​显示操作菜单
// 148 showLoading 显示 loading 提示框, 需主动调用 [wx.hideLoading](#wxhideloading) 才能关闭提示框
// 149 showModal ​显示模态弹窗
// 150 showNavigationBarLoading 在当前页面显示导航条加载动画。
// 151 showShareMenu 显示当前页面的转发按钮
// 152 showTabBar 显示 tabBar
// 153 showTabBarRedDot 显示 tabBar 某一项的右上角的红点
// 154 showToast 显示消息提示框
// 155 startAccelerometer 开始监听加速度数据。
// 156 startBeaconDiscovery 开始搜索附近的`iBeacon`设备
// 157 startBluetoothDevicesDiscovery 开始搜寻附近的蓝牙外围设备。注意，该操作比较耗费系统资源，请在搜索并连接到设备后调用 stop 方法停止搜索。
// 158 startCompass 开始监听罗盘数据。
// 159 startHCE 初始化 NFC 模块。
// 160 startPullDownRefresh 开始下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致
// 161 startRecord 开始录音。当主动调用`wx.stopRecord`，或者录音超过1分钟时自动结束录音，返回录音文件的临时文件路径。当用户离开小程序时，此接口无法调用。
// 162 startSoterAuthentication 开始 SOTER 生物认证
// 163 startWifi 初始化 Wi-Fi 模块。
// 164 stopAccelerometer 停止监听加速度数据。
// 165 stopBackgroundAudio 停止播放音乐。
// 166 stopBeaconDiscovery 停止搜索附近的`iBeacon`设备
// 167 stopBluetoothDevicesDiscovery 停止搜寻附近的蓝牙外围设备。若已经找到需要的蓝牙设备并不需要继续搜索时，建议调用该接口停止蓝牙搜索。
// 168 stopCompass 停止监听罗盘数据。
// 169 stopHCE 关闭 NFC 模块。仅在安卓系统下有效。
// 170 stopPullDownRefresh 停止当前页面下拉刷新。
// 171 stopRecord ​主动调用停止录音。
// 172 stopVoice 结束播放语音。
// 173 stopWifi 关闭 Wi-Fi 模块。
// 174 switchTab 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
// 175 updateShareMenu 更新转发属性
// 176 uploadFile 将本地资源上传到开发者服务器，客户端发起一个 HTTPS POST 请求，其中 `content-type` 为 `multipart/form-data` 。**使用前请先阅读[说明](./api-network.md)**。
// 177 vibrateLong 使手机发生较长时间的振动（400ms）
// 178 vibrateShort 使手机发生较短时间的振动（15ms）
// 179 writeBLECharacteristicValue 向低功耗蓝牙设备特征值中写入二进制数据。注意：必须设备的特征值支持`write`才可以成功调用，具体参照 characteristic 的 properties 属性
