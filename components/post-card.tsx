import { Post } from '@/types/types'
import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import Image from 'next/image'
import { Badge } from './ui/badge'
import { Eye, MessageCircle } from 'lucide-react'

type Props = {
    post:Post
}
export default function PostCard({post}:Props) {
  return (
    <Link href={`/posts/${post.slug}`} className='group'>
        <Card className='flex flex-col justify-between rounded-lg border-2 h-[100%]'>
          <CardHeader>
           <div className="aspect-square relative">
              <Image src={"/images/react-native.jpg"} alt={post.title} fill className='aspect-square object-cover transition-all duration-300 hover:scale-110'/>
           </div>
          </CardHeader>
          <p className="font-semibold text-lg ml-3 mt-3">{`${post.title.substring(0, 20)} ...`}</p>
          <CardContent>
            <Badge variant="outline">{post.category}</Badge>
          </CardContent>
          <CardFooter>
           <div className='flex justify-between items-center gap-2'>
              <div className="flex items-center gap-1">
                <MessageCircle size={20} className='text-slate-500' />
                <p className='text-slate-500'>{post.nbComments}</p>
              </div>
              <div className="flex items-center gap-1">
                <Eye size={20} className='text-slate-500' />
                <p className='text-slate-500'>{post.nbViews}</p>
              </div>

           </div>
          </CardFooter>

        </Card>
    </Link>
  )
}