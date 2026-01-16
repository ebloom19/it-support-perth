import { toast } from "sonner";

export async function uploadImage(file: File): Promise<string | null> {
  const filename = `${Date.now()}-${file.name}`;
  
  try {
    const response = await fetch(`/api/admin/upload?filename=${encodeURIComponent(filename)}`, {
      method: 'POST',
      body: file,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Upload failed');
    }

    const blob = await response.json();
    return blob.url;
  } catch (error) {
    console.error('Upload error:', error);
    toast.error(error instanceof Error ? error.message : 'Failed to upload image');
    return null;
  }
}
