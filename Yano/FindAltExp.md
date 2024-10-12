

# Test for alternative expression using delta-ratio

[**Source code**](https://github.com/shiquan/Yano/tree/master/R/#L)

## Description

Using delta-ratio and permutation method to simulate p value for each
event.

## Usage

<pre><code class='language-R'>FindAltExp(
  object = NULL,
  cells.1 = NULL,
  cells.2 = NULL,
  ident.1 = NULL,
  ident.2 = NULL,
  assay = NULL,
  bind.name = "gene_name",
  test.use = "DEXSeq",
  bind.assay = NULL,
  features = NULL,
  bind.features = NULL,
  min.cells = 10,
  return.thresh = NULL,
  mode = c(1, 2, 3),
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
<code id="assay">assay</code>
</td>
<td>
Test assay (X). Default assay will be used if not set.
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
<code id="features">features</code>
</td>
<td>
Candidate list to test. If not set, will use AutoCorrFeatures(object,
assay = assay).
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
Threads. If set to 0 (default), will auto check the CPU cores and set
threads = number of CPU cores -1.
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
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="pesudo.group">pesudo.group</code>
</td>
<td>
Aggregate counts into groups for each clusters.
</td>
</tr>
</table>

## Details

This function first aggregates all raw counts per feature for each group
*a* and *b*, then calculates the
*d**e**l**t**a* − *r**a**t**i**o* = *X*<sub>*a*</sub>/*Y*<sub>*a*</sub> − *X*<sub>*b*</sub>/*Y*<sub>*b*</sub>.Therefore,
this function only retrieve data from layer ‘counts’. It then employs a
permutation method to randomize the cells in the two groups 100 times
(by default) to evaluate the mean and standard deviation of delta-ratio.
A p-value is calculated using a t-test.
