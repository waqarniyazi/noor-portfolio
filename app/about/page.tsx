import type React from "react"
import { HandWrittenTitle } from "@/components/ui/hand-writing-text"
import Image from "next/image"
import { MagnetLines } from "@/components/ui/magnet-lines"
import { Brush, Camera, Code, Figma, Layers, Palette, PenTool, Scissors } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="w-full py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <HandWrittenTitle title="About Me" subtitle="Illustrator & Graphic Designer" />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="NoorUsSabah Niyazi"
                width={800}
                height={800}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-primary">NoorUsSabah Niyazi</h2>
            <p className="text-lg text-muted-foreground">
              I'm a passionate illustrator and graphic designer with a love for storytelling through visual art. My work
              spans from detailed illustrations to character designs, product visualizations, and comic art.
            </p>
            <p className="text-lg text-muted-foreground">
              With over 5 years of experience in the creative industry, I've had the pleasure of working with clients
              from around the world, bringing their visions to life with my unique artistic style.
            </p>
            <p className="text-lg text-muted-foreground">
              My approach combines traditional artistic techniques with modern digital tools, allowing me to create
              versatile and impactful visual content for various platforms and purposes.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            <SkillCard icon={<PenTool className="h-8 w-8" />} title="Illustration" />
            <SkillCard icon={<Brush className="h-8 w-8" />} title="Digital Painting" />
            <SkillCard icon={<Layers className="h-8 w-8" />} title="Character Design" />
            <SkillCard icon={<Palette className="h-8 w-8" />} title="Color Theory" />
            <SkillCard icon={<Figma className="h-8 w-8" />} title="UI/UX Design" />
            <SkillCard icon={<Code className="h-8 w-8" />} title="Web Design" />
            <SkillCard icon={<Camera className="h-8 w-8" />} title="Photography" />
            <SkillCard icon={<Scissors className="h-8 w-8" />} title="Print Design" />
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center">
          <MagnetLines
            rows={5}
            columns={5}
            containerSize="30vmin"
            lineColor="hsl(var(--accent))"
            lineWidth="0.5vmin"
            lineHeight="3vmin"
            baseAngle={0}
            className="mb-8"
          />

          <h2 className="text-3xl font-bold text-center mb-6">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mb-8">
            I'm always open to new projects and collaborations. If you have a project in mind or just want to say hello,
            feel free to get in touch!
          </p>

          <a
            href="/contact"
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  )
}

function SkillCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
      <div className="text-primary">{icon}</div>
      <h3 className="font-medium text-center">{title}</h3>
    </div>
  )
}
