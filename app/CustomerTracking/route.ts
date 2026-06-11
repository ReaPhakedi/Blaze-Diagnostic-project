const trackingData: {
  id: number;
  vehicle: string;
  status: string;
  quoteApproved: boolean;
  invoiceReady: boolean;
}[] = [];

// GET request handler
export async function GET() {
  return Response.json(trackingData);
}
