import React from 'react';
import { Link } from 'react-router-dom';
import { CiUser } from "react-icons/ci";

const BlogCards = ({ blogs }) => {
  // Ensure blogs is defined and is an array
  const filterBlogs = Array.isArray(blogs) ? blogs : [];
  console.log(filterBlogs);

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1'>
      {
        filterBlogs.length > 0 ? (
          filterBlogs.map((blog) => (
            <Link key={blog.title} to={`/blog/${blog.title}`}>
              <div className='max-w-[250px] p-auto shadow-md w-auto'>
                <img 
                  src={blog.urlToImage || 'default-image-url.jpg'} // Fallback image URL
                  alt={blog.title || "Blog Image"} // Fallback alt text
                  className='w-auto p-3' 
                />
                <h3 className='p-3 w-auto font-bold'>{blog.title || 'Untitled'}</h3>
                <div className='flex justify-center items-center p-3 w-auto'>
                  <CiUser size={20} className='text-white bg-black mr-2' />
                  {blog.author || 'Unknown Author'} // Fallback author name
                </div>
                <p className='p-3'>Published: {blog.publishedAt || 'N/A'}</p> {/* Fallback published date */}
              </div>
            </Link>
          ))
        ) : (
          <p>No blogs available.</p> // Fallback message if no blogs
        )
      }
    </div>
  );
};

export default BlogCards;
