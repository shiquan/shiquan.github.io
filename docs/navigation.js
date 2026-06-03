/**
 * Dynamic prev/next page navigation for workflow pages.
 *
 * To add a new page, simply insert its entry into the `pages` array below.
 * All existing (frozen) HTML pages will pick up the change automatically
 * via client-side JS — no re-render needed.
 */
(function () {
  const pages = [
    { title: "From raw reads to gene counts", url: "workflow1.html" },
    { title: "Annotate various features for alignment", url: "anno.html" },
    { title: "Select cells from reduction maps and spatial locations", url: "selector.html" },
    { title: "Alternative splicing analysis for scRNA-seq", url: "Yano_AS.html" },
    { title: "Allele-specific gene expression analysis for scRNA-seq", url: "Yano_ASE.html" },
    { title: "Annotating and prioritizing genetic variants for scRNA-seq", url: "Yano_anno.html" },
    { title: "Alternative splicing analysis for multiple Visium samples", url: "Visium.html" },
    { title: "Alternative splicing analysis for cell trajectory and user-defined embeddings", url: "Yano_trajectory.html" }
  ];

  // --- donʼt edit below this line unless you want to change the styling ---

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const idx = pages.findIndex(function (p) { return p.url === currentPage; });
  if (idx === -1) return;

  const container = document.getElementById("page-nav-container");
  if (!container) return;

  function navLink(page, dir, label) {
    return '<a href="' + page.url + '" style="text-align:' + (dir === "prev" ? "left" : "right") + ';'
      + 'display:inline-block; max-width:48%; text-decoration:none; color:inherit;">'
      + '<span style="display:block; font-size:0.85em; color:#6a737b; margin-bottom:0.2em;">' + label + '</span>'
      + '<span style="color:#00009E;">' + page.title + '</span></a>';
  }

  var html = '<nav style="display:flex; justify-content:space-between; align-items:flex-start; '
    + 'margin-top:3em; padding-top:1.5em; border-top:1px solid #dee2e6;">';

  html += idx > 0
    ? navLink(pages[idx - 1], "prev", "← Previous")
    : "<span></span>";

  html += idx < pages.length - 1
    ? navLink(pages[idx + 1], "next", "Next →")
    : "<span></span>";

  html += "</nav>";
  container.innerHTML = html;
})();
