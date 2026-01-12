export const Feature = ({ icon, title, desc }) => (
  <div>
    <div className="flex items-center gap-2 text-lg font-semibold">
      {icon}
      <h3>{title}</h3>
    </div>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
);
