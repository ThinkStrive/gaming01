import React from 'react';

const LegalTermsModal = ({ setAccepted, accepted, setDisabled, colors = "text-blue-600  hover:text-blue-800" }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div>
            {/* Modal Trigger */}
            <div
                className={`${colors} font-semibold whitespace-nowrap cursor-pointer underline`}
                onClick={() => setIsOpen(true)}
            >
                <p>Click to read the terms and conditions</p>
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="modal modal-open">
                    <div className="modal-box max-w-4xl  max-h-[70vh] bg-slate-100 text-gray-900 w-11/12" style={{
                        overflow: "scroll",
                        scrollbarWidth: "none",
                    }}>
                        {/* Modal Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-xl">Terms and Conditions</h3>
                            <button
                                className="btn btn-sm btn-circle btn-ghost"
                                onClick={() => setIsOpen(false)}
                            >
                                ✕
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="overflow-y-auto max-h-[60vh] p-4 bg-slate-100 text-left text-gray-900 rounded-lg space-y-8" style={{
                            overflow: "scroll",
                            scrollbarWidth: "thin",
                        }}>
                            <div className=" p-6">
                                <h1 className="md:text-3xl text-xl font-bold mb-4">Terms of Service</h1>
                                <p className="mb-4"><strong>Effective Date:</strong> 07/03/2024</p>
                                <p className="mb-4"><strong>Jurisdiction:</strong> India</p>
                                <p className="mb-4"><strong>Age Requirement:</strong> 21 Years and Above</p>
                                <p className="mb-4">By accessing or using RouletteRise.com (the "Website") or any of its services (the "Services"), you agree to the following terms and conditions:</p>

                                <h2 className="md:text-2xl text-xl font-bold mt-6 mb-4">1. Eligibility</h2>
                                <p className="mb-4">You must be at least 21 years of age to use the Services.</p>
                                <p className="mb-4">By using the Services, you confirm that you are in compliance with applicable Indian gambling laws. As per the Public Gambling Act of 1867, gambling in physical locations is prohibited in India, but online gaming is not specifically regulated in most regions. The legality of online gambling varies by state.</p>
                                <p className="mb-4">It is your responsibility to ensure that your participation in our services complies with the laws and regulations of your jurisdiction. RouletteRise.com will not be held liable for any legal violations that occur due to your failure to comply with local laws.</p>

                                <h2 className="md:text-2xl text-xl font-bold mt-6 mb-4">2. Services Provided</h2>
                                <p className="mb-4">RouletteRise.com provides tools, strategies, and analytics to enhance your roulette and baccarat experience.</p>
                                <p className="mb-4">Our services are purely educational and designed to help users make informed betting decisions based on data.</p>

                                <h2 className="md:text-2xl text-xl font-bold mt-6 mb-4">3. Prohibited Use</h2>
                                <p className="mb-4">You are prohibited from using the Services for any illegal activities or violating any applicable laws, including but not limited to gambling laws in India and other jurisdictions.</p>
                                <p className="mb-4">By accessing the Website, you agree not to engage in any unlawful conduct, including circumventing or breaching the security of the Website.</p>

                                <h2 className="md:text-2xl text-xl font-bold mt-6 mb-4">4. Disclaimer</h2>
                                <p className="mb-4">The Website and Services are intended for educational and entertainment purposes only. We do not endorse or promote illegal gambling activities. It is your responsibility to ensure that your use of the Services is legal in your jurisdiction.</p>
                                <p className="mb-4">RouletteRise.com does not provide any guarantees regarding your ability to win or achieve profits. Results may vary, and your success depends on multiple factors, including luck and strategy.</p>

                                <h2 className="md:text-2xl text-xl font-bold mt-6 mb-4">5. Limitation of Liability</h2>
                                <p className="mb-4">RouletteRise.com will not be liable for any losses, damages, or harm that may result from your use of the Website and Services. The platform is provided "as is," and we make no representations or warranties, express or implied, regarding the performance of the Services.</p>

                                <h2 className="md:text-2xl text-xl font-bold mt-6 mb-4">6. Changes to Terms</h2>
                                <p className="mb-4">RouletteRise.com reserves the right to modify these Terms of Service at any time. Updates will be posted on this page, and it is your responsibility to review these Terms periodically. Continued use of the Website constitutes acceptance of any changes.</p>

                                <h1 className="md:text-2xl text-xl font-bold mt-8 mb-4">Privacy Policy</h1>
                                <p className="mb-4"><strong>Effective Date:</strong> 07/03/2024</p>
                                <p className="mb-4"><strong>Jurisdiction:</strong> India</p>
                                <p className="mb-4">At RouletteRise.com, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.</p>

                                <h2 className="md:text-2xl text-xl font-bold mt-6 mb-4">1. Information We Collect</h2>
                                <p className="mb-4">We collect personal information such as your name, email address, and payment information when you sign up for an account or make a purchase on the Website.</p>
                                <p className="mb-4">We also collect non-personal data such as usage statistics and device information to improve the Website and Services.</p>

                                <h2 className="md:text-2xl text-xl font-bold mt-6 mb-4">2. How We Use Your Information</h2>
                                <p className="mb-4">Your personal information is used to provide you with access to the Services, process payments, and communicate with you about your account and updates.</p>
                                <p className="mb-4">Non-personal data is used for analytics and to improve the functionality and performance of the Website.</p>

                                <h2 className="md:text-2xl text-xl font-bold mt-6 mb-4">3. Data Security</h2>
                                <p className="mb-4">We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>

                                <h2 className="md:text-2xl text-xl font-bold mt-6 mb-4">4. Third-Party Disclosure</h2>
                                <p className="mb-4">We do not share or sell your personal information to third parties except for payment processing and service providers, as required for the functioning of the Website.</p>
                                <p className="mb-4">Any third-party services we use comply with privacy policies that are in line with our own.</p>

                                <h2 className="md:text-2xl text-xl font-bold mt-6 mb-4">5. Your Rights</h2>
                                <p className="mb-4">You can request access to the personal information we hold about you, and you may request corrections or deletions of this information at any time.</p>
                                <p className="mb-4">If you wish to stop receiving promotional communications, you can unsubscribe via the link provided in our emails.</p>

                                <h2 className="md:text-2xl text-xl font-bold mt-6 mb-4">6. Changes to Privacy Policy</h2>
                                <p className="mb-4">We reserve the right to update this Privacy Policy. Any changes will be posted on this page, and the "Effective Date" will be updated accordingly.</p>

                                <h1 className="text-3xl font-bold mt-8 mb-4">Refund Policy</h1>
                                <p className="mb-4"><strong>Effective Date:</strong> 07/03/2024</p>
                                <p className="mb-4">At RouletteRise.com, we value your satisfaction. However, due to the nature of our services being educational and digital, we do not offer refunds once a subscription or purchase has been made.</p>

                                <h2 className="md:text-2xl text-xl font-bold mt-6 mb-4">1. Subscription Policy</h2>
                                <p className="mb-4">By purchasing a subscription, you agree to the non-refundable nature of the payment.</p>
                                <p className="mb-4">If you have issues accessing your subscription or services, please contact us at rouletterise@gmail.com for assistance. We may offer a resolution based on specific circumstances.</p>

                                <h2 className="md:text-2xl text-xl font-bold mt-6 mb-4">2. Chargeback/Dispute</h2>
                                <p className="mb-4">If you initiate a chargeback or dispute on PayPal or any payment method, your access to the Services will be immediately suspended, and we may take necessary actions in accordance with the applicable payment provider's policies.</p>

                                <h1 className="md:text-2xl text-xl font-bold mt-8 mb-4">Disclaimer</h1>
                                <p className="mb-4"><strong>Effective Date:</strong> 07/03/2024</p>
                                <p className="mb-4"><strong>Jurisdiction:</strong> India</p>
                                <p className="mb-4">The information provided on RouletteRise.com is for educational and entertainment purposes only. We do not encourage gambling activities that are illegal under Indian law or in any other jurisdiction.</p>

                                <h2 className="md:text-2xl text-xl font-bold mt-6 mb-4">1. Indian Gambling Laws</h2>
                                <p className="mb-4">RouletteRise.com operates as an educational platform for roulette and baccarat strategies. We do not provide gambling services or accept wagers.</p>
                                <p className="mb-4">Online gaming may be legal in some regions of India, but it is the user's responsibility to ensure that they comply with local laws. States such as Goa, Sikkim, and Nagaland have specific regulations allowing certain forms of gambling, but this does not apply to all regions of India.</p>

                                <h2 className="md:text-2xl text-xl font-bold mt-6 mb-4">2. No Guarantee of Success</h2>
                                <p className="mb-4">RouletteRise.com makes no guarantees regarding your ability to win or profit from using our tools or services. The outcome of any game, including roulette and baccarat, is determined by chance, and our tools are designed to help you make more informed decisions, not to guarantee success.</p>

                                <h2 className="md:text-2xl text-xl font-bold mt-6 mb-4">3. Limitation of Liability</h2>
                                <p className="mb-4">RouletteRise.com is not responsible for any losses, damages, or legal consequences arising from the use of our website and services. Users are fully responsible for ensuring their activities comply with the law in their jurisdiction.</p>

                                <h2 className="md:text-2xl text-xl font-bold mt-6 mb-4">4. Changes to Disclaimer</h2>
                                <p className="mb-4">We reserve the right to modify this disclaimer at any time. Updates will be posted on this page, and it is your responsibility to review these changes periodically.</p>

                                <div className="mt-8">
                                    {/* <h2 className="text-2xl font-bold mb-4">Footer Section</h2>
    <ul className="list-disc pl-6">
      <li>Terms of Service</li>
      <li>Privacy Policy</li>
      <li>Refund Policy</li>
      <li>Disclaimer</li>
    </ul> */}
                                    <p className="mt-4">Legal Compliance: Users are responsible for ensuring their activities on RouletteRise.com adhere to the applicable laws of their jurisdiction. RouletteRise.com is a tool for educational and entertainment purposes only and does not facilitate or endorse illegal gambling activities.</p>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="modal-action flex-col gap-4 mt-6">
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="checkbox checkbox-primary"
                                    checked={accepted}
                                    onChange={(e) => setAccepted(e.target.checked)}
                                />
                                <label className="text-sm">
                                    I have read and agree to all the terms, policies, and disclaimers
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
                                    className={`btn ${accepted ? 'btn-info' : 'btn-disabled'}`}
                                    disabled={!accepted}
                                    onClick={() => {
                                        if (accepted) {
                                            console.log('Terms accepted');
                                            setIsOpen(false);
                                            setDisabled(false);
                                        }
                                    }}
                                >
                                    Accept
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        className="modal-backdrop bg-neutral opacity-50"
                        onClick={() => setIsOpen(false)}
                    ></div>
                </div>
            )}
        </div>
    );
};

export default LegalTermsModal;