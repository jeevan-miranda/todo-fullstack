# Meowtown

We're going to play with a fun project called [meowtown](http://meowtown.herokuapp.com/cats) that was written by [Eugene](https://github.com/data-doge), a former EDA grad and teacher.

Unfortunately Eugene's version of meowtown is written in Ruby on Rails. We're going to rewrite it using Node.js.


## Release 1

Clone the repo, run ```npm i``` and then run ```npm start```. Visit [http://localhost:3000](http://localhost:3000).

Notice that when you save a file the server automatically restarts! Checkout the [nodemon](http://nodemon.io/) module.

Visit [http://localhost:3000/](http://localhost:3000/)

What happens? Can you go to `app.js` and work out what you are seeing and why you are seeing it? Talk it through with your pair and compare ideas.


## Release 2

Visit [http://localhost:3000/cats/1](http://localhost:3000/cats/1) and check the console.

You should see the id printed in the console. Yay! Now we can find the cat the user is looking for and render just that cat out to the user. Get the correct cat from the cats array in the data object and pass it as the second argument to the render function.

Fill out the `catsShow.hbs` template so that you can see the name of the cat. Hint: if you are stuck with passing the individual cat to the `catShow` view, notice how `/cats` passes the cats array to the view.


## Release 3

Study meowtown and add more properties to each `cat` object. Now update the `catsIndex` and `catsShow` templates.


## Release 4

Add a new route that listens for requests to `/cats/new`. Render the `catsNew` form. Check it out!


## Release 5

What happens when you submit your form? You should see some messages logged to the console. Take that data, make a new cat object and add it to your cats array.


## Release 6

Copy the contents of the new cat form and add some handlebars expressions `{{}}` so we can fill in the form with the cats existing data.

Add a new route that listens for requests to `cats/edit/:id`. Return the cat by `id` and pass it to the render function.


## Release 7

Add a route that listens for POST requests to `/cat/id`. Use what you've learned to update the cat in the `cats` array.

Note that this isn't "proper" REST. This is because browsers can't actually do PUT requests. So instead we're using POST.

## More

Work out how to store the `data` variable in a JSON file. You might want to make some functions that can load and save the data.

Add the help page.

Implement the rule that removes lives from the cat when it's viewed. Delete a cat once it has zero lives.

Sort cats by when they were last viewed by a user.

Appropriate Eugene's CSS file and add it to your server.


## Resources

Number | Name
-------|------
1 | [REST](http://guides.rubyonrails.org/routing.html)
2 | [Express](http://expressjs.com/)
3 | [Handlebars](http://handlebarsjs.com/)
