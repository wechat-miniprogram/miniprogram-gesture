# Wechat MiniProgram Gesture Library (微信小程序手势库)

这个手势库可以使微信小程序拥有识别手势的能力。本代码部分参考自 [AlloyFinger](https://github.com/AlloyTeam/AlloyFinger)。

## 使用方法

1.  在小程序的目录下依次执行 `npm init -y`, `npm i miniprogram-gesture`
2.  小程序开启 `使用 npm 模块` 开关
3.  在开发者工具上，点击 `工具`， `构建 npm`
4.  即可使用，使用方法参考 demo

## 注意事项

1.  本事件可以利用 `WXS` 在 `渲染层` 触发，如果回调函数，只是修改 `WebView` 的 `CSS` 属性、 `DOM` 属性，建议采取此种触发方式，性能较高；也可以在 Service 层 (逻辑层) 触发。
2.  下面说明所描述的时间可能不准确，因为计时是 setTimeout 实现的

## demo

`/example` 文件夹下有 Demo ，敬请体验

## 事件解释

-   `touchStart` 触摸开始 （手指数不限）
-   `touchMove` 触摸移动 （手指数不限）
-   `touchEnd` 触摸结束 （手指数不限）
-   `touchCancel` 触摸取消 （手指数不限）

-   `multipointStart` 多指点按开始
-   `multipointEnd` 多指点按结束

-   `longTap` 长按 750ms 以上
-   `pinch` 双指捏合
-   `rotate` 双指旋转
-   `twoFingerPressMove` 双指移动
-   `pressMove` 单指点按移动
-   `swipe` 滑动
-   `tap` 点击
-   `doubleTap` 250 ms 内连续敲击两次
-   `singleTap` 敲击一次


## 使用方法

使用 `<gesture></gesture>` 包裹要识别的组件，然后 `bind***` 即可

## 属性

-   propagation：`touchstart`, `touchmove`, `touchend` 是否事件向上冒泡到父节点，`Boolean` 类型，默认为 `true`

-   requireFailure：同时绑定 `singleTap`, `doubleTap` 的时候，当用户触发 `doubleTap`事件，是否会同时触发 `singleTap`，这个概念和 iOS 设备的 `require(toFail:)` 概念一致，`Boolean` 类型，默认为 `true`