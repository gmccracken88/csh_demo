/* CSH demo — shared header, footer, mock login and mock forms.
   The header and footer live here only, so every page stays in sync.
   Nothing on this site is sent anywhere: forms and login are demo-only. */
(function () {
  // Site root, worked out from this script's own URL so links work on
  // localhost and under a GitHub Pages sub-path alike.
  var ROOT = new URL('../../', document.currentScript.src).href;
  var KEY = 'cshDemoMember';
  var here = location.href.split('#')[0].split('?')[0];
  if (here.slice(-1) === '/') here += 'index.html';

  function signedIn() {
    try { return sessionStorage.getItem(KEY) === '1'; } catch (e) { return false; }
  }
  function url(path) { return ROOT + path; }
  function link(path, text) {
    var current = url(path) === here ? ' aria-current="page"' : '';
    return '<a href="' + url(path) + '"' + current + '>' + text + '</a>';
  }

  // Opening the login page while signed in logs the demo member out.
  if (document.querySelector('[data-login]') && signedIn()) {
    try { sessionStorage.removeItem(KEY); } catch (e) {}
  }

  // Member pages send visitors to the login screen first.
  if (document.body.hasAttribute('data-members') && !signedIn()) {
    location.replace(url('login.html'));
    return;
  }

  var MENU = [
    ['About', [
      ['about/mission.html', 'Our mission'],
      ['about/history.html', 'How CSH began'],
      ['about/officers.html', 'Officers and board'],
      ['about/past-boards.html', 'Past boards'],
      ['about/constitution.html', 'Constitution and bylaws']
    ]],
    ['Meetings', [
      ['meetings/index.html', 'Upcoming meetings'],
      ['meetings/fall-2026.html', '2026 Fall Meeting'],
      ['meetings/previous.html', 'Previous meetings'],
      ['photos.html', 'Photos']
    ]],
    ['Membership', [
      ['membership/benefits.html', 'Member benefits'],
      ['membership/join.html', 'Join CSH'],
      ['awards/criteria.html', 'Awards'],
      ['awards/winners.html', 'Award winners']
    ]],
    ['Resources', [
      ['jobs.html', 'Jobs and resumes'],
      ['documents.html', 'Documents'],
      ['faq.html', 'FAQ']
    ]]
  ];
  var MEMBER_MENU = [
    ['members/index.html', 'Member home'],
    ['members/directory.html', 'Member directory'],
    ['members/committees.html', 'Committees'],
    ['members/webinars.html', 'Webinar recordings'],
    ['members/resources.html', 'Resources'],
    ['members/volunteering.html', 'Volunteering'],
    ['members/memorials.html', 'Memorials'],
    ['members/profile.html', 'My profile']
  ];

  function sub(items, cls) {
    return '<ul class="sub' + (cls || '') + '">' + items.map(function (i) {
      return '<li>' + link(i[0], i[1]) + '</li>';
    }).join('') + '</ul>';
  }

  var nav = MENU.map(function (group) {
    return '<li><button class="menu" type="button" aria-expanded="false">' + group[0] + '</button>' + sub(group[1]) + '</li>';
  }).join('') + '<li>' + link('contact.html', 'Contact') + '</li>';

  if (signedIn()) {
    nav += '<li><button class="menu" type="button" aria-expanded="false">Members</button>' +
      sub(MEMBER_MENU.concat([['login.html#logout', 'Log out']]), ' right') + '</li>';
  } else {
    nav += '<li><a class="btn small" href="' + url('login.html') + '">Member login</a></li>';
  }

  var marks = [1, 5, 7].map(function (n) {
    return '<img src="' + url('assets/img/stain-' + n + '.jpg') + '" alt="" width="30" height="30">';
  }).join('');

  var header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML =
    '<a class="skip" href="#main">Skip to content</a>' +
    '<div class="wrap">' +
      '<a class="brand" href="' + url('index.html') + '">' +
        '<span class="brand-mark" aria-hidden="true">' + marks + '</span>' +
        '<span class="brand-name"><span>Colorado Society</span><span>of Histotechnology</span></span>' +
      '</a>' +
      '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>' +
      '<nav class="site-nav" id="site-nav" aria-label="Main"><ul>' + nav + '</ul></nav>' +
    '</div>';
  document.body.insertBefore(header, document.body.firstChild);

  var footer = document.createElement('footer');
  footer.innerHTML =
    '<div class="site-footer"><div class="wrap">' +
      '<div class="foot-grid">' +
        '<div><h2>Colorado Society of Histotechnology</h2>' +
          '<p>A non-profit society for histologic technicians and technologists in Colorado, since 1980.</p>' +
          '<p>2017 S. Nome St., Aurora, CO 80014<br><a href="tel:+19704913041">970-491-3041</a></p></div>' +
        '<div><h2>Society</h2><ul>' +
          '<li>' + link('about/mission.html', 'Our mission') + '</li>' +
          '<li>' + link('about/officers.html', 'Officers and board') + '</li>' +
          '<li>' + link('awards/criteria.html', 'Awards') + '</li>' +
          '<li>' + link('contact.html', 'Contact') + '</li></ul></div>' +
        '<div><h2>Take part</h2><ul>' +
          '<li>' + link('membership/join.html', 'Join CSH') + '</li>' +
          '<li>' + link('meetings/index.html', 'Upcoming meetings') + '</li>' +
          '<li>' + link('jobs.html', 'Jobs and resumes') + '</li>' +
          '<li>' + link('photos.html', 'Photos') + '</li></ul></div>' +
        '<div><h2>Members</h2><ul>' +
          '<li>' + link('login.html', signedIn() ? 'Log out' : 'Member login') + '</li>' +
          '<li>' + link('documents.html', 'Documents') + '</li>' +
          '<li>' + link('faq.html', 'FAQ') + '</li>' +
          '<li><a href="https://www.facebook.com/groups/81195677350/">CSH on Facebook</a></li></ul></div>' +
      '</div>' +
      '<p class="foot-note">&copy; 2026 Colorado Society of Histotechnology.</p>' +
    '</div></div>' +
    '<div class="demo-bar"><div class="wrap">Design demo. Forms and login are not live, and member pages show made-up sample data. ' +
      'The current site is at <a href="https://coloradohisto.org/">coloradohisto.org</a>.</div></div>';
  document.body.appendChild(footer);

  // Menus: one open at a time, close on Escape or outside click.
  var buttons = header.querySelectorAll('button.menu');
  function closeAll(except) {
    buttons.forEach(function (b) { if (b !== except) b.setAttribute('aria-expanded', 'false'); });
  }
  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      var open = b.getAttribute('aria-expanded') === 'true';
      closeAll(b);
      b.setAttribute('aria-expanded', open ? 'false' : 'true');
    });
  });
  document.addEventListener('click', function (e) { if (!header.contains(e.target)) closeAll(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAll(); });
  var toggle = header.querySelector('.nav-toggle');
  var navEl = header.querySelector('.site-nav');
  toggle.addEventListener('click', function () {
    var open = navEl.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Member side menu (member pages only).
  var side = document.querySelector('[data-member-nav]');
  if (side) {
    side.innerHTML = '<ul>' + MEMBER_MENU.map(function (i) { return '<li>' + link(i[0], i[1]) + '</li>'; }).join('') + '</ul>';
  }

  // Mock login / logout.
  var loginForm = document.querySelector('[data-login]');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      try { sessionStorage.setItem(KEY, '1'); } catch (err) {}
      location.href = url('members/index.html');
    });
  }

  // Mock forms: show the confirmation message instead of sending anything.
  document.querySelectorAll('form[data-demo]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var box = document.getElementById(form.getAttribute('data-demo'));
      if (!box) return;
      form.hidden = true;
      box.hidden = false;
      box.setAttribute('tabindex', '-1');
      box.focus();
    });
  });

  // Multi-step forms: [data-step] fieldsets with Next / Back buttons.
  document.querySelectorAll('form[data-steps]').forEach(function (form) {
    var steps = form.querySelectorAll('[data-step]');
    var pills = document.querySelectorAll('.steps li');
    var at = 0;
    function show(n) {
      at = n;
      steps.forEach(function (s, i) { s.hidden = i !== n; });
      pills.forEach(function (p, i) { if (i === n) p.setAttribute('aria-current', 'step'); else p.removeAttribute('aria-current'); });
      var first = steps[n].querySelector('input, select, textarea');
      if (first && n > 0) first.focus();
    }
    form.addEventListener('click', function (e) {
      if (e.target.matches('[data-next]')) {
        var fields = steps[at].querySelectorAll('input, select, textarea');
        for (var i = 0; i < fields.length; i++) { if (!fields[i].reportValidity()) return; }
        show(at + 1);
      }
      if (e.target.matches('[data-back]')) show(at - 1);
    });
    show(0);
  });
})();
