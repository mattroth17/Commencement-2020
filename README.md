# Commencement-2020
Commencement 2020 Special Edition Website for The Dartmouth (college newspaper). Features scroll-bar with articles on the right, messages for graduating seniors below, and a button which displays a modal to leave your own message. Data storage implemented with Firebase. 

[Link to Deployed Site](http://dartmouth-2020.surge.sh/)

## To Run
* `git clone https://github.com/mattroth17/Commencement-2020`
* `yarn install`
* `yarn start`

## To Deploy (@ dartmouth-2020.surge.sh)
* `yarn deploy`

## Technical Tools
*  `React`, `Boostrap` for styling
* Used Firebase real-time database to store messages/approve them

## Languages
* JavaScript, HTML/CSS

## Project Structure

### Directories
* `src/`
    * `components/`
        * `header.js`: displays text 'Hello Class of 2020, Congrats!'
        * `background.js`: displays class of 2020 picture in front of Dartmouth Hall
        * `articles.js`: displays article previews with image, title, and author; link to full articles on thedartmouth.com
        * `messages.js`: displays messages already left for seniors; includes button which onClick displays modal to create a new message
        
    * `services/`
        * `datastores.js`: connects to Firebase, contains functions for getting all messages and creating a new message
    
## Screencaps

### Main Page
![](https://user-images.githubusercontent.com/59703535/88987555-ed3a3480-d29b-11ea-8659-cde954616c00.png)

### Messages
![](https://user-images.githubusercontent.com/59703535/88987560-f1665200-d29b-11ea-9748-04cf6ea1423d.png)

### Leave a Message
![](https://user-images.githubusercontent.com/59703535/88987561-f1fee880-d29b-11ea-9678-1b152c0eca81.png)
