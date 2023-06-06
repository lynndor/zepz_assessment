import React from 'react'

const SkeletonLoader = () => (
  <div className="flex flex-row flex-wrap gap-x-1 gap-y-10 justify-center">
    {
      [1,2,3,4,5,6,7,8].map(id => (
          <div key={id} className=" w-64 border border-purple-200 shadow rounded-md p-4 mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-gray-200 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-gray-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-gray-200 rounded"></div>
                  <div className="h-2 bg-gray-200 rounded"></div>
                </div>
                <div className="h-2 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ))
    }
  </div>

)

export default SkeletonLoader
