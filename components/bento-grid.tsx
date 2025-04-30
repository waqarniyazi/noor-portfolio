"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const bentoItems = [
  {
    id: 1,
    title: "Illustrations",
    image: "/placeholder.svg?height=600&width=800",
    link: "/#illustrations",
    color: "from-primary/20 to-primary/5",
    hoverEffect: "scale",
  },
  {
    id: 2,
    title: "Amazon Product Illustration",
    image: "/placeholder.svg?height=600&width=800",
    link: "/#amazon-product-illustration",
    color: "from-secondary/20 to-secondary/5",
    hoverEffect: "rotate",
  },
  {
    id: 3,
    title: "StoryBook",
    image: "/placeholder.svg?height=600&width=800",
    link: "/#storybook",
    color: "from-accent/20 to-accent/5",
    hoverEffect: "slide",
  },
  {
    id: 4,
    title: "Nookasan Comic",
    image: "/placeholder.svg?height=600&width=800",
    link: "/#nookasan-comic",
    color: "from-primary/20 to-secondary/5",
    hoverEffect: "scale",
  },
  {
    id: 5,
    title: "Digital Art",
    image: "/placeholder.svg?height=600&width=800",
    link: "/#digital-art",
    color: "from-secondary/20 to-accent/5",
    hoverEffect: "rotate",
  },
  {
    id: 6,
    title: "Character Design",
    image: "/placeholder.svg?height=600&width=800",
    link: "/#character-design",
    color: "from-accent/20 to-primary/5",
    hoverEffect: "slide",
  },
]

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {bentoItems.map((item) => (
        <BentoItem key={item.id} item={item} />
      ))}
    </div>
  )
}

function BentoItem({ item }: { item: (typeof bentoItems)[0] }) {
  const [isHovered, setIsHovered] = useState(false)

  const getHoverAnimation = () => {
    switch (item.hoverEffect) {
      case "scale":
        return { scale: 1.05 }
      case "rotate":
        return { rotate: 3 }
      case "slide":
        return { y: -10 }
      default:
        return { scale: 1.05 }
    }
  }

  return (
    <Link href={item.link}>
      <motion.div
        className="relative overflow-hidden rounded-xl aspect-square cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={getHoverAnimation()}
        transition={{ duration: 0.3 }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} z-10 opacity-70`} />

        <motion.div
          className="absolute inset-0 z-0"
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
        </motion.div>

        <div className="absolute inset-0 z-20 flex items-end p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0.8, y: 10 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <h3 className="text-xl font-bold text-white drop-shadow-md">{item.title}</h3>

            <motion.div
              initial={{ width: "0%" }}
              animate={isHovered ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 0.3 }}
              className="h-0.5 bg-white mt-2"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-white text-sm mt-2"
            >
              View Collection →
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  )
}
