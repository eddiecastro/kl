# PeopleApp
This repo contains 2 self contained projects for the client and server side applications

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
