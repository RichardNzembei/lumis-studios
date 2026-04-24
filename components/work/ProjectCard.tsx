"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
      <Link
        href={`/work/${project.slug}`}
        className="group flex h-full flex-col rounded-[16px] border border-gray-100 bg-white p-6 transition-colors duration-200 hover:border-gray-200"
      >
        <div className="flex items-start justify-between gap-4">
          <Tag>{project.category}</Tag>
          <span className="text-xs text-gray-400">{project.year}</span>
        </div>

        <div className="mt-5 flex-1">
          <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">{project.tagline}</p>
        </div>

        <div className="mt-6 flex items-end justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 3).map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
            {project.tech.length > 3 && (
              <Tag>+{project.tech.length - 3}</Tag>
            )}
          </div>
          <ArrowUpRight
            size={16}
            className="shrink-0 text-gray-400 transition-colors duration-200 group-hover:text-gray-800"
          />
        </div>
      </Link>
    </motion.div>
  );
}
