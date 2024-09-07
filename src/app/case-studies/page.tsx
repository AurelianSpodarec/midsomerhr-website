import { getAllWork } from "@/lib/work"

async function WorkIndex() {
    let works = await getAllWork()
    console.log("WOWO", works)
  return (
    <div>
      HI
      {/* <div>
        Header Description
        Problem
        Situation
        Solution
      </div>
      <div>
        More work
      </div>
      <div>
        CTA
      </div> */}

      {works.map((work:any) => {
        return (
          <div key={work.slug}>
            {work.slug}
            {work.title}
          </div>
        )
      })}
    </div>
  )
}

export default WorkIndex
