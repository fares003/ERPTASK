import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBranch } from '../redux/branchesSlice';

function AddBranchForm() {
  const [branchName, setBranchName] = useState('');
  const [location, setLocation] = useState('');
  const [contactDetails, setContactDetails] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (branchName && location && contactDetails) {
      dispatch(addBranch({ 
        id: Date.now().toString(),
        name: branchName, 
        location, 
        contactDetails 
      }));
      setBranchName('');
      setLocation('');
      setContactDetails('');
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="mb-6">Add New Branch</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label htmlFor="branchName" className="form-label">Branch Name</label>
            <input
              type="text"
              id="branchName"
              value={branchName}
              onChange={(e) => setBranchName(e.target.value)}
              className="input-field"
              placeholder="Enter branch name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="location" className="form-label">Location</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="input-field"
              placeholder="Enter branch location"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactDetails" className="form-label">Contact Details</label>
            <input
              type="text"
              id="contactDetails"
              value={contactDetails}
              onChange={(e) => setContactDetails(e.target.value)}
              className="input-field"
              placeholder="Enter contact information"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Add Branch
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBranchForm; 