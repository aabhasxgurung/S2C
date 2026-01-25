import { MoodBoardImage } from "@/hooks/use-styles";
import { AlertCircle, CheckCircle, Loader, X } from "lucide-react";
import Image from "next/image";
import React from "react";

const UploadStats = (image: {
  uploading: boolean;
  uploaded: boolean;
  error?: string;
}) => {
  if (image.uploading) {
    return (
      <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/50">
        <Loader className="animate-spin text-white w-6 h-6" />
      </div>
    );
  }
  if (image.uploaded) {
    return (
      <div className="absolute top-2 right-2 ">
        <CheckCircle className="w-5 h-5 text-green-400" />
      </div>
    );
  }
  if (image.error) {
    return (
      <div className="absolute top-2 right-2 ">
        <AlertCircle className="w-5 h-5 text-red-400" />
      </div>
    );
  }
};

interface ImageBoardProps {
  image: MoodBoardImage;
  removeImage: (imageId: string) => void;
  xOffset: number;
  yOffset: number;
  rotation: number;
  zIndex: number;
  marginLeft?: string;
  marginTop?: string;
}

const ImageBoard = ({
  image,
  removeImage,
  xOffset,
  yOffset,
  rotation,
  zIndex,
  marginLeft,
  marginTop,
}: ImageBoardProps) => {
  return (
    <div
      className="absolute group"
      key={`board-${image.id}`}
      style={{
        transform: `translate(${xOffset}px, ${yOffset}px) rotate(${rotation}deg)`,
        zIndex: zIndex,
        left: "50%",
        top: "50%",
        marginLeft: marginLeft,
        marginTop: marginTop,
      }}
    >
      <div className="relative w-40 h-48 rounded-2xl overflow-hidden bg-white shadow-xl border border-border/20 hover:scale-105 transition-all duration-200">
        <Image
          src={image.preview}
          alt="Mood board image"
          fill
          className="object-cover"
        />
        <UploadStats
          uploading={image.uploading}
          uploaded={image.uploaded}
          error={image.error}
        />

        <button
          onClick={() => removeImage(image.id)}
          className="absolute top-2 right-2 w-6 h-6 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <X className="text-white w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ImageBoard;
