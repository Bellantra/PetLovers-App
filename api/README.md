### To make the server run do this steps: 

1. **Create an .env file with PORT and DB_URL constant, where:**
    * PORT : is the port where you go to run your server.
    * DB_URL : is the URI of the mongo database.
2. **Install the dependencies with npm i**
3. **Run the server with npm start**


### Pets

| TYPE   | DETAIL            | ROUTE                                 | SEND  | INFO                                                        |
|--------|-------------------|---------------------------------------|-------|-------------------------------------------------------------|
| GET    | get pets to adopt | http://localhost:<PORT>/adopt?<Query> | query | nickname OR city. if query is empty return all the pets     |
| POST   | post new pet      | http://localhost:<PORT>/adopt         | body  | _id*, nickname*, age*, city*, adopt, race*, image*, shelter |
| PUT    | update adopt      | http://localhost:<PORT>/adopt         | body  | petId, userId                                               |
| DELETE | remove a pet      | http://localhost:<PORT>/adopt         | body  | petId                                                       |

### Examples filter Pets

- http://localhost:<PORT>/adopt
- http://localhost:<PORT>/adopt?nickname=Manchita
- http://localhost:<PORT>/adopt?city=Londres
- http://localhost:<PORT>/adopt?nickname=Manchita&city=Londres

### Race

| TYPE | DETAIL                | ROUTE                            | SEND | INFO |
|------|-----------------------|----------------------------------|------|------|
| GET  | get all race          | http://localhost:<PORT>/races    |      |      |
| GET  | get subrace of a race | http://localhost:<PORT>/subraces |      |      |

### User

| TYPE   | DETAIL | ROUTE                    | SEND | INFO |
|--------|--------|--------------------------|------|------|
| GET    |        | http://localhost:<PORT>/ |      |      |
| POST   |        | http://localhost:<PORT>/ | body |      |
| PUT    |        | http://localhost:<PORT>/ | body |      |
| DELETE |        | http://localhost:<PORT>  | body |      |



### Shelter

| TYPE   | DETAIL | ROUTE                    | SEND | INFO |
|--------|--------|--------------------------|------|------|
| GET    |        | http://localhost:<PORT>/ |      |      |
| POST   |        | http://localhost:<PORT>/ | body |      |
| PUT    |        | http://localhost:<PORT>/ | body |      |
| DELETE |        | http://localhost:<PORT>  | body |      |