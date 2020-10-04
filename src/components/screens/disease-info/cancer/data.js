import actinicImg from "../../../../images/facts/actinic.svg";
import bccImg from "../../../../images/facts/bcc.svg";
import malonamaImg from "../../../../images/facts/malonama.svg";
import mercelImg from "../../../../images/facts/mercel.svg";
import squamousImg from "../../../../images/facts/squamous.svg";

export const data = [
  // 0 => Actinic
  {
    cancerType: "Actinic Keratosis",
    route: "/info/actinic-keratosis",
    overview: [
      "Actinic keratosis (AK) is the most common precancer that forms on skin damaged by chronic exposure to ultraviolet (UV) rays from the sun and/or indoor tanning.Solar keratosis is another name for the condition.",
      "AKs result from long-term exposure to ultraviolet (UV) radiation. This means that if you already have an AK, you are likely to develop more actinic keratoses (plural) in the future. This puts you at a higher risk for skin cancer, since AKs can develop into squamous cell carcinoma (SCC), a common and sometimes invasive form of the disease.",
    ],
    quickLinks: [
      "What do actinic keratoses look like ?",
      " Where do they appear?",
      "Should I be concerned?",
      "What do I need to know?",
      "I think I have an actinic keratosis",
    ],
    fact: {
      imgUrl: actinicImg,
      heading: "IT’S A FACT: ACTINIC KERATOSIS IS WIDESPREAD",
      bigText: "10 MILLION",
      finalText: "Indians have one or more AKs.",
    },
    warning: {
      heading: "HOW TO SPOT ACTINIC KERATOSES ?",
      warnings: [
        {
          title: "TEXTURE",
          data:
            "Flat to slightly raised, scaly, crusty, rough, sometimes with a raised horn shape or bump.",
        },
        {
          title: "SIZE",
          data:
            "Dimensions vary from a tiny spot to as much as an inch in diameter.",
        },
        {
          title: "COLOR",
          data: " Red, tan, pink, skin-colored, brown or silvery.",
        },
        {
          title: "LOCATION",
          data:
            "Frequently on ultraviolet (UV) exposed areas including the face, lips, ears, scalp, shoulders, neck, back of the hands and forearms. Actinic cheilitis is a variant of AK that arises on the lower lip.",
        },
      ],
    },
    riskFactor: {
      para: [
        "Actinic keratosis (AK) is a very common skin precancer. Understanding your risk factors along with what causes AK can help you prevent it from developing. Being aware of your disease risk will also help you spot AKs early, when they are highly treatable. If left untreated, they can turn into squamous cell carcinoma, a type of skin cancer.",
      ],
      heading: "THESE FACTORS INCREASE YOUR RISK",
      risks: [
        {
          title: "History of unprotected exposure",
          text:
            "to ultraviolet (UV) radiation from the sun or indoor tanning. This includes people who work outdoors in the sun, people with a bald scalp or thinning hair and those who have had sunburns.",
        },
        {
          title: "Geographic location: ",
          text:
            "The closer to the equator you live, the more likely you are to have AKs.",
        },
        {
          title: "Weakened immune system",
          text: "due to a medical condition or medications.",
        },
        {
          title: "Fair skin: ",
          text:
            "While anyone can develop AKs, they occur far more frequently in people with fair skin.",
        },
      ],
    },
    treatment: {
      heading: "Reduce Your Risk of Developing Skin Cancer",
      para: [
        "If you have one or more actinic keratoses (AKs), it’s a sign of skin damage that puts you at a high risk for developing skin cancer. Identifying and treating these precancerous lesions helps you reduce that risk. Your treatment options depend on how many lesions you have, where they are, your age and overall health. Options include:",
      ],
      treatments: [
        "Surgical procedures",
        "Topical treatments",
        "Photodynamic therapy",
        "Combination therapy",
      ],
      referLink:
        "https://www.skincancer.org/skin-cancer-information/actinic-keratosis/actinic-keratosis-treatment-options/#surgical",
    },
    faqs: [
      {
        text: [
          "AKs often appear as small dry, scaly or crusty patches of skin. They may be red, light or dark tan, white, pink, flesh-toned or a combination of colors and are sometimes raised. Because of their rough texture, actinic keratoses are often easier to feel than see. For photos, go to our warning signs page.",
        ],
      },
      {
        text: [
          "The lesions frequently arise on sun-exposed areas of the face, lips, ears, scalp, shoulders, neck and the back of the hands and forearms. Another form of AK known as actinic cheilitis appears on the lower lip.",
        ],
      },
      {
        text: [
          "Even though just 5-10 percent of AKs turn into skin cancer, the vast majority of squamous cell carcinomas start off as AKs. That’s why it’s best to play it safe and see your dermatologist if you think you may have an AK.",
        ],
      },
      {
        text: [
          "AKs are evidence of sustained sun damage. Having them raises your lifetime risk for skin cancer. Since having one AK means that it’s likely you have already developed more, this may translate into an especially elevated risk for developing an SCC.",
          "An untreated SCC can become invasive and even life-threatening.",
        ],
      },
      {
        text: [
          "If detected early, actinic keratoses can be treated before they develop into skin cancer.",
          "See your dermatologist, who can accurately diagnose the lesion and recommend an effective treatment. It’s best to diagnose and treat AKs early, before they become cancerous. This is especially true for AKs that arise on the head or neck, where skin cancers may be more aggressive.",
          "Protect yourself to help prevent further sun damage. Seek shade and protect your skin against UV exposure every day, even when it’s cloudy, using broad-spectrum sunscreen and sun safe clothing, hats and eyewear. Avoid indoor tanning entirely and do not get sunburned.",
        ],
      },
    ],
  },

  //
  //
  //
  //
  // 1 => Basel
  {
    cancerType: "Basal Cell Carcinoma",
    route: "/info/basal-cell-carcinoma",
    overview: [
      "Basal cell carcinoma (BCC) is the most common form of skin cancer and the most frequently occurring form of all cancers. In the U.S. alone, more than 4 million cases are diagnosed each year. BCCs arise from abnormal, uncontrolled growth of basal cells.",
      "Because BCCs grow slowly, most are curable and cause minimal damage when caught and treated early. Understanding BCC causes, risk factors and warning signs can help you detect them early, when they are easiest to treat and cure.",
    ],
    quickLinks: [
      "What is a basal cell?",
      "What does BCC look like?",
      "How dangerous is BCC?",
      "How widespread is BCC?",
    ],
    fact: {
      imgUrl: bccImg,
      heading: "FACT:",
      bigText: "BCC",
      finalText: "is serious and should be addressed as soon as possible.",
    },
    warning: {
      heading: "HOW TO SPOT ACTINIC KERATOSES ?",
      warnings: [
        {
          title: "An open sore that does not heal",
          data:
            "And may bleed, ooze or crust. The sore might persist for weeks, or appear to heal and then come back.",
        },
        {
          title: "A reddish patch or irritated area",
          data:
            "On the face, chest, shoulder, arm or leg that may crust, itch, hurt or cause no discomfort.",
        },
        {
          title: "A shiny bump or nodule",
          data:
            "that is pearly or clear, pink, red or white. The bump can also be tan, black or brown, especially in dark-skinned people, and can be mistaken for a normal mole.",
        },
        {
          title: "A small pink growth",
          data:
            "with a slightly raised, rolled edge and a crusted indentation in the center that may develop tiny surface blood vessels over time.",
        },
        {
          title: "A scar-like area ",
          data:
            "that is flat white, yellow or waxy in color. The skin appears shiny and taut, often with poorly defined borders. This warning sign may indicate an invasive BCC.",
        },
      ],
    },
    riskFactor: {
      para: [
        "Basal cell carcinoma (BCC) is caused by damage and subsequent DNA changes to the basal cells in the outermost layer of skin. Exposure to ultraviolet (UV) radiation from the sun and indoor tanning is the major cause of BCCs and most skin cancers.",
        "Understanding what causes BCC and the factors that increase your risk of getting it can help you prevent the disease or detect it in its earliest stages, when it’s easiest to treat.",
      ],
      heading: "These factors increase your BCC risk:",
      risks: [
        {
          title: "UV exposure",
          text: " from the sun or indoor tanning.",
        },
        {
          title: "History of skin cancer: ",
          text: " including squamous cell carcinoma (SCC) or melanoma.",
        },
        {
          title: "Age over 50:",
          text: " Most BCCs appear in people over age 50.",
        },
        {
          title: "Fair skin: ",
          text: " People with fair skin have an increased risk.",
        },
        {
          title: "Male gender: ",
          text: "Men are more likely to develop BCC.",
        },
        {
          title: "Chronic infections",
          text: "and skin inflammation from burns, scars and other conditions.",
        },
      ],
    },
    treatment: {
      heading: "Effective Options for Early and Advanced BCC",
      para: [
        "When detected early, most basal cell carcinomas (BCCs) can be treated and cured. Prompt treatment is vital, because as the tumor grows, it becomes more dangerous and potentially disfiguring, requiring more extensive treatment. Certain rare, aggressive forms can be fatal if not treated promptly.",
        "If you’ve been diagnosed with a small or early BCC, a number of effective treatments can usually be performed on an outpatient basis, using a local anesthetic with minimal pain. Afterwards, most wounds can heal naturally, leaving minimal scarring.",
      ],
      treatments: [
        "Curettage and electrodesiccation (electrosurgery)",
        "Mohs surgery",
        "Excisional surgery",
        "Radiation therapy",
        "Photodynamic therapy",
        "Cryosurgery",
        "Laser surgery",
        "Topical medications",
        "Oral medications for advanced BCC",
      ],
      referLink:
        "https://www.skincancer.org/skin-cancer-information/basal-cell-carcinoma/bcc-treatment-options/#curettage",
    },
    faqs: [
      {
        text: [
          "One of three main types of cells in the top layer of the skin, basal cells shed as new ones form. BCC most often occurs when DNA damage from exposure to ultraviolet (UV) radiation from the sun or indoor tanning triggers changes in basal cells in the outermost layer of skin (epidermis), resulting in uncontrolled growth.",
        ],
      },
      {
        text: [
          "BCCs can look like open sores, red patches, pink growths, shiny bumps, scars or growths with slightly elevated, rolled edges and/or a central indentation. At times, BCCs may ooze, crust, itch or bleed. The lesions commonly arise in sun-exposed areas of the body. In patients with darker skin, about half of BCCs are pigmented (meaning brown in color).",
          "It’s important to note that BCCs can look quite different from one person to another. For more images and information on BCC signs, symptoms and early detection strategies, visit our BCC Warning Signs page.",
        ],
      },
      {
        text: [
          "While BCCs rarely spread beyond the original tumor site, if allowed to grow, these lesions can be disfiguring and dangerous. Untreated BCCs can become locally invasive, grow wide and deep into the skin and destroy skin, tissue and bone. The longer you wait to have a BCC treated, the more likely it is to recur, sometimes repeatedly.",
          "There are some highly unusual, aggressive cases when BCC spreads to other parts of the body. In even rarer instances, this type of BCC can become life-threatening.",
        ],
      },
      {
        text: [
          "Basal cell carcinoma is quite common, and the number of reported cases in the U.S. has steadily increased.",
        ],
        bulletPoints: [
          "More than 4 million Americans are diagnosed with BCC each year.",
          "More than one out of every three new cancers are skin cancers, and the vast majority are BCCs.",
          "The diagnosis and treatment of nonmelanoma skin cancers, including BCC and squamous cell carcinoma (SCC), increased up to 77 percent between 1994 and 2014.",
        ],
      },
    ],
  },

  //
  //
  //
  //
  // 2 => Melanoma
  {
    cancerType: "Melanoma",
    route: "/info/melanoma",
    overview: [
      "Melanoma is a serious form of skin cancer that begins in cells known as melanocytes. While it is less common than basal cell carcinoma (BCC) and squamous cell carcinoma (SCC), melanoma is more dangerous because of its ability to spread to other organs more rapidly if it is not treated at an early stage.",
      "Learn more about melanoma types, risk factors, causes, warning signs and treatment.",
    ],
    quickLinks: [
      "What is a melanocyte?",
      "What does melanoma look like?",
      "How dangerous is melanoma?",
      "What are the four main types of melanoma of the skin?",
      "Skin Cancer Awareness Social Media Toolkit",
    ],

    fact: {
      imgUrl: malonamaImg,
      heading: "FACT:",
      bigText: "70-80% Melanoma",
      finalText: "arise on normal-looking skin.",
    },
    warning: {
      heading: "What You Need to Know About Early Detection ?",
      warnings: [
        {
          title: "A is for Asymmetry",
          data:
            "Most melanomas are asymmetrical. If you draw a line through the middle of the lesion, the two halves don’t match, so it looks different from a round to oval and symmetrical common mole.",
        },
        {
          title: "B is for Border",
          data:
            "Melanoma borders tend to be uneven and may have scalloped or notched edges, while common moles tend to have smoother, more even borders.",
        },
        {
          title: "C is for Color",
          data:
            "Multiple colors are a warning sign. While benign moles are usually a single shade of brown, a melanoma may have different shades of brown, tan or black. As it grows, the colors red, white or blue may also appear.",
        },
        {
          title: "D is for Diameter or Dark",
          data:
            "While it’s ideal to detect a melanoma when it is small, it’s a warning sign if a lesion is the size of a pencil eraser (about 6 mm, or ¼ inch in diameter) or larger. Some experts say it is also important to look for any lesion, no matter what size, that is darker than others. Rare, amelanotic melanomas are colorless.",
        },
        {
          title: "E is for Evolving",
          data:
            "Any change in size, shape, color or elevation of a spot on your skin, or any new symptom in it, such as bleeding, itching or crusting, may be a warning sign of melanoma.",
        },
      ],
    },
    riskFactor: {
      para: [
        "Skin cancers like melanoma have damaged DNA (mutations) in skin cells that lead to uncontrolled growth of these cells. Ultraviolet (UV) rays from the sun or tanning beds damage DNA in your skin cells. Your immune system repairs some of this damage but not all. Over time, the remaining DNA damage can lead to mutations that cause skin cancer. Many other factors also play a role in increasing the risk for melanoma, including genetics (family history), skin type or color, hair color, freckling and number of moles on the body.",
        "Understanding what causes melanoma and whether you’re at high risk of developing the disease can help you prevent it or detect it early when it is easiest to treat and cure.",
      ],
      heading: "These factors increase your melanoma risk:",
      risks: [
        {
          title: "Unprotected or excessive UV exposure ",
          text: "from the sun or indoor tanning.",
        },
        {
          title: "History of skin cancer: ",
          text: " including squamous cell carcinoma (SCC) or melanoma.",
        },
        {
          title: "Weakened immune system ge over 50:",
          text: "due to a medical condition or medications.",
        },
        {
          title: "Many moles: ",
          text:
            "The more moles you have on your body, the higher your risk for melanoma. Also, having large moles (larger than a tip of a pencil eraser), or any atypical moles, increases the risk for melanoma.",
        },
        {
          title: "Fair skin: ",
          text:
            "Melanoma occurs more frequently in people with fair skin, light eyes and light or red hair.",
        },
        {
          title: "Skin cancer history: ",
          text:
            "People who have already had melanoma or nonmelanoma skin cancers run a greater risk of developing melanoma in the future.",
        },
        {
          title: "Genetics: ",
          text:
            "Melanoma can run in families – one in every 10 patients has a family member who also has had the disease.",
        },
      ],
    },
    treatment: {
      heading: "Historic Progress. New Options. More Hope.",
      para: [
        "While melanoma is one of the most dangerous forms of skin cancer, promising new treatment options are improving quality of life and increasing survival rates for patients with advanced melanoma.",
        "If you’ve been diagnosed, your treatment choices depend on the stage of the disease, the location of the tumor and your overall health. Options include:",
      ],
      treatments: [
        "Surgical removal of the melanoma",
        "Immunotherapy",
        "Targeted therapy",
        "Chemotherapy",
        "Radiation",
      ],
      referLink:
        "https://www.skincancer.org/skin-cancer-information/melanoma/melanoma-treatments/#surgical",
    },
    faqs: [
      {
        text: [
          "Melanocytes are skin cells found in the upper layer of skin. They produce a pigment known as melanin, which gives skin its color. There are two types of melanin: eumelanin and pheomelanin. When skin is exposed to ultraviolet (UV) radiation from the sun or tanning beds, it causes skin damage that triggers the melanocytes to produce more melanin, but only the eumelanin pigment attempts to protect the skin by causing the skin to darken or tan. Melanoma occurs when DNA damage from burning or tanning due to UV radiation triggers changes (mutations) in the melanocytes, resulting in uncontrolled cellular growth.",
        ],
      },
      {
        text: [
          "Melanomas present in many different shapes, sizes and colors. That’s why it’s tricky to provide a comprehensive set of warning signs. Since detecting melanoma early is so vital, we’ve provided common signs, symptoms, images and early detection strategies on our Melanoma Warning Signs page.",
        ],
      },
      {
        text: [
          "Melanoma is usually curable when detected and treated early. Once melanoma has spread deeper into the skin or other parts of the body, it becomes more difficult to treat and can be deadly.",
        ],
        bulletPoints: [
          "The estimated five-year survival rate for U.S. patients whose melanoma is detected early is about 99 percent.",
          "An estimated 6,850 people (4,610 men and 2,240 women) will die of melanoma in the U.S. in 2020.",
        ],
      },
      {
        text: [
          "Basal cell carcinoma is quite common, and the number of reported cases in the U.S. has steadily increased.",
        ],
        bulletPoints: [
          "An estimated 196,060 cases of melanoma will be diagnosed in the U.S. in 2020.",
          "Of those, 95,710 cases will be noninvasive and confined to the top layer of skin (in situ). An estimated 100,350 cases will be invasive, penetrating into the skin’s second layer.",
        ],
      },
      {
        bulletPoints: [
          "Superficial spreading melanoma",
          "Lentigo maligna",
          "Nodular melanoma",
        ],
      },
    ],
  },

  //
  //
  //
  //
  // 3 => Merkel Cell
  {
    cancerType: "Merkel Cell Carcinoma",
    route: "/info/merkel-cell-carcinoma",
    overview: [
      "Merkel cell carcinoma (MCC) is a rare, aggressive form of skin cancer with a high risk for returning (recurring) and spreading (metastasizing), often within two to three years after initial diagnosis.",
      "How rare is it? Approximately 3,000 new cases are diagnosed annually in the U.S. Experts expect that this will increase to 3,250 cases diagnosed annually by 2025.",
    ],
    quickLinks: [
      "What is a Merkel cell?",
      "What does MCC look like?",
      "How dangerous is MCC?",
    ],

    fact: {
      imgUrl: mercelImg,
      heading:
        "The reported annual incidence of Merkel cell carcinoma (MCC) is",
      bigText: " 0.2-0.45 case",
      finalText: "per 100,000 population.",
    },
    warning: {
      heading: "Warning Signs What You Need to Know",
      warnings: [
        {
          title: "A:",
          data: "ASYMPTOMATIC lesion, not painful or tender",
        },
        {
          title: "E:",
          data: "Lesion is EXPANDING rapidly",
        },
        {
          title: "I:",
          data: "You are IMMUNOsuppressed.",
        },
        {
          title: "O:",
          data: "You are OLDER than 50",
        },
        {
          title: "U:",
          data: "The lesion appears on UV-exposed skin",
        },
      ],
    },
    riskFactor: {
      para: [
        "Anything that increases your likelihood of developing a disease like Merkel cell carcinoma (MCC) is called a risk factor.",
        "These factors put you at increased risk for the disease. For more information about risk factors, click the links below.",
      ],
      heading: "The Risks. The Causes. What You Can Do.",
      risks: [
        {
          title: "History of unprotected exposure",
          text: "to ultraviolet (UV) radiation from the sun or indoor tanning.",
        },
        {
          title: "History of skin cancer: ",
          text: " including squamous cell carcinoma (SCC) or melanoma.",
        },
        {
          title: "Weakened immune system",
          text: "due to a medical condition or medications.",
        },
        {
          title: "History of skin cancer",
          text:
            "ncluding basal cell carcinoma (BCC), squamous cell carcinoma (SCC) or melanoma.",
        },
        {
          title: "Age: ",
          text: "Most people who develop MCC are over 50 years old.",
        },
        {
          title: "Gender: ",
          text: "Men are more likely to get the disease",
        },
        {
          title: "Fair Skin: ",
          text:
            "People with fair skin are at greater risk for MCC, but it can affect anyone.",
        },
      ],
    },
    treatment: {
      heading: "Know Your Options",
      para: [
        "Merkel cell carcinoma is rare and dangerous but treatable, especially when found at an early stage. Because MCC is such an uncommon form of skin cancer, it is best to seek treatment at an academic center with physicians who have specialized expertise in caring for people with this particular disease. A multi-disciplinary team experienced in the care of MCC is recommended. Dermatologists, surgeons, medical oncologists and radiation oncologists need to confer to determine the best plan for a given case.",
        "While treatment options for MCC depend on the stage of the disease and the overall health of the patient, treatment includes surgical removal of the primary tumor along with:",
      ],
      treatments: ["Radiation", "Immunotherapy", "Chemotherapy"],
      referLink:
        "https://www.skincancer.org/skin-cancer-information/merkel-cell-carcinoma/mcc-treatment/#radiation",
    },
    faqs: [
      {
        text: [
          "Merkel cells are located deep in the top layer of skin. Merkel cells are connected to nerves, signaling touch sensation as “touch receptors.” MCC was named after Merkel cells due to the similar microscopic features; however, recent research suggests that it is unlikely that MCC originates directly from normal Merkel cells.",
          "Normal Merkel cells in the skin: In this illustration of a cross-section of the skin, normal Merkel cells are shown in red and connect to nerves shown in yellow. The structures drawn include the epidermis (upper third), dermis (middle), and deeper adipose layer containing the fatty tissue. Arteries are depicted in red and veins are blue. Figure copyright by Paul Nghiem & Quade Medical Group.",
        ],
      },
      {
        text: [
          "MCC tumors often, but not always, appear on sun-exposed areas of the body. The tumors are not nearly as distinctive as other skin cancers and can appear as a pearly pimple-like lump, sometimes skin-colored, red, purple or bluish-red, though they are rarely tender to the touch. The rapid speed at which they grow is what often causes patients and doctors to take notice.",
        ],
      },
      {
        text: [
          "While MCC is about three to five times more likely to be deadly than melanoma, with early detection, MCC can be treated successfully. If you think you might have MCC, see your doctor. Treatment becomes increasingly difficult once the disease has spread, but new options are now available. Thanks to advances in the field of immunotherapy, MCC survival rates are improving.",
        ],
      },
    ],
  },

  //
  //
  //
  //
  // 4 => Squamous Cell
  {
    cancerType: "Squamous Cell Carcinoma",
    route: "/info/squamous-cell-carcinoma",
    overview: [
      "Squamous cell carcinoma (SCC) of the skin is the second most common form of skin cancer, characterized by abnormal, accelerated growth of squamous cells. When caught early, most SCCs are curable.",
      "SCC of the skin is also known as cutaneous squamous cell carcinoma (cSCC). Adding the word “cutaneous” identifies it as a skin cancer and differentiates it from squamous cell cancers that can arise inside the body, in places like the mouth, throat or lungs.",
    ],
    quickLinks: [
      "What is a squamous cell?",
      "What does SCC look like?",
      "How dangerous is SCC",
      "How widespread is SCC?",
    ],
    fact: {
      imgUrl: squamousImg,
      heading: "Oral cancer is in approximately",
      bigText: "30% ",
      finalText: "of all cancers in India.",
    },
    warning: {
      heading: "Early Detection Best Practices",
      warnings: [
        {
          title: "An elevated growth",
          data:
            "with a central depression that occasionally bleeds. It may rapidly increase in size.",
        },
        {
          title: "An open sore ",
          data: "that bleeds or crusts and persists for weeks.",
        },
      ],
    },
    riskFactor: {
      para: [
        "Squamous cell carcinoma (SCC) of the skin is caused by DNA damage that leads to abnormal changes (mutations) in the squamous cells in the outermost layer of skin.",
        "Understanding what causes this damage and the factors that increase your risk of developing SCC can help you detect the disease early or prevent it from happening in the first place.",
      ],
      heading: "These factors increase your SCC risk:",
      risks: [
        {
          title: "Unprotected exposure",
          text: "to ultraviolet (UV) radiation from the sun or indoor tanning.",
        },
        {
          title: "History of skin cancer: ",
          text: " including  basal cell carcinoma (BCC).",
        },
        {
          title: "Weakened immune system",
          text: "due to a medical condition or medications.",
        },
        {
          title: "History of skin cancer",
          text:
            "ncluding basal cell carcinoma (BCC), squamous cell carcinoma (SCC) or melanoma.",
        },
        {
          title: "Age over 50: ",
          text: "Most SCCs appear in people over age 50.",
        },
        {
          title: "Gender: ",
          text: "Men are more likely to get the disease",
        },
        {
          title: "Fair Skin: ",
          text:
            "People with fair skin are at greater risk for MCC, but it can affect anyone.",
        },
        {
          title: "Sun-sensitive conditions",
          text: " including xeroderma pigmentosum.",
        },
        {
          title: "Chronic infections",
          text:
            "Chronic infections and skin inflammation from burns, scars and other conditions.",
        },
        {
          title: "Skin precancers",
          text: "Skin precancers including actinic keratosis.",
        },
        {
          title: "HPV",
          text: "History of human papilloma virus (HPV)",
        },
      ],
    },
    treatment: {
      heading: "Effective Options for Early Stage SCC",
      para: [
        "Most squamous cell carcinomas (SCCs) of the skin can be cured when found and treated early. Treatment should happen as soon as possible after diagnosis, since more advanced SCCs of the skin are more difficult to treat and can become dangerous, spreading to local lymph nodes, distant tissues and organs. Find out more about treatment options for advanced or recurring SCCs here.",
        "If you’ve been diagnosed with an SCC that has not spread, there are several effective treatments that can usually be performed on an outpatient basis. The choices available to you depend on the tumor type, size, location and depth, as well as your age and overall health.",
      ],
      treatments: [
        "Excisional surgery",
        "Mohs surgery",
        "Cryosurgery",
        "Curettage and electrodesiccation (electrosurgery)",
        "Laser surgery",
        "Radiation",
        "Photodynamic therapy (PDT)",
        "Topical medications",
      ],
      referLink:
        "hhttps://www.skincancer.org/skin-cancer-information/squamous-cell-carcinoma/scc-treatment-options/#excisional",
    },
    faqs: [
      {
        text: [
          "One of three main types of cells in the top layer of the skin (the epidermis), squamous cells are flat cells located near the surface of the skin that shed continuously as new ones form.",
          "SCC occurs when DNA damage from exposure to ultraviolet radiation or other damaging agents trigger abnormal changes in the squamous cells.",
        ],
      },
      {
        text: [
          "SCCs can appear as scaly red patches, open sores, rough, thickened or wart-like skin, or raised growths with a central depression. At times, SCCs may crust over, itch or bleed. The lesions most commonly arise in sun-exposed areas of the body.",
          "SCCs can also occur in other areas of the body, including the genitals.",
          "SCCs look different on everyone. You can find more images, as well as signs, symptoms and early detection strategies on our SCC Warning Signs page.",
        ],
      },
      {
        text: [
          "While the majority of SCCs can be easily and successfully treated, if allowed to grow, these lesions can become disfiguring, dangerous and even deadly. Untreated SCCs can become invasive, grow into deeper layers of skin and spread to other parts of the body.",
        ],
      },
      {
        text: [
          "While SCC is less common than basal cell carcinoma (BCC), the number of reported SCC cases in the U.S. has steadily increased.",
        ],
        bulletPoints: [
          "More than 1 million cases of SCC are diagnosed each year, which translates to about 115 cases diagnosed every hour.",
          "SCC incidence has increased up to 200 percent in the past three decades.",
        ],
      },
    ],
  },
];

// module.exports = data;
