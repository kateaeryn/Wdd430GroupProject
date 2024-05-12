

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col bg-green bg-opacity-50 overflow-hidden">
     
      <div className="flex-grow p-12 overflow-y-auto ">{children}</div>
    </div>
  );
}