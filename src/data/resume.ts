export const resumeData = {
  name: "Jesse Beuman",
  title: "R&D Vision Engineer and all-round Automation enthusiast", // Updated title for the portfolio, as requested
  about: "I am a passionate engineer with experience in building scalable systems and creating stunning digital experiences.",
  contact: {
    email: "jessebeuman@gmail.com",
    linkedin: "https://linkedin.com/in/jessebeuman",
    // github: "https://github.com/jessebeuman",
  },
  experience: [
    {
      role: "Bachelor of Science: Mechanical Engineering",
      company: "TU Delft",
      location: "Delft, Netherlands",
      coordinates: { lat: 52.0116, lng: 4.3571 , "zoom" : 13},
      duration: "Sep 2012 - July 2016",
      description: ["Bachelor Thesis: The performance of clingfish inspired suction cups on rough surfaces."],
      skills: ["Mechanical Engineering", "Research"],
    },
    {
      role: "Collegerama Operator",
      company: "TU Delft",
      location: "Delft, Netherlands",
      coordinates: { lat: 52.0116, lng: 4.3571 , "zoom" : 13 },
      duration: "Oct 2013 - July 2016",
      description: [
        "Recording the lectures of a large variety of Bachelor and Master courses.",
        "Assisting the lecturers and supervising the lecture rooms."
      ],
      skills: ["Video Production", "Technical Support"],
    },
    {
      role: "Master of Science: Mechanical Engineering – Dynamics and Control",
      company: "TU Eindhoven",
      location: "Eindhoven, Netherlands",
      coordinates: { lat: 51.4416, lng: 5.4714, zoom: 13 },
      duration: "Sep 2016 - Oct 2020",
      description: ["Focus on Dynamics, Control, Manufacturing Engineering, Optimization, Kinematics. Master Thesis: Optimization of a mobile manipulator for consecutive pick and place tasks."],
      skills: ["Dynamics", "Control", "Optimization", "Kinematics", "Robotics"],
    },
    {
      role: "Prototype/Vision Engineer",
      company: "VinciTech",
      location: "Eindhoven, Netherlands",
      coordinates: { "lng": 5.446762, "lat": 51.434315, "zoom": 13},
      duration: "Oct 2020 - April 2024",
      description: [
        "Customer specific Vision and Robotics solutions.",
        "Defect detection, size determination, object localization, robot path planning, kinematics, adaptive robot pick and placing, advanced algorithms."
      ],
      skills: ["Python", "JavaScript", "Linux", "Robotics", "Project Planning"],
    },
    {
      role: "R&D Vision Engineer",
      company: "Sormac",
      location: "Venlo, Netherlands",
      coordinates: {  "lng": 6.185906, "lat": 51.391651,"zoom": 12 },
      duration: "April 2024 - Present",
      description: [
        "Fully automatic processing of bell peppers from bulk to end product (Machine: PCR).",
        "Practical application of Deep Learning Models for vegetable recognition for classification and orientation.",
        "Automation of repetitive daily tasks for reduction of effort and gaining insight in data."
      ],
      skills: ["MVTec Halcon", "Deep Learning", "AI", "Python"],
    },
    {
      role: "R&D Software Engineer?",
      company: "?",
      location: "30 minutes from asten, Netherlands",
      coordinates: { "lng": 5.745876,
      "lat": 51.404094,
      "zoom": 8.5},
      duration: "When the time is right",
      description: ["Automation, AI, Software, Vision"
      ],
      skills: [],
    }
  ],
  education: [],
  projects: [
    {
      slug: "interactive-portfolio",
      title: "Interactive Portfolio",
      description: "A stunning, interactive web portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
      challenge: "The goal was to transform a standard, static resume into an engaging digital experience that stands out to recruiters and peers, highlighting my transition from Mechanical Engineering to Software Engineering. Furthermore, I try to work a lot with AI tools to get to know them and stay proficient with them.",
      solution: "I architected a completely custom, multi-page Next.js application leveraging React Server Components. I utilized Framer Motion to create complex, physics-based scroll animations and seamless page transitions. I also integrated Lenis for buttery-smooth scrolling, ensuring the high-performance animations felt natively fluid.",
      results: "The resulting portfolio achieves an Awwwards-tier level of interaction and aesthetic polish, serving as a highly effective digital calling card that perfectly encapsulates my technical capabilities and design sensibilities.",
      // Why: "",
      image: "/images/website.png", // Placeholder for main image
      gallery: [], // Placeholders for gallery images
      link: "https://jessebeuman.com",
      tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"]
    },
    {
      slug: "bell-pepper-sorter",
      title: "PepperCorer Robotics",
      description: "Machine vision system for fully automatic processing of bell peppers.",
      challenge: "Processing bell peppers from bulk to end-product manually is highly labor-intensive and prone to human error. The challenge was to engineer a system capable of real-time orientation without damaging the delicate produce.",
      solution: "I developed a comprehensive machine vision pipeline using C# and MVTec Halcon. This pipeline ingests high-speed camera data and applies specialized Deep Learning models to rapidly identify, classify, and determine the optimal orientation of each pepper as it moves down the processing line.",
      results: "The deployed PCR machine successfully automated the sorting process, drastically reducing manual labor costs of the final packaged product.",
      image: "/images/PCR.png",
      gallery: [],
      link: "https://sormac.com/nl-nl/machines/peppercorer-robotic-pcr",
      tech: ["Python", "MVTec Halcon", "Deep Learning", "Computer Vision"]
    }
    // {
    //   slug: "mobile-manipulator",
    //   title: "Mobile Manipulator",
    //   description: "Optimization algorithm for consecutive pick and place tasks for a mobile robotic manipulator.",
    //   challenge: "Mobile manipulators often waste significant time and energy due to inefficient path planning between consecutive pick and place operations on the factory floor.",
    //   solution: "During my Master's thesis at TU Eindhoven, I researched and developed an advanced optimization algorithm focused on the kinematics and dynamics of a mobile manipulator. The algorithm dynamically calculates the most energy-efficient and fastest trajectory for the robot arm and base simultaneously.",
    //   results: "The simulated implementation of the algorithm demonstrated a marked decrease in cycle times and energy consumption compared to standard sequential movement protocols.",
    //   image: "",
    //   gallery: ["", "", ""],
    //   link: "#",
    //   tech: ["Robotics", "Kinematics", "Optimization", "Control Systems"]
    // }
  ],
  skills: [
    "Python",
    "MVTec Halcon",
    "JavaScript",
    // "TypeScript",
    // "React",
    // "Next.js",
    // "Tailwind CSS",
    "Linux",
    "C#",
    "Computer Vision",
    "Robotics",
    "Deep Learning",
  ],
  detailedAbout: [
    "My journey began in Mechanical Engineering, where I developed a deep fascination for the physical world and how things move. During my Master's at TU Eindhoven, focusing on Dynamics and Control, I started writing complex algorithms to optimize mobile manipulators. It was here that I realized my true passion lay at the intersection of hardware and software.",
    "Transitioning into a Vision Engineer role, I applied my theoretical knowledge to build real-world, scalable robotics and vision solutions. Over the years, I've mastered Python, C++, and deep learning frameworks to create fully automatic systems that process and classify complex data in real-time.",
    "Today, I leverage this unique blend of mechanical intuition and advanced software engineering to solve challenging problems. I am constantly exploring new technologies and pushing the boundaries of what automated systems can achieve, all while maintaining a strong focus on clean architecture and beautiful user experiences."
  ],
  values: [
    { title: "Innovation", description: "Continuously pushing the boundaries of technology to find novel solutions to complex problems.", icon: "Lightbulb" },
    { title: "Precision", description: "Bringing a mechanical engineer's exactness into software architecture and computer vision models.", icon: "Target" },
    { title: "Efficiency", description: "Automating repetitive tasks and optimizing systems for maximum performance and reliability.", icon: "Zap" },
  ],
  interests: [
    { title: "Robotics & Automation", description: "Fascinated by the mechanics and algorithms that allow machines to perceive and interact with the world." },
    { title: "Artificial Intelligence", description: "Deeply interested in the practical applications of deep learning and computer vision." },
    { title: "UI/UX Design", description: "Gaining an interest in creating stunning, intuitive, and highly interactive digital experiences." }
  ],
  personalInterests: [
    // { title: "Photography", description: "Capturing moments and exploring visual storytelling through a camera lens.", image: "", gallery: [] },
    { title: "Hiking & Outdoors", description: "Disconnecting from screens and spending weekends exploring trails and nature.", image: "/images/hiking.jpeg", gallery: [] },
    { title: "Cycling", description: "Clearing my mind and stretching the legs.", image: "/images/fiets.jpeg", gallery: [] },
    { title: "Motorcycle rides", description: "For when a bike just isn't fast enough.", image: "/images/motor1.jpeg", gallery: ["/images/motor1.jpeg" , "/images/motor2.jpeg"] },
    // { title: "Culinary Experiments", description: "Trying out complex new recipes and perfecting the art of homemade pasta.", image: "", gallery: [] },
    // { title: "Reading", description: "Diving into sci-fi novels and staying up to date with the latest tech biographies.", image: "", gallery: [] }
  ]
};
