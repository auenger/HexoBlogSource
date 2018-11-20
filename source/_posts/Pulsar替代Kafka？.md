---
title: Pulsar替代Kafka？
date: 2018-11-08 18:25:18
tags: Pulsar
categories: 消息队列
---

** Pulsar是否要替代Kafka？ **

<!-- more -->

具体内容我也没看呢，反正先占着位置

{% cq %}
有一篇文章可以先看看[未来是Pulsar的吗](https://blog.csdn.net/liyiming2017/article/details/82875068)
{% endcq %}

** 个人理解的 Pulsar 优势 **

相对于kafka来说，Pulsar的优势就是数据与服务的隔离，Pulsar数据单独存储在BookKeeper中。
而且在后续上还要引入sql查询系统，方便进行数据的分析而且对于集群的调整非常方便。
