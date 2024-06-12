import { SlowComponent } from "../components/SlowComponent";

export default function LoadingPage() {
  return (
    <div>
      <p className="text-green-400">Loading your slow page...</p>
      <SlowComponent />
    </div>
  );
}
