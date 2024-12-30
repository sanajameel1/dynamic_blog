import React from 'react';
import BlogCard from '../components/BlogCard';

export default function Mega() {
    const posts = [
        {
            id: '1',
            title: "HTML Block of Webdevelopment",
            description: "Explore the of the HTML, the bacbone of every web page.",
            date: "2024-12-28",
            imageUrl: "../images/silde1.jpg"

        },
        {
            id: "2",
            title: "Genrative Ai",
            description: "Explore the rapidly advancing field of Artificial Intelligence and its potential to revolutionize industries. Understand how AI technologies are reshaping everything from business operations to everyday life.",
            date: "2024-12-26",
            imageUrl: "/images/silde2.jpg"
        },
        {
            id: '3',
            title: "Deep Learning Explained",
            description: "Deep learning is a evolutionary subfield of machine learning that employs neural network to model complex patterns predictions based on data.",
            date: "2024-01-08",
            imageUrl: "../images/silde3.jpg"
        },
        {
            id: '4',
            title: "Natural Language Processing",
            description: "Natural language processing (NLP) is a type of artificial intelligence (AI) that allows computers to understand, interpret, and generate human language. NLP uses techniques from computer science, linguistics, and artificial intelligence to analyze text and speech data.",
            date: "2024-02-08",
            imageUrl: "../images/silde5.png"
        },
        {
            id: '5',
            title: "AI in Healthcare",
            description: "Artificial intelligence (AI) is used in healthcare to improve the experiences of patients and healthcare professionals. AI technologies, such as machine learning, natural language processing, and deep learning, can.",
            date: "2024-12-04",
            imageUrl: "../images/sildenew.jpg"
        },
        {
            id: '6',
            title: "Building Your First Neural Network",
            description: "The objective is to build a simple neural network with one neuron. It takes an input vector, calculates a weighted sum, adds a bias, and then applies the sigmoid activation function to produce a prediction. The result of the prediction is printed to the console..",
            date: "2024-1-07",
            imageUrl: "../images/silde6.jpg"
        },
    ];

    return (
        <div id="blog" className='py-8 bg-gray-100'>
            <h1 className='text-3xl font-bold text-center py-8 text-red-600 animate-color-change'>
                Exploring the world of AI and Technology
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {posts.map((post, index) => (
                    <div className="fade-in" key={post.id}>
                        <div className='blog-card border border-gray-300 rounded-lg p-4 hover:shadow-lg hover:border-blue-500 transition-all'>
                            <BlogCard post={post} isDarkBackground={index % 2 === 0} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
