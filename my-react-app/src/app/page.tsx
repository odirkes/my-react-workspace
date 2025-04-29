import Image from "next/image";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body suppressHydrationWarning>
        <h1 className='text-3x1 font-bold'>Hello! My name is Owen Dirkes, I'm an aspiring designer from San Diego!</h1>
        <h2>I'm currently working on classwork for Cogs 125. Follow me on my journey!</h2>
      </body>
    </html>
  )
}
