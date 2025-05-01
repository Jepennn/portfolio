import { motion } from "motion/react";
import { useWindowSize } from "@/hooks/useWindowSize";

export function TechStackSection(){


    const screenSize = useWindowSize();

    return (
        <div id="techStack" className="mb-40">
                <motion.div
                initial={{ y:100, opacity: 0 }}
                whileInView={{ y:0, opacity: 1 }}
                transition={{ duration: 0.8}}
                viewport={{ amount:0.2, once: true }}
                className="flex flex-col items-start">
                <h1 className="mb-5">Tech Stack</h1>
                <p className="mb-5 sm:w-2/3">
                Here is a list of technologies I’m familiar with and use to bring ideas to life
                </p>
                </motion.div>

                <div className="flex flex-col justify-start gap-5">

                <div className="flex flex-col sm:flex-row justify-between gap-5">

                    {/* This is the column with frontend technologies */}
                    <motion.div className="flex flex-col sm:w-1/2 border-2 p-6 rounded-4xl shadow-md"
                    initial={{ opacity: 0, scale: 0.95, x: screenSize < 768 ? -100 : -300}}
                    whileInView={{
                        scale: 1,
                        opacity: 1,
                        x: 0,
                        y: 0,
                        transition: { duration: 0.70, delay: 0.03},
                    }}
                    viewport={{once: true, amount: 0.5}}>
                        <h3>Frontend</h3>
                        <div className="flex flex-wrap gap-2 my-4">
                            <TechStackCard title="React" svg="/react-js.svg" />
                            <TechStackCard title="Tailwind" svg="/tailwindcss.svg" />
                            <TechStackCard title="Redux" svg="/redux.svg" />
                            <TechStackCard title="HTML" svg="/html5.svg" />
                            <TechStackCard title="CSS" svg="/css.svg" />
                            <TechStackCard title="TypeScript" svg="/typescript.svg" />
                            <TechStackCard title="Framer Motion" svg="/framer-motion.svg" />
                        </div>
                    </motion.div>


                    {/* This is the column with backend technologies */}
                    <motion.div className="flex flex-col sm:w-1/2 border-2 p-6 rounded-4xl shadow-md"
                initial={{ opacity: 0, scale: 0.95, x: screenSize < 768 ? 100 : 300}}
                    whileInView={{
                        scale: 1,
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.70, delay: 0.03},
                    }}
                    viewport={{once: true, amount: 0.5}}>
                        <h3>Backend</h3>
                        <div className="flex flex-wrap gap-2 my-4">
                            <TechStackCard title="Supabase" svg="/supabase.svg" />
                            <TechStackCard title="Java" svg="/java.svg" />
                            <TechStackCard title="Firebase" svg="/firebase.svg" />
                            <TechStackCard title="Node.js" svg="/nodejs.svg" />
                            <TechStackCard title="Express.js" svg="/expressjs.svg" />
                            <TechStackCard title="PostgreSQL" svg="/postgresql.svg" />
                        </div>
                    </motion.div>
                </div>


                {/* This is the column with other tools */}
                <motion.div className="flex flex-col border-2 p-6 rounded-4xl shadow-md"
                initial={{ opacity: 0, scale: 0.95, y:150}}
                whileInView={{
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.70, delay: 0.03},
                }}
                viewport={{once: true, amount: 0.1}}>
                    <h3>Other tools</h3>
                    <div className="flex flex-wrap gap-2 my-4">
                        <TechStackCard title="Docker" svg="/docker.svg" />
                        <TechStackCard title="Git" svg="/git.svg" />
                        <TechStackCard title="GitHub" svg="/github.svg" />
                        <TechStackCard title="npm" svg="/npm.svg" />
                    </div>
                </motion.div>
            </div>

        </div>
    )
}


interface TechStackCardProps {
    title: string;
    svg: string;
}

export function TechStackCard({title, svg}: TechStackCardProps){
    return (
        <div className="flex flex-row items-center justify-start gap-4 border-2 rounded-4xl shadow-md py-2 px-3">
            <img src={svg} alt={title} className="w-6 h-6" />
            <h5>{title}</h5>
        </div>
    )   
}