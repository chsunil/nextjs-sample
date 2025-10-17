import { getAllPosts, getPostBySlug } from "@/utils/markdown";
import markdownToHtml from "@/utils/markdownToHtml";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: any) {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
  const post = getPostBySlug(params.slug, [
    "title",
    "author",
    "content",
    "metadata",
  ]);

  const siteName = process.env.SITE_NAME || "Your Site Name";
  const authorName = process.env.AUTHOR_NAME || "Your Author Name";

  if (post) {
    const metadata = {
      title: `${post.title || "Single Post Page"} | ${siteName}`,
      author: authorName,
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };

    return metadata;
  } else {
    return {
      title: "Not Found",
      description: "No blog article has been found",
      author: authorName,
      robots: {
        index: false,
        follow: false,
        nocache: false,
        googleBot: {
          index: false,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  }
}

export default async function Post({ params }: any) {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
  const post = getPostBySlug(params.slug, [
    "title",
    "author",
    "authorImage",
    "content",
    "coverImage",
    "date",
  ]);

  const content = await markdownToHtml(post.content || "");

  return (
    <>
      <section className="relative dark:bg-darkmode pt-7.5! pb-8!">
        <div className="container lg:max-w-xl md:max-w-screen-md  mx-auto px-4">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center">
            <div className="col-span-8">
              <div className="flex flex-col sm:flex-row">
                <span className="text-base text-midnight_text font-medium dark:text-white pr-7 border-r border-solid border-lightborder  dark:border-darkborder w-fit">
                  {format(new Date(post.date), "dd MMM yyyy")}
                </span>
                <span className="text-base text-midnight_text font-medium dark:text-white sm:pl-7 pl-0 w-fit">
                  13 Comments
                </span>
              </div>
              <h2 className="text-midnight_text dark:text-white md:text-[40px] leading-tight text-4xl font-bold pt-7">
                {post.title}
              </h2>
            </div>
            <div className="flex items-center md:justify-center justify-start gap-6 col-span-4 pt-4 md:pt-0">
              <Image
                src={post.authorImage}
                alt="image"
                className="bg-no-repeat bg-contain inline-block rounded-full !w-20 !h-20"
                width={40}
                height={40}
                layout="responsive"
                quality={100}
              />
              <div className="">
                <span className="text-xl font-bold text-midnight_text dark:text-white">
                  Silicaman
                </span>
                <p className="text-xl text-gray dark:text-white">Author</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dark:bg-darkmode pt-8!">
        <div className="container lg:max-w-xl md:max-w-screen-md mx-auto px-4">
          <div className="grid-cols-3 grid">
            <div className="z-20 mb-24 max-h-[448px] overflow-hidden rounded col-span-3">
              <Image
                src={post.coverImage}
                alt="image"
                width={1170}
                height={766}
                className="h-full w-full object-cover object-top rounded-3xl"
              />
            </div>
            <div className="lg:col-span-2 col-span-3">
              <div className="blog-details xl:pr-10">
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
              </div>
            </div>
            <div className="lg:col-span-1 col-span-3">
              <div>
                <div className="mb-8 flex flex-col">
                  <div className="w-full py-12 px-11 bg-white dark:bg-darklight shadow-lg border-b-2 border-lightborder dark:border-darkborder rounded-t-lg">
                    <h2
                      className="relative mb-5 dark:text-white text-black text-3xl font-medium"
                    >
                      Share
                    </h2>
                    <div className="flex gap-4 flex-col">
                      <div className="bg-[#526fa3] py-4 px-6 text-xl rounded-lg text-white">
                        <Link href="#" className="flex items-center ">
                          <svg
                            className="svg-inline--fa fa-facebook-f me-3"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="facebook-f"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                            width="12.5px"
                            height="20px"
                          >
                            <path
                              fill="white"
                              d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                            />
                          </svg>
                          Facebook
                        </Link>
                      </div>
                      <div className="bg-[#46C4FF] py-4 px-6 text-xl rounded-lg text-white">
                        <Link href="#" className="flex items-center ">
                          <svg
                            className="svg-inline--fa fa-twitter me-3"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="twitter"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            height="21.5px"
                            width="25px"
                          >
                            <path
                              fill="currentColor"
                              d="M459.4 151.7c.325 4.548.325 9.097.325 13.745 0 140.966-107.416 303.213-303.213 303.213-60.452 0-116.426-17.781-163.725-48.265 8.447.974 16.568 1.299 25.34 1.299 50.236 0 96.56-17.206 133.26-46.258-46.832-.975-86.185-31.188-99.675-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.828-9.797-85.417-52.628-85.417-103.766v-1.299c14.33 7.92 30.748 12.67 48.364 13.32-28.264-18.843-46.832-51.014-46.832-87.391 0-19.492 5.197-37.36 14.33-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.794-2.599-15.91-2.599-24.029 0-57.502 46.833-104.335 104.334-104.335 30.137 0 57.502 12.67 76.67 33.137 23.715-4.548 46.182-13.32 66.599-25.34-7.793 24.366-24.366 44.833-46.182 57.502 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                            />
                          </svg>
                          twitter
                        </Link>
                      </div>
                      <div className="bg-[#3C86AD] py-4 px-6 text-xl rounded-lg text-white">
                        <Link href="#" className="flex items-center ">
                          <svg
                            className="svg-inline--fa fa-linkedin-in me-3"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="linkedin-in"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            width="21.5px"
                            height="25px"
                          >
                            <path
                              fill="currentColor"
                              d="M100.28 448H7.4V148.9h92.78zM53.79 108.1C24.09 108.1 0 83.79 0 54.14 0 24.37 24.09 0 53.79 0 83.3 0 107.6 24.37 107.6 54.14c.1 29.64-24.2 53.96-53.81 53.96zM447.4 448h-92.68V302.4c0-34.7-.7-79.29-48.32-79.29-48.32 0-55.7 37.72-55.7 76.79V448H157.3V148.9h88.94v40.8h1.28c12.4-23.41 42.62-48.32 87.76-48.32 93.9 0 111.18 61.81 111.18 142.3V448z"
                            />
                          </svg>
                          linkedin
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-full py-12 px-11 bg-white dark:bg-darklight shadow-lg rounded-b-lg">
                    <p className="text-3xl font-medium mb-4">Join our Newsletter</p>
                    <input
                      placeholder="Email address "
                      className="p-3 dark:bg-darkmode border border-border focus:border-primary dark:border-darkborder dark:focus:border-primary rounded-lg mb-2 w-full focus:outline-0"
                    />
                    <button className="w-full py-4 px-9 text-lg font-medium bg-primary hover:bg-orange-600 duration-300 rounded-lg text-white">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
