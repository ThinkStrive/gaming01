import React from 'react';

const TermsAndConditions = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [accepted, setAccepted] = React.useState(false);

  return (
    <div>
      {/* Modal Trigger */}
      <div 
        className="text-primary hover:text-primary-focus cursor-pointer underline"
        onClick={() => setIsOpen(true)}
      >
        <p>Agree to terms and conditions</p>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="modal modal-open">
          <div className="modal-box max-w-2xl max-h-[70vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-xl">Terms and Conditions</h3>
              <button 
                className="btn btn-sm btn-circle btn-ghost"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="py-4 space-y-4">
              <div>
                <h4 className="font-bold mb-2">1. Introduction</h4>
                <p className="text-sm">
                  These Website Terms and Conditions ("Terms") govern your use of our website and services. 
                  By accessing or using our website, you agree to be bound by these Terms.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-2">2. Use License</h4>
                <p className="text-sm">
                  Permission is granted to temporarily access the materials (information or software) 
                  on our website for personal, non-commercial viewing only.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-2">3. Disclaimer</h4>
                <p className="text-sm">
                  The materials on our website are provided on an 'as is' basis. We make no warranties, 
                  expressed or implied, and hereby disclaim and negate all other warranties including, 
                  without limitation, implied warranties or conditions of merchantability.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-2">4. Limitations</h4>
                <p className="text-sm">
                  In no event shall we or our suppliers be liable for any damages arising out of the 
                  use or inability to use the materials on our website.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-2">5. Privacy Policy</h4>
                <p className="text-sm">
                  Your use of our website is also governed by our Privacy Policy, which is incorporated 
                  into these Terms by reference.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="modal-action flex-col gap-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                />
                <label className="text-sm">
                  I have read and agree to the Terms and Conditions
                </label>
              </div>

              <div className="flex gap-2 justify-end w-full">
                <button 
                  className="btn btn-ghost"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
                <button
                  className={`btn ${accepted ? 'btn-primary' : 'btn-disabled'}`}
                  disabled={!accepted}
                  onClick={() => {
                    if (accepted) {
                      console.log('Terms accepted');
                      setIsOpen(false);
                    }
                  }}
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
          
          {/* Modal Background Overlay */}
          <div 
            className="modal-backdrop bg-neutral opacity-50"
            onClick={() => setIsOpen(false)}
          ></div>
        </div>
      )}
    </div>
  );
};

export default TermsAndConditions;