/* CSH demo — small scripts for the mock documents, directory and volunteering screens.
   All data comes from demo-data.js and is made up. */
(function () {
  var data = window.CSH_DEMO;
  if (!data) return;
  var member = false;
  try { member = sessionStorage.getItem('cshDemoMember') === '1'; } catch (e) {}
  function esc(s) { var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

  // Documents: folder list on the left, files on the right.
  var folders = document.getElementById('folders');
  if (folders) {
    var title = document.getElementById('folder-title');
    var files = document.getElementById('files');
    data.folders.forEach(function (f) {
      var li = document.createElement('li');
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-pressed', 'false');
      b.innerHTML = '<span>' + esc(f.name) + (f.members ? ' <span class="lock">(members)</span>' : '') + '</span><span>' + f.files.length + '</span>';
      b.addEventListener('click', function () {
        folders.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
        b.setAttribute('aria-pressed', 'true');
        title.textContent = f.name;
        if (f.members && !member) {
          files.innerHTML = '<p>This folder is for members. <a href="login.html">Log in</a> to see it.</p>';
          return;
        }
        files.innerHTML = '<div class="table-scroll"><table><thead><tr><th scope="col">Document</th><th scope="col">Type</th><th scope="col">Year</th></tr></thead><tbody>' +
          f.files.map(function (d) { return '<tr><td>' + esc(d.title) + '</td><td>' + d.kind + '</td><td>' + d.date + '</td></tr>'; }).join('') +
          '</tbody></table></div>';
      });
      li.appendChild(b);
      folders.appendChild(li);
    });
  }

  // Directory: filter as you type.
  var rows = document.getElementById('d-rows');
  if (rows) {
    var q = document.getElementById('d-q');
    var type = document.getElementById('d-type');
    var count = document.getElementById('d-count');
    function draw() {
      var text = q.value.trim().toLowerCase();
      var list = data.members.filter(function (m) {
        return (!type.value || m.type === type.value) &&
          (!text || (m.name + ' ' + m.employer + ' ' + m.city).toLowerCase().indexOf(text) !== -1);
      });
      count.textContent = list.length === 1 ? '1 member found' : list.length + ' members found';
      rows.innerHTML = list.length ? list.map(function (m) {
        return '<tr><td>' + esc(m.name) + '</td><td>' + m.type + '</td><td>' + (esc(m.employer) || '–') + '</td><td>' + esc(m.city) +
          '</td><td><a href="mailto:' + m.email + '">' + m.email + '</a></td></tr>';
      }).join('') : '<tr><td colspan="5">No members match. Try a shorter search or choose &ldquo;All types&rdquo;.</td></tr>';
    }
    q.addEventListener('input', draw);
    type.addEventListener('change', draw);
    draw();
  }

  // Volunteering: sign-up buttons.
  var vrows = document.getElementById('v-rows');
  if (vrows) {
    var done = document.getElementById('v-done');
    vrows.innerHTML = data.volunteering.map(function (v, i) {
      return '<tr><td>' + esc(v.title) + '</td><td>' + esc(v.when) + '</td><td>' + esc(v.category) + '</td><td>' + v.spots +
        '</td><td><button class="btn small quiet" type="button" data-i="' + i + '">Sign up<span class="vh"> for ' + esc(v.title) + '</span></button></td></tr>';
    }).join('');
    vrows.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-i]');
      if (!b) return;
      var v = data.volunteering[b.getAttribute('data-i')];
      done.innerHTML = '<strong>Signed up (demo).</strong> You would be added to &ldquo;' + esc(v.title) + '&rdquo;. Nothing was sent or saved.';
      done.hidden = false;
      done.focus();
    });
  }
})();
