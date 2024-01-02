import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })

    if(posts.length === 0){
        return (
            <>
            <div className="flex flex-col items-center justify-center mt-1 mb-2">
            <img
                src="https://illustrations.popsy.co/amber/taking-notes.svg"
                alt="No Articles Illustration"
                className=" w-2/6"
            />
            <h2 className="mt-4 text-black text-2xl font-semibold">
                Oops! No articles found.
            </h2>
            <p className="text-black text-lg text-center mt-2">
                It looks like there are no articles available at the moment.
                <br /> Why not start creating your own masterpiece?
            </p>
            </div>
            </>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts