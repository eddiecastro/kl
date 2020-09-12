# PeopleApp
2 self contained projects for client and server side applications

# Getting started

### Running locally

1 - make sure node is installed (Confirmed working on v14.9.0, should work on >= v8.10.0)

```node -v```

2 - clone this repo

3 - ```cd PeopleApp/```

4 - ```cp ./client/.env.sample ./client/.env``` (no changes needed)

5 - ```cp ./server/.env.sample ./server/.env``` and replace SL_API_KEY value

6 - ```npm install```

7 - (optional) ```npm test```

8 - ```npm run start-server```

9 - (in a new terminal) ```npm run start-client```

10 - A web browser should automatically open to localhost:3000

```note: client and server can be run and tested individually using standard npm scripts```

# Client details

* React frontend built on Material UI
* Testing framework uses React Testing Library with Jest

* Center column fetches people data and uses a simple infinite scroll implementation
* Left column fetches character frequency
* Right Column fetches potential duplicates based on 2 criteria
  * Email address character frequencies that differ by less than 15%
  * Email address local part exact matches
    * ie: ```<local part>@<domain>```
    
# Server details

* Node.js and express backend using Jest and Supertest testing frameworks
