

# SetAutoCorrFeatures

[**Source code**](https://github.com/shiquan/Yano/tree/master/R/moransi.R#L195)

## Description

Set autocorrection by Moran’s I and/or p value.

## Usage

<pre><code class='language-R'>SetAutoCorrFeatures(
  object = NULL,
  moransi.min = 0,
  assay = DefaultAssay(object),
  p.thresh = 0.01,
  prefix = "moransi",
  verbose = TRUE
)
</code></pre>

## Arguments

<table>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="object">object</code>
</td>
<td>
Seurat object
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="moransi.min">moransi.min</code>
</td>
<td>
Minimal score for Morans I. In default is 0.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="assay">assay</code>
</td>
<td>
Working assay. If not set, use DefaultAssay(object).
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="p.thresh">p.thresh</code>
</td>
<td>
Threshold for p value. Default is 1e-2.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="prefix">prefix</code>
</td>
<td>
Prefix name for Moran’s index and p value generated by RunAutoCorr.
Default is "moransi".
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="verbose">verbose</code>
</td>
<td>
Print log message.
</td>
</tr>
</table>
