import { motion } from "motion/react"

export function AboutMeContent(){
    return (
        <motion.div 
        initial={{ opacity: 0, scale: 0.95}}
        animate={{
            scale: 1,
            opacity: 1,
            transition: { duration: 0.25, delay: 0.03},
        }}
        className="flex flex-col sm:flex-row justify-start  items-center p-5 my-5 gap-12">
        <div className="relative sm:h-52 sm:w-52 h-40 w-40 group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/20 to-green-500/20 rounded-4xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
          <img 
            src="/profile.jpeg" 
            alt="profile-image" 
            className="relative sm:h-52 sm:w-52 h-40 w-40 object-cover border-[3px] border-border rounded-4xl shadow-2xl hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] hover:scale-[1.02] transition-all duration-300 ring-2 ring-border/30" 
          />
        </div>
        <p className="sm:w-2/3 text-lg">
        I enjoy exploring new technologies and building web applications that tackles real world problems, with a focus on creating intuitive user experiences and scalable solutions. 
        
        <br /><br />
        
        Currently exploring <span className="font-semibold text-primary-orange">GCP's offerings</span> and how to build applications that utilize <span className="font-semibold text-primary-orange">Applied AI</span> to solve complex problems and enhance user experiences.
        </p>
        </motion.div>
    )
}





