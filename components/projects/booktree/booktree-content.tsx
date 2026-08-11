import type { ContentBlock } from "../case-study/case-study-content";

const IMG = "/images/projects/booktree";

export const BOOKTREE_CONTENT: ContentBlock[] = [
  {
    type: "list",
    boldLabels: true,
    items: [
      "Role: UX Research & Product Design (solo)",
      "Timeline: May 2024 - Oct 2024",
      "Tools: Figma, Notion, Google Doc",
    ],
  },
  {
    type: "paragraph",
    boldLabel: true,
    text: "The spark: For three years I've been reading books with a friend who lives in another country. Staying in sync is harder than it sounds — one of us always falls behind. BookTree's read-together feature is a direct answer to that: a way to read the same book together, in real time or async, no matter the distance.",
  },

  { type: "heading", text: "Objective" },
  {
    type: "paragraph",
    text: "The objective of this research is to understand users deeper than their needs and preferences. It enables me to gain comprehensive knowledge of their immediate frustrations, limitations, abilities, and goals. In order for me to develop a successful product, it is critical to build a research plan before starting the research phase.",
  },

  { type: "heading", text: "Project Background" },
  {
    type: "paragraph",
    text: "This project is all about creating a new online space for book lovers, and it aims to make a place where people can discover new books, write reviews, and make lists of their choice, mainly focused on community interaction and engagement. BookTree wants to stand out by making it easy for people to connect. It could be through book clubs, chat forums, or a read-together feature for shared reading experiences, which is one of the main focuses of this project. Let's delve into this “read-together” idea. It came from a real need. I've been reading books with a friend who lives in another country for the past three years. It's tricky to keep up with each other and sometimes one of us falls behind. That got me thinking: what if there was a better way to do this?",
  },
  {
    type: "paragraph",
    text: "So, BookTree will feature a tool allowing you and your friend to read the same book simultaneously, no matter the distance. It's a solution to simplify shared reading, especially when life gets a bit busy. Why this project? I love books, and this idea came from my own experiences. I want to make a platform that I would enjoy using, and I'm certain others will too. BookTree is about connecting book lovers, making it simple to share the joy of reading, and building a community that loves books as much as I do.",
  },

  { type: "heading", text: "Research Goals" },
  {
    type: "list",
    ordered: true,
    items: [
      "Understand the market of platforms related to books",
      "Identify target audience of BookTree",
      "Explore usage patterns of shared reading feature",
      "Determine main competitors’ strengths and weaknesses",
      "Gather feedback on reading progress tracking",
      "Investigate platform accessibility",
    ],
  },

  { type: "heading", text: "Research Questions" },
  {
    type: "list",
    ordered: true,
    items: [
      "Who is the target audience of BookTree?",
      "What features do users find most valuable in book related platforms?",
      "Have users previously engaged in collaborative reading experiences?",
      "Who are the main competitors of BookTree, and how do they serve readers?",
      "What challenges do users face when reading together with friends?",
      "How intuitive should the collaborative reading feature be for users of varying technical proficiency?",
      "What motivates users to engage in community activities related to books?",
    ],
  },

  { type: "heading", text: "Assumptions" },
  {
    type: "list",
    ordered: true,
    items: [
      "Book lovers are the main users of book social and inventory platforms",
      "Users are likely to express interest in the concept of shared reading experiences with friends.",
      "Users may face challenges in coordinating reading progress with friends due to differences in reading speeds and schedules.",
      "Users are likely to want enhanced social interactions related to books.",
      "Users will likely have positive feedback to community features such as book clubs, discussion forums, and read-together initiatives.",
      "Users may see a read-together feature as a valuable addition to the platform, addressing a common challenge in shared reading experiences.",
    ],
  },

  { type: "heading", text: "Methodologies" },
  {
    type: "list",
    label: "Secondary Research",
    items: [
      "Market Research: Understand the platforms related to books, as well as the target audience.",
      "Competitive Analysis: Learn how the main competitors of BookTree are catering to their users’ needs, as well as their strengths and weaknesses.",
    ],
  },
  {
    type: "list",
    label: "Primary Research",
    items: [
      "User Interview (5–10 people): Understand how people are utilizing existing book related platforms, how they interact within the community, and how they read books together with friends.",
    ],
  },

  { type: "heading", text: "Participants" },
  { type: "list", items: ["Age between 16–56", "Most are book lovers"] },

  { type: "part", text: "Part I: Research" },

  { type: "heading", text: "Market Research" },
  {
    type: "paragraph",
    text: "It is substantial to get a bigger picture and understanding of the market by starting with market research. It helps identify the target audience, their preferences, and behaviors. This step is important for UX researchers to design user-centric experiences crafted to the needs and expectations of the target market. The insights gathered from this will help me create provisional personas and identify significant questions in my primary research.",
  },

  { type: "heading", text: "Book Industry & Platforms" },
  {
    type: "list",
    items: [
      "Overall: In recent years, the book industry has undergone transformational changes, witnessing a surge in digital consumption with the growing popularity of ebooks and audiobooks. As of 2022, the publishing industry market exhibited a steady growth and was expected to rise in the foreseeable future. The global market for book publishers is anticipated to rise substantially between the years 2023 and 2030 (Technological Updated News).",
      "Generally, there are two main kinds of platforms for people who like to read: an e-reader (a kindle, apple books, moon reader), and an app for ebooks with an online store to purchase books (The Mind Studios).",
      "When it comes to social book platforms, almost 40% of avid readers post book reviews and discussions on social media and book-related websites, and 30.70% of them browse online bookstores to purchase books (Wordsrated).",
    ],
  },

  { type: "heading", text: "Demographics" },
  {
    type: "list",
    items: [
      "Overall: people with higher income, who are millennials (ages 26-40), and are women are more likely to be readers (Wordsrated).",
      "Reading is still popular across all age groups. However, Millenials are the ones who read the most, with 80% of them having read a book in the last 12 months (Books of Brilliance).",
      "On average, people who make a yearly income of $75,000 are more likely to read one or more books every year, and most people making less than $30,000 a year are less likely to read one book a year (Cross river therapy).",
      "Women tend to read more books than men, by being 13% more likely to have read a book in the past year (Pew Research).",
    ],
  },

  { type: "heading", text: "Reading Habits" },
  {
    type: "list",
    items: [
      "Overall: during the past decade, reading has fluctuated significantly in the US, and the average time spent reading per day amounted to 15.6 minutes in 2022 (Statista).",
      "Physical books are still the most popular way to read than e-books or audiobooks in 2023. However, Americans who read digital books have read more books in 2023 than those who read in other mediums (YouGov).",
      "On average, frequent readers read books for the joy of reading itself. It comes from entertainment, enjoyment, education, escape, and the way it eases life in a stressful world (Pew Research).",
    ],
  },

  { type: "heading", text: "Competitive Research" },
  {
    type: "paragraph",
    text: "It is crucial to analyze the competition, identify opportunities, and find edges as a part of an extensive UX research. Competitive research is essential for UX researchers to identify successful design patterns and best practices, and can help them stay ahead of the curve and incorporate innovative features into their designs. The results of this research will help me make informed design decisions, stay competitive in the market, and ultimately, deliver better user experiences.",
  },
  {
    type: "paragraph",
    text: "For this part of the project, I decided to explore three top rated applications related to book social platforms and compare key features to identify problems they address.",
  },
  {
    type: "competitor",
    name: "Goodreads",
    strengths: [
      "Search by author, title, or ISBN",
      "Multiple ways of recommending new books",
      "Track the reading progress",
      "Scan to add the book",
      "Personalized recommendations",
    ],
    weaknesses: [
      "Unrelated searching results",
      "Interface is too complex and hard to use as beginners",
      "Outdated design and inconsistent user experience",
      "Limited functionalities of social aspect",
      "Too many distracting advertisements",
    ],
  },
  {
    type: "competitor",
    name: "BookBub",
    strengths: [
      "Simple and user friendly interface",
      "Multiple ways of recommending new books",
      "Personal preferences of genres",
      "Provide deals on e-books",
    ],
    weaknesses: [
      "Provide e-books only",
      "Some functions are only available on the desktop",
      "Unable to search by author",
      "Overwhelming email frequency",
      "Limited social feature",
    ],
  },
  {
    type: "competitor",
    name: "LibraryThing",
    strengths: [
      "Large catalog of books",
      "Also catalog movies and music",
      "Free service until 200 items",
      "Group for discussion and other social features",
    ],
    weaknesses: [
      "Overwhelming range of features and customization options that make it complex",
      "Unrelated searching results",
      "Unable to manually add categories",
      "Limited sorting options",
    ],
  },

  { type: "heading", text: "Provisional Persona" },
  {
    type: "paragraph",
    text: "Using the data gathered from market research, I developed provisional personas that represent potential users of BookTree. They capture key characteristics and behaviors of users based on the collected data. By creating these personas, I aim to better understand and empathize with my target audience, enabling me to identify and select appropriate individuals for interviews.",
  },
  {
    type: "persona",
    name: "The Social Book Lover",
    groups: [
      {
        label: "Goals",
        items: [
          "Connect with like-minded readers",
          "Discover new books and authors",
          "Engage in meaningful discussions about books",
        ],
      },
      {
        label: "Challenges",
        items: [
          "Limited time to attend physical club meetings",
          "Difficulty in finding new books that align with their interests",
          "Desire for a platform that offers a variety of genres and authors",
        ],
      },
    ],
  },
  {
    type: "persona",
    name: "The Book Adventurer",
    groups: [
      {
        label: "Goals",
        items: [
          "Discover unique books and authors",
          "Share their thoughts and reviews on books",
          "Keep up to date with what’s trending",
        ],
      },
      {
        label: "Challenges",
        items: [
          "Finding book clubs that align with his interests",
          "Have a hard time finishing a book with too many book commitments",
          "Spend time reading unreliable reviews",
        ],
      },
    ],
  },
  {
    type: "persona",
    name: "The Calm Reader",
    groups: [
      {
        label: "Goals",
        items: [
          "Get book recommendation from friends",
          "Read reviews and ratings of books before reading",
          "Improve reading habits with read-together feature",
        ],
      },
      {
        label: "Challenges",
        items: [
          "Limited time to explore new books",
          "Get overwhelmed with endless recommendations",
          "Ending up finding books that don’t match their expectations",
        ],
      },
    ],
  },

  { type: "heading", text: "Primary Research: User Interview" },
  {
    type: "paragraph",
    text: "Building on a general understanding of the market and the audience, I continued to dive deeper and build a real connection with possible users, to gain direct insights on them by primary research.",
  },
  {
    type: "paragraph",
    text: "In total, 6 participants took part in a user survey I conducted about using book social platforms and reading books in general.",
  },

  { type: "heading", text: "Assumptions Validated" },
  {
    type: "list",
    items: [
      "Book lovers are the main users of book social and inventory platforms — Validated. 5/6 participants said they use some kind of book social and inventory platform.",
      "Users are likely to express interest in the concept of shared reading experiences with friends — Validated. 4/6 users expressed interest in sharing experiences with friends online.",
      "Users may face challenges in coordinating reading progress with friends due to differences in reading speeds and schedules — Validated. 4/6 participants said they do face challenges in coordinating reading progress with friends.",
      "Users are likely to want enhanced social interactions related to books — Validated. 5/6 participants expressed they want better social interactions and community groups related to books.",
      "Users will likely have positive feedback to community features such as book clubs, discussion forums, and read-together initiatives — Validated. 5/6 users said that they would like to use a platform that has extensive social features.",
      "Users may see read-together features as a valuable addition to the platform, addressing a common challenge in shared reading experiences — Validated. 5/6 participants said it would be nice to be able to track your friends’ progress when reading together.",
    ],
  },

  { type: "heading", text: "Research Synthesis" },
  { type: "heading", text: "Empathy Map" },
  {
    type: "paragraph",
    text: "To analyze the qualitative data collected from user interviews, I created an empathy map to identify recurring patterns among users, enabling me to uncover deeper insights and understand their needs more comprehensively.",
  },
  {
    type: "image",
    src: `${IMG}/empathy-map-1.png`,
    alt: "Empathy map sticky notes grouped by interview participant, capturing what each said, thought, did, and felt",
    width: 1331,
    height: 795,
  },
  {
    type: "image",
    src: `${IMG}/empathy-map-2.png`,
    alt: "Empathy map notes re-clustered into themes: easy to use, book recommendations, pretty UI design, writing reviews and social interactions, discovering new books, tracking progress, and reading with a friend",
    width: 1404,
    height: 783,
  },
  { type: "divider" },

  { type: "heading", text: "Insights" },
  {
    type: "list",
    items: [
      "Users look for a platform that’s easy to use and is designed well.",
      "Users usually find book recommendations from social media and google search.",
      "Users look at reviews and length of books before deciding to read them.",
      "Users like to share their thoughts about a book on social media and connect with like-minded readers.",
      "Users read books with their friends.",
    ],
  },
  { type: "heading", text: "Needs" },
  {
    type: "list",
    items: [
      "Users need a platform that’s easy to use and nice to look at.",
      "Users need an easier way to find recommendations based on what they like.",
      "Users need to know if the book is worth reading and meets their time constraint.",
      "Users need an easy way to find book clubs and groups with members that have similar interests.",
      "Users need a feature that allows them to read a book with friends.",
    ],
  },

  { type: "heading", text: "User Persona" },
  {
    type: "paragraph",
    text: "Now that I have analyzed the data gathered from the audience, I now have the information about their goals and needs that I can use to create a persona that represents the main user group. This will help me focus on solving the most significant problems and address major needs of important user groups.",
  },
  {
    type: "persona",
    name: "Gracie",
    meta: "Age 24 · Data Analyst",
    bio: "Gracie is a Data Analyst who enjoys reading in her free time, and she sees reading books as a way to relax and take a break from the real world. Despite having a busy work schedule, she always makes time to read books. She also enjoys discussing them with others and discovering new books online. With her reading time being limited, she is looking for a platform where she can connect with other book lovers, discover new books quickly, and participate in discussions at her convenience.",
    groups: [
      {
        label: "Goals",
        items: [
          "Find a platform to connect with like-minded readers.",
          "Discover new books based on recommendations.",
          "Join book clubs to discuss books.",
          "Participate in read-together activities to motivate her reading habits.",
          "Share her thoughts and reviews on books she has read.",
        ],
      },
      {
        label: "Frustrations",
        items: [
          "Limited time to attend physical book club meetings",
          "Difficulty in discovering new books that align with her interests.",
          "Engaging in discussions with others who have similar tastes.",
        ],
      },
      {
        label: "Needs",
        items: [
          "Easy to use platform to discover and discuss books.",
          "Ability to connect with other readers and join book clubs.",
          "Recommendations based on her reading preferences.",
          "Read with a friend feature to motivate her reading habits.",
          "Ability to see how much time she has to commit when choosing a book.",
        ],
      },
      {
        label: "Motivations",
        items: [
          "Connecting with a community of book lovers.",
          "Discovering new books and authors.",
          "Engaging in meaningful discussions about books.",
        ],
      },
    ],
  },

  { type: "part", text: "Part II: Strategy" },

  { type: "heading", text: "How Might We…" },
  {
    type: "hmw",
    rows: [
      {
        insight:
          "Users look for a platform that’s easy to use and is designed well.",
        need: "Users need a platform that’s easy to use and nice to look at.",
        pov: "Users need a user-friendly platform that’s easy to navigate through and pleasing to the eyes.",
        hmw: "How might we ensure that users find our platform’s design visually appealing and intuitive?",
      },
      {
        insight:
          "Users usually find book recommendations from social media and google search.",
        need: "Users need an easier way to find recommendations based on what they like.",
        pov: "Users need an easier and better way to discover recommendations based on what they like and rely less on social media and manual searches.",
        hmw: "How might we ensure that users experience an enhanced recommendation system that provides more personalized book suggestions?",
      },
      {
        insight:
          "Users look at reviews and length of books before deciding to read them.",
        need: "Users need to know if the book is worth reading and meets their time constraint.",
        pov: "Users need to know if they will be able to fully commit to a book and make sure it fully fits their interests.",
        hmw: "How might we ensure that users find books that are worth their time and meet expectations?",
      },
      {
        insight:
          "Users like to share their thoughts about a book on social media and connect with like-minded readers.",
        need: "Users need an easy way to discover book clubs and groups with members who have similar interests.",
        pov: "Users need an easy and straightforward way to discover book clubs and communities to connect with like-minded readers who share their interests.",
        hmw: "How might we enable users to easily share their reading experiences and connect with others who share their interests?",
      },
      {
        insight: "Users read books with their friends.",
        need: "Users need a feature that allows them to read a book with friends.",
        pov: "Users need a way that enables them to read books together with their friends and track each others’ progress.",
        hmw: "How might we develop a feature that enables users to read books together with friends on our platform?",
      },
    ],
  },
  {
    type: "paragraph",
    text: "I took these questions and brainstormed solutions for each. I dedicated a few minutes to each HMW question, resulting in my final brainstormed results:",
  },
  {
    type: "image",
    src: `${IMG}/hmw-brainstorm.png`,
    alt: "Mind map of brainstormed solutions branching from each of the five How Might We questions",
    width: 1043,
    height: 773,
  },
  { type: "divider" },

  { type: "heading", text: "Product Goals" },
  {
    type: "image",
    src: `${IMG}/product-goals.png`,
    alt: "Venn diagram of business goals and user goals overlapping on enhancing user experience, increasing engagement, driving satisfaction and loyalty, differentiating from competitors, and boosting acquisition and retention",
    width: 1180,
    height: 810,
  },
  {
    type: "paragraph",
    text: "To guide the development of BookTree, I have defined project goals based on the HMW questions and brainstorming results. These goals will help determine the platform’s feature set. I have also extracted user goals from the persona and empathy map, aligning them with the project’s business objectives.",
  },

  { type: "heading", text: "Product Roadmap" },
  {
    type: "paragraph",
    text: "When creating a product roadmap, I began by transforming my brainstormed solutions into a list of product features. This roadmap categorized features into four groups: Must-Have (P1), Nice-to-Have (P2), Surprising and Delightful (P3), and Can-Come-Later (P4). The categorization was based on how effectively each feature could help achieve both business and user goals of the product.",
  },
  {
    type: "paragraph",
    text: "The product roadmap not only integrates project goals into our product but also prioritizes the most critical features for development.",
  },
  {
    type: "paragraph",
    text: "View the product roadmap here.",
    link: {
      label: "Product roadmap (Airtable)",
      href: "https://airtable.com/appv87dff5ECxWYIW/shrLptqPFjNKYvd7W",
    },
  },

  { type: "heading", text: "Application Map" },
  {
    type: "image",
    src: `${IMG}/application-map.png`,
    alt: "Application map / sitemap showing the Home, Library, Explore, Search, and Me sections and their sub-screens",
    width: 1105,
    height: 1098,
  },
  {
    type: "paragraph",
    text: "After establishing the product goals and determining the features to include, I developed the structure of BookTree further by using an application map. This tool helps me visualize the relationship between its content and allows me to analyze its hierarchy.",
  },

  { type: "part", text: "Part III: Design" },

  { type: "heading", text: "Task Flow" },
  {
    type: "paragraph",
    text: "To help with user navigation and clarify the main user flows of the application, I developed three task flows focusing on key features of BookTree. This approach helped me define my design goals, outline the necessary steps, and analyze the user experience in detail.",
  },
  { type: "divider" },
  {
    type: "image",
    src: `${IMG}/task-flow.png`,
    alt: "Three task flow diagrams: adding a book to the Want to Read list, reading a book with a friend, and writing a review",
    width: 1167,
    height: 785,
  },

  { type: "heading", text: "User Flow" },
  {
    type: "paragraph",
    text: "Expanding on the task flow, I created user journeys that align with the defined tasks. This approach allows me to empathize with the user, considering various scenarios they might face.",
  },
  {
    type: "image",
    src: `${IMG}/user-flow.png`,
    alt: "Detailed user flow diagram with decision points across exploring, searching, reading, and reading-together journeys",
    width: 1075,
    height: 883,
  },
  { type: "divider" },

  { type: "heading", text: "Wireframe" },
  {
    type: "paragraph",
    text: "Using the task and user flows, I then created a UI Requirement Document that includes a to-do-list for designing key UI interfaces. I used this document to start sketching low-fidelity wireframes. Sketching allows me to quickly capture my ideas, enabling me to put them together easily before moving on to the more complex digitization process.",
    link: {
      label: "UI Requirement Document",
      href: "https://docs.google.com/document/d/1fMPqqu8j7x2KbD6cKmUb6gJGDtVWyYdPCfybuWUWULE/edit",
    },
  },
  {
    type: "image",
    src: `${IMG}/wireframes-lofi.png`,
    alt: "Low-fidelity wireframe sketches for Home, Search, Book Details, My Library, Explore, and My Account screens",
    width: 2018,
    height: 2048,
  },

  { type: "heading", text: "Mid-Fidelity Wireframes" },
  {
    type: "paragraph",
    text: "After creating the initial visual layout, I enhanced my sketches and developed mid-fidelity wireframes. This step allowed me to refine the details and structure of my design before adding styles. By focusing on visual consistency and hierarchy, I ensured a solid foundation for the final design.",
  },
  {
    type: "image",
    src: `${IMG}/wireframes-midfi.png`,
    alt: "Mid-fidelity wireframes for Home, search results, Book Details, notifications, the e-book reader, and Read with a Friend screens",
    width: 2048,
    height: 1372,
  },
  {
    type: "paragraph",
    text: "In these wireframes, I integrated proven design patterns from the competitors’ products and included elements that specifically address users’ goals, needs, frustrations, and motivations.",
  },

  { type: "heading", text: "Branding" },
  {
    type: "paragraph",
    text: "Before I began designing the logo and style tiles, I created a mood board on Pinterest with a collection of images, colors, and styles that inspired me which also aligned with the project’s goals. Gathering these ideas in one place helped me visualize and shape the design direction, ensuring that the final designs would meet the project brief’s requirements:",
    link: { label: "Mood board (Pinterest)", href: "https://pin.it/4515kyjWB" },
  },
  {
    type: "list",
    items: [
      "Passionate: passionate about books and believe in the power of storytelling to inspire, educate, and connect all users.",
      "Informative: up-to-date with the latest book releases, news, and author interviews. BookTree aims to keep its users informed and engaged in the world of literature.",
      "Friendly: in BookTree, every reader is a friend. It offers a diverse community to share thoughts, discover new books, and connect with fellow book lovers in a friendly and welcoming environment.",
      "Creative: BookTree aims to be a world of imagination and creativity.",
    ],
  },

  { type: "heading", text: "Style Tile" },
  {
    type: "paragraph",
    text: "I further refined BookTree’s visual style using the style tile. This document synthesizes the brand’s ideas and inspirations, incorporating elements such as logo design, color palette, and typography. This serves as a guiding reference for the future UI design.",
  },
  {
    type: "image",
    src: `${IMG}/style-tile.png`,
    alt: "BookTree style tile with logo lockups, typography specimens, and the brand color palette",
    width: 947,
    height: 612,
  },

  { type: "heading", text: "UI Kit" },
  {
    type: "paragraph",
    text: "The UI Kit is a comprehensive collection of an application’s current UI elements, serving as a reference for future design projects and team collaboration. As a living document, it will be updated regularly to reflect the latest design iterations.",
  },
  {
    type: "image",
    src: `${IMG}/ui-kit.jpeg`,
    alt: "BookTree UI kit showing logo, typography, color palette, buttons, cards, and other components",
    width: 1458,
    height: 1522,
  },

  { type: "heading", text: "Mid-Fidelity Prototype" },
  {
    type: "paragraph",
    text: "Once I completed designing the essential screens for users to complete tasks, I created a mid-fidelity prototype using Figma for usability testing. This approach is valuable as it helps identify issues in information architecture and user flows early in the design process, before investing a significant time in high-fidelity designs.",
  },
  {
    type: "list",
    label: "Tasks include",
    ordered: true,
    items: [
      "Search “Tuesdays with Morrie” and mark as “Want to Read”.",
      "Invite a friend to read “Tuesdays with Morrie” together, and start reading.",
      "Rate and write a review for “Tuesdays with Morrie”",
    ],
  },

  { type: "part", text: "Part IV: Prototype and Test" },

  { type: "heading", text: "Prepare for the Usability Testing" },
  {
    type: "paragraph",
    text: "Prior to conducting usability testing, it’s crucial to establish clear test objectives, define the test subjects, outline the methodology, specify tasks, and set rubrics for measuring test results. To achieve this, I crafted a usability testing plan to delineate the objectives and rationale behind the testing, ensuring thorough preparation.",
    link: {
      label: "Usability testing plan",
      href: "https://docs.google.com/document/u/1/d/12u_WTs7CpqhHGOJpk8JNdpy68iICuXM0TlB2urpFYKM/edit",
    },
  },
  {
    type: "paragraph",
    text: "I anticipate a 100% completion rate for all tasks, as they represent typical steps for using an e-reader mobile application. However, due to the prototype’s incomplete functionality, I expect a 90% error-free rate, recognizing that users may need to resort to alternative methods not yet implemented in the prototype to accomplish tasks.",
  },

  { type: "heading", text: "Conduct Usability Testing" },
  {
    type: "paragraph",
    text: "I conducted usability testing with five participants, both in-person and remotely. For each participant, I observed their interactions with the prototype and created a results document. This document captured their completion and error rates, time it took them to complete each task, and comments they have provided.",
    link: {
      label: "Usability testing results",
      href: "https://docs.google.com/document/d/19nYF3kLvF1E-EA8TKjbIkBxcOjIACUAgrUXMUysEzyY/edit?usp=sharing",
    },
  },

  { type: "heading", text: "Key Findings" },
  {
    type: "list",
    ordered: true,
    items: [
      "Search Functionality: Participants found the search feature intuitive and quick to use. The “Want to Read” button was easily identifiable.",
      "Inviting Friends: Several participants found the process of inviting friends to read together somewhat confusing. The invite option needs to be more prominent.",
      "Rating and Reviewing: The rating and review process was generally well-received. Minor issues included confusion about editing reviews and the rating stars’ functionality.",
    ],
  },

  { type: "heading", text: "Recommendations" },
  {
    type: "list",
    ordered: true,
    items: [
      "Enhance Search Bar Visibility: Make the search bar more prominent to improve the user experience.",
      "Improve Invite Friend Process: Simplify and highlight the invite friend feature to make it more intuitive.",
      "Review Editing: Provide clear options for users to edit their reviews after posting.",
      "Consistent UI Elements: Ensure consistency in UI elements like rating stars to avoid confusion.",
    ],
  },

  { type: "heading", text: "Conclusion" },
  {
    type: "paragraph",
    text: "The usability testing revealed that the app is generally user-friendly, with intuitive search and rating functionalities. However, improvements can be made to the inviting friends process and review editing options to enhance the overall user experience.",
  },

  { type: "heading", text: "High-Fidelity Wireframes and Prototype" },
  {
    type: "paragraph",
    text: "I created high-fidelity wireframes using established styles, allowing me to assess the application’s overall aesthetic and visual balance.",
  },
  {
    type: "embed",
    src: "https://embed.figma.com/proto/L3FIhr8CyMtiNEoswvCQHi/OfBook-Mobile?node-id=217-2971&p=f&viewport=339%2C413%2C0.23&scaling=scale-down&content-scaling=fixed&starting-point-node-id=217%3A2971&page-id=213%3A2425&embed-host=share",
    title: "BookTree high-fidelity prototype",
    width: 800,
    height: 450,
  },
];
