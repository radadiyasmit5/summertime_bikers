import {NextApiRequest, NextApiResponse} from "next"
import {NextRequest, NextResponse} from "next/server"

import {register, collectDefaultMetrics} from "prom-client"

collectDefaultMetrics({prefix: "web_server_"})

export async function GET() {
  const response = await register.metrics()
  const header = {
    "Content-type": register.contentType,
    "Cache-Control": "no-store",
  }
//   NextResponse.setHeader("Content-type", register.contentType)
//   NextResponse.setHeader("Cache-Control", "no-store")
//   NextResponse.send()
return NextResponse.json(response,{headers:header})
}
