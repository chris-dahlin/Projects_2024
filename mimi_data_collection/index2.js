const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const { postgresPassword } = require('./config');

// Create a new Express application
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "mimi",
  password: postgresPassword,
  port: 5432,
});
db.connect();


// Define a GET route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  // res.send(
    
    // `
    // <html>
    //   <head>
    //     <title>Data Collection App</title>
    //   </head>
    //   <body>
    //     <h2>Data Collection App</h2>
    //     <form action="/submit" method="post">
    //       <label for="title">Title:</label><br>
    //       <input type="text" id="title" name="title"><br>
    //       <label for="content">Content:</label><br>
    //       <textarea id="content" name="content" rows="4" cols="50"></textarea><br><br>
    //       <button type="submit">Submit</button>
    //     </form>

    //     <a href="/all-posts"><button>View All Posts</button></a>
    //   </body>
    // </html>
  // `
  // );
});

// Define a POST route to handle form submission
app.post('/submit', (req, res) => {
  const { title, content } = req.body;

  // Insert the data into the database
  db.query('INSERT INTO blog_post (description, blog_data) VALUES ($1, $2)', [title, content], (error, results) => {
    if (error) {
      console.error('Error inserting data:', error);
      res.status(500).send('Error inserting data');
    } else {
      console.log('Data inserted successfully');
      // res.send('Data inserted successfully');
   // Construct HTML response
   const htmlResponse = `
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>${title}</title>
     <link rel="stylesheet" href="styles.css">
   </head>
   <body>
     <div class="container">
       <h2>${title}</h2>
       <p>${content}</p>
       <a href="/all-posts"><button class="view-all">View All Posts</button></a>
     </div>
   </body>
   </html>
 `;
 // Send HTML response
 res.send(htmlResponse);
}
});
});

// Define a route to display all posts
app.get('/all-posts', (req, res) => {
    // Fetch all posts from the database
    db.query('SELECT * FROM blog_post', (error, results) => {
      if (error) {
        console.error('Error fetching posts:', error);
        res.status(500).send('Error fetching posts');
      } else {
        const posts = results.rows;
        console.log(posts);
        // Render a page displaying all posts
        const htmlResponse = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>All Posts</title>
            <link rel="stylesheet" href="styles.css">
          </head>
          <body>
            <div class="container">
              <h2>All Posts</h2>
              <ul>
                ${posts.map(post => `
                  <li>
                    <strong>${post.description}</strong>: ${post.blog_data}
                    <a href="/edit-post/${post.id}"><button>Edit</button></a>
                  </li>
                `).join('')}
              </ul>
              <a href="/"><button class="home-btn">Home</button></a>
            </div>
          </body>
          </html>
        `;
        res.send(htmlResponse);
      }
    });
  });

// Define a route to edit a post
app.get('/edit-post/:postId', (req, res) => {
    const { postId } = req.params;
  
    // Fetch the post with the specified ID from the database
    db.query('SELECT * FROM blog_post WHERE id = $1', [postId], (error, results) => {
      if (error) {
        console.error('Error fetching post:', error);
        res.status(500).send('Error fetching post');
      } else {
        const post = results.rows[0]; // Assuming there's only one post with the given ID
        if (!post) {
          res.status(404).send('Post not found');
        } else {
          // Render a form to edit the post
          res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Edit Post</title>
              <link rel="stylesheet" href="styles.css">        
            </head>
            <body>
              <div class="container">
                <h2>Edit Post</h2>
                <form action="/update-post/${postId}" method="post">
                  <label for="description">Title:</label><br>
                  <input type="text" id="description" name="description" value="${post.description}"><br>
                  <label for="blogData">Post</label><br>
                  <textarea id="blogData" name="blogData" rows="4" cols="50">${post.blog_data}</textarea><br><br>
                  <button type="submit">Update</button>
                </form>
                <a href="/all-posts"><button class="back-btn">Back to All Posts</button></a>
              </div>
            </body>
            </html>
          `);
        }
      }
    });
  });

// Define a route to handle post updates
app.post('/update-post/:postId', (req, res) => {
  const { postId } = req.params;
  const { description, blogData } = req.body;

  // Update the post in the database
  db.query('UPDATE blog_post SET description = $1, blog_data = $2 WHERE id = $3', [description, blogData, postId], (error, results) => {
    if (error) {
      console.error('Error updating post:', error);
      res.status(500).send('Error updating post');
    } else {
      console.log('Post updated successfully');
      res.redirect('/all-posts'); // Redirect to the page displaying all posts
    }
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
