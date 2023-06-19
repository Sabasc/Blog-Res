 // Array of blog post objects
 var blogPosts = [
    {
      title: "First Blog Post",
      content: "This is the content of the first blog post.",
      author: "John Doe"
    },
    {
      title: "Second Blog Post",
      content: "This is the content of the second blog post.",
      author: "Jane Smith"
    },
    {
      title: "Third Blog Post",
      content: "This is the content of the third blog post.",
      author: "Mike Johnson"
    },
    {
      title: "Third Blog Post",
      content: "This is the content of the third blog post.",
      author: "Mike Johnson"
    }
  ];

  // Function to generate HTML for each blog post
  function generateBlogPostHTML(post) {
    var blogPostHTML = '<div class="blog-post">' +
                       '<h2>' + post.title + '</h2>' +
                       '<p>' + post.content + '</p>' +
                       '<p>Author: ' + post.author + '</p>' +
                       '</div>';
    return blogPostHTML;
  }

  // Function to render the blog posts on the website
  function renderBlogPosts() {
    var blogContainer = document.getElementById('blog-container');

    // Clear existing content
    blogContainer.innerHTML = '';

    // Loop through the blog posts array and generate HTML for each post
    for (var i = 0; i < blogPosts.length; i++) {
      var blogPost = blogPosts[i];
      var blogPostHTML = generateBlogPostHTML(blogPost);
      blogContainer.innerHTML += blogPostHTML;
    }
  }

  // Call the renderBlogPosts function to display the blog posts
  renderBlogPosts();