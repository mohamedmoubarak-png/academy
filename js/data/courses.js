/**
 * courses.js — بيانات المسارات والدروس
 * دفتر البرمجة
 */

const COURSES = [
  {
    id: 'frontend',
    name: 'مسار الفرونت إند',
    nameEn: 'Frontend Development',
    icon: '🌐',
    color: '#1e3a8a',
    colorLight: '#dbeafe',
    description: 'تعلّم بناء مواقع الويب من الصفر — HTML, CSS, JavaScript',
    totalLessons: 32,
    available: true,
    path: 'courses/frontend/',
    stages: [
      {
        id: 1,
        name: 'المرحلة 1: HTML الأساسي',
        icon: '📄',
        color: '#ea580c',
        lessons: [
          { id: 1,  title: 'مقدمة في الويب و HTML',          duration: 30, file: 'lesson-01.html', available: true  },
          { id: 2,  title: 'هيكل HTML والوسوم الأساسية',      duration: 35, file: 'lesson-02.html', available: true  },
          { id: 3,  title: 'النصوص والقوائم والروابط',        duration: 35, file: 'lesson-03.html', available: true  },
          { id: 4,  title: 'الصور والوسائط المتعددة',         duration: 30, file: 'lesson-04.html', available: true  },
          { id: 5,  title: 'الجداول والفورمات (Forms)',        duration: 40, file: 'lesson-05.html', available: true  },
        ]
      },
      {
        id: 2,
        name: 'المرحلة 2: CSS التنسيق',
        icon: '🎨',
        color: '#7c3aed',
        lessons: [
          { id: 6,  title: 'مقدمة في CSS والمحددات (Selectors)', duration: 35, file: 'lesson-06.html', available: true  },
          { id: 7,  title: 'الألوان والخطوط والنصوص',             duration: 35, file: 'lesson-07.html', available: true  },
          { id: 8,  title: 'Box Model (الصندوق والمساحات)',         duration: 40, file: 'lesson-08.html', available: true  },
          { id: 9,  title: 'Display و Position',                   duration: 45, file: 'lesson-09.html', available: true  },
          { id: 10, title: 'Flexbox (التخطيط المرن)',               duration: 45, file: 'lesson-10.html', available: true  },
          { id: 11, title: 'Grid (الشبكات)',                        duration: 45, file: 'lesson-11.html', available: true  },
          { id: 12, title: 'التصميم المتجاوب (Responsive Design)',  duration: 40, file: 'lesson-12.html', available: true  },
        ]
      },
      {
        id: 3,
        name: 'المرحلة 3: JavaScript الأساسي',
        icon: '⚡',
        color: '#ca8a04',
        lessons: [
          { id: 13, title: 'مقدمة + المتغيرات + أنواع البيانات', duration: 45, file: 'lesson-13.html', available: true  },
          { id: 14, title: 'العمليات والمعاملات (Operators)',      duration: 40, file: 'lesson-14.html', available: true  },
          { id: 15, title: 'الشروط (if / else / switch)',           duration: 40, file: 'lesson-15.html', available: true  },
          { id: 16, title: 'الحلقات (Loops)',                       duration: 40, file: 'lesson-16.html', available: true  },
          { id: 17, title: 'الدوال (Functions)',                    duration: 45, file: 'lesson-17.html', available: true  },
          { id: 18, title: 'المصفوفات (Arrays)',                    duration: 45, file: 'lesson-18.html', available: true  },
          { id: 19, title: 'الكائنات (Objects)',                    duration: 45, file: 'lesson-19.html', available: true  },
          { id: 20, title: 'التعامل مع DOM',                       duration: 50, file: 'lesson-20.html', available: true  },
        ]
      },
      {
        id: 4,
        name: 'المرحلة 4: JavaScript المتقدم',
        icon: '🚀',
        color: '#0d9488',
        lessons: [
          { id: 21, title: 'الأحداث (Events)',                           duration: 45, file: 'lesson-21.html', available: true  },
          { id: 22, title: 'البرمجة غير المتزامنة (Async/Promises/Fetch)', duration: 50, file: 'lesson-22.html', available: true  },
          { id: 23, title: 'مميزات ES6+ الحديثة',                        duration: 45, file: 'lesson-23.html', available: true  },
          { id: 24, title: 'التخزين المحلي (Local Storage)',               duration: 35, file: 'lesson-24.html', available: true  },
          { id: 25, title: 'تنظيم الكود (Modules)',                       duration: 40, file: 'lesson-25.html', available: true  },
        ]
      },
      {
        id: 5,
        name: 'المرحلة 5: أدوات احترافية',
        icon: '🛠️',
        color: '#15803d',
        lessons: [
          { id: 26, title: 'Git و GitHub',                          duration: 50, file: 'lesson-26.html', available: true  },
          { id: 27, title: 'NPM ومدراء الحزم',                     duration: 40, file: 'lesson-27.html', available: true  },
          { id: 28, title: 'أدوات المطور في المتصفح (DevTools)',    duration: 40, file: 'lesson-28.html', available: true  },
          { id: 29, title: 'النشر (Deployment)',                    duration: 45, file: 'lesson-29.html', available: true  },
        ]
      },
      {
        id: 6,
        name: 'المرحلة 6: مشاريع عملية',
        icon: '🏗️',
        color: '#dc2626',
        lessons: [
          { id: 30, title: 'مشروع: قائمة مهام (To-Do List)',             duration: 60, file: 'lesson-30.html', available: true  },
          { id: 31, title: 'مشروع: تطبيق طقس (Weather App)',             duration: 60, file: 'lesson-31.html', available: true  },
          { id: 32, title: 'مشروع: موقع شخصي كامل (Portfolio)',          duration: 90, file: 'lesson-32.html', available: true  },
        ]
      },
    ]
  },
  {
    id: 'react-native',
    name: 'React Native',
    nameEn: 'React Native',
    icon: '📱',
    color: '#0ea5e9',
    colorLight: '#e0f2fe',
    description: 'تطوير تطبيقات الجوال لـ iOS و Android بلغة JavaScript',
    totalLessons: 28,
    available: true,
    path: 'courses/react-native/',
    stages: [
      {
        id: 1,
        name: 'المرحلة 1: الأساسيات والإعداد',
        icon: '🚀',
        color: '#0ea5e9',
        lessons: [
          { id: 1, title: 'مقدمة في تطوير الجوال + React Native',     duration: 35, file: 'lesson-01.html', available: true  },
          { id: 2, title: 'إعداد البيئة (Node, Expo, Android Studio)', duration: 45, file: 'lesson-02.html', available: true  },
          { id: 3, title: 'بنية مشروع Expo + أول تطبيق',                duration: 40, file: 'lesson-03.html', available: true  },
          { id: 4, title: 'مراجعة سريعة لـ JSX و ES6',                  duration: 35, file: 'lesson-04.html', available: true  },
          { id: 5, title: 'المكونات الأساسية (View, Text, Image)',      duration: 45, file: 'lesson-05.html', available: true  },
        ]
      },
      {
        id: 2,
        name: 'المرحلة 2: التنسيق والـ Layout',
        icon: '🎨',
        color: '#7c3aed',
        lessons: [
          { id: 6, title: 'StyleSheet و Flexbox في RN',                 duration: 45, file: 'lesson-06.html', available: true  },
          { id: 7, title: 'الأبعاد والوحدات (Dimensions)',              duration: 40, file: 'lesson-07.html', available: true  },
          { id: 8, title: 'SafeArea, StatusBar, KeyboardAvoidingView',  duration: 35, file: 'lesson-08.html', available: true  },
          { id: 9, title: 'الأنماط المتقدمة (Shadows, Gradient)',       duration: 40, file: 'lesson-09.html', available: true  },
        ]
      },
      {
        id: 3,
        name: 'المرحلة 3: التفاعل وإدخال المستخدم',
        icon: '👆',
        color: '#ea580c',
        lessons: [
          { id: 10, title: 'Buttons, TouchableOpacity, Pressable',      duration: 40, file: 'lesson-10.html', available: true  },
          { id: 11, title: 'TextInput وإدخال البيانات',                 duration: 45, file: 'lesson-11.html', available: true  },
          { id: 12, title: 'FlatList و SectionList (عرض القوائم)',      duration: 50, file: 'lesson-12.html', available: true  },
          { id: 13, title: 'Modal و Alert و Toast',                     duration: 35, file: 'lesson-13.html', available: false },
        ]
      },
      {
        id: 4,
        name: 'المرحلة 4: State Management و Hooks',
        icon: '⚡',
        color: '#ca8a04',
        lessons: [
          { id: 14, title: 'useState و useEffect في RN',                duration: 50, file: 'lesson-14.html', available: false },
          { id: 15, title: 'useContext (مشاركة الحالة)',                duration: 45, file: 'lesson-15.html', available: false },
          { id: 16, title: 'useReducer للحالات المعقدة',                duration: 40, file: 'lesson-16.html', available: false },
          { id: 17, title: 'Custom Hooks',                              duration: 40, file: 'lesson-17.html', available: false },
        ]
      },
      {
        id: 5,
        name: 'المرحلة 5: التنقل والـ APIs',
        icon: '🌐',
        color: '#0d9488',
        lessons: [
          { id: 18, title: 'React Navigation (Stack Navigator)',        duration: 50, file: 'lesson-18.html', available: false },
          { id: 19, title: 'Tab Navigator و Drawer Navigator',          duration: 45, file: 'lesson-19.html', available: false },
          { id: 20, title: 'تمرير البيانات بين الشاشات',                duration: 35, file: 'lesson-20.html', available: false },
          { id: 21, title: 'Fetch API و Axios في RN',                   duration: 45, file: 'lesson-21.html', available: false },
          { id: 22, title: 'AsyncStorage (تخزين دائم)',                 duration: 40, file: 'lesson-22.html', available: false },
        ]
      },
      {
        id: 6,
        name: 'المرحلة 6: ميزات الجوال + مشاريع',
        icon: '🏗️',
        color: '#dc2626',
        lessons: [
          { id: 23, title: 'الكاميرا ومعرض الصور (ImagePicker)',         duration: 45, file: 'lesson-23.html', available: false },
          { id: 24, title: 'الموقع الجغرافي + الخرائط',                  duration: 50, file: 'lesson-24.html', available: false },
          { id: 25, title: 'الإشعارات (Push Notifications)',             duration: 45, file: 'lesson-25.html', available: false },
          { id: 26, title: 'مشروع: تطبيق ملاحظات (Notes App)',          duration: 75, file: 'lesson-26.html', available: false },
          { id: 27, title: 'مشروع: تطبيق طقس مع تحديد الموقع',          duration: 80, file: 'lesson-27.html', available: false },
          { id: 28, title: 'مشروع ختامي: Social Feed + نشر على Stores', duration: 100, file: 'lesson-28.html', available: false },
        ]
      },
    ]
  },
  {
    id: 'python',
    name: 'Python',
    nameEn: 'Python',
    icon: '🐍',
    color: '#15803d',
    colorLight: '#dcfce7',
    description: 'لغة Python من الصفر للمشاريع الاحترافية',
    totalLessons: 0,
    available: false,
  },
  {
    id: 'backend',
    name: 'الباك إند',
    nameEn: 'Backend Development',
    icon: '⚙️',
    color: '#7c3aed',
    colorLight: '#ede9fe',
    description: 'Node.js + Express + PostgreSQL + MongoDB — من الصفر للـ APIs الاحترافية',
    totalLessons: 32,
    available: true,
    path: 'courses/backend/',
    stages: [
      {
        id: 1,
        name: 'المرحلة 1: Node.js الأساسي',
        icon: '🟢',
        color: '#15803d',
        lessons: [
          { id: 1,  title: 'كيف يعمل الإنترنت + مقدمة الباك إند',         duration: 35, file: 'lesson-01.html', available: true  },
          { id: 2,  title: 'Node.js + npm + أول سكريبت',                   duration: 40, file: 'lesson-02.html', available: true  },
          { id: 3,  title: 'الوحدات (Modules) + نظام الملفات (fs, path)',  duration: 40, file: 'lesson-03.html', available: true  },
          { id: 4,  title: 'الأحداث (EventEmitter) و Streams',             duration: 35, file: 'lesson-04.html', available: true  },
          { id: 5,  title: 'HTTP Server من الصفر بدون Framework',           duration: 40, file: 'lesson-05.html', available: true  },
        ]
      },
      {
        id: 2,
        name: 'المرحلة 2: Express.js',
        icon: '🚂',
        color: '#7c3aed',
        lessons: [
          { id: 6,  title: 'مقدمة في Express + أول خادم',                  duration: 40, file: 'lesson-06.html', available: true  },
          { id: 7,  title: 'Routing — المسارات والمعاملات (Params, Query)', duration: 45, file: 'lesson-07.html', available: true  },
          { id: 8,  title: 'Middleware — المدمج والمخصص',                  duration: 45, file: 'lesson-08.html', available: true  },
          { id: 9,  title: 'REST API — تصميم وأسس',                        duration: 40, file: 'lesson-09.html', available: false },
          { id: 10, title: 'CRUD API كامل (بيانات وهمية)',                 duration: 50, file: 'lesson-10.html', available: false },
          { id: 11, title: 'معالجة الأخطاء + Request Validation',          duration: 45, file: 'lesson-11.html', available: false },
        ]
      },
      {
        id: 3,
        name: 'المرحلة 3: SQL + PostgreSQL',
        icon: '🐘',
        color: '#0369a1',
        lessons: [
          { id: 12, title: 'مقدمة في SQL + PostgreSQL + pgAdmin',          duration: 40, file: 'lesson-12.html', available: false },
          { id: 13, title: 'أوامر CRUD بالـ SQL',                           duration: 45, file: 'lesson-13.html', available: false },
          { id: 14, title: 'Relations, Foreign Keys, Joins',                duration: 50, file: 'lesson-14.html', available: false },
          { id: 15, title: 'Prisma ORM مع PostgreSQL',                     duration: 50, file: 'lesson-15.html', available: false },
          { id: 16, title: 'API كاملة مع PostgreSQL + Prisma',             duration: 60, file: 'lesson-16.html', available: false },
        ]
      },
      {
        id: 4,
        name: 'المرحلة 4: MongoDB + Mongoose',
        icon: '🍃',
        color: '#15803d',
        lessons: [
          { id: 17, title: 'مقدمة في NoSQL + MongoDB + Compass',           duration: 35, file: 'lesson-17.html', available: false },
          { id: 18, title: 'CRUD في MongoDB',                               duration: 45, file: 'lesson-18.html', available: false },
          { id: 19, title: 'Mongoose + Schema + Validation',               duration: 50, file: 'lesson-19.html', available: false },
          { id: 20, title: 'Relations في MongoDB (Populate)',               duration: 45, file: 'lesson-20.html', available: false },
          { id: 21, title: 'API كاملة مع MongoDB + Mongoose',              duration: 60, file: 'lesson-21.html', available: false },
        ]
      },
      {
        id: 5,
        name: 'المرحلة 5: الأمان والمصادقة',
        icon: '🔐',
        color: '#dc2626',
        lessons: [
          { id: 22, title: 'Authentication — الجلسات والمفاهيم',            duration: 40, file: 'lesson-22.html', available: false },
          { id: 23, title: 'bcrypt — تشفير كلمات المرور',                  duration: 40, file: 'lesson-23.html', available: false },
          { id: 24, title: 'JWT — التوليد والتحقق',                        duration: 45, file: 'lesson-24.html', available: false },
          { id: 25, title: 'Refresh Tokens + Cookies',                     duration: 45, file: 'lesson-25.html', available: false },
          { id: 26, title: 'Authorization + Roles + Middleware',           duration: 45, file: 'lesson-26.html', available: false },
          { id: 27, title: 'API Security (CORS, Helmet, Rate Limiting)',   duration: 40, file: 'lesson-27.html', available: false },
        ]
      },
      {
        id: 6,
        name: 'المرحلة 6: متقدم + مشاريع',
        icon: '🏗️',
        color: '#ea580c',
        lessons: [
          { id: 28, title: 'File Upload مع Multer',                        duration: 40, file: 'lesson-28.html', available: false },
          { id: 29, title: 'WebSockets مع Socket.io',                      duration: 50, file: 'lesson-29.html', available: false },
          { id: 30, title: 'Deployment على Railway / Render',              duration: 45, file: 'lesson-30.html', available: false },
          { id: 31, title: 'مشروع: REST API ملاحظات مع Auth',             duration: 80, file: 'lesson-31.html', available: false },
          { id: 32, title: 'مشروع ختامي: Social API كامل مع JWT',         duration: 100,file: 'lesson-32.html', available: false },
        ]
      },
    ]
  },
  {
    id: 'ai-apps',
    name: 'تطبيقات الذكاء الاصطناعي',
    nameEn: 'AI Apps',
    icon: '🤖',
    color: '#0d9488',
    colorLight: '#ccfbf1',
    description: 'بناء تطبيقات بالـ AI والـ LLMs',
    totalLessons: 0,
    available: false,
  },
  {
    id: 'gamedev',
    name: 'تطوير الألعاب',
    nameEn: 'Game Dev',
    icon: '🎮',
    color: '#ea580c',
    colorLight: '#ffedd5',
    description: 'صمّم ألعابك بنفسك من الصفر',
    totalLessons: 0,
    available: false,
  },
  {
    id: 'data-science',
    name: 'علم البيانات',
    nameEn: 'Data Science',
    icon: '📊',
    color: '#db2777',
    colorLight: '#fce7f3',
    description: 'تحليل البيانات والإحصاء والتصور',
    totalLessons: 0,
    available: false,
  },
];
