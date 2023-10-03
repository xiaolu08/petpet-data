# Petpet Data

## 自动构建索引

依赖 **Github Action** 运行 `node index-builder.cjs` 实现推送时自动构建 Petpet Data

## 自动解压模板

依赖 **Github Action** 运行 `node unzip.cjs` 实现推送时自动解压 `/unzip` 目录文件并移动至 `/data`

## 标准

详见 [Petpet 项目](https://github.com/Dituon/petpet)

#### `index.json`

用于静态索引所需资源

| 参数       | 类型       | 描述       |
| ---------- | ---------- | ---------- |
| `version`  | `float`    | 标准版本号 |
| `dataPath` | `string`   | 资源路径   |
| `dataList` | `string[]` | 模板索引   |
| `fontList` | `string[]` | 字体索引   |

#### `index.map.json`

提供模板基本信息 (可选)

| 参数     | 类型       | 描述                      |
| -------- | ---------- | ------------------------- |
| `length` | `int`      | 模板资源数量              |
| `alias`  | `string[]` | 别名                      |
| `type`   | `enum`     | 模板类型 (`IMG` 或 `GIF`) |

#### 实现

- [Petpet (Java)](https://github.com/Dituon/petpet)
- [Petpet-js (TypeScript)](https://github.com/Dituon/petpet-js)

## 构建脚本

配置文件 `config.json`

| 参数            | 类型      | 描述                  |
| --------------- | --------- | --------------------- |
| `path`          | `int`     | 资源路径              |
| `targetVersion` | `float`   | 标准版本              |
| `buildIndexMap` | `boolean` | 构建 `index.map.json` |