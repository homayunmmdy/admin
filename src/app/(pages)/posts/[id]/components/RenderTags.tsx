import { PostsCashType } from "@/types/CashTypes";

const RenderTags = ({ post }: { post: PostsCashType }) => {
  return (
    <>
      <ul className="my-2 flex flex-wrap gap-2">
        {post.categories?.map((category) => (
          <li key={category.id} className="badge badge-primary badge-outline">
            {category.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default RenderTags;
