export const resumeData = {
  name: "Jesse Beuman",
  title: "Full-Stack Developer & UI/UX Enthusiast", // Updated title for the portfolio, as requested
  about: "I am a passionate engineer with experience in building scalable systems and creating stunning digital experiences.",
  contact: {
    email: "jesse@example.com",
    linkedin: "https://linkedin.com/in/jessebeuman",
    github: "https://github.com/jessebeuman",
  },
  experience: [
    {
      role: "R&D Vision Engineer",
      company: "[Company Name]",
      location: "Netherlands",
      duration: "April 2024 - Present",
      description: [
        "Fully automatic processing of bell peppers from bulk to end product (Machine: PCR).",
        "Practical application of Deep Learning Models for vegetable recognition for classification and orientation.",
        "Automation of repetitive daily tasks for reduction of effort and gaining insight in data."
      ],
      skills: ["MVTec Halcon", "Deep Learning", "AI", "Python"],
    },
    {
      role: "Prototype/Vision Engineer",
      company: "[Company Name]",
      location: "Netherlands",
      duration: "Oct 2020 - April 2024",
      description: [
        "Customer specific Vision and Robotics solutions.",
        "Defect detection, size determination, object localization, robot path planning, kinematics, adaptive robot pick and placing, advanced algorithms."
      ],
      skills: ["Python", "JavaScript", "Linux", "Robotics", "Project Planning"],
    },
    {
      role: "Collegerama Operator",
      company: "TU Delft",
      location: "Delft, Netherlands",
      duration: "Oct 2013 - July 2016",
      description: [
        "Recording the lectures of a large variety of Bachelor and Master courses.",
        "Assisting the lecturers and supervising the lecture rooms."
      ],
      skills: ["Video Production", "Technical Support"],
    }
  ],
  education: [
    {
      degree: "Master of Science: Mechanical Engineering – Dynamics and Control",
      school: "TU Eindhoven",
      location: "Eindhoven, Netherlands",
      duration: "Sep 2016 - Oct 2020",
      description: "Focus on Dynamics, Control, Manufacturing Engineering, Optimization, Kinematics. Master Thesis: Optimization of a mobile manipulator for consecutive pick and place tasks."
    },
    {
      degree: "Bachelor of Science: Mechanical Engineering",
      school: "TU Delft",
      location: "Delft, Netherlands",
      duration: "Sep 2012 - July 2016",
      description: "Bachelor Thesis: The performance of clingfish inspired suction cups on rough surfaces."
    }
  ],
  projects: [
    {
      slug: "interactive-portfolio",
      title: "Interactive Portfolio",
      description: "A stunning, interactive web portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
      challenge: "The goal was to transform a standard, static resume into an engaging digital experience that stands out to recruiters and peers, highlighting my transition from Mechanical Engineering to Software Engineering.",
      solution: "I architected a completely custom, multi-page Next.js application leveraging React Server Components. I utilized Framer Motion to create complex, physics-based scroll animations and seamless page transitions. I also integrated Lenis for buttery-smooth scrolling, ensuring the high-performance animations felt natively fluid.",
      results: "The resulting portfolio achieves an Awwwards-tier level of interaction and aesthetic polish, serving as a highly effective digital calling card that perfectly encapsulates my technical capabilities and design sensibilities.",
      image: "", // Placeholder for main image
      gallery: ["", "", ""], // Placeholders for gallery images
      link: "https://github.com/jessebeuman",
      tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"]
    },
    {
      slug: "bell-pepper-sorter",
      title: "Bell Pepper Sorter",
      description: "Machine vision system for fully automatic processing and classification of bell peppers.",
      challenge: "Processing bell peppers from bulk to end-product manually is highly labor-intensive and prone to human error. The challenge was to engineer a system capable of real-time classification and orientation without damaging the delicate produce.",
      solution: "I developed a comprehensive machine vision pipeline using Python and MVTec Halcon. This pipeline ingests high-speed camera data and applies specialized Deep Learning models to rapidly identify, classify, and determine the optimal orientation of each pepper as it moves down the processing line.",
      results: "The deployed PCR machine successfully automated the sorting process, drastically reducing manual labor costs and significantly increasing the throughput and consistency of the final packaged product.",
      image: "",
      gallery: ["", "", ""],
      link: "#",
      tech: ["Python", "MVTec Halcon", "Deep Learning", "Computer Vision"]
    },
    {
      slug: "mobile-manipulator",
      title: "Mobile Manipulator",
      description: "Optimization algorithm for consecutive pick and place tasks for a mobile robotic manipulator.",
      challenge: "Mobile manipulators often waste significant time and energy due to inefficient path planning between consecutive pick and place operations on the factory floor.",
      solution: "During my Master's thesis at TU Eindhoven, I researched and developed an advanced optimization algorithm focused on the kinematics and dynamics of a mobile manipulator. The algorithm dynamically calculates the most energy-efficient and fastest trajectory for the robot arm and base simultaneously.",
      results: "The simulated implementation of the algorithm demonstrated a marked decrease in cycle times and energy consumption compared to standard sequential movement protocols.",
      image: "",
      gallery: ["", "", ""],
      link: "#",
      tech: ["Robotics", "Kinematics", "Optimization", "Control Systems"]
    }
  ],
  skills: [
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Linux",
    "C++",
    "Computer Vision",
    "Robotics",
    "Deep Learning"
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
    { title: "UI/UX Design", description: "Passionate about creating stunning, intuitive, and highly interactive digital experiences." }
  ]
};
