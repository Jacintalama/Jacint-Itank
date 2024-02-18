import React from 'react'
// Additional props might be needed depending on how you want to handle updates
interface ModelJunctionProps {
    elevation: string | number;
    demand: string | number;
    demandPattern: string;  
    onElevationChange: (value: string) => void;
    onDemandChange: (value: string) => void;
    onDemandPatternChange: (value: string) => void;
  }

  
  // elevation, demand, demandPattern, onElevationChange, onDemandChange, onDemandPatternChange

  const ModelJunction: React.FC<ModelJunctionProps> = ({  }) => {
    return (
  // This div has a z-index higher than the map's z-index
  <div className="fixed top-20 right-20 z-[1000] w-96 shadow-lg bg-white rounded-lg p-4">
  <h2 className="text-lg font-semibold text-gray-900 mb-4">Junction Data</h2>
  <div className="space-y-3">
  <div className="relative z-0 w-full mb-5 group">
      <input type="elevation" name="floating_elevation" id="floating_elevation" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_elevation" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Elevation</label>
  </div>

  <div className="relative z-0 w-full mb-5 group">
      <input type="demand" name="floating_demand" id="floating_demand" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_demand" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Demand</label>
  </div>

  <div className="relative z-0 w-full mb-5 group">
      <input type="demandPattern" name="floating_demandPattern" id="floating_demandPattern" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_demandPattern" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Demand Pattern</label>
  </div>

  </div>
</div>
);
};

export default ModelJunction