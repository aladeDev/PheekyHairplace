type AdminSectionProps = {
  title: string;
  description: string;
  emptyMessage: string;
};

const AdminSection = ({
  title,
  description,
  emptyMessage,
}: AdminSectionProps) => {
  return (
    <section className="mx-auto max-w-[1600px] space-y-6">
      <header>
        <h1 className="font-serif text-3xl font-semibold text-dark">{title}</h1>
        <p className="mt-1 text-sm text-[#6b6258]">{description}</p>
      </header>
      <div className="rounded-xl border border-[#e3ddd8] bg-white p-6">
        <p className="text-sm text-[#6b6258]">{emptyMessage}</p>
      </div>
    </section>
  );
};

export default AdminSection;
