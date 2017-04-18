module.exports = [
	{
		id: 133,
		text: "Whoops... Dan wasn't ready for that one. &nbsp;Let's see how he does in other timelines",
		color: "rgb(169, 169, 169)",
		incoming: [132],
		outgoing: []
	},

	{
		id: 132,
		text: "(Dan runs away)",
		color: "rgb(132, 128, 0)",
		incoming: [131,135,136,137],
		outgoing: [133]
	},

	{
		id: 136,
		text: "LOOP: nervous",
		color: "rgb(0, 255, 85)",
		incoming: [75,131,134,135,137],
		outgoing: [132,137,135]
	},

	{
		id: 135,
		text: "LOOP: nervous",
		color: "rgb(255, 0, 0)",
		incoming: [75,130,131,134,136,137],
		outgoing: [132,137,136]
	},

	{
		id: 137,
		text: "LOOP: quizzical towards Dan",
		color: "rgb(0, 212, 255)",
		incoming: [131,135,136],
		outgoing: [132,136,135]
	},

	{
		id: 102,
		text: "Awww. &nbsp;that was so sweet. &nbsp;Let's go again",
		color: "rgb(169, 169, 169)",
		incoming: [68,123,124],
		outgoing: []
	},

	{
		id: 131,
		text: "Dan, what are they talking about?",
		color: "rgb(0, 212, 255)",
		incoming: [75,130,134],
		outgoing: [132,135,136,137]
	},

	{
		id: 134,
		text: "LOOP: Dan darts his eyes from side to side",
		color: "rgb(255, 255, 102)",
		incoming: [75,130],
		outgoing: [131,136,135]
	},

	{
		id: 124,
		text: "deadpan",
		color: "rgb(0, 132, 44)",
		incoming: [104,125],
		outgoing: [102]
	},

	{
		id: 68,
		text: "I didn't know any of this. &nbsp;Gary I'm sorry, man",
		color: "rgb(132, 128, 0)",
		incoming: [104,125],
		outgoing: [102]
	},

	{
		id: 123,
		text: "Oh.. umm... thanks Gary.",
		color: "rgb(0, 110, 132)",
		incoming: [104,125],
		outgoing: [102]
	},

	{
		id: 42,
		text: "he told them about when you got locked up for drugs",
		color: "rgb(255, 250, 107)",
		incoming: [24,39,26,77],
		outgoing: [62,67,75,69]
	},

	{
		id: 116,
		text: "Bummer... friends can't last if they can't listen",
		color: "rgb(169, 169, 169)",
		incoming: [],
		outgoing: []
	},

	{
		id: 127,
		text: "LOOP: angry heavy breathing stare at Gary",
		color: "rgb(255, 255, 102)",
		incoming: [103,67,110,126],
		outgoing: [126]
	},

	{
		id: 130,
		text: "Careful Dan. &nbsp;Not sure you're ready for everyone to know what i could have ruined",
		color: "rgb(255, 0, 0)",
		incoming: [17,73],
		outgoing: [131,75,134,135]
	},

	{
		id: 125,
		text: "LOOP: waiting for Claire to respond",
		color: "rgb(255, 0, 0)",
		incoming: [104],
		outgoing: [124,68,123]
	},

	{
		id: 75,
		text: "Uh oh. &nbsp;something deeper is going on here",
		color: "rgb(0, 255, 85)",
		incoming: [42,17,73,130],
		outgoing: [131,135,134,136]
	},

	{
		id: 104,
		text: "(to Claire) I told them you sacrificed your spotless record so that I could make it to see my grandmother before she passed",
		color: "rgb(255, 0, 0)",
		incoming: [58,61,103,67,108,110,60,126,77],
		outgoing: [68,123,124,125]
	},

	{
		id: 126,
		text: "LOOP: stare at Gary",
		color: "rgb(0, 212, 255)",
		incoming: [110,127],
		outgoing: [104,127,114]
	},

	{
		id: 77,
		text: "I told them you were a smart, loyal person who anybody would benefit from having on their team!",
		color: "rgb(255, 0, 0)",
		incoming: [39,26],
		outgoing: [104,58,42,110]
	},

	{
		id: 73,
		text: "LOOP: head in hands",
		color: "rgb(255, 250, 107)",
		incoming: [17],
		outgoing: [39,75,130]
	},

	{
		id: 110,
		text: "GARY!! &nbsp;YOU BETTER NOT HAVE MESSED THIS UP FOR ME",
		color: "rgb(0, 212, 255)",
		incoming: [63,67,77],
		outgoing: [104,126,127,114]
	},

	{
		id: 65,
		text: "and Claire feels sorry for you Gary, that's the only reason she listens.",
		color: "rgb(0, 255, 85)",
		incoming: [55,114],
		outgoing: [98,55,111]
	},

	{
		id: 67,
		text: "I left out the part about the drugs!! &nbsp;",
		color: "rgb(255, 0, 0)",
		incoming: [42,62,66,69],
		outgoing: [104,110,127,63]
	},

	{
		id: 39,
		text: "WHAT DID YOU SAY?!?",
		color: "rgb(0, 212, 255)",
		incoming: [37,38,40,26,17,73],
		outgoing: [42,77,63,12]
	},

	{
		id: 114,
		text: "and Dan is jealous because you chose Gary for your reference instead of him",
		color: "rgb(0, 255, 85)",
		incoming: [63,110,126],
		outgoing: [65,29,113]
	},

	{
		id: 63,
		text: "Gary tried to use his life coaching mind tricks on the interviewer",
		color: "rgb(0, 255, 85)",
		incoming: [39,58,61,62,26,66,69,103,67,108],
		outgoing: [110,114]
	},

	{
		id: 26,
		text: "I SAID ONLY GOOD THINGS!",
		color: "rgb(255, 0, 0)",
		incoming: [24,85,86],
		outgoing: [77,42,39,63]
	},

	{
		id: 66,
		text: "LOOP: intense stare at Gary",
		color: "rgb(0, 212, 255)",
		incoming: [58,62,69],
		outgoing: [67,63,69]
	},

	{
		id: 111,
		text: "She actually makes fun of your life coaching dalliance quite a bit, behind your back",
		color: "rgb(0, 255, 85)",
		incoming: [65],
		outgoing: [113,117,118]
	},

	{
		id: 23,
		text: "LOOP: quizzical at Claire",
		color: "rgb(255, 250, 107)",
		incoming: [19,163],
		outgoing: [13,163,160]
	},

	{
		id: 153,
		text: "LOOP: chuckle",
		color: "rgb(255, 0, 0)",
		incoming: [15,13,160,161],
		outgoing: [15,158,156]
	},

	{
		id: 17,
		text: "you ruined everything, Gary",
		color: "rgb(255, 250, 107)",
		incoming: [18,37],
		outgoing: [39,73,75,130]
	},

	{
		id: 103,
		text: "Because that wasn't the point of the story!",
		color: "rgb(255, 0, 0)",
		incoming: [79,105],
		outgoing: [104,62,127,63]
	},

	{
		id: 108,
		text: "LOOP: head in hands",
		color: "rgb(255, 255, 102)",
		incoming: [61],
		outgoing: [62,104,63]
	},

	{
		id: 163,
		text: "LOOP: chuckle",
		color: "rgb(255, 0, 0)",
		incoming: [19,23],
		outgoing: [13,160,23]
	},

	{
		id: 62,
		text: "YOU TOLD THEM ABOUT THE DRUGS!?!",
		color: "rgb(0, 212, 255)",
		incoming: [42,59,61,79,103,105,108,60],
		outgoing: [63,67,66,69]
	},

	{
		id: 19,
		text: "hahahah,&nbsp;what are you talking about???",
		color: "rgb(255, 250, 107)",
		incoming: [12,154],
		outgoing: [23,13,160,163]
	},

	{
		id: 118,
		text: "It is kind of messed up how you talk behind his back, Claire",
		color: "rgb(255, 255, 102)",
		incoming: [111,117],
		outgoing: [113,119,120]
	},

	{
		id: 37,
		text: "YES YOU DID!",
		color: "rgb(255, 255, 102)",
		incoming: [38,40],
		outgoing: [38,39,17,40]
	},

	{
		id: 69,
		text: "LOOP: intense stare at Gary",
		color: "rgb(255, 255, 102)",
		incoming: [42,58,62,66],
		outgoing: [63,67,66]
	},

	{
		id: 117,
		text: "LOOP: assured look at Gary",
		color: "rgb(0, 255, 85)",
		incoming: [111],
		outgoing: [113,118]
	},

	{
		id: 158,
		text: "(quietly).... (head in hands) Ok... I had diarrhea in the shower",
		color: "rgb(132, 128, 0)",
		incoming: [15,13,153,156,160,161,162,164],
		outgoing: [157]
	},

	{
		id: 11,
		text: "what did you say gary?",
		color: "rgb(0, 212, 255)",
		incoming: [1],
		outgoing: [18,16,12,28]
	},

	{
		id: 13,
		text: "Dan, this is a safe space. &nbsp;You can tell us about anything. like girl trouble... or horrible digestive problems",
		color: "rgb(0, 212, 255)",
		incoming: [19,23,12,154,163],
		outgoing: [15,153,156,158]
	},

	{
		id: 24,
		text: "oh no, gary. what did you say?",
		color: "rgb(0, 212, 255)",
		incoming: [18,49,51,16,56,101],
		outgoing: [26,42,28,12]
	},

	{
		id: 105,
		text: "LOOP: stare at Gary",
		color: "rgb(255, 255, 102)",
		incoming: [59,79],
		outgoing: [103,62,58]
	},

	{
		id: 61,
		text: "...I'm going to murder you.",
		color: "rgb(255, 250, 107)",
		incoming: [60],
		outgoing: [62,108,104,63]
	},

	{
		id: 15,
		text: "LOOP::&nbsp;shudder&nbsp;",
		color: "rgb(0, 212, 255)",
		incoming: [13,153,160,161],
		outgoing: [158,153,156]
	},

	{
		id: 59,
		text: "How does Claire getting busted for drugs make her a good friend?",
		color: "rgb(255, 250, 107)",
		incoming: [57],
		outgoing: [60,62,105,58]
	},

	{
		id: 120,
		text: "LOOP: nodding at Dan",
		color: "rgb(0, 255, 85)",
		incoming: [118,119],
		outgoing: [113,119]
	},

	{
		id: 40,
		text: "LOOP: hahahahahah",
		color: "rgb(0, 255, 85)",
		incoming: [37,38],
		outgoing: [38,37,39]
	},

	{
		id: 38,
		text: "NO I DIDN'T!",
		color: "rgb(255, 0, 0)",
		incoming: [18,37,40],
		outgoing: [37,39,40,49]
	},

	{
		id: 119,
		text: "LOOP: looking at Claire",
		color: "rgb(255, 255, 102)",
		incoming: [113,118,120],
		outgoing: [113,120]
	},

	{
		id: 157,
		text: "Well that's just terrifying. &nbsp;If you need a break. I understand",
		color: "rgb(169, 169, 169)",
		incoming: [158,159],
		outgoing: []
	},

	{
		id: 79,
		text: "How does telling her interviewer that she went to jail for drugs make you a good friend?",
		color: "rgb(255, 250, 107)",
		incoming: [49,51],
		outgoing: [62,103,58,105]
	},

	{
		id: 164,
		text: "LOOP: shudder",
		color: "rgb(0, 212, 255)",
		incoming: [156,162],
		outgoing: [158,159,162]
	},

	{
		id: 12,
		text: "oh no Gary, not the shower mess",
		color: "rgb(0, 212, 255)",
		incoming: [11,39,24],
		outgoing: [19,13,154,160]
	},

	{
		id: 18,
		text: "Claire, he basically took a crap on your chances of getting that job!",
		color: "rgb(255, 255, 102)",
		incoming: [11,1,85,86],
		outgoing: [17,24,38,28]
	},

	{
		id: 101,
		text: "LOOP: stare and Gary",
		color: "rgb(255, 255, 102)",
		incoming: [56],
		outgoing: [57,24,28]
	},

	{
		id: 161,
		text: "Well Nick. &nbsp;that was Diarrhea",
		color: "rgb(255, 0, 0)",
		incoming: [160],
		outgoing: [156,15,158,153]
	},

	{
		id: 113,
		text: "NICK!! What is going on with you today?",
		color: "rgb(0, 212, 255)",
		incoming: [111,114,117,118,119,120],
		outgoing: [119,121]
	},

	{
		id: 56,
		text: "Well then what did you say?",
		color: "rgb(255, 250, 107)",
		incoming: [16],
		outgoing: [57,24,101,28]
	},

	{
		id: 60,
		text: "because she was covering for me",
		color: "rgb(255, 0, 0)",
		incoming: [59],
		outgoing: [61,62,104,58]
	},

	{
		id: 160,
		text: "Yeah, &nbsp;that stuff was everywhere. What the heck happened?",
		color: "rgb(0, 255, 85)",
		incoming: [19,23,12,154,163],
		outgoing: [161,15,153,158]
	},

	{
		id: 57,
		text: "I said she was a great and loyal friend",
		color: "rgb(255, 0, 0)",
		incoming: [56,101],
		outgoing: [58,59,81]
	},

	{
		id: 154,
		text: "LOOP: making cut neck sign to say stop it",
		color: "rgb(255, 0, 0)",
		incoming: [12],
		outgoing: [19,13,160]
	},

	{
		id: 159,
		text: "...oh my god.. why I was cleaning it up some got in my mouth",
		color: "rgb(0, 132, 44)",
		incoming: [156,162,164],
		outgoing: [157]
	},

	{
		id: 16,
		text: "That's not what I said!",
		color: "rgb(255, 0, 0)",
		incoming: [11,1],
		outgoing: [28,24,49,56]
	},

	{
		id: 49,
		text: "In my opinion, Everything went very well. &nbsp;I am a good friend to Claire.",
		color: "rgb(255, 0, 0)",
		incoming: [38,16],
		outgoing: [81,24,51,79]
	},

	{
		id: 58,
		text: "well... that's not exactly what he said...",
		color: "rgb(0, 255, 85)",
		incoming: [57,59,79,105,60,77],
		outgoing: [63,66,69,104]
	},

	{
		id: 156,
		text: "WHAT??! &nbsp;THAT WAS DIARRHEA??? &nbsp;I THOUGHT IT WAS HAIR DYE",
		color: "rgb(0, 255, 85)",
		incoming: [15,13,153,161],
		outgoing: [159,162,158,164]
	},

	{
		id: 1,
		text: "<b>I can't believe you said that man</b>",
		color: "rgb(255, 255, 255)",
		incoming: [],
		outgoing: [18,16,11,28]
	},

	{
		id: 81,
		text: "I think she's really grown since we've been doing sessions on changing her energy towards her work",
		color: "rgb(255, 0, 0)",
		incoming: [49,51,57],
		outgoing: [87,84,82,53]
	},

	{
		id: 82,
		text: "LOOP: self assured",
		color: "rgb(255, 0, 0)",
		incoming: [81,84],
		outgoing: [84,87,53]
	},

	{
		id: 51,
		text: "Uh oh, &nbsp;positive affirmations, Gary?",
		color: "rgb(0, 255, 85)",
		incoming: [49],
		outgoing: [81,53,24,79]
	},

	{
		id: 86,
		text: "LOOP: sinister smile at Gary",
		color: "rgb(0, 212, 255)",
		incoming: [85],
		outgoing: [28,18,26]
	},

	{
		id: 162,
		text: "LOOP: BWAHAHAHAH",
		color: "rgb(255, 0, 0)",
		incoming: [156,164],
		outgoing: [159,164,158]
	},

	{
		id: 84,
		text: "Ohhh Gary... That's just fine",
		color: "rgb(0, 212, 255)",
		incoming: [81,82,87,94,89,55,53],
		outgoing: [85,82,88,89]
	},

	{
		id: 28,
		text: "He didn't do anything wrong, Claire. &nbsp;Dan is just trying to get you angry at Gary",
		color: "rgb(0, 255, 85)",
		incoming: [11,1,18,24,16,56,85,86,101],
		outgoing: [29,30,167,168]
	},

	{
		id: 53,
		text: "doesn't a life coach need to first be successful in their own life?",
		color: "rgb(0, 255, 85)",
		incoming: [51,81,82],
		outgoing: [55,84,89,94]
	},

	{
		id: 167,
		text: "Wait.. what are you talking about?",
		color: "rgb(0, 212, 255)",
		incoming: [28],
		outgoing: [30,29,168,169]
	},

	{
		id: 85,
		text: "I gather you got the call today. &nbsp;Let me assure you: If you got creative with your answers, I will kill you in your sleep",
		color: "rgb(0, 212, 255)",
		incoming: [84,88,98,99],
		outgoing: [28,86,18,26]
	},

	{
		id: 89,
		text: "LOOP: wry smile at Gary",
		color: "rgb(0, 255, 85)",
		incoming: [84,53],
		outgoing: [55,84,94]
	},

	{
		id: 168,
		text: "He's not lyin",
		color: "rgb(255, 0, 0)",
		incoming: [28,95,167,169],
		outgoing: [29,30,172,173]
	},

	{
		id: 87,
		text: "(to Gary) wow, buddy. You are literally the most delusional person I know",
		color: "rgb(255, 248, 66)",
		incoming: [81,82],
		outgoing: [88,84,55,95]
	},

	{
		id: 169,
		text: "LOOP: confused",
		color: "rgb(0, 212, 255)",
		incoming: [167],
		outgoing: [168,29,30]
	},

	{
		id: 95,
		text: "(to dan) And you are the most jealous. &nbsp;Gary is ridiculous, but you're mostly just angry because Claire didn't pick you",
		color: "rgb(0, 255, 85)",
		incoming: [87,94],
		outgoing: [29,168,47,172]
	},

	{
		id: 172,
		text: "Dan.. He's joking right?",
		color: "rgb(0, 212, 255)",
		incoming: [29,30,95,168],
		outgoing: [170,47,173,177]
	},

	{
		id: 55,
		text: "Thank you, guys. &nbsp;I had the same thought, at one point, but after some effective visualization, I was able to see how my energy truly helps people",
		color: "rgb(255, 0, 0)",
		incoming: [87,89,53,65],
		outgoing: [84,91,94,65]
	},

	{
		id: 30,
		text: "He's jealous because you used Gary as a reference instead of him",
		color: "rgb(0, 255, 85)",
		incoming: [28,29,167,169,168],
		outgoing: [47,171,173,172]
	},

	{
		id: 88,
		text: "Claire felt sorry for you man. &nbsp;That's the only reason she agreed to do those 'workshops' with you",
		color: "rgb(255, 248, 66)",
		incoming: [84,87],
		outgoing: [91,85,98,99]
	},

	{
		id: 99,
		text: "LOOP: nodding",
		color: "rgb(0, 255, 85)",
		incoming: [88,98],
		outgoing: [98,91,85]
	},

	{
		id: 171,
		text: "THAT'S NOT TRUE!!",
		color: "rgb(255, 250, 107)",
		incoming: [30],
		outgoing: [47,177,173,170]
	},

	{
		id: 177,
		text: "LOOP: more confused",
		color: "rgb(0, 212, 255)",
		incoming: [171,172],
		outgoing: [173,170,47]
	},

	{
		id: 29,
		text: "WHAT ARE YOU TALKING ABOUT?? &nbsp;I'M TRYING TO DEFEND HER",
		color: "rgb(255, 250, 107)",
		incoming: [28,95,114,167,169,168],
		outgoing: [30,170,172,173]
	},

	{
		id: 98,
		text: "LOOP: (sorry bro look at Gary)",
		color: "rgb(255, 255, 102)",
		incoming: [88,94,99,65],
		outgoing: [85,99,91]
	},

	{
		id: 47,
		text: "(To Claire) He got you that job because he wants to get closer to you. But you don't see it, because you're so self obsessed.",
		color: "rgb(0, 255, 85)",
		incoming: [30,95,171,172,177,173,189,188,170],
		outgoing: [122,175,174,186]
	},

	{
		id: 94,
		text: "(to Gary) you are the slimiest",
		color: "rgb(255, 250, 107)",
		incoming: [89,55,53],
		outgoing: [91,95,84,98]
	},

	{
		id: 173,
		text: "but Nick; You are acting a bit weird, bud. Why don't you cool it for a minute",
		color: "rgb(255, 0, 0)",
		incoming: [29,30,171,172,168,177],
		outgoing: [186,47,189,188]
	},

	{
		id: 91,
		text: "I am the catalyst for positive change in this world",
		color: "rgb(132, 0, 0)",
		incoming: [88,94,55,98,99],
		outgoing: [92]
	},

	{
		id: 170,
		text: "This is about what Gary did, not me",
		color: "rgb(255, 250, 107)",
		incoming: [29,171,172,177],
		outgoing: [47,188,189,186]
	},

	{
		id: 175,
		text: "FUCK YOU NICK!",
		color: "rgb(255, 250, 107)",
		incoming: [47,174],
		outgoing: [174,122,184,185,186]
	},

	{
		id: 174,
		text: "FUCK YOU NICK!",
		color: "rgb(0, 212, 255)",
		incoming: [47,175],
		outgoing: [175,122,185,184,186]
	},

	{
		id: 184,
		text: "LOOP: at Nick",
		color: "rgb(255, 250, 107)",
		incoming: [174,175,186,187,185],
		outgoing: [122,185,187]
	},

	{
		id: 92,
		text: "BARF! &nbsp;Let's try that again",
		color: "rgb(169, 169, 169)",
		incoming: [91],
		outgoing: []
	},

	{
		id: 189,
		text: "LOOP: still confused",
		color: "rgb(0, 212, 255)",
		incoming: [173,188,170],
		outgoing: [186,47,188]
	},

	{
		id: 188,
		text: "LOOP: at Nick",
		color: "rgb(255, 255, 102)",
		incoming: [173,189,170],
		outgoing: [47,189,186]
	},

	{
		id: 185,
		text: "LOOP: at Nick",
		color: "rgb(0, 212, 255)",
		incoming: [174,175,186,187,184],
		outgoing: [184,122,187]
	},

	{
		id: 187,
		text: "LOOP: at Nick",
		color: "rgb(255, 0, 0)",
		incoming: [186,185,184],
		outgoing: [185,184,122]
	},

	{
		id: 186,
		text: "It starting to seem like you want us all to fight",
		color: "rgb(255, 0, 0)",
		incoming: [47,174,175,173,189,188,170],
		outgoing: [185,184,122,187]
	},

	{
		id: 122,
		text: "And Gary, Claire doesn't actually value your input, she just makes fun of you behind your back",
		color: "rgb(0, 255, 85)",
		incoming: [47,174,175,186,187,185,184],
		outgoing: [166,178,179,180]
	},

	{
		id: 166,
		text: "LOOP: folded arms. &nbsp;pleased with himself",
		color: "rgb(0, 255, 85)",
		incoming: [122],
		outgoing: [178,179,180]
	},

	{
		id: 179,
		text: "Nick what is your problem right now?",
		color: "rgb(255, 0, 0)",
		incoming: [122,166],
		outgoing: [121,182,183,181]
	},

	{
		id: 178,
		text: "Why are you being such a piece of shit right now??",
		color: "rgb(0, 212, 255)",
		incoming: [122,166],
		outgoing: [121,183,182]
	},

	{
		id: 182,
		text: "LOOP: at Nick",
		color: "rgb(255, 0, 0)",
		incoming: [178,179,180,183],
		outgoing: [121,183,181]
	},

	{
		id: 180,
		text: "You're being a huge asshole right now Nick",
		color: "rgb(255, 250, 107)",
		incoming: [122,166],
		outgoing: [121,181,183,182]
	},

	{
		id: 183,
		text: "LOOP: at Nick",
		color: "rgb(0, 212, 255)",
		incoming: [178,179,180,181,182],
		outgoing: [121,182,181]
	},

	{
		id: 181,
		text: "LOOP: at Nick",
		color: "rgb(255, 255, 102)",
		incoming: [179,180,182,183],
		outgoing: [121,183]
	},

	{
		id: 121,
		text: "I'm just calling it like I see it. &nbsp;I don't think you guys should be allowed to act as carelessly anymore as you did when your fuckup caused the last straw between Lisa and I. &nbsp;All 3 of you deserve to be miserable",
		color: "rgb(0, 132, 44)",
		incoming: [113,178,179,180,181,182,183],
		outgoing: [152]
	},

	{
		id: 152,
		text: "Nick is much more evil than any of us may have previously realized. &nbsp;Let's watch again",
		color: "rgb(169, 169, 169)",
		incoming: [121],
		outgoing: []
	},

]