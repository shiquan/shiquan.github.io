

# PSIPlot

[**Source code**](https://github.com/shiquan/Yano/tree/master/R/#L)

## Description

Plot PSI score on reduction map.

## Usage

<pre><code class='language-R'>PSIPlot(
  object = NULL,
  exon.assay = NULL,
  exclude.assay = "exclude",
  features = NULL,
  dims = c(1, 2),
  cells = NULL,
  cols = c("lightgrey", "red"),
  pt.size = NULL,
  alpha = 1,
  order = TRUE,
  reduction = NULL,
  shape.by = NULL,
  ncol = NULL,
  split.by = NULL,
  by.col = TRUE,
  coord.fixed = FALSE,
  combine = TRUE,
  raster = NULL,
  raster.dpi = c(512, 512)
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
<code id="exon.assay">exon.assay</code>
</td>
<td>
Exon assay name.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="exclude.assay">exclude.assay</code>
</td>
<td>
Excluded exon assay name.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="features">features</code>
</td>
<td>
Features to plot.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="dims">dims</code>
</td>
<td>
Dimensions to plot, must be a two-length numeric vector specifying x-
and y-dimensions
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="cells">cells</code>
</td>
<td>
Vector of cells to plot (default is all cells)
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="cols">cols</code>
</td>
<td>
Vector of colors, each color corresponds to an identity class. This may
also be a single character or numeric value corresponding to a palette
as specified by RColorBrewer::brewer.pal.info.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="pt.size">pt.size</code>
</td>
<td>
Adjust point size for plotting
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="alpha">alpha</code>
</td>
<td>
Alpha value for points
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="order">order</code>
</td>
<td>
Boolean determing whether to plot cells in order of PSI score.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="reduction">reduction</code>
</td>
<td>
Which dimensionality reduction to use. If not specified, first searches
for umap, then tsne, then pca
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="shape.by">shape.by</code>
</td>
<td>
If NULL, all points are circles (default). You can specify any cell
attribute (that can be pulled with FetchData) allowing for both
different colors and different shapes on cells. Only applicable if
<code>raster = FALSE</code>.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="ncol">ncol</code>
</td>
<td>
Number of columns to combine multiple features plots to
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="split.by">split.by</code>
</td>
<td>
A factor in object metadata to split the plot by, pass ‘ident’ to split
by cell identity
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="by.col">by.col</code>
</td>
<td>
If splitting by a factor, plot the splits per column with the features
as rows
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="coord.fixed">coord.fixed</code>
</td>
<td>
Plot cartesian coordinates with fixed aspect ratio
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="combine">combine</code>
</td>
<td>
Combine plots into a single patchwork ggplot object. If
<code>FALSE</code>, return a list of ggplot objects.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="raster.dpi">raster.dpi</code>
</td>
<td>
Pixel resolution for rasterized plots, passed to geom_scattermore().
Default is c(512, 512).
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="min.cutoff">min.cutoff</code>,
<code id="max.cutoff">max.cutoff</code>
</td>
<td>
Vector of minimum and maximum cutoff values for each feature
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="mode">mode</code>
</td>
<td>
Test mode. For mode 1, X (test feature) vs Y (binding feature). For mode
2, X vs (Y-X). For mode 3, X vs (Y+X). Please note, when set to mode 2
or 3, will use raw counts to update expression value of binding
features. Then normalise the counts before testing. For mode 1, will use
Layer ‘data’. Default is mode 1.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="group.by">group.by</code>
</td>
<td>
Name of one or more metadata columns to group (color) cells by (for
example, orig.ident); pass ‘ident’ to group by identity class
</td>
</tr>
</table>

## Value

A patchwork ggplot object of <code>combine = TRUE</code>; otherwise, a
list of ggplot objects
