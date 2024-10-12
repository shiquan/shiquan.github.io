

# ReadPISA

[**Source code**](https://github.com/shiquan/Yano/tree/master/R/#L)

## Description

Read feature count matrix generated by ‘PISA count’.

## Usage

<pre><code class='language-R'>ReadPISA(
  mex_dir = NULL,
  prefix = NULL,
  suffix = NULL,
  cells = NULL,
  barcode.path = NULL,
  feature.path = NULL,
  matrix.path = NULL,
  peak.path = NULL,
  spliced.path = NULL,
  unspliced.path = NULL,
  spanning.path = NULL,
  use_10X = FALSE,
  spatial = FALSE
)
</code></pre>

## Arguments

<table>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="mex_dir">mex_dir</code>
</td>
<td>
Feature count outdir generated by ‘PISA count’.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="prefix">prefix</code>
</td>
<td>
Prefix to cell names.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="suffix">suffix</code>
</td>
<td>
Suffixed to cell names.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="cells">cells</code>
</td>
<td>
Vector for candidate cells. If not set, will read all cells.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="barcode.path">barcode.path</code>
</td>
<td>
Manually specify barcode path in MEX directory.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="feature.path">feature.path</code>
</td>
<td>
Manually specify feature path in MEX directory.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="matrix.path">matrix.path</code>
</td>
<td>
Manually specify matrix path in MEX directory.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="peak.path">peak.path</code>
</td>
<td>
Manually specific peak path (if feature is a region) in MEX directory.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="spliced.path">spliced.path</code>
</td>
<td>
Manually specific spliced matrix path in MEX directory. The spliced,
unspliced and spanning read count matrix generated by ‘PISA count
-velo’.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="unspliced.path">unspliced.path</code>
</td>
<td>
Manually specific unspliced matrix path.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="spanning.path">spanning.path</code>
</td>
<td>
Manually specific spanning matrix path.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="use_10X">use_10X</code>
</td>
<td>
Set TRUE if feature name in the second column of feature file.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="spatial">spatial</code>
</td>
<td>
Set TRUE if barcode is coordinate of bin. Will combine x and y
coordinate into bin name "x_y".
</td>
</tr>
</table>

## Value

Returns a sparse matrix of feature counts or a list of spliced,
unspliced, and spanning reads sparse matrix.