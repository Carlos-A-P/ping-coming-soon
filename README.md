# ping-coming-soon

- Live website -(https://carlospwd-ping-coming-soon.netlify.app/)

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Please provide a valid email address"_

## My process

### Screenshot

### End Result

![result](https://user-images.githubusercontent.com/85038929/126826762-40b67885-acd7-4476-a80e-3b517e075868.JPG)

### Active image

![active](https://user-images.githubusercontent.com/85038929/126826803-1806ece1-0bcb-4604-bdd7-a599b879e854.JPG)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Flexbox
- JavaScript

### What I learned

In this project I got more familiar with forms and addEventListener's

```HTML
<form class="form" id="form">
            <div class="form-control ">
              <input type="text" placeholder="Your email address..." id="email">
              <small>Error message</small>
            </div>
            <button class="btn">Notify Me</button>
  </form>

```

```Javascript
//add a event listener for button to start program
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    checkInputs();
})
```

### Questions

- What are some ways that I can make my code look cleaner?
- How can I improve my layout?

### Useful resources

- [Build a Responsive Grid CSS Website Layout From Scratch](https://www.youtube.com/watch?v=moBhzSC455o&ab_channel=TraversyMedia) - This helped me understand how to use grids and flexbox to organize my website. I also learned about some new vs code extentions such as prettier which helped make my code look neat and organised.

- [JavaScript Client-slide Form Validation](https://www.youtube.com/watch?v=rsd4FNGTRBw&ab_channel=FlorinPop) - this tutorial helped my understand how to format forms in my project and how to implement javascript so that the users can receive a message back

- [Debugging JavaScript in Visual Studio Code and Google Chrome](https://www.youtube.com/watch?v=AX7uybwukkk&ab_channel=JamesQQuick) - this video taught me how to debug my javascript using the debugger tool in developer tools

## Author

- Website - [Carlos Perez](https://www.site.com)
- Frontend Mentor - [@Carlos-A-P](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@WDCarlosP](https://www.twitter.com/WDCarlosP)
