# Conversational ChatBot for Job Application #

A conversational chat bot that automatically takes details from a job seeker and takes necessary actions.

##Release

WIP

## Basic Development RoadMap

*   ~~Creating Basic Node Server Architecture~~

*   ~~Establishing API.AI connectivity~~

*   ~~Facebook Messenger Connectivity~~

*   Integration of Facebook Messenger and API.AI (Only Text Messages)


# BUILD CODE

##Application constants as Environment Variable

| Constant Name   |      Description      |  Type |  Default |
|----------|:-------------:|------:|------:|
| APIAI_ACCESS_TOKEN |  Your api.ai Client Access Token | REQUIRED | N/A
| FB_PAGE_ACCESS_TOKEN |  Facebook Page Access Token | REQUIRED | N/A
| FB_VERIFY_TOKEN | Verification Token for Facebook | REQUIRED | N/A
| APIAI_LANG |  Language for API AI | Optional | 'en'
| REST_PORT | Port on which application listens | REQUIRED | 5000

Go to the root of the project and

`npm install`

##How To Run Tests

`npm test`

##How To Run

`npm start`