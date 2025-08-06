export default function FAQPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      <ul className="list-disc pl-6 space-y-2">
        <li>What is Chess Forms? <span className="text-gray-600">A platform for managing chess forms.</span></li>
        <li>How do I submit a form? <span className="text-gray-600">Navigate to the Forms page and follow the instructions.</span></li>
        <li>Who can use Chess Forms? <span className="text-gray-600">Players, coaches, and organizers.</span></li>
      </ul>
    </div>
  );
}
