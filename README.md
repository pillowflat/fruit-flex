# Fruit Flex
A simple, example web application and mobile app built with Node.js and React Native.

## How It Works
Once the web server and mobile app are running, ask a friend to navigate to the home page of the web application.  By default, a banana displays.  Ask the friend to name a different fruit.  Without them noticing, click on the fruit button on the mobile app that they named (assuming it is in the list of available fruits).  Within a second or two, the web page will automatically display the fruit your friend named.  Your friend will be blown away...or maybe not.

The overall concept of this project is similar to how IOT devices work in that the state of something is maintained on the server while the client regularly polls the server asking for changes in state.  If a change is detected, the client (browser, IOT device, etc.) reflects the change.

Selecting a fruit on the native app simply sends the name of the fruit to the web server, which updates its state.  The browser polls the server every 3 seconds and automatically displays whatever fruit is returned.

## Technologies

|||
|---|---|
|Framework|Description|Usage|
|[Node.js](nodejs.org)|A JavaScript runtime built on Chrome's V8 JavaScript engine. |This will host the webserver|
|[Express.js](expressjs.com)|A fast, unopiniated, minimalist web framework for Node.js|This is the web server to host our site and expose a REST API to call from the client app.|
|[React Native](facebook.github.io/react-native)|A framework for building native apps using JavaScript and React|

> React Native is optional since any client (i.e. browser, curl, Postman, Fiddler, etc.) can be used to change the active fruit as it is just a simple HTTP Post to the Fruit Flex API. 

## Getting Started

### Prerequisites
Install Node.js

https://nodejs.org/en/download/

Install React-Native

https://facebook.github.io/react-native/

Install the Expo client app

https://expo.io/



### Installing
> Pull down this repository using `git clone` if you have the [git](https://git-scm.com/downloads) client installed, or click the 'Clone or download' button to download this repository as a .zip file.
- https://github.com/pillowflat/fruit-flex.git

> Install dependencies and start:

First, start up the web server from one terminal / command prompt:
*(assumes you're already in the fruit-flex folder)*
```
cd server
npm install
npm start
```

Second, modify the React Native app's App.js file and set the SERVER_URL value to the IP address of the computer running the web server along with the default port of 3000:

Example:

`const SERVER_URL = 'http://192.168.0.34:3000'`

*Note: you can't use http://localhost:3000 since, although the code is modified on the same computer as the running web server instance, it is actually copied and executed on the Android or iOS device.*

Next, start up the mobile app from a different terminal / command prompt:
*(assumes you're already in the fruit-flex folder)*
```
cd client
npm install
npm start
```

Assuming everything started properly, you should now be able to use the Expo app (Android) to scan the QR code, or the Camera app (iOS - following on-screen instructions) to get a link to start the mobile app.




## Images

Additional royalty-free stock photos of fruit can be downloaded from here: 
https://pixabay.com.    Just drop them into the `server/public/images` folder and restart both the the webserver and the mobile app and they'll automatically be reflected on both.

## Possible Enhancements

As is, this is a rudimentary sample application.  Below are a couple ideas to enhance this application:
 - The web server can easily be hosted for free on any cloud hosting provider that supports node.  The example web server is currently hosted [here](https://fruit-flex.herokuapp.com) using [Heroku's free cloud hosting plan](https://www.heroku.com/nodejs).

 - Integrate voice recognition into the React Native app.  Instead of clicking the fruit to change it, integrate a voice recognition service, like [DialogFlow](https://dialogflow.com/), to recognize the fruit and change it automatically.

 - Change fruits to something more interesting, like [the Seven Faces of Donald Trump](https://www.theguardian.com/us-news/2017/jan/15/the-seven-faces-of-donald-trump-a-psychologists-view).