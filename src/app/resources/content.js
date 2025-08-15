import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Muhammad',
    lastName:  'Sani',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Engineer',
    avatar:    '/images/avatar.png',
    location:  'Africa/Lagos',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Hausa']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/saneeitas',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/ln/msibrahim',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:muhdsanee87@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Co-Founder and Technical Visionary</>,
    subline: <>I'm Muhammad, a software engineer, Co-Founder & CTO at <InlineCode>Northino</InlineCode>,<br/>Passionate about building scalable solutions, leading teams, and leveraging AI to shape the future of technology.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Muhammad is a skilled software engineer with extensive experience in backend development, AI-driven solutions, and system design. He is passionate in creating scalable solutions</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Northino',
                timeframe: '2022 - Present',
                role: 'Co-Founder & CTO',
                achievements: [
                    <>Co-founded Northino, driving strategic growth and technological innovation.</>,
                    <>Oversaw the alignment of product development with business objectives, ensuring scalability and security of the infrastructure.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    // {
                    //     src: '/images/projects/project-01/cover-01.jpg',
                    //     alt: 'Once UI Project',
                    //     width: 16,
                    //     height: 9
                    // }
                ]
            },
            {
                company: 'Northino',
                timeframe: '2023 - Present',
                role: 'Lead Software Engineer',
                achievements: [
                    <> Led the development of scalable and reliable software solutions, improving system performance and user satisfaction.</>,
                    <>Architected server-side solutions focused on high performance and security, ensuring robust application infrastructure.</>,
                    <>Collaborated with cross-functional teams to integrate new technologies seamlessly.</>
                ],
                images: [ ]
            },
            {
                company: 'Northino',
                timeframe: '2024 - Present',
                role: 'AI Software Engineer',
                achievements: [
                    <>Developed real-time language translation capabilities using the Google Translate API, enhancing user accessibility.</>,
                    <>Created voice recording, transcription, and translation functionalities to improve user interaction and engagement.</>,
                    <>Automated curriculum generation through the integration of Gemini AI, significantly streamlining educational content delivery.</>,
                    <>Fine-tuned and retrained NLLB models for translation, enhancing contextual accuracy.</>
                ],
                images: [ ]
            },
            {
                company: 'Pailot',
                timeframe: '2023 - Present',
                role: 'Backend Engineer',
                achievements: [
                    <>Developed backend solutions for decentralized logistics with Pi crypto payment integration.</>,
                    <>Optimized database connections and API endpoints, ensuring seamless operations.</>
                ],
                images: [ ]
            },
            {
                company: 'Ctrl F2',
                timeframe: '2024 - Present',
                role: 'Software Engineer',
                achievements: [
                    <>Lead the design, development, and maintenance of software applications, ensuring high quality and performance.</>,
                    <>Mentored junior developers, fostering a culture of continuous learning.</>,
                    <>Collaborated on cross-functional projects to deliver innovative software solutions.</>
                ],
                images: [ ]
            },
            {
                company: 'BookBay',
                timeframe: 'Feb 2024 - Oct 2024',
                role: 'Backend Engineer',
                achievements: [
                    <>Designed and maintained server-side logic to ensure platform responsiveness and security.</>,
                <>Collaborated with frontend developers to integrate backend functionality with the user interface.</>
                ],
                images: [ ]
            },
            {
                company: 'FlexiSaf Edusoft',
                timeframe: 'May 2024 - Aug 2024',
                role: 'Backend Development Intern',
                achievements: [
                    <>Gained hands-on experience in backend development using Java, Spring, and Flyway.</>,
                    <>Contributed to the development of scalable software solutions.</>
                ],
                images: [ ]
            },
            {
                company: 'BHC Designs',
                timeframe: '2016 - 2022',
                role: 'Founder & Lead Graphics Designer',
                achievements: [
                    <>Created visually appealing designs that unified the brand across multiple platforms.</>,
                <>Led a team of designers to deliver high-quality projects, enhancing client satisfaction.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Al-Qalam University, Katsina',
                description: <>Studied Software Engineering.</>,
            },
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'React, Next.js, CSS, SCSS, Material UI',
                description: <>Experienced in building dynamic, user-friendly interfaces with modern front-end technologies</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Node.js, Express.js, NestJS, Flask',
                description: <>Skilled in building fast and scalable server-side applications and APIs using modern backend technologies.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'MongoDb, PostgreSQL, MySQL, Redis',
                description: <>Proficient in managing and designing databases for storing and retrieving data efficiently. Skilled in both SQL and NoSQL database management systems for various application needs.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Git, Github, CI/CD',
                description: <>Experienced with using version control systems for code collaboration and management. Skilled in tracking and managing changes to code, collaborating with teams, and maintaining the integrity of software projects.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'AWS, Docker, GCP, Netlify, Render',
                description: <>Familiar with cloud technologies and containerization for deploying and scaling applications, ensuring consistency across environments and efficient management of infrastructure.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    },
    portfolio: {
        display: true, // set to false to hide this section
        title: 'Portfolio',
        projects: [
            {
                title: 'Northino Learning',
                image: '/images/portfolio/northino.png',
                url: 'https://learning.northino.com/'
            },
            {
                title: 'Northino Studio',
                image: '/images/portfolio/studio.png',
                url: 'https://studio.northino.com/'
            },
            {
                title: 'Ctrl F2',
                image: '/images/portfolio/ctrlf2.png',
                url: 'https://ctrlf2.com/'
            },
            {
                title: 'The Chop Nation',
                image: '/images/portfolio/chop-nation.png',
                url: 'http://thechopnation.com/'
            },
            {
                title: 'My Halal Hibachi',
                image: '/images/portfolio/hibachi.png',
                url: 'http://myhalalhibachi.com/'
            },
            {
                title: 'Rawad Salam',
                image: '/images/portfolio/assalam.png',
                url: 'https://rawadalsalam.com/'
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about tech and innovation...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };