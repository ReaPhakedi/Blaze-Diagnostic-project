export default function CustomerTrackingPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Customer Tracking</h1>
      <p>Welcome to the Blaze Diagnostics Customer Tracking Page.</p>

      <div className="mt-6 space-y-4">
        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-lg font-semibold">Vehicle Progress</h2>
          <p>Status: Inspection → Repair → Test Drive → Completed</p>
        </div>

        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-lg font-semibold">Quote Approval</h2>
          <p>Approve or reject quotes linked to your job card.</p>
        </div>

        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-lg font-semibold">Invoice</h2>
          <p>Invoices will appear here once your job is completed.</p>
        </div>
      </div>
    </div>
  );
}

