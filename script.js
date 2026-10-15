const uiTranslations = {
    en: {
        createdName: "By El Masnaoui",
        learningProgress: "Learning progress",
        courseProgress: "Course Progress",
        sidebarTitle: "React Course",
        sidebarSubtitle: "Learning Path",
        heroEyebrow: "REACT LEARNING PATH",
        heroTitle: 'Learn React<br><span>by building.</span>',
        heroDesc: "Follow practical missions and build your React skills step by step.",
        allMissions: "All Missions",
        missionsCountText: "missions",
        tasksCompletedLabel: "Tasks completed",
        lessonsRemainingLabel: "Lessons remaining",
        lessonsCompletedLabel: "Lessons completed",
        levelAll: "All Levels",
        levelEasy: "Easy",
        levelMedium: "Medium",
        levelHard: "Hard",
        objective: "Objective",
        requirements: "Requirements",
        concepts: "Concepts",
        bonus: "Bonus",
        infoDifficulty: "Difficulty",
        infoMission: "Mission",
        infoStatus: "Status",
        completed: "Completed",
        notCompleted: "Not completed",
        markAsCompleted: "Mark as completed",
        completedStatus: "✓ Completed",
        viewMission: "View Mission",
        prevMission: "← Previous Mission",
        nextMission: "Next Mission →",
        readLesson: "Read Lesson",
        watchLesson: "Watch Lesson",
        doMission: "Do the Mission",
        afterLessonEyebrow: "AFTER THE LESSON",
        afterLessonTitle: "Now put what you learned into practice",
        afterLessonDescription: "Build the mission yourself, use the checklist to verify your work, then mark it complete when you are finished.",
        missionChecklist: "What to do",
        missionTasks: "Mission Tasks",
        completeAllTasks: "Mark all tasks as completed",
        resetAllTasks: "Reset all tasks",
        videoLessonTitle: "Lesson Video",
        openInYouTube: "Open in YouTube",
        dialogueGoal: "Dialogue Goal",
        whatYouWillLearn: "What You Will Learn",
        tasksCompletedSummary: "Completed {done} of {total}. Saved automatically."
    },
    ar: {
        createdName: "بواسطة المسناوي",
        learningProgress: "تقدم التعلم",
        courseProgress: "تقدم الدورة",
        sidebarTitle: "دورة رياكت",
        sidebarSubtitle: "مسار التعلم",
        heroEyebrow: "مسار تعلم رياكت",
        heroTitle: 'تعلم رياكت<br><span>من خلال التطبيق.</span>',
        heroDesc: "اتبع مهام تطبيقية وطوّر مهاراتك في رياكت خطوة بخطوة.",
        allMissions: "جميع المهام",
        missionsCountText: "مهام",
        tasksCompletedLabel: "المهام المكتملة",
        lessonsRemainingLabel: "الدروس المتبقية",
        lessonsCompletedLabel: "الدروس المكتملة",
        levelAll: "كل المستويات",
        levelEasy: "سهل",
        levelMedium: "متوسط",
        levelHard: "صعب",
        objective: "الهدف",
        requirements: "المتطلبات",
        concepts: "المفاهيم",
        bonus: "تحدي إضافي",
        infoDifficulty: "المستوى",
        infoMission: "المهمة",
        infoStatus: "الحالة",
        completed: "مكتملة",
        notCompleted: "غير مكتملة",
        markAsCompleted: "تحديد كمكتملة",
        completedStatus: "✓ مكتملة",
        viewMission: "عرض المهمة",
        prevMission: "المهمة السابقة ←",
        nextMission: "→ المهمة التالية",
        readLesson: "اقرأ الدرس",
        watchLesson: "شاهد الدرس",
        doMission: "نفّذ المهمة",
        afterLessonEyebrow: "بعد الدرس",
        afterLessonTitle: "حان وقت تطبيق ما تعلمته",
        afterLessonDescription: "نفّذ المهمة بنفسك، واستخدم القائمة للتحقق من عملك، ثم حدّدها كمكتملة عند الانتهاء.",
        missionChecklist: "ما الذي عليك فعله",
        missionTasks: "مهام المهمة",
        completeAllTasks: "تحديد كل المهام كمكتملة",
        resetAllTasks: "إعادة تعيين كل المهام",
        videoLessonTitle: "فيديو الدرس",
        openInYouTube: "فتحه في YouTube",
        dialogueGoal: "هدف الحواري",
        whatYouWillLearn: "ما ستتعلمه",
        tasksCompletedSummary: "أكملت {done} من {total}. تحفظ كل اختياراتك تلقائياً."
    }
};

const YOUTUBE_PLAYLIST_ID = "PLaC7IVwu2bhw";
const youtubeVideoIds = [
    "RFUt2BIwqcM",
    "7NpaF_AGvMc",
    "eOgdtPtNxSI",
    "Dol8-DghpoI",
    "bLjJubav5GE",
    "2BHDVht84tI",
    "6MKQ_c7HLiU",
    "DtC7sh8DNL4"
];

const missionBlueprints = [
    {
        section: "setup", level: "easy",
        title: ["Your First React App", "تطبيقك الأول باستخدام رياكت"],
        description: ["Set up a React project and replace the starter screen with a simple welcome page.", "أنشئ مشروع رياكت واستبدل شاشة البداية بصفحة ترحيب بسيطة."],
        objective: ["Run a React app locally and identify its entry point and source files.", "شغّل تطبيق رياكت محلياً وتعرّف على ملف التشغيل وملفات المصدر."],
        dialogueGoal: ["Explain how the browser loads the app and where React mounts the root component.", "اشرح كيف يحمّل المتصفح التطبيق وأين تعرض رياكت المكوّن الجذر."],
        whatYouWillLearn: ["Project setup, the development server, and the relationship between the HTML entry and React root.", "إعداد المشروع وخادم التطوير والعلاقة بين ملف HTML وجذر رياكت."],
        tasks: [["Create and run a React project", "أنشئ مشروع رياكت وشغّله"], ["Find the HTML entry and React root files", "اعثر على ملف HTML وملفات جذر رياكت"], ["Replace the starter screen with a welcome page", "استبدل شاشة البداية بصفحة ترحيب"]],
        requirements: [["The app starts without console errors.", "يعمل التطبيق دون أخطاء في وحدة التحكم."], ["The welcome page has a heading and a short introduction.", "تحتوي صفحة الترحيب على عنوان ومقدمة قصيرة."], ["Explain which file starts the React app.", "وضّح الملف الذي يبدأ تشغيل تطبيق رياكت."]],
        concepts: [["React root", "جذر رياكت"], ["Project structure", "بنية المشروع"], ["Development server", "خادم التطوير"]],
        bonus: ["Add a responsive welcome card with your name and learning goal.", "أضف بطاقة ترحيب متجاوبة تتضمن اسمك وهدفك من التعلم."]
    },
    {
        section: "setup", level: "easy",
        title: ["JSX Profile Card", "بطاقة شخصية باستخدام JSX"],
        description: ["Build a profile card with JSX, JavaScript expressions, and semantic HTML.", "أنشئ بطاقة شخصية باستخدام JSX وتعابير جافاسكربت وعناصر HTML دلالية."],
        objective: ["Render dynamic text and values inside valid JSX.", "اعرض نصوصاً وقِيماً متغيرة داخل JSX صحيح."],
        dialogueGoal: ["Describe how JSX expressions become part of the rendered interface.", "اشرح كيف تصبح تعابير JSX جزءاً من الواجهة المعروضة."],
        whatYouWillLearn: ["JSX syntax, expressions, className, and semantic elements.", "صياغة JSX والتعابير وclassName والعناصر الدلالية."],
        tasks: [["Create a profile card component", "أنشئ مكوّناً لبطاقة شخصية"], ["Show a name, role, and short bio from variables", "اعرض الاسم والدور ونبذة قصيرة باستخدام متغيرات"], ["Use semantic elements and a CSS class", "استخدم عناصر دلالية وصنف CSS"]],
        requirements: [["Use one parent element for the JSX output.", "استخدم عنصراً أباً واحداً لمخرجات JSX."], ["Render the profile details from JavaScript values.", "اعرض تفاصيل الملف الشخصي من قيم جافاسكربت."], ["Use className rather than the HTML class attribute.", "استخدم className بدلاً من الخاصية class في HTML."]],
        concepts: [["JSX", "JSX"], ["Expressions", "التعابير"], ["Semantic HTML", "HTML دلالي"]],
        bonus: ["Add a fallback avatar when no profile image is available.", "أضف صورة افتراضية عند عدم توفر صورة للملف الشخصي."]
    },
    {
        section: "fundamentals", level: "easy",
        title: ["Build Reusable Components", "إنشاء مكوّنات قابلة لإعادة الاستخدام"],
        description: ["Break a simple landing page into small components with one clear responsibility each.", "قسّم صفحة رئيسية بسيطة إلى مكوّنات صغيرة لكل منها مسؤولية واضحة."],
        objective: ["Compose a page from reusable components instead of repeating markup.", "كوّن صفحة من مكوّنات قابلة لإعادة الاستخدام بدلاً من تكرار عناصر الواجهة."],
        dialogueGoal: ["Choose sensible component boundaries and explain how composition improves maintenance.", "حدّد حدوداً مناسبة للمكوّنات واشرح كيف يسهل تركيبها صيانة التطبيق."],
        whatYouWillLearn: ["Function components, imports, exports, and component composition.", "المكوّنات الدالية والاستيراد والتصدير وتركيب المكوّنات."],
        tasks: [["Create Header, ProfileCard, and Footer components", "أنشئ مكوّنات Header وProfileCard وFooter"], ["Render them together on one page", "اعرضها معاً في صفحة واحدة"], ["Move each component into a clearly named file", "ضع كل مكوّن في ملف ذي اسم واضح"]],
        requirements: [["Each component has one clear purpose.", "لكل مكوّن غرض واضح."], ["The page is composed by importing and rendering the components.", "تُركّب الصفحة باستيراد المكوّنات وعرضها."], ["Avoid duplicating the same markup.", "تجنب تكرار عناصر الواجهة نفسها."]],
        concepts: [["Function components", "المكوّنات الدالية"], ["Composition", "التركيب"], ["ES modules", "وحدات ES"]],
        bonus: ["Create a reusable Button component with primary and secondary variants.", "أنشئ مكوّن Button قابلاً لإعادة الاستخدام بنمطين أساسي وثانوي."]
    },
    {
        section: "fundamentals", level: "easy",
        title: ["Pass Data with Props", "تمرير البيانات باستخدام props"],
        description: ["Turn repeated product markup into a ProductCard that receives different data through props.", "حوّل عناصر المنتجات المتكررة إلى ProductCard يستقبل بيانات مختلفة عبر props."],
        objective: ["Pass data from a parent component and render several distinct cards.", "مرّر البيانات من المكوّن الأب واعرض عدة بطاقات مختلفة."],
        dialogueGoal: ["Explain one-way data flow and why props should be treated as read-only.", "اشرح تدفق البيانات باتجاه واحد وسبب التعامل مع props كبيانات للقراءة فقط."],
        whatYouWillLearn: ["Props, destructuring, reusable UI, and default values.", "الخصائص props وتفكيك الكائنات والواجهات القابلة لإعادة الاستخدام والقيم الافتراضية."],
        tasks: [["Create a ProductCard that accepts title and price", "أنشئ ProductCard يستقبل العنوان والسعر"], ["Render three products with different props", "اعرض ثلاثة منتجات بخصائص مختلفة"], ["Add an optional badge with a default value", "أضف شارة اختيارية ذات قيمة افتراضية"]],
        requirements: [["The same component renders every product.", "يعرض المكوّن نفسه جميع المنتجات."], ["Each card displays the correct product data.", "تعرض كل بطاقة بيانات المنتج الصحيحة."], ["The child component does not mutate its props.", "لا يغيّر المكوّن الابن خصائصه props."]],
        concepts: [["Props", "الخصائص"], ["Destructuring", "تفكيك الكائنات"], ["One-way data flow", "تدفق البيانات باتجاه واحد"]],
        bonus: ["Add an onSale prop that changes the card badge and price styling.", "أضف الخاصية onSale لتغيير شارة البطاقة وتنسيق السعر."]
    },
    {
        section: "fundamentals", level: "easy",
        title: ["Render Lists with Stable Keys", "عرض القوائم باستخدام مفاتيح ثابتة"],
        description: ["Display a list of learning resources from an array and give every row a stable identity.", "اعرض قائمة بمصادر التعلم من مصفوفة وامنح كل عنصر معرّفاً ثابتاً."],
        objective: ["Transform structured data into reusable UI without key warnings.", "حوّل البيانات المنظمة إلى واجهة قابلة لإعادة الاستخدام دون تحذيرات المفاتيح."],
        dialogueGoal: ["Explain why stable keys help React match list items after updates.", "اشرح كيف تساعد المفاتيح الثابتة رياكت على مطابقة عناصر القائمة بعد تحديثها."],
        whatYouWillLearn: ["Array.map, list rendering, keys, and data-driven interfaces.", "عرض المصفوفات باستخدام map والمفاتيح والواجهات المعتمدة على البيانات."],
        tasks: [["Create an array of at least five learning resources", "أنشئ مصفوفة تضم خمسة مصادر تعلم على الأقل"], ["Render each resource with a reusable component", "اعرض كل مصدر باستخدام مكوّن قابل لإعادة الاستخدام"], ["Use each resource's stable id as its key", "استخدم المعرّف الثابت لكل مصدر بوصفه key"]],
        requirements: [["Every list item has a unique, stable key.", "لكل عنصر في القائمة مفتاح فريد وثابت."], ["The displayed title and type come from the data.", "يأتي العنوان والنوع المعروضان من البيانات."], ["The console has no missing-key warning.", "لا تظهر تحذيرات عن المفاتيح في وحدة التحكم."]],
        concepts: [["Array.map", "الدالة Array.map"], ["Keys", "المفاتيح"], ["Data-driven UI", "واجهة معتمدة على البيانات"]],
        bonus: ["Sort the resources by title without changing the original array.", "رتّب المصادر حسب العنوان دون تغيير المصفوفة الأصلية."]
    },
    {
        section: "fundamentals", level: "easy",
        title: ["Conditional UI States", "حالات الواجهة الشرطية"],
        description: ["Create a notification panel that shows different content for loading, empty, success, and error states.", "أنشئ لوحة إشعارات تعرض محتوى مختلفاً لحالات التحميل والفراغ والنجاح والخطأ."],
        objective: ["Render the correct interface for each possible state.", "اعرض الواجهة المناسبة لكل حالة ممكنة."],
        dialogueGoal: ["Explain why explicit UI states are clearer than scattered boolean checks.", "اشرح لماذا تكون حالات الواجهة الصريحة أوضح من الشروط المنطقية المتفرقة."],
        whatYouWillLearn: ["Conditional rendering, ternaries, logical conditions, and state-based UI.", "العرض الشرطي واستخدام ternary والشروط المنطقية والواجهة المعتمدة على الحالة."],
        tasks: [["Create loading, empty, success, and error examples", "أنشئ أمثلة لحالات التحميل والفراغ والنجاح والخطأ"], ["Use a reusable status message component", "استخدم مكوّناً قابلاً لإعادة الاستخدام لرسائل الحالة"], ["Add a button to switch between the states", "أضف زراً للتبديل بين الحالات"]],
        requirements: [["Exactly the matching state message is visible.", "تظهر رسالة الحالة المطابقة فقط."], ["The success state displays sample content.", "تعرض حالة النجاح محتوى تجريبياً."], ["The error state offers a clear next step.", "تقدم حالة الخطأ خطوة تالية واضحة."]],
        concepts: [["Conditional rendering", "العرض الشرطي"], ["Ternary operator", "المعامل الثلاثي"], ["UI states", "حالات الواجهة"]],
        bonus: ["Add an accessible live region for status announcements.", "أضف منطقة حية متاحة لإعلان تغييرات الحالة."]
    },
    {
        section: "fundamentals", level: "easy",
        title: ["Style a Responsive Interface", "تنسيق واجهة متجاوبة"],
        description: ["Style a mission dashboard that remains readable on narrow phones and wide screens.", "نسّق لوحة مهام تبقى واضحة على الهواتف الضيقة والشاشات الواسعة."],
        objective: ["Build a responsive layout with reusable styles and a consistent visual system.", "أنشئ تخطيطاً متجاوباً بتنسيقات قابلة لإعادة الاستخدام ونظام بصري متناسق."],
        dialogueGoal: ["Explain how layout choices adapt to screen size without hiding essential content.", "اشرح كيف يتكيف التخطيط مع حجم الشاشة دون إخفاء المحتوى الأساسي."],
        whatYouWillLearn: ["CSS modules or stylesheets, responsive grids, spacing, and focus states.", "ملفات CSS والشبكات المتجاوبة والمسافات وحالات التركيز."],
        tasks: [["Create a dashboard header and responsive card grid", "أنشئ ترويسة لوحة وشبكة بطاقات متجاوبة"], ["Add a mobile breakpoint and test a narrow viewport", "أضف نقطة توقف للهاتف واختبر شاشة ضيقة"], ["Style keyboard focus and hover states", "نسّق حالتي التركيز بلوحة المفاتيح والتحويم"]],
        requirements: [["Content has no horizontal overflow at phone width.", "لا يتجاوز المحتوى عرض الشاشة على الهاتف."], ["Text and controls remain readable and usable.", "يبقى النص وعناصر التحكم واضحة وسهلة الاستخدام."], ["Keyboard focus is visible.", "يظهر التركيز عند استخدام لوحة المفاتيح."]],
        concepts: [["Responsive design", "التصميم المتجاوب"], ["CSS Grid", "شبكة CSS"], ["Focus states", "حالات التركيز"]],
        bonus: ["Add a dark/light theme using CSS custom properties.", "أضف مظهراً داكناً وفاتحاً باستخدام خصائص CSS المخصصة."]
    },
    {
        section: "events", level: "easy",
        title: ["Handle User Events", "التعامل مع أحداث المستخدم"],
        description: ["Build an interactive rating widget with click, reset, and keyboard-friendly controls.", "أنشئ أداة تقييم تفاعلية تدعم النقر وإعادة التعيين وعناصر تحكم مناسبة للوحة المفاتيح."],
        objective: ["Respond to user actions with correctly wired React event handlers.", "استجب لتفاعلات المستخدم باستخدام معالجات أحداث رياكت الصحيحة."],
        dialogueGoal: ["Trace how an event handler receives an event and updates the interface.", "تتبّع كيفية استقبال معالج الحدث للحدث وتحديث الواجهة."],
        whatYouWillLearn: ["Event props, handler functions, event objects, and button semantics.", "خصائص الأحداث ودوال المعالجة وكائن الحدث ودلالات الأزرار."],
        tasks: [["Create five rating buttons", "أنشئ خمسة أزرار للتقييم"], ["Show the selected rating and a confirmation message", "اعرض التقييم المختار ورسالة تأكيد"], ["Add a reset action", "أضف إجراءً لإعادة التعيين"]],
        requirements: [["Clicking a rating selects the correct value.", "يختار النقر على التقييم القيمة الصحيحة."], ["Reset clears the selection.", "يمسح إجراء إعادة التعيين الاختيار."], ["Use buttons with accessible labels.", "استخدم أزراراً ذات تسميات متاحة."]],
        concepts: [["Event handlers", "معالجات الأحداث"], ["onClick", "حدث onClick"], ["Button semantics", "دلالات الأزرار"]],
        bonus: ["Support selecting a rating with the keyboard arrow keys.", "أتح اختيار التقييم باستخدام أسهم لوحة المفاتيح."]
    },
    {
        section: "events", level: "easy",
        title: ["Stateful Counter", "عداد باستخدام الحالة"],
        description: ["Build a counter with increment, decrement, reset, and a minimum value.", "أنشئ عداداً يدعم الزيادة والنقصان وإعادة التعيين وقيمة دنيا."],
        objective: ["Use React state to make the displayed value respond to interactions.", "استخدم حالة رياكت لجعل القيمة المعروضة تستجيب للتفاعلات."],
        dialogueGoal: ["Explain why state updates trigger a render and why it should not be changed directly.", "اشرح لماذا تؤدي تحديثات الحالة إلى إعادة العرض ولماذا لا ينبغي تغييرها مباشرة."],
        whatYouWillLearn: ["useState, state setters, functional updates, and render cycles.", "الخطاف useState ومحدّثات الحالة والتحديثات الدالية ودورات العرض."],
        tasks: [["Add increment and decrement buttons", "أضف زري الزيادة والنقصان"], ["Prevent the counter from going below zero", "امنع العداد من النزول دون الصفر"], ["Add a reset button and show the current value", "أضف زر إعادة تعيين واعرض القيمة الحالية"]],
        requirements: [["The visible count always matches React state.", "تطابق القيمة المعروضة حالة رياكت دائماً."], ["The minimum value is enforced.", "يتم الالتزام بالقيمة الدنيا."], ["State is updated with its setter, never mutated directly.", "تُحدّث الحالة باستخدام دالتها لا بتغييرها مباشرة."]],
        concepts: [["useState", "useState"], ["State updates", "تحديثات الحالة"], ["Re-render", "إعادة العرض"]],
        bonus: ["Add a step-size selector and keep the count a multiple of that step.", "أضف محدداً لمقدار الخطوة واجعل العداد من مضاعفاتها."]
    },
    {
        section: "events", level: "easy",
        title: ["Controlled Form with Validation", "نموذج متحكم به مع التحقق"],
        description: ["Build a sign-up form whose fields, validation messages, and submit status are managed by React.", "أنشئ نموذج تسجيل تدير رياكت حقوله ورسائل التحقق وحالة الإرسال."],
        objective: ["Validate user input before showing a successful submission.", "تحقق من إدخال المستخدم قبل عرض نجاح الإرسال."],
        dialogueGoal: ["Explain the difference between a controlled input and an uncontrolled input.", "اشرح الفرق بين حقل الإدخال المتحكم به وغير المتحكم به."],
        whatYouWillLearn: ["Controlled inputs, onChange, form submission, and field validation.", "حقول الإدخال المتحكم بها وonChange وإرسال النماذج والتحقق من الحقول."],
        tasks: [["Add name and email fields controlled by state", "أضف حقلي الاسم والبريد الإلكتروني وتحكم بهما عبر الحالة"], ["Show clear errors for missing or invalid values", "اعرض أخطاء واضحة للقيم الناقصة أو غير الصحيحة"], ["Prevent invalid submission and show a success message", "امنع الإرسال غير الصحيح واعرض رسالة نجاح"]],
        requirements: [["Inputs have associated labels.", "ترتبط حقول الإدخال بتسميات."], ["Invalid email and empty name are rejected.", "يُرفض البريد غير الصحيح والاسم الفارغ."], ["Submitting valid data does not reload the page.", "لا تؤدي البيانات الصحيحة إلى إعادة تحميل الصفحة."]],
        concepts: [["Controlled inputs", "حقول متحكم بها"], ["Form events", "أحداث النماذج"], ["Validation", "التحقق"]],
        bonus: ["Disable submit while the form is invalid and announce errors accessibly.", "عطّل الإرسال عند عدم صحة النموذج وأعلن الأخطاء بطريقة متاحة."]
    },
    {
        section: "events", level: "medium",
        title: ["Build a Task List", "إنشاء قائمة مهام"],
        description: ["Create a task list that can add, complete, and remove tasks without mutating state.", "أنشئ قائمة مهام تتيح الإضافة والإكمال والحذف دون تغيير الحالة مباشرة."],
        objective: ["Manage a collection of items with immutable state updates.", "أدر مجموعة عناصر بتحديثات حالة غير مباشرة."],
        dialogueGoal: ["Explain why stable IDs and immutable updates matter for interactive lists.", "اشرح أهمية المعرّفات الثابتة وتحديث القوائم دون تغيير البيانات مباشرة."],
        whatYouWillLearn: ["Array state, map, filter, stable IDs, and empty states.", "حالة المصفوفات والدالتان map وfilter والمعرّفات الثابتة وحالات الفراغ."],
        tasks: [["Add a task using a controlled input", "أضف مهمة باستخدام حقل متحكم به"], ["Toggle completion and remove a task", "بدّل حالة الإكمال واحذف مهمة"], ["Show an empty state when no tasks remain", "اعرض حالة فارغة عند عدم وجود مهام"]],
        requirements: [["Every task has a stable unique ID.", "لكل مهمة معرّف فريد وثابت."], ["Adding, completing, and deleting update the interface immediately.", "تحدّث الإضافة والإكمال والحذف الواجهة فوراً."], ["Do not mutate the existing task array.", "لا تغيّر مصفوفة المهام الحالية مباشرة."]],
        concepts: [["Array state", "حالة المصفوفة"], ["Immutable updates", "التحديث دون تغيير مباشر"], ["Stable IDs", "المعرّفات الثابتة"]],
        bonus: ["Add filters for all, active, and completed tasks.", "أضف عوامل تصفية للمهام كلها والنشطة والمكتملة."]
    },
    {
        section: "events", level: "medium",
        title: ["Lift State and Filter Data", "رفع الحالة وتصفية البيانات"],
        description: ["Build a searchable course catalog with category filters shared by multiple components.", "أنشئ فهرس دورات قابل للبحث مع فلاتر تصنيفات مشتركة بين عدة مكوّنات."],
        objective: ["Keep shared state in the closest common parent and derive visible results from it.", "ضع الحالة المشتركة في أقرب مكوّن أب مشترك واشتق النتائج المعروضة منها."],
        dialogueGoal: ["Explain when state should be lifted and why derived results usually should not be stored separately.", "اشرح متى ينبغي رفع الحالة ولماذا لا ينبغي عادة تخزين النتائج المشتقة منفصلة."],
        whatYouWillLearn: ["Lifting state, controlled filters, search, and derived data.", "رفع الحالة والفلاتر المتحكم بها والبحث والبيانات المشتقة."],
        tasks: [["Create a search field and category selector", "أنشئ حقل بحث ومحدداً للتصنيف"], ["Pass filter state and handlers to child components", "مرّر حالة الفلاتر ومعالجاتها إلى المكوّنات الأبناء"], ["Display results matching both filters", "اعرض النتائج المطابقة لكلا الفلترين"]],
        requirements: [["Search ignores letter case and trims surrounding spaces.", "يتجاهل البحث حالة الأحرف والمسافات المحيطة."], ["Changing either filter updates the same result list.", "يحدّث تغيير أي فلتر قائمة النتائج نفسها."], ["Filtered results are calculated from the source data.", "تُحسب النتائج المصفاة من البيانات الأصلية."]],
        concepts: [["Lifting state", "رفع الحالة"], ["Controlled components", "المكوّنات المتحكم بها"], ["Derived data", "البيانات المشتقة"]],
        bonus: ["Add a clear-filters button and a useful no-results message.", "أضف زر مسح الفلاتر ورسالة مفيدة عند عدم وجود نتائج."]
    },
    {
        section: "hooks", level: "medium",
        title: ["Effects and Cleanup", "التأثيرات والتنظيف"],
        description: ["Create a focus timer that starts and stops an interval safely as the component changes.", "أنشئ مؤقت تركيز يبدأ ويوقف الفترة الزمنية بأمان عند تغيّر المكوّن."],
        objective: ["Synchronize a timer with the component lifecycle and clean it up correctly.", "زامن المؤقت مع دورة حياة المكوّن ونظّفه بالشكل الصحيح."],
        dialogueGoal: ["Explain effect dependencies and why subscriptions and timers need cleanup.", "اشرح تبعيات التأثير وسبب الحاجة إلى تنظيف الاشتراكات والمؤقتات."],
        whatYouWillLearn: ["useEffect, dependency arrays, intervals, and cleanup functions.", "الخطاف useEffect ومصفوفة التبعيات والفترات الزمنية ودوال التنظيف."],
        tasks: [["Start a one-second timer when the session starts", "ابدأ مؤقتاً كل ثانية عند بدء الجلسة"], ["Pause and resume without creating duplicate intervals", "أوقف المؤقت واستأنفه دون إنشاء فترات مكررة"], ["Reset and clean up the interval on unmount", "أعد التعيين ونظّف الفترة عند إزالة المكوّن"]],
        requirements: [["The timer changes only while running.", "يتغير المؤقت أثناء التشغيل فقط."], ["Pause and resume never create duplicate intervals.", "لا يؤدي الإيقاف والاستئناف إلى إنشاء فترات مكررة."], ["The interval is cleared during effect cleanup.", "تُمسح الفترة ضمن تنظيف التأثير."]],
        concepts: [["useEffect", "useEffect"], ["Dependencies", "التبعيات"], ["Cleanup", "التنظيف"]],
        bonus: ["Add a short break mode with a configurable duration.", "أضف وضع استراحة قصيرة بمدة قابلة للتغيير."]
    },
    {
        section: "hooks", level: "medium",
        title: ["Fetch Data with Loading and Error States", "جلب البيانات مع حالتي التحميل والخطأ"],
        description: ["Load a list of public items and design clear loading, success, empty, and error experiences.", "اجلب قائمة عناصر عامة وصمّم تجارب واضحة لحالات التحميل والنجاح والفراغ والخطأ."],
        objective: ["Handle an asynchronous request without leaving the interface in an ambiguous state.", "تعامل مع طلب غير متزامن دون ترك الواجهة في حالة غير واضحة."],
        dialogueGoal: ["Explain the request lifecycle and how stale requests can be cancelled or ignored.", "اشرح دورة حياة الطلب وكيفية إلغاء الطلبات القديمة أو تجاهلها."],
        whatYouWillLearn: ["fetch, async functions, effect cleanup, and request status.", "الدالة fetch والدوال غير المتزامنة وتنظيف التأثير وحالة الطلب."],
        tasks: [["Fetch a list from a public JSON API", "اجلب قائمة من واجهة JSON عامة"], ["Show loading and retryable error states", "اعرض حالة تحميل وحالة خطأ قابلة لإعادة المحاولة"], ["Render the results and handle an empty response", "اعرض النتائج وتعامل مع استجابة فارغة"]],
        requirements: [["Check response.ok before reading response data.", "تحقق من response.ok قبل قراءة بيانات الاستجابة."], ["A failed request shows a helpful message and retry action.", "يعرض فشل الطلب رسالة مفيدة وخيار إعادة المحاولة."], ["Do not update state after the component has unmounted.", "لا تحدّث الحالة بعد إزالة المكوّن."]],
        concepts: [["fetch", "fetch"], ["Async state", "الحالة غير المتزامنة"], ["Error handling", "معالجة الأخطاء"]],
        bonus: ["Add a search input that filters the fetched results.", "أضف حقل بحث لتصفية النتائج التي تم جلبها."]
    },
    {
        section: "hooks", level: "medium",
        title: ["Create a Reusable Custom Hook", "إنشاء خطاف مخصص قابل لإعادة الاستخدام"],
        description: ["Extract repeated local-storage synchronization into a useLocalStorage hook.", "استخرج مزامنة التخزين المحلي المتكررة إلى خطاف useLocalStorage."],
        objective: ["Package reusable stateful behavior in a custom hook and use it in two components.", "اجمع سلوك الحالة القابل لإعادة الاستخدام في خطاف مخصص واستخدمه في مكوّنين."],
        dialogueGoal: ["Explain hook naming, the Rules of Hooks, and how to avoid duplicating state logic.", "اشرح تسمية الخطافات وقواعدها وكيفية تجنب تكرار منطق الحالة."],
        whatYouWillLearn: ["Custom hooks, lazy state initialization, localStorage, and JSON parsing.", "الخطافات المخصصة والتهيئة الكسولة للحالة وlocalStorage وتحليل JSON."],
        tasks: [["Implement a useLocalStorage hook", "نفّذ الخطاف useLocalStorage"], ["Use it for a saved note and a preferred display name", "استخدمه لحفظ ملاحظة واسم العرض المفضل"], ["Handle missing or invalid stored data safely", "تعامل بأمان مع البيانات المخزنة المفقودة أو غير الصالحة"]],
        requirements: [["The hook name starts with use.", "يبدأ اسم الخطاف بكلمة use."], ["Both components restore and save their own values.", "يستعيد كل مكوّن قيمته ويحفظها بشكل مستقل."], ["Invalid JSON does not crash the app.", "لا يؤدي JSON غير الصالح إلى تعطيل التطبيق."]],
        concepts: [["Custom hooks", "الخطافات المخصصة"], ["localStorage", "التخزين المحلي"], ["Lazy initialization", "التهيئة الكسولة"]],
        bonus: ["Add a reset function that removes the stored value and restores its default.", "أضف دالة إعادة تعيين تحذف القيمة المخزنة وتستعيد القيمة الافتراضية."]
    },
    {
        section: "hooks", level: "medium",
        title: ["Share State with Context", "مشاركة الحالة باستخدام Context"],
        description: ["Add an app-wide theme preference using context instead of passing props through every level.", "أضف تفضيلاً عاماً للمظهر باستخدام Context بدلاً من تمرير الخصائص عبر كل المستويات."],
        objective: ["Provide shared state to distant components and persist the user's preference.", "وفّر حالة مشتركة للمكوّنات البعيدة واحفظ تفضيل المستخدم."],
        dialogueGoal: ["Explain when context is useful and when ordinary props are simpler.", "اشرح متى يكون Context مفيداً ومتى تكون الخصائص العادية أبسط."],
        whatYouWillLearn: ["createContext, provider values, useContext, and shared state.", "الدالة createContext وقيم المزوّد وuseContext والحالة المشتركة."],
        tasks: [["Create a ThemeContext and provider", "أنشئ ThemeContext ومزوّداً"], ["Read and change the theme from separate components", "اقرأ المظهر وغيّره من مكوّنات منفصلة"], ["Persist the preference and apply theme styles", "احفظ التفضيل وطبّق تنسيقات المظهر"]],
        requirements: [["The toggle updates components at different levels.", "يحدّث زر التبديل مكوّنات في مستويات مختلفة."], ["The selected theme survives a page reload.", "يبقى المظهر المختار بعد إعادة تحميل الصفحة."], ["Unrelated components do not need theme props.", "لا تحتاج المكوّنات غير المرتبطة إلى خصائص المظهر."]],
        concepts: [["Context", "Context"], ["Provider", "المزوّد"], ["Shared state", "الحالة المشتركة"]],
        bonus: ["Respect the user's system color-scheme preference on first visit.", "احترم تفضيل ألوان النظام عند الزيارة الأولى."]
    },
    {
        section: "hooks", level: "medium",
        title: ["Manage Complex State with a Reducer", "إدارة الحالة المعقدة باستخدام reducer"],
        description: ["Build a small shopping cart with add, remove, and quantity-change actions.", "أنشئ سلة تسوق صغيرة تدعم الإضافة والحذف وتغيير الكمية."],
        objective: ["Model related state transitions with a reducer and predictable actions.", "مثّل انتقالات الحالة المترابطة باستخدام reducer وإجراءات متوقعة."],
        dialogueGoal: ["Explain how a reducer turns the current state and an action into the next state.", "اشرح كيف يحوّل reducer الحالة الحالية والإجراء إلى الحالة التالية."],
        whatYouWillLearn: ["useReducer, action types, reducer purity, and derived totals.", "الخطاف useReducer وأنواع الإجراءات ونقاء reducer والإجماليات المشتقة."],
        tasks: [["Define add, remove, and change-quantity actions", "عرّف إجراءات الإضافة والحذف وتغيير الكمية"], ["Render the cart and update its item quantities", "اعرض السلة وحدّث كميات عناصرها"], ["Calculate the total price from current items", "احسب السعر الإجمالي من العناصر الحالية"]],
        requirements: [["The reducer does not mutate its input state.", "لا يغيّر reducer الحالة المدخلة مباشرة."], ["Unknown actions leave state unchanged.", "لا تغيّر الإجراءات غير المعروفة الحالة."], ["The total updates correctly after every action.", "يتحدث الإجمالي بشكل صحيح بعد كل إجراء."]],
        concepts: [["useReducer", "useReducer"], ["Actions", "الإجراءات"], ["Pure functions", "الدوال النقية"]],
        bonus: ["Add an undo action for the most recent cart change.", "أضف إجراء تراجع عن آخر تغيير في السلة."]
    },
    {
        section: "router", level: "medium",
        title: ["Build a Multi-Page Experience", "إنشاء تجربة متعددة الصفحات"],
        description: ["Turn a small course catalog into home, course-detail, and not-found routes.", "حوّل فهرس دورات صغيراً إلى صفحات رئيسية وتفاصيل دورة وصفحة غير موجودة."],
        objective: ["Navigate between routes and render the correct page for the current URL.", "تنقّل بين المسارات واعرض الصفحة الصحيحة حسب عنوان URL الحالي."],
        dialogueGoal: ["Explain client-side navigation, route parameters, and browser history.", "اشرح التنقل داخل التطبيق ومعاملات المسار وسجل المتصفح."],
        whatYouWillLearn: ["React Router concepts, links, route parameters, and fallback routes.", "مفاهيم React Router والروابط ومعاملات المسار والمسارات الاحتياطية."],
        tasks: [["Create home, course-detail, and not-found routes", "أنشئ مسارات للرئيسية وتفاصيل الدورة والصفحة غير الموجودة"], ["Link each course to its detail page", "اربط كل دورة بصفحة تفاصيلها"], ["Add a back-to-catalog link and direct URL support", "أضف رابطاً للعودة إلى الفهرس ودعماً لفتح الرابط مباشرة"]],
        requirements: [["Navigation does not require full-page reloads.", "لا يتطلب التنقل إعادة تحميل الصفحة كاملة."], ["An unknown course ID shows a useful not-found state.", "يعرض معرّف الدورة المجهول حالة عدم وجود مفيدة."], ["The not-found route handles unknown paths.", "يتعامل مسار عدم الوجود مع المسارات المجهولة."]],
        concepts: [["Client-side routing", "التوجيه داخل التطبيق"], ["Route parameters", "معاملات المسار"], ["Fallback route", "المسار الاحتياطي"]],
        bonus: ["Add a persistent navigation bar and highlight the active route.", "أضف شريط تنقل ثابتاً وميّز المسار النشط."]
    },
    {
        section: "hooks", level: "medium",
        title: ["Use Refs for Focus and DOM Access", "استخدام refs للتركيز والوصول إلى DOM"],
        description: ["Build a search panel that focuses its input when opened and returns focus when closed.", "أنشئ لوحة بحث تركّز على حقلها عند الفتح وتعيد التركيز عند الإغلاق."],
        objective: ["Use refs for imperative DOM actions without storing DOM values in state.", "استخدم refs لإجراءات DOM المباشرة دون تخزين قيم DOM في الحالة."],
        dialogueGoal: ["Explain the difference between a ref and state and when direct DOM access is appropriate.", "اشرح الفرق بين ref والحالة ومتى يكون الوصول المباشر إلى DOM مناسباً."],
        whatYouWillLearn: ["useRef, focus management, and accessible dialogs.", "الخطاف useRef وإدارة التركيز ومربعات الحوار المتاحة."],
        tasks: [["Open and close a search panel", "افتح لوحة البحث وأغلقها"], ["Focus the input when the panel opens", "ركّز على حقل الإدخال عند فتح اللوحة"], ["Return focus to the opener when it closes", "أعد التركيز إلى زر الفتح عند إغلاقها"]],
        requirements: [["The input receives focus after opening.", "يتلقى حقل الإدخال التركيز بعد الفتح."], ["Closing returns focus to the control that opened the panel.", "تعيد عملية الإغلاق التركيز إلى عنصر التحكم الذي فتح اللوحة."], ["Refs are not used for values that should trigger rendering.", "لا تُستخدم refs للقيم التي ينبغي أن تؤدي إلى إعادة العرض."]],
        concepts: [["useRef", "useRef"], ["DOM focus", "تركيز DOM"], ["Imperative actions", "الإجراءات المباشرة"]],
        bonus: ["Close the panel with Escape and prevent background interaction while open.", "أغلق اللوحة بمفتاح Escape وامنع التفاعل مع الخلفية أثناء فتحها."]
    },
    {
        section: "hooks", level: "hard",
        title: ["Optimize a Measurable Slow List", "تحسين قائمة بطيئة قابلة للقياس"],
        description: ["Profile a large searchable list, find unnecessary work, and optimize only what measurements justify.", "حلّل قائمة كبيرة قابلة للبحث وحدد العمل غير الضروري وحسّن ما تؤكده القياسات فقط."],
        objective: ["Improve responsiveness without adding memoization that has no measurable benefit.", "حسّن الاستجابة دون إضافة حفظ نتائج لا يحقق فائدة قابلة للقياس."],
        dialogueGoal: ["Explain the trade-offs of memoization and how profiling informs optimization.", "اشرح موازنة حفظ النتائج وكيف يوجّه تحليل الأداء عملية التحسين."],
        whatYouWillLearn: ["React DevTools Profiler, memo, useMemo, useCallback, and stable props.", "أداة تحليل React DevTools وmemo وuseMemo وuseCallback والخصائص الثابتة."],
        tasks: [["Create a list of at least 500 searchable items", "أنشئ قائمة تضم 500 عنصر قابل للبحث على الأقل"], ["Record a baseline while typing and filtering", "سجّل الأداء الأساسي أثناء الكتابة والتصفية"], ["Apply one justified optimization and compare results", "طبّق تحسيناً مبرراً واحداً وقارن النتائج"]],
        requirements: [["The list remains correct when the query changes.", "تبقى القائمة صحيحة عند تغيير عبارة البحث."], ["Record what was slow before and what improved.", "سجّل موضع البطء وما الذي تحسن."], ["Avoid memoization without evidence of a benefit.", "تجنب حفظ النتائج دون دليل على فائدته."]],
        concepts: [["Profiling", "تحليل الأداء"], ["memo", "memo"], ["useMemo and useCallback", "useMemo وuseCallback"]],
        bonus: ["Add a debounce to search and explain how it differs from memoization.", "أضف تأخيراً للبحث واشرح اختلافه عن حفظ النتائج."]
    },
    {
        section: "fundamentals", level: "medium",
        title: ["Build a Reusable Modal", "إنشاء نافذة حوار قابلة لإعادة الاستخدام"],
        description: ["Create a confirmation dialog that can be opened from different parts of the app.", "أنشئ مربع تأكيد يمكن فتحه من أجزاء مختلفة من التطبيق."],
        objective: ["Build a reusable dialog with clear confirm, cancel, and dismissal behavior.", "أنشئ مربع حوار قابلاً لإعادة الاستخدام بسلوك واضح للتأكيد والإلغاء والإغلاق."],
        dialogueGoal: ["Explain component composition and the importance of predictable dismissal behavior.", "اشرح تركيب المكوّنات وأهمية سلوك الإغلاق المتوقع."],
        whatYouWillLearn: ["Children, portals, event propagation, and dialog interaction patterns.", "خاصية children والبوابات وانتشار الأحداث وأنماط التفاعل مع مربعات الحوار."],
        tasks: [["Create a reusable confirmation dialog", "أنشئ مربع تأكيد قابلاً لإعادة الاستخدام"], ["Open it before deleting a sample item", "افتحه قبل حذف عنصر تجريبي"], ["Support cancel, confirm, and Escape dismissal", "ادعم الإلغاء والتأكيد والإغلاق بمفتاح Escape"]],
        requirements: [["Cancel leaves the item unchanged.", "لا يغيّر الإلغاء العنصر."], ["Confirm performs the requested action exactly once.", "ينفذ التأكيد الإجراء المطلوب مرة واحدة فقط."], ["The dialog has a title and labelled controls.", "يحتوي مربع الحوار على عنوان وعناصر تحكم ذات تسميات."]],
        concepts: [["Composition", "التركيب"], ["Portals", "البوابات"], ["Event propagation", "انتشار الأحداث"]],
        bonus: ["Keep keyboard focus inside the dialog while it is open.", "حافظ على تركيز لوحة المفاتيح داخل مربع الحوار أثناء فتحه."]
    },
    {
        section: "testing", level: "hard",
        title: ["Test Components by User Behavior", "اختبار المكوّنات حسب سلوك المستخدم"],
        description: ["Write meaningful tests for a task form and list using the interface the way a user does.", "اكتب اختبارات مفيدة لنموذج مهام وقائمتها باستخدام الواجهة كما يفعل المستخدم."],
        objective: ["Verify visible outcomes and interactions rather than implementation details.", "تحقق من النتائج والتفاعلات الظاهرة بدلاً من تفاصيل التنفيذ."],
        dialogueGoal: ["Explain how behavior-focused tests give confidence during refactoring.", "اشرح كيف تمنح اختبارات السلوك ثقة أثناء إعادة هيكلة الكود."],
        whatYouWillLearn: ["Vitest or Jest, React Testing Library, user-event, and accessible queries.", "أدوات Vitest أو Jest وReact Testing Library وuser-event وطرق الاستعلام المتاحة."],
        tasks: [["Test that the form has labelled inputs", "اختبر وجود تسميات لحقول النموذج"], ["Test adding and completing a task through the UI", "اختبر إضافة مهمة وإكمالها عبر الواجهة"], ["Test validation and the empty-list state", "اختبر التحقق وحالة القائمة الفارغة"]],
        requirements: [["Tests query controls by role or accessible name.", "تبحث الاختبارات عن عناصر التحكم حسب الدور أو الاسم المتاح."], ["At least one test covers an invalid action.", "يغطي اختبار واحد على الأقل إجراءً غير صالح."], ["All tests pass without depending on component internals.", "تنجح الاختبارات دون الاعتماد على تفاصيل المكوّن الداخلية."]],
        concepts: [["React Testing Library", "React Testing Library"], ["user-event", "user-event"], ["Behavior testing", "اختبار السلوك"]],
        bonus: ["Test a loading-to-success transition with a mocked API response.", "اختبر الانتقال من التحميل إلى النجاح باستخدام استجابة API وهمية."]
    },
    {
        section: "testing", level: "hard",
        title: ["Accessibility and Keyboard Testing", "إتاحة الوصول واختبار لوحة المفاتيح"],
        description: ["Audit a multi-step form so it works with a keyboard and communicates errors to assistive technology.", "راجع نموذجاً متعدد الخطوات ليعمل بلوحة المفاتيح ويوصل الأخطاء للتقنيات المساعدة."],
        objective: ["Remove interaction barriers and verify accessible behavior.", "أزل عوائق التفاعل وتحقق من السلوك المتاح."],
        dialogueGoal: ["Explain how semantic HTML, labels, focus, and announcements support different users.", "اشرح كيف يدعم HTML الدلالي والتسميات والتركيز والإعلانات مختلف المستخدمين."],
        whatYouWillLearn: ["Accessible names, keyboard navigation, focus order, and live regions.", "الأسماء المتاحة والتنقل بلوحة المفاتيح وترتيب التركيز والمناطق الحية."],
        tasks: [["Navigate the full form using only the keyboard", "تنقّل في النموذج كاملاً باستخدام لوحة المفاتيح فقط"], ["Connect every input to a visible label and error", "اربط كل حقل بتسمية وخطأ ظاهرين"], ["Test focus order and submission announcements", "اختبر ترتيب التركيز وإعلانات الإرسال"]],
        requirements: [["All actions are possible without a mouse.", "يمكن تنفيذ جميع الإجراءات دون فأرة."], ["Errors are associated with their fields.", "ترتبط الأخطاء بالحقول الخاصة بها."], ["Focus is visible and moves in a logical order.", "يظهر التركيز ويتحرك بترتيب منطقي."]],
        concepts: [["Semantic HTML", "HTML دلالي"], ["Accessible names", "الأسماء المتاحة"], ["Keyboard access", "إمكانية الوصول بلوحة المفاتيح"]],
        bonus: ["Run an automated accessibility check and manually verify its findings.", "شغّل فحص إتاحة آلياً وتحقق يدوياً من نتائجه."]
    },
    {
        section: "testing", level: "hard",
        title: ["Test a Complete User Journey", "اختبار رحلة مستخدم كاملة"],
        description: ["Test the complete journey of searching a catalog, opening a detail page, and saving an item.", "اختبر رحلة البحث في فهرس وفتح التفاصيل وحفظ عنصر."],
        objective: ["Verify that separate components work together through realistic user interactions.", "تحقق من عمل المكوّنات المنفصلة معاً عبر تفاعلات واقعية."],
        dialogueGoal: ["Explain the difference between unit, component, and end-to-end tests.", "اشرح الفرق بين اختبارات الوحدات والمكوّنات والاختبارات الشاملة."],
        whatYouWillLearn: ["Integration tests, route behavior, realistic interactions, and test isolation.", "اختبارات التكامل وسلوك المسارات والتفاعلات الواقعية وعزل الاختبارات."],
        tasks: [["Search and select an item through the UI", "ابحث عن عنصر واختره عبر الواجهة"], ["Verify its details and save action", "تحقق من تفاصيله وإجراء حفظه"], ["Test a missing item and recover back to the catalog", "اختبر عنصراً مفقوداً وعد إلى الفهرس"]],
        requirements: [["The test follows the same steps as a real user.", "يتبع الاختبار الخطوات نفسها التي يتبعها المستخدم."], ["Verify visible results after each major action.", "تحقق من النتائج الظاهرة بعد كل إجراء رئيسي."], ["Tests pass independently and do not share stale state.", "تنجح الاختبارات مستقلة ولا تتشارك حالة قديمة."]],
        concepts: [["Integration testing", "اختبار التكامل"], ["User journeys", "رحلات المستخدم"], ["Test isolation", "عزل الاختبارات"]],
        bonus: ["Add one end-to-end test for the highest-value journey.", "أضف اختباراً شاملاً واحداً لأهم رحلة مستخدم."]
    },
    {
        section: "capstone", level: "hard",
        title: ["Capstone: Learning Planner", "المشروع الختامي: مخطط التعلم"],
        description: ["Build a polished planner for courses, study sessions, and learning goals using the React skills from previous missions.", "أنشئ مخططاً متكاملاً للدورات وجلسات الدراسة وأهداف التعلم باستخدام مهارات رياكت من المهام السابقة."],
        objective: ["Plan and build a complete, responsive app with persistent data and tested user flows.", "خطط وأنشئ تطبيقاً متكاملاً ومتجاوباً ببيانات محفوظة ومسارات مستخدم مختبرة."],
        dialogueGoal: ["Explain your component architecture, state choices, and how you validated the finished app.", "اشرح بنية المكوّنات واختيارات الحالة وكيف تحققت من التطبيق النهائي."],
        whatYouWillLearn: ["Feature planning, reusable components, routing, forms, persistence, testing, and accessibility.", "تخطيط الميزات والمكوّنات القابلة لإعادة الاستخدام والتوجيه والنماذج والحفظ والاختبار والإتاحة."],
        tasks: [["Plan the screens, data model, and core user journeys", "خطط الشاشات ونموذج البيانات ورحلات المستخدم الأساسية"], ["Build create, edit, complete, and filter flows", "أنشئ تدفقات الإضافة والتعديل والإكمال والتصفية"], ["Persist progress and test the most important user journeys", "احفظ التقدم واختبر أهم رحلات المستخدم"], ["Review keyboard access, phone layouts, and loading or error states", "راجع دعم لوحة المفاتيح وتخطيط الهاتف وحالات التحميل والخطأ"]],
        requirements: [["Users can create and manage learning goals.", "يستطيع المستخدمون إنشاء أهداف التعلم وإدارتها."], ["Progress survives a page reload.", "يبقى التقدم بعد إعادة تحميل الصفحة."], ["Core actions work with a keyboard and on phone screens.", "تعمل الإجراءات الأساسية بلوحة المفاتيح وعلى شاشات الهاتف."], ["Automated tests cover the most important user journeys.", "تغطي الاختبارات الآلية أهم رحلات المستخدم."]],
        concepts: [["Architecture", "البنية"], ["State management", "إدارة الحالة"], ["Testing and accessibility", "الاختبار والإتاحة"]],
        bonus: ["Add a weekly progress visualization and export study data as JSON.", "أضف تصوراً للتقدم الأسبوعي وصدّر بيانات الدراسة بصيغة JSON."]
    },
    {
        section: "production", level: "hard",
        title: ["Final Review and Deployment", "المراجعة النهائية والنشر"],
        description: ["Prepare your learning planner for real users by reviewing quality, creating a production build, and deploying it.", "جهّز مخطط التعلم لمستخدمين حقيقيين بمراجعة الجودة وإنشاء نسخة إنتاج ونشرها."],
        objective: ["Find and fix release-blocking issues, deploy the app, and verify the published experience.", "اكتشف المشكلات التي تمنع الإصدار وأصلحها وانشر التطبيق وتحقق من التجربة المنشورة."],
        dialogueGoal: ["Present evidence for your quality checks and explain how you confirmed the deployed app works.", "اعرض أدلة فحوصات الجودة واشرح كيف تحققت من عمل التطبيق المنشور."],
        whatYouWillLearn: ["Regression testing, accessibility review, production builds, hosting, and release notes.", "اختبار الانحدار ومراجعة الإتاحة وبناء الإنتاج والاستضافة وملاحظات الإصدار."],
        tasks: [["Run all tests and the production build, then fix failures", "شغّل الاختبارات وبناء الإنتاج ثم أصلح الإخفاقات"], ["Inspect keyboard access, phone layouts, and empty or error states", "افحص دعم لوحة المفاتيح وتخطيط الهاتف وحالات الفراغ والخطأ"], ["Deploy the app and verify its main user journey", "انشر التطبيق وتحقق من رحلة المستخدم الأساسية"], ["Write release notes and record the live URL", "اكتب ملاحظات الإصدار وسجّل الرابط المباشر"]],
        requirements: [["All automated tests pass and the production build succeeds.", "تنجح جميع الاختبارات الآلية ويكتمل بناء الإنتاج."], ["The deployed app loads without missing assets or broken routes.", "يعمل التطبيق المنشور دون ملفات مفقودة أو مسارات معطلة."], ["Core actions work with a keyboard and on a phone.", "تعمل الإجراءات الأساسية بلوحة المفاتيح وعلى الهاتف."], ["Release notes state what was checked and any known limitations.", "توضح ملاحظات الإصدار ما تم فحصه وأي قيود معروفة."]],
        concepts: [["Regression testing", "اختبار الانحدار"], ["Production build", "بناء الإنتاج"], ["Deployment", "النشر"]],
        bonus: ["Ask someone to use the live app without guidance, then fix the biggest point of confusion.", "اطلب من شخص استخدام التطبيق المباشر دون إرشاد، ثم أصلح أكبر نقطة التباس."]
    }
];

const toBilingual = ([en, ar]) => ({ en, ar });
const missions = missionBlueprints.map((blueprint, index) => ({
    id: index + 1,
    section: blueprint.section,
    level: blueprint.level,
    youtubeId: youtubeVideoIds[index] || null,
    title: toBilingual(blueprint.title),
    description: toBilingual(blueprint.description),
    objective: toBilingual(blueprint.objective),
    dialogueGoal: toBilingual(blueprint.dialogueGoal),
    whatYouWillLearn: toBilingual(blueprint.whatYouWillLearn),
    tasks: blueprint.tasks.map((text, taskIndex) => ({
        id: taskIndex + 1,
        text: toBilingual(text)
    })),
    requirements: {
        en: blueprint.requirements.map(([en]) => en),
        ar: blueprint.requirements.map(([, ar]) => ar)
    },
    concepts: {
        en: blueprint.concepts.map(([en]) => en),
        ar: blueprint.concepts.map(([, ar]) => ar)
    },
    bonus: toBilingual(blueprint.bonus)
}));

const missionsContainer = document.getElementById("missions");
const sidebarMissions = document.getElementById("sidebarMissions");
const homePage = document.getElementById("homePage");
const detailPage = document.getElementById("detailPage");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const percentage = document.getElementById("percentage");
const headerPercentage = document.getElementById("headerPercentage");
const missionCount = document.getElementById("missionCount");
const langToggle = document.getElementById("langToggle");
const langLabel = document.getElementById("langLabel");
const creatorTitle = document.getElementById("creator");

const tabRead = document.getElementById("tabRead");
const tabWatch = document.getElementById("tabWatch");
const tabMission = document.getElementById("tabMission");
const readViewContent = document.getElementById("readViewContent");
const watchViewContent = document.getElementById("watchViewContent");
const missionViewContent = document.getElementById("missionViewContent");

const customDropdown = document.getElementById("customDropdown");
const dropdownTrigger = document.getElementById("dropdownTrigger");
const selectedOptionText = document.getElementById("selectedOptionText");
const dropdownItems = document.querySelectorAll(".dropdown-item");

let currentFilter = "all";
let currentLang = localStorage.getItem("reactLang") || "en";
let completedMissions = JSON.parse(localStorage.getItem("reactCompleted")) || [];
let missionTasksState = JSON.parse(localStorage.getItem("reactTasksState")) || {};
let currentMission = null;

dropdownTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    customDropdown.classList.toggle("open");
});

document.addEventListener("click", () => {
    customDropdown.classList.remove("open");
});

dropdownItems.forEach(item => {
    item.addEventListener("click", () => {
        dropdownItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
        currentFilter = item.getAttribute("data-value");
        const key = item.getAttribute("data-i18n");
        selectedOptionText.textContent = uiTranslations[currentLang][key];
        customDropdown.classList.remove("open");
        renderHome();
    });
});

function activateMissionTab(activeTab, activeView) {
    [tabRead, tabWatch, tabMission].forEach(tab => tab.classList.toggle("active", tab === activeTab));
    [readViewContent, watchViewContent, missionViewContent].forEach(view => {
        view.classList.toggle("hidden", view !== activeView);
    });
}

tabRead.addEventListener("click", () => activateMissionTab(tabRead, readViewContent));
tabWatch.addEventListener("click", () => activateMissionTab(tabWatch, watchViewContent));
tabMission.addEventListener("click", () => activateMissionTab(tabMission, missionViewContent));

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("reactLang", lang);

    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    langLabel.textContent = lang === "ar" ? "EN" : "AR";
    creatorTitle.textContent = uiTranslations[lang].createdName;

    document.querySelectorAll("[data-i18n-aria-label]").forEach(el => {
        const key = el.getAttribute("data-i18n-aria-label");
        if (uiTranslations[lang][key]) {
            el.setAttribute("aria-label", uiTranslations[lang][key]);
        }
    });

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (uiTranslations[lang] && uiTranslations[lang][key]) {
            if (key === "heroTitle") {
                el.innerHTML = uiTranslations[lang][key];
            } else {
                el.textContent = uiTranslations[lang][key];
            }
        }
    });

    updateProgress();
    renderSidebar();
    if (currentMission) {
        renderMission();
    } else {
        renderHome();
    }
}

function updateProgress() {
    const total = missions.length;
    const completed = missions.filter(mission => completedMissions.includes(mission.id)).length;
    const percent = Math.round((completed / total) * 100);
    const allTasks = missions.flatMap(mission => mission.tasks || []);
    const completedTasks = missions.reduce((count, mission) => {
        const taskStates = missionTasksState[mission.id] || {};
        return count + (mission.tasks || []).filter(task => taskStates[task.id]).length;
    }, 0);

    progressText.textContent = `${completed} / ${total}`;
    headerPercentage.textContent = `${percent}%`;
    progressBar.style.width = `${percent}%`;
    percentage.textContent = `${percent}%`;
    percentage.parentElement.style.setProperty("--progress", `${percent}%`);
    percentage.parentElement.setAttribute("aria-valuenow", String(percent));
    document.getElementById("completedTasksCount").textContent = `${completedTasks} / ${allTasks.length}`;
    document.getElementById("remainingLessonsCount").textContent = String(total - completed);
    document.getElementById("completedLessonsCount").textContent = String(completed);
}

function renderSidebar() {
    sidebarMissions.innerHTML = "";
    missions.forEach(mission => {
        const button = document.createElement("button");
        const completed = completedMissions.includes(mission.id);
        button.className = "sidebar-item";
        if (completed) button.classList.add("completed");
        if (currentMission && currentMission.id === mission.id) button.classList.add("active");

        const titleText = mission.title[currentLang] || mission.title.en;
        button.innerHTML = `
            <span class="sidebar-number">${String(mission.id).padStart(2, "0")}</span>
            <span>${titleText}</span>
        `;
        button.addEventListener("click", () => openMission(mission.id));
        sidebarMissions.appendChild(button);
    });
}

function renderHome() {
    missionsContainer.innerHTML = "";
    const filtered = missions.filter(mission => currentFilter === "all" || mission.level === currentFilter);
    missionCount.textContent = `${filtered.length} ${uiTranslations[currentLang].missionsCountText}`;

    filtered.forEach(mission => {
        const completed = completedMissions.includes(mission.id);
        const card = document.createElement("article");
        card.className = "mission-card";
        if (completed) card.classList.add("completed");

        const titleText = mission.title[currentLang] || mission.title.en;
        const descText = mission.description[currentLang] || mission.description.en;
        const levelText = uiTranslations[currentLang][`level${mission.level.charAt(0).toUpperCase() + mission.level.slice(1)}`];
        const statusLabel = completed ? uiTranslations[currentLang].completedStatus : uiTranslations[currentLang].notCompleted;

        card.innerHTML = `
            <div>
                <div class="mission-top">
                    <span class="mission-number">MISSION ${String(mission.id).padStart(2, "0")}</span>
                    <span class="badge ${mission.level}">${levelText}</span>
                </div>
                <h3>${titleText}</h3>
                <p>${descText}</p>
            </div>
            <div class="card-footer">
                <span class="card-status ${completed ? " done" : ""}">${statusLabel}</span>
                <button class="view-btn">${uiTranslations[currentLang].viewMission}</button>
            </div>
        `;

        card.querySelector(".view-btn").addEventListener("click", () => openMission(mission.id));
        missionsContainer.appendChild(card);
    });
}

function openMission(id) {
    currentMission = missions.find(m => m.id === id);
    if (!currentMission) return;

    homePage.classList.add("hidden");
    detailPage.classList.remove("hidden");

    activateMissionTab(tabRead, readViewContent);

    renderMission();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderMission() {
    const mission = currentMission;
    const completed = completedMissions.includes(mission.id);
    const lang = currentLang;

    document.getElementById("detailNumber").textContent = `MISSION ${String(mission.id).padStart(2, "0")}`;
    const level = document.getElementById("detailLevel");
    level.textContent = uiTranslations[lang][`level${mission.level.charAt(0).toUpperCase() + mission.level.slice(1)}`].toUpperCase();
    level.className = `badge ${mission.level}`;

    document.getElementById("detailTitle").textContent = mission.title[lang] || mission.title.en;
    document.getElementById("detailDescription").textContent = mission.description[lang] || mission.description.en;
    document.getElementById("detailObjective").textContent = mission.objective[lang] || mission.objective.en;

    const requirements = document.getElementById("detailRequirements");
    requirements.innerHTML = "";
    (mission.requirements[lang] || mission.requirements.en).forEach(req => {
        const li = document.createElement("li");
        li.textContent = req;
        requirements.appendChild(li);
    });

    const concepts = document.getElementById("detailConcepts");
    concepts.innerHTML = "";
    (mission.concepts[lang] || mission.concepts.en).forEach(c => {
        const span = document.createElement("span");
        span.className = "concept";
        span.textContent = c;
        concepts.appendChild(span);
    });

    document.getElementById("detailBonus").textContent = mission.bonus[lang] || mission.bonus.en;
    document.getElementById("missionBriefObjective").textContent = mission.objective[lang] || mission.objective.en;
    document.getElementById("missionBriefBonus").textContent = mission.bonus[lang] || mission.bonus.en;
    const missionBriefRequirements = document.getElementById("missionBriefRequirements");
    missionBriefRequirements.innerHTML = "";
    (mission.requirements[lang] || mission.requirements.en).forEach(requirement => {
        const item = document.createElement("li");
        item.textContent = requirement;
        missionBriefRequirements.appendChild(item);
    });
    document.getElementById("infoDifficulty").textContent = uiTranslations[lang][`level${mission.level.charAt(0).toUpperCase() + mission.level.slice(1)}`];
    document.getElementById("infoMission").textContent = `${mission.id} / ${missions.length}`;
    document.getElementById("infoStatus").textContent = completed ? uiTranslations[lang].completed : uiTranslations[lang].notCompleted;

    const status = document.getElementById("detailStatus");
    status.textContent = completed ? uiTranslations[lang].completedStatus : uiTranslations[lang].notCompleted;
    status.className = completed ? "status done" : "status";

    const completeBtn = document.getElementById("completeBtn");
    completeBtn.textContent = completed ? uiTranslations[lang].completedStatus : uiTranslations[lang].markAsCompleted;
    completeBtn.className = completed ? "complete-btn completed" : "complete-btn";
    const missionCompleteBtn = document.getElementById("missionCompleteBtn");
    missionCompleteBtn.textContent = completeBtn.textContent;
    missionCompleteBtn.className = completeBtn.className;

    const youtubeEmbedUrl = mission.youtubeId
        ? new URL(`https://www.youtube-nocookie.com/embed/${mission.youtubeId}`)
        : new URL("https://www.youtube-nocookie.com/embed/videoseries");
    youtubeEmbedUrl.searchParams.set("list", YOUTUBE_PLAYLIST_ID);

    const youtubeOpenUrl = mission.youtubeId
        ? new URL("https://www.youtube.com/watch")
        : new URL("https://www.youtube.com/playlist");
    youtubeOpenUrl.searchParams.set(mission.youtubeId ? "v" : "list", mission.youtubeId || YOUTUBE_PLAYLIST_ID);
    if (mission.youtubeId) youtubeOpenUrl.searchParams.set("list", YOUTUBE_PLAYLIST_ID);
    document.getElementById("youtubeIframe").src = youtubeEmbedUrl.href;
    document.getElementById("youtubeOpenLink").href = youtubeOpenUrl.href;

    document.getElementById("detailDialogueGoal").textContent = mission.dialogueGoal[lang] || mission.dialogueGoal.en;
    document.getElementById("detailWhatYouWillLearn").textContent = mission.whatYouWillLearn[lang] || mission.whatYouWillLearn.en;

    renderTasksList();

    document.getElementById("prevBtn").disabled = mission.id === 1;
    document.getElementById("nextBtn").disabled = mission.id === missions.length;

    renderSidebar();
}

function renderTasksList() {
    const mission = currentMission;
    const lang = currentLang;
    const tasksContainer = document.getElementById("tasksList");
    tasksContainer.innerHTML = "";

    if (!mission.tasks) return;
    if (!missionTasksState[mission.id]) missionTasksState[mission.id] = {};

    let doneCount = 0;
    const totalCount = mission.tasks.length;

    mission.tasks.forEach(task => {
        const isDone = missionTasksState[mission.id][task.id] || false;
        if (isDone) doneCount++;

        const taskItem = document.createElement("div");
        taskItem.className = `task-item ${isDone ? "done" : ""}`;
        taskItem.innerHTML = `
            <span>${task.text[lang] || task.text.en}</span>
            <span class="task-check">${isDone ? "✓" : ""}</span>
        `;
        taskItem.addEventListener("click", () => {
            missionTasksState[mission.id][task.id] = !isDone;
            localStorage.setItem("reactTasksState", JSON.stringify(missionTasksState));
            renderTasksList();
            updateProgress();
        });
        tasksContainer.appendChild(taskItem);
    });

    const percent = Math.round((doneCount / totalCount) * 100);
    const completeAllTasksBtn = document.getElementById("completeAllTasksBtn");
    const allDone = doneCount === totalCount;

    document.getElementById("taskPercentage").textContent = `${percent}%`;
    document.getElementById("taskProgressBar").style.width = `${percent}%`;
    document.getElementById("taskSummaryText").textContent = uiTranslations[lang].tasksCompletedSummary
        .replace("{done}", doneCount)
        .replace("{total}", totalCount);
    completeAllTasksBtn.textContent = uiTranslations[lang][allDone ? "resetAllTasks" : "completeAllTasks"];
    completeAllTasksBtn.classList.toggle("completed", allDone);
    completeAllTasksBtn.setAttribute("aria-pressed", String(allDone));
}

document.getElementById("completeAllTasksBtn").addEventListener("click", () => {
    const mission = currentMission;
    if (!mission || !mission.tasks) return;
    if (!missionTasksState[mission.id]) missionTasksState[mission.id] = {};

    const allDone = mission.tasks.every(t => missionTasksState[mission.id][t.id]);
    mission.tasks.forEach(t => {
        missionTasksState[mission.id][t.id] = !allDone;
    });

    localStorage.setItem("reactTasksState", JSON.stringify(missionTasksState));
    renderTasksList();
    updateProgress();
});

function toggleCurrentMissionCompletion() {
    if (!currentMission) return;
    const id = currentMission.id;
    if (completedMissions.includes(id)) {
        completedMissions = completedMissions.filter(mId => mId !== id);
    } else {
        completedMissions.push(id);
    }
    localStorage.setItem("reactCompleted", JSON.stringify(completedMissions));
    updateProgress();
    renderMission();
}

document.getElementById("completeBtn").addEventListener("click", toggleCurrentMissionCompletion);
document.getElementById("missionCompleteBtn").addEventListener("click", toggleCurrentMissionCompletion);

document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentMission && currentMission.id > 1) openMission(currentMission.id - 1);
});

document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentMission && currentMission.id < missions.length) openMission(currentMission.id + 1);
});

document.getElementById("homeBtn").addEventListener("click", (e) => {
    e.preventDefault();
    currentMission = null;
    detailPage.classList.add("hidden");
    homePage.classList.remove("hidden");
    renderHome();
    renderSidebar();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

langToggle.addEventListener("click", () => {
    applyLanguage(currentLang === "en" ? "ar" : "en");
});

applyLanguage(currentLang);