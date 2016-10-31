# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
image_url       | string    | not null, defaulted

## follows
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
followee_id     | integer   | not null, primary key
follower_id     | integer   | not null, primary key

## posts
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
image_url       | string    | not null
caption         | string    | not null
user_id         | integer   | not null, indexed


## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
body            | string    | not null, indexed
post_id        | integer   | not null, indexed
user_id         | integer   | not null, indexed

## likes
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
post_id        | integer   | not null, indexed
user_id         | integer   | not null, indexed

## tags (bonus)
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null

## taggings (bonus)
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
