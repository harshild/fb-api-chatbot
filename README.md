# Conversational ChatBot for Job Application #

A conversational chat bot that automatically takes details from a job seeker and takes necessary actions.

## Releases

### 0.1.0

* Simple chat bot implementation that connects to API AI instance at the backend (which takes care of job related conversation) and messenger instance, while acting as a mediator between those requests.

### 0.2.0

* Now logs chat to file 

### 0.3.0

* Database connectivity to store data
* Very basic UI Interface to view data

# Setup the Application
## Pre-Requisites

1. The server on which the application will run must be reachable by facebook server.
2. [Setup facebook page and app](https://docs.api.ai/docs/facebook-integration#setting-up-a-facebook-app-and-page)
3. [Define your api.ai rules](https://docs.api.ai/docs/get-started) 
4. [Fetch api.ai tokens](https://files.readme.io/R0WWGe8yRoOvxQb8dBkx_authentication_tokens.png)

and then follow the steps below

## Initial Application setup and first build

| Constant Name   |      Description      |  Required |  Default Value|
|----------|:-------------:|------:|------:|
| APIAI_ACCESS_TOKEN |  Your api.ai Client Access Token | ✔ | |
| FB_PAGE_ACCESS_TOKEN |  Facebook Page Access Token | ✔ | |
| FB_VERIFY_TOKEN | Verification Token for Facebook | ✔ | |
| APIAI_LANG |  Language for API AI |  | 'en'|
| REST_PORT | Port on which application listens |  | 5000|
| DATABASE_ENABLE | Enable save data on Postgres Database | | true|
| DATABASE_URL | Postgres Database URL | ✔ | |
| TABLE_NAME | Table Name to Store Data | | JOB_SEEKERS|

**Make sure the TABLE_NAME doesn't exist before the application first run, as it might result in an error due to schema mismatch**

When you are done setting these variables, go to the root of the project and

`npm install`

## Run Tests

`npm test`

## Run The App

`npm start`
and you are done!

## Accessing the Application

* To use the application a user has to follow the steps to run the application, and then simply start a facebook chat with the respective Facebook Page
* The UI is available at root of the app. 

## Table Schema

| Column Name  |      Data Type      |  Nullability |
|----------|:-------------:|------:|
| ID |  Auto Generated BIGSERIAL | NOT NULL|
| NAME |  CHAR(50) | NOT NULL|
| EMAIL | CHAR(50) | NOT NULL|
| CONTACT_NUMBER |  CHAR(50) | NOT NULL|
| STREAM | CHAR(50) | NOT NULL|
| PREFERRED_LOCATION | CHAR(50) |NOT NULL|
| CURRENT_COMPANY | CHAR(50) | NOT NULL|
| CURRENT_CTC | CHAR(50) |NOT NULL|
| EXPECTED_CTC | CHAR(50) |NOT NULL|

Make sure that API AI parameters and the table column names are consistent

#Alternative Deployment Methods

## Docker

From the root of the source code, execute to build image
```
bash docker build -t chatbot . 
```

and execute this to start it up!
```bash
docker run -it --name chatbot_instance \
           -p <REST_PORT>:5000 \
           -e APIAI_ACCESS_TOKEN="api.ai client access token" \
           -e FB_PAGE_ACCESS_TOKEN="Fb Page Access Token" \
           -e FB_VERIFY_TOKEN="Fb Verify Token" \
           -e APIAI_LANG="en" \
           -e DATABASE_ENABLE="true" \
           -e DATABASE_URL="URL" \
           -e TABLE_NAME="JOB_SEEKERS" \
           chatbot
```

# UPCOMING RELEASES ROADMAP

0.4.0

* Readme for alternative deployment methods (preferably Heroku and Docker)

# HELP NEEDED IN AREAS

* Writing tests for asynchronous APIs