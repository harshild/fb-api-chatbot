# Conversational ChatBot for Job Application #

A conversational chat bot that automatically takes details from a job seeker and takes necessary actions.

## Releases

### 0.1.0

* Simple chat bot implementation that connects to API AI instance at the backend (which takes care of job related conversation) and messenger instance, while acting as a mediator between those requests.

# Setup the Application
## Pre-Requisites

1. The server on which the application will run must be reachable by facebook server.
2. [Setup facebook page and app] (https://docs.api.ai/docs/facebook-integration#setting-up-a-facebook-app-and-page)
3. [Define your api.ai rules](https://docs.api.ai/docs/get-started) 
4. [Fetch api.ai tokens] (https://files.readme.io/R0WWGe8yRoOvxQb8dBkx_authentication_tokens.png)

and then follow the steps below

## Initial Application setup and first build

| Constant Name   |      Description      |  Required |  Default Value|
|----------|:-------------:|------:|------:|
| APIAI_ACCESS_TOKEN |  Your api.ai Client Access Token | ✔ | |
| FB_PAGE_ACCESS_TOKEN |  Facebook Page Access Token | ✔ | |
| FB_VERIFY_TOKEN | Verification Token for Facebook | ✔ | |
| APIAI_LANG |  Language for API AI |  | 'en'|
| REST_PORT | Port on which application listens |  | 5000|

When you are done setting these variables, go to the root of the project and

`npm install`

## Run Tests

`npm test`

## Run The App

`npm start`
and you are done!

# UPCOMING RELEASES ROADMAP

0.2.0

* Log chats to file
* Detailed Readme for setting up the application 

0.3.0

* Database connectivity to store data
* Very basic UI Interface to view data

0.4.0

* Readme for alternative deployment methods (preferably Heroku and Docker)

# HELP NEEDED IN AREAS

* Writing tests for asynchronous APIs