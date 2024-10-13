

# TrackPlot

[**Source code**](https://github.com/shiquan/Yano/tree/master/R/vis.R#L602)

## Description

Plot read/UMI coverage and transcript tracks from BAM(s).

## Usage

<pre><code class='language-R'>TrackPlot(
  bamfile = NULL,
  chr = NULL,
  start = NULL,
  end = NULL,
  gene = NULL,
  strand = c("both", "forward", "reverse", "ignore"),
  split.bc = FALSE,
  bin = 1000,
  cell.tag = "CB",
  umi.tag = "UB",
  gtf = NULL,
  max.depth = 0,
  group.title.size = rel(2),
  cell.group = NULL,
  display.genes = NULL,
  meta.features = NULL,
  log.scaled = FALSE,
  upstream = 1000,
  downstream = 1000,
  fragfile = NULL,
  atac.log.scaled = FALSE,
  atac.max.depth = 0,
  col.by = NULL,
  layout.heights = c(1, 10, 2),
  highlights = NULL,
  junc = FALSE,
  junc.min.depth = 5
)
</code></pre>

## Arguments

<table>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="bamfile">bamfile</code>
</td>
<td>
A path to a BAM file or a list to BAM files. BAM file(s) should be
indexed.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="chr">chr</code>
</td>
<td>
Chromosome name.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="start">start</code>
</td>
<td>
Start position.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="end">end</code>
</td>
<td>
End position.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="strand">strand</code>
</td>
<td>
Plot reads on strand. Default is bot strands. Can be one of c("both",
"forward", "reverse", "ignore"). When set to ignore, read strand
information will be discarded.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="split.bc">split.bc</code>
</td>
<td>
Split coverage by barcode. Default is FALSE, bulk mode.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="bin">bin</code>
</td>
<td>
Divide plot region into bins. Save plot time. Default is 1000.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="cell.tag">cell.tag</code>
</td>
<td>
Tag for cell barcode in the BAM. Default is "CB".
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="umi.tag">umi.tag</code>
</td>
<td>
Tag for UMI in the BAM. Default is "UB".
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="gtf">gtf</code>
</td>
<td>
GTF database, load by gtf2db.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="max.depth">max.depth</code>
</td>
<td>
Max depth capped to plot. Default is 0, no capping.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="group.title.size">group.title.size</code>
</td>
<td>
Font size for track group titles. Default is rel(2).
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="cell.group">cell.group</code>
</td>
<td>
Vector or list of cell group IDs. Name for the ID is the cell name. If
bamfile is a list, the cell.group can also be a list with the same
length of bamfile list, and binding cell.group to bam file by the name
or order in both lists. See manual online for real cases.
\<https://shiquan.github.io/Yano.html\>
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="display.genes">display.genes</code>
</td>
<td>
Vector of genes to plot in the target region. Other genes in this region
will not print in transcript track plot.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="meta.features">meta.features</code>
</td>
<td>
Meta table for features. If set the regions will be also plot on top of
track plot. Meta table can be accessed by object\[\[assay\]\]\[\[\]\].
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="log.scaled">log.scaled</code>
</td>
<td>
Log scaled the coverage depth per group. Only used if the depth is super
high. Disabled in default.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="upstream">upstream</code>
</td>
<td>
Flank the target region with upstream to plot. Default is 1000.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="downstream">downstream</code>
</td>
<td>
Flank the target region with downstream to plot. Default is 1000.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="fragfile">fragfile</code>
</td>
<td>
Fragment file for ATAC data.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="atac.log.scaled">atac.log.scaled</code>
</td>
<td>
Log scaled the coverage depth per group for ATAC tracks.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="atac.max.depth">atac.max.depth</code>
</td>
<td>
Capped depth to plot for ATAC tracks.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="col.by">col.by</code>
</td>
<td>
Color bed regions by value. The specified name should be a colname in
meta table. Only support discrete value.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="layout.heights">layout.heights</code>
</td>
<td>
Layout for track plots. Default is c(10,2) or c(1,10,2) if meta.features
specified or c(1,10,10,2) if fragment file also specified.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="highlights">highlights</code>
</td>
<td>
A region of a list of regions to hightlight. The region is format as
c(start,end).
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="junc">junc</code>
</td>
<td>
Also plot the junction reads.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="junc.min.depth">junc.min.depth</code>
</td>
<td>
Filter out junctions if low than this cutoff. This parameter used to
remove noise background. Default is 5.
</td>
</tr>
</table>
