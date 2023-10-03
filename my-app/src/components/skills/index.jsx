import { DEVICONS } from "../../data/devicons"
import { SectionTitle } from "../section-title"

export const Skills = () => {
  return (
    <div className="mx-auto flex flex-col pt-20 pb-20">
      <SectionTitle title="Technologies" />
      <div className="flex flex-row flex-wrap px-10 py-10 gap-[4rem] justify-center items-center">
        {DEVICONS?.map?.((skill) => (
          <img src={skill?.link} alt={skill?.name} className="w-[75px] h-[75px]" />
        ))}
      </div>
    </div>
  )
}