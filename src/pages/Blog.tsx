
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/page-transition";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 md:px-6 pt-28 md:pt-32">
        <section className="py-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Blog
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Check out my latest insights on AI, Tech, and Innovation.
            </motion.p>
          </div>

          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="glass-card p-12 rounded-xl">
              <p className="text-muted-foreground mb-8 text-lg">
                I write about AI strategy, tools, and building impactful digital products.
              </p>
              
              <p className="text-sm text-muted-foreground mb-6">
                Published on Hashnode | Articles on AI, strategy, and tech innovation
              </p>
              
              <Button 
                variant="default" 
                size="lg" 
                className="group rounded-full transition-all duration-300 hover:shadow-md"
                onClick={() => window.open("https://edouardosai.hashnode.dev/", "_blank")}
              >
                Visit My Blog
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </section>
      </div>

      {/* SEO Optimization - Add in page head */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        className="hidden"
      >
        <title>Blog – Edouardos Stavrakis</title>
        <meta 
          name="description" 
          content="Explore insights on AI tools, consulting, and future tech trends by Edouardos Stavrakis." 
        />
        <link rel="canonical" href="https://edouardosai.hashnode.dev/" />
        <meta property="og:title" content="Blog – Edouardos Stavrakis" />
        <meta 
          property="og:description" 
          content="Explore insights on AI tools, consulting, and future tech trends by Edouardos Stavrakis." 
        />
        <meta property="og:url" content="https://edouardosai.hashnode.dev/" />
        <meta property="og:type" content="website" />
      </motion.div>
    </PageTransition>
  );
};

export default Blog;
