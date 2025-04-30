"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface Project {
  id: number
  title: string
  thumbnail: string
  fullImage: string
  description: string
  tags: string[]
}

interface PortfolioSectionProps {
  category: string
  projects: Project[]
}

export default function PortfolioSection({ category, projects }: PortfolioSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < Math.ceil(projects.length / 3) - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const visibleProjects = projects.slice(currentIndex * 3, currentIndex * 3 + 3)

  return (
    <div className="mt-12">
      <div className="relative">
        <div className="flex overflow-hidden">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
            >
              {visibleProjects.map((project) => (
                <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {projects.length > 3 && (
          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>

            <div className="flex items-center gap-2">
              {Array.from({ length: Math.ceil(projects.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    currentIndex === index ? "bg-primary" : "bg-muted",
                  )}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={currentIndex === Math.ceil(projects.length / 3) - 1}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        )}
      </div>

      <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer group"
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={project.thumbnail || "/placeholder.svg"}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <motion.div
        className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
      >
        <div className="text-center p-4">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <motion.div
            className="inline-block px-4 py-2 rounded-full bg-primary text-primary-foreground"
            initial={{ y: 20, opacity: 0 }}
            animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.1 }}
          >
            Read More →
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  if (!project) return null

  return (
    <Dialog open={!!project} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="relative h-64 md:h-full">
            <Image src={project.fullImage || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          <div className="p-6 max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
              <DialogDescription className="mt-4">{project.description}</DialogDescription>
            </DialogHeader>

            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-muted rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Button className="w-full" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        </div>

        <Button variant="ghost" size="icon" className="absolute top-2 right-2 rounded-full" onClick={onClose}>
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </DialogContent>
    </Dialog>
  )
}
