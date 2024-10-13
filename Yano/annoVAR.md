

# annoVAR

[**Source code**](https://github.com/shiquan/Yano/tree/master/R/varanno.R#L51)

## Description

Annotate genetic variants with preload GTF and/or VCF databases. Will
generate gene region and other tags.

## Usage

<pre><code class='language-R'>annoVAR(
  object = NULL,
  assay = NULL,
  gtf = NULL,
  vcf = NULL,
  tags = NULL,
  check.alt.only = FALSE,
  chr = "chr"
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
<code id="assay">assay</code>
</td>
<td>
Work assay.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="gtf">gtf</code>
</td>
<td>
GTF object, load by gtf2db.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="vcf">vcf</code>
</td>
<td>
VCF database. Should be indexed with ‘bcftools index’ at first.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="tags">tags</code>
</td>
<td>
Vector of tags to annotate. Require VCF database specified, and tags
should be well formated in the VCF header. See VCF specification
(https://samtools.github.io/hts-specs/VCFv4.2.pdf) for details.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="check.alt.only">check.alt.only</code>
</td>
<td>
Only annotate records for alternative allele (non-ref allele). Default
is FASLE.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="chr">chr</code>
</td>
<td>
Colname name for chromsome, default is "chr".
</td>
</tr>
</table>

## Value

Annotated Seurat object.
