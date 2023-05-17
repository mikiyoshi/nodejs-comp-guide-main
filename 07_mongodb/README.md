# Section9: MongoDB

New Project

nodejs-comp-guide-main

Create Database

mikiyoshikokura
<password>

My Local Environment

Add my current IP address

Finish

-
connect

compass

mongodb+srv://mikiyoshikokura:<password>@cluster0.47ho0pj.mongodb.net/

close

-

open mongoDB APP

mongodb+srv://mikiyoshikokura:<password>@cluster0.47ho0pj.mongodb.net/
<password> is your Password
connect

Create Database

Database Name:
bookshelf

Collection Name:
books

create database

-
bookshelf > books

ADD DATA

Import File > 07_mongodb/books.json > JSON > import

How to search in your database
type at mongoDB APP search box
{ title: "新宝島"}


-
update .env

mongoDB browser

connect > Connect to your application > drivers > View full code sample `off`

copy and paste to .env `MONGO_URI`

<password> is your Password
add `bookshelf` at `mongodb.net/bookshelf?retryWrites`

```
nvm install v16
cd 07_mongodb
npm i
```
mongoDB browser
connect > Connect to your application > drivers > View full code sample `on`

copy and paste to `/07_mongodb/010_connect_find/start/Example.mjs`

update code same as `/07_mongodb/010_connect_find/end/Example.mjs`

```
nvm install v16
cd 07_mongodb
node '/Users/mikiyoshikokura/Desktop/Sites/light-house-lab/virtualbox/w15/nodejs-comp-guide-main/07_mongodb/010_connect_find/start/Example.mjs'
```
display at terminal `console.log(result)` json data 

-
find and search
[Query and Projection Operators](https://www.mongodb.com/docs/v6.0/reference/operator/query/)
<!-- 条件検索 -->
[$regex](https://www.mongodb.com/docs/manual/reference/operator/query/regex/)
<!-- 曖昧な検索 正規表現 -->


-
[mongoose](https://mongoosejs.com/)

Find a docs URL at browser
```
npm docs mongoose
```










