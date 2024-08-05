export default async function Company({ params: { id } }) {
  const data = getCompanyData(id);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{data}</h1>
    </main>
  );
}

export const getCompanyData = async (id) => {
  // Fetch data from external API
  return `Đây là công ty ` + id;
};
