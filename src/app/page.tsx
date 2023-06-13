import { Uploader } from '@/components/Uploader';
import { Downloader } from '@/components/Downloader';


export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-10">
        Ethereum Swarm Data Management
      </h1>
      <div className="flex space-x-12">
        <Uploader />
        <Downloader />
      </div>
    </div>
  );
}
