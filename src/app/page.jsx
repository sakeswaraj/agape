import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a simple React application using Tailwind CSS.
      </p>
      <Button
        className="  hover:bg-blue-600"
        variant={"destructive"}
        size={"lg"}
      >
        Click Me
      </Button>
    </div>
  );
}
