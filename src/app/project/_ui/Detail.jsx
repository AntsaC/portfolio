import { TopicItem } from "@/app/_ui/TopicSection";
import Title from "@/app/_ui/shared/Title";

export default function ProjectDetailContainer({ project }) {
  let code = project.code && (
    <div>
      <h4 className="text-emerald-600 text-xl mt-3">Code</h4>
      <div className="ml-2">
        {project.code.map((c) => (
          <h6 key={c}>
            <span>{c.label}</span>
            <a className="ml-2 text-blue-500" href={c.link}>
              {c.link}
            </a>
          </h6>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex-1 p-2 text-slate-200 mt-3">
      <Title title={project.name} />
      <p className="mt-4">{project.description}</p>
      <h4 className="text-emerald-600 text-xl mt-3">Features</h4>
      <ul className="list-disc ml-6">
        {project.features.map((feature) => (
          <li key={feature} className="mt-1">
            {feature}
          </li>
        ))}
      </ul>
      {code}
      <h4 className="text-emerald-600 text-xl mt-3">Technologies</h4>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-2 mt-3">
        {project.technologies.map((t) => (
          <TopicItem key={t} topic={t} />
        ))}
      </div>
    </div>
  );
}
