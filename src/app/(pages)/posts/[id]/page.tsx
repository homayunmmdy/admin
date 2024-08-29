"use client";
import RecentPosts from "@/app/(pages)/posts/[id]/components/RecentPosts";
import useSinglePost from "@/hooks/useSinglePost";
import PostSeclton from "./PostSkelton";
import useReadText from "@/hooks/useReadText";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import { FaStop } from "react-icons/fa6";
import FormatTime from "../components/FormatTime";
import { Button } from "@/components";
import Image from "next/image";

const Post = () => {
  //@ts-ignore
  const post = useSinglePost();
    //@ts-ignore
  const text = `${post?.title}. ${post?.body}`;
  const { isSpeaking, handleReadText, handleStopReading } = useReadText(text);

  if (!post) {
    return <PostSeclton />
  }

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  };

  return (
    <>
      <div className="flex flex-col ">
        <div className="bg-indigo-500">
          <div className="w-[94%] md:w-[92%] mx-auto px-4 py-8">
          {/* @ts-ignore */}
            <h1 className="text-4xl text-center font-extrabold text-white">{post.title}</h1>
          {/* @ts-ignore */}
            <p className="text-lg  text-center my-3 text-white"><FormatTime  timestamp={post.createdAt} options={options} /></p>
          </div>
        </div>
        <div className="bg-white py-8">
          <div className="w-[94%] md:w-[92%] mx-auto flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-3/4 ">
              <Image
                className="w-full py-3 aspect-video rounded-3xl"
                //@ts-ignore
                src={post.imgurl}
                //@ts-ignore
                title={post.title}
                //@ts-ignore
                alt={post.title}
                width={662.172}
                height={372.469}
                loading="lazy"
              />
              <div className="flex gap-3 items-center justify-between px-3">
                {/* <p className="text-center">{readingTimeEstimate.text}</p> */}
                  {!isSpeaking ? (
                    <Button title={<FaPlay />} style="text-white rounded-full" onClick={handleReadText} color="btn-primary"/>
                    ) : (
                    <Button title={<FaStop />} style="text-white rounded-full" onClick={handleStopReading} color="btn-primary"/>
                  )}
                  <Link href="/demo" className="btn btn-outline btn-primary rounded-full">Back Home</Link>
              </div>
              <div className="prose max-w-none">
                <p className="p-3 text-lg leading-9	">
                  {/* @ts-ignore */}
                  {post.body}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/4 py-3">
              <RecentPosts />
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default Post;