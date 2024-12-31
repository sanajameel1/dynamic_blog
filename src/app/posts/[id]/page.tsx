'use client';
import React from 'react';
import CommentSection from '@/components/CommentSection';
import AuthoreCard from '@/components/AuthoreCard';

// Static array of posts
const posts = [
  {
    id: '1',
    title: "HTML Block of Webdevelopment",
    description: "Explore the of the HTML, the bacbone of every web page.",
    date: "2024-12-28",
    image: "../images/silde1.jpg"

},
{
    id: "2",
    title: "Genrative Ai",
    description: "Explore the rapidly advancing field of Artificial Intelligence and its potential to revolutionize industries. Understand how AI technologies are reshaping everything from business operations to everyday life.",
    date: "2024-12-26",
    image: "/images/silde2.jpg"
},
{
    id: '3',
    title: "Deep Learning Explained",
    description: "Deep learning is a evolutionary subfield of machine learning that employs neural network to model complex patterns predictions based on data.",
    date: "2024-01-08",
    image: "../images/silde3.jpg"
},
{
    id: '4',
    title: "Natural Language Processing",
    description: "Natural language processing (NLP) is a type of artificial intelligence (AI) that allows computers to understand, interpret, and generate human language. NLP uses techniques from computer science, linguistics, and artificial intelligence to analyze text and speech data.",
    date: "2024-02-08",
    image: "../images/silde5.png"
},
{
    id: '5',
    title: "AI in Healthcare",
    description: "Artificial intelligence (AI) is used in healthcare to improve the experiences of patients and healthcare professionals. AI technologies, such as machine learning, natural language processing, and deep learning, can.",
    date: "2024-12-04",
    image: "../images/sildenew.jpg"
},
{
    id: '6',
    title: "Building Your First Neural Network",
    description: "The objective is to build a simple neural network with one neuron. It takes an input vector, calculates a weighted sum, adds a bias, and then applies the sigmoid activation function to produce a prediction. The result of the prediction is printed to the console..",
    date: "2024-1-07",
    image: "../images/silde6.jpg"
},
];

// Component definition
export default function Post({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = React.use(params);
  const { id } = unwrappedParams;

  // Find the matching post
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <h2 className="text-2xl font-bold text-center mt-10">Post not found</h2>;
  }

  // Render paragraphs from description
  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
        {post.title}
      </h1>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto mt-4 rounded-md"
        />
      )}
      <div className="mt-6">{renderParagraphs(post.description)}</div>
      <CommentSection postId={post.id} />
      <AuthoreCard />
    </div>
  );
}
