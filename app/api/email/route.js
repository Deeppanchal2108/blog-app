import Email from "@/lib/model/emailModel";
import connectdb  from "@/lib/config/connectdb";
import {  NextResponse } from "next/server";

const loadb = async () => {
    await connectdb();
    console.log("Connection Suuccessfully Done")
}
loadb();

export async function POST(request) {
    const formData = await request.formData();
    const emailData = {
        email:formData.get("email")
    }
    await Email.create(emailData);
    return NextResponse.json({success:true,msg:"Successfully Login"})
}

export  async function GET(request) {
    try {
        const emails = await Email.find({});
        return NextResponse.json({success:true, msg:"Successfully Fetched",emails})
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Failed to fetch emails', 
        });
    }
}
export async function DELETE(request) {

    try {
        const id = await request.nextUrl.searchParams.get('id');
      const deleteEmail=  await Email.findByIdAndDelete(id);
        return NextResponse.json({success:true,msg:"Deleted Successfully"})
    } catch (error) {
        return NextResponse.json({ success: false, msg: "Something went wrong " })

    }
}