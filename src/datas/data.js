import b1 from '../images/rich dad poor dad.jpg';
import b2 from '../images/atomic habits.jpeg';
import b3 from '../images/Daring Greatly.jpg';
import b4 from '../images/Deep Work Rules for Focused Success in a Distracted World.jpg';
import b5 from '../images/Essentialism The Disciplined Pursuit of Less.jpg';
import b6 from '../images/Getting Things Done.jpg';
import b7 from '../images/Leaders Eat Last.jpg';
import b8 from '../images/Make Time How to Focus on What Matters Every Day.jpg';
import b9 from '../images/Mindset The New Psychology of Success.jpg';
import b10 from '../images/the 7 habits of highly effective people.jpg';
import b11 from '../images/The Four Agreements.jpg';
import b12 from '../images/The Millionaire Next Door.jpg';
import b13 from '../images/The Miracle Morning.jpeg';
import b14 from '../images/The One Thing by Gary Keller and Jay Papasan.jpg';
import b15 from '../images/The Power of Now.jpg';



const booklist = [
  {
    id: 1,
    name: "Rich Dad Poor Dad",
    author: 'Robert T. Kiyosaki',
    price: 7.99,
    description: `Rich Dad Poor Dad" is a personal finance classic that explores the fundamental differences in mindset between the author's "rich dad" (his best friend's father) and his "poor dad" (his biological father). Through anecdotes and practical lessons, Kiyosaki contrasts the traditional path of working for a paycheck and saving money with the unconventional approach of investing, creating passive income, and acquiring assets. The book encourages readers to think differently about money, wealth-building, and financial independence. It serves as a foundational guide for those seeking financial education and a shift in perspective toward achieving financial success.`,
    img: b1,
  },
  {
    id: 2,
    name: "Atomic Habits",
    author: 'James Clear',
    price: 8.99,
    description: `Atomic Habits" by James Clear is a transformative book that delves into the power of small habits and how they can lead to remarkable changes over time. Clear provides insights into the science of habit formation, breaking down the process into manageable steps. The book emphasizes the importance of tiny changes, marginal gains, and consistent improvements in building positive habits and breaking negative ones. With practical strategies and real-life examples, Clear guides readers on a journey to understand the role of habits in personal and professional success. "Atomic Habits" is a valuable resource for anyone looking to make lasting improvements in their life.`,
    img: b2,
  },
  
  {
    id: 3,
    name: "Daring Greatly",
    author: 'Brené Brown',
    price: 9.99,
    description: ` In "Daring Greatly," Brené Brown explores the concept of vulnerability as a source of strength and courage rather than weakness. Drawing on her extensive research in social work, psychology, and leadership, Brown challenges the cultural myth that vulnerability is synonymous with fragility. Instead, she argues that embracing vulnerability allows us to lead more fulfilling lives, build stronger connections, and foster creativity. The book encourages readers to step into the arena of life, take risks, and be vulnerable, emphasizing the transformative power of embracing our imperfections. "Daring Greatly" is a compelling exploration of how vulnerability can lead to a more wholehearted and authentic existence.`,
    img: b3,
  },

  {
   id: 4,
   name: "Deep Work: Rules for Focused Success in a Distracted World",
   author: 'Cal Newport',
   price: 6.99,
   description: ` In "Deep Work," Cal Newport explores the concept of deep, concentrated work as a key factor for success in our modern, distracted world. Newport argues that the ability to focus without distraction on cognitively demanding tasks is becoming increasingly valuable in our information-driven economy. The book provides practical strategies and rules to cultivate deep work habits, eliminate distractions, and enhance productivity. Newport supports his insights with examples from history and the habits of successful individuals, making a compelling case for the transformative impact of deep work on professional and personal accomplishments.`,
   img: b4,
 },

 {
  id: 5,
  name: "Essentialism: The Disciplined Pursuit of Less",
  author: 'Greg McKeown',
  price: 9.99,
  description: `"Essentialism" by Greg McKeown advocates for the disciplined pursuit of less, emphasizing the importance of focusing on what truly matters. McKeown argues that by identifying and prioritizing the essential aspects of our lives, we can achieve greater fulfillment and success. The book provides practical insights and strategies to help readers eliminate non-essential activities, prioritize their time, and make intentional choices. "Essentialism" is a guide to simplifying one's life, avoiding the trap of busyness, and creating space for meaningful contributions and experiences.`,
  img: b5,
},

{
  id: 6,
  name: "Getting Things Done: The Art of Stress-Free Productivity",
  author: 'David Allen',
  price: 6.99,
  description: `"Getting Things Done," productivity expert David Allen presents a comprehensive system for managing tasks and achieving stress-free productivity. Allen's methodology, known as GTD, provides practical techniques for organizing, prioritizing, and executing tasks in both professional and personal life. The book introduces the concept of capturing all tasks and ideas in an external system, clarifying their meaning and significance, organizing them effectively, and regularly reviewing and updating the system. "Getting Things Done" is a widely acclaimed guide that has helped millions of individuals enhance their productivity and reduce stress by providing a clear and actionable framework for managing commitments and responsibilities.`,
  img: b6,
},

{
  id: 7,
  name: "Leaders Eat Last",
  author: 'Simon Sinek',
  price: 7.99,
  description: ` In "Leaders Eat Last," Simon Sinek explores the dynamics of leadership and the importance of creating a workplace culture that prioritizes the well-being of its members. Drawing on real-world examples and scientific research, Sinek argues that great leaders prioritize the needs of their teams, fostering trust, collaboration, and a sense of purpose. The title metaphor, "leaders eat last," emphasizes the idea that effective leaders prioritize the welfare of their team members before themselves. The book provides insights into building strong, resilient teams and creating environments where individuals feel valued and supported.`,
  img: b7,
},

{
  id: 8,
  name: "Make Time: How to Focus on What Matters Every Day",
  author: 'Jake Knapp and John Zeratsky',
  price: 4.99,
  description: ` "Make Time" by Jake Knapp and John Zeratsky is a practical guide that offers actionable strategies to help individuals reclaim their time and focus on what truly matters. The authors, who have backgrounds in design and technology, draw on their experiences to present a four-step framework that encourages intentional choices and mindful productivity. The book provides readers with tactics to eliminate distractions, optimize daily routines, and create space for meaningful activities. "Make Time" is a valuable resource for those seeking to take control of their schedules, prioritize their energy, and make room for the activities that bring joy and fulfillment.`,
  img: b8,
},

{
  id: 9,
  name: "Mindset: The New Psychology of Success",
  author: 'Carol S. Dweck',
  price: 7.49,
  description: ` In "Mindset," psychologist Carol S. Dweck explores the concept of mindset and how it influences success. She distinguishes between a "fixed mindset" and a "growth mindset" and demonstrates how one's beliefs about their abilities can profoundly impact their achievements. Dweck provides insights into fostering a growth mindset, embracing challenges, learning from failures, and ultimately unlocking one's full potential. The book has gained widespread acclaim for its transformative ideas applicable to various aspects of life, from education to business and personal development.`,
  img: b9,
},


{
  id: 10,
  name: "The 7 Habits of Highly Effective People",
  author: 'Stephen R. Covey',
  price: 7.49,
  description: `In "The 7 Habits of Highly Effective People," Stephen R. Covey presents a holistic approach to personal and professional effectiveness. Covey outlines seven timeless principles that, when integrated into one's life, can lead to lasting success and fulfillment. The habits focus on personal growth, effective communication, and proactive problem-solving. The book encourages readers to adopt a paradigm shift and develop habits that align with principles of integrity, mutual benefit, and continuous improvement. "The 7 Habits" is a widely influential guide that has helped millions of individuals enhance their productivity and personal effectiveness.`,
  img: b10,
},

{
  id: 11,
  name: "The Four Agreements",
  author: 'Don Miguel Ruiz',
  price: 8.99 ,
  description: `In "The Four Agreements," Don Miguel Ruiz draws on ancient Toltec wisdom to present a powerful code of conduct for achieving personal freedom and fulfillment. The book outlines four principles that, when adopted, can lead to a life of love, happiness, and freedom from self-limiting beliefs. The agreements are:`,
  img: b11,
},

{
  id: 12,
  name: "The Millionaire Next Door",
  author: 'Thomas J. Stanley and William D. Danko',
  price: 6.69 ,
  description: ` "The Millionaire Next Door" is a classic personal finance book that challenges common perceptions about wealth and the wealthy. Authors Stanley and Danko conducted extensive research to identify common traits and habits of millionaires, revealing that many wealthy individuals live modest lifestyles and prioritize frugality and smart financial choices. The book provides insights into building wealth, emphasizing the importance of disciplined saving, investing, and living below one's means. It's a practical guide for anyone looking to understand the principles of wealth accumulation and financial success.`,
  img: b12,
},

{
  id: 13,
  name: "The Miracle Morning",
  author: 'Hal Elrod',
  price: 6.69,
  description: `The Miracle Morning," Hal Elrod introduces a transformative morning routine designed to elevate your life and set a positive tone for each day. Elrod advocates for dedicating time each morning to focus on personal development through a set of activities known as the SAVERS:`,
  img: b13,
},


{
  id: 14,
  name: "The One Thing",
  author: 'Gary Keller and Jay Papasan',
  price: 5.99 ,
  description: ` "The One Thing" by Gary Keller and Jay Papasan explores the idea of focusing on the most important tasks to achieve extraordinary results in both personal and professional life. The authors argue that by identifying and prioritizing the "one thing" that matters most at any given time, individuals can enhance productivity and make significant progress toward their goals.`,
  img: b14,
},

{
  id: 15,
  name: "The Power of Now",
  author: 'Eckhart Tolle',
  price: 9.99,
  description: ` "The Power of Now" by Eckhart Tolle is a spiritual guide that emphasizes the importance of living in the present moment. Tolle explores the concept of mindfulness and the impact of focusing on the present rather than dwelling on the past or worrying about the future. The book provides practical insights and exercises to help readers achieve a state of presence and awaken to their true essence. "The Power of Now" has gained widespread acclaim for its transformative teachings on finding peace, joy, and fulfillment in the present.`,
  img: b15,
}


];

export default booklist;
