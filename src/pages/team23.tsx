import Main from "src/layout/Main";
import Link from "next/link"

const Team23 = () => {
  return (
    <Main title="Airbills Team Links">
      <div className="prose text-white my-6 prose-a:text-slate-300 prose-a:underline-offset-8">

        <ol className="text">
          <li>
            <Link href={"https://airbills.notion.site/Formula-Airbills-6271f8ceca7d4d09a900654c311416ce?pvs=4"} target="_blank" className="underline underline-offset-8">
              Formula Airbills Notion Page
            </Link>
          </li>
          <br />
          <li>
            <Link href={"https://formula.airbills.xyz"} target="_blank" className="underline underline-offset-8">
              Formula Airbills Blog
            </Link>
          </li>
          <br />
          <li>
            <Link href={"https://shop.airbills.xyz"} target="_blank" className="underline underline-offset-8">
              Airbills Shop
            </Link>
          </li>
        </ol>


      </div>
    </Main>
  )
}

export default Team23;
