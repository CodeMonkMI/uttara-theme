import "@testing-library/jest-dom";
import img1 from "images/blog/1.png";
import Blog from "./Blog";
const { render, screen } = require("@testing-library/react");

const blog = {
  id: "",
  title: "Those Other College Expenses You Are not Thinking About",
  text: "we believe everyone should have the to create progress through and develop the skills of tomorrow. assessments, learning paths and courses authored.",
  image: img1,
  postedBy: "EduGood",
  url: "/",
  date: new Date("15/11/2024").toLocaleDateString(),
};

describe("Single blog", () => {
  test("renders the blog title", () => {
    render(
      <Blog
        title={blog.title}
        text={blog.text}
        image={blog.image}
        postedBy={blog.postedBy}
        date={blog.date}
        url={blog.url}
      />
    );
    const titleElement = screen.getByText(blog.title);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders the blog image", () => {
    render(
      <Blog
        title={blog.title}
        text={blog.text}
        image={blog.image}
        postedBy={blog.postedBy}
        date={blog.date}
        url={blog.url}
      />
    );
    const testImage = document.querySelector("img");
    expect(testImage.alt).toBe(blog.title);
    expect(testImage.src).toContain(blog.image);
  });
  test("renders the blog text", () => {
    render(
      <Blog
        title={blog.title}
        text={blog.text}
        image={blog.image}
        postedBy={blog.postedBy}
        date={blog.date}
        url={blog.url}
      />
    );
    const textElement = screen.getByText(blog.text);
    expect(textElement).toBeInTheDocument();
  });
  test("renders the blog posted by", () => {
    render(
      <Blog
        title={blog.title}
        text={blog.text}
        image={blog.image}
        postedBy={blog.postedBy}
        date={blog.date}
        url={blog.url}
      />
    );
    const text = `Posted By: ${blog.postedBy}`;
    const postedByElement = screen.getByText(text);
    expect(postedByElement).toBeInTheDocument();
  });
  test("renders the blog date", () => {
    render(
      <Blog
        title={blog.title}
        text={blog.text}
        image={blog.image}
        postedBy={blog.postedBy}
        date={blog.date}
        url={blog.url}
      />
    );
    const dateElement = screen.getByText(blog.date);
    expect(dateElement).toBeInTheDocument();
  });
});
