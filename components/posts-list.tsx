import { Post } from '@/types/types'
import React from 'react'
import PostCard from './post-card'

type Props = {
    posts:Post[]
}
export default function PostsLists({posts}:Props) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10 px-4 mt-4'>
        {posts.length > 0 ? (
          posts.map((post: Post) => (
            <PostCard key={post.id} post={post} />
          ))
        ) : (
          <p className="col-span-full text-center">Aucun post trouvé.</p>
        )}

    </div>
  )
}
