(function () {
  'use strict';
  var WA = '5511969233519';
  window.dataLayer = window.dataLayer || [];
  var reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ano no rodapé */
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  /* topo com borda ao rolar */
  var topo = document.getElementById('topo');
  function onScroll() { topo.classList.toggle('is-rolado', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* hero: as duas metades se encontram na emenda a 45 graus */
  var seam = document.getElementById('seam');
  if (seam) {
    if (reduz) { seam.classList.add('is-unida'); }
    else {
      seam.classList.add('is-aberta');
      requestAnimationFrame(function () {
        setTimeout(function () { seam.classList.remove('is-aberta'); seam.classList.add('is-unida'); }, 250);
      });
      /* parallax leve no hero */
      var heroImg = seam.parentElement;
      window.addEventListener('scroll', function () {
        var y = window.scrollY;
        if (y < 900) heroImg.style.transform = 'translateY(' + (y * 0.06).toFixed(1) + 'px)';
      }, { passive: true });
    }
  }

  /* scroll reveal + régua do prazo */
  var obs = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add(e.target.classList.contains('regua') ? 'is-cheia' : 'is-visivel'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }) : null;
  document.querySelectorAll('.reveal, .regua').forEach(function (el) {
    if (obs && !reduz) obs.observe(el); else el.classList.add('is-visivel', 'is-cheia');
  });

  /* rastreamento de cliques no WhatsApp */
  document.addEventListener('click', function (ev) {
    var a = ev.target.closest('.js-wa');
    if (a) window.dataLayer.push({ event: 'whatsapp_click', local: a.getAttribute('data-local') || 'indefinido' });
  });

  /* abas "como escolher" */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.escolher__tabs [role="tab"]'));
  function ativa(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    window.dataLayer.push({ event: 'guia_pedra', pergunta: tab.textContent.trim() });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { ativa(t); });
    t.addEventListener('keydown', function (e) {
      var n = null;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
      if (n) { e.preventDefault(); n.focus(); ativa(n); }
    });
  });

  /* galeria em tela cheia */
  var lb = document.getElementById('lightbox'), lbImg = document.getElementById('lightboxImg');
  document.querySelectorAll('.galeria__item').forEach(function (b) {
    b.addEventListener('click', function () {
      var img = b.querySelector('img');
      lbImg.src = b.getAttribute('data-full'); lbImg.alt = img.alt;
      if (lb.showModal) lb.showModal(); else window.open(b.getAttribute('data-full'), '_blank');
    });
  });
  document.getElementById('lightboxFechar').addEventListener('click', function () { lb.close(); });
  lb.addEventListener('click', function (e) { if (e.target === lb) lb.close(); });

  /* formulário: máscara, validação e envio pelo WhatsApp */
  var form = document.getElementById('form');
  var btn = document.getElementById('f-enviar');
  var aviso = document.getElementById('f-aviso');
  var tel = document.getElementById('f-tel');

  tel.addEventListener('input', function () {
    var d = tel.value.replace(/\D/g, '').slice(0, 11);
    var v = d;
    if (d.length > 2) v = '(' + d.slice(0, 2) + ') ' + d.slice(2);
    if (d.length > 6) v = '(' + d.slice(0, 2) + ') ' + d.slice(2, d.length === 11 ? 7 : 6) + '-' + d.slice(d.length === 11 ? 7 : 6);
    tel.value = v;
  });
  tel.addEventListener('blur', function () { tel.classList.toggle('is-erro', tel.value !== '' && !tel.checkValidity()); });

  function checa() {
    var ok = form.checkValidity();
    btn.disabled = !ok;
    aviso.textContent = ok ? 'Tudo certo. É só enviar.' : 'Preencha os campos acima para liberar o envio.';
    aviso.classList.toggle('is-ok', ok);
  }
  form.addEventListener('input', checa);
  form.addEventListener('change', checa);
  checa();

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { checa(); return; }
    var f = new FormData(form);
    var linhas = [
      'Olá, vim pelo site da Tempo Novo e quero um orçamento.',
      '',
      '*Nome:* ' + f.get('nome'),
      '*WhatsApp:* ' + f.get('telefone'),
      '*Bairro e cidade da obra:* ' + f.get('bairro'),
      '*Ambiente:* ' + f.get('ambiente'),
      '*Material de interesse:* ' + f.get('material')
    ];
    var msg = (f.get('mensagem') || '').trim();
    if (msg) linhas.push('*Sobre o projeto:* ' + msg);
    var url = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(linhas.join('\n'));

    window.dataLayer.push({ event: 'generate_lead', form: 'orcamento', ambiente: f.get('ambiente'), material: f.get('material') });
    var janela = window.open(url, '_blank');
    setTimeout(function () { window.location.href = janela ? 'obrigado.html' : url; }, 350);
  });
})();
