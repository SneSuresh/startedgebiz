import React, { useState, useEffect } from 'react';
import './Blog.css';
// import blog1 from '../../images/blog1.jpg';
// import blog2 from '../../images/blog2.jpg';
// import blog3 from '../../images/blog3.jpg';
// import blog4 from '../../images/blog4.jpg';

const blogPosts = [
  {
    id: 1,
    image: 'blog1.jpg',
    title: 'How Consultancy Drives Business Success',
    summary: 'Discover how expert consultancy can help your business overcome challenges, streamline operations, and unlock new growth opportunities in today\'s competitive market.',
    content: 'Consultancy provides businesses with the expertise and guidance needed to identify challenges, streamline operations, and unlock new growth opportunities. At StartEdgeBiz, our consultants work closely with clients to develop tailored strategies that drive measurable results and long-term success.'
  },
  {
    id: 2,
    image: 'blog2.jpg',
    title: 'Digital Transformation: The Key to Modern Business',
    summary: 'Learn why digital transformation is essential for businesses of all sizes and how StartEdgeBiz helps clients embrace technology for sustainable success.',
    content: 'Digital transformation is no longer optional for businesses that want to stay competitive. StartEdgeBiz helps organizations adopt the latest technologies, optimize processes, and foster a culture of innovation to ensure sustainable growth in the digital age.'
  },
  {
    id: 3,
    image: 'blog3.jpg',
    title: 'Client Success: From Startup to Industry Leader',
    summary: 'Read the inspiring journey of one of our clients who leveraged our consultancy services to become a leader in their industry.',
    content: 'Our client began as a small startup with big ambitions. Through our strategic guidance and hands-on support, they navigated challenges, scaled operations, and ultimately became a recognized leader in their industry.'
  },
  {
    id: 4,
    image: 'blog4.jpg',
    title: 'Why Choose StartEdgeBiz Consultancy?',
    summary: 'Explore the unique advantages of partnering with StartEdgeBiz for your business consultancy needs.',
    content: 'StartEdgeBiz stands out for its commitment to client success, innovative solutions, and a team of experienced professionals. We prioritize understanding your unique needs and delivering results that exceed expectations.'
  }
];

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState(null);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="blog-hero-content">
          <h1>StartEdgeBiz Blog</h1>
          <p>Insights, Stories & Tips for Business Growth</p>
        </div>
      </section>

      <section className="blog-content-section">
        <div className="blog-grid">
          {blogPosts.map(post => (
            <div className="blog-post-card" key={post.id}>
              <img src={`images/${post.image}`} alt={post.title} />
              <h2>{post.title}</h2>
              <button className="read-more" onClick={() => setExpandedPost(post.id)}>
                Read More
              </button>
            </div>
          ))}
        </div>
        {expandedPost && (
          <div className="blog-expanded-content">
            <h2>{blogPosts.find(p => p.id === expandedPost).title}</h2>
            <p>{blogPosts.find(p => p.id === expandedPost).content}</p>
            <button className="contact-btn" onClick={() => setExpandedPost(null)}>
              Close
            </button>
          </div>
        )}
        <div className="blog-cta">
          <h2>Want to learn more or share your story?</h2>
          <a href="/contact" className="contact-btn">Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default Blog; 