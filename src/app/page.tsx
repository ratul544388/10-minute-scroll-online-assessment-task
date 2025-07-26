import { redirect } from "next/navigation";


const Home = () => {
  // Redirect home page to the actual product page for assessment clarity.
  // The project scope includes only the IELTS Course product page.

  redirect("/products/ielts-course");
};

export default Home;
