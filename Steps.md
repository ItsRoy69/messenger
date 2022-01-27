```
$ npm create-react-app ./
$ npm i @ant-design/icons [An enterprise-class UI design language and React UI library.]
$ npm i firebase
$ npm i axios[Promise based HTTP client for the browser and node.js]
$ npm i react-router-dom [calling links]
$ npm i react-chat-engine [Chat Engine is a free serverless chat API.]

```
Go to firebase and give project name as "messenger" -> Continue -> Toggle off the Google Analytics -> Continue -> Project Overview -> Project Settings -> Create new webapp by clicking "</>" icon -> Register with App Nickname 'messenger' -> Click on checkbox of 'Set up Firebase Hosting for this app' -> Click 'Register App' -> Next -> Continue to console -> Scroll down to messenger Web App -> Click on 'Config Part' and copy the code -> Authentication -> Get Started -> Click on 'Google' -> Enable toggle box -> email -> save -> Add new provider -> Facebook ->  Enable toggle box

To enable Facebook auth go to ```https://developers.facebook.com/``` -> Get Started -> Register as developer -> Create App -> Consumer -> Continue -> Display name as 'mymessenger' -> Create App -> Scroll down to 'Add products to your app' and click on 'Facebook Login' Setup -> Click on 'Web' -> Setup 'Site URL' as 'localhost:3000' since we are testing -> Save -> Continue -> Next -> Next -> Next -> Go to left side of screen under 'Facebook login' and click 'Settings' -> Fill in 'Valid OAuth Redirect URIs' from Firebase -> Save Changes -> Move to 'Basic Settings' -> Copy the 'App ID' & 'App Secret' -> Open Firebase facebook -> Paste the App ID and App Secret -> Save -> Now we have to work on code under 'Login.js'
