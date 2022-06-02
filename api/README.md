### To make the server run do this steps: 

1. **Create an .env file with PORT and DB_URL constant, where:**
    * PORT : is the port where you go to run your server.
    * DB_URL : is the URI of the mongo database.
2. **Install the dependencies with npm i**
3. **Run the server with npm start** 

### Pets

| TYPE | DETAIL                | ROUTE                                       | SEND                                           |
|------|-----------------------|---------------------------------------------|------------------------------------------------|
| GET  | get pets to adopt     | http://localhost:PORT/pet/adoptable?<Query> | query : {nickname, city, color, race, subrace} |
| GET  | get pet detail        | http://localhost:PORT/pet/detail/:id        | params : { id }                                |
| GET  | get last adopted pets | http://localhost:PORT/pet/lastAdopted       |                                                |
| POST | create a new pet      | http://localhost:PORT/pet/createPet         | body : accept all Pet Schema                   |
| PUT  | update a pet          | http://localhost:PORT/pet/update/:id        | params : { id } , body : accept all Pet Schema |

**PetSchema**

| KEY      | TYPE                             | REQUIRED |     | KEY        | TYPE     | REQUIRED |
|----------|----------------------------------|----------|-----|------------|----------|----------|
| nickname | String                           | YES      |     | race       | String   | YES      |
| age      | Number                           | YES      |     | subrace    | ObjectId | YES      |
| city     | String                           | YES      |     | image      | String   | YES      |
| adopt_by | ObjectId                         | NO       |     | shelter    | ObjectId | YES      |
| color    | [String]                         | YES      |     | vaccinated | Boolean  | YES      |
| status   | ['Active', 'Adopted', 'Deleted'] | NO       |     |            |          |          |


**Example Routes Pets**

- http://localhost:PORT/pet/adoptable?color=brown&nickname=Zeta
- http://localhost:PORT/pet/detail/62937f2728d56d0c3d919ce5
- http://localhost:PORT/pet/lastAdopted
- http://localhost:PORT/pet/createPet
- http://localhost:PORT/pet/update/62937f2728d56d0c3d919ce5

### Subrace

| TYPE | DETAIL                | ROUTE                          | SEND                                                             |
|------|-----------------------|--------------------------------|------------------------------------------------------------------|
| GET  | get subrace of a race | http://localhost:PORT/subraces | Falta agregar algo para verificar si son razas de perros o gatos |

**Subrace Schema**

| KEY      | TYPE                             | REQUIRED |
|----------|----------------------------------|----------|
| race     | String                           | YES      |


**Example Routes Subrace**

- http://localhost:PORT/subraces


### User

| TYPE | DETAIL         | ROUTE                                  | SEND                                           |
|------|----------------|----------------------------------------|------------------------------------------------|
| GET  | get all users  | http://localhost:PORT/users            |                                                |
| GET  | get user by Id | http://localhost:PORT/users/:id        | params : { id }                                |
| POST | create a user  | http://localhost:PORT/users/createUser | body : accept all User Schema                  |
| PUT  | update a user  | http://localhost:PORT/users/update/:id | params : { id }, body : accept all User Schema |

**User Schema**

| KEY      | TYPE                 | REQUIRED    |
|----------|----------------------|-------------|
| userName | String               | YES         |
| fullName | String               | NO          |
| email    | String               | YES, UNIQUE |
| img      | String               | NO          |
| password | String               | YES         |
| isAdmin  | Boolean              | NO          |
| shelter  | ObjectId             | NO          |
| status   | ['Active','Deleted'] | NO          |


**Example Routes User**

- http://localhost:PORT/users
- http://localhost:PORT/users/629375c1545316ac4d6924a9
- http://localhost:PORT/users/createUser
- http://localhost:PORT/users/update/629375c1545316ac4d6924a9


### Shelter

| TYPE | DETAIL         | ROUTE                                        | SEND                                              |
|------|----------------|----------------------------------------------|---------------------------------------------------|
| GET  | get all users  | http://localhost:PORT/shelters               |                                                   |
| GET  | get user by Id | http://localhost:PORT/shelters/:id           | params : { id }                                   |
| POST | create a user  | http://localhost:PORT/shelters/createShelter | body : accept all User Schema                     |
| PUT  | update a user  | http://localhost:PORT/shelters/update/:id    | params : { id }, body : accept all Shelter Schema |

**Shelter Schema**

| KEY          | TYPE                 | REQUIRED    |
|--------------|----------------------|-------------|
| name         | String               | YES, UNIQUE |
| logo         | String               | NO          |
| img          | String               | NO          |
| state        | String               | YES         |
| city         | String               | YES         |
| description  | String               | YES         |
| color        | String (HEX)         | NO          |
| user         | [String]             | NO          |
| petsAdoption | [ObjectId]           | NO          |
| status       | ['Active','Deleted'] | NO          |


**Example Routes Shelters**

- http://localhost:PORT/shelters
- http://localhost:PORT/shelters/629296ae85d8bb01453bab05
- http://localhost:PORT/shelters/createShelter
- http://localhost:PORT/shelters/update/629296ae85d8bb01453bab05

### Product

| TYPE | DETAIL         | ROUTE                                     | SEND                                              |
|------|----------------|-------------------------------------------|---------------------------------------------------|
| GET  | get all users  | http://localhost:PORT/products            |                                                   |
| GET  | get user by Id | http://localhost:PORT/products/:id        | params : { id }                                   |
| POST | create a user  | http://localhost:PORT/products/create     | body : accept all User Schema                     |
| PUT  | update a user  | http://localhost:PORT/products/update/:id | params : { id }, body : accept all Product Schema |

**Product Schema**

| KEY          | TYPE                          | REQUIRED |
|--------------|-------------------------------|----------|
| name         | String                        | YES      |
| img          | [String]                      | YES      |
| description  | String                        | NO       |
| stock        | String                        | YES      |
| price        | Number                        | YES      |
| shelter      | ObjectId                      | NO       |
| status       | ['Active','Paused','Deleted'] | NO       |


**Example Routes Products**

- http://localhost:PORT/products
- http://localhost:PORT/products/629519ea35b7257028ae5db7
- http://localhost:PORT/products/create
- http://localhost:PORT/products/update/629519ea35b7257028ae5db7