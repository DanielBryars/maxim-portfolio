// Art catalogue. Maxim — fill in the blanks for each piece!
// Fields: file, title, date, medium, description (description includes the source/reference)
const ART = [
    {
        file: "Bloody hands study.png",
        title: "Bloody Hands Study",
        date: "2025",
        medium: "Krita on Huion drawing tablet",
        description: "This is a study of a painting by the artist Guweiz, which I felt was very successful, but now I have a fear of drawing hands ever again..."
    },
    {
        file: "Cat Bowl.jpg",
        title: "Cat Bowl",
        date: "2024",
        medium: "Graphite",
        description: "An A3 tonal study of my cat's food bowl."
    },
    {
        file: "DUNE.jpg",
        title: "Dune",
        date: "2024",
        medium: "Krita on Huion drawing tablet",
        description: "A quicker experiment with brushes in Krita, based off a poster from the Dune franchise."
    },
    {
        file: "Eun Sian.png",
        title: "Eun Sian",
        date: "2026",
        medium: "Watercolour",
        description: "A watercolour study of a panel from the webcomic 'Secret Alliance'. ^v^"
    },
    {
        file: "Eye Sunset.png",
        title: "Eye Sunset",
        date: "2026",
        medium: "Acrylic",
        description: "An attempt at painting an eye in the style of Lara Kavanagh."
    },
    {
        file: "Eye.png",
        title: "Eye",
        date: "2024",
        medium: "Krita on Huion drawing tablet",
        description: "Painting my own eye in a semi-realistic style."
    },
    {
        file: "Powder faces.png",
        title: "Powder Faces",
        date: "2024",
        medium: "Markers",
        description: "A page of marker drawings of Powder from Arcane season 2, episode 7 — my favourite episode of my favourite series."
    },
    {
        file: "Fami Chainsaw Man.png",
        title: "Fami — Chainsaw Man",
        date: "2025",
        medium: "Watercolour",
        description: "The Famine Devil from Chainsaw Man. I love the purple in the character design!"
    },
    {
        file: "Frieren and Fern.png",
        title: "Frieren and Fern",
        date: "2025",
        medium: "Watercolour",
        description: "Based on the cover art for the Spotify album of the Frieren soundtrack. I attempted a softer, more pastel tone without linework — and I really love it!"
    },
    {
        file: "Frieren.png",
        title: "Frieren",
        date: "2025",
        medium: "Watercolour",
        description: "A simple study from the anime Frieren: Beyond Journey's End. The art in this series is truly inspirational."
    },
    {
        file: "Gwen Stacey Spiderverse 2.png",
        title: "Gwen Stacy (Spider-Verse) 2",
        date: "2024",
        medium: "Krita on Huion drawing tablet",
        description: "A study of one of the concept art pieces in the official artbook for Across the Spider-Verse. I just NEEDED to use some of these crazy colours — I still don't quite understand how they work so seamlessly though."
    },
    {
        file: "Gwen Stacey Spiderverse.png",
        title: "Gwen Stacy (Spider-Verse)",
        date: "2024",
        medium: "Krita on Huion drawing tablet",
        description: "A study of Gwen Stacy from an artist on ArtStation, which I dedicated to my mum for her birthday (you may be able to tell from the words hidden in the webbing)."
    },
    {
        file: "I love Yoo.png",
        title: "I Love Yoo",
        date: "2026",
        medium: "Watercolour",
        description: "A watercolour study of an emotional panel from the webcomic 'I Love Yoo'."
    },
    {
        file: "Ice Jio Chibi.png",
        title: "Ice Jio Chibi",
        date: "2026",
        medium: "Krita on Huion drawing tablet",
        description: "A quick experiment with custom brushes. The reference is from the webcomic 'A Ranker's Guide to the Good Life'."
    },
    {
        file: "Jinx scared.png",
        title: "Jinx Scared",
        date: "2025",
        medium: "Krita on Huion drawing tablet",
        description: "A shot from one of my favourite scenes of Arcane. I'm glad that I only had to draw one eye. #runfromyourresponsibilities"
    },
    {
        file: "Jinx.jpg",
        title: "Jinx",
        date: "2024",
        medium: "Krita on Huion drawing tablet",
        description: "Based on a poster of Jinx I found online. I only changed a few elements from the reference, but this was one of the first digital pieces I felt happy with."
    },
    {
        file: "Jinx watercolour.png",
        title: "Jinx Watercolour",
        date: "2025",
        medium: "Watercolour",
        description: "When the Arcane Artbook arrived from Amazon, I absolutely could not give up the chance to paint some fanart."
    },
    {
        file: "Jio 1.png",
        title: "Jio 1",
        date: "2025",
        medium: "Watercolour",
        description: "A quick study of Jio, the protagonist of the webcomic 'A Ranker's Guide to the Good Life', that I did in my free period instead of revising..."
    },
    {
        file: "Jio Profile pic.png",
        title: "Jio Profile Pic",
        date: "2025",
        medium: "Watercolour",
        description: "This is my current profile pic on WhatsApp."
    },
    {
        file: "Jiwoo Study.png",
        title: "Jiwoo Study",
        date: "2025",
        medium: "Watercolour",
        description: "A panel from the webcomic Eleceed that was a blast to do. I love the scratchy style and saturated colouring of the artist's work."
    },
    {
        file: "Kaiden Poster.png",
        title: "Kaiden Poster",
        date: "2025",
        medium: "Watercolour",
        description: "A poster of the character Kaiden from the webcomic Eleceed. I formatted lots of different reference shots from the webtoon into one page to fully highlight this awesome character!"
    },
    {
        file: "Lelouch Vi Britannia.png",
        title: "Lelouch Vi Britannia",
        date: "2025",
        medium: "Watercolour",
        description: "A painting of Lelouch from Code Geass — an older anime with a fantastically written ending."
    },
    {
        file: "Lincoln.png",
        title: "Lincoln",
        date: "2024",
        medium: "Watercolour",
        description: "A large-scale watercolour painting of my brother Lincoln. I attempted a blur in the background and some stylistic raindrops in the foreground — I am pretty happy with the finished piece, even if it is slightly clashing colour-wise."
    },
    {
        file: "Makima.png",
        title: "Makima",
        date: "2025",
        medium: "Watercolour",
        description: "The source for this painting was the front cover of the Chainsaw Man manga box set. I thought it captured her personality dangerously well, so I chose to paint it using quick, loose strokes with 2 or fewer layers per element."
    },
    {
        file: "Mel.png",
        title: "Mel",
        date: "2024",
        medium: "Krita on Huion drawing tablet",
        description: "I wanted to paint Mel (from Arcane) to practice painting metal. I've learnt how painful jewellery is to paint, but also how eye-catching it can be."
    },
    {
        file: "Tokyo Ghoul.png",
        title: "Tokyo Ghoul",
        date: "2025",
        medium: "Watercolour",
        description: "A painting of Kaneki from Tokyo Ghoul. I experimented without lineart or a reference for this one."
    },
    {
        file: "Old Man.png",
        title: "Old Man",
        date: "2024",
        medium: "Krita on Huion drawing tablet",
        description: "A study of a painting by SamDoesArts. I wanted to learn more about facial structure and rim lighting."
    },
    {
        file: "Portrait - suffocation.png",
        title: "Portrait — Suffocation",
        date: "2026",
        medium: "Krita on Huion drawing tablet",
        description: "A digital photo study. I am starting to put my own stylistic choices into my rendering, but I still have a long way to go."
    },
    {
        file: "Portrait Graphite.png",
        title: "Portrait Graphite",
        date: "2024",
        medium: "Graphite",
        description: "A simple tonal study that I really enjoyed drawing. For my pencil drawings I dislike any type of smudging, so this is all shaded with pencil strokes."
    },
    {
        file: "Portrait Tom.png",
        title: "Portrait Tom",
        date: "2024",
        medium: "Watercolour",
        description: "A watercolour painting of my friend Tom. Being a goober. As always."
    },
    {
        file: "Powder.png",
        title: "Powder",
        date: "2023",
        medium: "Markers",
        description: "After watching Arcane for the first time, I immediately drew the two main characters — starting with Powder. ^^"
    },
    {
        file: "Sam Does Arts Study 2.png",
        title: "Sam Does Arts Study 2",
        date: "2024",
        medium: "Krita on Huion drawing tablet",
        description: "Sooo many bottles!!! A study of SamDoesArts, where I definitely grew more confident with my digital brushstrokes after so many repetitive motions."
    },
    {
        file: "Sam Does Arts Watercolour.png",
        title: "Sam Does Arts Watercolour",
        date: "2025",
        medium: "Watercolour",
        description: "A watercolour study of a painting by my favourite artist. The way he uses lighting and contrast so efficiently is mind-boggling."
    },
    {
        file: "Sam Does Arts study.png",
        title: "Sam Does Arts Study",
        date: "2024",
        medium: "Krita on Huion drawing tablet",
        description: "A tonal study of a painting by SamDoesArts. It was hard to get used to leaving the sketch layer on over my rendering."
    },
    {
        file: "Self Portrait.png",
        title: "Self Portrait",
        date: "2024",
        medium: "Krita on Huion drawing tablet",
        description: "A larger version of my 'Eye' piece, based on a photo of yours truly."
    },
    {
        file: "Shadow Slave.png",
        title: "Shadow Slave",
        date: "2026",
        medium: "Watercolour",
        description: "A watercolour rendition of a digital fanart by artist Illithi, from the novel Shadow Slave."
    },
    {
        file: "Shrike.png",
        title: "Shrike",
        date: "2024",
        medium: "Krita on Huion drawing tablet",
        description: "My first try at a completely original composition. I wanted to depict the character Shrike, a cyborg from the book series Mortal Engines."
    },
    {
        file: "Skulls.jpg",
        title: "Skulls",
        date: "2023",
        medium: "Graphite",
        description: "The skulls of my enemies, rendered in painstaking detail."
    },
    {
        file: "Snowy landscape.png",
        title: "Snowy Landscape",
        date: "2024",
        medium: "Krita on Huion drawing tablet",
        description: "A study of a beautiful digital landscape painting by artist Alena Aenami. I wanted to practice looseness and confidence in my background painting, which this artist is an absolute master at."
    },
    {
        file: "Spiderverse.jpg",
        title: "Spider-Verse",
        date: "2023",
        medium: "Markers",
        description: "A famous scene from the movie Into the Spider-Verse, which I am a huge fan of. I had to learn to use three-point perspective, and the complexity of the buildings added to the final result taking over 10 hours — a figure I would love to decrease..."
    },
    {
        file: "Tessa Sketch.png",
        title: "Tessa Sketch",
        date: "2024",
        medium: "Krita on Huion drawing tablet",
        description: "A study I made of a painting by SamDoesArts. I love the style of smooth, sharp brushes with just a couple of unique textures — such as the rake brush — that really differentiate the hair from the rest of the painting. I think I definitely enjoy drawing people and characters more than anything else."
    },
    {
        file: "Touka 1.png",
        title: "Touka 1",
        date: "2025",
        medium: "Watercolour",
        description: "I painted a couple of scenes of my favourite character of Tokyo Ghoul, Touka Kirishima. I find the black-and-white manga style very pleasing to paint, yet also simple to accomplish."
    },
    {
        file: "Touka 2.png",
        title: "Touka 2",
        date: "2025",
        medium: "Watercolour",
        description: "I painted a couple of scenes of my favourite character of Tokyo Ghoul, Touka Kirishima. I find the black-and-white manga style very pleasing to paint, yet also simple to accomplish."
    },
    {
        file: "Trex Skeleton.png",
        title: "T-Rex Skeleton",
        date: "2024",
        medium: "Watercolour, pen and acrylic",
        description: "For my GCSE coursework I chose a topic on dinosaurs! This Tyrannosaurus Rex was captured on my camera from the Natural History Museum in London, and I mismatched watercolour, pen and acrylic — which somehow turned out looking good."
    },
    {
        file: "Vi Goth Pits tonal.png",
        title: "Vi — Goth Pits (Tonal Study)",
        date: "2025",
        medium: "Krita on Huion drawing tablet",
        description: "A quick tonal study of a fanart of Vi from Arcane, done originally by SamDoesArts. His style is the epitome of what I want to achieve: perfect shape language, lighting and colours, in the most efficient way possible."
    },
    {
        file: "Vi and Jinx.png",
        title: "Vi and Jinx",
        date: "2024",
        medium: "Krita on Huion drawing tablet",
        description: "A study of an official poster released for the series Arcane before season 1 aired. Can you spot the hidden word in the painting?"
    },
    {
        file: "Vi.png",
        title: "Vi",
        date: "2023",
        medium: "Markers",
        description: "After watching Arcane for the first time, I immediately drew the two main characters. For this artwork of Vi I used the brand new marker set my brother got for his birthday — wait what!?..."
    },
    {
        file: "Watercolour Portrait.png",
        title: "Watercolour Portrait",
        date: "2024",
        medium: "Watercolour",
        description: "A study of the artist Ko Byung Jun that I did for school. I think it was after this painting that I truly fell in love with watercolour. S-tier medium."
    },
    {
        file: "Who are you.png",
        title: "Who Are You",
        date: "2026",
        medium: "Krita on Huion drawing tablet",
        description: "My first try at a rather abstract piece. The feeling I was attempting to capture was something along the lines of this: a feeling of betrayal or loss from someone close to you that ends in you feeling they are a stranger, or that you have never truly known them at all. My attempt at androgynous features and use of crazed brushstrokes leaves a lot to be desired here, but I found lots to learn from too."
    },
    {
        file: "Louis the King.png",
        title: "Louis the King",
        date: "2025",
        medium: "Acrylic",
        description: "My Final Exam painting for GCSE art, which was a joy to do. I planned everything out well and was perfectly on time for each step in the painting, so I finished the last details as the exam ended. Absolutely one of my favourite paintings I have done so far."
    }
];
