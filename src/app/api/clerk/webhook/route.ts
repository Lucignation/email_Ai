import { db } from "@/server/db";

// /api/clerk/webhook
export const POST = async (req: Request) => {
  const { data }: any = await req.json();
  const firstName = data.first_name;
  const lastName = data.last_name;
  const email = data.email_addresses[0].email_address;
  const imageUrl = data.image_url;
  const id = data?.id;

  await db.user.create({
    data: {
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      imageUrl: imageUrl,
    },
  });

  console.log("User created");
  return new Response("Webhok received", { status: 200 });
};
