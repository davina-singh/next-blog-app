View all blog posts (with category and content) and
Sign in (with Clerk) to:
  - Make a new blog post - title, content and category and,
  - Add a comment to a blog post - view this (alongside other comments)

PG database deleted - now local/ deployed does not work 

# Week 8 - Blog (or some such thing) with a Comments Form

User Stories:
- 🐿️ As a user, I want to browse a list of posts, sortable by ascending or descending order
- 🐿️ As a user, I want to see a list of categories, and click on a category to see a list of posts in that category
- 🐿️ As a user, I want to be able to leave a comment sharing my thoughts on each post

Requirements:
- 🎯 Created using create-next-app
- 🎯 Design a SQL schema for a posts table, and a comments table that has a post_id column connecting it to the posts table.
- 🎯 Either create a form where users can add posts OR seed your database with at least 4 posts that comments can be added to (if you do the seed, one of the stretch goals will be harder).
- 🎯 Add a form to the individual post page to allow creating a new comment, which is saved to the new comments table including the Post ID.
- 🎯 Refresh the /posts route data when adding a new post, and redirect the user to the list of posts
- 🎯 Refresh the /post/:postId route when adding a new comment, so the new comment is displayed on the page

Stretch Goals:
- 🏹 Add a categories table to allow categorisation of posts at creation time using a dropdown menu. Add a /categories route that lists all categories, and a /categories/:id route that lists all posts in a category.
- 🏹 Add a new /posts/:id/edit route that allows editing a post. Populate the form with the post data, and save changes by updating the post in the database with a server action.
- 🏹 Add a delete button to the post page that removes the post from the database.
- 🏹 Add a new /posts/:id/comments/:id/edit route that allows editing a comment. Populate the form with the comment data, and save changes by updating the comment in the database with a server action.
