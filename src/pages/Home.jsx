import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'

function Home() {
        return (
            <Container>
                <div className="flex flex-wrap">
                    <div className="p-2 w-full content-center">
                        <div className="relative h-screen md:h-96 sm:h-full xl:h-screen flex items-center justify-center sm:items-center sm:justify-center">
                            <img
                                className="absolute inset-0 object-cover w-full h-full"
                                src="https://illustrations.popsy.co/amber/team-idea.svg"
                                alt="Team Idea Illustration"
                            />
                            <div className="relative z-10 text-center text-white">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-4" style={{ textShadow: '4px 4px 10px red' }}>
                                    Discover. Write. Connect.
                                </h1>
                                <p className="text-lg sm:text-xl md:text-xl xl:text-2xl" style={{ textShadow: '2px 2px black' }}>
                                    Articles Hub, a spot where you... Write, Share, Inspire.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        )
}

export default Home