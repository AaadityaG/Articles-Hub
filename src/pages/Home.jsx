import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'

function Home() {
    // const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     appwriteService.getPosts().then((posts) => {
    //         if (posts) {
    //             setPosts(posts.documents)
    //         }
    //     })
    // }, [])
  
    // if (posts.length === 0) {
        return (
            <div className="w-full py-4 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full content-center">
                            {/* <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                            <img src="https://illustrations.popsy.co/sky/team-idea.svg" alt="" className="w-3/5	" /> */}
                            <div className="relative bg-yellow-500 h-64 md:h-96 xl:h-screen flex items-center justify-center">
                            <img
                                className="absolute inset-0 object-cover w-full h-full"
                                src="https://illustrations.popsy.co/amber/team-idea.svg"
                                alt="Team Idea Illustration"
                            />
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <div className="relative z-10 text-center text-white">
                                <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold leading-tight mb-4">
                                Got idea, write idea!
                                </h1>
                                <p className="text-lg md:text-xl xl:text-2xl">
                                Articles hub, a place for ideas
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    // }
    // return (
    //     <div className='w-full py-8'>
    //         <Container>
    //             <div className='flex flex-wrap'>
    //                 {posts.map((post) => (
    //                     <div key={post.$id} className='p-2 w-1/4'>
    //                         <PostCard {...post} />
    //                     </div>
    //                 ))}
    //             </div>
    //         </Container>
    //     </div>
    // )
}

export default Home