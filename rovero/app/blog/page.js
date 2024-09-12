import Breadcrumb from "@/components/Breadcrumb";
import RoveroLayout from "@/layouts/RoveroLayout";
import dynamic from "next/dynamic";
const BlogIsotope = dynamic(() => import("@/components/BlogIsotope"), {
  ssr: false,
});
const page = () => {
  return (
    <RoveroLayout>
      <Breadcrumb
        pageName="blog"
        bgImage="images/blog-page/blog-page-hero.jpg"
        pageTitle="News & Events"
      />
      <BlogIsotope />
    </RoveroLayout>
  );
};
export default page;
