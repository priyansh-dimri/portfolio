const ImageComponent = ({ src, alt = "Image", size = 150 }) => {
  return (
    <div
      className="bg-gradient-to-r from-slate-300 to-slate-200 dark:from-zinc-600 dark:to-zinc-700 
        p-2 flex items-center justify-center overflow-hidden rounded-xl"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default ImageComponent;
