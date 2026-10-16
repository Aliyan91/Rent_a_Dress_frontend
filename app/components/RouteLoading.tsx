export default function RouteLoading({ message }: { message: string }) {
  return (
    <main className="route-loading" role="status">
      {message}
    </main>
  );
}
