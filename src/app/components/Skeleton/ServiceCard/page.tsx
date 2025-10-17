const SkeletonCard = () => (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 animate-pulse p-10 bg-white rounded-3xl border shadow-card-shadow">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6 mb-3"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
    </div>
);

export default SkeletonCard