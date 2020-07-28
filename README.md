# sw-CMS

Project Start Date: 7/22/2020
Project End Date: TBD

## Goals

1) Create a CMS that where users are able to make blog posts about the mobile game Summoners Wars content.

## Dev Diary

7/22/2020 
-Successfully connected to express and was able to test in Postman.
-Successfully created migrations and seeds using knex.

-Unable to run migrations and seeds, received error: password authentication failed for my username.

7/23/2020

-error in password authentication seems to be caused by invalid config pathing in the knexfile.js file when i required in 'dotenv'. || .config({ path: '../.env' }) was changed to .config({ path: './.env' }).

-realized migrations were not created in the proper order so I had to drop the database, recreate the database in psql, and re-run the migrations in proper order so that posts could have a foreign key relation to users.

7/24/2020

-no progress today {focused on javascript exercises}

7/27/2020

-created database models using bookshelf.js. Later fixed User model to have many posts based on user_id rather than post_id.

-started to create routes for users and posts. Successfully able to get all users and users by user_id with related data from the bookshelf ORM.