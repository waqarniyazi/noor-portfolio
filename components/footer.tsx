import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-muted/30 py-12 px-4 md:px-8 lg:px-12 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-primary">NoorUsSabah Niyazi</h3>
            <p className="text-muted-foreground">
              Illustrator & Graphic Designer creating vibrant, storytelling visuals for various platforms and purposes.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/#illustrations" className="text-muted-foreground hover:text-primary transition-colors">
                Illustrations
              </Link>
              <Link
                href="/#amazon-product-illustration"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Amazon Products
              </Link>
              <Link href="/#storybook" className="text-muted-foreground hover:text-primary transition-colors">
                StoryBook
              </Link>
              <Link href="/#nookasan-comic" className="text-muted-foreground hover:text-primary transition-colors">
                Nookasan Comic
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
            <p className="text-muted-foreground mt-2">Email: nooorusssabah@gmail.com</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} NoorUsSabah Niyazi. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
