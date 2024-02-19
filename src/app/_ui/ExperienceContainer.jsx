export default function ExperienceContainer({ experience }) {
  return (
    <div className="text-slate-400">
      <h3 className="font-bold text-xl text-slate-200">
        {experience.title} at <span>{experience.organisation}</span>
      </h3>
      <h6>{experience.date}</h6>
      <ul className="mt-4">
        {experience.details.map((detail) => (
          <ListItem key={detail} description={detail} />
        ))}
      </ul>
    </div>
  );
}

function ListItem({ description }) {
  return (
    <li className="mt-2">
      <div className="flex gap-3">
        <span className="text-xs mt-1 text-teal-200 font-bold">&lt;/&gt;</span>
        <p>{description}</p>
      </div>
    </li>
  );
}
