import { Suspense } from "react"
import Link from "next/link"
import Repo from "@/app/componets/Repo"
import RepoDirs from "@/app/componets/RepoDirs"

const RepoPage = ({ params: { name } }) => {
  return <div className="card">
    <Link href='/code/repos' className="btn btn-back">Back To Repositories</Link>
    <Suspense fallback={<div>loading repo...</div>}>
    <Repo name={name} />
    </Suspense>
    <Suspense fallback={<div>loading directories...</div>}>
    <RepoDirs name={name} />
    </Suspense>
    </div>
  
}

export default RepoPage
