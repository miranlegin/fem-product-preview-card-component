# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![Desktop preview](/screenshots/desktop-preview.png)

### Links

- Solution URL: [https://github.com/miranlegin/fem-product-preview-card-component](https://github.com/miranlegin/fem-product-preview-card-component)
- Live Site URL: [https://frontend-mentor-challenge01.netlify.app/](https://frontend-mentor-challenge01.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Picture element
- CSS Grid

### What I learned

I have tried to find a way for semantic markup for old price tag `<s>` seems the be the closest for what i needed.

To see how you can add code snippets, see below:

```html
<picture class="card-image">
  <source
    media="(min-width: 640px)"
    srcset="images/image-product-desktop.jpg 600w"
  />
  <img src="images/image-product-mobile.jpg" alt="Perfume bottle" />
</picture>
```

```html
<s class="card-price-old">$169.99</s>
```

### Useful resources

- [Jake Archibald - Anatomy of responsive images article](https://jakearchibald.com/2015/anatomy-of-responsive-images/) - This is one of my go-to places for responsive images snippet.
- [Strikethrough element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s) - I've used this for reference to markup old price tag.

## Author

- Frontend Mentor - [@miranlegin](https://www.frontendmentor.io/profile/miranlegin)
