

# varanno

[**Source code**](https://github.com/shiquan/Yano/tree/master/R/#L)

## Description

Annotate genetic variants.

## Usage

<pre><code class='language-R'>varanno(
  chr = NULL,
  start = NULL,
  end = NULL,
  ref = NULL,
  alt = NULL,
  strand = NULL,
  vcf = NULL,
  tags = NULL,
  check.alt.only = FALSE
)
</code></pre>

## Arguments

<table>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="chr">chr</code>
</td>
<td>
Vector of chromosome names.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="start">start</code>
</td>
<td>
Vector of start positions.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="end">end</code>
</td>
<td>
Vector of end positions.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="ref">ref</code>
</td>
<td>
Vector of reference alleles.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="alt">alt</code>
</td>
<td>
Vector of alternative alleles.
</td>
</tr>
<tr>
<td style="white-space: nowrap; font-family: monospace; vertical-align: top">
<code id="strand">strand</code>
</td>
<td>
Vector of strands.
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
should be well formated in the VCF header.
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
</table>
