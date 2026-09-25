const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const actionButtons = document.querySelectorAll('.btn');
actionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.style.transform = 'scale(0.98)';
    setTimeout(() => {
      button.style.transform = '';
    }, 150);
  });
});

document.querySelectorAll('.nav-dropdown-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    link.closest('.nav-dropdown').open = false;
  });
});

const subjectShell = document.querySelector('.subject-shell');
if (subjectShell) {
  const subjectGrid = subjectShell.querySelector('.subject-grid');
  const subjectSidebar = subjectShell.querySelector('.sidebar');
  const subjectCards = subjectGrid.querySelectorAll('.subject-card');
  const subjectSection = subjectGrid.parentElement;
  const defaultTitle = document.title;

  function updateSubjectView() {
    const selectedSubject = document.getElementById(window.location.hash.slice(1));
    const isSubjectCard = selectedSubject?.classList.contains('subject-card');

    subjectShell.classList.toggle('has-focused-subject', isSubjectCard);
    subjectGrid.classList.toggle('is-focused', isSubjectCard);
    subjectSidebar.hidden = isSubjectCard;
    subjectCards.forEach((card) => {
      card.hidden = isSubjectCard && card !== selectedSubject;
    });

    let focusHeading = subjectSection.querySelector('.subject-focus-heading');
    if (!isSubjectCard) {
      focusHeading?.remove();
      document.title = defaultTitle;
      return;
    }

    if (!focusHeading) {
      focusHeading = document.createElement('div');
      focusHeading.className = 'subject-focus-heading';
      focusHeading.innerHTML = '<h1></h1>';
      subjectSection.insertBefore(focusHeading, subjectGrid);
    }

    const subjectTitle = selectedSubject.querySelector('h3').textContent;
    focusHeading.querySelector('h1').textContent = subjectTitle;
    document.title = `${subjectTitle} | المواد الدراسية`;
  }

  window.addEventListener('hashchange', updateSubjectView);
  updateSubjectView();
}

const curriculumData = {
  1: {
    title: 'الفصل الأول',
    axes: [
      {
        title: 'المحور الأول: الأعداد والحساب',
        topics: [
          'المجموعات الأساسية للأعداد (N، Z، D، Q، R) والتمييز بينها.',
          'القوى الصحيحة وخواصها الحسابية.',
          'الجذور التربيعية وخواصها.',
          'الأعداد الأولية: اختبار أولية عدد، والتحليل إلى جداء عوامل أولية، والقاسم المشترك الأكبر PGCD والمضاعف المشترك الأصغر PPCM.',
          'القيم المقربة، التدوير، الكتابة العلمية، ورتبة مقدار عدد.',
        ],
      },
      {
        title: 'المحور الثاني: الترتيب والمجالات والقيمة المطلقة',
        topics: [
          'الترتيب في مجموعة الأعداد الحقيقية R والمقارنة بين عددين.',
          'الترتيب والعمليات: الحصر وتطبيقاته في الجمع والطرح والضرب والمقلوب.',
          'المجالات في R: التمثيل الهندسي، تقاطع مجالين واتحادهما.',
          'القيمة المطلقة والمسافة على المستقيم العددي.',
          'العلاقة بين المجالات والمسافة والقيمة المطلقة والحصر، وحل معادلات ومتراجحات تتضمن قيمة مطلقة بيانياً وجبرياً.',
        ],
      },
      {
        title: 'المحور الثالث: عموميات حول الدوال',
        topics: [
          'مفهوم الدالة وتعيين مجموعة التعريف بيانياً وجبرياً.',
          'التمثيل البياني لدالة في معلم، وحل معادلات ومتراجحات بيانياً.',
          'اتجاه تغير دالة على مجال وجدول التغيرات.',
          'القيم الحدية: العظمى والصغرى لدالة على مجال.',
          'شفعية دالة: الدالة الزوجية والدالة الفردية وتفسيرها البياني.',
        ],
      },
    ],
  },
  2: {
    title: 'الفصل الثاني',
    axes: [
      {
        title: 'المحور الأول: الدوال المرجعية',
        topics: [
          'الدالة التآلفية: اتجاه التغير، التمثيل البياني، وجدول الإشارة.',
          'الدالة مربع x ↦ x²: الدراسة والتمثيل البياني.',
          'الدالة مقلوب x ↦ 1/x: الدراسة والتمثيل البياني.',
          'الدالة جذر تربيعي x ↦ √x: الدراسة والتمثيل البياني.',
          'دراسة الدوال من الشكل x ↦ (x+a)²+b و x ↦ a/(x+b)+c واستنتاج تمثيلاتها البيانية.',
          'الدائرة المثلثية، قيس زاوية بالراديان، والدالتان جيب (sin) وجيب التمام (cos).',
        ],
      },
      {
        title: 'المحور الثاني: العبارات الجبرية',
        topics: [
          'التحويلات الجبرية: النشر، التحليل، والمتطابقات الشهيرة.',
          'الشكل النموذجي لعبارة من الدرجة الثانية ax²+bx+c.',
          'حل معادلات من الدرجة الثانية بمجهول واحد باستعمال الشكل النموذجي والمميز Δ.',
          'ترييض المشكلات وحل معادلات تؤول إلى معادلات من الدرجة الأولى أو الثانية.',
          'جدول إشارة ثنائي حد من الدرجة الأولى، وحل متراجحات الجداء والحاصل.',
        ],
      },
      {
        title: 'المحور الثالث: الهندسة المستوية والحساب الشعاعي ومعادلة مستقيم',
        topics: [
          'مفهوم الشعاع، تساوي شعاعين، مجموع شعاعين، وعلاقة شال.',
          'ضرب شعاع بعدد حقيقي والارتباط الخطي لشعاعين: توازي مستقيمين واستقامية النقط.',
          'المعلم في المستوي: إحداثيات نقطة، مركبتا شعاع، شرط الارتباط الخطي تحليلياً، والمسافة بين نقطتين.',
          'معادلة مستقيم: شعاع التوجيه، معامل التوجيه، المعادلة المختصرة والمعادلة الديكارتية.',
          'جملة معادلتين خطيتين لمجهولين وتفسيرها الهندسي: تقاطع مستقيمين.',
        ],
      },
    ],
  },
  3: {
    title: 'الفصل الثالث',
    axes: [
      {
        title: 'المحور الأول: الهندسة المستوية (الأشكال الهندسية المألوفة)',
        topics: [
          'المثلثات المتقايسة وحالات التقايس.',
          'المثلثات المتشابهة وحالات التشابه.',
          'التحويلات النقطية في المستوي: التناظر المحوري، التناظر المركزي، الانسحاب، والدوران وخواصها.',
        ],
      },
      {
        title: 'المحور الثاني: الهندسة في الفضاء',
        topics: [
          'قواعد الرسم في الفضاء (المنظور متساوي القياس) والمجسمات المألوفة.',
          'الأوضاع النسبية لمستقيمين، ولمستقيم ومستوي، ولمستويين في الفضاء.',
          'التعامد في الفضاء: تعامد مستقيم ومستوي، وتعامد مستويين.',
        ],
      },
      {
        title: 'المحور الثالث: الإحصاء',
        topics: [
          'تنظيم معطيات إحصائية في سلاسل متقطعة ومستمرة: التكرارات، التواترات، والتجميع في فئات.',
          'التمثيلات البيانية الإحصائية: المخطط بالأعمدة، المدرج التكراري، مضلع التكرارات، والمخطط الدائري.',
          'مؤشرات الموقع: الوسط الحسابي، الوسيط، المنوال، المدى، والربيعيات.',
        ],
      },
    ],
  },
};

const axisList = document.getElementById('axisList');
if (axisList) {
  const term = new URLSearchParams(window.location.search).get('term');
  const chapter = curriculumData[term];

  if (chapter) {
    document.getElementById('chapterTitle').textContent = chapter.title;
    document.title = `${chapter.title} | المنصة التعليمية`;

    chapter.axes.forEach((axis, index) => {
      const details = document.createElement('details');
      details.className = 'axis-item';
      const topics = axis.topics.map((topic) => `<li>${topic}</li>`).join('');
      const lessonLink = term === '1' && index === 0
        ? '<a href="lessons-axis1.html">الانتقال إلى قائمة دروس المحور</a>'
        : '';

      details.innerHTML = `
        <summary>${axis.title}</summary>
        <div class="axis-content">
          <ul>${topics}</ul>
          ${lessonLink}
        </div>
      `;
      details.addEventListener('toggle', () => {
        if (details.open) {
          axisList.querySelectorAll('.axis-item').forEach((otherAxis) => {
            if (otherAxis !== details) otherAxis.open = false;
          });
        }
      });
      axisList.append(details);
    });
  } else {
    document.getElementById('chapterTitle').textContent = 'اختر فصلاً دراسياً';
    axisList.innerHTML = '<a href="math.html">العودة إلى فصول الرياضيات</a>';
  }
}

const lessonData = {
  'lesson-1': {
    title: 'الدرس 1: المجموعات الأساسية للأعداد',
    content: `
      <article class="lesson-card">
        <h2>المجموعات الأساسية للأعداد</h2>
        <p>نميز بين المجموعات الأساسية للأعداد: N ⊂ Z ⊂ D ⊂ Q ⊂ R.</p>
        <div class="lesson-box">
          <h3>التعريف</h3>
          <ul>
            <li>N: الأعداد الطبيعية</li>
            <li>Z: الأعداد الصحيحة</li>
            <li>D: الأعداد العشرية</li>
            <li>Q: الأعداد النسبية</li>
            <li>R: الأعداد الحقيقية</li>
          </ul>
        </div>
        <div class="exercise-example">
          <h3>أمثلة</h3>
          <ul>
            <li>7 ∈ N</li>
            <li>-3 ∈ Z</li>
            <li>0.005 ∈ D</li>
            <li>1/2 ∈ Q</li>
            <li>π ∈ R</li>
          </ul>
        </div>
      </article>
    `,
  },
  'lesson-2': {
    title: 'الدرس 2: التحليل إلى عوامل أولية',
    content: `
      <article class="lesson-card">
        <h2>التحليل إلى عوامل أولية</h2>
        <p>نكتب كل عدد على شكل جداء عوامل أولية مرفوعة إلى أسس.</p>
        <div class="lesson-box">
          <h3>أمثلة</h3>
          <ul>
            <li>504 = 2³ × 3² × 7</li>
            <li>300 = 2² × 3 × 5²</li>
          </ul>
        </div>
        <div class="exercise-example">
          <h3>تمرين</h3>
          <p>حلل العددين 504 و 300 إلى عوامل أولية ثم قارن بينهما.</p>
        </div>
      </article>
    `,
  },
  'lesson-3': {
    title: 'الدرس 3: PGCD و PPCM',
    content: `
      <article class="lesson-card">
        <h2>PGCD و PPCM</h2>
        <p>يُحسب PGCD من العوامل المشتركة بأصغر أس، أما PPCM فيُحسب من جميع العوامل بأعلى أس.</p>
        <div class="lesson-box">
          <h3>أمثلة</h3>
          <ul>
            <li>PGCD(504,300) = 2² × 3 = 12</li>
            <li>PPCM(504,300) = 2³ × 3² × 5² × 7 = 12600</li>
          </ul>
        </div>
      </article>
    `,
  },
  'lesson-4': {
    title: 'الدرس 4: الخاصية المميزة للعدد العشري',
    content: `
      <article class="lesson-card">
        <h2>العدد العشري</h2>
        <p>الكسر العشري هو كسر مقامه، بعد اختزاله، يكتب على صورة 2α × 5β.</p>
        <div class="lesson-box">
          <h3>التطبيق</h3>
          <ul>
            <li>25/42 ليس عددا عشريا لأن 42 = 2 × 3 × 7</li>
            <li>1/8 = 0.125 وهو عدد عشري</li>
          </ul>
        </div>
      </article>
    `,
  },
  'lesson-5': {
    title: 'الدرس 5: الجذور التربيعية',
    content: `
      <article class="lesson-card">
        <h2>الجذور التربيعية</h2>
        <p>لنبسط جذر تربيعي، نبحث عن عوامل مربعة تامة داخل العدد.</p>
        <div class="lesson-box">
          <h3>أمثلة</h3>
          <ul>
            <li>√504 = √(36×14) = 6√14</li>
            <li>C = √504 - 3√126 + √14 = -2√14</li>
          </ul>
        </div>
      </article>
    `,
  },
  'lesson-6': {
    title: 'الدرس 6: الكتابة العلمية ورتبة مقدار',
    content: `
      <article class="lesson-card">
        <h2>الكتابة العلمية ورتبة مقدار</h2>
        <p>الكتابة العلمية تكتب العدد على شكل a × 10n حيث 1 ≤ a < 10.</p>
        <div class="lesson-box">
          <h3>أمثلة</h3>
          <ul>
            <li>126 = 1.26 × 10²</li>
            <li>رتبة مقدار 126 هي 10² = 100</li>
          </ul>
        </div>
      </article>
    `,
  },
};

const lessonList = document.getElementById('lessonList');

if (lessonList) {
  Object.entries(lessonData).forEach(([lessonKey, lesson]) => {
    const item = document.createElement('section');
    item.className = 'lesson-item';
    item.innerHTML = `
      <button class="lesson-link" type="button" aria-expanded="false" aria-controls="${lessonKey}-content">
        <span>${lesson.title}</span>
        <span class="lesson-chevron" aria-hidden="true">⌄</span>
      </button>
      <div class="lesson-panel" id="${lessonKey}-content" hidden>
        ${lesson.content}
      </div>
    `;
    lessonList.append(item);
  });

  lessonList.addEventListener('click', (event) => {
    const button = event.target.closest('.lesson-link');
    if (!button) return;

    const panel = document.getElementById(button.getAttribute('aria-controls'));
    const wasExpanded = button.getAttribute('aria-expanded') === 'true';

    lessonList.querySelectorAll('.lesson-link').forEach((link) => {
      link.setAttribute('aria-expanded', 'false');
      link.classList.remove('active');
      document.getElementById(link.getAttribute('aria-controls')).hidden = true;
    });

    if (!wasExpanded) {
      button.setAttribute('aria-expanded', 'true');
      button.classList.add('active');
      panel.hidden = false;
    }
  });
}
