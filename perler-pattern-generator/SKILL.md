# 拼豆图纸生成器

## 技能简介

将任意图片转换为拼豆图纸，支持多种主流拼豆品牌的色号标准，自动生成带网格的图纸和材料清单。

## 功能特性

- ✅ 支持多种色号标准（MARD/Perler/Hama/Artkal/Nabbi/Yant/IKEA等）
- ✅ CIE-Lab 颜色匹配算法，还原度高
- ✅ 自定义板子尺寸（29x29、50x50、任意尺寸）
- ✅ 生成带网格线和色号标注的图纸
- ✅ 自动生成材料清单
- ✅ 批量处理支持
- ✅ 纯前端实现，无需服务器

## 使用方法

1. 打开 `web/index.html` 网页
2. 上传或拖拽图片
3. 选择色号标准（如 MARD 标准 221色）
4. 设置板子尺寸
5. 点击生成图纸
6. 下载 PNG 或 PDF 格式的图纸

## 目录结构

```
perler-pattern-generator/
├── SKILL.md                    # 本文档
├── references/
│   ├── 实现方案.md              # 详细技术方案
│   └── 颜色库/                  # 各品牌色号数据
│       ├── standards.json      # 色号标准注册表
│       ├── mard-standard.json
│       ├── perler-standard.json
│       └── ...
├── web/
│   ├── index.html              # 网页入口
│   ├── style.css               # 样式
│   └── app.js                  # 主逻辑
└── examples/                   # 示例图片
```

## 技术要点

### 颜色匹配算法

使用 CIE-Lab 色彩空间进行颜色匹配，比 RGB 更符合人眼感知：

```javascript
// RGB → Lab 转换
// 计算 ΔE 色差
// 找到最接近的拼豆颜色
```

### 像素化处理

使用 Canvas API 进行图片像素化：

```javascript
// 最近邻插值保持像素清晰
ctx.imageSmoothingEnabled = false;
```

## 扩展色号标准

要添加新的色号标准：

1. 在 `references/颜色库/` 下创建 JSON 文件
2. 格式参考已有文件
3. 在 `standards.json` 中注册

## 版本历史

- v1.0.0 - 初始版本，支持基础功能
