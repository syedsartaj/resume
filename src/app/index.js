import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="p-10">
      <h1 className="text-xl font-bold mb-4">Upload Excel/CSV</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button
        onClick={handleUpload}
        className="ml-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Upload
      </button>
    </div>
  );
}
