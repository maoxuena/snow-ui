# Vue UI 组件：snow-ui

[![Build Status](https://www.travis-ci.com/maoxuena/snow-ui.svg?branch=main)](https://www.travis-ci.com/maoxuena/snow-ui)

## 介绍

## 开始使用

1. 添加 CSS 样式
   使用本框架前，请在 css 中开启 border-box

   ```
   *, *::before, ::after {
   box-sizing: border-box;
   }
   ```

   IE8 及以上浏览器支持此样式

   还需要设置默认颜色等变量（后续会改为 SCSS 变量）

   ```
   :root {
     --button-height: 32px;
     --button-bg: white;
     --button-active-bg: #eee;
     --font-size: 14px;
     --border-radius: 4px;
     --color: #333;
     --border-color: #999;
     --border-color-hover: #666;
   }
   ```

   IE15 及以上浏览器支持此样式

2. 安装 @maoxuena/snow-ui
   ```
   npm i --save @maoxuena/snow-ui
   ```
3. 引入 @maoxuena/snow-ui

   ```
   import { Button } from '@maoxuena/snow-ui'
   export default {
     name: 'app',
     components: {
       's-button': Button
     }
   }
   ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

```

```
