# CAPSTONE PROJECT 5 | BASKETBALL SHOES ARCHIVE #

This project is a website exercise using Session Storage and Local storage mixed with HTML, CSS and Javascript to showcase different basketball shoes
along with being able to *like, save, and comment* the images provided.

## *Table of contents* ##
### 1 - Installation
### 2 - Usage
### 3 - JS and HTML 


### 1 - Installation ###
To install the files, you must be have VSCode after that, do the following:
1. First download all the files within the repository
2. Create a new folder within VSCode named Task42
  2a. Place all the files you downloaded within the folder "Task42"
3. This should be all done. You can test this by running the index.html on your web browser by copying and pasting the file path to the browser's URL.

Once you have installed it, the website should look like this:
![screenshot](Screenshot.png)

### 2 - Usage ###
Once the website has been properly integrated and is working, you will be able to hover over each image. Using CSS, a thumbs up and a heart button will appear
over the image along with it's name. When pressing the like button, the image should change into a filled in thumbs up in the colour grey
When the heart is pressed, it should add it to your saved items folder along with an alert informing you of how many items are in the liked folder.
Adter saving an image, you may go to the saved items page which is located at the top of the website. 
The page should then include all the saved photos that you clicked.

### 3 - JS and HTML 
You may notice that i use both sessionstorage and localStorage. I had an issue with local storage storing info within the array and then passing that info into 
the key named save and then passing that back into the array if the page is refreshed so that the array doesn't lose it's values. This meant that i had to 
instead use the whole localstorage key/value pairs for the saved images alone. 

I use the for loop to go through each value in the bookmark array and assign them to "save[i]" giving each one a unique key name instead of being all in the same
key as an array. 

That's the only issue with this website which means that likes and comments are in session storage and does NOT stay after exiting the browser. An update will be 
made in the future which fixes this issue and keeps all information in the localStorage.
