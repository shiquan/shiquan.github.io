

# RunAutoCorr

[**Source code**](https://github.com/shiquan/Yano/tree/master/R/moransi.R#L30)

## Description

Calculate spatial autocorrelation (Moran’s I) for features in parallel.

## Usage

<pre><code class='language-R'>RunAutoCorr(
  object = NULL,
  assay = NULL,
  layer = "data",
  reduction = "pca",
  dims = 1:20,
  k.param = 20,
  prune.SNN = 1/50,
  nn.method = "annoy",
  n.trees = 50,
  annoy.metric = "euclidean",
  nn.eps = 0,
  l2.norm = FALSE,
  cells = NULL,
  min.cells = 10,
  snn.name = NULL,
  spatial = FALSE,
  order.cells = NULL,
  weight.method = c("dist", "average"),
  prune.distance = -1,
  features = NULL,
  wm.name = NULL,
  prefix = "moransi",
  threads = 0,
  verbose = TRUE,
  ...
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
<code id="assay">assay</code>
</td>
<td>
Working assay
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="layer">layer</code>
</td>
<td>
Input data layer, usually be ‘data’.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="reduction">reduction</code>
</td>
<td>
Cell space used to calculate SNN graph, default is ‘pca’.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="dims">dims</code>
</td>
<td>
Dimensions of reduction used to calculate SNN graph.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="k.param">k.param</code>
</td>
<td>
Defines k for K-nearest neighbor algorithm
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="prune.SNN">prune.SNN</code>
</td>
<td>
Sets the cutoff for acceptable Jaccard index when computing the
neighborhood overlap for the SNN construction. This paramter will be
passed to Seurat::FindNeighbors.Any edges with values less than or equal
to this will be set to 0 and removed from the SNN graph. Essentially
sets the stringency of pruning (0 — no pruning, 1 — prune everything).
Default is 1/50, which is different from Seurat. Because the default
cutoff of FindNeighbors may lost many sparse features for large cell
population. More features can be select by setting to smaller value but
will increase computational time.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="nn.method">nn.method</code>
</td>
<td>
nn.method passed to Seurat::FindNeighbors, default is "euclidean".
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="n.trees">n.trees</code>
</td>
<td>
n.trees passed to Seurat::FindNeighbors, default is 50.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="annoy.metric">annoy.metric</code>
</td>
<td>
annoy.metric passed to Seurat::FindNeighbors, default is "annoy".
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="nn.eps">nn.eps</code>
</td>
<td>
nn.eps passed to Seurat::FindNeighbors, default is 0
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="l2.norm">l2.norm</code>
</td>
<td>
L2 normalization. Default is FALSE.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="cells">cells</code>
</td>
<td>
Cells used for calculate weight matrix. Used with snn graph. In default
will use all cells.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="min.cells">min.cells</code>
</td>
<td>
If a feature can be detect in few than min.cells, will skip to save
time. Default is 10.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="snn.name">snn.name</code>
</td>
<td>
name of SNN space. If spatial=FALSE and order.cells = NULL, default
snn.name will set to ‘RNA_snn’. Use SNN space to calculate the cell-cell
weight martix.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="spatial">spatial</code>
</td>
<td>
Use spatial coordinate instead of SNN space and linear trajectory to
calculate the cell-cell weight matrix.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="order.cells">order.cells</code>
</td>
<td>
For linear trajetory, input ordered cell names to calculate the
cell-cell distance weight matrix. Conflict with sptaial=TRUE and
snn.name != NULL.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="weight.method">weight.method</code>
</td>
<td>
Weight method for distance, default 1/dist^2. Also support average, use
mean weight value for nearby cells.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="prune.distance">prune.distance</code>
</td>
<td>
Set the cutoff for neighbors for order cells and spatial coordinates. In
default, 50 for order cells, 8 for spatial coordinates.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="features">features</code>
</td>
<td>
List of features to test. Default is all features with that coverage \>=
min.cells.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="wm.name">wm.name</code>
</td>
<td>
Weight matrix/graph name in Seurat object. After this function, the
graph can be visited by obj\[\[wm.name\]\]. Default name is "RNA_wm", if
you change the default name, you should specific the new name in
RunBlockCorr.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="prefix">prefix</code>
</td>
<td>
Prefix for score and p value names. Default prefix is "moransi". If you
change the default name, you should specific the new name in
SetAutoCorrFeatures.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="threads">threads</code>
</td>
<td>
Threads.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="verbose">verbose</code>
</td>
<td>
Print log message. Default is TRUE.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="...">…</code>
</td>
<td>
parameters pass to GetWeightFromSpatial, so it only works if spatial is
TRUE.
</td>
</tr>
</table>
