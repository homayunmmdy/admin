"use client";
import { LATEST_POSTS_KEY } from "@/etc/config/Constants";
import useGetLatestPosts from "@/hooks/useGetLatestPosts";
import { PostsCashType } from "@/types/CashTypes";
import React, { useState } from "react";
import RecentPost from "./RecentPost";

const RecentPosts: React.FC = () => {
  const [recentSize] = useState(-4);
  const { posts } = useGetLatestPosts(recentSize, LATEST_POSTS_KEY);
  return (
    <>
      <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 py-8 md:grid-cols-2 xl:grid-cols-4">
        {posts?.map((post: PostsCashType) => (
          <>
            <RecentPost key={post._id} post={post} />
          </>
        ))}
      </div>
    </>
  );
};

export default RecentPosts;
