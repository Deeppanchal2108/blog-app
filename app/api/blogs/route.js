
import Blog from "@/lib/model/blogModel";
import { NextResponse } from "next/server";
import connectdb from "@/lib/config/connectdb";
import {writeFile} from "fs/promises"
const loadb = async () => {
    await connectdb();
    console.log("Connection Suuccessfully Done")
}
loadb();

export async function GET(req) {
    const id =await req.nextUrl.searchParams.get('id');
    if (id) {
        const blog = await Blog.findById(id);
        return NextResponse.json({ blog})

    } else {
        const blogs = await Blog.find({});
        return NextResponse.json({ blogs })
    }
}
export async function DELETE(req) {
    try {
        const id = await req.nextUrl.searchParams.get('id');
        const resp = await Blog.findByIdAndDelete(id);
        return NextResponse.json({ success: true, msg: "Blog deleted Successfully🤣🤣 " })

    } catch (error) {
        return NextResponse.json({ success: false, msg: "Something went wrong " })

    }
    
}
export async function POST(request) {
    try {
        const formData = await request.formData();
        const date = Date.now();
        const image = formData.get('image');
        const imageBytes = await image.arrayBuffer();
        const buffer = Buffer.from(imageBytes);
        const path = `./public/${date}_${image}`;
        await writeFile(path, buffer);
        const imageUrl = `/${date}_${image}`
        const blogData = {
            title: `${formData.get('title')}`,
            description: `${formData.get('description')}`,
            category: `${formData.get('category')}`,
            author: `${formData.get('author')}`,
            authorImg: `${formData.get('authorImg')}`,
            image: `${imageUrl}`,

        }
        await Blog.create(blogData);
        return NextResponse.json({ success: true, message: "Blog Added Successfully " });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Something went wrong" });

    }
    

}