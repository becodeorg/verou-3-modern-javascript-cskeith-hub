# verou-3-modern-javascript-cskeith-hub
## Part 2 - JavaScript Modules

Did you know? With modern Javascript, we can also separate our functions in multiple files! Resulting in an even better organised and readable way!
This is done by making use of the import/export directives.

Not only does it allow us to import/export functions, but also variables, objects, classes, ...!

***


🌱 Must-have's
Think about what parts of your code would make sense to have in a different file.

It's recommended to simply start with one function.

 You can add more as you go, as long as it makes sense.

  If you feel moving something to a different files makes the structure worse, then don't do it (or discuss with your coach).

In the long run, the goal is to be able to group things that "make sense together".
 Example: a calculator file, containing functions like sum, subtract, ... This would allow you to do calculator.sum(x + y). 
 Nice syntax, right?

Give the file the same name as your function and move your actual functions into these files.

Just remember: keep script.js around, it will still be the origin file for everything.

Rename script.js to index.js.

This is a convention that insures better compatibility with several tools later on (you will see). 😉

Apply the ES6 import/export syntax and connect all your javascript files to your index.js.

Ps. Don't forget to check your HTML as well to load JS in a way that supports modules. (hint: type="module")
***
🌼 Nice-to-have's

Do you have time to spare? See if you can help someone, add "nice-to-have" features to your app, or refactor another app of yours!