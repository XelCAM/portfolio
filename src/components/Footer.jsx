
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <div className="container mx-auto">
        <p className="text-sm">
          Made by Charles Axel Morante &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
