import Link from "next/link";

export default function Page() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Owen Dirkes&#39; Portfolio
      </h1>
      <h2 className="text-xl mb-4">
        This is my React app to showcase my projects while I grow as a designer. 
        I am currently working on classwork for Cogs 125. Follow me on my journey!
      </h2>
      <h3 className="text-2xl font-bold mt-8">Projects</h3>
      <ul className="list-disc ml-6">
        <li>
          <Link href="/projects/1" className="text-blue-500 hover:underline">
            Goalee
          </Link>
        </li>
        <li>
          <Link href="/projects/2" className="text-blue-500 hover:underline">
            Eco-Defender
          </Link>
        </li>
        <li>
          <Link href="/projects/3" className="text-blue-500 hover:underline">
            85 Degrees Bakery Kiosk
          </Link>
        </li>
      </ul>
      <h3 className="text-2xl font-bold mt-8">About</h3>
      <ul className="list-disc ml-6">
        <li>
          <Link href="/about" className="text-blue-500 hover:underline">
            About Me
          </Link>
        </li>
      </ul>
    </div>
  );
}