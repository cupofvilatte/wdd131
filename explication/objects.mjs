const exampleTerms = [
    {
        term: "explication",
        stated: "Explication is the process of systematically clarifying our ideas while, at the same time, exploring their meaning.",
        elaborated: "In other words, when we explicate an idea, we make several intellectual moves that each comes at the idea in a different way, each making the idea clearer while at the same time casting new light on the idea. Those moves include stating, elaborating, exemplifying, and illustrating.",
        exemplified: "For example, we might explicate a complex idea like faith, or a difficult text like a poem or the Declaration of Independence, in order to clarify it and to explore its meaning. I'm explicating the idea of explication right now as an example of the process of explication.",
        illustrated: "The process of explication is like putting a complex object under several kinds of light at different angles to reveal its nature. Just as Monet painted the façade of Rouen Cathedral in all kinds of light — bright morning, cloudy afternoon, evening — to reveal the full spectrum of possible visual experiences one might have of the cathedral, so also we might explicate an idea, a poem, a novel, or a passage of scripture, using the different moves to cast new light on the concept.",
        compared: "Explication, like explanation, clarifies ideas. However, unlike simple explanation, explication explores the complexity of an idea in a careful, systematic way. This distinction is suggested in the etymology of the two words. Explain derives from the Latin ex-, which functions both as a prepositional or adverbial prefix 'out' or 'un-' and as an intensifier, and the stem planus, 'flat, level, plain, clear'. The word explain, then, suggests the image of laying something out flat, as one lays out a map, so as to see it more clearly. The word explicate, on the other hand, derives from the Latin plicare, 'to fold, plait, or weave'. To explicate is to carefully unfold, unweave or untwist something that is braided or woven in a complex way.",
        divided: "There is only one kind of explication; however, explication itself involves at least seven different intellectual moves, listed above. One could say that there are at least seven ways to explicate an idea, although a thorough and systematic explication will involve several of these.",
        applied: "Explication is a powerful tool for learning. Suppose that you are studying photosynthesis in your biology class. Try explicating the ideas involved. If you can't, then go back and review until you can. When you can explicate a concept clearly, accurately, and thoroughly, then you understand that concept, and trying to explicate these ideas is the best way to come to understand them. That's much better than just memorizing a definition. Explication is also a powerful tool for teaching. Suppose that you are teaching a gospel doctrine class on Paul's letter to the Hebrews, and you need to lead a discussion of Hebrews 11:1. Instead of just asking for random insights, you could focus the discussion by asking someone to state what it means for faith to be “the substance [or foundation] of things hoped for.” Then ask someone to elaborate on that statement. Then ask for an example, then a metaphor or analogy. Then ask how faith, as the substance of our hopes, is different from mere belief. And maybe make a distinction among the kinds of things we hope for and how faith, then, might be a different kind of foundation depending upon the object of our hopes. Finally, you might ask what it would be like to live and act on faith in this sense. Teaching in this way will transform both your own and your students' understanding.",
        
        image: null,
    },
    {
        term: "love",

        stated: "Love is a profound and caring affection towards someone or something.",
        elaborated: "In other words, love is an intense feeling of deep affection that can be directed towards people, animals, or even concepts and activities.",
        exemplified: "For example, a parent's love for their child, a person's love for their pet, or the love one has for a hobby like painting.",
        illustrated: "Love is like a plant that you nurture and care for. Just as a plant needs water, sunlight, and attention to grow and flourish, love requires time, effort, and care to develop and sustain. Neglecting it can cause it to wither, but with proper care, it can grow strong and beautiful.",
        compared: "Love is similar to friendship in terms of affection, but it usually involves a deeper emotional connection. Unlike infatuation, which is often short-lived, love is enduring.",
        divided: "Love can be divided into different types: romantic love, familial love, platonic love, and self-love.",
        applied: "Understanding love helps in building and maintaining strong relationships. It implies acts of kindness, empathy, and support.",

        image: null,
    },
    {
        term: "science",
        stated: "Science is the systematic study of the structure and behavior of the physical and natural world through observation and experiment.",
        elaborated: "In other words, science involves gathering knowledge about the universe and testing hypotheses through controlled experiments.",
        exemplified: "For example, physics studies the laws of motion and energy, while biology examines living organisms and their processes.",
        illustrated: "Science can be illustrated using the photo to the right.",
        compared: "Science is different from pseudoscience, which lacks empirical evidence and rigorous testing. Unlike religion, which is based on faith, science relies on empirical evidence.",
        divided: "Science is divided into various branches such as physical science (physics, chemistry), life science (biology, zoology), and earth science (geology, meteorology).",
        applied: "Scientific knowledge is crucial for technological advancements, medical breakthroughs, and solving real-world problems like climate change.",

        image: "./images/colorful-science-objects-icons-vector-set_1308-131708.jpg.avif",
    },
    {
        term: "family",
        stated: "Family is a group of individuals related by blood, marriage, or a strong emotional bond.",
        elaborated: "In other words, a family consists of people connected by kinship or close relationships who support and care for each other.",
        exemplified: "For example, a nuclear family includes parents and their children, while an extended family may include grandparents, aunts, uncles, and cousins.",
        illustrated: "Family can be illustrated by a family tree diagram such as shown.",
        compared: "Family is different from friendships, which are chosen relationships, whereas family connections are typically not chosen but inherent.",
        divided: "Family can be divided into nuclear family, extended family, and blended family.",
        applied: "A strong family provides emotional support and stability. Understanding family dynamics can improve communication and relationships within the household.",

        image: "./images/familyTreeScreenshot.png",
    },
    {
        term: "earth",
        stated: "Earth is the third planet from the sun in our solar system, known for its ability to support life.",
        elaborated: "In other words, Earth is a unique planet with diverse ecosystems, water, and an atmosphere that makes life possible.",
        exemplified: "For example, Earth's vast oceans, forests, and deserts are part of its diverse landscapes.",
        illustrated: "Earth can be illustrated by a globe or satellite images showing its blue and green surface.",
        compared: "Earth is different from other planets like Mars or Venus, which lack the conditions necessary to support life as we know it.",
        divided: "Earth can be divided into various layers: the crust, mantle, outer core, and inner core. It also has different spheres: the lithosphere, hydrosphere, atmosphere, and biosphere.",
        applied: "Understanding Earth is essential for environmental conservation and addressing issues like climate change and natural resource management.",

        image: "./images/globePicture.png",
    },
    {
        term: "computer",
        stated: "A computer is an electronic device that processes data according to a set of instructions called programs.",
        elaborated: "In other words, a computer performs calculations and tasks based on input data and outputs the results.",
        exemplified: "For example, personal computers, laptops, and smartphones are all types of computers.",
        illustrated: "A computer is like a versatile toolset. Just as a toolbox contains various tools for different tasks, a computer can perform a wide range of functions from calculations to communication, depending on the software (tools) you use.",
        compared: "Computers are different from calculators, which only perform basic arithmetic operations, whereas computers can execute complex programs and tasks.",
        divided: "Computers can be divided into various types: desktop computers, laptops, tablets, and mainframes.",
        applied: "Computers are essential in modern life for communication, work, entertainment, and accessing information. They enable tasks from simple document editing to complex scientific research.",

        image: null,
    },
    {
        term: "education",
        stated: "Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, beliefs, and habits.",
        elaborated: "In other words, education is the means through which people learn and develop intellectually and socially.",
        exemplified: "For example, attending school, reading books, and participating in training programs are forms of education.",
        illustrated: "Education is like building a house. Each lesson or piece of knowledge is a brick that adds to the structure. Over time, with enough bricks (knowledge and skills), you construct a solid, well-built house (a well-rounded, educated person) that can withstand challenges and provide a safe haven for ideas and growth.",
        compared: "Education differs from training, which focuses more on specific skills for particular tasks. Education tends to be broader, covering a wide range of subjects and critical thinking.",
        divided: "Education can be divided into formal education (schools, colleges), informal education (self-study, life experiences), and non-formal education (community courses, workshops).",
        applied: "A good education provides individuals with the tools to succeed in life, fostering critical thinking, problem-solving, and informed citizenship.",

        image: null,
    },
    {
        term: "health",
        stated: "Health is a state of complete physical, mental, and social well-being, not merely the absence of disease or infirmity.",
        elaborated: "In other words, health involves overall well-being, including physical fitness, mental clarity, and social stability.",
        exemplified: "For example, regular exercise, balanced nutrition, and positive social interactions contribute to good health.",
        illustrated: "Health is like a three-legged stool. The legs represent physical, mental, and social well-being. For the stool to stand strong and balanced, all three legs must be in good condition. If one leg is weak or missing, the stool becomes unstable, illustrating how interconnected and vital all aspects of health are.",
        compared: "Health is different from fitness, which mainly refers to physical condition. Health encompasses physical, mental, and social aspects.",
        divided: "Health can be divided into physical health, mental health, and social health.",
        applied: "Maintaining good health is crucial for a fulfilling life. It involves preventative measures like healthy eating, regular exercise, and stress management.",

        image: null,
    }
];

export default exampleTerms;