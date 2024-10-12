

# Test for alternative expression with DEXSeq

[**Source code**](https://github.com/shiquan/Yano/tree/master/R/#L)

## Description

This will test the test features and binding features are different
expressed between groups with a generalised linear model. See DEXSeq and
DESeq2 paper for details.

## Usage

<pre><code class='language-R'>RunDEXSeq(
  object = NULL,
  bind.name = "gene_name",
  ident.1 = NULL,
  ident.2 = NULL,
  cells.1 = NULL,
  cells.2 = NULL,
  assay = NULL,
  bind.assay = NULL,
  features = NULL,
  bind.features = NULL,
  min.pct = 0.05,
  min.pct.bind.feature = 0.05,
  return.thresh = NULL,
  node = NULL,
  pseudo.group = 3,
  mode = 1,
  threads = 1,
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
<code id="bind.name">bind.name</code>
</td>
<td>
The title of binding name in meta table.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="ident.1">ident.1</code>
</td>
<td>
Identify class to test, if not set will compare all groups one by one
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="ident.2">ident.2</code>
</td>
<td>
A second class for comparsion. If NULL (default), use all other cells
for comparison.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="cells.1">cells.1</code>
</td>
<td>
Vector of cell names belong to group 1. Conflict with ident.1
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="cells.2">cells.2</code>
</td>
<td>
Vector of cell names for comparsion. Conflict with ident.2
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="assay">assay</code>
</td>
<td>
Assay for test features. Default assay will be used if not set.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="bind.assay">bind.assay</code>
</td>
<td>
Assay for binding features. If not set, test features in same goup (with
same bind name) will be aggreated as binding feature
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="features">features</code>
</td>
<td>
Candidate list to test. If not set, will use all.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="bind.features">bind.features</code>
</td>
<td>
Candidate list for binding features. If not set, will use all.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="min.pct">min.pct</code>
</td>
<td>
Only test features that are detected in a minimum fraction of min.pct
cells in all cells. Meant to speed up the function by not testing genes
that are very infrequenctly expressed in all cells. Remember we are
testing alternative epxression pattern here, so it is possible the test
feature is not expressed in one group, therefore we are not going to
check by groups. Note that min.pct is set for test feature here. But in
<code>RunPSI</code>, the min.pct is set for binding feature. Default is
0.05.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="min.pct.bind.feature">min.pct.bind.feature</code>
</td>
<td>
Only test binding features that are detected in a minimum fraction of
min.pct.bind.feature in either of the two populations. Meant to speed up
the function by not testing genes that are very infrequenctly expressed
in both groups. Default is 0.05.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="return.thresh">return.thresh</code>
</td>
<td>
Only return markers that have a p-value \< return.thresh.
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
<code id="pseudo.group">pseudo.group</code>
</td>
<td>
Aggregate single cells into pseudo groups, because DEXSeq is designed
for bulk RNA-seq. At least 3 cells are required for each group. Default
is 3.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="mode">mode</code>
</td>
<td>
Test mode, default is 1. See online manual for the difference between
modes. \<https://shiquan.github.io/Yano.html\>
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="threads">threads</code>
</td>
<td>
Threads passed to DEXSeq. Default is 1.
</td>
</tr>
</table>

## Value

Data frame containing p values and pct for test features and their
binding features.

## Examples

``` r
library("Yano")

data("glbt_small")
DefaultAssay(glbt_small) <- "exon"
glbt_small <- ParseExonName(glbt_small)
alt.exon <- RunDEXSeq(object = glbt_small, assay = "exon", bind.assay = "RNA", bind.name = "gene_name")
head(alt.exon)
```

    data frame with 0 columns and 0 rows
