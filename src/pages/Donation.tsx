import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const Donation = () => {
  const { t } = useLanguage();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    message: ''
  });

  const donationTiers = [
    { amount: 25, description: t('donationTiers.tier1') },
    { amount: 50, description: t('donationTiers.tier2') },
    { amount: 100, description: t('donationTiers.tier3') },
    { amount: 250, description: t('donationTiers.tier4') },
    { amount: 500, description: t('donationTiers.tier5') },
    { amount: 1000, description: t('donationTiers.tier6') }
  ];

  const handleDonate = () => {
    const amount = selectedAmount || parseInt(customAmount);
    if (!amount || amount <= 0) {
      alert('Please select or enter a donation amount');
      return;
    }
    
    // In a real implementation, this would integrate with Stripe or PayPal
    alert(`Thank you for your donation of €${amount}! This would redirect to payment processing.`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('donationTitle')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('donationDescription')}
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Donation Amounts */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Donation Amount</h2>
              
              {/* Preset Amounts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {donationTiers.map((tier) => (
                  <button
                    key={tier.amount}
                    onClick={() => {
                      setSelectedAmount(tier.amount);
                      setCustomAmount('');
                    }}
                    className={`p-4 border-2 rounded-lg text-left transition-all ${
                      selectedAmount === tier.amount
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:border-orange-300'
                    }`}
                  >
                    <div className="text-2xl font-bold text-orange-600 mb-1">€{tier.amount}</div>
                    <div className="text-sm text-gray-600">{tier.description}</div>
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-6">
                <Label htmlFor="customAmount" className="text-sm font-medium text-gray-700 mb-2 block">
                  Or enter custom amount (€)
                </Label>
                <Input
                  id="customAmount"
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  className="text-lg"
                />
              </div>

              {/* Impact Information */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Your Impact</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>€25</span>
                    <span>Provides 100 bricks for construction</span>
                  </div>
                  <div className="flex justify-between">
                    <span>€100</span>
                    <span>Covers materials for one door</span>
                  </div>
                  <div className="flex justify-between">
                    <span>€500</span>
                    <span>Supplies roofing materials for a room</span>
                  </div>
                  <div className="flex justify-between">
                    <span>€1000</span>
                    <span>Builds a complete room</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Donor Information */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Donor Information</CardTitle>
                  <CardDescription>
                    Help us stay in touch and share updates about your impact
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="donorName">Full Name</Label>
                    <Input
                      id="donorName"
                      value={donorInfo.name}
                      onChange={(e) => setDonorInfo({...donorInfo, name: e.target.value})}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="donorEmail">Email Address</Label>
                    <Input
                      id="donorEmail"
                      type="email"
                      value={donorInfo.email}
                      onChange={(e) => setDonorInfo({...donorInfo, email: e.target.value})}
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <Label htmlFor="donorMessage">Message (Optional)</Label>
                    <Textarea
                      id="donorMessage"
                      value={donorInfo.message}
                      onChange={(e) => setDonorInfo({...donorInfo, message: e.target.value})}
                      placeholder="Leave a message for the family you're helping"
                      rows={4}
                    />
                  </div>
                  
                  <Button 
                    onClick={handleDonate}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-lg py-3"
                    size="lg"
                  >
                    Donate €{selectedAmount || customAmount || '0'} Now
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    Your donation is secure and will be processed through our trusted payment partners.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Other Ways to Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Volunteer</h3>
              <p className="text-gray-600">Join our construction teams and help build homes directly.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12S8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5S19.66 2 18 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12S4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.92 18 21.92S20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Share</h3>
              <p className="text-gray-600">Spread the word about our mission on social media.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Partner</h3>
              <p className="text-gray-600">Connect your business or organization with our mission.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donation;
