type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}

export const blogs: Blog[] = [
    {
        title: "The Office is amazing",
        date: "10/13/2025",
        description: "The Office TV Show is one of the best things ever created in the whole universe. I love it so much I watch it all the time. I live and breath the Office. It shows up in my dreams. I want to be Jim.",
        image: "the_office.jpg",
        imageAlt: "office tv show boxset cover",
        slug: "blogs/office.html"
    },
    {
        title: "Mariners in 5",
        date: "10/13/2025",
        description: "Currently watching the Seattle Mariners go against the Toronto Blue Jays. I'm originally from the Seattle area, and watching them crush the Jays I truly believe they are gonna make it to the World Series.",
        image: "mariners.png",
        imageAlt: "mariners logo",
        slug: "blogs/mariners.html"
    }
];

const blogContainer = document.getElementById('blog-container');
blogs.forEach((blog) => {
    // Container for blog elements
    const blogPostContainer = document.createElement("div");
    blogPostContainer.className = "blog-post";

    // Text Container
    const textContainer = document.createElement("div");
    textContainer.className = "blog-text-container"

    const title = document.createElement("h2");
    title.className = "blog-text"
    title.innerHTML = blog.title;
    textContainer.appendChild(title);

    const description = document.createElement("p");
    description.className = "blog-text"
    description.innerHTML = blog.description;
    textContainer.appendChild(description);

    // Image Container
    const imageContainer = document.createElement("div");
    imageContainer.className = "about-image";

    const slug = document.createElement("a");
    slug.href = blog.slug;
    imageContainer.appendChild(slug);

    const image = document.createElement("img");
    image.className = "about-image"
    image.src = blog.image;
    image.alt = blog.imageAlt;
    slug.appendChild(image);    

    // Apppend blog elements to the container
    blogPostContainer.appendChild(imageContainer);
    blogPostContainer.appendChild(textContainer);

    // Append container to the blog
    blogContainer?.appendChild(blogPostContainer);
});