import { Icons } from "@/components/icons";
import { Description } from "@radix-ui/react-dialog";
import { url } from "inspector";
import { HomeIcon, NotebookIcon, ThumbsDown, VideoIcon, FolderIcon } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Rahul Rathod",
  initials: "RR",
  url: "mailto:raaulc@outlook.com",
  location: "Leeds, UK",
  locationLink: "https://www.google.com/maps/place/Leeds,+UK",
  description:
    "Software Engineer | Java | Spring Boot | Kafka | Redis | High-Performance APIs | 14+ Years Of Tech Craftsmanship | Building Scalable Microservices.",
    summary: "Engineer with 14+ years of experience across mobile and backend systems, now focused on building scalable, high-performance backend services using Java, Spring Boot, Kafka, and Redis. Strong foundation in distributed systems, real-time processing, and end-to-end product delivery — with a passion for clean, maintainable code that powers great customer experiences.",
    avatarUrl: "/favicons/profile-pic.jpeg",
  skills: [
    "Java 8+",
    "Spring Boot",
    "Apache Kafka",
    "Redis",
    "Cassandra",
    "RabbitMQ",
    "Kubernetes",
    "Akka",
    "Microservices",
    "RESTful APIs",
    "GraphQL",
    "Docker",
    "AWS",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Event-Driven Architecture",
    "Message Queues",
    "Distributed Systems",
    "System Design",
    "Performance Optimization",
    "Unit Testing",
    "Integration Testing",
    "CI/CD",
    "Git",
    "JIRA",
    "Agile/Scrum"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/projects", icon: FolderIcon, label: "Projects" },
    { href: "/gadgets", icon: Icons.shop, label: "Gadgets" },
  ],
  contact: {
    email: "raaulc@outlook.com",
    tel: "+44-7424399000",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/raaulc",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/raaulc/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:raaulc@outlook.com",
        icon: Icons.email,
        navbar: false,
      },
      downloadCV: {
        name: "Download CV",
        url: "https://drive.google.com/file/d/1xHBbQxeqc1hmQMfJLr99C3RmA6PeR9BX/view?usp=sharing",
        icon: Icons.files,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Sky Betting & Gaming",
      href: "https://www.skybettingandgaming.com",
      badges: [],
      location: "Leeds, UK",
      title: "Backend Engineer - Discovery & Bet Lifecycle",
      logoUrl: "/atomic.png",
      start: "2023",
      end: "Present",
      description:
        "Building high-performance APIs for sports betting platform handling millions of transactions. Developing microservices using Java 8+, Spring Boot, and Kafka for real-time event processing. Implementing distributed caching with Redis and optimizing database queries with Cassandra. Collaborating with cross-functional teams to deliver scalable solutions for live betting odds and personalization services.",
    },
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "Dharmsinh Desai University",
      href: "https://www.ddu.ac.in/",
      degree: "Bachelor of Engineering: Electronics and Communication",
      logoUrl: "",
      start: "05/2005",
      end: "05/2009",
      location: "Gujarat, India"
    }
  ],
  showProjects: false, // Set to true to show all projects, false to show only coming soon
  projects: [
    {
      title: "Coming Soon - More Backend Projects",
      href: "#",
      dates: "2024",
      active: false,
      description:
        "Working on additional backend engineering projects showcasing distributed systems, high-performance APIs, and scalable microservices architecture. More projects will be added soon featuring advanced Java patterns, cloud-native deployments, and real-world system design implementations.",
      technologies: [
        "Java 8+",
        "Spring Boot",
        "Microservices",
        "Cloud Native",
        "System Design",
        "Distributed Systems"
      ],
      links: [
        {
          type: "Coming Soon",
          href: "#",
          icon: <Icons.github className="size-3" />,
        }
      ],
      features: [
        "Advanced microservices patterns and best practices",
        "Cloud-native deployment strategies",
        "System design and scalability implementations",
        "Real-world backend engineering solutions"
      ],
      image: "",
      video: "",
    }
  ],
  blogs: [
    {
      title: "Building High-Performance APIs with Spring Boot",
      href: "https://medium.com/@raaulc/high-performance-spring-boot-apis",
      date: "2024-06-01",
      summary: "A comprehensive guide to optimizing Spring Boot applications for high-concurrency scenarios, including caching strategies and database optimization."
    },
    {
      title: "Event-Driven Architecture with Apache Kafka",
      href: "https://medium.com/@raaulc/event-driven-kafka-architecture",
      date: "2024-05-15",
      summary: "How to design and implement scalable event-driven systems using Apache Kafka for real-time data processing and microservices communication."
    },
    {
      title: "Microservices Testing Strategies",
      href: "https://medium.com/@raaulc/microservices-testing-strategies",
      date: "2024-04-20",
      summary: "Best practices for testing microservices including unit tests, integration tests, and contract testing with Pact."
    },
    {
      title: "Redis Caching Patterns for Backend Services",
      href: "https://medium.com/@raaulc/redis-caching-patterns",
      date: "2024-03-30",
      summary: "Advanced Redis caching strategies to improve API performance and reduce database load in distributed systems."
    },
    {
      title: "System Design for High-Scale Backend Services",
      href: "https://medium.com/@raaulc/system-design-backend-services",
      date: "2024-08-20",
      summary: "Comprehensive guide to designing scalable backend systems with practical patterns for high-concurrency applications."
    }
  ],
  likesBuilding: "I like building scalable backend systems, high-performance APIs, and distributed services that handle millions of transactions.",
  contactDetails: {
    email: "raaulc@outlook.com",
    tel: "+44-7424939000"
  },
  youtube: [
    {
      title: "Microservices Architecture",
      description: "Building Scalable Backend Systems",
      thumbnail: "/placeholder-product.jpg",
      url: "https://www.youtube.com/watch?v=K3j1FxQu1Js&list=PLb1Ovsa8zsbUMrH0stNeGKAG5fPFL5MbM",
      date: "2024-01-01"
    }
  ],
} as const;
