# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL?

SQL stands for Structured Query Language. It is a domain-specific language used for communicating with databases.

2. What the PostgreSQL query that would return all the content in a particular table?

SELECT * FROM tablename;

3. What is the command to create a new Rails application with a PostgreSQL database?

$ rails new app_name -d postgresql -T
$ cd app_name
$ rails db:create

4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?

$ rails g model Meals breakfast:string lunch:string dinner:string

5. What is a migration? Why would you use one?

A migration is a file that is created a rails command. You would use a migration when you want to modify or change an already existing database. For example you can add columns to a table, change columns completely, rename columns, or completely remove columns.

6. What is the command to generate a migration file?

$ rails g migration action_name  

7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

The naming convention for generating a Rails model is uppsercase and singular for the model name. The naming convention of the table that is created is lowercase and plural.

8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?

The database schema is a file created when generating a model in Rails. It represents the shape of the database at a specific moment. You should not modify the schema directly. In order to modify the database you need to use a migration instead.

9. What is the Rails console?

The rails console is a console that you can enter in the Terminal using the $ rails c command. It is where you will directly interact with Active Record and interface between your create Rails application and the database.

10. What is the Rails console command to see all the content in a particular table?

$ Class.all
