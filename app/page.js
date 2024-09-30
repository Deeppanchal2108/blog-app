
import Header from "@/components/Header";
import BlogList from "@/components/BlogList";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Home() {
  return (
    <div>
      <ToastContainer theme="dark" />
      <Header />
      <BlogList />
   
  </div>
  );
}