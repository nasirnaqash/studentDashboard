// src/courseData.js
const courseData = [
  {
    id: 1,
    name: "Introduction to React Native",
    instructor: "John Doe",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 1,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 2,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 2,
    name: "Advanced JavaScript Programming",
    instructor: "Jane Smith",
    description:
      "Dive deep into advanced JavaScript concepts and programming techniques.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here",
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Intermediate JavaScript knowledge", "HTML and CSS basics"],
    syllabus: [
      {
        week: 1,
        topic: "Closures and Scopes",
        content: "Exploring JavaScript closures and variable scopes.",
      },
      {
        week: 2,
        topic: "Asynchronous Programming",
        content: "Working with asynchronous code and promises.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 3,
        name: "Charlie Brown",
        email: "charlie@example.com",
      },
      {
        id: 4,
        name: "Diana Johnson",
        email: "diana@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 3,
    name: "Web Development Bootcamp",
    instructor: "Emily Williams",
    description: "An intensive bootcamp to learn full-stack web development.",
    enrollmentStatus: "Closed",
    thumbnail: "your.image.here",
    duration: "12 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 9:00 PM",
    location: "In-Person",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "HTML and CSS Basics",
        content: "Introduction to HTML and CSS fundamentals.",
      },
      {
        week: 2,
        topic: "JavaScript Fundamentals",
        content: "Getting started with JavaScript and DOM manipulation.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 5,
        name: "Grace Lee",
        email: "grace@example.com",
      },
      {
        id: 5,
        name: "Henry Smith",
        email: "henry@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 4,
    name: "Data Science Fundamentals",
    instructor: "Maria Garcia",
    description: "Learn the foundations of data science and analysis.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here",
    duration: "6 weeks",
    schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic statistics knowledge", "Python programming basics"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Data Science",
        content: "Overview of data science and its applications.",
      },
      {
        week: 2,
        topic: "Data Analysis with Python",
        content: "Using Python for data analysis and visualization.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 6,
        name: "Ella Davis",
        email: "ella@example.com",
      },
      {
        id: 7,
        name: "Frank Wilson",
        email: "frank@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 5,
    name: "Machine Learning Basics",
    instructor: "Samuel Brown",
    description:
      "Get started with the fundamentals of machine learning and AI.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Data science basics", "Python programming skills"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Machine Learning",
        content: "Overview of machine learning concepts and algorithms.",
      },
      {
        week: 2,
        topic: "Supervised Learning",
        content: "Understanding supervised learning and its applications.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 8,
        name: "George Miller",
        email: "george@example.com",
      },
      {
        id: 9,
        name: "Hannah White",
        email: "hannah@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 6,
    name: "Full-Stack Web Development",
    instructor: "David Smith",
    description: "Learn front-end and back-end web development from scratch.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here",
    duration: "16 weeks",
    schedule: "Mondays and Wednesdays, 6:30 PM - 9:30 PM",
    location: "In-Person",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "HTML and CSS Fundamentals",
        content: "Introduction to web design and styling.",
      },
      {
        week: 2,
        topic: "JavaScript and DOM Manipulation",
        content: "Working with JavaScript and the Document Object Model.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 10,
        name: "Isabella Johnson",
        email: "isabella@example.com",
      },
      {
        id: 11,
        name: "Jack Davis",
        email: "jack@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 7,
    name: "Python Programming for Beginners",
    instructor: "Sophia Wilson",
    description: "A beginner-friendly course to learn Python programming.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here",
    duration: "6 weeks",
    schedule: "Tuesdays and Thursdays, 7:00 PM - 8:30 PM",
    location: "Online",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "Getting Started with Python",
        content: "Introduction to Python, basic syntax, and variables.",
      },
      {
        week: 2,
        topic: "Control Flow and Functions",
        content: "Working with loops, conditions, and functions in Python.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 12,
        name: "Katherine Miller",
        email: "katherine@example.com",
      },
      {
        id: 13,
        name: "Liam Brown",
        email: "liam@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 8,
    name: "Mobile App Development with Flutter",
    instructor: "Olivia Martinez",
    description: "Learn to build mobile apps using the Flutter framework.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here",
    duration: "10 weeks",
    schedule: "Saturdays, 9:00 AM - 12:00 PM",
    location: "In-Person",
    prerequisites: ["Basic programming knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Flutter",
        content:
          "Overview of Flutter and setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building UI with Flutter",
        content: "Creating user interfaces with Flutter widgets.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 14,
        name: "Mia Garcia",
        email: "mia@example.com",
      },
      {
        id: 15,
        name: "Noah Wilson",
        email: "noah@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 9,
    name: "Data Analysis with R",
    instructor: "William Davis",
    description:
      "An in-depth course on data analysis using the R programming language.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here",
    duration: "12 weeks",
    schedule: "Mondays and Wednesdays, 6:30 PM - 8:30 PM",
    location: "Online",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to R",
        content: "Getting started with R, data types, and basic operations.",
      },
      {
        week: 2,
        topic: "Data Visualization with ggplot2",
        content: "Creating data visualizations using ggplot2.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 16,
        name: "Oliver Smith",
        email: "oliver@example.com",
      },
      {
        id: 17,
        name: "Penelope Johnson",
        email: "penelope@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 10,
    name: "Ethical Hacking and Cybersecurity",
    instructor: "James Johnson",
    description: "Learn about cybersecurity and ethical hacking techniques.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here",
    duration: "14 weeks",
    schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Basic computer knowledge", "Basic networking concepts"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Cybersecurity",
        content: "Overview of cybersecurity concepts and best practices.",
      },
      {
        week: 2,
        topic: "Ethical Hacking Fundamentals",
        content: "Understanding ethical hacking and penetration testing.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 18,
        name: "Quinn Miller",
        email: "quinn@example.com",
      },
      {
        id: 19,
        name: "Rachel Davis",
        email: "rachel@example.com",
      },
      // Additional enrolled students...
    ],
  },
  // Add more courses as needed...
];

export default courseData;
