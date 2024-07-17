import { useState } from 'react';
import { Button } from "@/components/ui/button";

const BlogPost = ({ title, date, excerpt }) => (
  <div className="mb-8 border-b pb-4">
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
    <p className="text-sm text-gray-500 mb-2">{date}</p>
    <p className="text-gray-600 mb-4">{excerpt}</p>
    <Button variant="outline" size="sm">Read More</Button>
  </div>
);

const BlogPage = () => {
  const [posts] = useState([
    {
      title: "Exploring the Frontiers of AI and Human Interaction",
      date: "June 15, 2023",
      excerpt: "In this post, I delve into the latest developments in AI-human interaction, discussing the implications for future technologies and societal changes."
    },
    {
      title: "The Role of Machine Learning in Scientific Discovery",
      date: "May 28, 2023",
      excerpt: "I explore how machine learning is accelerating scientific research and enabling breakthroughs in fields ranging from biology to astrophysics."
    },
    {
      title: "Ethical Considerations in AI Development",
      date: "May 10, 2023",
      excerpt: "A deep dive into the ethical challenges we face as AI becomes more prevalent in our daily lives, and how we can address these issues."
    },
    {
      title: "The Future of Natural Language Processing",
      date: "April 22, 2023",
      excerpt: "I discuss the latest advancements in NLP and what they mean for the future of human-computer interaction and language understanding."
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Anton Osika's Blog</h1>
          <p className="text-xl text-gray-600">Thoughts on AI, Machine Learning, and the Future of Technology</p>
        </header>

        <main>
          {posts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </main>

        <footer className="mt-12 text-center text-gray-500">
          <p>© 2023 Anton Osika. All rights reserved.</p>
          <div className="mt-4">
            <Button variant="ghost" size="sm" className="mx-2">Twitter</Button>
            <Button variant="ghost" size="sm" className="mx-2">LinkedIn</Button>
            <Button variant="ghost" size="sm" className="mx-2">GitHub</Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default BlogPage;