export type blogProps = {
  title: string;
  image: string;
  date: string;
  url: string;
  available: boolean;
  index: number;
};

export const blogDetails = [
  // {
  //   title: "Building a Text Field Component with Material UI, Formik, and Yup",
  //   image:
  //     "https://cdn.hashnode.com/res/hashnode/image/upload/v1628442954056/OHNFYAzz4.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  //   date: "12/31/2022",
  //   url: "",
  //   available: false,
  // },
  // {
  //   title:
  //     "Creating a Select Field Component with Material UI, Formik, and Yup",
  //   image:
  //     "https://cdn.hashnode.com/res/hashnode/image/upload/v1624616590157/N4Hvd8NfZ.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  //   date: "12/31/2022",
  //   url: "",
  //   available: false,
  // },
  {
    title: "We're All Doing Caching Wrong: Here's the Right Way",
    url: "https://my-connecting-dot-for-system-design.hashnode.dev/were-all-doing-caching-wrong-heres-the-right-way",
    date: "April 2024",
    image: require(".//../../public/caching.png"),
    available: true,
  },
  {
    title: "Performance vs Scalability",
    url: "https://my-connecting-dot-for-system-design.hashnode.dev/performance-vs-scalability-why-your-fast-system-can-still-fail",
    date: "MAY 2024",
    image: require(".//../../public/pvs.png"),
    available: true,
  },
  {
    title: "How Designing Systems Made Me a Better Coder",
    image: require(".//../../public/system.png"),
    date: "APR 2024",
    url: "https://my-connecting-dot-for-system-design.hashnode.dev/how-designing-systems-made-me-a-better-coder-no-figma-involved",
    available: true,
  },
  // {
  //   title:
  //     "2023: A Year in Review – Navigating Challenges and Embracing Growth",
  //   image:
  //     "https://cdn.hashnode.com/res/hashnode/image/upload/v1704146853987/5e5ffc0f-9d20-4cc8-ad94-00ec737ba0f5.jpeg",
  //   date: "JAN 2024",
  //   url: "https://blog.victorwilliams.me/2023-a-year-in-review",
  //   available: true,
  // },
  // {
  //   title: "Reflecting on My 18th Year: A Personal Review of 2022",
  //   image:
  //     "https://cdn.hashnode.com/res/hashnode/image/upload/v1672494063925/1ee2925f-e529-4a8b-9dd7-6eea996a34eb.png",
  //   date: "DEC 2022",
  //   url: "https://blog.victorwilliams.me/reflecting-on-my-18th-year-a-personal-review-of-2022",
  //   available: true,
  // },
];
