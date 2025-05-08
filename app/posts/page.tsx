import React from 'react'
import PostsLists from '@/components/posts-list';
import { POSTS } from '@/utils/posts';
import PageContainer from '@/components/page-container';

export default function page({}) {
  return (
    <PageContainer>
    <PostsLists posts={POSTS} />
    </PageContainer>
  )
}
