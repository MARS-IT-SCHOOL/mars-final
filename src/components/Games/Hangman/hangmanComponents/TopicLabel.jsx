export const TopicLabel = ({ topic }) => {
  return (
    <div className=" px-16 py-1 shadow-sm shadow-red-500 bg-red-700 rounded-full text-center text-slate-900">
      <p className=" text-xs text-slate-100">TOPIC:</p>
      <p className="text-lg font-bold uppercase text-white">{topic}</p>
    </div>
  );
};