import { useSelector } from 'react-redux';
import type { RootState } from '../redux/Store';

interface Branch {
  id: string;
  name: string;
  location: string;
  contactDetails: string;
}

function BranchesList() {
  const branches = useSelector((state: RootState) => state.branches.branches);

  return (
    <div className="container">
      <h2 className="mb-6">Inventory Branches</h2>
      {branches.length === 0 ? (
        <div className="card text-center">
          <p className="text-gray-500">No branches added yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2">
          {branches.map((branch: Branch) => (
            <div key={branch.id} className="card">
              <h3 className="mb-2">{branch.name}</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {branch.location}
                </p>
                <p className="flex items-center">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {branch.contactDetails}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BranchesList; 