## Simple NodeJS GraphQL API with ExpressJS and MongoDB

### Install backend dependencies

```
npm install
```

### Add Mongo URI 

If you're going to use MongoDB, create a database with Atlas, add it to the .env.example file and rename the file to .env

### Run Application

```
npm run dev
```

Then navigate to http://localhost:5000/graphql

### Queries & Mutations


#### Get all clients

```
{
    clients {
        name
    }
}
```
#### Get client by id

```
{
    client(id: 1) {
        name
        email
    }
}
```

#### Get a single project name, description along with the client name and email

```
{
    project(id: 1) {
        name
        description,
        client {
            name
            email
        }
    }
}
```

#### Create a new client and return all data

```
mutation {
    addClient(name: "John Doe", email: "johndoe@gmail.com", phone: "789-745-712") {
        id
        name
        email
        phone
    }
}
```

#### Delete a client and return id

```
mutation {
    deleteClient(id: 1) {
        id
    }
}
```

#### Create a new project and return name and description

```
mutation {
    addProject(name: "Sample Project", description: "This is the project description", status: "new", clientId: "1") {
        name
        description
    }
}
```

#### Update a project status and return name and status

```
mutation {
    updateProject(status: "completed") {
        name
        status
    }
}
```

