/* Creative Commons license footer — shared by every page on the site.
   To change the name or license later, edit ONLY this file. */
(function () {
  var AUTHOR = "Dr. Rebecca Cooper";   // <-- replace with your name
  var YEAR = "2026";
  var LICENSE_URL = "https://creativecommons.org/licenses/by-nc-sa/4.0/";

  var footer = document.createElement("footer");
  footer.className = "cc-footer";
  footer.setAttribute("style",
    "max-width:760px;margin:3rem auto 1.5rem;padding:1.25rem 1rem 0;" +
    "border-top:1px solid rgba(128,128,128,.35);font-size:.85rem;line-height:1.55;" +
    "color:inherit;opacity:.85;text-align:center;");
  footer.innerHTML =
    '<p style="margin:0 0 .6rem;"><a href="' + LICENSE_URL + '" rel="license" target="_blank">' +
      '<img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc-sa.svg" ' +
      'alt="Creative Commons BY-NC-SA 4.0 license" width="88" height="31" style="border:0;vertical-align:middle;"></a></p>' +
    '<p style="margin:0 0 .5rem;"><em>GACE Science of Reading Practice Exams</em> &copy; ' + YEAR + ' by ' + AUTHOR +
      ', Georgia Gwinnett College, is licensed under <a href="' + LICENSE_URL +
      '" rel="license" target="_blank" style="color:inherit;">CC BY-NC-SA 4.0</a>. ' +
      'You may share and adapt these materials for noncommercial use with attribution, under the same license.</p>' +
    '<p style="margin:0;font-size:.78rem;">GACE&reg; is a registered trademark of the Georgia Professional Standards Commission. ' +
      'These practice exams were developed independently and are not affiliated with or endorsed by the GaPSC or Pearson.</p>';
  document.body.appendChild(footer);
})();
