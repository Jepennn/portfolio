import { Badge } from "@/components/ui/badge"
import { motion } from "motion/react"

export function EducationCard(){
    return (
        <motion.div 
        initial={{ opacity: 0, scale: 0.95}}
        animate={{
            scale: 1,
            opacity: 1,
            transition: { duration: 0.25, delay: 0.03},
        }}
        className="border-2 flex justify-between rounded-4xl shadow-md ">
            <div className="py-5 px-8 w-6/9">
                <h3>KTH Royal Institute of Technology</h3>
                <h5 className="mb-2">Information Technology</h5>
                <p className="mb-6">I’m studying the Information and Communication Technology program at KTH Royal Institute of Technology. The program focuses on programming, mathematics, and computer science.</p>
                <Badge variant="outline" className="bg-secondary-gray shadow-md border-2">2023-present</Badge> 
            </div>
            <div className="bg-[#0762c3] border-2 border-[#0762c3] p-4 rounded-4xl flex items-center">
                <img src="/kth.svg" alt="kth-logo" className="w-40 h-40" />
            </div>
        </motion.div>
    )
}
