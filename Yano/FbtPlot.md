

# FbtPlot

[**Source code**](https://github.com/shiquan/Yano/tree/master/R/vis.R#L174)

## Description

Generate Manhatten plot for log10 scaled p value for spatial
dissimilarity test. X axis is the location of features. The function use
ggplot2 as backend.

## Usage

<pre><code class='language-R'>FbtPlot(
  object = NULL,
  val = NULL,
  assay = NULL,
  chr.name = "chr",
  start.name = "start",
  end.name = "end",
  col.by = NULL,
  cols = NULL,
  sel.chrs = NULL,
  pt.size = NULL,
  xlab = "Chromosome",
  ylab = expression(-log[10](p)),
  subset = NULL,
  point.label = NULL,
  label.size = 3,
  shape.by = NULL,
  chr = NULL,
  start = NULL,
  end = NULL,
  gtf = NULL,
  gene = NULL,
  upstream = 1000,
  downstream = 1000,
  print.genes = NULL,
  remove.chr = FALSE,
  layout.heights = c(3, 2)
)
</code></pre>

## Arguments

<table>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="object">object</code>
</td>
<td>
Seurat object.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="val">val</code>
</td>
<td>
Specify the name of p value. The name usually be format like
bind-name.pval and bind-name.padj (BH adjusted p value). For example, if
you use gene as binding feature, the name should be gene_name.pval or
gene_name.padj.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="assay">assay</code>
</td>
<td>
Work assay.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="chr.name">chr.name</code>
</td>
<td>
The title of chromosome name in the meta table. Default is "chr".
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="start.name">start.name</code>
</td>
<td>
The title of start position name in the meta table. Default is "start".
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="end.name">end.name</code>
</td>
<td>
The title of end position name in the meta table. Default is "end".
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="col.by">col.by</code>
</td>
<td>
Color points by specify the title of values in meta table. Can be
discrete or continous.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="cols">cols</code>
</td>
<td>
Manually specify the colors. Used with col.by.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="sel.chrs">sel.chrs</code>
</td>
<td>
Vector of selected chromosome names to plot. Change the order by set the
level of chr names.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="pt.size">pt.size</code>
</td>
<td>
Point size.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="xlab">xlab</code>
</td>
<td>
Label for x axis. Default is "Chromosome".
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="ylab">ylab</code>
</td>
<td>
Label for y axis. Default is "-log10p".
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="subset">subset</code>
</td>
<td>
Rule for subsetting the meta table before plot.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="point.label">point.label</code>
</td>
<td>
Vector of points to plot their labels.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="label.size">label.size</code>
</td>
<td>
Size of label. Default is 3.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="shape.by">shape.by</code>
</td>
<td>
Shape points by specify the title of values in meta table. Can only be
discrete.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="chr">chr</code>
</td>
<td>
Choromsome to zoom in. Default is NULL, no zoom in. The zoom in mode can
be enabled by setting chr or gene/gtf.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="start">start</code>
</td>
<td>
Start position to zoom in.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="end">end</code>
</td>
<td>
End position to zoom in.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="gtf">gtf</code>
</td>
<td>
GTF database. Load by <code>gtf2db</code>. Default is NULL. If specified
transcirpt tracks will be plotted.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="gene">gene</code>
</td>
<td>
Gene name to zoom in. Should used with gtf database specified.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="upstream">upstream</code>
</td>
<td>
Flank zoom in region with upstream. Default is 1000. Only works when
zoom in mode enabled.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="downstream">downstream</code>
</td>
<td>
Flank zoom in region with downstream. Default is 1000. Only works when
zoom in mode enabled.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="print.genes">print.genes</code>
</td>
<td>
Print the gene names in the transcript tracks. Default will print all or
randomly 20 genes if more than 20 genes in this region.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="remove.chr">remove.chr</code>
</td>
<td>
Remove ‘chr’ in the chromosome names.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="layout.heights">layout.heights</code>
</td>
<td>
Specify the layouts for Manhatten plot and gene tracks. Default is
c(3,2).
</td>
</tr>
</table>
