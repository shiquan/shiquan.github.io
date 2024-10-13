

# GetWeights

[**Source code**](https://github.com/shiquan/Yano/tree/master/R/weights.R#L15)

## Description

Calcualte cell-cell weight matrix by one of shared nearest neighbour
matrix, spatial locations, cell embedding and linear trajectory.

## Usage

<pre><code class='language-R'>GetWeights(
  snn = NULL,
  pos = NULL,
  order.cells = NULL,
  emb = NULL,
  k.nn = 20,
  prune.distance = 20,
  prune.SNN = 1/15,
  diag.value = 0,
  cells = NULL
)
</code></pre>

## Arguments

<table>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="snn">snn</code>
</td>
<td>
Shared nearest neighbour graph, usually can found at
object\[\["RNA_snn"\]\]. This graph can be calculate by
Seurat::FindNeighbors().
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="pos">pos</code>
</td>
<td>
Tissue coordinates matrix.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="order.cells">order.cells</code>
</td>
<td>
Predefined cell ranks, used for cell lineage analysis.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="emb">emb</code>
</td>
<td>
Cell dimesional space (PCA/ICA/harmony).
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="k.nn">k.nn</code>
</td>
<td>
K-nearest neighbors, for calculating weight matrix with emb.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="prune.distance">prune.distance</code>
</td>
<td>
Sets the cutoff for cell distance on lineage trajectory (ranked cells)
or spatial cooridates (bin distance) when computing the neighborhood
overlap for the weight matrix construction. Any edges with values
greater than this will be set to 0 and removed from the weight matrix
graph. Default is 20, means only calculate weight edges for nearby 20
cells for each cell.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="prune.SNN">prune.SNN</code>
</td>
<td>
Sets the cutoff for acceptable Jaccard index when computing the
neighborhood overlap for the SNN construction. Any edges with values
less than or equal to this will be set to 0 and removed from the SNN
graph. Essentially sets the stringency of pruning (0 — no pruning, 1 —
prune everything). Default is 1/15.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="diag.value">diag.value</code>
</td>
<td>
Diagnoal value in the weight matrix.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="cells">cells</code>
</td>
<td>
Cell list. Default use all cells.
</td>
</tr>
</table>

## Value

A sparse weight matrix.
