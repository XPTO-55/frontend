import { ImageAttributes, getStrapiMedia } from "../../lib/media";
import NextImage from "next/image";

type ImageBlogProps = {
  attributes: ImageAttributes
}

const ImageBlog = ({ attributes }: ImageBlogProps) => {
  const { alternativeText, width, height } = attributes;

  return (
    <NextImage
      layout="responsive"
      width={width}
      height={height}
      objectFit="contain"
      src={getStrapiMedia(attributes)}
      alt={alternativeText || ""}
    />
  );
};

export default ImageBlog;