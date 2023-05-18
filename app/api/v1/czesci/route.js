import SparePart from '@models/sparepart';
import { connectToDB } from '@utils/db';

// GET http://localhost:5000/api/v1/czesci HTTP/1.1

export async function GET(request) {
  try {
    await connectToDB();
    const docs = await SparePart.find({}, { __v: 0 }, { sort: { name: -1 } });
    return new Response(JSON.stringify(docs), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), { status: error.status, });
  }
}
