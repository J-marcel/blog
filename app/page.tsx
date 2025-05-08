import HeroPage from "@/components/hero-page";
import CategoriesPage from "./categories/page";
import PostsList from "@/components/posts-list";
import { POSTS } from "@/utils/posts";
import PageContainer from "@/components/page-container";

export default function Home() {
  return (
    <PageContainer>
      <div className="py-10 px-4">
        <HeroPage />
        <CategoriesPage />
        <PostsList posts={POSTS}/>
      </div>
    </PageContainer>
  );
}
