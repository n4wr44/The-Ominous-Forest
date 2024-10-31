// This file contains all the scene and dialogue options.
// Each scene is an item in the object - the key represents and acts as an identifier for a scene.
// Scenes have the following options:
// character (optional) - this displays the characters name above the dialogue.
// text - this displays the text for the scene.
// background - this is the name of the image for background and looks for it in the images/ folder.
// choices - this is a list of dialogue options, which contains the text for the option as well as a nextScene option to decide where it goes next.
const story = {
    start: {
      character: "Narrator",
      text: "You wake up in a dark forest with no memory of how you got there. The trees loom around you",
      background: "forest.jpg",
      choices: [
        { text: "Walk forward", nextScene: "path" },
        { text: "Look around", nextScene: "npc1" }
      ]
    },
    path: {
      text: "You find a narrow path leading to a village. A person is approaching",
      background: "path1.jpg",
      choices: [
        { text: "Talk to the stranger", nextScene: "npc1" },
        { text: "Walk toward the village", nextScene: "village" }
      ]
    },
    npc1: {
      character: "Mysterious Stranger",
      text: "Helle there.. it's rare to see someone wandering alone in the woods..",
      background: "path1.jpg",
      npcImage: "mysterious_stranger.png",
      choices: [
        { text: "Where am I?", nextScene: "npc1_forest" },
        { text: "Is there a village ahead?", nextScene: "npc1_village" },
        { text: "I think.. I think I'm lost", nextScene: "npc1_lost" }
      ]
    },
    npc1_forest: {
      character: "Mysterious Stranger",
      background: "path1.jpg",
      text: "Ah.. I see now..",
      texe: "The forest mustve called you in.. let me warn you.. the forest is old and full of secrets. many have entered, but few leave.",
      choices: [
        { text: "How the hell does that help me at all? I'm better off finding help at that villag!", nextScene: "village" },
        { text: "Ok... do you know a way out then?", nextScene: "npc1_help" }
      ]
    },
    npc1_village: {
      character: "Mysterious Stranger",
      background: "path1.jpg",
      text: "The village? It’s quiet... almost too quiet. Be cautious.",
      choices: [
        { text: "I'm already shaking in my pants.. this does not help at all, excuse me now I'm heading there anyways!", nextScene: "village" },
        { text: "Why? what happened? usually villages are lively and full of people!", nextScene: "npc1_warning" }
      ]
    },
    npc1_lost: {
      character: "Mysterious Stranger",
      background: "path1.jpg",
      text: "Lost, are you? then tread carefully. The forest is unforgiving.",
      choices: [
        { text: "Thank you for warning me.. but I sort of already gathered that.. excuse me, I'll be making my way to that village now", nextScene: "village" },
        { text: "Can you help me find my way? I have a feeling someoneis watching me..", nextScene: "npc1_help" }
      ]
    },
    npc1_help: {
      character: "Mysterious Stranger",
      background: "path1.jpg",
      text: "I can show you the way, but you must be brave. follow the path and trust yourself.",
      choices: [
        { text: "That's kind of reassuring.. Thanks alot!", nextScene: "village" }
      ]
    },
    npc1_warning: {
      character: "Mysterious Stranger",
      background: "path1.jpg",
      text: "The village... something isn't right. People disappear without a trace. Be wary.",
      choices: [
        { text: "That doesn't sound good at all.. but I'm already lost so I might as well see what's in there", nextScene: "village" }
      ]
    },
    village: {
      character: "Narrator",
      text: "You arrive at a small, quiet village. An old man sits near a well, and a young woman is tending to some flowers.",
      background: "village1.jpg",
      choices: [
        { text: "Talk to the old man", nextScene: "npc2" },
        { text: "Talk to the young woman", nextScene: "npc3" },
        { text: "Explore the village", nextScene: "village_explore" }
      ]
    },
    
    npc2: {
      character: "Old Man",
      background: "village1.jpg",
      text: "Ah, a new face!new face? I feel like I've seen you before.. I miss seeing new faces...",
      choices: [
        { text: "Hello.. do you happen to know why the village is so quiet?", nextScene: "npc2_history" },
        { text: "Hi.. this village seems dangoures.. why havent you and the young girl move elsewhere?", nextScene: "npc2_dangers" }
      ]
    },
    npc2_history: {
      character: "Old Man",
      background: "village1.jpg",
      text: "This village was once prosperous, but now, shadows loom!! LOOM!! everywhere... scary.. I'm scared.. \n Ahem.. Some say it’s cursed.",
      choices: [
        { text: "Sorry but I have to be on my way now..", nextScene: "village" },
        { text: "Cursed? why and.. how?", nextScene: "npc2_curse" }
      ]
    },
    npc2_dangers: {
      character: "Old Man",
      background: "village1.jpg",
      text: "Hide.. There are beasts in the forest. If you value your life, stay on the path.",
      choices: [
        { text: "*how is he surviving fine then.. is he lying?* thank you for letting me know, please take care of yourself..", nextScene: "village" }
      ]
    },
    npc2_curse: {
      character: "Old Man",
      background: "village1.jpg",
      text: "A curse.. They say it fell upon us after a dark ritual gone wrong. No one dares to speak of it.",
      choices: [
        { text: "*that sounds ominous.. I better be careful exploring the village* Ah that sounds terrible.. I'm sorry but I have to be on my way now..", nextScene: "village" }
      ]
    },
    npc3: {
      character: "Young Woman",
      background: "village1.jpg",
      text: "Hello.. You look familiar but I'm not sure if I have seen you before.. Are you here to help us?",
      choices: [
        { text: "Help? with what?", nextScene: "npc3_help" },
        { text: "What's those flowers for?", nextScene: "npc3_flowers" }
      ]
    },
    npc3_help: {
      character: "Young Woman",
      background: "village1.jpg",
      text: "There's been a darkness creeping in... We need someone brave to seek out its source.",
      choices: [
        { text: "*I better help.. It might help me too* Alright.. what do you need help with?", nextScene: "help" },
        { text: "Darkness? creeping? no thanks. I have my own problems to tend to.", nextScene: "npc3_disappointment" }
      ]
    },
    npc3_flowers: {
      character: "Young Woman",
      background: "village1.jpg",
      text: "These flowers bring light to the village. It's my small way of fighting the darkness.",
      choices: [
        { text: "That's very brave of you, why are you fighting it?", nextScene: "npc3_darkness" }
      ]
    },
    npc3_disappointment: {
      character: "Young Woman",
      background: "village1.jpg",
      text: "Oh... I see. Well, if you change your mind, we could really use your help.",
      choices: [
        { text: "Sure...", nextScene: "village" }
      ]
    },
    npc3_darkness: {
      character: "Young Woman",
      background: "village1.jpg",
      text: "Something evil lurks in the forest. People have gone missing, and strange sounds echo at night, I'd like to think the flowers keep them away..",
      choices: [
        { text: "Ah i see, I hope it continues working..", nextScene: "village" }
      ]
    },
    
    village_explore: {
      character: "Narrator",
      text: "You wander around the quiet village, feeling a strange presence watching you.",
      background: "village1.jpg",
      choices: [
        { text: "Keep following the path", nextScene: "cave" }
      ]
    },
    help: {
      character: "Narrator",
      text: "You've agreed to help the village. You proceed to walk down the path.. hoping to find a solution",
      background: "village1.jpg",
      choices: [
        { text: "walk down the path", nextScene: "forest_quest" }
      ]
    },
    forest_quest: {
      character: "Narrator",
      background: "path2.jpg",
      text: "You continue walking the path, feeling the weight of the villagers hopes on your shoulders",
      choices: [
        { text: "Continue forward", nextScene: "cave" }
      ]
    },
    cave: {
      character: "Narrator",      
      background: "cave_enterance.jpg",
      text: "The path leads you to a cave, You spot a torch at the entrance. \n you feel extremely confident this is where the problem lies",

      choices: [
        { text: "Pick the torch and Look around", nextScene: "npc1_cave" }
      ]
    },
    npc1_cave: {
        character: "Mysterious Stranger",
        background: "cave.jpg",
        text: "Hello again.. heh\nIt seems like you've agreed to help the villigars.. what's left of them at least",
        choices: [
          { text: "Whoah! That made my heart skip.. did you follow me here?", nextScene: "npc1_follow" },
          { text: "You again.. what do you want? I'm in the middle of doing something here", nextScene: "npc1_annoyed" }
        ]
      },
      npc1_annoyed: {
        character: "Mysterious Stranger",
        background: "cave.jpg",
        text: "you ought to stop being so aroggant and mind your surroundings ya know..",
        choices: [
          { text: "Yeah sure, you are creepy man just go fill someone else's brain with all that", nextScene: "npc1_evil" },
        ]
      },
      npc1_follow: {
        character: "Mysterious Stranger",
        background: "cave.jpg",
        text: "Who do you think has been following you this entire time?",
        choices: [
          { text: "Are you.. are you the one who caused all of this", nextScene: "npc1_evil" },
          { text: "I knew you had a weird vibe around you, you reeked of darkness", nextScene: "npc1_evil" }
        ]
      },
      npc1_evil: {
        character: "The forest wrath",
        background: "cave.jpg",
        text: "I tried warning you\nIt seems like you people don't listen, i told you many times..\nthe forest is dangerous, DANGEROUS",
        choices: [
          { text: "Why are you doing this?!", nextScene: "npc1_explain" },
          { text: "If it was up to me I would burn this whole forest down.", nextScene: "npc1_fight" }
        ]
      },

      npc1_explain: {
        character: "The forest wrath",
        background: "cave.jpg",
        text: "You.. You have been a parasite, ",
        choices: [
          { text: "...", nextScene: "npc1_explain2" } ]
      },

      npc1_explain2: {
        character: "The forest wrath",
        background: "cave.jpg",
        text: "Leeching off me, taking me apart for your silly plans, villages, wells, roads.. ",
        choices: [
          { text: "...", nextScene: "npc1_fight" } ]
      },

      npc1_fight: {
        character: "The forest wrath",
        background: "cave.jpg",
        text: "I WILL PURIFY THE FOREST FROM THE LIKES OF YOU\n YOU AND THE VILLIGARS",
        choices: [
          { text: "Throw the torch at the mysterious creature", nextScene: "npc1_death1" },
          { text: "Flee for your life", nextScene: "forest_2village" }
        ]
      },

      npc1_death1: {
        character: "The forest wrath",
        background: "cave.jpg",
        text: "Noo.... it burns.. burns..",
        choices: [
          { text: "...", nextScene: "npc1_death2" } ]
      },

      npc1_death2: {
        character: "The forest wrath",
        background: "cave.jpg",
        text: "you fool.. the forest.. who'll protect it..",
        choices: [
          { text: "As if I know! as long as it's someone who isn't as creepy as you..", nextScene: "npc1_death3" } ]
      },

      
      npc1_death3: {
        character: "The forest wrath",
        background: "cave.jpg",
        text: "you'll p... ayy..",
        choices: [
          { text: "Your memories began to return", nextScene: "forest_victory" } ]
      },

      
      forest_victory: {
        character: "You",
        background: "forest2.jpg",
        text: "the village.. i remember now",
        choices: [
          { text: "...", nextScene: "remembering" } ]
      },

      forest_2village: {
        character: "You",
        background: "forest2.jpg",
        text: "That thing was massive! I better keep running now!! ah my head... it hurts..",
        choices: [
          { text: "...", nextScene: "remembering" } ]
      },

      remembering: {
        character: "You",
        background: "forest2.jpg",
        text: "I.. I remember now I was on my way to fetch water.. and then heard a sound calling deep in the forest.. the rest is a blur",
        choices: [
          { text: "...", nextScene: "remembering2" } ]
      },

      remembering2: {
        character: "You",
        background: "forest2.jpg",
        text: "I better warn the villagers",
        choices: [
          { text: "Run to the village", nextScene: "back_2village" } ]
      },

      
      back_2village: {
        character: "Narrator",
        background: "village1.jpg",
        text: "You see the old man, dizzy and shocked..",
        choices: [
          {text: "talk to the old man", nextScene: "npc2_shocked" },]

      },

      npc2_shocked: {
        character: "The old man",
        background: "village1.jpg",
        text: "You.. I remember you now, well.. sort off.. ahh my head hurts..",
        choices: [
          {text: "You are in shock, You need to flee the village now.. it's too dangerous", nextScene: "explain_2npc2" },
          {text: "There is no time now.. You have to come with me immdeietly!!", nextScene: "npc2_agrees" } ]

      },

      explain_2npc2: {
        character: "You",
        background: "village1.jpg",
        text: "The forest is angry, it doesn't welcome us anymore.. \n we better find the girl and leave now!",
        choices: [
          {text: "Look around for the girl", nextScene: "npc3_nawake" } ]

      },

      npc2_agrees: {
        character: "The old man",
        background: "village1.jpg",
        text: "No time? danger... I'll come with you but we need to find the girl first..",
        choices: [
          {text: "Look around for the girl", nextScene: "npc3_nawake" } ]

      },
      npc2_agrees: {
        character: "Narrator",
        text: "You look around for the girl, you find her passed out barely conscious",
        choices: [
          {text: "Carry the girl with you", nextScene: "run_away" },
          {text: "Nodge the girl to wake her up", nextScene: "npc3_nawake" }]
      },

      npc3_nawake: {
        character: "You",
        background: "village1.jpg",
        text: "You nodge the girl hoping she'd wake up.. she groans but doesnt respond",
        choices: [
          {text: "*Damn it! She's not waking up.. guess I'll carry her* Carry the girl with you", nextScene: "run_away" } ]
      },

      run_away: {
        character: "Narrator",
        background: "forest2.jpg",
        text: "As you flee the woods, the sun begins to rise, and you start feeling a sense of relief and sadness covering your heart \n you are unsure why at the moment but relieved to have gotten to this point",
        choices: [
          {text: "I'm just glad I'm out of this hell", nextScene: "quick_end" },
          {text: "*Ask the old man* \n That was one hell of a nightmare, What happened to the rest of the villagers?", nextScene: "npc2_answers" }]
      },

      npc2_answers: {
        character: "The old man",
        background: "forest2.jpg",
        text: "The voices called.. They lured each villager, one by one",
        choices: [
          {text: "...", nextScene: "npc2_answers2" }, ]
      },
      npc2_answers2: {
        character: "The old man",
        background: "forest2.jpg",
        text: "I still hear them.. the voices... familiar ones",
        choices: [
          {text: "...", nextScene: "npc2_answers3" }, ]
      },
      npc2_answers3: {
        character: "The old man",
        background: "forest2.jpg",
        text: "The villagers turned into this forest, the woods, the land, it consumed them, gaining back what was lost and used",
        choices: [
          {text: "They became part of the forest?", nextScene: "npc2_answers4" }, 
          {text: "I understand what happened now.. Dont think of it now! we need to keep moving..", nextScene: "end" }, ]
      },
      npc2_answers4: {
        character: "The old man",
        background: "forest2.jpg",
        text: "It was all meant to be a ritual to thank the gods, but we were too arrogant.. too selfish..",
        choices: [
          {text: "...", nextScene: "npc2_silence" }, ]
      },
      npc2_silence: {
        character: "The old man",
        background: "forest2.jpg",
        text: "Ahh.. the ritual.. the ritual... the voices.. the village... it hurts ",
        choices: [
          {text: "Don't think of it now, stay focused on moving.. ", nextScene: "end" }, ]
      },

      quick_end: {
        character: "Narrator",
        background: "forestend.jpg",
        text: "You flee with the old man and the young girl, you feel at ease to have left and saved what's left of the village",
        choices: [
          {text: "Don't think of it now, stay focused on moving.. ", nextScene: "end" }, ]
      },

      end: {
        character: "Narrator",
        background: "forestend.jpg",
        text: "You flee with the rest of the village, you feel a sense of sadness, you can't believe the rest of the village has vanished for ever..",
        choices: [
            { text: "Return to Start", nextScene: "reset" }
          ]
        }
      };