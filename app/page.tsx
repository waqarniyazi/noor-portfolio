import { LandingHero } from "@/components/landing-hero"
import BentoGrid from "@/components/bento-grid"
import PortfolioSection from "@/components/portfolio-section"
import { HandWrittenTitle } from "@/components/ui/hand-writing-text"
import { MagnetLines } from "@/components/ui/magnet-lines"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <LandingHero />

      <section id="bento-grid" className="w-full py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <HandWrittenTitle title="My Work" subtitle="Explore my creative portfolio" />
          <BentoGrid />
        </div>
      </section>

      <section id="illustrations" className="w-full py-20 px-4 md:px-8 lg:px-12 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <HandWrittenTitle title="Illustrations" subtitle="Creative visual storytelling" />
          <PortfolioSection category="illustrations" projects={illustrationProjects} />
        </div>
      </section>

      <section id="amazon-product-illustration" className="w-full py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <HandWrittenTitle title="Amazon Product Illustration" subtitle="Compelling product visuals" />
          <PortfolioSection category="amazon" projects={amazonProjects} />
        </div>
      </section>

      <section id="storybook" className="w-full py-20 px-4 md:px-8 lg:px-12 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <HandWrittenTitle title="StoryBook" subtitle="Narrative illustrations" />
          <PortfolioSection category="storybook" projects={storybookProjects} />
        </div>
      </section>

      <section id="nookasan-comic" className="w-full py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <HandWrittenTitle title="Nookasan Comic" subtitle="Sequential art and comics" />
          <PortfolioSection category="comic" projects={comicProjects} />
        </div>
      </section>

      <section id="digital-art" className="w-full py-20 px-4 md:px-8 lg:px-12 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <HandWrittenTitle title="Digital Art" subtitle="Modern digital creations" />
          <PortfolioSection category="digital" projects={digitalProjects} />
        </div>
      </section>

      <section id="character-design" className="w-full py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <HandWrittenTitle title="Character Design" subtitle="Unique character creations" />
          <PortfolioSection category="character" projects={characterProjects} />
        </div>
      </section>

      <section className="w-full py-20 px-4 md:px-8 lg:px-12 bg-primary/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <MagnetLines
            rows={7}
            columns={7}
            containerSize="40vmin"
            lineColor="hsl(var(--primary))"
            lineWidth="0.6vmin"
            lineHeight="4vmin"
            baseAngle={0}
            className="mb-12"
          />
          <HandWrittenTitle title="Let's Create Together" subtitle="Ready to bring your vision to life?" />
          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="/about"
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              About Me
            </a>
            <a
              href="/contact"
              className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample project data
const illustrationProjects = [
  {
    id: 1,
    title: "Dreamscape Series",
    thumbnail: "/placeholder.svg?height=600&width=800",
    fullImage: "/placeholder.svg?height=1200&width=1600",
    description: "A series of surreal illustrations exploring dreamlike landscapes and emotions.",
    tags: ["Digital", "Surreal", "Fantasy"],
  },
  {
    id: 2,
    title: "Urban Sketches",
    thumbnail: "/placeholder.svg?height=600&width=800",
    fullImage: "/placeholder.svg?height=1200&width=1600",
    description: "Capturing the essence of city life through detailed illustrations.",
    tags: ["Sketch", "Urban", "Lifestyle"],
  },
  {
    id: 3,
    title: "Nature's Whispers",
    thumbnail: "/placeholder.svg?height=600&width=800",
    fullImage: "/placeholder.svg?height=1200&width=1600",
    description: "Delicate illustrations inspired by the natural world and its hidden wonders.",
    tags: ["Watercolor", "Nature", "Detailed"],
  },
  {
    id: 4,
    title: "Abstract Emotions",
    thumbnail: "/placeholder.svg?height=600&width=800",
    fullImage: "/placeholder.svg?height=1200&width=1600",
    description: "Exploring human emotions through abstract visual language.",
    tags: ["Abstract", "Emotional", "Colorful"],
  },
  {
    id: 5,
    title: "Cultural Narratives",
    thumbnail: "/placeholder.svg?height=600&width=800",
    fullImage: "/placeholder.svg?height=1200&width=1600",
    description: "Illustrations that tell stories of diverse cultural traditions and heritage.",
    tags: ["Cultural", "Narrative", "Traditional"],
  },
]

const amazonProjects = [
  {
    id: 1,
    title: "Kitchen Essentials Collection",
    thumbnail: "/placeholder.svg?height=600&width=800",
    fullImage: "/placeholder.svg?height=1200&width=1600",
    description: "Product illustrations for a premium kitchen utensil brand on Amazon.",
    tags: ["Product", "Commercial", "Lifestyle"],
  },
  {
    id: 2,
    title: "Tech Gadgets Series",
    thumbnail: "/placeholder.svg?height=600&width=800",
    fullImage: "/placeholder.svg?height=1200&width=1600",
    description: "Detailed illustrations showcasing the features of cutting-edge tech products.",
    tags: ["Technology", "Detailed", "Commercial"],
  },
  {
    id: 3,
    title: "Home Decor Visualizations",
    thumbnail: "/placeholder.svg?height=600&width=800",
    fullImage: "/placeholder.svg?height=1200&width=1600",
    description: "Lifestyle illustrations for home decoration products, showing them in context.",
    tags: ["Interior", "Lifestyle", "Product"],
  },
  {
    id: 4,
    title: "Outdoor Gear Showcase",
    thumbnail: "/placeholder.svg?height=600&width=800",
    fullImage: "/placeholder.svg?height=1200&width=1600",
    description: "Adventure-themed illustrations for outdoor and camping equipment.",
    tags: ["Outdoor", "Adventure", "Product"],
  },
  {
    id: 5,
    title: "Beauty Product Line",
    thumbnail: "/placeholder.svg?height=600&width=800",
    fullImage: "/placeholder.svg?height=1200&width=1600",
    description: "Elegant illustrations for a premium beauty and skincare brand.",
    tags: ["Beauty", "Elegant", "Commercial"],
  },
]

const storybookProjects = [
  {
    id: 1,
    title: "The Whispering Forest",
    thumbnail: "/placeholder.svg?height=600&width=800",
    fullImage: "/placeholder.svg?height=1200&width=1600",
    description: "Illustrations for a children's book about magical creatures in an enchanted forest.",
    tags: ["Children", "Fantasy", "Book"],
  },
  {
    id: 2,
    title: "Ocean Adventures",
    thumbnail: "/placeholder.svg?height=600&width=800",
    fullImage: "/placeholder.svg?height=1200&width=1600",
    description: "A series of underwater scenes for an educational storybook about marine life.",
    tags: ["Educational", "Marine", "Children"],
  },
  {
    id: 3,
    title: "The Brave Little Star",
    thumbnail: "/placeholder.svg?height=600&width=800",
    fullImage: "/placeholder.svg?height=1200&width=1600",
    description: "Heartwarming illustrations for a bedtime story about courage and friendship.",
    tags: ["Bedtime", "Heartwarming", "Children"],
  },
  {
    id: 4,
    title: "Time Travelers",
    thumbnail: "/placeholder.svg?height=600&width=800",
    fullImage: "/placeholder.svg?height=1200&width=1600",
    description: "Dynamic illustrations for a young adult novel about time travel adventures.",
    tags: ["Young Adult", "Sci-Fi", "Adventure"],
  },
  {
    id: 5,
    title: "Mythical Creatures Encyclopedia",
    thumbnail: "/placeholder.svg?height=600&width=800",
    fullImage: "/placeholder.svg?height=1200&width=1600",
    description: "Detailed illustrations of mythical creatures from around the world for a fantasy reference book.",
    tags: ["Fantasy", "Reference", "Detailed"],
  },
]

const comicProjects = [
  {
    id: 1,
    title: "Nookasan: Origins",
    thumbnail: "/placeholder.svg?height=600&width=800",
    fullImage: "/placeholder.svg?height=1200&width=1600",
    description: "The first chapter in the Nookasan comic series, introducing the main character and world.",
    tags: ["Comic", "Origin Story", "Character Development"],
  },
  {
    id: 2,
    title: "City of Shadows",
    thumbnail: "/placeholder.svg?height=600&width=800",
    fullImage: "/placeholder.svg?height=1200&width=1600",
    description: "A noir-inspired storyline in the Nookasan universe, exploring the darker side of the city.",
    tags: ["Noir", "Urban", "Mystery"],
  },
  {
    id: 3,
    title: "The Great Adventure",
    thumbnail: "/placeholder.svg?height=600&width=800",
    fullImage: "/placeholder.svg?height=1200&width=1600",
    description: "An action-packed adventure as Nookasan embarks on a journey to unknown lands.",
    tags: ["Adventure", "Action", "Journey"],
  },
  {
    id: 4,
    title: "Friends & Foes",
    thumbnail: "/placeholder.svg?height=600&width=800",
    fullImage: "/placeholder.svg?height=1200&width=1600",
    description: "Introducing the supporting cast of characters in the Nookasan comic universe.",
    tags: ["Characters", "Relationships", "Ensemble"],
  },
  {
    id: 5,
    title: "Hidden Powers",
    thumbnail: "/placeholder.svg?height=600&width=800",
    fullImage: "/placeholder.svg?height=1200&width=1600",
    description: "A storyline exploring the mysterious abilities that Nookasan discovers within.",
    tags: ["Supernatural", "Discovery", "Power"],
  },
]

const digitalProjects = [
  {
    id: 1,
    title: "Digital Dreamscapes",
    thumbnail: "/placeholder.svg?height=600&width=800",
    fullImage: "/placeholder.svg?height=1200&width=1600",
    description: "A collection of surreal digital paintings exploring dreamlike landscapes.",
    tags: ["Digital Painting", "Surreal", "Landscape"],
  },
  {
    id: 2,
    title: "Neon Futures",
    thumbnail: "/placeholder.svg?height=600&width=800",
    fullImage: "/placeholder.svg?height=1200&width=1600",
    description: "Cyberpunk-inspired digital art with vibrant neon aesthetics.",
    tags: ["Cyberpunk", "Neon", "Futuristic"],
  },
  {
    id: 3,
    title: "Abstract Realities",
    thumbnail: "/placeholder.svg?height=600&width=800",
    fullImage: "/placeholder.svg?height=1200&width=1600",
    description: "A series of abstract digital compositions exploring form, color, and texture.",
    tags: ["Abstract", "Experimental", "Composition"],
  },
  {
    id: 4,
    title: "Digital Portraits",
    thumbnail: "/placeholder.svg?height=600&width=800",
    fullImage: "/placeholder.svg?height=1200&width=1600",
    description: "Stylized digital portraits capturing the essence of diverse subjects.",
    tags: ["Portrait", "Character", "Stylized"],
  },
  {
    id: 5,
    title: "Fantasy Worlds",
    thumbnail: "/placeholder.svg?height=600&width=800",
    fullImage: "/placeholder.svg?height=1200&width=1600",
    description: "Immersive digital illustrations of fantastical worlds and environments.",
    tags: ["Fantasy", "Environment", "Worldbuilding"],
  },
]

const characterProjects = [
  {
    id: 1,
    title: "Heroes & Villains",
    thumbnail: "/placeholder.svg?height=600&width=800",
    fullImage: "/placeholder.svg?height=1200&width=1600",
    description: "Character designs for protagonists and antagonists in a fantasy narrative.",
    tags: ["Fantasy", "Heroes", "Villains"],
  },
  {
    id: 2,
    title: "Creature Concepts",
    thumbnail: "/placeholder.svg?height=600&width=800",
    fullImage: "/placeholder.svg?height=1200&width=1600",
    description: "Imaginative designs for fantastical creatures and monsters.",
    tags: ["Creatures", "Fantasy", "Concept"],
  },
  {
    id: 3,
    title: "Everyday Heroes",
    thumbnail: "/placeholder.svg?height=600&width=800",
    fullImage: "/placeholder.svg?height=1200&width=1600",
    description: "Character designs inspired by ordinary people in extraordinary situations.",
    tags: ["Contemporary", "Relatable", "Storytelling"],
  },
  {
    id: 4,
    title: "Animated Series Concepts",
    thumbnail: "/placeholder.svg?height=600&width=800",
    fullImage: "/placeholder.svg?height=1200&width=1600",
    description: "Character designs and turnarounds for potential animated series.",
    tags: ["Animation", "Series", "Development"],
  },
  {
    id: 5,
    title: "Historical Figures Reimagined",
    thumbnail: "/placeholder.svg?height=600&width=800",
    fullImage: "/placeholder.svg?height=1200&width=1600",
    description: "Creative reinterpretations of historical personalities in a stylized manner.",
    tags: ["Historical", "Reimagined", "Stylized"],
  },
]
