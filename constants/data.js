import { date } from 'astro/zod'
import {
  projects,
  skills,
  experencies,
  about,
  contact,
  resume,
  portafolio1,
  portafolio2,
  portafolio3,
  portafolio4,
  portafolio5,
  portafolio6,
  portafolio7,
  portafolio8,
  portafolio9,
  portafolio10,
  portafolio11,
  portafolio12,
  portafolio13,
  portafolio14,
  portafolio15,
  portafolio16,
  portafolio17,
  portafolio18,
  portafolio19,
  portafolio20,
  portafolio21,
  portafolio22,
  portafolio23,
  portafolio24,
  portafolio25,
  HTML,
  CSS,
  Javascript,
  React,
  Nodejs,
  Tailwind,
  Bootstrap,
  ReactQuery,
  Graphql,
  Typescript,
  Nextjs,
  Flask,
  Astro,
  NTT,
  Bedu,
  EstudiantesVerdesMx,
  IEEE,
  Logiety,
  Nb,
  Scio,
  Veracruz,
  LinkedIn,
  Github,
  Mail
} from '../src/images/images.js'

const myData = {
  githubUsername: 'CalicheOrozco',
  name: 'Caliche Orozco',
  profileDescription:
    'Experienced Frontend Web Developer with expertise in React, TailwindCSS, and Scrum methodology | Python Enthusiast | Fluent in English and Spanish',
  designation: 'Front-End Developer',
  avatarUrl: '/avatar.jpg',
  email: 'info@calicheorozco.com',
  navmenu: [
    {
      name: 'Projects',
      url: '/projects',
      icon: projects
    },
    {
      name: 'Skills',
      url: '/skills',
      icon: skills
    },
    {
      name: 'Experience',
      url: '/experience',
      icon: experencies
    },
    {
      name: 'About',
      url: '/about',
      icon: about
    },
    {
      name: 'Contact',
      url: '/contact',
      icon: contact
    },
    {
      name: 'Resume',
      url: '/resume',
      icon: resume
    }
  ],
  projects: [
  {
    title: 'Caliche Cards',
    link: 'https://caliche-cards.vercel.app/',
    github: 'https://github.com/CalicheOrozco/caliche-cards',
    imgUrl: portafolio25,
    date: 'Feb 24, 2026',
    description: `I built Caliche Cards because I love Anki’s learning method, but my workflow had two big limitations.

  First: on iOS I couldn’t use Anki the way I wanted (without depending on a specific paid app or being tied to one device). Second: in Anki Web I couldn’t use the add-on I rely on that simplifies the review experience by reducing the answer options to two clear buttons: “Fail” and “Pass”. That add-on only works on the desktop version, so my study flow wasn’t consistent across devices.

  💡 So I decided to create my own Anki-compatible PWA (Progressive Web App): Caliche Cards. It’s an offline-first flashcards app where I can import my decks (from .apkg), study anywhere, and keep the same simple “Fail / Pass” review buttons on any device—phone, tablet, or desktop.

  The app is responsive, installable, and designed for fast daily reviews. It stores everything locally (so it works even without internet), and also supports cloud sync so your progress and decks can follow you across devices.

  If you’ve ever wanted an Anki-like workflow that feels the same everywhere (especially on iOS), this project was built exactly for that.`,
    stack: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind',
      'PWA',
      'IndexedDB',
      'Dexie',
      'MongoDB Atlas'
    ]
  },
    {
      title: 'Calichef',
      link: 'https://calichef.netlify.app/',
      github: 'https://github.com/CalicheOrozco/calichef',
      imgUrl: portafolio24,
      date: 'Jul 12, 2024',
      description: `A few weeks ago, I decided to invest in a Thermomix. More than an expense, I see it as an investment 💰 because it saves me a lot of time in the kitchen ⏳. I am thrilled with how easy it is to use and with its app 📲, which has an extensive recipe catalog 🍲.

      However, like many current apps, it has a subscription-based payment model that I don’t find suitable for this type of product 💸. Maybe I’m a bit old school 🧓, but I miss the days when you bought an app, and it was yours forever 📱. I don’t think it’s necessary to pay a subscription for something very similar to a cookbook 📖 and that doesn’t require frequent updates.

      💡 That’s why I decided to take action and create my own website, which I turned into a PWA (Progressive Web Application) to install on my devices. That’s how Calichef 👨‍🍳 was born, where I used my web development knowledge to create a recipe listing focused on the Thermomix.

      The project is developed with React and Tailwind 💻, two libraries I have been working with for several years. I love everything I can achieve with web development, things I never would have even thought of 🤯.

      The app is fully responsive 📱💻, perfectly adapting to any device. The recipe details are so well organized that it’s very easy to have my tablet next to me consulting Calichef while cooking with the Thermomix 🥘. Additionally, it allows you to add recipes to favorites and save them locally, so you always have the ones that catch your eye at hand. It also has an advanced search with filters by country, language, difficulty, and stars, making it easy to find the exact recipe you want.

      I am very satisfied with the result and would love for you to see it 🤩.

      🔍 What do you think? I’d love to receive your comments and feedback. Don’t hesitate to share your thoughts! 👇
    `,
      stack: [
        'React',
        'Next.js',
        'HTML/CSS',
        'Javascript',
        'Tailwind',
        'PWA',
        'IDB'
      ]
    },
    {
      title: 'Money Tracker',
      link: 'https://money-tracker-caliche-app.vercel.app/',
      github: 'https://github.com/CalicheOrozco/money-tracker-caliche-app',
      imgUrl: portafolio23,
      date: 'May 18, 2024',
      description: `I recently set out to find a money tracker that fit my needs, but I was surprised to find that many available options are quite expensive. 💸 As a developer, I know that the data storage costs for this type of application don't justify such high prices. So, I decided to create my own money tracker. 🚀
    
    This Fullstack project was an exciting challenge, especially since, although I've taken several backend courses, my main experience is in frontend. I chose a MERN stack, using MongoDB for the database, Express to set up the API, and React with Vite for the frontend. I'm really happy with the result. 😄
    
    Features included:
    - 📝 User registration and login.
    - 📊 Dashboard to load and view transactions, available for both registered and guest users.
    - 📈 Detailed income and expense charts.
    - 💳 Selection and creation of personalized cards with icons.
    - 🔍 Filtering transactions by category, date, and card.
    - ⬅️ Editing and deleting transactions with a simple swipe.
    - 📥 Import and 📤 export transactions to and from Excel files.
    `,
      stack: [
        'React',
        'Vite',
        'HTML/CSS',
        'Javascript',
        'Node.js',
        'Express',
        'MongoDB'
      ]
    },

    {
      title: 'Web Code Editor',
      link: 'https://web-code-editor-silk.vercel.app/',
      github: 'https://github.com/CalicheOrozco/web-code-editor',
      imgUrl: portafolio21,
      date: 'Dec 11, 2023',
      description: `
      🚀 After my experience with iframes in my last "image to code" project, I had the idea of creating my own web editor similar to CodePen and CodeSandbox. The vision: a tool where I could quickly and efficiently test snippets of HTML, CSS, and JavaScript without the need to create or install files.
      
      💡 The first phase of the project was surprisingly smooth, thanks to the knowledge gained from my previous experience with iframes. But I decided to take it a step further by integrating my favorite IDE, Visual Studio Code, into the editor.
      
      ✨ The result has exceeded my expectations. As you can see in the attached image, I managed to replicate Google's homepage within my web editor, a small but significant achievement that reflects the project's capabilities.
      `,
      stack: ['React', 'Vite', 'HTML/CSS', 'Javascript']
    },
    {
      title: 'Image to code by Caliche',
      link: 'https://image-to-code-caliche.vercel.app/',
      github: 'https://github.com/CalicheOrozco/image-to-code-caliche',
      date: 'Dec 2, 2023',
      imgUrl: portafolio20,
      description: `
      🚀 Recently, I explored the new functionality of the OpenAI API, which allows recognizing elements in images. I developed a small project where, from screenshots or mockups, it automatically generates code using React and Tailwind CSS.
      
      🌟 This experience reminded me how much I enjoy web development and how committed I am to continue learning and growing in this field. I am excited about the opportunities that await me and to continue strengthening my skills as a web developer.
      `,
      stack: [
        'React',
        'Next.js',
        'OpenAI',
        'Tailwind',
        'HTML/CSS',
        'Typescript'
      ]
    },
    {
      title: 'SpaceX Launches 🚀',
      link: 'https://spacex-launches-six.vercel.app/',
      github: 'https://github.com/CalicheOrozco/spacex-launches',
      date: 'Sep 9, 2023',
      imgUrl: portafolio19,
      description: `
      🚀 Recently, I've noticed a lot of hype in the web development community around the Astro 3.0 update. This interest led me to dive into a wealth of content about the new features and advantages this framework offers.
      
      💡 Inspired by this excitement, I decided to test it with a project where I consume the SpaceX launches API. This project gave me the opportunity to work with Astro for the first time, and the experience was amazing.
      
      🌟 By leveraging Astro 3.0, I was able to take full advantage of its performance enhancements and efficient rendering. The project not only provided valuable insights into the capabilities of Astro but also marked a significant milestone in my journey as a web developer.
      `,
      stack: ['Astro', 'Tailwind', 'HTML/CSS', 'Typescript']
    },
    {
      title: 'Caliche Portfolio 2023',
      link: 'https://www.calicheorozco.com/',
      github: 'https://github.com/CalicheOrozco/caliche-os-astro',
      date: 'Sep 13, 2023',
      imgUrl: portafolio22,
      description: `
      🚀 Recently, I updated my personal landing page, which features my resume. Inspired by the Windows 10 aesthetic, I aimed to give it an original and unique touch. This idea came after watching a video by Miguel Ángel Durán García showcasing a personal portfolio styled like Windows 98 by Eric Selva.
      
      🔄 From Next.js to Astro
      
      I had the opportunity to explore Astro, a framework that caught my attention for its performance and efficiency. Initially, my portfolio was developed in Next.js. Despite using techniques like lazy loading and skeletons, I faced performance issues and a less-than-smooth user experience.
      
      💡 Motivated by these challenges, I decided to migrate my portfolio to Astro. What a difference! The results have been remarkable, with significant improvements in performance and interface fluidity.
      `,
      stack: [
        'React',
        'Astro',
        'HTML/CSS',
        'Javascript',
        'Tailwind',
        'Typescript'
      ]
    },
    {
      title: 'Calichecraft',
      link: 'https://calichecraft.vercel.app/',
      github: 'https://github.com/CalicheOrozco/calichecraft',
      date: 'Sep 4, 2023',
      imgUrl: portafolio18,
      description: `
      🌌 An interactive 3D experience built with Three.js and React. This project allows users to explore a virtual world created using advanced 3D graphics and animations. 
      
      ✨ The immersive environment showcases the power of modern web technologies, providing a seamless and engaging user experience. From realistic textures to dynamic lighting, every element is designed to captivate and inspire.
      
      🔍 Dive into a digital realm where you can interact with various objects and scenes, discovering the potential of Three.js and React in creating sophisticated and visually stunning applications. This project not only highlights my skills in 3D web development but also my commitment to pushing the boundaries of what's possible online.
      `,
      stack: ['React', 'ThreeJS', 'HTML/CSS', 'Javascript']
    },
    {
      title: 'Caliche Translate',
      link: 'https://caliches-translate.vercel.app/',
      github: 'https://github.com/CalicheOrozco/Caliches-Translate',
      date: 'Jul 30, 2023',
      imgUrl: portafolio17,
      description: `
      🌐 A translation app using Next.js and the OpenAI API for multilingual support. This app provides accurate translations and supports multiple languages, making it a powerful tool for breaking language barriers.
      
      🚀 This project marks the first time I've used the OpenAI API, an exciting milestone that opens up new possibilities for my future projects. By leveraging the advanced capabilities of OpenAI, I was able to implement highly accurate and context-aware translations, significantly enhancing the user experience.
      
      🌟 The app not only showcases my ability to integrate cutting-edge technologies but also highlights my commitment to continuous learning and innovation. This experience has been invaluable and sets the stage for more sophisticated and AI-driven applications in my development portfolio.
      `,
      stack: [
        'Next.js',
        'React',
        'OpenAI',
        'Tailwind',
        'Typescript',
        'Javascript',
        'API',
        'Redux'
      ]
    },
    {
      title: 'Caliche Portfolio 2022',
      link: 'https://caliche-next.vercel.app/',
      github: 'https://github.com/CalicheOrozco/caliche-next',
      date: 'Sep 19, 2022',
      imgUrl: portafolio16,
      description: `
      🔍 An earlier version of my personal portfolio website, this project highlights the various projects and skills I developed during that year. It serves as a testament to my growth and progress as a web developer.
      
      💡 The portfolio features a collection of diverse projects, each showcasing different aspects of my abilities in web development, design, and problem-solving. From responsive layouts to dynamic functionality, every project reflects my dedication to mastering new technologies and improving my craft.
      
      🌟 This version of my portfolio also includes detailed descriptions, and visual representations of my work, providing a comprehensive overview of my accomplishments. It's not just a portfolio; it's a chronicle of my journey, illustrating how far I've come and setting the stage for future achievements.
      `,
      stack: ['Next.js', 'React', 'Tailwind', 'Javascript']
    },
    {
      title: 'Robocoons website',
      link: 'https://robocoons.vercel.app/',
      github: 'https://github.com/CalicheOrozco/robocoons',
      date: 'Mar 06, 2023',
      imgUrl: portafolio14,
      description: `
      🤖 A website for the Robocoons robotics team, showcasing their innovative projects and remarkable achievements. This web provides a detailed look into their journey, highlighting the dedication and creativity that define the team.
      
      🏆 The website features comprehensive information about their competitions.
      
      💡 By exploring the Robocoons website, visitors can gain insights into the team's methodology, their collaborative spirit, and the advanced robotics technologies they employ. This project not only serves as a portfolio for the team but also as an inspiration for aspiring roboticists and tech enthusiasts.
      `,
      stack: ['React', 'Tailwind', 'Javascript', 'HTML/CSS']
    },
    {
      title: 'English Certify by Caliche',
      link: 'https://englishcertify.vercel.app',
      github: 'https://github.com/CalicheOrozco/duolingo-test-practice-caliche',
      date: 'Feb 01, 2023',
      imgUrl: portafolio13,
      description: `
      📚 As an English student, I realized that the Duolingo platform wasn't practical enough to prepare for the Duolingo certification. That's why I decided to create a free online platform for targeted practice and feedback on your skills. EnglishCertify offers personalized exercises to help you improve in specific areas and identify your mistakes.
      
      💡 With EnglishCertify, you have the option to see the correct answers, helping you learn from your errors. The platform is designed to be accessible on both computers and mobile devices, ensuring you can study anytime, anywhere.
      
      🌟 Whether you're currently studying for the Duolingo English certification or planning to in the future, we invite you to try EnglishCertify. We are confident that it will help you enhance your skills and pass the exam with flying colors. Our goal is to provide a practical, efficient, and accessible tool for all English learners aiming for certification.
      `,
      stack: ['React', 'Tailwind', 'Javascript', 'HTML/CSS']
    },
    {
      title: 'Memory Game by Caliche',
      link: 'https://memory-game-caliche.vercel.app/',
      github: 'https://github.com/CalicheOrozco/memory-game',
      date: 'Dec 02, 2022',
      imgUrl: portafolio12,
      description: `
      🎮 A fun and interactive memory game built with React. This game challenges players to match pairs of cards, providing an engaging and entertaining way to test and improve their memory skills.
      
      🧠 The intuitive design and smooth animations make for a seamless user experience, keeping players hooked as they strive to beat their previous time.
      
      🌟 Whether you're looking to pass the time or give your brain a good workout, this memory game offers a perfect blend of fun and challenge. It's a testament to the power of React in creating dynamic and interactive web applications.
      `,
      stack: ['React', 'Tailwind', 'Javascript', 'HTML/CSS']
    },
    {
      title: 'Caliche Productivity APP',
      link: 'https://productivity-calicheapp.vercel.app/',
      github: 'https://github.com/CalicheOrozco/productivity-calicheapp',
      date: 'Mar 13, 2023',
      imgUrl: portafolio15,
      description: `
      🗂️ A productivity app designed to help manage tasks and projects efficiently. This app includes a range of features for task tracking, project management, and collaboration, making it an essential tool for staying organized and productive.
      
      🔍 Key Features:
      - 🚀 Task Tracking: Randomly generate tasks to test the tool, with 50 tasks loaded by default. You can adjust this to start with as few as 5 tasks.
      - ⏲️ Timer: A built-in timer calculates how long each task takes to complete. You can set a specific time for each task and reset the timer as needed.
      - ✏️ Edit and Manage Tasks: Easily edit, delete, or mark tasks as completed. If you finish a task early, simply mark it as done.
      - 📊 Statistics: Track your productivity with detailed statistics showing how much time each task took to complete.
      - 💾 Persistence: If you leave the page, the timer pauses automatically, ensuring accurate tracking of your work time.
      
      🌟 This productivity app not only helps you manage your workload but also provides insights into your efficiency and time management. Perfect for both personal use and team collaboration, it leverages advanced features to enhance productivity and streamline your workflow.
      `,
      stack: ['React', 'Tailwind', 'Javascript', 'HTML/CSS']
    },
    {
      title: 'English Tenses by Caliche',
      link: 'https://english-tenses-caliche.vercel.app/',
      github: 'https://github.com/CalicheOrozco/english-tenses-caliche',
      date: 'Oct 18, 2022',
      imgUrl: portafolio11,
      description: `
      📘 An educational tool for learning and practicing English tenses, designed to function as a comprehensive verb database. You can search for any verb and it will provide all its verb forms, helping you master English grammar efficiently.
      
      🔍 The tool features an intuitive search functionality that allows users to quickly find and learn about various verb forms. Whether you are a beginner or an advanced learner, this tool is perfect for enhancing your understanding of English tenses.
      
      🌟 This educational tool not only aids in learning verb conjugations but also reinforces your knowledge through practice and repetition. It's an invaluable resource for students, educators, and anyone looking to improve their English language skills.
      `,
      stack: ['React', 'Tailwind', 'Javascript', 'HTML/CSS', 'API']
    },
    {
      title: 'Caliche weather APP',
      link: 'https://caliche-weather-app.vercel.app/',
      github: 'https://github.com/CalicheOrozco/english-tenses-caliche',
      date: 'Oct 15, 2022',
      imgUrl: portafolio10,
      description: `
      🌦️ A weather app providing real-time weather updates and forecasts. This web is designed to give users accurate and up-to-date weather information, ensuring you are always prepared for the day ahead.
      
      💡 The web includes data visualization features for an easy understanding of weather patterns. Charts and graphs display temperature changes, precipitation levels, and wind speeds in a clear and concise manner.
      
      🔍 By consuming a reliable weather API, the web fetches real-time data and presents it seamlessly to the user. The integration of technologies like React, Tailwind, and JavaScript ensures a smooth and responsive user experience.
      `,
      stack: ['React', 'Tailwind', 'Javascript', 'HTML/CSS', 'API']
    },
    {
      title: 'Landingpage 2021',
      link: 'https://calicheorozco-old-page.vercel.app/',
      github: 'https://github.com/CalicheOrozco/calicheorozco-old-page',
      date: 'Dec 10, 2021',
      imgUrl: portafolio8,
      description: `
      🌐 A landing page showcasing my projects and skills from 2021. This was my very first portfolio, providing an overview of my work and achievements during that year.
      
      💼 The page highlights various projects that demonstrate my abilities in web development, design, and problem-solving. Each project is accompanied by detailed descriptions and visual representations, giving a comprehensive view of my accomplishments.
      
      ✨ As my inaugural portfolio, this landing page holds a special place in my heart. It marks the beginning of my journey as a developer, reflecting my growth and dedication to the craft. The layout is designed to be user-friendly and visually appealing, making it easy for visitors to navigate through my work.
      `,
      stack: ['React', 'Tailwind', 'Javascript', 'HTML/CSS']
    },
    {
      title: 'Caliche MOVIE API',
      link: 'https://caliche-movies-calicheorozco.vercel.app/',
      github: 'https://github.com/CalicheOrozco/caliche-movies',
      date: 'Nov 22, 2021',
      imgUrl: portafolio9,
      description: `
      🎬 An application to browse and search for movies using a public API. This app is designed to help movie enthusiasts find detailed information about their favorite films quickly and easily.
      
      🔍 With this application, users can search for movies by title and get comprehensive details about each film, including ratings, reviews, cast, and crew. The user-friendly interface ensures a seamless browsing experience.
      
      💡 By integrating a reliable public API, the app fetches real-time data and presents it in an organized manner. Users can read reviews from other viewers and see aggregated ratings, helping them make informed decisions about what to watch next.`,
      stack: ['HTML/CSS', 'Javascript', 'API']
    },
    {
      title: 'Futurnow Landingpage',
      link: 'https://futurnow-caliche-calicheorozco.vercel.app/',
      github: 'https://github.com/CalicheOrozco/FutrNow',
      date: 'May 18, 2021',
      imgUrl: portafolio6,
      description: `
      🌟 A landing page for Futurnow, showcasing their products and services. This page is designed to highlight the diverse offerings of Futurnow, providing visitors with a clear and engaging overview of what the company has to offer.
      
      🔍 This project showcases my skills in web design and development, using technologies like React, Tailwind, and JavaScript to create a visually appealing and highly functional website. The layout is responsive and optimized for both desktop and mobile devices, ensuring a seamless experience for all users.`,
      stack: ['React', 'Javascript', 'Bootstrap', 'HTML/CSS']
    },
    {
      title: 'Bookmark App',
      link: 'https://bookmark-app-caliche-calicheorozco.vercel.app/',
      github: 'https://github.com/CalicheOrozco/evaluacion-bedu',
      date: 'Nov 22, 2021',
      imgUrl: portafolio7,
      description: `
      🔖 An app to save and manage your favorite bookmarks. This application is designed to help users organize their bookmarks efficiently and access them with ease.
            
      ✨ With a clean and intuitive interface, the app provides a seamless user experience. Users can add, edit, and delete bookmarks with just a few clicks. The search functionality also enables quick retrieval of specific bookmarks, saving time and effort.
      
      💡 Built using modern web technologies like React, Bootstrap, and JavaScript, the app ensures smooth performance and responsiveness across all devices. Whether you're using a desktop, tablet, or smartphone, you can manage your bookmarks effortlessly.`,
      stack: ['React', 'Javascript', 'Bootstrap', 'HTML/CSS']
    },
    {
      title: 'SALSA CATRINA',
      link: 'https://salsa-catrina.surge.sh',
      github:
        'https://github.com/CalicheOrozco/Desarrollo-web/tree/master/LandingPages/Salsas-la-catrina',
      date: 'Oct 23, 2020',
      imgUrl: portafolio1,
      description: `
      🌶️ A landing page for Salsa Catrina, showcasing their delicious products. This page is designed to provide comprehensive information about their range of salsas, highlighting the unique flavors and ingredients that make them special.
      
      🍅 The landing page features detailed sections for each salsa, complete with mouth-watering images and descriptions that capture the essence of Salsa Catrina's culinary offerings. From mild to extra spicy, every salsa is presented with its key ingredients and suggested pairings.`,
      stack: ['HTML/CSS', 'Bootstrap']
    },
    {
      title: 'PLATZICONF MEXICO',
      link: 'https://platziconfmexico.surge.sh/',
      github:
        'https://github.com/CalicheOrozco/Desarrollo-web/tree/master/LandingPages/Platzi-bootstrap',
      date: 'Oct 19, 2020',
      imgUrl: portafolio2,
      description: `
      📅 A landing page for the Platziconf Mexico event, designed as a project for a course on Platzi. This page provides a comprehensive overview of the conference, ensuring attendees have all the information they need at their fingertips.
      
      📋 The landing page includes detailed event information, such as the schedule, speaker bios, and session topics. Each section is thoughtfully organized to help visitors easily navigate through the event details and plan their participation.
      
      🎤 The speaker information highlights the expertise and background of each presenter, giving attendees insights into the valuable knowledge and experience they can expect to gain. The schedule section outlines the timeline of the conference, including keynotes, workshops, and networking sessions.`,
      stack: ['HTML/CSS', 'Bootstrap']
    },
    {
      title: 'Arduino Day 2021',
      link: 'https://countdownarduino21-caliche.surge.sh',
      github:
        'https://github.com/CalicheOrozco/Desarrollo-web/tree/master/Countdown/2021/countdown',
      date: 'Feb 02, 2021',
      imgUrl: portafolio5,
      description: `
      ⏲️ A countdown page for the Arduino Day 2021 event. This page is designed to build excitement and anticipation by displaying the time remaining until the event starts, while also providing detailed information about the planned activities.
      
      🔍 The page features a real-time countdown timer, ensuring visitors are always aware of how much time is left until the event. Additionally, it includes sections detailing the various activities, workshops, and presentations scheduled for Arduino Day, giving attendees a clear overview of what to expect.`,
      stack: ['HTML/CSS', 'Bootstrap', 'Javascript']
    },
    {
      title: 'WWE NETWORK',
      link: 'https://wwenetworkcaliche.surge.sh/',
      github:
        'https://github.com/CalicheOrozco/Desarrollo-web/tree/master/WWE%20Network',
      date: 'Oct 04, 2020',
      imgUrl: portafolio3,
      description: `
      💪 A landing page for WWE Network, designed to simulate the real platform and showcase all WrestleManias up to the present. This project, one of my first, provides detailed information about WWE shows and includes a sign-up form for new subscribers.
      
      📺 The landing page features dedicated sections for each WrestleMania.`,
      stack: ['HTML/CSS', 'Javascript', 'Bootstrap']
    },
    {
      title: 'SIMON DICE',
      link: 'https://simondice-caliche.surge.sh/',
      github:
        'https://github.com/CalicheOrozco/Desarrollo-web/tree/master/SimonDice',
      date: 'Sep 20, 2020',
      imgUrl: portafolio4,
      description: `
      🕹️ A Simon Says game built with HTML, CSS, and JavaScript. This project provides an interactive and engaging gaming experience with levels of increasing difficulty, challenging players' memory and reflexes.
      
      🎮 The game starts with simple sequences, gradually becoming more complex as players progress through the levels. Each round adds a new step to the sequence, requiring players to remember and repeat increasingly long patterns.`,
      stack: ['HTML/CSS', 'Javascript']
    }
  ],
  skills: {
    description:
      "This is my current tech stack, in which I feel most comfortable and where I'm trying to specialize right now.",
    languages: [
      {
        name: 'HTML',
        icon: HTML
      },
      {
        name: 'CSS',
        icon: CSS
      },
      {
        name: 'Javascript',
        icon: Javascript
      }
    ],
    libraries: [
      {
        name: 'Node.js',
        icon: Nodejs
      },
      {
        name: 'Tailwind CSS',
        icon: Tailwind
      },
      {
        name: 'React Query',
        icon: ReactQuery
      },
      {
        name: 'GraphQL',
        icon: Graphql
      },
      {
        name: 'Typescript',
        icon: Typescript
      },
      {
        name: 'Bootstrap',
        icon: Bootstrap
      }
    ],
    frameworks: [
      {
        name: 'React.js',
        icon: React
      },
      {
        name: 'Next.js',
        icon: Nextjs
      },
      {
        name: 'Astro',
        icon: Astro
      },
      {
        name: 'Flask',
        icon: Flask
      }
    ]
  },
  about: {
    title:
      'I am a middle-level front-end developer with 2 years of experience in creating responsive web designs and mobile apps that are user-friendly for startups. Currently, I am working on ',
    titleEs:
      'Soy un middle-level front-end developer con 2 años de experiencia en la creación de diseños web receptivos y aplicaciones móviles fáciles de usar para startups. Actualmente, estoy trabajando en ',
    description: [
      ` I am a frontend developer with experience developing websites and applications. I have strong knowledge in technologies like React, TailwindCSS, Next JS, TypeScript and GraphQL. My focus in development is to create quality, efficient and scalable solutions to meet the needs of users. I am a frontend developer with experience developing websites and applications. I have strong knowledge in technologies like React, TailwindCSS, Next JS, TypeScript and GraphQL. My focus in development is to create quality, efficient and scalable solutions to meet the needs of users.`,
      `In my career, I have worked in interdisciplinary teams in different industries, including education, consulting, and foreign trade. Contributed to the creation of various web products in collaboration with product and back-end teams, and helped improve website performance by 50%.`,
      `I also have a solid understanding of UX/UI best practices and have implemented agile methodologies, such as Scrum, to optimize speed and scalability of applications. My commitment to work and detail has been shown in the development of reusable code and libraries for future projects.`,
      `In addition, I am fluent in English, which has allowed me to work with international teams and broaden my professional horizons. I am committed to continue learning and developing my skills to create impactful and efficient solutions for my clients.`,
      `If you are looking for an experienced fron-tend developer with a strong commitment to quality, don't hesitate to contact me.`
    ],
    descriptionEs: [
      `He estado desarrollando páginas web desde que tenía 12 años. No sabía qué significaba ser desarrollador front-end en ese momento porque el término no se acuñaba en ese tiempo. `,
      `A medida que adquiría más experiencia, amplié mi conjunto de habilidades para incluir tecnologías modernas como React, Next JS, TypeScript, React-hook-form, Editor.js, Node.js, MySQL, Bootstrap y Tailwind, entre otras.`
    ],
    currentCompany: 'NTT Data',
    currentProject: 'Tenaris NMS Order Dressing',
    currentProjectUrl: 'https://github.com/bedu-hq',
    education: 'Veracruz Technological Institute',
    languages: 'Spanish and English'
  },
  experience: [
    {
      title: 'Centers Senior Developer',
      icon: NTT,
      company: 'NTT Data',
      location: 'León, Guanajuato, Mexico',
      startDate: 'Mar 2023',
      endDate: 'Currently',
      companyLink: 'https://mexico.nttdata.com/',
      desc: [
        'Project: Tenaris Tamsa NMS Project',
        ' • Managed customer specifications and international steel pipe standards to maintain manufacturing systems.',
        ' • Developed desktop applications to streamline and expedite the production order creation process.',
        ' • Analyzed and revised specifications, standards, and orders for production order creation.',
        ' • Coordinated production order receipt from global planning to fulfill customer expectations.',
        ' • Oversaw logistics and processing of customer orders and product designs.'
      ],
      skills: 'C# · .NET · SQL '
    },
    {
      title: 'Front-End Developer',
      icon: Bedu,
      company: 'BEDU',
      location: 'Mexico City, Mexico',
      startDate: 'Dec 2021',
      endDate: 'Jun 2021',
      companyLink: 'https://bedu.org/',
      desc: [
        '• Developed websites using React and TailwindCSS, collaborating with UX/UI design teams to enhance website performance by 50%.',
        '• Contributed to creating various web products in partnership with product and backend teams.',
        '• Participated in product releases and code reviews, working closely with 3 senior developers and team leads',
        ' • Demonstrated strong work ethic and attention to detail.',
        ' • Assisted in developing 100% reusable code and libraries for future projects.',
        '• Demonstrated strong work ethic and attention to detail.'
      ],
      skills:
        'Tailwind CSS · TypeScript · Node.js · ReactQuery · GraphQL · Next.js · JavaScript · HTML · React.js'
    },
    {
      title: 'Apprenticeship',
      icon: Scio,
      company: 'Scio Consulting',
      location: 'Morelia, Michoacán, México',
      startDate: 'Sep 2021',
      endDate: 'Dec 2021',
      companyLink: 'https://sciodev.com/',
      desc: [
        '•	Strong understanding of UX/UI best practices.',
        '•	Acquired and implemented Scrum methodology.',
        '•	Collaborated with product teams on new product launches.',
        '•	Optimized applications for optimal speed and scalability.',
        '•	Addressed and reduced technical debt by 30%.'
      ],
      skills:
        'Scrum · Cascading Style Sheets (CSS) · JavaScript · HTML · React.js'
    },
    {
      title: 'Front-end Internship',
      icon: Logiety,
      company: 'Logiety',
      location: ' Veracruz, México',
      startDate: 'Feb 2021',
      endDate: 'Dec 2021',
      companyLink: 'https://logiety.com/',
      desc: [
        '•	Developed landing pages using React.',
        '•	Created templates in Openpyxl, which significantly reduced the time required for form filling by 90%.',
        '•	Implemented CSS effects to enhance user interaction with the website.',
        '•	Contributed to the development of new features.'
      ],
      skills:
        'Skills: Cascading Style Sheets (CSS) · JavaScript · HTML · React.js · Openpyxl · Python'
    },
    {
      title: 'Help Newcomers and promoter of Latino America culture',
      icon: Nb,
      company: 'Hola New Brunswick',
      location: 'Moncton, New Brunswick, Canada',
      startDate: 'Jun 2022',
      endDate: 'Nov 2022',
      companyLink: 'https://www.facebook.com/HolaNewBrunswick',
      desc: [
        '•	Volunteered with the nonprofit organization Hola New Brunswick to assist newcomers from Latin America in Moncton in integrating into the community of New Brunswick.',
        '• Collaborated in organizing and promoting cultural events such as the Mosaiq Moncton Festival 2022, showcasing Latin American culture.'
      ]
    },
    {
      title: 'IEEE ITVER',
      icon: IEEE,
      location: ' Veracruz, México',
      company: 'Institute of Electrical and Electronics Engineers ITVER.',
      startDate: 'Sep 2017',
      endDate: 'Feb 2021',
      companyLink: 'https://www.facebook.com/ieee.itver/',
      desc: [
        '•	Dedicated IEEE volunteer and Vice President at my university for 2 years.',
        '• Led various initiatives aimed at promoting technology and science.',
        "• Organized events such as the Veracruz Children's Science Fair 2017.",
        '• Participated in the IEEE Day celebrations from 2018 to 2020 in Veracruz.',
        '• Conducted a Scratch Day workshop at "Las Hayas" school.'
      ]
    },
    {
      title: 'Pro sustainability',
      icon: EstudiantesVerdesMx,
      company: 'ITVER Green Students.',
      location: ' Veracruz, México',
      startDate: 'Aug 2017',
      endDate: 'Jun 2022',
      companyLink: 'https://www.facebook.com/EstudiantesVerdesMx',
      desc: [
        'Founded and led various initiatives focused on sustainable development.',
        ' • Organized beach cleanups to promote environmental conservation.',
        ' • Provided support for marginalized communities through initiatives and projects.',
        ' • Led reforestation efforts in parks to enhance green spaces and biodiversity.',
        ' • Conducted hospital visits to bring joy and support to patients.',
        ' • Organized the collection and recycling of materials to promote waste reduction and sustainability.'
      ]
    },
    {
      title: 'IT culture coordinator and promoter',
      icon: Veracruz,
      company: 'Veracruz',
      location: ' Veracruz, México',
      startDate: 'Sep 2017',
      endDate: 'Dec 2021',
      companyLink: 'https://es.wikipedia.org/wiki/Veracruz',
      desc: [
        '• Coordinated and organized Talent Nights Veracruz events from 2017 to 2019.',
        '• Organized Arduino Day Veracruz events in 2018 and 2019.',
        '• Coordinated Hacker Day event in 2019.',
        '• Organized the Tecnovation Challenge Veracruz.',
        '• Arranged Technological Meetups Veracruz.'
      ]
    },
    {
      title: 'Conferences and Workshops',
      icon: Veracruz,
      company: 'Veracruz',
      location: ' Veracruz, México',
      startDate: 'Sep 2019',
      endDate: 'Dec 2021',
      companyLink: 'https://es.wikipedia.org/wiki/Veracruz',
      desc: [
        'Workshop facilitator and conference speaker in the following topics:',
        '• IOT with Raspberry Pi and Python.',
        '• Augmented reality with Spark AR Studio.',
        '• Introduction to Raspberry Pi.',
        '• How can I be an agent of change in my locality?',
        '• IEEE As a student branch.'
      ]
    }
  ],
  socialLinks: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/calicheorozco/',
      icon: LinkedIn
    },
    {
      name: 'GitHub',
      url: 'https://github.com/CalicheOrozco',
      icon: Github
    },
    {
      name: 'Mail',
      url: 'mailto:info@calicheorozco.com',
      icon: Mail
    }
  ]
}

export default myData
