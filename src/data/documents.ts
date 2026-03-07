export interface Document {
  id: string;
  title: string;
  content: string;
  date: string;
  preview: string;
}

export const documents: Document[] = [
  {
    id: "1",
    title: "Yes, I went through it",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. \n\n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "Yesterday 9:30 PM",
    preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
  },
  {
    id: "2",
    title: "Reflections on Design Systems",
    content: "Design systems are more than just a collection of components. They are a shared language for teams to build products efficiently and consistently. In this document, I explore the core principles of building a scalable design system.",
    date: "Oct 24, 2023",
    preview: "Design systems are more than just a collection of components. They are a shared language for teams to build products efficiently and consistently."
  },
  {
    id: "3",
    title: "The Future of Web Development",
    content: "With the rise of AI and new frameworks, the landscape of web development is changing rapidly. Here are my thoughts on where the industry is heading and what skills will be most valuable in the coming years.",
    date: "Sep 15, 2023",
    preview: "With the rise of AI and new frameworks, the landscape of web development is changing rapidly. Here are my thoughts on where the industry is heading."
  }
];
