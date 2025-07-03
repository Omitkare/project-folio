import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  FileText,
  Instagram,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Sidebar from "./Sidebar";
import ContentSection from "./ContentSection";
import ProjectCard from "./ProjectCard";

const Home = () => {
  // Project data
  const projects = [
    {
      id: 1,
      title: "Smart Pricing & Retention for Airbnb and Telecom",
      timeline: "Apr 2025 – Jun 2025",
      description:
        "Built regression models to predict Airbnb prices using data cleaning, feature engineering, and evaluation with Scikit-learn. Also created churn prediction models for telecom using classification algorithms (Logistic Regression, Decision Tree, Random Forest).",
      tags: [
        "Python",
        "Regression",
        "Classification",
        "Pandas",
        "Scikit-learn",
      ],
      category: "Python",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    },
    {
      id: 2,
      title: "Electric Vehicles Market Size Analysis",
      timeline: "Apr 2025",
      description:
        "Performed data filtering, grouping, and visualization to analyze the EV market. Built a Python recommendation system for users based on range, battery, and budget. Used hypothesis testing to compare Tesla and Audi.",
      tags: [
        "Python",
        "Data Analysis",
        "Recommender System",
        "Hypothesis Testing",
      ],
      category: "Python",
      image:
        "https://images.unsplash.com/photo-1593941707882-a56bba8ddb3a?w=800&q=80",
    },
    {
      id: 3,
      title: "Airline Performance Analysis using Power BI",
      timeline: "Jan 2025 – Feb 2025",
      description:
        "Transformed airline data using Power Query, built dashboards using DAX, and created visuals for bookings, ticket status, and flight KPIs. Implemented slicers and drill-throughs for interactive reporting.",
      tags: ["Power BI", "Power Query", "DAX", "Dashboarding"],
      category: "Power BI",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    },
    {
      id: 4,
      title: "Legal Document Classification (J.P. Morgan)",
      timeline: "Dec 2024",
      description:
        "Automated classification of credit contracts using ML models on 150+ attributes. Used CRISP-DM methodology to streamline classification and reduce document processing time.",
      tags: ["Machine Learning", "CRISP-DM", "Classification", "Automation"],
      category: "Python",
      image:
        "https://images.unsplash.com/photo-1607703703674-df96af81dffa?w=800&q=80",
    },
    {
      id: 5,
      title: "Text Intelligence – IMDb & News Classification",
      timeline: "Jun 2025",
      description:
        "Performed sentiment analysis on IMDb reviews using TF-IDF and Word2Vec with classification models. Also scraped news articles and built a topic classification model for sports, politics, and tech.",
      tags: [
        "NLP",
        "Sentiment Analysis",
        "Text Classification",
        "Web Scraping",
      ],
      category: "Python",
      image:
        "https://images.unsplash.com/photo-1543652437-9059e4cf3efa?w=800&q=80",
    },
    {
      id: 6,
      title: "Walmart Retail Insights with SQL",
      timeline: "Feb 2025 – Mar 2025",
      description:
        "Analyzed sales data using advanced MySQL queries to identify high-performing branches, customer segments, and payment trends. Delivered insights for decision-making through SQL-driven reporting.",
      tags: ["MySQL", "SQL Analytics", "Retail", "Customer Segmentation"],
      category: "SQL",
      image:
        "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=800&q=80",
    },
    {
      id: 7,
      title: "KPMG Excel Data Analysis",
      timeline: "Dec 2024 – Jan 2025",
      description:
        "Cleaned, analyzed, and visualized customer and transaction data using Excel. Identified key customer segments, purchase trends, and calculated CLV to support business insights.",
      tags: ["MS Excel", "CLV", "Customer Segmentation", "Data Cleaning"],
      category: "Excel",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
  ];

  // Certifications data
  const certifications = [
    {
      id: 1,
      title: "Deep Learning Mastery: Data-Intensive",
      date: "Jun 2025",
      provider: "Internshala Trainings, Virtual",
      link: "https://trainings.internshala.com/certificate/deep-learning",
    },
    {
      id: 2,
      title: "Data Driven- Machine Learning",
      date: "Apr 2025 - May 2025",
      provider: "Internshala Trainings, Virtual",
      link: "https://trainings.internshala.com/certificate/machine-learning",
    },
    {
      id: 3,
      title: "SQL For Data Analysis And Insights",
      date: "Feb 2025 - Mar 2025",
      provider: "Internshala Trainings, Virtual",
      link: "https://trainings.internshala.com/certificate/sql-analysis",
    },
    {
      id: 4,
      title: "Data Management And Analysis With MS Excel",
      date: "Dec 2024 - Jan 2025",
      provider: "Internshala Trainings, Virtual",
      link: "https://trainings.internshala.com/certificate/excel-analysis",
    },
    {
      id: 5,
      title: "NLP Essentials: Applications To Real-World Problems",
      date: "Jun 2025",
      provider: "Internshala Trainings, Virtual",
      link: "https://trainings.internshala.com/certificate/nlp-essentials",
    },
    {
      id: 6,
      title: "Python Data Preparation & Analysis",
      date: "Mar 2025 - Apr 2025",
      provider: "Internshala Trainings, Virtual",
      link: "https://trainings.internshala.com/certificate/python-data",
    },
    {
      id: 7,
      title: "Data Visualization With Power BI",
      date: "Jan 2025 - Feb 2025",
      provider: "Internshala Trainings, Virtual",
      link: "https://trainings.internshala.com/certificate/power-bi",
    },
    {
      id: 8,
      title: "Introduction To Data Analytics",
      date: "Dec 2024",
      provider: "Internshala Trainings, Virtual",
      link: "https://trainings.internshala.com/certificate/data-analytics",
    },
    {
      id: 9,
      title: "Python Programming",
      date: "Jun 2023 - Aug 2023",
      provider: "Naresh IT, Hyderabad",
      link: "https://nareshit.com/certificate/python-programming",
    },
  ];

  return (
    <div className="bg-[#0a192f] text-white min-h-screen md:flex">
      {/* Sidebar - Hidden on mobile, fixed on desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-12 md:ml-[350px] overflow-y-auto">
        {/* Mobile Header - Only visible on mobile */}
        <div className="md:hidden mb-8 text-center">
          <h1 className="text-2xl font-bold text-[#64ffda] mb-2">
            Omajay Itkare
          </h1>
          <p className="text-lg text-[#ccd6f6]">
            Aspiring Data Scientist & Engineer
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://github.com/"
              className="text-[#8892b0] hover:text-[#64ffda]"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/omajay-itkare/"
              className="text-[#8892b0] hover:text-[#64ffda]"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:omitkare14@gmail.com"
              className="text-[#8892b0] hover:text-[#64ffda]"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~019acec0d7841acdd8?mp_source=share"
              className="text-[#8892b0] hover:text-[#64ffda]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.002-2.439-5.453-5.439-5.453z" />
              </svg>
            </a>
            <a
              href="https://x.com/Omajay_itkare"
              className="text-[#8892b0] hover:text-[#64ffda]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-bold text-[#64ffda] mb-4">
            Hi, I'm Omajay.
          </h1>
          <h2 className="text-3xl font-semibold text-[#ccd6f6] mb-6">
            I explore data, build models, and generate insights.
          </h2>
          <p className="text-lg text-[#8892b0] max-w-2xl mb-8">
            I'm a final-year engineering student passionate about data science
            and solving real-world problems using data-driven solutions. I
            specialize in tools like Python, Excel, Power BI, and SQL.
          </p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-transparent border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 transition-all duration-300 text-lg px-8 py-6">
                <FileText className="mr-2 h-5 w-5" /> View Résumé
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#112240] border-[#233554]">
              <DropdownMenuItem asChild>
                <a
                  href="/uploads/OMAJAYITKARE_I.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ccd6f6] hover:text-[#64ffda] cursor-pointer"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Resume (Detailed)
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="/uploads/OMAJAYITKARE_I.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ccd6f6] hover:text-[#64ffda] cursor-pointer"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Resume (Compact)
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </motion.div>

        {/* About Section */}
        <ContentSection id="about" title="About Me">
          <div className="space-y-4 text-[#8892b0]">
            <p>
              I'm a final-year engineering student passionate about data science
              and solving real-world problems using data-driven solutions. I
              specialize in tools like Python, Excel, Power BI, and SQL, and I
              enjoy building predictive models, performing data analysis, and
              visualizing insights.
            </p>
            <p>
              I've completed hands-on projects involving machine learning, data
              visualization, business analytics, and more. I'm actively seeking
              internship or full-time opportunities in data science, analytics,
              and related roles where I can apply my technical skills and grow
              as a professional.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[#ccd6f6] mb-4">
                Interests
              </h3>
              <p>
                When I'm not coding, I enjoy running, learning new tech tools,
                and exploring AI trends. I also love reading and working on
                personal development.
              </p>
            </div>
          </div>
        </ContentSection>

        {/* Skills Section */}
        <ContentSection id="skills" title="Skills">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#ccd6f6] mb-4">
                Languages & Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "Pandas",
                  "NumPy",
                  "Scikit-learn",
                  "Matplotlib",
                  "Seaborn",
                ].map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-[#112240] text-[#64ffda] hover:bg-[#112240]/80 px-3 py-1 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#ccd6f6] mb-4">
                Machine Learning
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Regression", "Classification", "Clustering", "NLP"].map(
                  (skill) => (
                    <Badge
                      key={skill}
                      className="bg-[#112240] text-[#64ffda] hover:bg-[#112240]/80 px-3 py-1 text-sm"
                    >
                      {skill}
                    </Badge>
                  ),
                )}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#ccd6f6] mb-4">
                Data Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {["MS Excel", "Power BI", "MySQL"].map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-[#112240] text-[#64ffda] hover:bg-[#112240]/80 px-3 py-1 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#ccd6f6] mb-4">
                Platforms & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Jupyter Notebook",
                  "Git",
                  "Google Colab",
                  "Power BI Service",
                  "Excel Power Query",
                ].map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-[#112240] text-[#64ffda] hover:bg-[#112240]/80 px-3 py-1 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#ccd6f6] mb-4">
                Other Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Exploratory Data Analysis (EDA)",
                  "Data Cleaning",
                  "Feature Engineering",
                  "Hypothesis Testing",
                ].map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-[#112240] text-[#64ffda] hover:bg-[#112240]/80 px-3 py-1 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </ContentSection>

        {/* Projects Section */}
        <ContentSection id="projects" title="Projects">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-[#112240] mb-8">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-[#233554] data-[state=active]:text-[#64ffda]"
              >
                All Projects
              </TabsTrigger>
              <TabsTrigger
                value="Python"
                className="data-[state=active]:bg-[#233554] data-[state=active]:text-[#64ffda]"
              >
                Python
              </TabsTrigger>
              <TabsTrigger
                value="Power BI"
                className="data-[state=active]:bg-[#233554] data-[state=active]:text-[#64ffda]"
              >
                Power BI
              </TabsTrigger>
              <TabsTrigger
                value="Excel"
                className="data-[state=active]:bg-[#233554] data-[state=active]:text-[#64ffda]"
              >
                Excel
              </TabsTrigger>
              <TabsTrigger
                value="SQL"
                className="data-[state=active]:bg-[#233554] data-[state=active]:text-[#64ffda]"
              >
                SQL
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    timeline={project.timeline}
                    description={project.description}
                    tags={project.tags}
                    image={project.image}
                  />
                ))}
              </div>
            </TabsContent>

            {["Python", "Power BI", "Excel", "SQL"].map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects
                    .filter((project) => project.category === category)
                    .map((project) => (
                      <ProjectCard
                        key={project.id}
                        title={project.title}
                        timeline={project.timeline}
                        description={project.description}
                        tags={project.tags}
                        image={project.image}
                      />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </ContentSection>

        {/* Education Section */}
        <ContentSection id="education" title="Education">
          <Card className="bg-[#112240] border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-[#ccd6f6]">
                B.Tech in Electronics & Telecommunication Engineering
              </CardTitle>
              <CardDescription className="text-[#8892b0]">
                Shri Guru Gobind Singhji Institute of Engineering and Technology
                (SGGSIET), Nanded
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[#8892b0]">Graduating in 2025</p>
              <div className="mt-4">
                <p className="text-[#8892b0]">
                  Coursework in Data Analysis, Signal Processing
                </p>
                <p className="text-[#8892b0]">
                  Tools used: MATLAB, Python, SQL
                </p>
              </div>
            </CardContent>
          </Card>
        </ContentSection>

        {/* Certifications Section */}
        <ContentSection id="certifications" title="Certifications & Trainings">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <Card
                key={cert.id}
                className="bg-[#112240] border-none shadow-lg hover:border-[#64ffda]/50 transition-all duration-300 cursor-pointer"
                onClick={() => window.open(cert.link, "_blank")}
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-[#ccd6f6] text-lg hover:text-[#64ffda] transition-colors">
                      {cert.title}
                    </CardTitle>
                    <ExternalLink className="h-4 w-4 text-[#8892b0] hover:text-[#64ffda] transition-colors" />
                  </div>
                  <CardDescription className="text-[#64ffda]">
                    {cert.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#8892b0]">{cert.provider}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ContentSection>

        {/* Contact Section */}
        <ContentSection id="contact" title="Contact">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-[#8892b0] mb-8">
              Let's connect! I'm open to internships and full-time opportunities
              in data science and analytics.
            </p>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-transparent border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 transition-all duration-300 text-lg px-8 py-6"
                  asChild
                >
                  <a href="mailto:omitkare14@gmail.com">
                    <Mail className="mr-2 h-5 w-5" /> omitkare14@gmail.com
                  </a>
                </Button>
                <Button
                  className="bg-transparent border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 transition-all duration-300 text-lg px-8 py-6"
                  asChild
                >
                  <a href="tel:+918010141337">
                    <ExternalLink className="mr-2 h-5 w-5" /> +91 8010141337
                  </a>
                </Button>
              </div>
              <div className="flex justify-center space-x-6 mt-8">
                <a
                  href="https://github.com/"
                  className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/omajay-itkare/"
                  className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~019acec0d7841acdd8?mp_source=share"
                  className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.002-2.439-5.453-5.439-5.453z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/Omajay_itkare"
                  className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/Omajay_itkare/"
                  className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </ContentSection>

        {/* Footer */}
        <footer className="mt-24 text-center text-[#8892b0] text-sm py-6 border-t border-[#233554]">
          <p className="mb-2">Designed & Built by Omajay Itkare</p>
          <p className="text-xs opacity-70">
            Python Developer • Data Science Intern • Entry-Level Data Analyst •
            Machine Learning Projects • Excel & SQL Dashboarding
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Home;
