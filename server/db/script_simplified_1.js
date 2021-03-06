module.exports = {
    "script": [{
        "id": 133,
        "text": "Whoops... Dan wasn't ready for that one. &nbsp;Let's see how he does in other timelines",
        "incoming": [132],
        "outgoing": [],
        "label": "ending",
        "scriptID": 5
    }, {
        "id": 132,
        "text": "(Dan runs away)",
        "incoming": [131, 135, 136, 137],
        "outgoing": [133],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 136,
        "text": "LOOP: nervous",
        "incoming": [75, 131, 134, 135, 137],
        "outgoing": [135, 137, 132],
        "label": "nick",
        "scriptID": 5
    }, {
        "id": 135,
        "text": "LOOP: nervous",
        "incoming": [75, 130, 131, 134, 136, 137],
        "outgoing": [136, 137, 132],
        "label": "gary",
        "scriptID": 5
    }, {
        "id": 137,
        "text": "LOOP: quizzical towards Dan",
        "incoming": [131, 135, 136],
        "outgoing": [135, 136, 132],
        "label": "claire",
        "scriptID": 5
    }, {
        "id": 102,
        "text": "Awww. &nbsp;that was so sweet. &nbsp;Let's go again",
        "incoming": [68, 123, 124],
        "outgoing": [],
        "label": "ending",
        "scriptID": 5
    }, {
        "id": 131,
        "text": "Dan, what are they talking about?",
        "incoming": [75, 130, 134],
        "outgoing": [137, 136, 135, 132],
        "label": "claire",
        "scriptID": 5
    }, {
        "id": 134,
        "text": "LOOP: Dan darts his eyes from side to side",
        "incoming": [75, 130],
        "outgoing": [135, 136, 131],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 124,
        "text": "deadpan",
        "incoming": [104, 125],
        "outgoing": [102],
        "label": "nick",
        "scriptID": 5
    }, {
        "id": 68,
        "text": "I didn't know any of this. &nbsp;Gary I'm sorry, man",
        "incoming": [104, 125],
        "outgoing": [102],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 123,
        "text": "Oh.. umm... thanks Gary.",
        "incoming": [104, 125],
        "outgoing": [102],
        "label": "claire",
        "scriptID": 5
    }, {
        "id": 42,
        "text": "he told them about when you got locked up for drugs",
        "incoming": [24, 39, 26, 77, 190],
        "outgoing": [69, 75, 67, 62],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 116,
        "text": "Bummer... friends can't last if they can't listen",
        "incoming": [],
        "outgoing": [],
        "label": "ending",
        "scriptID": 5
    }, {
        "id": 127,
        "text": "LOOP: angry heavy breathing stare at Gary",
        "incoming": [103, 67, 110, 126],
        "outgoing": [126],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 130,
        "text": "Careful Dan. &nbsp;Not sure you're ready for everyone to know what i could have ruined",
        "incoming": [17, 73],
        "outgoing": [135, 134, 75, 131],
        "label": "gary",
        "scriptID": 5
    }, {
        "id": 125,
        "text": "LOOP: waiting for Claire to respond",
        "incoming": [104],
        "outgoing": [123, 68, 124],
        "label": "gary",
        "scriptID": 5
    }, {
        "id": 75,
        "text": "Uh oh. &nbsp;something deeper is going on here",
        "incoming": [42, 17, 73, 130],
        "outgoing": [136, 134, 135, 131],
        "label": "nick",
        "scriptID": 5
    }, {
        "id": 104,
        "text": "(to Claire) I told them you sacrificed your spotless record so that I could make it to see my grandmother before she passed",
        "incoming": [58, 61, 103, 67, 108, 110, 60, 126, 77],
        "outgoing": [125, 124, 123, 68],
        "label": "gary",
        "scriptID": 5
    }, {
        "id": 126,
        "text": "LOOP: stare at Gary",
        "incoming": [110, 127],
        "outgoing": [114, 127, 104],
        "label": "claire",
        "scriptID": 5
    }, {
        "id": 77,
        "text": "I told them you were a smart, loyal person who anybody would benefit from having on their team!",
        "incoming": [39, 26, 190],
        "outgoing": [110, 42, 58, 104],
        "label": "gary",
        "scriptID": 5
    }, {
        "id": 73,
        "text": "LOOP: head in hands",
        "incoming": [17],
        "outgoing": [130, 75, 39],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 110,
        "text": "GARY!! &nbsp;YOU BETTER NOT HAVE MESSED THIS UP FOR ME",
        "incoming": [63, 67, 77],
        "outgoing": [114, 127, 126, 104],
        "label": "claire",
        "scriptID": 5
    }, {
        "id": 65,
        "text": "and Claire feels sorry for you Gary, that's the only reason she listens.",
        "incoming": [55, 114],
        "outgoing": [111, 55, 98],
        "label": "nick",
        "scriptID": 5
    }, {
        "id": 67,
        "text": "I left out the part about the drugs!! &nbsp;",
        "incoming": [42, 62, 66, 69],
        "outgoing": [63, 127, 110, 104],
        "label": "gary",
        "scriptID": 5
    }, {
        "id": 39,
        "text": "WHAT DID YOU SAY?!?",
        "incoming": [37, 38, 40, 26, 17, 73],
        "outgoing": [63, 77, 42, 190],
        "label": "claire",
        "scriptID": 5
    }, {
        "id": 114,
        "text": "and Dan is jealous because you chose Gary for your reference instead of him",
        "incoming": [63, 110, 126],
        "outgoing": [113, 29, 65],
        "label": "nick",
        "scriptID": 5
    }, {
        "id": 63,
        "text": "Gary tried to use his life coaching mind tricks on the interviewer",
        "incoming": [39, 58, 61, 62, 26, 66, 69, 103, 67, 108, 190],
        "outgoing": [114, 110],
        "label": "nick",
        "scriptID": 5
    }, {
        "id": 26,
        "text": "I SAID ONLY GOOD THINGS!",
        "incoming": [24, 85, 86],
        "outgoing": [63, 39, 42, 77],
        "label": "gary",
        "scriptID": 5
    }, {
        "id": 190,
        "text": "LOOP: stare at Gary",
        "incoming": [24, 39],
        "outgoing": [42, 77, 63],
        "label": "claire",
        "scriptID": 5
    }, {
        "id": 66,
        "text": "LOOP: intense stare at Gary",
        "incoming": [58, 62, 69],
        "outgoing": [69, 63, 67],
        "label": "claire",
        "scriptID": 5
    }, {
        "id": 111,
        "text": "She actually makes fun of your life coaching dalliance quite a bit, behind your back",
        "incoming": [65],
        "outgoing": [118, 117, 113],
        "label": "nick",
        "scriptID": 5
    }, {
        "id": 23,
        "text": "LOOP: quizzical at Claire",
        "incoming": [19, 163],
        "outgoing": [160, 163, 13],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 153,
        "text": "LOOP: chuckle",
        "incoming": [15, 13, 160, 161],
        "outgoing": [156, 158, 15],
        "label": "gary",
        "scriptID": 5
    }, {
        "id": 17,
        "text": "you ruined everything, Gary",
        "incoming": [18, 37],
        "outgoing": [130, 75, 73, 39],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 103,
        "text": "Because that wasn't the point of the story!",
        "incoming": [79, 105],
        "outgoing": [63, 127, 62, 104],
        "label": "gary",
        "scriptID": 5
    }, {
        "id": 108,
        "text": "LOOP: head in hands",
        "incoming": [61],
        "outgoing": [63, 104, 62],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 163,
        "text": "LOOP: chuckle",
        "incoming": [19, 23],
        "outgoing": [23, 160, 13],
        "label": "gary",
        "scriptID": 5
    }, {
        "id": 62,
        "text": "YOU TOLD THEM ABOUT THE DRUGS!?!",
        "incoming": [42, 59, 61, 79, 103, 105, 108, 60],
        "outgoing": [69, 66, 67, 63],
        "label": "claire",
        "scriptID": 5
    }, {
        "id": 19,
        "text": "hahahah,&nbsp;what are you talking about???",
        "incoming": [12, 154],
        "outgoing": [163, 160, 13, 23],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 118,
        "text": "It is kind of messed up how you talk behind his back, Claire",
        "incoming": [111, 117],
        "outgoing": [120, 119, 113],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 37,
        "text": "YES YOU DID!",
        "incoming": [38, 40],
        "outgoing": [40, 17, 39, 38],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 69,
        "text": "LOOP: intense stare at Gary",
        "incoming": [42, 58, 62, 66],
        "outgoing": [66, 67, 63],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 117,
        "text": "LOOP: assured look at Gary",
        "incoming": [111],
        "outgoing": [118, 113],
        "label": "nick",
        "scriptID": 5
    }, {
        "id": 158,
        "text": "(quietly).... (head in hands) Ok... I had diarrhea in the shower",
        "incoming": [15, 13, 153, 156, 160, 161, 162, 164],
        "outgoing": [157],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 11,
        "text": "what did you say gary?",
        "incoming": [1],
        "outgoing": [28, 12, 16, 18],
        "label": "claire",
        "scriptID": 5
    }, {
        "id": 13,
        "text": "Dan, this is a safe space. &nbsp;You can tell us about anything. like girl trouble... or horrible digestive problems",
        "incoming": [19, 23, 12, 154, 163],
        "outgoing": [158, 156, 153, 15],
        "label": "claire",
        "scriptID": 5
    }, {
        "id": 24,
        "text": "oh no, gary. what did you say?",
        "incoming": [18, 49, 51, 16, 56, 101],
        "outgoing": [28, 42, 26, 190],
        "label": "claire",
        "scriptID": 5
    }, {
        "id": 105,
        "text": "LOOP: stare at Gary",
        "incoming": [59, 79],
        "outgoing": [58, 62, 103],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 61,
        "text": "...I'm going to murder you.",
        "incoming": [60],
        "outgoing": [63, 104, 108, 62],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 15,
        "text": "LOOP::&nbsp;shudder&nbsp;",
        "incoming": [13, 153, 160, 161],
        "outgoing": [156, 153, 158],
        "label": "claire",
        "scriptID": 5
    }, {
        "id": 59,
        "text": "How does Claire getting busted for drugs make her a good friend?",
        "incoming": [57],
        "outgoing": [58, 105, 62, 60],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 120,
        "text": "LOOP: nodding at Dan",
        "incoming": [118, 119],
        "outgoing": [119, 113],
        "label": "nick",
        "scriptID": 5
    }, {
        "id": 40,
        "text": "LOOP: hahahahahah",
        "incoming": [37, 38],
        "outgoing": [39, 37, 38],
        "label": "nick",
        "scriptID": 5
    }, {
        "id": 38,
        "text": "NO I DIDN'T!",
        "incoming": [18, 37, 40],
        "outgoing": [49, 40, 39, 37],
        "label": "gary",
        "scriptID": 5
    }, {
        "id": 119,
        "text": "LOOP: looking at Claire",
        "incoming": [113, 118, 120],
        "outgoing": [120, 113],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 157,
        "text": "Well that's just terrifying. &nbsp;If you need a break. I understand",
        "incoming": [158, 159],
        "outgoing": [],
        "label": "ending",
        "scriptID": 5
    }, {
        "id": 79,
        "text": "How does telling her interviewer that she went to jail for drugs make you a good friend?",
        "incoming": [49, 51],
        "outgoing": [105, 58, 103, 62],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 164,
        "text": "LOOP: shudder",
        "incoming": [156, 162],
        "outgoing": [162, 159, 158],
        "label": "claire",
        "scriptID": 5
    }, {
        "id": 12,
        "text": "oh no Gary, not the shower mess",
        "incoming": [11],
        "outgoing": [160, 154, 13, 19],
        "label": "claire",
        "scriptID": 5
    }, {
        "id": 18,
        "text": "Claire, he basically took a crap on your chances of getting that job!",
        "incoming": [11, 1, 85, 86],
        "outgoing": [28, 38, 24, 17],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 101,
        "text": "LOOP: stare and Gary",
        "incoming": [56],
        "outgoing": [28, 24, 57],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 161,
        "text": "Well Nick. &nbsp;that was Diarrhea",
        "incoming": [160],
        "outgoing": [153, 158, 15, 156],
        "label": "gary",
        "scriptID": 5
    }, {
        "id": 113,
        "text": "NICK!! What is going on with you today?",
        "incoming": [111, 114, 117, 118, 119, 120],
        "outgoing": [121, 119],
        "label": "claire",
        "scriptID": 5
    }, {
        "id": 56,
        "text": "Well then what did you say?",
        "incoming": [16],
        "outgoing": [28, 101, 24, 57],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 60,
        "text": "because she was covering for me",
        "incoming": [59],
        "outgoing": [58, 104, 62, 61],
        "label": "gary",
        "scriptID": 5
    }, {
        "id": 160,
        "text": "Yeah, &nbsp;that stuff was everywhere. What the heck happened?",
        "incoming": [19, 23, 12, 154, 163],
        "outgoing": [158, 153, 15, 161],
        "label": "nick",
        "scriptID": 5
    }, {
        "id": 57,
        "text": "I said she was a great and loyal friend",
        "incoming": [56, 101],
        "outgoing": [81, 59, 58],
        "label": "gary",
        "scriptID": 5
    }, {
        "id": 154,
        "text": "LOOP: making cut neck sign to say stop it",
        "incoming": [12],
        "outgoing": [160, 13, 19],
        "label": "gary",
        "scriptID": 5
    }, {
        "id": 159,
        "text": "...oh my god.. why I was cleaning it up some got in my mouth",
        "incoming": [156, 162, 164],
        "outgoing": [157],
        "label": "nick",
        "scriptID": 5
    }, {
        "id": 16,
        "text": "That's not what I said!",
        "incoming": [11, 1],
        "outgoing": [56, 49, 24, 28],
        "label": "gary",
        "scriptID": 5
    }, {
        "id": 49,
        "text": "In my opinion, Everything went very well. &nbsp;I am a good friend to Claire.",
        "incoming": [38, 16],
        "outgoing": [79, 51, 24, 81],
        "label": "gary",
        "scriptID": 5
    }, {
        "id": 58,
        "text": "well... that's not exactly what he said...",
        "incoming": [57, 59, 79, 105, 60, 77],
        "outgoing": [104, 69, 66, 63],
        "label": "nick",
        "scriptID": 5
    }, {
        "id": 156,
        "text": "WHAT??! &nbsp;THAT WAS DIARRHEA??? &nbsp;I THOUGHT IT WAS HAIR DYE",
        "incoming": [15, 13, 153, 161],
        "outgoing": [164, 158, 162, 159],
        "label": "nick",
        "scriptID": 5
    }, {
        "id": 1,
        "text": "<b>I can't believe you said that man</b>",
        "incoming": [],
        "outgoing": [28, 11, 16, 18],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 81,
        "text": "I think she's really grown since we've been doing sessions on changing her energy towards her work",
        "incoming": [49, 51, 57],
        "outgoing": [53, 82, 84, 87],
        "label": "gary",
        "scriptID": 5
    }, {
        "id": 82,
        "text": "LOOP: self assured",
        "incoming": [81, 84],
        "outgoing": [53, 87, 84],
        "label": "gary",
        "scriptID": 5
    }, {
        "id": 51,
        "text": "Uh oh, &nbsp;positive affirmations, Gary?",
        "incoming": [49],
        "outgoing": [79, 24, 53, 81],
        "label": "nick",
        "scriptID": 5
    }, {
        "id": 86,
        "text": "LOOP: sinister smile at Gary",
        "incoming": [85],
        "outgoing": [26, 18, 28],
        "label": "claire",
        "scriptID": 5
    }, {
        "id": 162,
        "text": "LOOP: BWAHAHAHAH",
        "incoming": [156, 164],
        "outgoing": [158, 164, 159],
        "label": "gary",
        "scriptID": 5
    }, {
        "id": 84,
        "text": "Ohhh Gary... That's just fine",
        "incoming": [81, 82, 87, 94, 89, 55, 53],
        "outgoing": [89, 88, 82, 85],
        "label": "claire",
        "scriptID": 5
    }, {
        "id": 28,
        "text": "He didn't do anything wrong, Claire. &nbsp;Dan is just trying to get you angry at Gary",
        "incoming": [11, 1, 18, 24, 16, 56, 85, 86, 101],
        "outgoing": [168, 167, 30, 29],
        "label": "nick",
        "scriptID": 5
    }, {
        "id": 53,
        "text": "doesn't a life coach need to first be successful in their own life?",
        "incoming": [51, 81, 82],
        "outgoing": [94, 89, 84, 55],
        "label": "nick",
        "scriptID": 5
    }, {
        "id": 167,
        "text": "Wait.. what are you talking about?",
        "incoming": [28],
        "outgoing": [169, 168, 29, 30],
        "label": "claire",
        "scriptID": 5
    }, {
        "id": 85,
        "text": "I gather you got the call today. &nbsp;Let me assure you: If you got creative with your answers, I will kill you in your sleep",
        "incoming": [84, 88, 98, 99],
        "outgoing": [26, 18, 86, 28],
        "label": "claire",
        "scriptID": 5
    }, {
        "id": 89,
        "text": "LOOP: wry smile at Gary",
        "incoming": [84, 53],
        "outgoing": [94, 84, 55],
        "label": "nick",
        "scriptID": 5
    }, {
        "id": 168,
        "text": "He's not lyin",
        "incoming": [28, 95, 167, 169],
        "outgoing": [173, 172, 30, 29],
        "label": "gary",
        "scriptID": 5
    }, {
        "id": 87,
        "text": "(to Gary) wow, buddy. You are literally the most delusional person I know",
        "incoming": [81, 82],
        "outgoing": [95, 55, 84, 88],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 169,
        "text": "LOOP: confused",
        "incoming": [167],
        "outgoing": [30, 29, 168],
        "label": "claire",
        "scriptID": 5
    }, {
        "id": 95,
        "text": "(to dan) And you are the most jealous. &nbsp;Gary is ridiculous, but you're mostly just angry because Claire didn't pick you",
        "incoming": [87, 94],
        "outgoing": [172, 47, 168, 29],
        "label": "nick",
        "scriptID": 5
    }, {
        "id": 172,
        "text": "Dan.. He's joking right?",
        "incoming": [29, 30, 95, 168],
        "outgoing": [177, 173, 47, 170],
        "label": "claire",
        "scriptID": 5
    }, {
        "id": 55,
        "text": "Thank you, guys. &nbsp;I had the same thought, at one point, but after some effective visualization, I was able to see how my energy truly helps people",
        "incoming": [87, 89, 53, 65],
        "outgoing": [65, 94, 91, 84],
        "label": "gary",
        "scriptID": 5
    }, {
        "id": 30,
        "text": "He's jealous because you used Gary as a reference instead of him",
        "incoming": [28, 29, 167, 169, 168],
        "outgoing": [172, 173, 171, 47],
        "label": "nick",
        "scriptID": 5
    }, {
        "id": 88,
        "text": "Claire felt sorry for you man. &nbsp;That's the only reason she agreed to do those 'workshops' with you",
        "incoming": [84, 87],
        "outgoing": [99, 98, 85, 91],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 99,
        "text": "LOOP: nodding",
        "incoming": [88, 98],
        "outgoing": [85, 91, 98],
        "label": "nick",
        "scriptID": 5
    }, {
        "id": 171,
        "text": "THAT'S NOT TRUE!!",
        "incoming": [30],
        "outgoing": [170, 173, 177, 47],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 177,
        "text": "LOOP: more confused",
        "incoming": [171, 172],
        "outgoing": [47, 170, 173],
        "label": "claire",
        "scriptID": 5
    }, {
        "id": 29,
        "text": "WHAT ARE YOU TALKING ABOUT?? &nbsp;I'M TRYING TO DEFEND HER",
        "incoming": [28, 95, 114, 167, 169, 168],
        "outgoing": [173, 172, 170, 30],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 98,
        "text": "LOOP: (sorry bro look at Gary)",
        "incoming": [88, 94, 99, 65],
        "outgoing": [91, 99, 85],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 47,
        "text": "(To Claire) He got you that job because he wants to get closer to you. But you don't see it, because you're so self obsessed.",
        "incoming": [30, 95, 171, 172, 177, 173, 189, 188, 170],
        "outgoing": [186, 174, 175, 122],
        "label": "nick",
        "scriptID": 5
    }, {
        "id": 94,
        "text": "(to Gary) you are the slimiest",
        "incoming": [89, 55, 53],
        "outgoing": [98, 84, 95, 91],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 173,
        "text": "but Nick; You are acting a bit weird, bud. Why don't you cool it for a minute",
        "incoming": [29, 30, 171, 172, 168, 177],
        "outgoing": [188, 189, 47, 186],
        "label": "gary",
        "scriptID": 5
    }, {
        "id": 91,
        "text": "I am the catalyst for positive change in this world",
        "incoming": [88, 94, 55, 98, 99],
        "outgoing": [92],
        "label": "gary",
        "scriptID": 5
    }, {
        "id": 170,
        "text": "This is about what Gary did, not me",
        "incoming": [29, 171, 172, 177],
        "outgoing": [186, 189, 188, 47],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 175,
        "text": "FUCK YOU NICK!",
        "incoming": [47, 174],
        "outgoing": [186, 185, 184, 122, 174],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 174,
        "text": "FUCK YOU NICK!",
        "incoming": [47, 175],
        "outgoing": [186, 184, 185, 122, 175],
        "label": "claire",
        "scriptID": 5
    }, {
        "id": 184,
        "text": "LOOP: at Nick",
        "incoming": [174, 175, 186, 187, 185],
        "outgoing": [187, 185, 122],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 92,
        "text": "BARF! &nbsp;Let's try that again",
        "incoming": [91],
        "outgoing": [],
        "label": "ending",
        "scriptID": 5
    }, {
        "id": 189,
        "text": "LOOP: still confused",
        "incoming": [173, 188, 170],
        "outgoing": [188, 47, 186],
        "label": "claire",
        "scriptID": 5
    }, {
        "id": 188,
        "text": "LOOP: at Nick",
        "incoming": [173, 189, 170],
        "outgoing": [186, 189, 47],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 185,
        "text": "LOOP: at Nick",
        "incoming": [174, 175, 186, 187, 184],
        "outgoing": [187, 122, 184],
        "label": "claire",
        "scriptID": 5
    }, {
        "id": 187,
        "text": "LOOP: at Nick",
        "incoming": [186, 185, 184],
        "outgoing": [122, 184, 185],
        "label": "gary",
        "scriptID": 5
    }, {
        "id": 186,
        "text": "It starting to seem like you want us all to fight",
        "incoming": [47, 174, 175, 173, 189, 188, 170],
        "outgoing": [187, 122, 184, 185],
        "label": "gary",
        "scriptID": 5
    }, {
        "id": 122,
        "text": "And Gary, Claire doesn't actually value your input, she just makes fun of you behind your back",
        "incoming": [47, 174, 175, 186, 187, 185, 184],
        "outgoing": [180, 179, 178, 166],
        "label": "nick",
        "scriptID": 5
    }, {
        "id": 166,
        "text": "LOOP: folded arms. &nbsp;pleased with himself",
        "incoming": [122],
        "outgoing": [180, 179, 178],
        "label": "nick",
        "scriptID": 5
    }, {
        "id": 179,
        "text": "Nick what is your problem right now?",
        "incoming": [122, 166],
        "outgoing": [181, 183, 182, 121],
        "label": "gary",
        "scriptID": 5
    }, {
        "id": 178,
        "text": "Why are you being such a piece of shit right now??",
        "incoming": [122, 166],
        "outgoing": [182, 183, 121],
        "label": "claire",
        "scriptID": 5
    }, {
        "id": 182,
        "text": "LOOP: at Nick",
        "incoming": [178, 179, 180, 183],
        "outgoing": [181, 183, 121],
        "label": "gary",
        "scriptID": 5
    }, {
        "id": 180,
        "text": "You're being a huge asshole right now Nick",
        "incoming": [122, 166],
        "outgoing": [182, 183, 181, 121],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 183,
        "text": "LOOP: at Nick",
        "incoming": [178, 179, 180, 181, 182],
        "outgoing": [181, 182, 121],
        "label": "claire",
        "scriptID": 5
    }, {
        "id": 181,
        "text": "LOOP: at Nick",
        "incoming": [179, 180, 182, 183],
        "outgoing": [183, 121],
        "label": "dan",
        "scriptID": 5
    }, {
        "id": 121,
        "text": "I'm just calling it like I see it. &nbsp;I don't think you guys should be allowed to act as carelessly anymore as you did when your fuckup caused the last straw between Lisa and I. &nbsp;All 3 of you deserve to be miserable",
        "incoming": [113, 178, 179, 180, 181, 182, 183],
        "outgoing": [152],
        "label": "nick",
        "scriptID": 5
    }, {
        "id": 152,
        "text": "Nick is much more evil than any of us may have previously realized. &nbsp;Let's watch again",
        "incoming": [121],
        "outgoing": [],
        "label": "ending",
        "scriptID": 5
    }
    ]
}