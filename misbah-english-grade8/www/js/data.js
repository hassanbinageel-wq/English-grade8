/* =====================================================================
   English Course for Yemen – Pupil's Book 2  (Grade 8)
   Full course content. Authored for Arabic-speaking learners.
   Structure:  COURSE -> units[] -> lessons[] -> { vocab, grammar, ex, quiz }
   The engine auto-builds flashcards + matching + meaning-MCQs from `vocab`.
   ===================================================================== */

const COURSE = {
  title: "English Course for Yemen",
  subtitle: "Pupil's Book 2 · الصف الثامن",
  units: [
    /* ============================ UNIT 1 ============================ */
    {
      id: 1, color: "#E0962A",
      title: "Personal Details",
      titleAr: "التعريف بالنفس والتفاصيل الشخصية",
      summary: "نتعلّم نقدّم أنفسنا: الاسم، العمر، البلد، العائلة، والهوايات، ونتكلّم عمّا نحبّه.",
      lessons: [
        {
          id: "1.1",
          title: "Likes & My House",
          titleAr: "ما أحبّه وبيتي",
          page: "1",
          intro: "في هذا الدرس نتعلّم نعبّر عمّا نحبّه ولا نحبّه، ونصف الغرف في البيت.",
          explain: [
            "نستخدم <b>I like</b> لما نحبّ شيء، و<b>I don't like</b> لما لا نحبّه.",
            "للسؤال نقول <b>Do you like…?</b> والجواب: <b>Yes, I do</b> أو <b>No, I don't</b>.",
            "نصف البيت بالفعل <b>has</b> (يملك/فيه): <i>My house has six rooms</i> = بيتي فيه ست غرف."
          ],
          vocab: [
            { en: "apple", ar: "تفاحة", ex: "I like apples." },
            { en: "date", ar: "تمرة", ex: "I like dates." },
            { en: "banana", ar: "موزة", ex: "I don't like bananas." },
            { en: "cake", ar: "كعكة", ex: "Do you like cakes?" },
            { en: "house", ar: "بيت", ex: "I live in a house." },
            { en: "room", ar: "غرفة", ex: "My house has six rooms." },
            { en: "bedroom", ar: "غرفة نوم", ex: "We have three bedrooms." },
            { en: "bathroom", ar: "حمّام", ex: "The bathroom is upstairs." },
            { en: "kitchen", ar: "مطبخ", ex: "My mother is in the kitchen." },
            { en: "living room", ar: "غرفة المعيشة", ex: "We watch TV in the living room." },
            { en: "stairs", ar: "درج / سلالم", ex: "The stairs are over there." },
            { en: "hall", ar: "ردهة / مدخل", ex: "There is a hall near the door." }
          ],
          grammar: {
            title: "Like / Don't like",
            ar: "نضع الاسم بعد like جمعًا عادةً: I like apples. وللنفي نضيف don't: I don't like cakes."
          },
          ex: [
            { type: "mcq", q: "Choose the correct answer: ___ you like dates?", options: ["Do", "Does", "Are", "Is"], answer: 0, ar: "نستخدم Do مع you." },
            { type: "mcq", q: "I ___ like bananas. (negative)", options: ["don't", "doesn't", "not", "no"], answer: 0, ar: "للنفي مع I نستخدم don't." },
            { type: "fill", text: "My house ___ six rooms.", answer: "has", ar: "نستخدم has لوصف ما يملكه البيت." },
            { type: "fill", text: "We sleep in the ___.", answer: "bedroom", ar: "غرفة النوم = bedroom." },
            { type: "order", answer: "I like apples and dates", ar: "الترتيب: فاعل + فعل + مفعول." }
          ],
          quiz: [
            { type: "mcq", q: "Where do you cook food?", options: ["the kitchen", "the bedroom", "the hall", "the stairs"], answer: 0, ar: "الطبخ في المطبخ." },
            { type: "mcq", q: "Do you like apples? (positive short answer)", options: ["Yes, I do.", "Yes, I am.", "No, I don't.", "Yes, I like."], answer: 0, ar: "الجواب القصير: Yes, I do." }
          ]
        },
        {
          id: "1.2",
          title: "About Me",
          titleAr: "معلومات عنّي",
          page: "3–4",
          intro: "نتعلّم نسأل ونجيب عن الاسم والعمر والبلد والعائلة والهوايات.",
          explain: [
            "<b>What's your name?</b> = ما اسمك؟ — <b>How old are you?</b> = كم عمرك؟",
            "<b>Where are you from?</b> = من أين أنت؟ — الجواب: <i>I'm from Yemen.</i>",
            "<b>How many brothers/sisters have you got?</b> = كم أخ/أخت لديك؟",
            "<b>What do you do after school?</b> = ماذا تفعل بعد المدرسة؟"
          ],
          vocab: [
            { en: "name", ar: "اسم", ex: "What's your name?" },
            { en: "old", ar: "العمر (في How old)", ex: "How old are you?" },
            { en: "from", ar: "من (مكان)", ex: "I'm from England." },
            { en: "brother", ar: "أخ", ex: "I've got one brother." },
            { en: "sister", ar: "أخت", ex: "I've got two sisters." },
            { en: "swimming", ar: "سباحة", ex: "I go swimming every Tuesday." },
            { en: "football", ar: "كرة القدم", ex: "Do you play football?" },
            { en: "cassette", ar: "شريط كاسيت", ex: "I like listening to cassettes." },
            { en: "Post Office", ar: "مكتب البريد", ex: "I live behind the Post Office." },
            { en: "supermarket", ar: "سوبر ماركت", ex: "My house is next to the supermarket." },
            { en: "beach", ar: "شاطئ", ex: "We go to the beach every Thursday." },
            { en: "pastime", ar: "هواية / تسلية", ex: "My favourite pastime is football." }
          ],
          grammar: {
            title: "have got",
            ar: "نستخدم have got للملكية: I've got one brother. وللسؤال: How many brothers have you got?"
          },
          ex: [
            { type: "mcq", q: "___ are you from?", options: ["Where", "What", "How", "Who"], answer: 0, ar: "نسأل عن المكان بـ Where." },
            { type: "mcq", q: "How ___ are you? — Thirteen.", options: ["old", "many", "much", "long"], answer: 0, ar: "How old للسؤال عن العمر." },
            { type: "fill", text: "How many sisters ___ you got?", answer: "have", ar: "نستخدم have مع you." },
            { type: "fill", text: "I'm ___ Yemen.", answer: "from", ar: "from = من (مكان)." },
            { type: "order", answer: "I go swimming every Tuesday", ar: "زمن المضارع البسيط + ظرف التكرار." }
          ],
          quiz: [
            { type: "mcq", q: "Bill is thirteen. Question: How ___ is Bill?", options: ["old", "much", "old is", "many"], answer: 0, ar: "العمر = How old." },
            { type: "mcq", q: "My favourite ___ is playing football.", options: ["pastime", "name", "room", "beach"], answer: 0, ar: "الهواية = pastime." }
          ]
        }
      ],
      test: [
        { type: "mcq", q: "___ your name?", options: ["What's", "Where's", "Who's", "How's"], answer: 0, ar: "نسأل عن الاسم: What's your name?" },
        { type: "mcq", q: "I ___ like cakes.", options: ["don't", "doesn't", "am not", "isn't"], answer: 0, ar: "نفي المضارع مع I = don't." },
        { type: "fill", text: "How ___ are you? — I'm thirteen.", answer: "old", ar: "العمر = How old." },
        { type: "fill", text: "We cook in the ___.", answer: "kitchen", ar: "المطبخ." },
        { type: "mcq", q: "I've got two ___ and one brother.", options: ["sisters", "sister", "sisteres", "sisteres"], answer: 0, ar: "جمع sister = sisters." },
        { type: "order", answer: "I am from Yemen", ar: "I am from + البلد." },
        { type: "mcq", q: "Where do you go every Thursday?", options: ["to the beach", "old", "swimming is", "from"], answer: 0, ar: "go to the beach." }
      ]
    },

    /* ============================ UNIT 2 ============================ */
    {
      id: 2, color: "#1F8A77",
      title: "Getting Around & Shopping",
      titleAr: "المواصلات والتسوّق",
      summary: "كيف نأتي للمدرسة، عبور الشارع بأمان، طلب الطعام، الهدايا والتسوّق، وتقديم الاقتراحات.",
      lessons: [
        {
          id: "2.1",
          title: "Coming to School",
          titleAr: "كيف نأتي إلى المدرسة",
          page: "5–6",
          intro: "نتعلّم وسائل المواصلات، وكيف نصف ما حدث بالأمس (الماضي).",
          explain: [
            "للمضارع نقول: <i>He walks / drives / runs to school.</i> أو <i>by bus / by bicycle.</i>",
            "للماضي نغيّر الفعل: walk → <b>walked</b>، come → <b>came</b>، run → <b>ran</b>.",
            "للنفي في الماضي نستخدم <b>didn't + فعل</b>: <i>She didn't come by bus. She walked.</i>"
          ],
          vocab: [
            { en: "walk", ar: "يمشي", ex: "He walks to school." },
            { en: "drive", ar: "يقود (سيّارة)", ex: "The teacher drives to school." },
            { en: "run", ar: "يجري", ex: "He runs to school." },
            { en: "by bus", ar: "بالحافلة", ex: "Ahmed comes by bus." },
            { en: "by bicycle", ar: "بالدرّاجة", ex: "Taha comes by bicycle." },
            { en: "by car", ar: "بالسيّارة", ex: "Fatma came by car." },
            { en: "yesterday", ar: "أمس", ex: "Yesterday Najeeb came by bus." },
            { en: "went fishing", ar: "ذهب للصيد", ex: "Jack went fishing." }
          ],
          grammar: {
            title: "Past simple (negative)",
            ar: "للماضي المنفي: didn't + الفعل في التصريف الأول. مثال: He didn't walk. He ran."
          },
          ex: [
            { type: "mcq", q: "Yesterday Najeeb ___ to school by bus.", options: ["came", "comes", "come", "coming"], answer: 0, ar: "الماضي من come = came." },
            { type: "mcq", q: "Aisha didn't come by bus. She ___.", options: ["walked", "walk", "walks", "walking"], answer: 0, ar: "الماضي من walk = walked." },
            { type: "fill", text: "Hassan didn't walk. He ___. (run)", answer: "ran", ar: "الماضي من run = ran." },
            { type: "fill", text: "The teacher ___ to school. (drive, present)", answer: "drives", ar: "مع he/she/the teacher نضيف s." },
            { type: "order", answer: "He comes to school by bus", ar: "فاعل + فعل + by + وسيلة." }
          ],
          quiz: [
            { type: "mcq", q: "How does Taha come to school?", options: ["by bicycle", "by bus", "by car", "by plane"], answer: 0, ar: "طه يأتي بالدرّاجة." },
            { type: "mcq", q: "Negative past of 'She came': She ___ come.", options: ["didn't", "doesn't", "wasn't", "don't"], answer: 0, ar: "نفي الماضي = didn't." }
          ]
        },
        {
          id: "2.2",
          title: "Crossing the Street",
          titleAr: "عبور الشارع بأمان",
          page: "7–9",
          intro: "تعليمات السلامة عند عبور الطريق، وقصّة حادث وقع لعدم الانتباه.",
          explain: [
            "للأوامر نبدأ بالفعل مباشرة: <b>Stop! Look left! Look right! Walk!</b>",
            "للنهي نستخدم <b>Don't</b>: <i>Don't run! It's dangerous.</i>",
            "خطوات العبور: <i>I stopped, I looked left, I looked right, I looked left again, I walked across.</i>"
          ],
          vocab: [
            { en: "stop", ar: "قِف / توقّف", ex: "Stop! Look left." },
            { en: "look left", ar: "انظر يسارًا", ex: "Look left, then look right." },
            { en: "look right", ar: "انظر يمينًا", ex: "Look right before you cross." },
            { en: "cross", ar: "يعبُر", ex: "Take care when you cross the street." },
            { en: "dangerous", ar: "خطير", ex: "Don't run! It's dangerous." },
            { en: "take care", ar: "انتبه / احذر", ex: "Take care on the road." },
            { en: "accident", ar: "حادث", ex: "Yesterday Hassan had an accident." },
            { en: "driver", ar: "سائق", ex: "The driver didn't see him." }
          ],
          grammar: {
            title: "Imperatives & Don't",
            ar: "الأمر: نبدأ بالفعل (Stop! Look!). النهي: Don't + فعل (Don't run!)."
          },
          ex: [
            { type: "mcq", q: "___ run! It's dangerous.", options: ["Don't", "Doesn't", "Not", "No"], answer: 0, ar: "النهي = Don't + فعل." },
            { type: "mcq", q: "Before crossing, first you ___.", options: ["stop", "run", "sleep", "drive"], answer: 0, ar: "أول خطوة: توقّف (stop)." },
            { type: "fill", text: "That car hit ___. (him)", answer: "him", ar: "ضمير المفعول للمذكّر = him." },
            { type: "fill", text: "He didn't look ___ again. (left)", answer: "left", ar: "ننظر لليسار مرّة أخرى = look left again." },
            { type: "order", answer: "I walked across the street", ar: "فاعل + فعل ماضٍ + across + the street." }
          ],
          quiz: [
            { type: "mcq", q: "What's the safe order?", options: ["Stop, look, walk", "Run, stop, look", "Walk, run, stop", "Look, run, walk"], answer: 0, ar: "قِف ← انظر ← امشِ." },
            { type: "mcq", q: "It's ___ to run across the road.", options: ["dangerous", "nice", "happy", "easy"], answer: 0, ar: "الجري خطير = dangerous." }
          ]
        },
        {
          id: "2.3",
          title: "What Would You Like?",
          titleAr: "ماذا تحبّ أن تأكل؟",
          page: "10–11",
          intro: "نطلب الطعام والشراب بأدب باستخدام would like.",
          explain: [
            "<b>What would you like?</b> = ماذا تحبّ؟ (طلب مهذّب).",
            "الجواب: <b>I'd like a cheese sandwich, please.</b> (I'd = I would).",
            "نسأل عن المشروب: <i>What would you like to drink?</i>"
          ],
          vocab: [
            { en: "burger", ar: "برجر", ex: "I'd like a burger, please." },
            { en: "cheese sandwich", ar: "ساندويتش جبن", ex: "I'd like a cheese sandwich." },
            { en: "chicken sandwich", ar: "ساندويتش دجاج", ex: "He'd like a chicken sandwich." },
            { en: "egg sandwich", ar: "ساندويتش بيض", ex: "An egg sandwich, please." },
            { en: "orange juice", ar: "عصير برتقال", ex: "I'd like an orange juice." },
            { en: "apple juice", ar: "عصير تفاح", ex: "Apple juice, please." },
            { en: "milk", ar: "حليب", ex: "A glass of milk, please." },
            { en: "drink", ar: "يشرب / مشروب", ex: "What would you like to drink?" }
          ],
          grammar: {
            title: "would like (I'd like)",
            ar: "would like = أحبّ/أرغب (مهذّب). I'd like = I would like. نتبعها باسم: I'd like a burger."
          },
          ex: [
            { type: "mcq", q: "What ___ you like to drink?", options: ["would", "are", "do", "did"], answer: 0, ar: "الطلب المهذّب: would you like." },
            { type: "mcq", q: "___ like a cheese sandwich, please.", options: ["I'd", "I'm", "I", "Id"], answer: 0, ar: "I'd = I would." },
            { type: "fill", text: "I'd like ___ orange juice, please.", answer: "an", ar: "قبل الكلمات التي تبدأ بحرف متحرّك نستخدم an." },
            { type: "fill", text: "What would you like to ___? — A Pepsi.", answer: "drink", ar: "السؤال عن المشروب: to drink." },
            { type: "order", answer: "I would like a burger please", ar: "I would like + a + طعام + please." }
          ],
          quiz: [
            { type: "mcq", q: "Polite way to ask for food:", options: ["I'd like…", "Give me…", "I want now…", "You bring…"], answer: 0, ar: "الأكثر تهذيبًا: I'd like." },
            { type: "mcq", q: "Choose: I'd like ___ apple juice.", options: ["an", "a", "the", "some the"], answer: 0, ar: "apple يبدأ بحرف متحرّك → an." }
          ]
        },
        {
          id: "2.4",
          title: "Presents & Shopping",
          titleAr: "الهدايا والتسوّق",
          page: "12–15",
          intro: "نتعلّم أسماء الألعاب وأشياء التسوّق وأين نشتريها، ونسأل عمّا اشترينا.",
          explain: [
            "نسأل عن الهدية: <b>What can I buy for my brother?</b> والاقتراح: <b>How about a model boat?</b>",
            "نسأل أين نشتري: <b>Where can I buy a ring?</b> — <i>At the jewellery shop.</i>",
            "للسؤال عمّا اشترينا: <b>Where did you buy it/them?</b> — <i>I bought it at the shoe shop.</i>"
          ],
          vocab: [
            { en: "model boat", ar: "قارب مجسّم", ex: "How about a model boat?" },
            { en: "jigsaw puzzle", ar: "أحجية تركيب", ex: "He likes a jigsaw puzzle." },
            { en: "doll", ar: "دمية", ex: "A doll for my sister." },
            { en: "chess set", ar: "طقم شطرنج", ex: "My father gave me a chess set." },
            { en: "a pair of glasses", ar: "نظّارة", ex: "She bought a pair of glasses." },
            { en: "necklace", ar: "عقد / قلادة", ex: "A necklace from the jewellery shop." },
            { en: "ring", ar: "خاتم", ex: "Where can I buy a ring?" },
            { en: "a pair of sandals", ar: "صندل (حذاء)", ex: "I bought sandals at the shoe shop." },
            { en: "jewellery shop", ar: "محل مجوهرات", ex: "At the jewellery shop." },
            { en: "shoe shop", ar: "محل أحذية", ex: "I bought them at the shoe shop." },
            { en: "bookshop", ar: "مكتبة (بيع كتب)", ex: "Comics are at the bookshop." },
            { en: "clothes shop", ar: "محل ملابس", ex: "Shirts are at the clothes shop." }
          ],
          grammar: {
            title: "this / that / these / those + bought",
            ar: "للقريب: this (مفرد) / these (جمع). للبعيد: that / those. الماضي من buy = bought."
          },
          ex: [
            { type: "mcq", q: "Where ___ you buy that ring?", options: ["did", "do", "does", "are"], answer: 0, ar: "السؤال عن الماضي: did." },
            { type: "mcq", q: "Where can I buy a ring? — At the ___.", options: ["jewellery shop", "shoe shop", "bookshop", "beach"], answer: 0, ar: "الخواتم في محل المجوهرات." },
            { type: "fill", text: "I ___ them at the shoe shop. (buy, past)", answer: "bought", ar: "الماضي من buy = bought." },
            { type: "fill", text: "How about a model ___? (boat)", answer: "boat", ar: "قارب مجسّم = model boat." },
            { type: "order", answer: "Where did you buy those sandals", ar: "Where + did + you + buy + those + sandals." }
          ],
          quiz: [
            { type: "mcq", q: "Past of 'buy':", options: ["bought", "buyed", "buys", "buying"], answer: 0, ar: "buy → bought." },
            { type: "mcq", q: "You buy shoes at the ___.", options: ["shoe shop", "bookshop", "jewellery shop", "bakery"], answer: 0, ar: "الأحذية في محل الأحذية." }
          ]
        },
        {
          id: "2.5",
          title: "Making Suggestions",
          titleAr: "تقديم الاقتراحات",
          page: "14–16",
          intro: "نتعلّم نقترح أنشطة ونرفضها بأدب.",
          explain: [
            "للاقتراح: <b>Let's watch TV.</b> أو <b>How about going to the park?</b>",
            "لاحظ بعد How about نضيف <b>ing</b> للفعل: <i>How about watching TV?</i>",
            "للرفض المهذّب: <i>No, I don't like watching TV.</i> أو <i>No, I'm not hungry.</i>"
          ],
          vocab: [
            { en: "Let's…", ar: "هيّا بنا / لِنفعل", ex: "Let's play football." },
            { en: "How about…?", ar: "ما رأيك بـ…؟", ex: "How about going to the park?" },
            { en: "watch TV", ar: "يشاهد التلفاز", ex: "Let's watch TV." },
            { en: "take-away", ar: "مطعم وجبات سريعة", ex: "How about going to the take-away?" },
            { en: "hungry", ar: "جائع", ex: "No, I'm not hungry." },
            { en: "on holiday", ar: "في إجازة", ex: "He's on holiday." }
          ],
          grammar: {
            title: "Let's vs How about + ing",
            ar: "Let's + فعل أساسي (Let's go). How about + فعل-ing (How about going)."
          },
          ex: [
            { type: "mcq", q: "How about ___ to the park?", options: ["going", "go", "goes", "went"], answer: 0, ar: "بعد How about نستخدم الفعل + ing." },
            { type: "mcq", q: "___ play football!", options: ["Let's", "Lets", "Let", "Lets to"], answer: 0, ar: "Let's = Let us." },
            { type: "fill", text: "Let's ___ TV. (watch)", answer: "watch", ar: "بعد Let's فعل أساسي بدون ing." },
            { type: "fill", text: "No, I'm not ___. (hungry)", answer: "hungry", ar: "جائع = hungry." },
            { type: "order", answer: "How about going to the beach", ar: "How about + فعل-ing + to + المكان." }
          ],
          quiz: [
            { type: "mcq", q: "Correct: How about ___?", options: ["swimming", "swim", "to swim", "swims"], answer: 0, ar: "How about + ing." },
            { type: "mcq", q: "Correct: Let's ___ football.", options: ["play", "playing", "to play", "plays"], answer: 0, ar: "Let's + فعل أساسي." }
          ]
        }
      ],
      test: [
        { type: "mcq", q: "Yesterday Ali ___ by bicycle.", options: ["came", "come", "comes", "coming"], answer: 0, ar: "ماضي come = came." },
        { type: "mcq", q: "She didn't run. She ___.", options: ["walked", "walk", "walks", "walking"], answer: 0, ar: "ماضي walk = walked." },
        { type: "fill", text: "___ run! It's dangerous.", answer: "Don't", ar: "النهي = Don't." },
        { type: "mcq", q: "I'd like ___ egg sandwich, please.", options: ["an", "a", "the", "some a"], answer: 0, ar: "egg يبدأ بحرف متحرّك → an." },
        { type: "fill", text: "Where did you ___ those sandals? (buy)", answer: "buy", ar: "بعد did نستخدم الفعل الأساسي." },
        { type: "mcq", q: "How about ___ to the take-away?", options: ["going", "go", "goes", "to go"], answer: 0, ar: "How about + ing." },
        { type: "order", answer: "Where can I buy a ring", ar: "Where + can + I + buy + a + ring." },
        { type: "mcq", q: "You buy a necklace at the ___.", options: ["jewellery shop", "shoe shop", "bakery", "beach"], answer: 0, ar: "المجوهرات في محل المجوهرات." }
      ]
    },

    /* ============================ UNIT 3 ============================ */
    {
      id: 3, color: "#C25B57",
      title: "Some / Any & Feelings",
      titleAr: "بعض / أيّ والمشاعر",
      summary: "نستخدم some و any، نقدّم المساعدة بـ I'll، نعبّر عن المشاعر، ونتعلّم الضمائر.",
      lessons: [
        {
          id: "3.1",
          title: "Some & Any",
          titleAr: "some و any",
          page: "17–19",
          intro: "نتعلّم متى نستخدم some (في الإثبات) و any (في النفي والسؤال).",
          explain: [
            "في الجمل المثبتة نستخدم <b>some</b>: <i>There is some cheese. There are some olives.</i>",
            "في النفي والسؤال نستخدم <b>any</b>: <i>There isn't any bread. Are there any eggs?</i>",
            "مع المفرد غير المعدود: <b>There is</b>. مع الجمع المعدود: <b>There are</b>."
          ],
          vocab: [
            { en: "some", ar: "بعض / قليل من", ex: "There is some cheese." },
            { en: "any", ar: "أيّ (في النفي/السؤال)", ex: "There isn't any bread." },
            { en: "olives", ar: "زيتون", ex: "There are some olives." },
            { en: "tomatoes", ar: "طماطم", ex: "We need some tomatoes." },
            { en: "flour", ar: "دقيق", ex: "There is some flour." },
            { en: "butter", ar: "زبدة", ex: "Some butter is in the fridge." },
            { en: "fridge", ar: "ثلّاجة", ex: "The milk is in the fridge." },
            { en: "cupboard", ar: "خزانة", ex: "The glue is in the cupboard." },
            { en: "shelf", ar: "رفّ", ex: "The flour is on the shelf." },
            { en: "scissors", ar: "مقصّ", ex: "There are some scissors." },
            { en: "string", ar: "خيط", ex: "We need some string." },
            { en: "glue", ar: "غراء / صمغ", ex: "There is some glue." }
          ],
          grammar: {
            title: "some / any · is / are",
            ar: "some للإثبات، any للنفي والسؤال. is للمفرد وغير المعدود، are للجمع."
          },
          ex: [
            { type: "mcq", q: "There isn't ___ bread.", options: ["any", "some", "a", "the"], answer: 0, ar: "في النفي نستخدم any." },
            { type: "mcq", q: "There are ___ olives on the shelf.", options: ["some", "any", "a", "an"], answer: 0, ar: "في الإثبات والجمع نستخدم some." },
            { type: "fill", text: "There ___ some cheese in the fridge.", answer: "is", ar: "cheese غير معدود → is." },
            { type: "fill", text: "There ___ some tomatoes on the shelf.", answer: "are", ar: "tomatoes جمع → are." },
            { type: "order", answer: "There is some butter in the fridge", ar: "There is + some + اسم + in the fridge." }
          ],
          quiz: [
            { type: "mcq", q: "Are there ___ eggs?", options: ["any", "some", "a", "an"], answer: 0, ar: "في السؤال نستخدم any." },
            { type: "mcq", q: "There ___ some scissors in the cupboard.", options: ["are", "is", "am", "be"], answer: 0, ar: "scissors جمع → are." }
          ]
        },
        {
          id: "3.2",
          title: "Offers of Help",
          titleAr: "تقديم المساعدة",
          page: "20–21",
          intro: "نعرض المساعدة ونتطوّع باستخدام I'll (I will).",
          explain: [
            "للعرض الفوري نستخدم <b>I'll</b> (= I will): <i>I'll bring some Pepsis. I'll make a cake.</i>",
            "نسأل من سيساعد: <b>Who'll help?</b> — والجواب: <b>I will!</b>",
            "نحتاج شيئًا: <b>We need something to drink / to eat.</b>"
          ],
          vocab: [
            { en: "I'll", ar: "سوف (أنا)", ex: "I'll bring some olives." },
            { en: "bring", ar: "يُحضِر", ex: "I'll bring some cassettes." },
            { en: "make", ar: "يصنع / يُعِدّ", ex: "I'll make a cake." },
            { en: "party", ar: "حفلة", ex: "I want to have a party." },
            { en: "something to drink", ar: "شيء للشرب", ex: "We need something to drink." },
            { en: "something to eat", ar: "شيء للأكل", ex: "We need something to eat." },
            { en: "money", ar: "نقود", ex: "We haven't got any money." }
          ],
          grammar: {
            title: "I'll (will) for offers",
            ar: "نستخدم will لعرض المساعدة لحظيًا: I'll help. I'll bring some juice."
          },
          ex: [
            { type: "mcq", q: "It's Sam's birthday. Who'll help? — I ___!", options: ["will", "am", "do", "did"], answer: 0, ar: "الجواب: I will." },
            { type: "mcq", q: "We need ___ to drink.", options: ["something", "anything one", "some", "any"], answer: 0, ar: "نحتاج شيئًا = something." },
            { type: "fill", text: "I'll ___ a cake. (make)", answer: "make", ar: "نُعِدّ كعكة = make a cake." },
            { type: "fill", text: "We haven't got ___ money. (negative)", answer: "any", ar: "في النفي نستخدم any." },
            { type: "order", answer: "I will bring some orange juice", ar: "I will + bring + some + اسم." }
          ],
          quiz: [
            { type: "mcq", q: "Offer help: ___ help you.", options: ["I'll", "I", "I'm", "I do"], answer: 0, ar: "العرض الفوري = I'll." },
            { type: "mcq", q: "I'll ___ some cassettes for the music.", options: ["bring", "brings", "brought", "bringing"], answer: 0, ar: "بعد will فعل أساسي." }
          ]
        },
        {
          id: "3.3",
          title: "Feelings",
          titleAr: "المشاعر",
          page: "22–24",
          intro: "نتعلّم نصف المشاعر ونسأل عنها.",
          explain: [
            "نسأل: <b>How do they feel?</b> — والجواب بالصفة: <i>He's happy. She's frightened.</i>",
            "للتقوية نستخدم <b>very</b>: <i>I was very tired.</i>",
            "صفات المشاعر: tired, frightened, angry, sad, happy."
          ],
          vocab: [
            { en: "happy", ar: "سعيد", ex: "I was very happy." },
            { en: "sad", ar: "حزين", ex: "He was sad." },
            { en: "tired", ar: "متعب", ex: "We were very tired." },
            { en: "angry", ar: "غاضب", ex: "She was angry." },
            { en: "frightened", ar: "خائف", ex: "I was frightened." },
            { en: "broke", ar: "كسر (ماضي break)", ex: "My sister broke the watch." },
            { en: "flew away", ar: "طار بعيدًا", ex: "The kite flew away." }
          ],
          grammar: {
            title: "be + feeling adjective",
            ar: "نصف الشعور بفعل be + صفة: I am happy / He was sad / We were tired."
          },
          ex: [
            { type: "mcq", q: "The string broke and the kite flew away. I was very ___.", options: ["sad", "happy", "hungry", "old"], answer: 0, ar: "ضياع الطائرة يجعله حزينًا." },
            { type: "mcq", q: "A car nearly hit me. I was very ___.", options: ["frightened", "happy", "tired", "angry"], answer: 0, ar: "الخوف من الحادث = frightened." },
            { type: "fill", text: "How do they ___? (feel)", answer: "feel", ar: "السؤال عن الشعور: How do they feel?" },
            { type: "fill", text: "My little sister ___ it. (break, past)", answer: "broke", ar: "ماضي break = broke." },
            { type: "order", answer: "I was very tired", ar: "I was + very + صفة." }
          ],
          quiz: [
            { type: "mcq", q: "Opposite of 'happy':", options: ["sad", "tired", "angry", "frightened"], answer: 0, ar: "عكس سعيد = حزين." },
            { type: "mcq", q: "We walked all day. We were ___.", options: ["tired", "happy", "angry", "frightened"], answer: 0, ar: "المشي طوال اليوم = متعب." }
          ]
        },
        {
          id: "3.4",
          title: "Pronouns",
          titleAr: "الضمائر",
          page: "29",
          intro: "نتعلّم ضمائر الفاعل وضمائر المفعول وكيف نختصر الجملة.",
          explain: [
            "ضمائر الفاعل: I, you, he, she, it, we, you, they.",
            "ضمائر المفعول: me, you, him, her, it, us, you, them.",
            "يمكن اختصار الجملة: <i>Peter gave these comics to us</i> = <i>Peter gave us these comics.</i>"
          ],
          vocab: [
            { en: "me", ar: "ـني / إيّاي", ex: "Give it to me." },
            { en: "him", ar: "ـه (مذكّر)", ex: "That car hit him." },
            { en: "her", ar: "ـها (مؤنّث)", ex: "I gave her a book." },
            { en: "us", ar: "ـنا", ex: "Peter gave us these comics." },
            { en: "them", ar: "ـهم", ex: "Where did you buy them?" },
            { en: "comic", ar: "مجلّة مصوّرة", ex: "Peter gave us these comics." }
          ],
          grammar: {
            title: "Subject vs Object pronouns",
            ar: "الفاعل يفعل (I, he, they). المفعول يقع عليه الفعل (me, him, them)."
          },
          ex: [
            { type: "mcq", q: "That car hit ___.", options: ["him", "he", "his", "he's"], answer: 0, ar: "ضمير المفعول للمذكّر = him." },
            { type: "mcq", q: "Peter gave these comics to ___.", options: ["us", "we", "our", "ours"], answer: 0, ar: "ضمير المفعول للجمع المتكلّم = us." },
            { type: "fill", text: "I'd like to make a cake for Sam = I'd like to make ___ a cake.", answer: "him", ar: "Sam مذكّر → him." },
            { type: "fill", text: "Where did you buy ___? (those shoes)", answer: "them", ar: "للجمع = them." },
            { type: "order", answer: "She gave me a book", ar: "فاعل + فعل + ضمير مفعول + مفعول." }
          ],
          quiz: [
            { type: "mcq", q: "Object pronoun for 'she':", options: ["her", "she", "hers", "him"], answer: 0, ar: "مفعول she = her." },
            { type: "mcq", q: "Let's buy a ring for Nadia = Let's buy ___ a ring.", options: ["her", "she", "him", "them"], answer: 0, ar: "Nadia مؤنّث → her." }
          ]
        }
      ],
      test: [
        { type: "mcq", q: "There isn't ___ bread.", options: ["any", "some", "a", "the"], answer: 0, ar: "النفي → any." },
        { type: "mcq", q: "There ___ some olives on the shelf.", options: ["are", "is", "am", "be"], answer: 0, ar: "olives جمع → are." },
        { type: "fill", text: "Who'll help? — I ___!", answer: "will", ar: "الجواب: I will." },
        { type: "mcq", q: "The kite flew away. I was very ___.", options: ["sad", "happy", "tired", "hungry"], answer: 0, ar: "الحزن لضياع الطائرة." },
        { type: "fill", text: "That car hit ___. (he)", answer: "him", ar: "مفعول he = him." },
        { type: "mcq", q: "We need ___ to eat.", options: ["something", "anything to", "some", "any"], answer: 0, ar: "نحتاج شيئًا = something." },
        { type: "order", answer: "I will make a cake", ar: "I will + make + a + cake." },
        { type: "mcq", q: "Object pronoun for 'they':", options: ["them", "they", "their", "theirs"], answer: 0, ar: "مفعول they = them." }
      ]
    },

    /* ============================ UNIT 4 ============================ */
    {
      id: 4, color: "#1F4E79",
      title: "Future, Directions & Past Continuous",
      titleAr: "المستقبل والاتجاهات والماضي المستمر",
      summary: "نعرض المساعدة، نتكلّم عن المستقبل بـ will، نعطي الاتجاهات، ونصف ما كان يحدث (was/were).",
      lessons: [
        {
          id: "4.1",
          title: "Can I Help You?",
          titleAr: "هل أستطيع مساعدتك؟",
          page: "30–32",
          intro: "نعرض المساعدة ونتعلّم أفعال الحركة (push/pull/carry/reach).",
          explain: [
            "<b>Can I help you?</b> = هل أساعدك؟ — الجواب: <i>Yes, please. I can't reach it.</i>",
            "أفعال مفيدة: <b>push</b> يدفع، <b>pull</b> يسحب، <b>carry</b> يحمل، <b>hold</b> يمسك، <b>reach</b> يصل/يطال.",
            "نقول ما لا نقدر عليه: <i>I can't move it. I can't carry these books.</i>"
          ],
          vocab: [
            { en: "push", ar: "يدفع", ex: "You push and I'll pull." },
            { en: "pull", ar: "يسحب", ex: "Pull the box." },
            { en: "carry", ar: "يحمل", ex: "I can't carry these books." },
            { en: "hold", ar: "يمسك", ex: "You hold this." },
            { en: "reach", ar: "يصل إلى / يطال", ex: "I can't reach it." },
            { en: "move", ar: "يحرّك", ex: "I can't move it." },
            { en: "hammer", ar: "مطرقة", ex: "I'll get a hammer." },
            { en: "nails", ar: "مسامير", ex: "Just get the nails." },
            { en: "ladder", ar: "سلّم", ex: "I'll get Dad's ladder." },
            { en: "rope", ar: "حبل", ex: "I'll get some rope." }
          ],
          grammar: {
            title: "Can / can't + verb",
            ar: "can للقدرة، can't للعجز. بعدها فعل أساسي: I can't reach it."
          },
          ex: [
            { type: "mcq", q: "___ I help you? — Yes, please.", options: ["Can", "Do", "Am", "Did"], answer: 0, ar: "عرض المساعدة: Can I help you?" },
            { type: "mcq", q: "I can't ___ it. It's too high.", options: ["reach", "carry", "push", "pull"], answer: 0, ar: "لا أصل إليه (عالٍ) = reach." },
            { type: "fill", text: "You ___ and I'll pull. (push)", answer: "push", ar: "يدفع = push." },
            { type: "fill", text: "We use a ___ to climb up. (ladder)", answer: "ladder", ar: "السلّم للصعود = ladder." },
            { type: "order", answer: "I can not carry these books", ar: "I can not + carry + these + books." }
          ],
          quiz: [
            { type: "mcq", q: "To go up high, you use a ___.", options: ["ladder", "hammer", "rope", "nail"], answer: 0, ar: "السلّم للصعود." },
            { type: "mcq", q: "Opposite of 'push':", options: ["pull", "carry", "hold", "reach"], answer: 0, ar: "عكس push = pull." }
          ]
        },
        {
          id: "4.2",
          title: "Messages & the Future",
          titleAr: "الرسائل والمستقبل",
          page: "33–34",
          intro: "نتعلّم نتكلّم عن المستقبل بـ will / won't ونأخذ رسائل.",
          explain: [
            "للمستقبل نستخدم <b>will</b>: <i>He'll meet you at four o'clock.</i>",
            "للنفي نستخدم <b>won't</b> (= will not): <i>She won't be at school tomorrow.</i>",
            "أخذ رسالة: <b>Can I take a message?</b>"
          ],
          vocab: [
            { en: "will", ar: "سوف / سـ", ex: "The match will start at three." },
            { en: "won't", ar: "لن", ex: "He won't be home until ten." },
            { en: "message", ar: "رسالة", ex: "Can I take a message?" },
            { en: "match", ar: "مباراة", ex: "The match will start at 3 o'clock." },
            { en: "ill", ar: "مريض", ex: "She's ill. She won't come." },
            { en: "until", ar: "حتّى", ex: "He won't be home until ten." },
            { en: "tomorrow", ar: "غدًا", ex: "She won't be at school tomorrow." }
          ],
          grammar: {
            title: "will / won't",
            ar: "للمستقبل: will + فعل أساسي (He'll come). للنفي: won't (= will not)."
          },
          ex: [
            { type: "mcq", q: "The match ___ start at three.", options: ["will", "is", "does", "did"], answer: 0, ar: "المستقبل = will." },
            { type: "mcq", q: "She's ill. She ___ be at school tomorrow.", options: ["won't", "don't", "isn't", "didn't"], answer: 0, ar: "نفي المستقبل = won't." },
            { type: "fill", text: "He'll ___ you at four o'clock. (meet)", answer: "meet", ar: "بعد will فعل أساسي." },
            { type: "fill", text: "Can I take a ___? (message)", answer: "message", ar: "رسالة = message." },
            { type: "order", answer: "He will be late tonight", ar: "He will + be + late + tonight." }
          ],
          quiz: [
            { type: "mcq", q: "won't = ___", options: ["will not", "do not", "did not", "was not"], answer: 0, ar: "won't = will not." },
            { type: "mcq", q: "Future: I ___ phone you tomorrow.", options: ["will", "am", "did", "was"], answer: 0, ar: "المستقبل = will." }
          ]
        },
        {
          id: "4.3",
          title: "Giving Directions",
          titleAr: "إعطاء الاتجاهات",
          page: "35",
          intro: "نتعلّم نسأل عن الطريق ونعطي الاتجاهات داخل المدينة.",
          explain: [
            "نسأل: <b>Can you tell me the way to the bank?</b>",
            "نعطي الاتجاه: <b>Go straight on. Turn left. Turn right. Cross over.</b>",
            "نحدّد الموقع: <i>It's on your right / on the left.</i>"
          ],
          vocab: [
            { en: "turn left", ar: "انعطف يسارًا", ex: "Turn left at the school." },
            { en: "turn right", ar: "انعطف يمينًا", ex: "Turn right at the roundabout." },
            { en: "go straight on", ar: "سِر للأمام مباشرة", ex: "Go straight on to the bank." },
            { en: "cross over", ar: "اعبر للجهة الأخرى", ex: "Cross over the road." },
            { en: "roundabout", ar: "دوّار", ex: "Turn right at the roundabout." },
            { en: "bank", ar: "بنك", ex: "Can you tell me the way to the bank?" },
            { en: "bakery", ar: "مخبز", ex: "The bakery is near the mosque." },
            { en: "hospital", ar: "مستشفى", ex: "The hospital is on the right." },
            { en: "mosque", ar: "مسجد", ex: "Turn left at the mosque." },
            { en: "police station", ar: "مركز شرطة", ex: "Go to the police station." }
          ],
          grammar: {
            title: "Imperatives for directions",
            ar: "الاتجاهات أوامر: تبدأ بالفعل — Turn left, Go straight on, Cross over."
          },
          ex: [
            { type: "mcq", q: "Can you tell me the ___ to the bank?", options: ["way", "road is", "go", "turn"], answer: 0, ar: "الطريق = the way." },
            { type: "mcq", q: "It's not left. Go ___ on.", options: ["straight", "turn", "cross", "right is"], answer: 0, ar: "للأمام = straight on." },
            { type: "fill", text: "Turn ___ at the roundabout. (right)", answer: "right", ar: "انعطف يمينًا = turn right." },
            { type: "fill", text: "The bank is on your ___. (right)", answer: "right", ar: "على يمينك = on your right." },
            { type: "order", answer: "Turn left at the school", ar: "Turn left + at + the school." }
          ],
          quiz: [
            { type: "mcq", q: "Opposite of 'turn left':", options: ["turn right", "go straight", "cross over", "stop"], answer: 0, ar: "عكس يسار = يمين." },
            { type: "mcq", q: "A circular road junction is a ___.", options: ["roundabout", "bakery", "mosque", "bank"], answer: 0, ar: "الدوّار = roundabout." }
          ]
        },
        {
          id: "4.4",
          title: "Past Continuous",
          titleAr: "الماضي المستمر",
          page: "36–39",
          intro: "نصف ما كان يحدث في لحظة من الماضي باستخدام was/were + ing.",
          explain: [
            "نستخدم <b>was/were + فعل-ing</b>: <i>Jill was cooking. They were helping.</i>",
            "<b>was</b> مع (I, he, she, it) و<b>were</b> مع (you, we, they).",
            "نسأل: <b>What was John doing?</b> — <i>He was washing the window.</i>"
          ],
          vocab: [
            { en: "cooking", ar: "يطبخ", ex: "Jill was cooking lunch." },
            { en: "feeding", ar: "يُطعِم", ex: "Mary was feeding the cat." },
            { en: "painting", ar: "يدهن / يرسم", ex: "Peter was painting the cupboard." },
            { en: "washing", ar: "يغسل", ex: "Dave was washing the window." },
            { en: "taking a message", ar: "يأخذ رسالة", ex: "Penny was taking a message." },
            { en: "reading", ar: "يقرأ", ex: "Yasmin was reading a book." },
            { en: "driving", ar: "يقود", ex: "Who was driving the car?" }
          ],
          grammar: {
            title: "was / were + verb-ing",
            ar: "الماضي المستمر يصف حدثًا كان جاريًا في الماضي: He was washing. They were cleaning."
          },
          ex: [
            { type: "mcq", q: "Jill ___ cooking lunch.", options: ["was", "were", "is", "are"], answer: 0, ar: "Jill مفرد → was." },
            { type: "mcq", q: "They ___ helping Mrs Evans.", options: ["were", "was", "is", "are"], answer: 0, ar: "they جمع → were." },
            { type: "fill", text: "Dave was ___ the window. (wash)", answer: "washing", ar: "بعد was نضيف ing." },
            { type: "fill", text: "What ___ John doing? (was/were)", answer: "was", ar: "John مفرد → was." },
            { type: "order", answer: "Peter was painting the cupboard", ar: "Peter + was + painting + المفعول." }
          ],
          quiz: [
            { type: "mcq", q: "We ___ reading at nine o'clock.", options: ["were", "was", "is", "are"], answer: 0, ar: "we → were." },
            { type: "mcq", q: "She ___ feeding the cat.", options: ["was", "were", "are", "is"], answer: 0, ar: "she → was." }
          ]
        }
      ],
      test: [
        { type: "mcq", q: "___ I help you? — Yes, please.", options: ["Can", "Do", "Am", "Was"], answer: 0, ar: "عرض المساعدة = Can." },
        { type: "mcq", q: "Opposite of 'push':", options: ["pull", "hold", "reach", "carry"], answer: 0, ar: "عكس push = pull." },
        { type: "fill", text: "She's ill. She ___ come tomorrow. (will not)", answer: "won't", ar: "نفي المستقبل = won't." },
        { type: "mcq", q: "Turn ___ at the roundabout.", options: ["right", "way", "straight is", "cross"], answer: 0, ar: "انعطف يمينًا." },
        { type: "fill", text: "Jill ___ cooking lunch. (was/were)", answer: "was", ar: "Jill مفرد → was." },
        { type: "mcq", q: "They ___ painting the wall.", options: ["were", "was", "is", "are"], answer: 0, ar: "they → were." },
        { type: "order", answer: "What was John doing", ar: "What + was + John + doing." },
        { type: "mcq", q: "Future: I ___ phone you.", options: ["will", "am", "did", "was"], answer: 0, ar: "المستقبل = will." }
      ]
    },

    /* ============================ UNIT 5 ============================ */
    {
      id: 5, color: "#4C8B3F",
      title: "Camping, Comparing & Possessives",
      titleAr: "التخييم والمقارنة والملكية",
      summary: "أنشطة التخييم، قراءة الخرائط والمسافات، ضمائر الملكية، وإعطاء التعليمات بالترتيب.",
      lessons: [
        {
          id: "5.1",
          title: "Let's Go Camping",
          titleAr: "هيّا نخيّم",
          page: "45–47",
          intro: "نتعلّم أنشطة الإجازة والتخييم ونقترح أين نذهب.",
          explain: [
            "نسأل: <b>Where shall we go?</b> — والاقتراح: <b>Let's go to the Blue Pool.</b> / <b>How about going to…?</b>",
            "أنشطة: go swimming, go fishing, go climbing, go horse-riding, take photographs, have a picnic.",
            "نرفض ونقترح بديلًا: <i>No. We went there last year. How about…?</i>"
          ],
          vocab: [
            { en: "go camping", ar: "يذهب للتخييم", ex: "Let's go camping." },
            { en: "go swimming", ar: "يذهب للسباحة", ex: "We wanted to go swimming." },
            { en: "go fishing", ar: "يذهب للصيد", ex: "Let's go fishing." },
            { en: "go climbing", ar: "يذهب للتسلّق", ex: "We can go climbing." },
            { en: "go horse-riding", ar: "يركب الخيل", ex: "We can go horse-riding." },
            { en: "take photographs", ar: "يلتقط صورًا", ex: "Take some photographs." },
            { en: "have a picnic", ar: "نزهة/رحلة طعام", ex: "Let's have a picnic." },
            { en: "tent", ar: "خيمة", ex: "First we put up the tent." }
          ],
          grammar: {
            title: "shall / Let's / How about",
            ar: "نقترح بـ: Where shall we go? / Let's + فعل / How about + فعل-ing."
          },
          ex: [
            { type: "mcq", q: "Where ___ we go?", options: ["shall", "will is", "do are", "did"], answer: 0, ar: "اقتراح الوجهة: Where shall we go?" },
            { type: "mcq", q: "It was hot, so we wanted to ___.", options: ["go swimming", "go climbing", "have a tent", "take photographs"], answer: 0, ar: "الحرّ → السباحة." },
            { type: "fill", text: "First we put up the ___. (tent)", answer: "tent", ar: "الخيمة = tent." },
            { type: "fill", text: "Let's ___ fishing. (go)", answer: "go", ar: "نشاط الصيد = go fishing." },
            { type: "order", answer: "How about going to the Blue Pool", ar: "How about + going + to + المكان." }
          ],
          quiz: [
            { type: "mcq", q: "Activity with a camera:", options: ["take photographs", "go swimming", "go fishing", "go climbing"], answer: 0, ar: "الكاميرا → التصوير." },
            { type: "mcq", q: "We sleep in a ___ when camping.", options: ["tent", "bank", "shop", "fridge"], answer: 0, ar: "الخيمة للتخييم." }
          ]
        },
        {
          id: "5.2",
          title: "Maps & Distances",
          titleAr: "الخرائط والمسافات",
          page: "46–49",
          intro: "نقرأ الخريطة ونسأل عن المسافة بالكيلومترات.",
          explain: [
            "مصطلحات الخريطة: river, lake, mountains, road, path, farm, wood, village, camp.",
            "نسأل عن المسافة: <b>How far is it to the farm?</b>",
            "الجواب: <b>It's about three kilometres.</b>"
          ],
          vocab: [
            { en: "river", ar: "نهر", ex: "We swam in the river." },
            { en: "lake", ar: "بحيرة", ex: "The lake is big." },
            { en: "mountains", ar: "جبال", ex: "We climbed the mountains." },
            { en: "path", ar: "ممرّ / مسار", ex: "Follow the path to the camp." },
            { en: "farm", ar: "مزرعة", ex: "How far is it to the farm?" },
            { en: "wood", ar: "غابة صغيرة", ex: "From the farm to the wood." },
            { en: "village", ar: "قرية", ex: "The village is near the road." },
            { en: "camp", ar: "مخيّم", ex: "We walked back to the camp." },
            { en: "kilometre", ar: "كيلومتر", ex: "It's about three kilometres." },
            { en: "How far…?", ar: "كم تبعد…؟", ex: "How far is it to Ibb?" }
          ],
          grammar: {
            title: "How far is it…?",
            ar: "نسأل عن المسافة بـ How far is it to…? والجواب: It's about … kilometres."
          },
          ex: [
            { type: "mcq", q: "___ far is it to the farm?", options: ["How", "What", "Where", "Who"], answer: 0, ar: "المسافة = How far." },
            { type: "mcq", q: "It's ___ three kilometres.", options: ["about", "very", "more", "far is"], answer: 0, ar: "للتقريب نستخدم about." },
            { type: "fill", text: "We swam in the ___. (river)", answer: "river", ar: "النهر = river." },
            { type: "fill", text: "Follow the ___ to the camp. (path)", answer: "path", ar: "الممرّ = path." },
            { type: "order", answer: "How far is it to the wood", ar: "How far + is + it + to + المكان." }
          ],
          quiz: [
            { type: "mcq", q: "A small forest is a ___.", options: ["wood", "lake", "river", "village"], answer: 0, ar: "الغابة الصغيرة = wood." },
            { type: "mcq", q: "We measure distance in ___.", options: ["kilometres", "rooms", "shops", "tents"], answer: 0, ar: "المسافة بالكيلومترات." }
          ]
        },
        {
          id: "5.3",
          title: "Possessive Pronouns",
          titleAr: "ضمائر الملكية",
          page: "53–58",
          intro: "نتعلّم نقول إنّ شيئًا يخصّ شخصًا: mine, yours, his, hers, ours, theirs.",
          explain: [
            "نسأل: <b>Whose is it?</b> = لمن هذا؟ — والجواب: <b>It's mine.</b>",
            "ضمائر الملكية: mine, yours, his, hers, ours, theirs.",
            "<i>The potatoes are mine.</i> = البطاطس لي. <i>It's not mine.</i> = ليس لي."
          ],
          vocab: [
            { en: "mine", ar: "مِلكي", ex: "The potatoes are mine." },
            { en: "yours", ar: "مِلكك", ex: "Is this cucumber yours?" },
            { en: "his", ar: "مِلكه", ex: "It's his." },
            { en: "hers", ar: "مِلكها", ex: "The book is hers." },
            { en: "ours", ar: "مِلكنا", ex: "This tent is ours." },
            { en: "theirs", ar: "مِلكهم", ex: "Those bags are theirs." },
            { en: "Whose…?", ar: "لمن…؟", ex: "Whose is the cucumber?" },
            { en: "cucumber", ar: "خيار", ex: "Whose is the cucumber?" }
          ],
          grammar: {
            title: "Possessive pronouns",
            ar: "نستبدل (اسم + الاسم المملوك) بضمير ملكية: my book → mine, your book → yours."
          },
          ex: [
            { type: "mcq", q: "___ is this cucumber?", options: ["Whose", "Who", "What", "Where"], answer: 0, ar: "السؤال عن المالك = Whose." },
            { type: "mcq", q: "The potatoes are ___. (belong to me)", options: ["mine", "my", "me", "I"], answer: 0, ar: "مِلكي = mine." },
            { type: "fill", text: "Is this bag ___? (belong to you)", answer: "yours", ar: "مِلكك = yours." },
            { type: "fill", text: "This is her book. The book is ___.", answer: "hers", ar: "مِلكها = hers." },
            { type: "order", answer: "Those shoes are theirs", ar: "Those shoes + are + theirs." }
          ],
          quiz: [
            { type: "mcq", q: "Possessive of 'we':", options: ["ours", "us", "our", "we"], answer: 0, ar: "مِلكنا = ours." },
            { type: "mcq", q: "It's not ___. (belong to me)", options: ["mine", "my", "me", "I"], answer: 0, ar: "ليس لي = not mine." }
          ]
        },
        {
          id: "5.4",
          title: "Giving Instructions",
          titleAr: "إعطاء التعليمات",
          page: "56–58",
          intro: "نشرح كيف نصنع شيئًا بترتيب الخطوات (first, next, then, after that).",
          explain: [
            "نسأل: <b>How do you make a salad?</b>",
            "نرتّب الخطوات: <b>First… Next… After that… Then…</b>",
            "أفعال: <b>wash</b> يغسل، <b>cut up</b> يقطّع، <b>mix</b> يخلط."
          ],
          vocab: [
            { en: "wash", ar: "يغسل", ex: "First, wash the tomatoes." },
            { en: "cut up", ar: "يقطّع", ex: "Next, cut up the cucumber." },
            { en: "mix", ar: "يخلط", ex: "Then mix everything in a bowl." },
            { en: "bowl", ar: "وعاء / سلطانية", ex: "Mix it in a bowl." },
            { en: "salad", ar: "سلطة", ex: "How do you make a salad?" },
            { en: "first", ar: "أوّلًا", ex: "First, wash the vegetables." },
            { en: "next", ar: "بعد ذلك", ex: "Next, cut them up." },
            { en: "then", ar: "ثمّ", ex: "Then mix them." }
          ],
          grammar: {
            title: "Sequence words",
            ar: "نرتّب الخطوات بكلمات: First, Next, After that, Then."
          },
          ex: [
            { type: "mcq", q: "How do you ___ a salad?", options: ["make", "do", "cook is", "mix are"], answer: 0, ar: "نصنع سلطة = make a salad." },
            { type: "mcq", q: "First wash, next ___ up, then mix.", options: ["cut", "wash", "mix", "make"], answer: 0, ar: "الترتيب: اغسل ← قطّع ← اخلط." },
            { type: "fill", text: "Mix the salad in a ___. (bowl)", answer: "bowl", ar: "الوعاء = bowl." },
            { type: "fill", text: "___, wash the tomatoes. (sequence word)", answer: "First", ar: "أوّلًا = First." },
            { type: "order", answer: "First you wash the vegetables", ar: "First + you + wash + the vegetables." }
          ],
          quiz: [
            { type: "mcq", q: "We mix the salad in a ___.", options: ["bowl", "tent", "river", "shelf"], answer: 0, ar: "الوعاء = bowl." },
            { type: "mcq", q: "Order word that comes first:", options: ["First", "Then", "Next", "After that"], answer: 0, ar: "البداية = First." }
          ]
        }
      ],
      test: [
        { type: "mcq", q: "Where ___ we go camping?", options: ["shall", "will is", "do are", "did"], answer: 0, ar: "اقتراح: Where shall we go?" },
        { type: "mcq", q: "Activity with a camera:", options: ["take photographs", "go swimming", "go fishing", "have a tent"], answer: 0, ar: "الكاميرا → التصوير." },
        { type: "fill", text: "How ___ is it to the farm?", answer: "far", ar: "المسافة = How far." },
        { type: "mcq", q: "It's ___ three kilometres.", options: ["about", "very", "more", "far is"], answer: 0, ar: "للتقريب = about." },
        { type: "fill", text: "Is this bag ___? (belong to you)", answer: "yours", ar: "مِلكك = yours." },
        { type: "mcq", q: "The potatoes are ___. (belong to me)", options: ["mine", "my", "me", "I"], answer: 0, ar: "مِلكي = mine." },
        { type: "order", answer: "First you wash the tomatoes", ar: "First + you + wash + the tomatoes." },
        { type: "mcq", q: "We mix a salad in a ___.", options: ["bowl", "tent", "lake", "shelf"], answer: 0, ar: "الوعاء = bowl." }
      ]
    },

    /* ============================ UNIT 6 ============================ */
    {
      id: 6, color: "#7A4FA3",
      title: "Animals & Superlatives",
      titleAr: "الحيوانات وأفعل التفضيل",
      summary: "نصف الحيوانات (اللون، المسكن، الغذاء)، ونستخدم أفعل التفضيل، و have to / has to.",
      lessons: [
        {
          id: "6.1",
          title: "Describing Animals",
          titleAr: "وصف الحيوانات",
          page: "59",
          intro: "نتعلّم نصف الحيوان: لونه، أين يعيش، ماذا يأكل.",
          explain: [
            "اللون: <i>The long-eared owl is brown.</i>",
            "المسكن: <i>It lives in trees / in the desert / in a hole.</i>",
            "الغذاء: <i>It eats small animals.</i> — والصفة: <i>It has got big eyes.</i>"
          ],
          vocab: [
            { en: "owl", ar: "بومة", ex: "The long-eared owl is brown." },
            { en: "fennec fox", ar: "ثعلب الفنك", ex: "The fennec fox has big ears." },
            { en: "zebra", ar: "حمار وحشي", ex: "The mountain zebra has stripes." },
            { en: "otter", ar: "ثعلب الماء (قُضاعة)", ex: "The otter lives near water." },
            { en: "rattlesnake", ar: "أفعى الجرس", ex: "The rattlesnake lives in a hole." },
            { en: "lives in", ar: "يعيش في", ex: "It lives in trees." },
            { en: "eats", ar: "يأكل", ex: "It eats small animals." },
            { en: "desert", ar: "صحراء", ex: "It lives in the desert." },
            { en: "hole", ar: "جُحر / حفرة", ex: "It lives in a hole in the ground." }
          ],
          grammar: {
            title: "Describing with is / lives / eats / has got",
            ar: "نصف الحيوان بأربعة أشياء: اللون (is)، المسكن (lives in)، الغذاء (eats)، والصفة (has got)."
          },
          ex: [
            { type: "mcq", q: "The owl ___ in trees.", options: ["lives", "live", "living", "lived"], answer: 0, ar: "مع it نضيف s → lives." },
            { type: "mcq", q: "The fennec fox has got big ___.", options: ["ears", "wheels", "books", "doors"], answer: 0, ar: "الفنك له آذان كبيرة." },
            { type: "fill", text: "The owl eats ___ animals. (small)", answer: "small", ar: "حيوانات صغيرة = small animals." },
            { type: "fill", text: "The rattlesnake lives in a ___. (hole)", answer: "hole", ar: "الجُحر = hole." },
            { type: "order", answer: "The owl eats small animals", ar: "فاعل + فعل + مفعول." }
          ],
          quiz: [
            { type: "mcq", q: "Where does the fennec fox live?", options: ["the desert", "the sea", "a school", "a shop"], answer: 0, ar: "الفنك يعيش في الصحراء." },
            { type: "mcq", q: "The owl has big eyes, so it can ___ well.", options: ["see", "eat", "run", "fly is"], answer: 0, ar: "العيون الكبيرة للرؤية الجيدة." }
          ]
        },
        {
          id: "6.2",
          title: "Superlatives",
          titleAr: "أفعل التفضيل",
          page: "60–62",
          intro: "نقارن بين أكثر من شيئين: الأكبر، الأصغر، الأسرع، الأطول.",
          explain: [
            "نضيف <b>-est</b> أو نستخدم <b>the … -est</b>: <i>The giraffe is the tallest animal.</i>",
            "أمثلة: big → <b>the biggest</b>، small → <b>the smallest</b>، fast → <b>the fastest</b>، tall → <b>the tallest</b>.",
            "long → the longest، short → the shortest."
          ],
          vocab: [
            { en: "biggest", ar: "الأكبر", ex: "The elephant is the biggest." },
            { en: "smallest", ar: "الأصغر", ex: "The mouse is the smallest." },
            { en: "fastest", ar: "الأسرع", ex: "Which one is the fastest?" },
            { en: "tallest", ar: "الأطول", ex: "The giraffe is the tallest." },
            { en: "longest", ar: "الأطول (طولًا)", ex: "Find the longest word." },
            { en: "shortest", ar: "الأقصر", ex: "Find the shortest word." },
            { en: "zoo", ar: "حديقة حيوان", ex: "We're going to the zoo." },
            { en: "cage", ar: "قفص", ex: "They are in their cages." }
          ],
          grammar: {
            title: "the + adjective + est",
            ar: "للأفعل التفضيل نستخدم the + صفة + est: the tallest, the biggest, the smallest."
          },
          ex: [
            { type: "mcq", q: "The giraffe is the ___ animal in the zoo.", options: ["tallest", "taller", "tall", "more tall"], answer: 0, ar: "الأطول = the tallest." },
            { type: "mcq", q: "The mouse is the ___ animal.", options: ["smallest", "smaller", "small", "more small"], answer: 0, ar: "الأصغر = the smallest." },
            { type: "fill", text: "The elephant is the ___ animal. (big)", answer: "biggest", ar: "big → biggest (نضاعف g)." },
            { type: "fill", text: "Find the ___ word in the story. (long)", answer: "longest", ar: "الأطول = longest." },
            { type: "order", answer: "The elephant is the biggest animal", ar: "الفاعل + is + the + biggest + animal." }
          ],
          quiz: [
            { type: "mcq", q: "Superlative of 'fast':", options: ["fastest", "faster", "more fast", "fast"], answer: 0, ar: "fast → fastest." },
            { type: "mcq", q: "Sana'a is the ___ town in Yemen.", options: ["biggest", "bigger", "big", "more big"], answer: 0, ar: "الأكبر = the biggest." }
          ]
        },
        {
          id: "6.3",
          title: "Have to / Has to",
          titleAr: "لا بدّ من / يجب",
          page: "67",
          intro: "نعبّر عن الواجب والضرورة باستخدام have to / has to.",
          explain: [
            "<b>have to</b> مع (I, you, we, they): <i>We have to do the shopping.</i>",
            "<b>has to</b> مع (he, she, it): <i>She has to help in the kitchen.</i>",
            "تعني: مضطرّ/يجب أن يفعل شيئًا."
          ],
          vocab: [
            { en: "have to", ar: "يجب أن / مضطرّ", ex: "We have to be home at 3." },
            { en: "has to", ar: "يجب أن (مفرد غائب)", ex: "She has to help her mum." },
            { en: "homework", ar: "واجب منزلي", ex: "I have to do my homework." },
            { en: "favourite", ar: "مفضّل", ex: "My favourite animal is the lion." },
            { en: "keeper", ar: "حارس (حيوانات)", ex: "He is a keeper at the zoo." }
          ],
          grammar: {
            title: "have to vs has to",
            ar: "have to للجميع، إلا مع he/she/it فنستخدم has to."
          },
          ex: [
            { type: "mcq", q: "She ___ help in the kitchen.", options: ["has to", "have to", "having to", "to have"], answer: 0, ar: "she → has to." },
            { type: "mcq", q: "We ___ paint a picture for homework.", options: ["have to", "has to", "having", "to has"], answer: 0, ar: "we → have to." },
            { type: "fill", text: "My father ___ to drive to Aden. (has/have)", answer: "has", ar: "father مفرد غائب → has to." },
            { type: "fill", text: "They ___ to meet Uncle Ali. (has/have)", answer: "have", ar: "they → have to." },
            { type: "order", answer: "I have to do my homework", ar: "I + have to + do + my homework." }
          ],
          quiz: [
            { type: "mcq", q: "He ___ get up early.", options: ["has to", "have to", "to have", "having"], answer: 0, ar: "he → has to." },
            { type: "mcq", q: "The girls ___ buy presents.", options: ["have to", "has to", "having", "to has"], answer: 0, ar: "the girls جمع → have to." }
          ]
        }
      ],
      test: [
        { type: "mcq", q: "The owl ___ in trees.", options: ["lives", "live", "living", "lived"], answer: 0, ar: "it → lives." },
        { type: "mcq", q: "The fennec fox lives in the ___.", options: ["desert", "sea", "zoo cage", "school"], answer: 0, ar: "الصحراء." },
        { type: "fill", text: "The giraffe is the ___ animal. (tall)", answer: "tallest", ar: "الأطول = tallest." },
        { type: "mcq", q: "The mouse is the ___ animal.", options: ["smallest", "smaller", "small", "more small"], answer: 0, ar: "الأصغر = smallest." },
        { type: "fill", text: "She ___ to help her mum. (has/have)", answer: "has", ar: "she → has to." },
        { type: "mcq", q: "We ___ do our homework.", options: ["have to", "has to", "having", "to has"], answer: 0, ar: "we → have to." },
        { type: "order", answer: "The elephant is the biggest animal", ar: "الفاعل + is + the + biggest + animal." },
        { type: "mcq", q: "Superlative of 'fast':", options: ["fastest", "faster", "more fast", "fast"], answer: 0, ar: "fast → fastest." }
      ]
    },

    /* ============================ UNIT 7 ============================ */
    {
      id: 7, color: "#2D7DA6",
      title: "Jobs & Family",
      titleAr: "المهن والعائلة",
      summary: "نتعلّم أسماء المهن، العلاقات العائلية، نقول ماذا نريد أن نصبح، ونسأل عن الكمية.",
      lessons: [
        {
          id: "7.1",
          title: "Jobs",
          titleAr: "المهن",
          page: "68–69",
          intro: "نتعلّم أسماء المهن وأين يعمل كلّ شخص وماذا يفعل.",
          explain: [
            "من يعمل خارجًا: builder, painter, policeman, farmer, fisherman.",
            "من يعمل داخلًا: housewife, shopkeeper, secretary, doctor, dentist, nurse.",
            "من يصنع أشياء: carpenter, potter, dressmaker, baker. من ينقل الناس: taxi-driver, bus-driver, pilot."
          ],
          vocab: [
            { en: "builder", ar: "بنّاء", ex: "A builder works outside." },
            { en: "painter", ar: "دهّان / رسّام", ex: "A painter needs brushes." },
            { en: "carpenter", ar: "نجّار", ex: "A carpenter makes tables." },
            { en: "doctor", ar: "طبيب", ex: "A doctor takes care of people." },
            { en: "nurse", ar: "ممرّضة", ex: "A nurse works in a hospital." },
            { en: "pilot", ar: "طيّار", ex: "A pilot flies a plane." },
            { en: "farmer", ar: "مزارع", ex: "A farmer grows food." },
            { en: "fisherman", ar: "صيّاد سمك", ex: "A fisherman gets fish." },
            { en: "shopkeeper", ar: "صاحب محل", ex: "A shopkeeper sells things." },
            { en: "baker", ar: "خبّاز", ex: "A baker makes bread." },
            { en: "secretary", ar: "سكرتير(ة)", ex: "A secretary works in an office." },
            { en: "air-hostess", ar: "مضيفة طيران", ex: "An air-hostess works in a plane." }
          ],
          grammar: {
            title: "Jobs + a/an",
            ar: "نستخدم a قبل الحرف الساكن (a doctor) و an قبل الحرف المتحرّك (an air-hostess)."
          },
          ex: [
            { type: "mcq", q: "A ___ flies a plane.", options: ["pilot", "farmer", "baker", "nurse"], answer: 0, ar: "من يقود الطائرة = pilot." },
            { type: "mcq", q: "A ___ makes tables and chairs.", options: ["carpenter", "doctor", "pilot", "fisherman"], answer: 0, ar: "النجّار = carpenter." },
            { type: "fill", text: "A nurse takes care of sick ___. (people)", answer: "people", ar: "الممرّضة تعتني بالمرضى = people." },
            { type: "fill", text: "I'd like to be ___ air-hostess. (a/an)", answer: "an", ar: "air يبدأ بحرف متحرّك → an." },
            { type: "order", answer: "A carpenter works in a workshop", ar: "A carpenter + works + in + a + workshop." }
          ],
          quiz: [
            { type: "mcq", q: "Who makes bread?", options: ["a baker", "a pilot", "a nurse", "a builder"], answer: 0, ar: "الخبّاز يصنع الخبز." },
            { type: "mcq", q: "Who takes care of sick people?", options: ["a nurse", "a carpenter", "a farmer", "a painter"], answer: 0, ar: "الممرّضة تعتني بالمرضى." }
          ]
        },
        {
          id: "7.2",
          title: "Family Relationships",
          titleAr: "العلاقات العائلية",
          page: "70–77",
          intro: "نتعلّم تسمية أفراد العائلة وعلاقاتهم.",
          explain: [
            "<b>brother</b> أخ، <b>sister</b> أخت، <b>son</b> ابن، <b>daughter</b> ابنة.",
            "<b>uncle</b> عمّ/خال، <b>aunt</b> عمّة/خالة، <b>cousin</b> ابن/بنت العمّ أو الخال.",
            "مثال: <i>Aisha is my aunt. Ali is their son, so he is my cousin.</i>"
          ],
          vocab: [
            { en: "brother", ar: "أخ", ex: "Fuad is Ali's brother." },
            { en: "sister", ar: "أخت", ex: "Amal is Ali's sister." },
            { en: "son", ar: "ابن", ex: "This is my son." },
            { en: "daughter", ar: "ابنة", ex: "This is my daughter." },
            { en: "uncle", ar: "عمّ / خال", ex: "He is my uncle." },
            { en: "aunt", ar: "عمّة / خالة", ex: "Aisha is my aunt." },
            { en: "cousin", ar: "ابن/بنت العمّ أو الخال", ex: "Ali is my cousin." }
          ],
          grammar: {
            title: "Family + so",
            ar: "نشرح العلاقة بـ so (لذلك): Ali is their son, so he is my cousin."
          },
          ex: [
            { type: "mcq", q: "My father's brother is my ___.", options: ["uncle", "aunt", "cousin", "son"], answer: 0, ar: "أخو الأب = العمّ." },
            { type: "mcq", q: "My aunt's son is my ___.", options: ["cousin", "brother", "uncle", "daughter"], answer: 0, ar: "ابن الخالة/العمّة = cousin." },
            { type: "fill", text: "This is my ___. She is a nurse. (sister)", answer: "sister", ar: "الأخت = sister." },
            { type: "fill", text: "Aisha is my ___ . (father's sister)", answer: "aunt", ar: "أخت الأب = aunt." },
            { type: "order", answer: "Ali is their son so he is my cousin", ar: "Ali + is + their son + so + he + is + my cousin." }
          ],
          quiz: [
            { type: "mcq", q: "A girl child is a ___.", options: ["daughter", "son", "uncle", "aunt"], answer: 0, ar: "الابنة = daughter." },
            { type: "mcq", q: "My mother's sister is my ___.", options: ["aunt", "uncle", "cousin", "brother"], answer: 0, ar: "أخت الأم = aunt." }
          ]
        },
        {
          id: "7.3",
          title: "What Do You Want to Be?",
          titleAr: "ماذا تريد أن تصبح؟",
          page: "71–77",
          intro: "نتكلّم عن الوظيفة التي نريدها في المستقبل.",
          explain: [
            "نسأل: <b>What would you like to be?</b>",
            "نجيب: <b>I'd like to be a pilot.</b> / <b>I want to be a doctor.</b>",
            "نصف المهنة: <i>A nurse works in a hospital. She takes care of sick people.</i>"
          ],
          vocab: [
            { en: "want to be", ar: "يريد أن يصبح", ex: "I want to be a doctor." },
            { en: "would like to be", ar: "يودّ أن يصبح", ex: "I'd like to be a pilot." },
            { en: "workshop", ar: "ورشة", ex: "A carpenter works in a workshop." },
            { en: "uniform", ar: "زيّ موحّد", ex: "A nurse has to wear a uniform." },
            { en: "clinic", ar: "عيادة", ex: "A nurse works in a clinic." }
          ],
          grammar: {
            title: "want / would like + to be",
            ar: "نتبع want/would like بـ to be + المهنة: I'd like to be a pilot."
          },
          ex: [
            { type: "mcq", q: "What would you like to ___?", options: ["be", "are", "do is", "being"], answer: 0, ar: "السؤال عن المهنة = to be." },
            { type: "mcq", q: "I'd like to be ___ pilot.", options: ["a", "an", "the", "some"], answer: 0, ar: "pilot يبدأ بحرف ساكن → a." },
            { type: "fill", text: "A nurse has to wear a ___. (uniform)", answer: "uniform", ar: "الزيّ الموحّد = uniform." },
            { type: "fill", text: "A carpenter works in a ___. (workshop)", answer: "workshop", ar: "الورشة = workshop." },
            { type: "order", answer: "I would like to be a doctor", ar: "I would like + to be + a + doctor." }
          ],
          quiz: [
            { type: "mcq", q: "Correct: I'd like to be ___ air-hostess.", options: ["an", "a", "the", "some"], answer: 0, ar: "air متحرّك → an." },
            { type: "mcq", q: "Where does a nurse work?", options: ["a hospital", "a workshop", "a plane", "a farm"], answer: 0, ar: "الممرّضة في المستشفى." }
          ]
        },
        {
          id: "7.4",
          title: "How Much / How Many",
          titleAr: "كم (للكمية)",
          page: "73–77",
          intro: "نسأل عن الكمية: How much للمعدود وغير المعدود.",
          explain: [
            "<b>How much</b> مع غير المعدود: <i>How much sugar would you like?</i>",
            "<b>How many</b> مع المعدود (جمع): <i>How many pencils do you want?</i>",
            "الجواب بالكمية: <i>Two kilos. Half a kilo. Ten. Twenty.</i>"
          ],
          vocab: [
            { en: "How much…?", ar: "كم… (غير معدود)", ex: "How much sugar?" },
            { en: "How many…?", ar: "كم… (معدود)", ex: "How many pencils?" },
            { en: "sugar", ar: "سكّر", ex: "How much sugar would you like?" },
            { en: "kilo", ar: "كيلو", ex: "Two kilos, please." },
            { en: "half a kilo", ar: "نصف كيلو", ex: "Half a kilo of butter." },
            { en: "pencils", ar: "أقلام رصاص", ex: "How many pencils do you want?" },
            { en: "cups", ar: "أكواب", ex: "How many cups?" }
          ],
          grammar: {
            title: "How much vs How many",
            ar: "How much لغير المعدود (sugar, flour). How many للمعدود الجمع (pencils, cups)."
          },
          ex: [
            { type: "mcq", q: "How ___ sugar would you like?", options: ["much", "many", "old", "far"], answer: 0, ar: "sugar غير معدود → How much." },
            { type: "mcq", q: "How ___ pencils do you want?", options: ["many", "much", "old", "far"], answer: 0, ar: "pencils معدود → How many." },
            { type: "fill", text: "How much butter? — ___ a kilo. (half)", answer: "Half", ar: "نصف كيلو = Half a kilo." },
            { type: "fill", text: "How ___ cups do you need? (much/many)", answer: "many", ar: "cups معدود → many." },
            { type: "order", answer: "How many cups do you want", ar: "How many + cups + do + you + want." }
          ],
          quiz: [
            { type: "mcq", q: "How ___ flour? (uncountable)", options: ["much", "many", "old", "far"], answer: 0, ar: "flour غير معدود → much." },
            { type: "mcq", q: "How ___ books did you buy?", options: ["many", "much", "old", "far"], answer: 0, ar: "books معدود → many." }
          ]
        }
      ],
      test: [
        { type: "mcq", q: "A ___ flies a plane.", options: ["pilot", "farmer", "baker", "nurse"], answer: 0, ar: "الطيّار = pilot." },
        { type: "mcq", q: "A carpenter makes ___.", options: ["tables", "bread", "medicine", "clothes only"], answer: 0, ar: "النجّار يصنع الطاولات." },
        { type: "fill", text: "My father's brother is my ___.", answer: "uncle", ar: "أخو الأب = uncle." },
        { type: "mcq", q: "My aunt's son is my ___.", options: ["cousin", "brother", "uncle", "son"], answer: 0, ar: "ابن العمّة/الخالة = cousin." },
        { type: "fill", text: "I'd like to be ___ air-hostess. (a/an)", answer: "an", ar: "air متحرّك → an." },
        { type: "mcq", q: "How ___ sugar would you like?", options: ["much", "many", "old", "far"], answer: 0, ar: "sugar غير معدود → much." },
        { type: "order", answer: "I would like to be a doctor", ar: "I would like + to be + a + doctor." },
        { type: "mcq", q: "How ___ pencils do you want?", options: ["many", "much", "old", "far"], answer: 0, ar: "pencils معدود → many." }
      ]
    }
  ]
};

if (typeof module !== "undefined") module.exports = COURSE;
