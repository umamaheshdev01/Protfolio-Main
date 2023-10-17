"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData , blogsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Blogs() {
  const { ref } = useSectionInView("Blogs", 0.5);

  return (
    <section ref={ref} id="blogs" className="scroll-mt-28 mb-28">
      <SectionHeading>My blogs</SectionHeading>
      <div>
        {blogsData.map((project, index) => (
          <React.Fragment key={index}>
           <a href='/'><Project {...project} /></a> 
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
