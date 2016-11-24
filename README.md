# Conversational ChatBot for Job Application #

A conversational chat bot that automatically takes details from a job seeker and takes necessary actions.

##Release

### 0.0.1

* Simple chat bot implementation that connects to API AI instance at the backend (which takes care of job related conversation) and messenger instance, while acting as a mediator between those requests.

# BUILD CODE

##Application constants as Environment Variable

| Constant Name   |      Description      |  Required |  Default Value|
|----------|:-------------:|------:|------:|
| APIAI_ACCESS_TOKEN |  Your api.ai Client Access Token | ✔ | |
| FB_PAGE_ACCESS_TOKEN |  Facebook Page Access Token | ✔ | |
| FB_VERIFY_TOKEN | Verification Token for Facebook | ✔ | |
| APIAI_LANG |  Language for API AI |  | 'en'|
| REST_PORT | Port on which application listens |  | 5000|

Go to the root of the project and

`npm install`

##How To Run Tests

`npm test`

##How To Run

`npm start`