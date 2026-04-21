# Student Name: [Your First and Last Name]

## 1. My Assigned Work
I worked on the polishing up and modifying the overview page which can be found:
```
- src
    - components
        - overview (All files in here)
        Overview.js
```

## 2. AI / LLM Usage
I used Claude to help with my portion of the project. I mainly used Claude to expedite tedious tasks. Moving inline CSS to a standalone file, dividing the old html file into components with no modification; the most "lazy" I got with it was when redesigning the layout to make it feel more professional, I asked Claude to make edits, but that was mainly me knowing how I wanted to look, so I had Claude do 80-90% of the css work, then added addtional modifications to get it the rest of the way there. The only area where I used Claude to generate actual functional code (that I had no prior idea of what to do) was to have the bucket progress bar to make the overview page stand out a bit more visually. I learned just how hard it is to animate that sort of thing (and also draw) using HTML/CSS. I mainly did it out of curiosity, half expecting the output to be not at all good enough to use, and I was expecting to see something similar to one of the projects I worked on in my job where they use JSON for animation data, so I learned a new way of doing it. The way it mainly works is that it draws a bucket shape using lines, and has a rectangle that rises with the percentage to fill in the bucket. There's then a clip path that's just a trapezoid that masks only the "water" inside the bucket. Lastly we create a path, or a sine wave, that rests on top of the rectangle that loops to give the wave effect.

## 3. Live Site Link
*As of time of writing the overview page, being the only completed one, is the homepage:*
https://vcu-257.github.io/iteration-2-build-with-style-group-10/
* *It should be here when all the pages get implemented:* https://vcu-257.github.io/iteration-2-build-with-style-group-10/overview.html