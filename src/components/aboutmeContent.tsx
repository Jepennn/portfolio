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
        className="flex justify-start items-start p-5 my-5 gap-12">
        <p className="w-2/3 text-lg">
        I'm a 24-year-old KTH student, currently studying my second year of the Information Technology program. I have a strong passion for web development, and tech in general. I love exploring new technologies, learning new frameworks, and building different types of applications. When I am not studying or playing around with code, I enjoy training at the gym, going for runs, and spending quality time with my friends and family.
        </p>
        <img src="/profile.jpeg" alt="profile-image" className="h-52 w-52    object-cover border-6 border-primary-orange rounded-4xl" />
        </motion.div>
    )
}





//   I'm a 24-year-old KTH student, currently in my second year of the Information Technology program. I have a strong passion for programming, software development, and tech in general. I love exploring new technologies, learning new frameworks, and building different types of applications. When I am not studying or playing around with code, I enjoy training at the gym, going for runs, playing football, and spending quality time with my friends and family. I also have a big interest in reading books, both fiction and non-fiction, especially those related to personal development and technology trends. I always strive to challenge myself, learn new things, and grow both personally and professionally.