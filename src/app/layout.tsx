export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("layout.tsx rendered==========>")
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
