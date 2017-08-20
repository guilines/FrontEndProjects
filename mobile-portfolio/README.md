## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.


## Optimizations
- Minified and Inlined CSS

- Used the preload technique for fonts, code example:

   `<link rel="preload" href="//fonts.googleapis.com/css?family=Open+Sans:400,700" as="style" onload="this.rel='stylesheet'">`
   
   `<noscript>
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:400,700">   
   </noscript>`

- Moved scripts to the bottom of the BODY

- Added media=“print” to print.css

- Local images instead of getting from internet

- In views/js/main.js - Improved updatePositions() and resizePizzas() to get 60FPS
