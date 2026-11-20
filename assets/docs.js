/* Подставляет реквизиты и контакты из site.config.js в документы.
   Незаполненные реквизиты не показываются; связь — по e-mail или Telegram. */
(function () {
function fill(root, standalone) {
  root = root || document;
  var C = window.AGM || {}, S = C.seller || {}, K = C.contacts || {};
  var tg = K.telegram ? K.telegram.replace(/^@/, '') : '';
  var email = S.email || K.email || '';
  function link(href, text) { var a = document.createElement('a'); a.href = href; a.textContent = text; if (/^https?:/.test(href)) { a.target = '_blank'; a.rel = 'noopener'; } return a; }
  function contactNode() {
    var f = document.createDocumentFragment();
    if (tg) { f.appendChild(document.createTextNode('Telegram ')); f.appendChild(link('https://t.me/' + tg, '@' + tg)); }
    if (tg && email) f.appendChild(document.createTextNode(' или почта '));
    else if (email) f.appendChild(document.createTextNode('почта '));
    if (email) f.appendChild(link('mailto:' + email, email));
    return f;
  }
  var values = {
    name: S.name || C.brand || 'AGMIROCLUB',
    inn: S.inn, ogrn: S.ogrn, regAuthority: S.regAuthority, address: S.address,
    phone: S.phone || K.phone, email: email, hours: K.hours
  };
  root.querySelectorAll('[data-s]').forEach(function (el) {
    var k = el.getAttribute('data-s');
    el.textContent = '';
    if (k === 'contact') { el.appendChild(contactNode()); return; }
    if (values[k]) el.textContent = values[k];
  });
  // hide rows/phrases whose value is empty
  root.querySelectorAll('[data-opt]').forEach(function (el) {
    if (!values[el.getAttribute('data-opt')]) el.remove();
  });
  root.querySelectorAll('[data-cfg]').forEach(function (el) {
    var k = el.getAttribute('data-cfg'), v = C[k];
    if (k === 'url' && v) { el.textContent = v; if (el.tagName === 'A') el.href = v; return; }
    el.textContent = v == null ? '' : v;
  });
  root.querySelectorAll('[data-carrier]').forEach(function (el) { el.textContent = (C.delivery && C.delivery.carrier) || 'служба доставки'; });
  var ft = standalone && document.querySelector('footer');
  if (ft && C.author) { var sp = document.createElement('span'); sp.appendChild(document.createTextNode('Сайт сделал ')); sp.appendChild(link(C.author.url, C.author.name)); ft.appendChild(sp); }
}
window.AGMFill = fill;
if (document.body && document.body.hasAttribute('data-doc')) fill(document, true);
})();
