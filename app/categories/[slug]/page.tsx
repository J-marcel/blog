"use client"
import PageContainer from '@/components/page-container'
import PostsLists from '@/components/posts-list'
import { POSTS } from '@/utils/posts'
import { useParams } from 'next/navigation'
import React from 'react'


export default function CategorieSinglePage() {
    const params = useParams<{slug: string}>()
    const slug = params.slug
  return (
    <PageContainer>
      <div className="p-10 px-4">
      <h1>{slug.replace("-", " ")}</h1>
      <PostsLists posts={POSTS} />
      </div>
    </PageContainer>
  )
}
