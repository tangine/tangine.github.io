# CSS

## BFC(块级格式化上下文)
**概念**：(Block Formatting Context，块级格式化上下文)，是CSS中一个独立的渲染区域，可以把它当作一个的“隔离的盒子”：内部布局不影响外部，外部布局也不影响内部。

+ 根元素 <html>
+ float: left / right，且不为 none
+ position: absolute / fixed
+ display: inline-block / table-cell / table-caption
+ overflow: hidden / auto / scroll，即不为 visible
+ display: flow-root ✅ 推荐，专门用来创建 BFC，无副作用
+ contain: layout / content / paint
+ display: flex / grid / inline-flex / inline-grid 会创建独立格式化上下文，常和 BFC 一起讨论，但严格说它们是 Flex/Grid Formatting Context

**特性**
+ 同一个BFC内，相邻块级元素的垂直margin会折叠，不同BFC之间不会折叠


## 跨域是什么？CORS、JSONP、代理怎么选？
跨域，通常指浏览器里的 同源策略 限制：当前页面的“源”和请求目标的“源”不一致。
源 = 协议 + 域名 + 端口，三者完全一致才算同源。

## 首屏性能优化实战
首屏性能优化，核心不是“背优化清单”，而是闭环：测量 → 定位瓶颈 → 按优先级优化 → 监控防回归。首屏通常指用户不滚动就能看到的内容，重点指标是 FCP、LCP、TTFB、TBT/TTI、CLS、INP。