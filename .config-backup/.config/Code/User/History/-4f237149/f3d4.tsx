export default function Home() {
  return (
    <div className="flex min-h-screen p-10 justi bg-neutral-50 text-neutral-950">
      <div className="space-y-10">
        <h1 className="font-black text-7xl">Keycloak Test</h1>

        <div className="space-y-3 text-4xl">
          <h3>User is Authenticated</h3>
          <h3>User is Not Authenticated</h3>
        </div>
      </div>
    </div>
  );
}
