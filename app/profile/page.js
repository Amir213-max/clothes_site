'use client';

import { useState } from 'react';
import data from '@/data/data.json';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import SectionTitle from '@/components/ui/SectionTitle';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: data.user.name,
    email: data.user.email,
    phone: '',
    address: '',
    city: '',
    zipCode: ''
  });

  const tabs = [
    { id: 'profile', label: 'Profile Info' },
    { id: 'designs', label: 'Saved Designs' },
    { id: 'orders', label: 'Order History' }
  ];

  // Mock order history
  const orders = [
    {
      id: 'ET-2024-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 239.49,
      items: ['Classic Linen Shirt', 'Silk Wrap Dress']
    },
    {
      id: 'ET-2024-002',
      date: '2024-01-10',
      status: 'Processing',
      total: 89.99,
      items: ['Minimalist Cotton T-Shirt']
    }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Mock save functionality
  };

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF6F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionTitle 
          title="My Profile" 
          subtitle="Manage your account information and view your activity."
          className="mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[#FFFDFC] rounded-2xl p-6 shadow-lg sticky top-24">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={data.user.avatar}
                    alt={data.user.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#2A1E19]">{data.user.name}</h3>
                  <p className="text-sm text-[#8C7E77]">{data.user.email}</p>
                </div>
              </div>
              
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left p-3 rounded-xl transition-colors duration-300 ${
                      activeTab === tab.id
                        ? 'bg-[#C9A47A] text-[#2A1E19]'
                        : 'text-[#8C7E77] hover:bg-[#C9A47A]/20'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <div className="bg-[#FFFDFC] rounded-2xl p-8 shadow-lg">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="font-serif text-2xl text-[#2A1E19]">Profile Information</h2>
                  <Button
                    variant={isEditing ? 'secondary' : 'outline'}
                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                  >
                    {isEditing ? 'Save Changes' : 'Edit Profile'}
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    name="name"
                    value={profileData.name}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={profileData.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                  <Input
                    label="Phone"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                  <Input
                    label="Address"
                    name="address"
                    value={profileData.address}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                  <Input
                    label="City"
                    name="city"
                    value={profileData.city}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                  <Input
                    label="ZIP Code"
                    name="zipCode"
                    value={profileData.zipCode}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>
              </div>
            )}

            {activeTab === 'designs' && (
              <div className="bg-[#FFFDFC] rounded-2xl p-8 shadow-lg">
                <h2 className="font-serif text-2xl text-[#2A1E19] mb-8">Saved Designs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.savedDesigns.map((design) => (
                    <div key={design.id} className="border border-[#8C7E77]/20 rounded-xl p-4">
                      <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                        <Image
                          src={design.preview}
                          alt={design.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-serif text-lg text-[#2A1E19] mb-2">{design.title}</h3>
                      <p className="text-sm text-[#8C7E77] mb-4">
                        Saved on {new Date(design.date).toLocaleDateString()}
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Edit</Button>
                        <Button size="sm">Add to Cart</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="bg-[#FFFDFC] rounded-2xl p-8 shadow-lg">
                <h2 className="font-serif text-2xl text-[#2A1E19] mb-8">Order History</h2>
                <div className="space-y-6">
                  {orders.map((order) => (
                    <div key={order.id} className="border border-[#8C7E77]/20 rounded-xl p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-serif text-lg text-[#2A1E19]">Order #{order.id}</h3>
                          <p className="text-sm text-[#8C7E77]">
                            Placed on {new Date(order.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-[#2A1E19]">${order.total}</div>
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            order.status === 'Delivered' 
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                      <div className="text-sm text-[#8C7E77]">
                        <p className="mb-2">Items:</p>
                        <ul className="list-disc list-inside space-y-1">
                          {order.items.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
