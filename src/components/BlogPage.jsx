import React, { useEffect, useState } from 'react';
import BlogCards from './BlogCards';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`; // Use environment variable

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`); // Throw error for non-200 response
        }
        const data = await response.json();
        setBlogs(data.articles);
      } catch (err) {
        setError(err.message); // Set error message
      } finally {
        setLoading(false); // Stop loading
      }
    }
    
    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Loading message
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message
  }

  return (
    <div>
      {/* Category */}
      <div>
        {/* Optional: Add category header here */}
      </div>

      {/* Blog Cards */}
      <div className='pt-14 mx-auto max-w-5xl'>
        {blogs.length > 0 ? (
          <BlogCards blogs={blogs} />
        ) : (
          <div>No blogs available.</div> // Message when no blogs are returned
        )}
      </div>
    </div>
  );
};

export default BlogPage;
