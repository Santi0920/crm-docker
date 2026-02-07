export const SkeletonRow = () => (
  <tr className="animate-pulse">
    <td className="px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-200" />
        <div className="space-y-2">
          <div className="h-3 w-32 bg-gray-200 rounded" />
          <div className="h-2 w-20 bg-gray-200 rounded" />
        </div>
      </div>
    </td>
    <td className="px-4 py-3">
      <div className="h-3 w-40 bg-gray-200 rounded" />
    </td>
    <td className="px-4 py-3">
      <div className="h-5 w-20 bg-gray-200 rounded-full" />
    </td>
    <td className="px-4 py-3">
      <div className="h-3 w-24 bg-gray-200 rounded" />
    </td>
    <td className="px-4 py-3">
      <div className="h-5 w-16 bg-gray-200 rounded-full" />
    </td>
    <td className="px-4 py-3">
      <div className="h-6 w-6 bg-gray-200 rounded" />
    </td>
  </tr>
);

