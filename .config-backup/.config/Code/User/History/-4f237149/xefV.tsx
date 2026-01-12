
export default function Home() {
  return (
    <div className="flex min-h-screen p-10 justify-center items-center text-center bg-neutral-50 text-neutral-950">
      <div className="space-y-10">
        <h1 className="font-black text-7xl">Keycloak Test</h1>

        <div className="space-y-3 text-4xl">
          <h3 className="text-green-500 font-semibold">User is Authenticated</h3>
          <h3 className="text-red-500 font-semibold">User is Not Authenticated</h3>
        </div>
      </div>
    </div>
  );
}
