import { comments } from "@/Invoice comments/Comments";
import { text } from "stream/consumers";

export async function GET() {
return new Response("Customer Tracking Page");

}
export async function Post(request: Request){
    await request.json();
    const newComment = {
        id: comments.length +1, 
        text: comments.text,
    };
    comments.push(newComment);
    return new Response(JSON.stringify(newComment),{
        headers:{"content-Type": "application/json"},
        status:201,
    }
)
}