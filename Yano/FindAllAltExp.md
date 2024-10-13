

# Test alternative expression for all cell groups

[**Source code**](https://github.com/shiquan/Yano/tree/master/R/AltEXP.R#L430)

## Description

Test alternative expression for all cell groups

## Usage

<pre><code class='language-R'>FindAllAltExp(
  object = NULL,
  assay = NULL,
  features = NULL,
  bind.name = "gene_name",
  bind.assay = NULL,
  bind.features = NULL,
  node = NULL,
  min.cells = 10,
  return.thresh = NULL,
  mode = c(1, 2, 3),
  test.use = c("DEXSeq", "PermTest"),
  threads = 0,
  perm = 100,
  seed = 999,
  pseudo.group = 3,
  debug = FALSE
)
</code></pre>

## Arguments

<table>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="object">object</code>
</td>
<td>
A Seurat object.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="assay">assay</code>
</td>
<td>
Test assay (X). Default assay will be used if not set.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="features">features</code>
</td>
<td>
Candidate list to test. If not set, will use AutoCorrFeatures(object,
assay = assay).
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="bind.name">bind.name</code>
</td>
<td>
Title name for binding features in the meta table. Consider most users
start Yano to perform alternative splicing analysis, the default
bind.name set to "gene_name".
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="bind.assay">bind.assay</code>
</td>
<td>
Bind assay (Y). If not set, will aggregate all X values of the same
block.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="bind.features">bind.features</code>
</td>
<td>
Candidate list for bind features to test. If not set, will test all
covered.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="node">node</code>
</td>
<td>
A node to find markers for and all its children; requires
<code>BuildClusterTree</code> to have been run previously. Only can be
used if test all groups.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="min.cells">min.cells</code>
</td>
<td>
Used to filter candiate features or binding features. Require them at
least expressed in min.cells. Default is 10.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="return.thresh">return.thresh</code>
</td>
<td>
Only return markers that have a p-value \< return.thresh. Default is
NULL.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="mode">mode</code>
</td>
<td>
Test mode. For mode 1, X (test feature) vs Y (binding feature). For mode
2, X vs (Y-X). For mode 3, X vs (Y+X).
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="threads">threads</code>
</td>
<td>
Threads. For DEXSeq, threads will set to 1. For other methods, threads
set to 0, which will auto check the CPU cores and set threads = number
of CPU cores -1.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="perm">perm</code>
</td>
<td>
Permutation steps for calculate statistical of delta-ratio. Default is
100.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="seed">seed</code>
</td>
<td>
Seed for generate random number. Default is 999.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="debug">debug</code>
</td>
<td>
Print debug logs. Will auto set thread to 1. Default is FALSE.
</td>
</tr>
</table>

## Value

Data frame containing p values.

## Examples

``` r
library("Yano")

data("glbt_small")
DefaultAssay(glbt_small) <- "exon"
alt.exon <- FindAllAltExp(object = glbt_small, bind.assay = "RNA", bind.name = "gene_name", features = rownames(glbt_small))
head(alt.exon)
```

    data frame with 0 columns and 0 rows
