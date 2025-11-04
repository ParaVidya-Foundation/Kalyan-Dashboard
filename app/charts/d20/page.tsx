// server component - static content
export const dynamic = "force-dynamic"
export default function D20ChartPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">D20 - Vimsamsa Chart</h1>
          <p className="text-gray-600 mb-6">
            The Vimsamsa Chart is used for analyzing spiritual practices, devotion, and religious inclinations.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800">
              <strong>Note:</strong> Vimsamsa chart visualization will be implemented soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

