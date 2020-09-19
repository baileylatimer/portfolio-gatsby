---
title: Creating a Dynamic Photo-Grid with CSS Blend Modes
author: Bailey Latimer
date: '2020-02-24'
excerpt: Automating how Crown Equipment uploads photos to their staff screen.
hero: images/Crown--cover.jpg
---
![](https://cdn-images-1.medium.com/max/1200/1*QKXSSG2rklPc4MbvxcQx-g.gif)

> “Don’t major in the minors”— Jim Rohn

Life is short. If you find yourself doing the same repetitive tasks over and over again, find a better way. When design meets automation, it’s a beautiful thing.

Those 10 precious seconds you spent waiting for Photoshop to open could have been spent doing something more productive.

- - -

### Helping a smart company become smarter

Crown Equipment combines smart software and tough hardware to revolutionize how forklifts are made. I helped the Crown Design team **automate the way they upload photos to their staff screen.**

![](https://cdn-images-1.medium.com/max/800/1*S8aTzsXehAJgJpAsAbcNag.gif)

TLDR; The non-destructive editing flow

#### Staff Screen

Crown wanted the site to help recruit top talent. Each team member’s photo is featured on the staff screen, giving potential recruits an idea of who they’ll work with.

However, there was a problem. **The photo uploading process was tedious and unsustainable.**

![](https://cdn-images-1.medium.com/max/800/1*SSbAaC6LzMpnfITyh1TnLA.png)

- - -

### Static images = Zero flexibility

Each photo is colored orange, teal, or beige. They are manually organized to keep matching colors from touching.

![](https://cdn-images-1.medium.com/max/800/1*tEvA5EuCCuKWIHGjXbPYrg.png)

Originally, each image was colored in Photoshop. This means an employee was stuck with their color until a new image was uploaded. When an employee left, colors touched and the pattern failed.

1. **Employee #2 leaves 🚶‍♂️**
2. **Pattern fails 💀**

![](https://cdn-images-1.medium.com/max/800/0*0ltFsNSAyV9-l6iZ.gif)

The pattern broke whenever someone left or a new employee was hired. To fix the pattern,we had to:

1. **Remove existing image**
2. **Colorize new image in Photoshop**
3. **Upload new colorized image to site**
4. **Rearrange images so colors don’t touch**

After doing this a few times, I thought to myself:

> What if I could use CSS to color the photos automatically?

![](https://cdn-images-1.medium.com/max/800/0*cUROUUYdnYy0I7gm.gif)

#### And so I did 🤖.

- - -

### How I made it dynamic

I achieved this entirely in CSS with pseudo elements and SVG filters. To soften the blacks, I added an overlay to each image creating a duotone effect (similar to Spotify).

Vail Joy has an [excellent tutorial](https://webdesignerwall.com/tutorials/create-spotify-colorizer-effects-css-blend-modes) if you’d like to learn how to do this yourself.

![](https://cdn-images-1.medium.com/max/800/0*_ftDbQePxFNjZnfm.jpg)

Spotify’s duotone effect

Here’s my recipe for each image 👨‍🍳:

![](https://cdn-images-1.medium.com/max/800/1*S8aTzsXehAJgJpAsAbcNag.gif)

```

```

```

```

Adding the overlay to soften the blacks is a game-changer 👌🏼.

![](https://cdn-images-1.medium.com/max/800/1*dAH9QKoJAEmtBsX3X1o_Bg.jpeg)

Overlay — Before & After

- - -

#### End result

![](https://cdn-images-1.medium.com/max/800/1*QKXSSG2rklPc4MbvxcQx-g.gif)

Directional aware hover with JS

🎩 Ta-da! Want to know the best part? This method is 100% non-destructive, meaning each photo will always be the original. Anyone can change their photo at anytime. Bye-bye Photoshop!

**Bonus tip:**When a user hovers, remove the filter to reveal the original image. Try it out! [https://codepen.io/baileylatimer/embed/rgjgpx](https://codepen.io/baileylatimer/embed/rgjgpx?height=300&theme-id=35059&default-tab=css,result)

[**CodePen Embed - Direction Aware Hover**\
*@import 'https://codepen.io/latimer2k/pen/oMEMEK.sass'; @import…*codepen.io](https://codepen.io/baileylatimer/embed/rgjgpx?height=300&theme-id=35059&default-tab=css,result "https\://codepen.io/baileylatimer/embed/rgjgpx?height=300&theme-id=35059&default-tab=css,result")[](https://codepen.io/baileylatimer/embed/rgjgpx?height=300&theme-id=35059&default-tab=css,result)

- - -

*P.S. If you enjoyed this article, it would mean a lot if you could drop a 👏 or two — or 50.*

*If you didn’t like it, let me know how I can improve. I’d really appreciate any feedback.*

[Instagram](https://www.instagram.com/latimerdesign/) // [Dribbble](https://dribbble.com/latimerdesign) // [LinkedIn](https://www.linkedin.com/in/baileylatimer/) // [Portfolio site](https://latimer.me)
