// ====================
// Portfolio Data File
// ====================
// This file contains all portfolio data that can be edited
// Update this file to change your portfolio content

// For projects
image: "https://via.placeholder.com/400x300/6366f1/ffffff?text=SmartStudentAI";

// For certificates
image: "https://via.placeholder.com/300x200/6366f1/ffffff?text=Certificate";

// For profile
profileImage: "https://via.placeholder.com/400x400/6366f1/ffffff?text=Profile";


const portfolioData = {
    // Personal Information
    profile: {
        name: "Andiswa Lwazilwethu Mseleku",
        title: "Information Systems Student | Software Developer | Problem Solver",
        bio: "I am a passionate Information Systems student with a strong interest in software development, technology, and problem-solving. My journey in technology began with a curiosity about how things work, which gradually evolved into a deep passion for creating innovative and practical solutions. I enjoy building applications, exploring new technologies, and continuously developing my technical skills. With experience in web development, programming, databases, and cloud technologies, I am motivated to use technology to solve real-world problems and create meaningful digital experiences.",
        location: "Durban, South Africa, Adams Mission",
        email: "mselekuandiswa9@gmail.com",
        phone: "+27 67 288 0699",
        profileImage: "assets/images/profile/profile.jpeg",
        cvPath: "assets/documents/cv.pdf",
        roles: [
            "Software Developer",
            "Information Systems Student",
            "Web Developer",
            "Problem Solver",
            "Technology Enthusiast"
        ],
        stats: [
            { value: 2, label: "Projects" },
            { value: 20, label: "Technologies" },
            { value: 6, label: "Certificates" },
            { value: 3, label: "Years Learning" }
        ]
    },
    
    // Social Links
    social: {
        github: "https://github.com/AndiswaMseleku",
        linkedin: "https://www.linkedin.com/in/andiswa-mseleku",
        twitter: "https://x.com/lwazi_lwetoo?s=11",
        instagram: "https://instagram.com/lwazilwethu_mseleku?igsi=ajB3cDhnd3AyenBq$ut-m_source=qr",
    },
    
    // Skills
    skills: [
    {
        id: "frontend",
        category: "Frontend Development",
        icon: "fas fa-laptop-code",
        skills: [
            { name: "HTML", level: 90 },
            { name: "CSS", level: 85 },
            { name: "JavaScript", level: 80 },
            { name: "Bootstrap", level: 85 },
            { name: "Responsive Web Design", level: 85 },
            { name: "Web Development", level: 85 }
        ]
    },

    {
        id: "programming",
        category: "Programming Languages",
        icon: "fas fa-code",
        skills: [
            { name: "C#", level: 85 },
            { name: "JavaScript", level: 80 },
            { name: "Python", level: 70 },
            { name: ".NET", level: 80 },
            { name: "ASP.NET", level: 75 }
        ]
    },

    {
        id: "database",
        category: "Database Knowledge",
        icon: "fas fa-database",
        skills: [
            { name: "SQL", level: 80 },
            { name: "SQL Server", level: 75 },
            { name: "Entity Framework", level: 70 },
            { name: "Database Management", level: 75 },
            { name: "Database Design", level: 70 }
        ]
    },

    {
        id: "cloud",
        category: "Cloud & Development Tools",
        icon: "fas fa-cloud",
        skills: [
            { name: "Microsoft Azure", level: 65 },
            { name: "Git", level: 80 },
            { name: "GitHub", level: 85 },
            { name: "Visual Studio", level: 85 },
            { name: "VS Code", level: 90 }
        ]
    },

    {
        id: "operating-systems",
        category: "Operating Systems & Linux",
        icon: "fas fa-terminal",
        skills: [
            { name: "Linux Fundamentals", level: 65 },
            { name: "Linux Command Line", level: 60 },
            { name: "File System Management", level: 65 },
            { name: "Operating System Fundamentals", level: 70 }
        ]
    },

    {
        id: "mathematical",
        category: "Mathematical & Technical Computing",
        icon: "fas fa-calculator",
        skills: [
            { name: "MATLAB", level: 65 },
            { name: "MATLAB Fundamentals", level: 65 },
            { name: "Technical Computing", level: 65 }
        ]
    },

    {
        id: "office",
        category: "Computer Applications",
        icon: "fas fa-desktop",
        skills: [
            { name: "Microsoft Word", level: 90 },
            { name: "Microsoft Excel", level: 85 },
            { name: "Microsoft PowerPoint", level: 90 },
            { name: "Microsoft Access", level: 75 },
            { name: "Computer Literacy", level: 90 },
            { name: "File Management", level: 85 }
        ]
    },

    {
        id: "problem-solving",
        category: "Professional & Technical Skills",
        icon: "fas fa-brain",
        skills: [
            { name: "Problem Solving", level: 85 },
            { name: "Debugging", level: 80 },
            { name: "Software Development", level: 80 },
            { name: "Algorithmic Thinking", level: 75 },
            { name: "Technical Research", level: 80 }
        ]
    }
],
    
    // Projects
    projects: [
    {
        id: "studentmanagementsystem",
        title: "Student Management System",
        description: "A web-based student management system designed to help manage student information and simplify common administrative tasks.",
        longDescription: "The Student Management System is a web application developed to organize and manage student-related information in one centralized platform. The project allowed me to apply my knowledge of software development, database management, user interface design, and web application development to create a practical solution.",
        category: "Web Development",
        image: "assets/images/projects/studentmanagementsystem.png",
        images: [
            "assets/images/projects/studentmanagementsystem/Students.png",
            "assets/images/projects/studentmanagementsystem/Screenshot (130).png"
        ],
        technologies: [
            "C#",
            ".NET",
            "ASP.NET",
            "SQL Server",
            "Entity Framework",
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap"
        ],
        demo: "https://stusentmanagementsystem-f6gxcsgxhgetefgz.southafricanorth-01.azurewebsites.net",
        features: [
            "Student information management",
            "Student record management",
            "Database integration",
            "Responsive web interface",
            "CRUD operations",
            "Organized data management"
        ],
        problem: "Managing student information manually can be time-consuming and difficult to keep organized as the amount of information grows.",
        solution: "Developed a centralized web application that makes it easier to store, manage, update, and access student information.",
        challenges: "Understanding how different parts of a web application work together, including the user interface, backend logic, database, and data access layer.",
        lessons: "Strengthened my skills in ASP.NET development, C#, SQL Server, Entity Framework, database design, and building full-stack web applications."
    },

    {
        id: "taskmanager",
        title: "Task Manager",
        description: "A web-based task management application designed to help users organize, manage, and keep track of their tasks.",
        longDescription: "The Task Manager is a web application that provides a simple way to create, manage, update, and track tasks. This project helped me improve my understanding of application logic, database operations, user interface development, and creating applications that solve everyday problems.",
        category: "Web Development",
        image: "assets/images/projects/taskmanager.png",
        images: [
            "assets/images/projects/taskmanager/Screenshot (126).png",
            "assets/images/projects/taskmanager/Screenshot (127).png"
        ],
        technologies: [
            "C#",
            ".NET",
            "ASP.NET",
            "SQL Server",
            "Entity Framework",
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap"
        ],
        demo: "https://taskmanager-h4g9bwheg4c0e3dn.southafricanorth-01.azurewebsites.net",
        features: [
            "Create and manage tasks",
            "Update task information",
            "Delete completed or unwanted tasks",
            "Task status management",
            "Database integration",
            "Responsive user interface"
        ],
        problem: "Keeping track of multiple tasks can become difficult without a simple and organized system.",
        solution: "Built a task management application that allows users to organize their tasks and keep track of their progress in one place.",
        challenges: "Implementing the complete flow of creating, displaying, updating, and deleting data while keeping the application easy to use.",
        lessons: "Improved my understanding of CRUD operations, database connectivity, ASP.NET development, C#, Entity Framework, and responsive web design."
    }
],
    
    // Education
    education: [
    {
        id: "education1",
        institution: "Durban University of Technology (DUT)",
        degree: "Diploma in Information and Communication Technology in Application Development (DICTAD) - Information Systems",
        startDate: "2023",
        endDate: "Present",
        description: "Studying Information Systems with a focus on software development, database management, web development, systems analysis, and information technology. Throughout my studies, I have gained practical experience developing applications using C#, ASP.NET, .NET, SQL Server, HTML, CSS, and JavaScript, while working on individual and group-based projects.",
    },

    {
        id: "education2",
        institution: "Sibusisiwe Comprehensive High School",
        degree: "National Senior Certificate",
        startDate: "2019",
        endDate: "2023",
        description: "Completed high school with Computer Applications Technology (CAT), developing a strong foundation in computer literacy, Microsoft Office applications, databases, spreadsheets, presentations, and general information technology.",
    }
],
    
    // Experience
    experience: [
    {
        id: "experience1",
        company: "University Group Projects",
        position: "Software Development Team Member",
        startDate: "2024",
        endDate: "Present",
        description: "Collaborated with other students on academic software development projects, contributing to the planning, development, testing, and improvement of web applications. Worked as part of a team to solve technical problems and deliver functional solutions within project requirements.",
        achievements: [
            "Collaborated with team members to plan and develop software solutions",
            "Contributed to the development of web applications using C#, ASP.NET, .NET, HTML, CSS, JavaScript, and SQL Server",
            "Worked with databases and implemented CRUD functionality",
            "Participated in troubleshooting, debugging, and testing applications",
            "Used Git and GitHub for source code management and collaboration",
            "Improved teamwork, communication, problem-solving, and project management skills"
        ],
        logo: "assets/images/experience/university.jpg"
    },

    {
        id: "experience2",
        company: "Freelance Projects",
        position: "Freelance Web Developer",
        startDate: "2025",
        endDate: "Present",
        description: "Developing web applications and websites for personal projects and freelance opportunities. Responsible for understanding requirements, designing solutions, developing applications, testing functionality, and deploying completed projects.",
        achievements: [
            "Developed and deployed web applications using ASP.NET, C#, HTML, CSS, JavaScript, and SQL Server",
            "Built responsive and user-friendly web interfaces",
            "Designed and integrated databases for web applications",
            "Worked through technical challenges independently and researched solutions when needed",
            "Deployed web applications using Microsoft Azure",
            "Managed projects from initial concept through development and deployment"
        ],
        logo: "assets/images/experience/freelance.jpg"
    },

    {
        id: "experience3",
        company: "Personal Software Projects",
        position: "Software Developer",
        startDate: "2025",
        endDate: "Present",
        description: "Developing personal software projects to strengthen practical programming and software development skills. These projects provide hands-on experience in building, testing, deploying, and improving real-world applications.",
        achievements: [
            "Developed a Student Management System and deployed it to Microsoft Azure",
            "Developed and deployed a Task Manager web application",
            "Applied object-oriented programming principles using C#",
            "Worked with ASP.NET, .NET, Entity Framework, and SQL Server",
            "Practiced database design, CRUD operations, debugging, and application testing",
            "Continuously explored new technologies and improved existing projects"
        ],
        logo: "assets/images/experience/projects.jpg"
    }
],
    
    // Certifications
    certifications: [
        {
            id: "cert1",
            name: "Partner: NDG Linux Unhatched",
            organization: " Cisco Networking Academy",
            date: "20 May 2023",
            image: "assets/images/certificates/CiscoLinux_certificate.png",
            credentialUrl: "https://www.netacad.com/certificates/?issuanceId=d27ec72b-eb8e-4380-bceb-5b52ad501213"
        },
        {
            id: "cert2",
            name: "MATLAB Onramp",
            organization: "MathWorks",
            date: "03 May 2026",
            image: "assets/images/certificates/MathWork_certificate_page-0001.jpg",
            credentialUrl: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=d46f86f2-22f9-4cf5-a264-ba18b6de5349&"
        },
        {
            id: "cert3",
            name: "Introduction to C# Programming",
            organization: "Sololearn",
            date: "06 June 2023",
            image: "assets/images/certificates/IntroductionCsharp.png",
            credentialUrl: "https://www.sololearn.com/certificates/CC-JTG8AT1D"
        },
        {
            id: "cert4",
            name: "Introduction to Javascript Programming",
            organization: "Sololearn",
            date: "12 July 2023",
            image: "assets/images/certificates/IntroductionJS.png",
            credentialUrl: "https://www.sololearn.com/certificates/CC-XGE5SXNX"
        },
        {
            id: "cert5",
            name: "Introduction to Python Programming",
            organization: "Sololearn",
            date: "03 December 2023",
            image: "assets/images/certificates/IntroductionPython.png",
            credentialUrl: "https://www.sololearn.com/certificates/CC-CBTMXDEO"
        },
        {
            id: "cert6",
            name: "Web Development Fundamentals",
            organization: "Sololearn",
            date: "11 December 2024",
            image: "assets/images/certificates/WebDevelopment_certificate.png",
            credentialUrl: "https://www.sololearn.com/certificates/CC-D5OJJEYN"
        }
    ],
    
    // Contact
    contact: {
        email: "mslekuandiswa9@gmail.com",
        phone: "+27 76 688 0699",
        location: "Durban, South Africa, Adams Mission",
        formEndpoint: "https://formspree.io/f/xgaewgbo"
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
