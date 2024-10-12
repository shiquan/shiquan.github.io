

# mergeMatrix

## Description

Merge multiple matrix files into one. At least two matrix files should
be specified. Records with the same row name and column name will be
summed up.

## Usage

<pre><code class='language-R'>## S4 method for signature 'SMatrix'
mergeMatrix(x = NULL, y = NULL, ...)
</code></pre>

## Arguments

<table>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="x">x</code>
</td>
<td>
Matrix 1
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="y">y</code>
</td>
<td>
Matrix 2
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="...">…</code>
</td>
<td>
More matrix files.
</td>
</tr>
</table>
