document.addEventListener('DOMContentLoaded', () => {
    const hadithContainer = document.getElementById('hadith-container');
    const loadMoreButton = document.getElementById('load-more');

   

    const ahadith = [
    
        {
            text: "قال رسول الله ﷺ: «إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى».",
            source: "رواه البخاري ومسلم",
            explanation: "هذا الحديث يشير إلى أهمية النية في الأعمال، وأن الأجر يعتمد على نية الشخص."
        },
        {
            text: "قال رسول الله ﷺ: «لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه».",
            source: "رواه البخاري ومسلم",
            explanation: "هذا الحديث يوضح أن من علامات الإيمان الحقيقي هو حب الخير للآخرين كما نحبه لأنفسنا."
        },
        {
            text: "قال رسول الله ﷺ: «من كان يؤمن بالله واليوم الآخر فليقل خيرًا أو ليصمت».",
            source: "رواه البخاري ومسلم",
            explanation: "يحثنا الحديث على قول الخير أو التزام الصمت لتجنب الأذى بالقول."
        },
        {
            text: "قال رسول الله ﷺ: «المسلم من سلم المسلمون من لسانه ويده».",
            source: "رواه البخاري ومسلم",
            explanation: "يشير الحديث إلى أن المسلم الحقيقي هو من لا يؤذي الآخرين بلسانه أو يده."
        },
        {
            text: "قال رسول الله ﷺ: «من حسن إسلام المرء تركه ما لا يعنيه».",
            source: "رواه الترمذي",
            explanation: "يوضح الحديث أن من علامات حسن الإسلام هو ترك الأمور التي لا تهمنا أو تعنينا."
        },
        {
            text: "قال رسول الله ﷺ: «الدين النصيحة».",
            source: "رواه مسلم",
            explanation: "النصيحة هي أساس الدين، ويجب أن تكون موجهة بإخلاص."
        },
        {
            text: "قال رسول الله ﷺ: «تبسمك في وجه أخيك صدقة».",
            source: "رواه الترمذي",
            explanation: "يبين الحديث أن الابتسامة في وجه الآخرين تعد صدقة."
        },
        {
            text: "قال رسول الله ﷺ: «لا ضرر ولا ضرار».",
            source: "رواه ابن ماجه",
            explanation: "الحديث يدعو إلى عدم الإضرار بالآخرين وتجنب أي شكل من أشكال الأذى."
        },
        {
            text: "قال رسول الله ﷺ: «يسِّروا ولا تعسِّروا، وبشِّروا ولا تنفِّروا».",
            source: "رواه البخاري",
            explanation: "الحديث يشجع على التيسير في الأمور والدعوة إلى التفاؤل والبشر."
        },
        {
            text: "قال رسول الله ﷺ: «إن الله لا ينظر إلى صوركم وأموالكم، ولكن ينظر إلى قلوبكم وأعمالكم».",
            source: "رواه مسلم",
            explanation: "يؤكد الحديث على أهمية النية والعمل الصالح، وليس المظهر الخارجي."
        },
        {
            text: "إنما الأعمال بالنيات",
            source: "رواه البخاري ومسلم",
            explanation: "هذا الحديث يوضح أهمية النية في الأعمال. فالأعمال تُقبل بناءً على نية الإنسان، وليس فقط على أساس المظهر الخارجي للفعل. فعلى المسلم أن يصحح نياته ويجعلها خالصة لوجه الله، لأن النية هي معيار قبول العمل."
        },
        {
            text: "المسلم من سلم المسلمون من لسانه ويده",
            source: "رواه البخاري ومسلم",
            explanation: "يعني الحديث أن المسلم الحقيقي هو من يكف الأذى عن الآخرين سواء بلسانه أو بيده. ويتضمن ذلك الامتناع عن إيذاء الناس بالكلام أو بالأفعال. كما أن الهجرة في الإسلام هي هجر المعاصي والذنوب، وليست فقط الهجرة الجغرافية."
        },
        {
            text: "من كان يؤمن بالله واليوم الآخر فليقل خيراً أو ليصمت",
            source: "رواه البخاري ومسلم",
            explanation: "هذا الحديث يشير إلى أهمية ضبط الكلام، فالمؤمن يجب أن يختار كلماته بعناية، فإن لم يكن لديه ما يقوله من الخير فالأفضل أن يصمت. كما يركز الحديث على أهمية حسن الجوار وإكرام الضيوف كجزء من الإيمان."
        },
        {
            text: "لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه",
            source: "رواه البخاري ومسلم",
            explanation: "يعلمنا هذا الحديث أن الإيمان الكامل لا يتحقق إلا عندما يحب المسلم الخير لأخيه المسلم كما يحبه لنفسه. وهذا يشمل النواحي المادية والمعنوية، مما يرسخ روح الأخوة والتعاون في المجتمع الإسلامي."
        },
        {
            text: "الدين النصيحة",
            source: "رواه مسلم",
            explanation: "النصيحة تعتبر أساساً في الدين، وهي تعني الصدق والإخلاص في التعامل. النصيحة لله تعني الإخلاص في العبادة، وللكتاب تعني اتباعه، وللرسول تعني اتباع سنته، وللأئمة تعني طاعتهم في المعروف، ولعامة المسلمين تعني توجيههم إلى الخير."
        },
        {
            text: "اتقِ الله حيثما كنت",
            source: "رواه الترمذي وقال: حديث حسن صحيح",
            explanation: "يوصي الحديث بتقوى الله في جميع الأحوال، أي مراقبة الله في السر والعلن. كما يشير إلى أهمية فعل الخير بعد الذنوب لتكفيرها، وحسن الخلق في التعامل مع الناس."
        },
        {
            text: "أحب الأعمال إلى الله أدومها وإن قل",
            source: "رواه البخاري ومسلم",
            explanation: "يعلمنا هذا الحديث أن الله يحب الأعمال التي تستمر حتى لو كانت قليلة، لأن الاستمرارية تعكس الإخلاص والاستمرارية في الطاعة."
        },
        {
            text: "من حسن إسلام المرء تركه ما لا يعنيه",
            source: "رواه الترمذي وقال: حديث حسن صحيح",
            explanation: "يعلمنا هذا الحديث أن من علامات حسن إسلام الإنسان ترك الأمور التي لا تعنيه ولا تفيده، سواء في الدنيا أو الآخرة."
        },
        {
            text: "إن الله لا ينظر إلى صوركم وأموالكم ولكن ينظر إلى قلوبكم وأعمالكم",
            source: "رواه مسلم",
            explanation: "هذا الحديث يوضح أن الله يهتم بحالة القلوب والأعمال وليس بالمظاهر الخارجية أو الثروات. القلوب النقية والأعمال الصالحة هي ما يُهم في ميزان الله."
        },
        {
            text: "الدنيا سجن المؤمن وجنة الكافر",
            source: "رواه مسلم",
            explanation: "يشير الحديث إلى أن الدنيا هي موطن ابتلاء وتضييق على المؤمن، فهي سجن له مقارنة بما ينتظره في الآخرة من نعيم. أما الكافر، فالدنيا هي أقصى ما يمكن أن يصل إليه من لذة، لذلك هي بمثابة جنة له."
        },
        {
            text: "الحياء لا يأتي إلا بخير",
            source: "رواه البخاري ومسلم",
            explanation: "هذا الحديث يبين أن الحياء خلق حسن يجلب الخير لصاحبه، فهو يمنع من الوقوع في المعاصي ويدفع إلى فعل الخير."
        },
        {
            text: "من كان يؤمن بالله واليوم الآخر فلا يؤذِ جاره",
            source: "رواه البخاري ومسلم",
            explanation: "يعلمنا هذا الحديث أن الإيمان الحقيقي يستلزم من الإنسان أن يكون محسنًا لجيرانه، وأن لا يؤذيهم بأي شكل من الأشكال."
        },
        {
            text: "الرفق لا يكون في شيء إلا زانه، ولا ينزع من شيء إلا شانه",
            source: "رواه مسلم",
            explanation: "يوضح هذا الحديث أن الرفق واللين يجملان الأمور ويزيدانها حسناً، في حين أن القسوة والعنف تشوهانها."
        },
        {
            text: "أفضل الصدقة أن يتعلم المرء المسلم علما ثم يعلمه أخاه المسلم",
            source: "رواه ابن ماجه",
            explanation: "يشير الحديث إلى أن من أفضل أشكال الصدقة أن ينقل المسلم العلم الذي تعلمه إلى أخيه المسلم، لأنه بذلك يساهم في نشر الفائدة والعلم في المجتمع."
        },
        {
            text: "كل المسلم على المسلم حرام دمه وماله وعرضه",
            source: "رواه مسلم",
            explanation: "يعلمنا هذا الحديث أن كل مسلم يجب أن يحترم حياة وأموال وكرامة المسلمين الآخرين، وأن لا يتعدى عليها بأي شكل."
        },
        {
            text: "من لا يشكر الناس لا يشكر الله",
            source: "رواه الترمذي",
            explanation: "يشير هذا الحديث إلى أن من لا يشكر الناس على إحسانهم لا يكون قد شكر الله على نعمه، لأن شكر الناس جزء من شكر الله."
        },
        {
            text: "المؤمن القوي خير وأحب إلى الله من المؤمن الضعيف",
            source: "رواه مسلم",
            explanation: "يعلمنا هذا الحديث أن الله يحب المؤمن الذي يتمتع بالقوة سواء كانت قوة في الإيمان أو في الجسم، وذلك لأنه يكون أكثر قدرة على الطاعة ونفع الناس."
        },
        {
            text: "تهادوا تحابوا",
            source: "رواه البخاري في الأدب المفرد",
            explanation: "يشير الحديث إلى أن تبادل الهدايا بين الناس يزرع المحبة والألفة بينهم، ويقوي الروابط الاجتماعية."
        },
        {
            text: "أقربكم مني منزلة يوم القيامة أحاسنكم أخلاقاً",
            source: "رواه الترمذي",
            explanation: "يعلمنا الحديث أن الأخلاق الحسنة تقرب الإنسان من النبي ﷺ في الآخرة، مما يدل على أهمية الأخلاق في الإسلام."
        },
        {
            text: "من سلك طريقًا يلتمس فيه علمًا سهل الله له به طريقًا إلى الجنة",
            source: "رواه مسلم",
            explanation: "يشير الحديث إلى أن من يجتهد في طلب العلم فإن الله يسهل له طريقًا إلى الجنة، لأن العلم يقود إلى الفهم والعمل الصالح."
        },
        {
            text: "من لا يَرحم لا يُرحم",
            source: "رواه البخاري ومسلم",
            explanation: "يعلمنا هذا الحديث أن من لا يرحم الناس لا يستحق رحمة الله، لذلك ينبغي على المسلم أن يكون رحيمًا مع الآخرين."
        },
        {
            text: "الظلم ظلمات يوم القيامة",
            source: "رواه البخاري ومسلم",
            explanation: "يشير الحديث إلى أن الظلم الذي يرتكبه الإنسان في الدنيا سيكون سببًا في ظلمات تحيط به يوم القيامة، مما يجعله في عذاب شديد."
        },
        {
            text: "أفضل الذكر لا إله إلا الله",
            source: "رواه الترمذي وابن ماجه",
            explanation: "يشير الحديث إلى أن أفضل أنواع الذكر هو التوحيد بقول \"لا إله إلا الله\"، لأنه يحقق معنى التوحيد الخالص."
        },
        {
            text: "من أحب أن يُبسط له في رزقه، ويُنسأ له في أثره، فليصل رحمه",
            source: "رواه البخاري ومسلم",
            explanation: "يعلمنا الحديث أن صلة الرحم تزيد في الرزق وتطيل في العمر، فهي من الأعمال التي تجلب بركات الله."
        },
        {
            text: "إذا مات ابن آدم انقطع عمله إلا من ثلاث: صدقة جارية، أو علم يُنتفع به، أو ولد صالح يدعو له",
            source: "رواه مسلم",
            explanation: "يشير الحديث إلى أن أعمال الإنسان تنقطع بموته إلا ثلاثة: الصدقة الجارية، والعلم الذي ينتفع به الناس، والدعاء من الولد الصالح."
        }
       
    ];

    let currentIndex = 0;

    const loadHadiths = (count) => {
        for (let i = 0; i < count; i++) {
            if (currentIndex < ahadith.length) {
                const hadithData = ahadith[currentIndex];
                
                const hadithDiv = document.createElement('div');
                hadithDiv.className = 'hadith';

                const hadithText = document.createElement('h3');
                hadithText.textContent = hadithData.text;

                const hadithSource = document.createElement('p');
                hadithSource.innerHTML = `<strong>المصدر:</strong> ${hadithData.source}`;

                const hadithExplanation = document.createElement('p');
                hadithExplanation.innerHTML = `<strong>الشرح:</strong> ${hadithData.explanation}`;

                hadithDiv.appendChild(hadithText);
                hadithDiv.appendChild(hadithSource);
                hadithDiv.appendChild(hadithExplanation);

                hadithContainer.appendChild(hadithDiv);
                currentIndex++;
            } else {
                loadMoreButton.style.display = 'none';
                break;
            }
        }
    };

    loadHadiths(3);

    loadMoreButton.addEventListener('click', () => {
        loadHadiths(3);
    });
});
