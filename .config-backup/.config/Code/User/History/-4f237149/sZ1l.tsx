import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen p-10 bg-neutral-50 text-neutral-950">
      <div>
        <h1 className="font-bold text-5xl uppercase">Keycloak Test</h1>
        <h1>User is Authenticated</h1>
        <h1>User is Not Authenticated</h1>
      </div>
    </div>
  );
}
