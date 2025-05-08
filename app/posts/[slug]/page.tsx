
"use client"
import React from 'react'
import { useParams } from 'next/navigation';
import PageContainer from '@/components/page-container';
import { Post } from '@/types/types';
import PostsLists from '@/components/posts-list';
import { Eye, MessageCircle } from 'lucide-react';
import { POSTS } from '@/utils/posts';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';


export default function PostSinglePage() {
    const params = useParams<{ slug: string}>()
    const slug = params.slug
    const POST: Post =
      {
        id: 1,
        category: "React",
        title: "React State Management: Choosing the Right Solution",
        image: "/react-state-management.jpg",
        caption:
          "Explore different state management solutions in React and choose the one that fits your needs.",
        date: "2023-01-15",
        minutesToRead: 10,
        author: "John ReactDev",
        nbViews: 25,
        nbComments: 8,
        slug: "react-state-management-choosing-right-solution",
        content: "React State Management: Choosing the Right Solution"
      } 
  return (
    <PageContainer>
        <div className="p-4">
        <h1>{slug.replace("-", " ")}</h1>
        <div className=" bg-cover bg-center rounded-lg aspect-square md:aspect-[2.4/1] overflow-hidden" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
            <div className="h-full w-full flex flex-col justify-center items-center">
              <div className="sm:max-w-xl max-w-xl bg-secondary/80 p-4 rounded-lg">
                <h1 className="text-3xl sm:text-5xl font-bold dark:text-white text-center">{POST.title}</h1>
              </div>
            </div>
        </div>
        <div className="flex justify-between items-center p-3">
          <div className="flex justify-centeritems-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="">
              <p className="dark:text-white">{POST.author}</p>
              <p className="text-slate-500 text-sm"> Posted on {new Date(POST.date).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
                <Eye size={24} className='dark:text-white' />
                <p className='dark:text-white'>{POST.nbViews}</p>
            </div>
            <div className="flex items-center gap-1">
                <MessageCircle size={24} className='dark:text-white' />
                <p className='dark:text-white'>{POST.nbComments}</p>
            </div>
          </div>
        </div>
        <Separator/>
            <p className="my-6"
              dangerouslySetInnerHTML={{ __html: POST.content as string }}
            ></p>
        <PostsLists posts={POSTS}/>
    </div>
      </PageContainer>
  )
}
