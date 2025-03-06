"use client"
import React,{useState, useRef} from 'react'
import { ProjectCard } from './ProjectCard' 
import ProjectTag from './ProjectTag'
import { animate, motion,useInView } from 'framer-motion'

const projectData = [
    {
        id:1,
        title: "React Portfolio Website",
        description: "Project 1 description",
        image: "/assets/projects/1.png",
        tag: ["All","Web"],
        gitURL:"/" ,
        previewURL:"/",
    },
    {
        id:2,
        title: "Potography Portfolio Website",
        description: "Project 2 description",
        image: "/assets/projects/2.png",
        tag: ["All","Web"],
        gitURL:"/" ,
        previewURL:"/",
    },
    {
        id:3,
        title: "E-commerce Application",
        description: "Project 3 description",
        image: "/assets/projects/3.png",
        tag: ["All","Web"],
        gitURL:"/" ,
        previewURL:"/",
    },
    {
        id:4,
        title: "Food Ordering Application",
        description: "Project 4 description",
        image: "/assets/projects/4.png",
        tag: ["All","Web"],
        gitURL:"/" ,
        previewURL:"/",
    },
    {
        id:5,
        title: "React Firebase Template",
        description: "Authentication and CRUD operations",
        image: "/assets/projects/5.png",
        tag: ["All","Web"],
        gitURL:"/" ,
        previewURL:"/",
    },
    {
        id:6,
        title: "Full-stack Roadmap",
        description: "Project 5 description",
        image: "/assets/projects/6.png",
        tag: ["All","Web"],
        gitURL:"/" ,
        previewURL:"/",
    },
]



export const ProjectSection = () => {
    const [tag,setTag] = useState("All");
    const ref = useRef(null);
    const isInview = useInView(ref,{once: true});

    const handleChange = (newtag) =>{
        setTag(newtag);
    }

    const filteredProjects = projectData.filter((project)=>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: {y:50,opacity:0 },
        animate: {y:0,opacity:1}
    }

  return (
    <section >
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">

            <ProjectTag onClick={handleChange } name="All" isSending={tag === "All"}/>
            <ProjectTag onClick={handleChange } name="Web" isSending={tag === "Web"}/>
            
        </div>
        <ul ref={ref} className=" grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project,index)=> 
            <motion.li variants={cardVariants} 
                        key={index}
                        initial="initial" 
                        animate={isInview ? "animate" : "initial"} 
                        transition={{duration:0.4, delay:index * 0.4}} >
                <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgURL={project.image}
                    tags={project.tag} 
                    gitURL={project.gitURL}
                    previewURL={project.previewURL}
                    />
            </motion.li>
            )}
        </ul>
    </section>
  )
}
