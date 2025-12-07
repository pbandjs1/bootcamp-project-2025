export interface Blog {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}

const blogs: Blog[] = [
    {
        title: "The Office is amazing",
        date: "10/13/2025",
        description: "The Office TV Show is one of the best things ever created in the whole universe. I love it so much I watch it all the time. I live and breath the Office. It shows up in my dreams. I want to be Jim.",
        image: "/the_office.jpg",
        imageAlt: "office tv show boxset cover",
        slug: "office.html"
    },
    {
        title: "Mariners in 5",
        date: "10/13/2025",
        description: "Currently watching the Seattle Mariners go against the Toronto Blue Jays. I'm originally from the Seattle area, and watching them crush the Jays I truly believe they are gonna make it to the World Series.",
        image: "/mariners.png",
        imageAlt: "mariners logo",
        slug: "mariners.html"
    }
];

export default blogs;