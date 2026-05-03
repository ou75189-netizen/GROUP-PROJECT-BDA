/* ============================================================
   SMART-SCHOOL INFORMATION MANAGEMENT SYSTEM
   Group: Distance Snipers
   Single shared script — sections marked [M{n}] per owner
   ============================================================ */

// ============================================================
// [M6-SEED] Mock data — Member 6
// ============================================================

const SEED_DATA = {
  users: [
    { id: 'u1', email: 'admin@school.gm',   password: 'admin123',   role: 'admin',   name: 'Aminata Jallow' },
    { id: 'u2', email: 'teacher@school.gm', password: 'teacher123', role: 'teacher', name: 'Modou Ceesay' },
    { id: 'u3', email: 'parent@school.gm',  password: 'parent123',  role: 'parent',  name: 'Fatou Sanneh',   childId: 's3' },
    { id: 'u4', email: 'student@school.gm', password: 'student123', role: 'student', name: 'Lamin Sanneh',   studentId: 's3' }
  ],

  classes: [
    { id: 'c1', name: 'Form 3A', teacherId: 'u2' },
    { id: 'c2', name: 'Form 3B', teacherId: 'u2' },
    { id: 'c3', name: 'Form 4A', teacherId: 'u2' }
  ],

  students: [
    { id: 's1', name: 'Awa Touray',     classId: 'c1', studentNumber: 'STU-2024-001', parentEmail: 'parent1@school.gm' },
    { id: 's2', name: 'Ebrima Bah',     classId: 'c1', studentNumber: 'STU-2024-002', parentEmail: 'parent2@school.gm' },
    { id: 's3', name: 'Lamin Sanneh',   classId: 'c1', studentNumber: 'STU-2024-003', parentEmail: 'parent@school.gm'  },
    { id: 's4', name: 'Mariama Jobe',   classId: 'c1', studentNumber: 'STU-2024-004', parentEmail: 'parent4@school.gm' },
    { id: 's5', name: 'Ousman Drammeh', classId: 'c2', studentNumber: 'STU-2024-005', parentEmail: 'parent5@school.gm' },
    { id: 's6', name: 'Isatou Njie',    classId: 'c2', studentNumber: 'STU-2024-006', parentEmail: 'parent6@school.gm' }
  ],

  subjects: [
    { id: 'sub1', name: 'Mathematics',    code: 'MTH', teacher: 'Mr. Modou Ceesay' },
    { id: 'sub2', name: 'English',        code: 'ENG', teacher: 'Ms. Adama Saine'   },
    { id: 'sub3', name: 'Integrated Science', code: 'SCI', teacher: 'Mr. Pa Saidy'  },
    { id: 'sub4', name: 'Social & Environmental Studies', code: 'SES', teacher: 'Ms. Hawa Bah' },
    { id: 'sub5', name: 'ICT',            code: 'ICT', teacher: 'Mr. Modou Ceesay' },
    { id: 'sub6', name: 'French',         code: 'FRN', teacher: 'Ms. Marie Faye'   }
  ],

  // Grades scoped to student "s3" (the demo student account) primarily
  grades: [
    { id: 'g1',  studentId: 's3', subjectId: 'sub1', score: 78, term: 'Term 1' },
    { id: 'g2',  studentId: 's3', subjectId: 'sub2', score: 85, term: 'Term 1' },
    { id: 'g3',  studentId: 's3', subjectId: 'sub3', score: 72, term: 'Term 1' },
    { id: 'g4',  studentId: 's3', subjectId: 'sub4', score: 68, term: 'Term 1' },
    { id: 'g5',  studentId: 's3', subjectId: 'sub5', score: 91, term: 'Term 1' },
    { id: 'g6',  studentId: 's3', subjectId: 'sub6', score: 45, term: 'Term 1' },
    { id: 'g7',  studentId: 's1', subjectId: 'sub1', score: 64, term: 'Term 1' },
    { id: 'g8',  studentId: 's2', subjectId: 'sub1', score: 82, term: 'Term 1' }
  ],

  attendance: [
    { id: 'a1', studentId: 's3', date: '2026-04-20', status: 'present' },
    { id: 'a2', studentId: 's3', date: '2026-04-21', status: 'present' },
    { id: 'a3', studentId: 's3', date: '2026-04-22', status: 'late'    },
    { id: 'a4', studentId: 's3', date: '2026-04-23', status: 'present' },
    { id: 'a5', studentId: 's3', date: '2026-04-24', status: 'absent'  }
  ],

  fees: [
    { id: 'f1', studentId: 's3', termFee: 12000, paid: 9000, dueDate: '2026-05-15' },
    { id: 'f2', studentId: 's1', termFee: 12000, paid: 12000, dueDate: '2026-05-15' },
    { id: 'f3', studentId: 's2', termFee: 12000, paid: 6000, dueDate: '2026-05-15' }
  ],

  announcements: [
    { id: 'an1', title: 'Mid-Term Examinations Begin May 5', body: 'All students must report to their assigned exam halls by 8:00 AM. Please bring your student ID, an HB pencil, and a black/blue pen. Calculators are permitted only in Mathematics and Integrated Science papers.', author: 'Headteacher', date: '2026-04-22', audience: 'all' },
    { id: 'an2', title: 'PTA Meeting Scheduled for May 3', body: 'The termly Parent-Teacher Association meeting will be held in the school hall at 4:00 PM. Topics include term-end exam preparation, school fee structure for the next academic year, and an update on the new computer lab.', author: 'PTA Secretary', date: '2026-04-19', audience: 'parent' },
    { id: 'an3', title: 'ICT Practical Lab Opens Monday', body: 'The newly equipped ICT lab will be open for practicals starting Monday. Form 3 and Form 4 students will follow the published rotation timetable. Lab rules are posted at the entrance.', author: 'Mr. Modou Ceesay', date: '2026-04-18', audience: 'student' }
  ]
};

const SCHOOL_NAME = 'St. Mary\u2019s Senior Secondary';
const SCHOOL_LOCATION = 'Banjul, The Gambia';

// ============================================================
// [M6-STORAGE] localStorage helpers — Member 6
// ============================================================

const STORAGE_KEYS = {
  USERS:         'ssims:users',
  STUDENTS:      'ssims:students',
  CLASSES:       'ssims:classes',
  SUBJECTS:      'ssims:subjects',
  GRADES:        'ssims:grades',
  ATTENDANCE:    'ssims:attendance',
  FEES:          'ssims:fees',
  ANNOUNCEMENTS: 'ssims:announcements',
  SESSION:       'ssims:session',
  SIDEBAR_STATE: 'ssims:sidebar'
};

function getItem(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback !== undefined ? fallback : null;
    return JSON.parse(raw);
  } catch (err) {
    console.error('Storage read error', key, err);
    return fallback !== undefined ? fallback : null;
  }
}

function setItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (err) {
    console.error('Storage write error', key, err);
    return false;
  }
}

function removeItem(key) {
  localStorage.removeItem(key);
}

function seedIfEmpty() {
  if (getItem(STORAGE_KEYS.USERS) === null)         setItem(STORAGE_KEYS.USERS,         SEED_DATA.users);
  if (getItem(STORAGE_KEYS.STUDENTS) === null)      setItem(STORAGE_KEYS.STUDENTS,      SEED_DATA.students);
  if (getItem(STORAGE_KEYS.CLASSES) === null)       setItem(STORAGE_KEYS.CLASSES,       SEED_DATA.classes);
  if (getItem(STORAGE_KEYS.SUBJECTS) === null)      setItem(STORAGE_KEYS.SUBJECTS,      SEED_DATA.subjects);
  if (getItem(STORAGE_KEYS.GRADES) === null)        setItem(STORAGE_KEYS.GRADES,        SEED_DATA.grades);
  if (getItem(STORAGE_KEYS.ATTENDANCE) === null)    setItem(STORAGE_KEYS.ATTENDANCE,    SEED_DATA.attendance);
  if (getItem(STORAGE_KEYS.FEES) === null)          setItem(STORAGE_KEYS.FEES,          SEED_DATA.fees);
  if (getItem(STORAGE_KEYS.ANNOUNCEMENTS) === null) setItem(STORAGE_KEYS.ANNOUNCEMENTS, SEED_DATA.announcements);
}

// ============================================================
// [M6-AUTH] Session & login helpers — Member 6
// ============================================================

function login(email, password, role) {
  const users = getItem(STORAGE_KEYS.USERS, []);
  const user = users.find(function (u) {
    return u.email.toLowerCase() === email.toLowerCase()
      && u.password === password
      && u.role === role;
  });

  if (!user) return null;

  // Strip password from session
  const session = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    childId: user.childId || null,
    studentId: user.studentId || null,
    loginTime: new Date().toISOString()
  };

  setItem(STORAGE_KEYS.SESSION, session);
  return session;
}

function logout() {
  removeItem(STORAGE_KEYS.SESSION);
  window.location.href = 'index.html';
}

function getCurrentUser() {
  return getItem(STORAGE_KEYS.SESSION);
}

function requireAuth(allowedRoles) {
  const user = getCurrentUser();
  if (!user) {
    window.location.href = 'index.html';
    return null;
  }
  if (allowedRoles && allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    window.location.href = getDashboardForRole(user.role);
    return null;
  }
  return user;
}

function getDashboardForRole(role) {
  switch (role) {
    case 'admin':   return 'admin.html';
    case 'teacher': return 'teacher.html';
    case 'parent':  return 'parent.html';
    case 'student': return 'student.html';
    default:        return 'index.html';
  }
}

// ============================================================
// [M6-VALIDATORS] Reusable validators — Member 6
// ============================================================

function isEmail(value) {
  if (!value) return false;
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(String(value).trim());
}

function isPhone(value) {
  if (!value) return false;
  const pattern = /^[+]?[\d\s\-()]{7,20}$/;
  return pattern.test(String(value).trim());
}

function isRequired(value) {
  return value !== null && value !== undefined && String(value).trim().length > 0;
}

function inRange(value, min, max) {
  const num = Number(value);
  if (isNaN(num)) return false;
  return num >= min && num <= max;
}

function minLength(value, min) {
  return value && String(value).length >= min;
}

function maxLength(value, max) {
  return !value || String(value).length <= max;
}

// ============================================================
// [M6-FORMAT] Formatters — Member 6
// ============================================================

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' });
}

function formatRelativeDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  const now = new Date();
  const diffMs = now - d;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return diffDays + ' days ago';
  return formatDate(dateStr);
}

function formatCurrency(amount) {
  return 'GMD ' + Number(amount).toLocaleString('en-GB', { minimumFractionDigits: 0 });
}

function formatPercent(value) {
  return Math.round(Number(value)) + '%';
}

function getInitials(name) {
  if (!name) return '?';
  const parts = String(name).trim().split(/\s+/);
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// ============================================================
// [M6-DOM] DOM helpers — Member 6
// ============================================================

function $(selector, scope) {
  return (scope || document).querySelector(selector);
}

function $$(selector, scope) {
  return Array.from((scope || document).querySelectorAll(selector));
}

function createEl(tag, attrs, children) {
  const el = document.createElement(tag);
  if (attrs) {
    Object.keys(attrs).forEach(function (key) {
      if (key === 'className') {
        el.className = attrs[key];
      } else if (key === 'dataset') {
        Object.assign(el.dataset, attrs[key]);
      } else if (key.startsWith('on')) {
        el.addEventListener(key.slice(2).toLowerCase(), attrs[key]);
      } else {
        el.setAttribute(key, attrs[key]);
      }
    });
  }
  if (children !== undefined && children !== null) {
    if (Array.isArray(children)) {
      children.forEach(function (child) {
        if (child !== null && child !== undefined) {
          el.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
        }
      });
    } else if (typeof children === 'string') {
      el.textContent = children;
    } else {
      el.appendChild(children);
    }
  }
  return el;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = String(str);
  return div.innerHTML;
}

function showToast(message, type) {
  type = type || 'success';
  let toast = $('.toast');
  if (!toast) {
    toast = createEl('div', { className: 'toast' });
    document.body.appendChild(toast);
  }
  toast.className = 'toast toast-' + type;
  toast.textContent = message;
  // Force reflow
  void toast.offsetWidth;
  toast.classList.add('is-visible');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(function () {
    toast.classList.remove('is-visible');
  }, 3000);
}

function openModal(modalId) {
  const overlay = $('#' + modalId);
  if (overlay) overlay.classList.add('is-open');
}

function closeModal(modalId) {
  const overlay = $('#' + modalId);
  if (overlay) overlay.classList.remove('is-open');
}

// ============================================================
// [M1] Authentication & Landing — Member 1
// ============================================================

function initLogin() {
  seedIfEmpty();

  // If already logged in, send to dashboard
  const existing = getCurrentUser();
  if (existing) {
    window.location.href = getDashboardForRole(existing.role);
    return;
  }

  const form = $('#login-form');
  if (!form) return;

  const emailInput    = $('#login-email');
  const passwordInput = $('#login-password');
  const roleInput     = $('#login-role');
  const errorBanner   = $('#login-error-banner');
  const emailError    = $('#login-email-error');
  const passwordError = $('#login-password-error');
  const roleError     = $('#login-role-error');

  function clearErrors() {
    errorBanner.classList.remove('is-visible');
    emailError.textContent = '';
    passwordError.textContent = '';
    roleError.textContent = '';
    emailInput.classList.remove('input-error');
    passwordInput.classList.remove('input-error');
    roleInput.classList.remove('input-error');
  }

  function validate() {
    clearErrors();
    let valid = true;

    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const role = roleInput.value;

    if (!isRequired(email)) {
      emailError.textContent = 'Email is required.';
      emailInput.classList.add('input-error');
      valid = false;
    } else if (!isEmail(email)) {
      emailError.textContent = 'Please enter a valid email address.';
      emailInput.classList.add('input-error');
      valid = false;
    }

    if (!isRequired(password)) {
      passwordError.textContent = 'Password is required.';
      passwordInput.classList.add('input-error');
      valid = false;
    } else if (!minLength(password, 6)) {
      passwordError.textContent = 'Password must be at least 6 characters.';
      passwordInput.classList.add('input-error');
      valid = false;
    }

    if (!isRequired(role)) {
      roleError.textContent = 'Please choose your role.';
      roleInput.classList.add('input-error');
      valid = false;
    }

    return valid;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validate()) return;

    const session = login(emailInput.value.trim(), passwordInput.value, roleInput.value);
    if (!session) {
      errorBanner.textContent = 'Invalid credentials, or the role does not match this account.';
      errorBanner.classList.add('is-visible');
      return;
    }

    window.location.href = getDashboardForRole(session.role);
  });

  // Prefill helper for the demo creds list
  $$('.auth-demo-creds [data-fill]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const role = link.dataset.fill;
      const emails = { admin: 'admin@school.gm', teacher: 'teacher@school.gm', parent: 'parent@school.gm', student: 'student@school.gm' };
      const passwords = { admin: 'admin123', teacher: 'teacher123', parent: 'parent123', student: 'student123' };
      emailInput.value = emails[role] || '';
      passwordInput.value = passwords[role] || '';
      roleInput.value = role;
    });
  });
}

// ============================================================
// [M2] Layout: Sidebar, Topbar, Footer — Member 2
// ============================================================

const SIDEBAR_LINKS = {
  admin: [
    { label: 'Dashboard',     view: 'dashboard',     icon: '\u25A6' },
    { label: 'Users',         view: 'users',         icon: '\u2630' },
    { label: 'Fees',          view: 'fees',          icon: '\u20A6' },
    { label: 'Announcements', view: 'announcements', icon: '\u2691' }
  ],
  teacher: [
    { label: 'Dashboard',     view: 'dashboard',     icon: '\u25A6' },
    { label: 'Attendance',    view: 'attendance',    icon: '\u2713' },
    { label: 'Grades',        view: 'grades',        icon: '\u270E' },
    { label: 'Announcements', view: 'announcements', icon: '\u2691' }
  ],
  parent: [
    { label: 'Overview',     view: 'dashboard',  icon: '\u25A6' },
    { label: 'Grades',       view: 'grades',     icon: '\u272F' },
    { label: 'Attendance',   view: 'attendance', icon: '\u2713' },
    { label: 'Fees',         view: 'fees',       icon: '\u20A6' }
  ],
  student: [
    { label: 'Overview',      view: 'dashboard',     icon: '\u25A6' },
    { label: 'My Grades',     view: 'grades',        icon: '\u272F' },
    { label: 'Timetable',     view: 'timetable',     icon: '\u29C9' },
    { label: 'Announcements', view: 'announcements', icon: '\u2691' }
  ]
};

function initLayout() {
  const user = getCurrentUser();
  if (!user) return;

  renderSidebar(user);
  renderTopbar(user);
  bindSidebarToggle();
  bindLogout();
  bindViewSwitcher(user);
}

function renderSidebar(user) {
  const sidebar = $('#sidebar');
  if (!sidebar) return;

  const links = SIDEBAR_LINKS[user.role] || [];
  const activeView = getActiveView();

  sidebar.innerHTML = ''
    + '<div class="sidebar-brand">'
    +   '<div class="sidebar-brand-logo">SS</div>'
    +   '<div class="sidebar-brand-text">'
    +     '<span class="sidebar-brand-name">S-SIMS</span>'
    +     '<span class="sidebar-brand-tag">' + escapeHtml(SCHOOL_NAME) + '</span>'
    +   '</div>'
    + '</div>'
    + '<nav class="sidebar-nav">'
    +   '<div class="sidebar-nav-section">'
    +     '<div class="sidebar-nav-label">Main</div>'
    +     '<ul class="sidebar-nav-list">'
    +       links.map(function (link) {
              const isActive = link.view === activeView;
              return ''
                + '<li>'
                +   '<a href="#' + link.view + '" data-view-link="' + link.view + '" class="sidebar-nav-link' + (isActive ? ' is-active' : '') + '">'
                +     '<span class="sidebar-nav-icon">' + link.icon + '</span>'
                +     '<span>' + escapeHtml(link.label) + '</span>'
                +   '</a>'
                + '</li>';
            }).join('')
    +     '</ul>'
    +   '</div>'
    + '</nav>'
    + '<div class="sidebar-footer">'
    +   '<div class="sidebar-user">'
    +     '<div class="sidebar-user-avatar">' + escapeHtml(getInitials(user.name)) + '</div>'
    +     '<div class="sidebar-user-info">'
    +       '<div class="sidebar-user-name">' + escapeHtml(user.name) + '</div>'
    +       '<div class="sidebar-user-role">' + escapeHtml(user.role) + '</div>'
    +     '</div>'
    +   '</div>'
    + '</div>';
}

function getActiveView() {
  // Read view from URL hash, default to 'dashboard'
  const hash = (window.location.hash || '').replace(/^#/, '').trim();
  if (hash) return hash;
  return 'dashboard';
}

function setActiveView(viewName) {
  // Update hash (triggers hashchange listener)
  if (getActiveView() !== viewName) {
    window.location.hash = viewName;
  } else {
    // Already active — just re-render in case of refresh
    showView(viewName);
  }
}

function showView(viewName) {
  // Hide all views, show the active one
  const views = $$('[data-view]');
  let found = false;
  views.forEach(function (v) {
    if (v.dataset.view === viewName) {
      v.classList.remove('hidden');
      found = true;
    } else {
      v.classList.add('hidden');
    }
  });

  // Fallback to dashboard if requested view doesn't exist
  if (!found && viewName !== 'dashboard') {
    showView('dashboard');
    return;
  }

  // Update sidebar active state
  $$('[data-view-link]').forEach(function (link) {
    if (link.dataset.viewLink === viewName) {
      link.classList.add('is-active');
    } else {
      link.classList.remove('is-active');
    }
  });

  // Update topbar page title
  const titleEl = $('.topbar-page-title');
  if (titleEl) {
    const link = $('[data-view-link="' + viewName + '"]');
    if (link) titleEl.textContent = link.querySelector('span:last-child').textContent;
  }

  // Close mobile sidebar after navigation
  const sidebar = $('#sidebar');
  const backdrop = $('#sidebar-backdrop');
  if (sidebar) sidebar.classList.remove('is-open');
  if (backdrop) backdrop.classList.remove('is-visible');

  // Scroll to top on view change
  try { window.scrollTo(0, 0); } catch (e) { /* not supported in some test envs */ }

  // Run the view-specific init if defined
  const module = document.body.dataset.page; // 'admin', 'teacher', 'parent', 'student'
  const initName = 'init_' + module + '_' + viewName.replace(/-/g, '_');
  if (typeof window[initName] === 'function') {
    try { window[initName](); } catch (err) { console.error(initName + ' failed:', err); }
  }
}

function bindViewSwitcher(user) {
  // Listen for hash changes
  window.addEventListener('hashchange', function () {
    showView(getActiveView());
  });

  // Click handlers for in-page nav links (to handle the case where hash is already set)
  $$('[data-view-link]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      // Default <a> behavior will update hash → triggers hashchange
      // We just close the sidebar on click for mobile
    });
  });

  // Initial render
  showView(getActiveView());
}

function renderTopbar(user) {
  const greeting = $('#topbar-greeting');
  if (greeting) {
    greeting.innerHTML = 'Welcome back, <strong>' + escapeHtml(user.name.split(' ')[0]) + '</strong>';
  }
}

function bindSidebarToggle() {
  const toggleBtn = $('#sidebar-toggle');
  const sidebar = $('#sidebar');
  const backdrop = $('#sidebar-backdrop');
  if (!toggleBtn || !sidebar) return;

  function close() {
    sidebar.classList.remove('is-open');
    if (backdrop) backdrop.classList.remove('is-visible');
  }

  toggleBtn.addEventListener('click', function () {
    sidebar.classList.toggle('is-open');
    if (backdrop) backdrop.classList.toggle('is-visible');
  });

  if (backdrop) backdrop.addEventListener('click', close);

  // Close on ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
}

function bindLogout() {
  $$('[data-logout]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      logout();
    });
  });
}

// ============================================================
// [M3] Admin Dashboard — Member 3
// ============================================================

function init_admin_dashboard() {
  const user = requireAuth(['admin']);
  if (!user) return;

  const students      = getItem(STORAGE_KEYS.STUDENTS, []);
  const users         = getItem(STORAGE_KEYS.USERS, []);
  const fees          = getItem(STORAGE_KEYS.FEES, []);
  const attendance    = getItem(STORAGE_KEYS.ATTENDANCE, []);
  const announcements = getItem(STORAGE_KEYS.ANNOUNCEMENTS, []);

  const totalStudents = students.length;
  const totalTeachers = users.filter(function (u) { return u.role === 'teacher'; }).length;
  const totalCollected = fees.reduce(function (sum, f) { return sum + f.paid; }, 0);
  const presentDays = attendance.filter(function (a) { return a.status === 'present'; }).length;
  const attendancePct = attendance.length > 0 ? (presentDays / attendance.length) * 100 : 0;

  const v1 = $('#stat-students');     if (v1) v1.textContent = totalStudents;
  const v2 = $('#stat-teachers');     if (v2) v2.textContent = totalTeachers;
  const v3 = $('#stat-fees');         if (v3) v3.textContent = formatCurrency(totalCollected);
  const v4 = $('#stat-attendance');   if (v4) v4.textContent = formatPercent(attendancePct);

  // Recent announcements
  const announceList = $('#admin-recent-announcements');
  if (announceList) {
    const recent = announcements.slice(0, 3);
    announceList.innerHTML = recent.map(function (a) {
      return ''
        + '<div class="announcement-item">'
        +   '<div class="announcement-header">'
        +     '<span class="announcement-title">' + escapeHtml(a.title) + '</span>'
        +     '<span class="announcement-date">' + formatRelativeDate(a.date) + '</span>'
        +   '</div>'
        +   '<div class="announcement-body">' + escapeHtml(a.body.slice(0, 140)) + (a.body.length > 140 ? '\u2026' : '') + '</div>'
        + '</div>';
    }).join('');
  }
}

function init_admin_users() {
  const user = requireAuth(['admin']);
  if (!user) return;

  let students = getItem(STORAGE_KEYS.STUDENTS, []);
  const tableBody = $('#users-table-body');
  const mobileList = $('#users-mobile-list');
  const searchInput = $('#users-search');
  const classFilter = $('#users-class-filter');

  function render() {
    const term = (searchInput.value || '').toLowerCase().trim();
    const classId = classFilter.value;

    const filtered = students.filter(function (s) {
      const matchTerm = !term
        || s.name.toLowerCase().includes(term)
        || s.studentNumber.toLowerCase().includes(term);
      const matchClass = !classId || s.classId === classId;
      return matchTerm && matchClass;
    });

    if (filtered.length === 0) {
      tableBody.innerHTML = '<tr><td colspan="5" class="text-center text-muted" style="padding: 2rem">No students match your search.</td></tr>';
      mobileList.innerHTML = '<div class="empty-state"><div class="empty-state-title">No students found</div><div class="empty-state-text">Try clearing your search or filter.</div></div>';
      return;
    }

    const classes = getItem(STORAGE_KEYS.CLASSES, []);
    const getClassName = function (cid) {
      const c = classes.find(function (cl) { return cl.id === cid; });
      return c ? c.name : '\u2014';
    };

    tableBody.innerHTML = filtered.map(function (s) {
      return ''
        + '<tr>'
        +   '<td><div class="flex items-center gap-2">'
        +     '<div class="attendance-student-avatar">' + escapeHtml(getInitials(s.name)) + '</div>'
        +     '<div><div class="font-medium">' + escapeHtml(s.name) + '</div>'
        +     '<div class="text-xs text-muted">' + escapeHtml(s.studentNumber) + '</div></div>'
        +   '</div></td>'
        +   '<td>' + escapeHtml(getClassName(s.classId)) + '</td>'
        +   '<td class="text-muted">' + escapeHtml(s.parentEmail) + '</td>'
        +   '<td><span class="badge badge-success badge-dot">Active</span></td>'
        +   '<td><div class="action-buttons">'
        +     '<button class="icon-btn" data-edit="' + s.id + '" title="Edit">\u270E</button>'
        +     '<button class="icon-btn icon-btn-danger" data-delete="' + s.id + '" title="Delete">\u00D7</button>'
        +   '</div></td>'
        + '</tr>';
    }).join('');

    mobileList.innerHTML = filtered.map(function (s) {
      return ''
        + '<div class="mobile-card">'
        +   '<div class="mobile-card-header">'
        +     '<div><div class="mobile-card-title">' + escapeHtml(s.name) + '</div>'
        +     '<div class="text-xs text-muted">' + escapeHtml(s.studentNumber) + '</div></div>'
        +     '<span class="badge badge-success badge-dot">Active</span>'
        +   '</div>'
        +   '<div class="mobile-card-row"><span class="mobile-card-row-label">Class</span><span>' + escapeHtml(getClassName(s.classId)) + '</span></div>'
        +   '<div class="mobile-card-row"><span class="mobile-card-row-label">Parent email</span><span>' + escapeHtml(s.parentEmail) + '</span></div>'
        +   '<div class="action-buttons mt-4">'
        +     '<button class="btn btn-outline btn-sm" data-edit="' + s.id + '">Edit</button>'
        +     '<button class="btn btn-ghost btn-sm" data-delete="' + s.id + '">Delete</button>'
        +   '</div>'
        + '</div>';
    }).join('');

    bindRowActions();
  }

  function bindRowActions() {
    $$('[data-delete]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const id = btn.dataset.delete;
        const target = students.find(function (s) { return s.id === id; });
        if (!target) return;
        if (confirm('Delete student "' + target.name + '"? This cannot be undone.')) {
          students = students.filter(function (s) { return s.id !== id; });
          setItem(STORAGE_KEYS.STUDENTS, students);
          showToast('Student deleted', 'success');
          render();
        }
      });
    });
  }

  // Class filter options
  const classes = getItem(STORAGE_KEYS.CLASSES, []);
  classFilter.innerHTML = '<option value="">All classes</option>'
    + classes.map(function (c) { return '<option value="' + c.id + '">' + escapeHtml(c.name) + '</option>'; }).join('');

  searchInput.addEventListener('input', render);
  classFilter.addEventListener('change', render);

  // Add user modal
  const addBtn = $('#users-add-btn');
  const modal = $('#user-modal');
  const modalForm = $('#user-modal-form');
  const nameInput = $('#user-name');
  const numberInput = $('#user-number');
  const emailInput = $('#user-email');
  const classInput = $('#user-class');
  const nameErr = $('#user-name-error');
  const numberErr = $('#user-number-error');
  const emailErr = $('#user-email-error');
  const classErr = $('#user-class-error');

  // Populate class dropdown
  classInput.innerHTML = '<option value="">Select a class</option>'
    + classes.map(function (c) { return '<option value="' + c.id + '">' + escapeHtml(c.name) + '</option>'; }).join('');

  if (addBtn) {
    addBtn.addEventListener('click', function () {
      modalForm.reset();
      nameErr.textContent = '';
      numberErr.textContent = '';
      emailErr.textContent = '';
      classErr.textContent = '';
      openModal('user-modal');
    });
  }

  $$('[data-close-modal]').forEach(function (b) {
    b.addEventListener('click', function () { closeModal('user-modal'); });
  });

  modalForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const number = numberInput.value.trim();
    const email = emailInput.value.trim();
    const classId = classInput.value;

    let valid = true;
    nameErr.textContent = '';
    numberErr.textContent = '';
    emailErr.textContent = '';
    classErr.textContent = '';
    nameInput.classList.remove('input-error');
    numberInput.classList.remove('input-error');
    emailInput.classList.remove('input-error');
    classInput.classList.remove('input-error');

    if (!isRequired(name)) {
      nameErr.textContent = 'Name is required.';
      nameInput.classList.add('input-error');
      valid = false;
    }

    if (!isRequired(number)) {
      numberErr.textContent = 'Student number is required.';
      numberInput.classList.add('input-error');
      valid = false;
    }

    if (!isRequired(email)) {
      emailErr.textContent = 'Parent email is required.';
      emailInput.classList.add('input-error');
      valid = false;
    } else if (!isEmail(email)) {
      emailErr.textContent = 'Please enter a valid email.';
      emailInput.classList.add('input-error');
      valid = false;
    }

    if (!isRequired(classId)) {
      classErr.textContent = 'Please select a class.';
      classInput.classList.add('input-error');
      valid = false;
    }

    if (!valid) return;

    const newStudent = {
      id: 's' + Date.now(),
      name: name,
      studentNumber: number,
      parentEmail: email,
      classId: classId
    };

    students.push(newStudent);
    setItem(STORAGE_KEYS.STUDENTS, students);
    closeModal('user-modal');
    showToast('Student added successfully', 'success');
    render();
  });

  render();
}

// ============================================================
// [M4] Teacher Dashboard — Member 4
// ============================================================

function init_teacher_dashboard() {
  const user = requireAuth(['teacher']);
  if (!user) return;

  const students = getItem(STORAGE_KEYS.STUDENTS, []);
  const grades = getItem(STORAGE_KEYS.GRADES, []);
  const classes = getItem(STORAGE_KEYS.CLASSES, []);

  const myClasses = classes.filter(function (c) { return c.teacherId === user.id; });
  const myStudentIds = students.filter(function (s) {
    return myClasses.some(function (c) { return c.id === s.classId; });
  }).map(function (s) { return s.id; });

  const myGrades = grades.filter(function (g) { return myStudentIds.includes(g.studentId); });
  const avg = myGrades.length > 0
    ? myGrades.reduce(function (sum, g) { return sum + g.score; }, 0) / myGrades.length
    : 0;

  const v1 = $('#teacher-stat-classes');  if (v1) v1.textContent = myClasses.length;
  const v2 = $('#teacher-stat-students'); if (v2) v2.textContent = myStudentIds.length;
  const v3 = $('#teacher-stat-avg');      if (v3) v3.textContent = Math.round(avg) + '%';
  const v4 = $('#teacher-stat-grades');   if (v4) v4.textContent = myGrades.length;
}

function init_teacher_attendance() {
  const user = requireAuth(['teacher']);
  if (!user) return;

  const classSelect = $('#attendance-class');
  const dateInput = $('#attendance-date');
  const listContainer = $('#attendance-list');
  const submitBtn = $('#attendance-submit');

  const classes = getItem(STORAGE_KEYS.CLASSES, []).filter(function (c) { return c.teacherId === user.id; });

  classSelect.innerHTML = '<option value="">Select a class\u2026</option>'
    + classes.map(function (c) { return '<option value="' + c.id + '">' + escapeHtml(c.name) + '</option>'; }).join('');

  // Default date: today
  const today = new Date().toISOString().split('T')[0];
  dateInput.value = today;

  function render() {
    const classId = classSelect.value;
    if (!classId) {
      listContainer.innerHTML = '<div class="empty-state"><div class="empty-state-title">Choose a class</div><div class="empty-state-text">Select a class above to start marking attendance.</div></div>';
      submitBtn.disabled = true;
      return;
    }

    const students = getItem(STORAGE_KEYS.STUDENTS, []).filter(function (s) { return s.classId === classId; });

    if (students.length === 0) {
      listContainer.innerHTML = '<div class="empty-state"><div class="empty-state-title">No students in this class</div></div>';
      submitBtn.disabled = true;
      return;
    }

    listContainer.innerHTML = students.map(function (s) {
      return ''
        + '<div class="attendance-row" data-student="' + s.id + '">'
        +   '<div class="attendance-student">'
        +     '<div class="attendance-student-avatar">' + escapeHtml(getInitials(s.name)) + '</div>'
        +     '<div>'
        +       '<div class="attendance-student-name">' + escapeHtml(s.name) + '</div>'
        +       '<div class="attendance-student-id">' + escapeHtml(s.studentNumber) + '</div>'
        +     '</div>'
        +   '</div>'
        +   '<div class="attendance-options">'
        +     '<div class="attendance-option opt-present">'
        +       '<input type="radio" id="att-' + s.id + '-p" name="att-' + s.id + '" value="present" checked>'
        +       '<label for="att-' + s.id + '-p">Present</label>'
        +     '</div>'
        +     '<div class="attendance-option opt-absent">'
        +       '<input type="radio" id="att-' + s.id + '-a" name="att-' + s.id + '" value="absent">'
        +       '<label for="att-' + s.id + '-a">Absent</label>'
        +     '</div>'
        +     '<div class="attendance-option opt-late">'
        +       '<input type="radio" id="att-' + s.id + '-l" name="att-' + s.id + '" value="late">'
        +       '<label for="att-' + s.id + '-l">Late</label>'
        +     '</div>'
        +   '</div>'
        + '</div>';
    }).join('');

    submitBtn.disabled = false;
  }

  classSelect.addEventListener('change', render);

  submitBtn.addEventListener('click', function () {
    if (!isRequired(dateInput.value)) {
      showToast('Please pick a date', 'error');
      return;
    }

    const records = [];
    $$('.attendance-row').forEach(function (row) {
      const studentId = row.dataset.student;
      const checked = $('input[type=radio]:checked', row);
      if (checked) {
        records.push({
          id: 'a' + Date.now() + '-' + studentId,
          studentId: studentId,
          date: dateInput.value,
          status: checked.value
        });
      }
    });

    const existing = getItem(STORAGE_KEYS.ATTENDANCE, []);
    const updated = existing.concat(records);
    setItem(STORAGE_KEYS.ATTENDANCE, updated);
    showToast('Attendance saved for ' + records.length + ' students', 'success');
  });

  render();
}

function init_teacher_grades() {
  const user = requireAuth(['teacher']);
  if (!user) return;

  const classSelect = $('#grades-class');
  const subjectSelect = $('#grades-subject');
  const tableBody = $('#grades-table-body');
  const submitBtn = $('#grades-submit');

  const classes = getItem(STORAGE_KEYS.CLASSES, []).filter(function (c) { return c.teacherId === user.id; });
  const subjects = getItem(STORAGE_KEYS.SUBJECTS, []);

  classSelect.innerHTML = '<option value="">Select class\u2026</option>'
    + classes.map(function (c) { return '<option value="' + c.id + '">' + escapeHtml(c.name) + '</option>'; }).join('');

  subjectSelect.innerHTML = '<option value="">Select subject\u2026</option>'
    + subjects.map(function (s) { return '<option value="' + s.id + '">' + escapeHtml(s.name) + '</option>'; }).join('');

  function render() {
    const classId = classSelect.value;
    if (!classId) {
      tableBody.innerHTML = '<tr><td colspan="3" class="empty-state"><div class="empty-state-title">Choose class & subject</div><div class="empty-state-text">Select both above to enter grades.</div></td></tr>';
      submitBtn.disabled = true;
      return;
    }

    const students = getItem(STORAGE_KEYS.STUDENTS, []).filter(function (s) { return s.classId === classId; });

    tableBody.innerHTML = students.map(function (s) {
      return ''
        + '<tr data-student="' + s.id + '">'
        +   '<td><div class="flex items-center gap-2">'
        +     '<div class="attendance-student-avatar">' + escapeHtml(getInitials(s.name)) + '</div>'
        +     '<div>' + escapeHtml(s.name) + '<div class="text-xs text-muted">' + escapeHtml(s.studentNumber) + '</div></div>'
        +   '</div></td>'
        +   '<td><input type="number" min="0" max="100" placeholder="0\u2013100" class="grade-score"></td>'
        +   '<td><input type="text" maxlength="200" placeholder="Optional comment" class="input grade-comment"></td>'
        + '</tr>';
    }).join('');

    submitBtn.disabled = false;
  }

  classSelect.addEventListener('change', render);

  submitBtn.addEventListener('click', function () {
    const subjectId = subjectSelect.value;
    if (!isRequired(subjectId)) {
      showToast('Please choose a subject', 'error');
      return;
    }

    let valid = true;
    const newGrades = [];

    $$('#grades-table-body tr[data-student]').forEach(function (row) {
      const input = $('.grade-score', row);
      input.classList.remove('input-error');
      const value = input.value;
      if (!isRequired(value)) return; // allow blank for absent students
      if (!inRange(value, 0, 100)) {
        input.classList.add('input-error');
        valid = false;
        return;
      }
      newGrades.push({
        id: 'g' + Date.now() + '-' + row.dataset.student,
        studentId: row.dataset.student,
        subjectId: subjectId,
        score: Number(value),
        term: 'Term 2'
      });
    });

    if (!valid) {
      showToast('Some scores are invalid (must be 0\u2013100)', 'error');
      return;
    }

    if (newGrades.length === 0) {
      showToast('No grades entered', 'error');
      return;
    }

    const all = getItem(STORAGE_KEYS.GRADES, []).concat(newGrades);
    setItem(STORAGE_KEYS.GRADES, all);
    showToast('Saved ' + newGrades.length + ' grades', 'success');
  });

  render();
}

// Admin Fees and Announcements are static views — no init needed
function init_admin_fees() { /* static content */ }
function init_admin_announcements() { /* static content */ }

// Teacher Announcements is static — no init needed
function init_teacher_announcements() { /* static content */ }

// ============================================================
// [M5] Parent & Student Portals — Member 5
// ============================================================

function getStudentForCurrentUser(user) {
  const students = getItem(STORAGE_KEYS.STUDENTS, []);
  const id = user.role === 'parent' ? user.childId : user.studentId;
  return students.find(function (s) { return s.id === id; }) || null;
}

function init_parent_dashboard() { initPortalDashboard(); }
function init_student_dashboard() { initPortalDashboard(); }

function initPortalDashboard() {
  const user = requireAuth(['parent', 'student']);
  if (!user) return;

  const student = getStudentForCurrentUser(user);
  if (!student) {
    $('#portal-content').innerHTML = '<div class="empty-state"><div class="empty-state-title">No record found</div></div>';
    return;
  }

  const grades = getItem(STORAGE_KEYS.GRADES, []).filter(function (g) { return g.studentId === student.id; });
  const attendance = getItem(STORAGE_KEYS.ATTENDANCE, []).filter(function (a) { return a.studentId === student.id; });
  const fees = getItem(STORAGE_KEYS.FEES, []).find(function (f) { return f.studentId === student.id; });

  const avgGrade = grades.length > 0
    ? grades.reduce(function (sum, g) { return sum + g.score; }, 0) / grades.length
    : 0;

  const present = attendance.filter(function (a) { return a.status === 'present'; }).length;
  const attendancePct = attendance.length > 0 ? (present / attendance.length) * 100 : 0;

  const balance = fees ? fees.termFee - fees.paid : 0;

  const ag = $('#portal-avg-grade');     if (ag) ag.textContent = Math.round(avgGrade) + '%';
  const at = $('#portal-attendance');    if (at) at.textContent = formatPercent(attendancePct);
  const ba = $('#portal-balance');       if (ba) ba.textContent = formatCurrency(balance);
  const sn = $('#portal-student-name');  if (sn) sn.textContent = student.name;
  const sc = $('#portal-student-class'); if (sc) {
    const classes = getItem(STORAGE_KEYS.CLASSES, []);
    const c = classes.find(function (cl) { return cl.id === student.classId; });
    sc.textContent = c ? c.name : '';
  }

  // Recent announcements
  const annList = $('#portal-announcements');
  if (annList) {
    const announcements = getItem(STORAGE_KEYS.ANNOUNCEMENTS, [])
      .filter(function (a) { return a.audience === 'all' || a.audience === user.role; })
      .slice(0, 3);
    annList.innerHTML = announcements.map(function (a) {
      return ''
        + '<div class="announcement-item">'
        +   '<div class="announcement-header">'
        +     '<span class="announcement-title">' + escapeHtml(a.title) + '</span>'
        +     '<span class="announcement-date">' + formatRelativeDate(a.date) + '</span>'
        +   '</div>'
        +   '<div class="announcement-body">' + escapeHtml(a.body.slice(0, 160)) + (a.body.length > 160 ? '\u2026' : '') + '</div>'
        + '</div>';
    }).join('');
  }
}

function init_parent_grades() { initPortalGrades(); }
function init_student_grades() { initPortalGrades(); }

function initPortalGrades() {
  const user = requireAuth(['parent', 'student']);
  if (!user) return;

  const student = getStudentForCurrentUser(user);
  if (!student) return;

  const grades = getItem(STORAGE_KEYS.GRADES, []).filter(function (g) { return g.studentId === student.id; });
  const subjects = getItem(STORAGE_KEYS.SUBJECTS, []);

  const grid = $('#grades-grid');
  if (!grid) return;

  if (grades.length === 0) {
    grid.innerHTML = '<div class="empty-state"><div class="empty-state-title">No grades yet</div></div>';
    return;
  }

  grid.innerHTML = grades.map(function (g) {
    const subject = subjects.find(function (s) { return s.id === g.subjectId; });
    if (!subject) return '';
    const isPass = g.score >= 50;
    return ''
      + '<div class="subject-card">'
      +   '<div class="subject-card-header">'
      +     '<div class="subject-card-icon">' + escapeHtml(subject.code) + '</div>'
      +     '<span class="badge ' + (isPass ? 'badge-success' : 'badge-danger') + '">' + (isPass ? 'Pass' : 'Below') + '</span>'
      +   '</div>'
      +   '<div class="subject-card-name">' + escapeHtml(subject.name) + '</div>'
      +   '<div class="subject-card-teacher">' + escapeHtml(subject.teacher) + '</div>'
      +   '<div class="subject-card-grade ' + (isPass ? 'is-pass' : 'is-fail') + '" style="margin-top: var(--space-4)">' + g.score + '<span style="font-size: var(--text-base); color: var(--color-text-muted); font-weight: 500">/100</span></div>'
      +   '<div class="subject-card-status">' + escapeHtml(g.term) + '</div>'
      + '</div>';
  }).join('');
}

function init_parent_attendance() { initPortalAttendance(); }

function initPortalAttendance() {
  const user = requireAuth(['parent', 'student']);
  if (!user) return;

  const student = getStudentForCurrentUser(user);
  if (!student) return;

  const records = getItem(STORAGE_KEYS.ATTENDANCE, []).filter(function (a) { return a.studentId === student.id; });

  const present = records.filter(function (r) { return r.status === 'present'; }).length;
  const absent  = records.filter(function (r) { return r.status === 'absent'; }).length;
  const late    = records.filter(function (r) { return r.status === 'late'; }).length;

  const pct = records.length > 0 ? (present / records.length) * 100 : 0;

  const presentEl = $('#att-present'); if (presentEl) presentEl.textContent = present;
  const absentEl  = $('#att-absent');  if (absentEl)  absentEl.textContent = absent;
  const lateEl    = $('#att-late');    if (lateEl)    lateEl.textContent = late;
  const pctEl     = $('#att-pct');     if (pctEl) {
    pctEl.textContent = formatPercent(pct);
    pctEl.classList.add(pct >= 90 ? 'is-good' : pct >= 75 ? 'is-warn' : 'is-bad');
  }

  const bar = $('#att-progress-bar');
  if (bar) {
    bar.style.width = pct + '%';
    bar.classList.add(pct >= 90 ? 'progress-bar-success' : pct >= 75 ? 'progress-bar-warning' : 'progress-bar-danger');
  }

  // Recent records table
  const body = $('#att-records-body');
  if (body) {
    body.innerHTML = records.slice(-10).reverse().map(function (r) {
      const badgeClass = r.status === 'present' ? 'badge-success' : r.status === 'late' ? 'badge-warning' : 'badge-danger';
      return ''
        + '<tr>'
        +   '<td>' + formatDate(r.date) + '</td>'
        +   '<td><span class="badge ' + badgeClass + '">' + r.status[0].toUpperCase() + r.status.slice(1) + '</span></td>'
        + '</tr>';
    }).join('');
  }
}

function init_parent_fees() { initPortalFees(); }

function initPortalFees() {
  const user = requireAuth(['parent', 'student']);
  if (!user) return;

  const student = getStudentForCurrentUser(user);
  if (!student) return;

  const fees = getItem(STORAGE_KEYS.FEES, []).find(function (f) { return f.studentId === student.id; });

  if (!fees) {
    $('#fees-content').innerHTML = '<div class="empty-state"><div class="empty-state-title">No fee record found</div></div>';
    return;
  }

  const balance = fees.termFee - fees.paid;
  const pct = fees.termFee > 0 ? (fees.paid / fees.termFee) * 100 : 0;

  const total = $('#fees-total');     if (total) total.textContent = formatCurrency(fees.termFee);
  const paid = $('#fees-paid');       if (paid)  paid.textContent = formatCurrency(fees.paid);
  const due = $('#fees-balance');     if (due)   due.textContent = formatCurrency(balance);
  const date = $('#fees-due-date');   if (date)  date.textContent = formatDate(fees.dueDate);

  const bar = $('#fees-progress-bar');
  if (bar) {
    bar.style.width = pct + '%';
    if (pct >= 100) bar.classList.add('progress-bar-success');
  }
}

function init_student_timetable() { initPortalTimetable(); }

function initPortalTimetable() {
  const user = requireAuth(['student']);
  if (!user) return;
  // Static timetable rendered in HTML — no dynamic logic for prototype
}

function init_student_announcements() { initPortalAnnouncements(); }
function init_parent_announcements() { initPortalAnnouncements(); }

function initPortalAnnouncements() {
  const user = requireAuth(['parent', 'student']);
  if (!user) return;

  const list = $('#announcements-full');
  if (!list) return;

  const announcements = getItem(STORAGE_KEYS.ANNOUNCEMENTS, [])
    .filter(function (a) { return a.audience === 'all' || a.audience === user.role; });

  if (announcements.length === 0) {
    list.innerHTML = '<div class="empty-state"><div class="empty-state-title">No announcements</div></div>';
    return;
  }

  list.innerHTML = announcements.map(function (a) {
    return ''
      + '<div class="announcement-item">'
      +   '<div class="announcement-header">'
      +     '<span class="announcement-title">' + escapeHtml(a.title) + '</span>'
      +     '<span class="announcement-date">' + formatDate(a.date) + '</span>'
      +   '</div>'
      +   '<div class="announcement-body">' + escapeHtml(a.body) + '</div>'
      +   '<div class="announcement-author">Posted by ' + escapeHtml(a.author) + '</div>'
      + '</div>';
  }).join('');
}

// ============================================================
// [PAGE-ROUTER] Run only the code for the current page
// ============================================================

document.addEventListener('DOMContentLoaded', function () {
  seedIfEmpty();
  const page = document.body.dataset.page;

  switch (page) {
    case 'login':
      initLogin();
      break;

    case 'admin':
    case 'teacher':
    case 'parent':
    case 'student':
      // initLayout sets up sidebar/topbar AND triggers showView() which calls
      // the matching init_<module>_<view>() function for the current hash.
      initLayout();
      break;

    default:
      // Static auth pages (register, forgot-password) — no init needed
      break;
  }
});
