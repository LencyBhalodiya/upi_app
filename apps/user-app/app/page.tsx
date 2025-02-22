import { PrismaClient } from "@repo/db/client"
const prisma = new PrismaClient();

export default function Home() {
  return (
    <div className="text-2xl" >hi there</div>
  )
}
