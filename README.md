# A server for a fun stock market simulation game

## Tech Stack:
* ExpressJS
* PostgreSQL

## Deployment:

### Prod env:
* Server and database are deployed to aws ec-2 and RDS

### To check if the prod server is alive:
```
curl --location --request GET 'http://13.229.65.159:2000/ping'
```