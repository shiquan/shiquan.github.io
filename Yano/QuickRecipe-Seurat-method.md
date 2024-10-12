

# QuickRecipe

## Description

Quick clust single cell gene expression matrix by Seurat pipeline

## Usage

<pre><code class='language-R'>## S4 method for signature 'Seurat'
QuickRecipe(
  counts = NULL,
  min.cells = 20,
  min.features = 200,
  nvar = 3000,
  resolution = 0.5,
  assay = NULL,
  ndim = 20,
  verbose = TRUE
)
</code></pre>

## Arguments

<table>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="counts">counts</code>
</td>
<td>
raw counts matrix or Seurat object.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="min.cells">min.cells</code>
</td>
<td>
Only compute for features in at least this many cells
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="min.features">min.features</code>
</td>
<td>
Only computer for cells contained at least this many features
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="nvar">nvar</code>
</td>
<td>
Number of high variable features selected for PCA analysis
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="resolution">resolution</code>
</td>
<td>
Value of the resolution parameter pass to FindClusters, use a value
above (below) 1.0 if you want to obtain a larger (smaller) number of
communities
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="assay">assay</code>
</td>
<td>
Assay name. Default is ‘RNA’.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="ndim">ndim</code>
</td>
<td>
Use top N PCs for clustering and UMAP. Default is 20.
</td>
</tr>
</table>

## Value

Seurat object
