import { DEVICONS } from "../../data/devicons"
import { SectionTitle } from "../section-title"

export const Skills = () => {
  return (
    <div className="container m-auto flex flex-col py-20">
      <SectionTitle title="Technologies" />
      <div className="flex flex-row flex-wrap px-10 py-10 gap-[4rem] justify-center items-center">
        {DEVICONS?.map?.((skill) => (
          <img src={skill?.link} alt={skill?.name} title={skill?.name} loading="lazy" width="75px" height="75px" />
        ))}
      </div>
    </div>
  )
}