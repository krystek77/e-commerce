import {SparePart} from '@models/sparepart';
import {connectToDB} from '@utils/db'

//POST http://localhost:5000/api/v1/czesci/new HTTP/1.1

export async function POST(request){
  try {
    await connectToDB();
    const data = await request.json();

    const doc = await SparePart.findOne({ name: data.name, model: { $regex: data.model, $options: 'i' }, });
    if (doc) return new Response( JSON.stringify({ message: `Część zamienna o nazwie: '${doc.name}' dla produktu: '${doc.model}' już istnieje`, }), { status: 404 } );
    
    const newSparePart = new SparePart(data);
    await newSparePart.save();
    return new Response(JSON.stringify({message:`Część zmienna o nazwie '${newSparePart.name}' dla prouktu: '${newSparePart.model}' została dodana`}), { status: 201 });

  } catch (error) {
    new Response(JSON.stringify({ message: error.message }), { status: error.status });
  }
}