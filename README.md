![](./design/badge.png)

# papoGen
[![npm version](https://badge.fury.io/js/papogen.svg)](https://badge.fury.io/js/papogen)
[![npm downloads](https://img.shields.io/npm/dm/papogen.svg)](https://img.shields.io/npm/dm/papogen.svg)

Using **paper.css** and **pug.js** to generate.

If you feel `papogen` is good, hope you can give a `star`!

---
## 1. About

*papoGen* is a static webpage's generator. To generate a webpage, you won't need to have web develop experience. Only need do is know the format of Markdown, JSON and YAML. Then you can generate your own webpage by our pre-defined templates. Besides, if you want to design your own style of web page, you can also develop your own template by *papoGen* without having too much time. *papoGen* is developed by [*Toolbuddy*](https://github.com/toolbuddy). If you have like *papoGen* or our other tools, please give us a "star"! If you have any problem or suggestion, please feel free to contact with us. We'd love to help you.

---
## 2. Usage

> [使用說明 - 中文詳細版本](example/)

1. **Installation**
    ```bash
    » [sudo] npm install papogen -g
    ```
    * Helping Manual: List out all currently support.
        * Explains each parameter we support currently!
        * See more in [here](https://github.com/toolbuddy/papoGen/blob/master/example/README.md).
2. **Generation**
    ```bash
    » papogen -s test/ -o docs/ -t papoGen -m doc
    ```

---
## Description

* The [papoGen document (i.e., demo page)](https://toolbuddy.github.io/papoGen/) is generated by `papoGen`!
    * Using JSON files under the folder `test/`
        * In `test/`, there are several categories of scripts, which are in their own directory.
        * Besides, `README.md` in their directory explains the format of it's type.
    * View more:
        * [doc page](https://toolbuddy.github.io/papoGen/)
        * [resume page](https://toolbuddy.github.io/papoGen/resume)
* Generating by script template
    * Using `-h` to list the last part of all supporting scripts.
    * Using `papogen -c <script>/<format_1>/<format_2>/... -o <output>` to generate our template file.
        * `<script>` is the blue one. (in `-h` output message)
        * `<format>` is the grey one. (in `-h` output message)
            * Version after `0.0.12` support several templates specified by using `/` to separate each format.
            * You can using `json/all` to get all current supported copy to target the output directory.

* Checking our `example/` to see more!

### Format: Markdown (Recommended!)

* Using Markdowm format as configuration.
* *Different* from above format.
* Generates from the file in markdown directly.
* Supports multiple markdown files as input.
* Supports model:
    * `md_doc`
* Example command

```bash
» papogen -s test/md -o docs/md -g md -m md_doc -t Graph\ Theory
```

### Format: JSON (Default)

* Using JSON format as configuration.
* Example command: See more in [here](https://github.com/toolbuddy/papoGen/blob/master/test/json/README.md).

```bash
# Use directly (from source code)
» node main.js -s test/ -o docs/ -t papoGen
# By installation
» papogen -s test/ -o docs/ -t papoGen -m doc
```

* After specifying the `src` directory, paperUI will fetch all the JSON files under `src`, and use the *filename* for each as "tag" in output.
* *papoGen* will base on the specified format to generate your content (see more detail below)
    * Currently support: `text` (see the source dir: `test/` as input, and destination dir: `docs/` as output)

### Format: YAML

* Using YAML format as configuration.
* Some formats are defined in [JSON](https://github.com/toolbuddy/papoGen/blob/master/test/json/README.md).
* Example command:

```bash
# Use directly (from source code)
» node main.js -s test/ -o docs/ -g yaml -t papoGen
# By installation
» papogen -s test/ -o docs/ -t papoGen -m doc -g yaml
```

* After specifying the `src/` directory, paperUI will fetch all files in JSON format under `src/`, and use the *filename* for each as "tag" in output.
* *papoGen* will base on the specified format to generate content (see more detail below)
    * Currently support: `text` (see the source dir: `test/` as input, and destination dir: `docs/` as output)

---
## DEMO

* Example: Generating by *papoGen* format
   * [JSON - doc](https://toolbuddy.github.io/papoGen/)
   * [JSON - resume](https://toolbuddy.github.io/papoGen/resume/)
   * [YAML - doc](https://toolbuddy.github.io/papoGen/doc-yaml)
   * [YAML - resume](https://toolbuddy.github.io/papoGen/resume-yaml)
* Example: Generating directly from **Markdown** format
   * [From Markdown - md_doc](https://toolbuddy.github.io/papoGen/md/)
      * Support "MathJax" & "Table of content"!
   * Graph Theory Tutorial:
      * [ch3](https://toolbuddy.github.io/Graph-Theory/matching-factor/index.html)
      * [ch4](https://toolbuddy.github.io/Graph-Theory/connectivity-path/)
   * [simulation project - 802.11 wireless illustration](https://kevinbird61.github.io/simulation-wireless-802.11/)
   * [gRPC practice & learn](https://kevinbird61.github.io/grpc-practice/)

---
## CHANGELOG

* See [here](https://github.com/toolbuddy/papoGen/wiki).
* Screenshot

| version | Table of content | Main Page |
| ------- | ------- | ------- |
| `v0.2.2` | ![](res/v0.2.2_toc.png) | ![](res/v0.2.2_preview.png) |  

---
## Workflow 

* See [here](https://github.com/toolbuddy/papoGen/wiki)