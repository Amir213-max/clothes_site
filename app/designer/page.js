'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function DesignerPage() {
  const [selectedTool, setSelectedTool] = useState('fabric');
  const [selectedPart, setSelectedPart] = useState('body');
  const [designState, setDesignState] = useState({
    fabric: 'linen',
    color: '#C9A47A',
    text: '',
    embroidery: 'none'
  });

  const tools = [
    { id: 'fabric', label: 'Fabric', icon: '🧵', description: 'Choose material' },
    { id: 'color', label: 'Color', icon: '🎨', description: 'Select palette' },
    { id: 'text', label: 'Text', icon: '✏️', description: 'Add personalization' },
    { id: 'embroidery', label: 'Embroidery', icon: '✨', description: 'Add details' }
  ];

  const parts = [
    { id: 'body', label: 'Body', icon: '👕' },
    { id: 'sleeves', label: 'Sleeves', icon: '👔' },
    { id: 'collar', label: 'Collar', icon: '👔' },
    { id: 'buttons', label: 'Buttons', icon: '🔘' }
  ];

  const fabrics = [
    { id: 'linen', name: 'Premium Linen', color: '#F5F5DC', price: '+$20', description: 'Breathable & elegant' },
    { id: 'silk', name: 'Silk', color: '#FFE4E1', price: '+$50', description: 'Luxurious & smooth' },
    { id: 'cotton', name: 'Organic Cotton', color: '#F0F8FF', price: '+$10', description: 'Soft & sustainable' },
    { id: 'wool', name: 'Merino Wool', color: '#F5F5F5', price: '+$30', description: 'Warm & durable' }
  ];

  const colors = [
    { hex: '#C9A47A', name: 'Warm Nude' },
    { hex: '#8C7E77', name: 'Taupe' },
    { hex: '#2A1E19', name: 'Dark Mocha' },
    { hex: '#FAF6F3', name: 'Soft Ivory' },
    { hex: '#FFFDFC', name: 'Off White' },
    { hex: '#D4AF37', name: 'Gold' }
  ];

  const embroideryOptions = [
    { id: 'none', name: 'None', price: '$0' },
    { id: 'floral', name: 'Floral Pattern', price: '+$25', description: 'Elegant botanical design' },
    { id: 'geometric', name: 'Geometric', price: '+$20', description: 'Modern abstract pattern' },
    { id: 'monogram', name: 'Monogram', price: '+$15', description: 'Personal initials' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF6F3] via-[#FFFDFC] to-[#FAF6F3] dark:from-[#1C1715] dark:via-[#2A1E19] dark:to-[#1C1715]">
      {/* Top Toolbar */}
      <div className="bg-[#FFFDFC]/95 dark:bg-[#2A1E19]/95 backdrop-blur-md border-b border-[#8C7E77]/10 dark:border-[#B8B0AC]/10 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Button variant="ghost" size="sm" className="hover:bg-[#C9A47A]/10">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Shop
              </Button>
              <div className="h-6 w-px bg-[#8C7E77]/20"></div>
              <h1 className="font-serif text-2xl text-[#2A1E19] dark:text-[#F5F2EF]">Design Studio</h1>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="hover:bg-[#C9A47A]/10">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
                Undo
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-[#C9A47A]/10">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10h-10a8 8 0 00-8 8v2m18-10l-6 6m6-6l-6-6" />
                </svg>
                Redo
              </Button>
              <div className="h-6 w-px bg-[#8C7E77]/20"></div>
              <Button variant="outline" size="sm" className="border-[#C9A47A] text-[#C9A47A] hover:bg-[#C9A47A] hover:text-[#2A1E19]">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                Save Design
              </Button>
              <Button size="sm" className="shadow-lg">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Product Parts */}
          <div className="lg:col-span-3">
            <div className="bg-[#FFFDFC]/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-[#8C7E77]/10">
              <h3 className="font-serif text-xl text-[#2A1E19] mb-6 flex items-center">
                <span className="w-8 h-8 bg-[#C9A47A] rounded-xl flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-[#2A1E19]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </span>
                Product Parts
              </h3>
              <div className="space-y-3">
                {parts.map((part) => (
                  <button
                    key={part.id}
                    onClick={() => setSelectedPart(part.id)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 group ${
                      selectedPart === part.id
                        ? 'bg-[#C9A47A] text-[#2A1E19] shadow-lg'
                        : 'bg-[#FAF6F3] text-[#8C7E77] hover:bg-[#C9A47A]/20 hover:text-[#2A1E19]'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{part.icon}</span>
                      <span className="font-medium">{part.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Center Canvas */}
          <div className="lg:col-span-6">
            <div className="bg-[#FFFDFC]/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-[#8C7E77]/10">
              <div className="aspect-square bg-gradient-to-br from-[#FAF6F3] to-[#FFFDFC] rounded-3xl border-2 border-dashed border-[#8C7E77]/20 flex items-center justify-center relative overflow-hidden group">
                {/* Product Preview */}
                <div className="relative w-64 h-80 transform group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="https://images.unsplash.com/photo-1602810318383-4df2a3d6b1df?auto=format&fit=crop&w=400&q=80"
                    alt="Design preview"
                    fill
                    className="object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A1E19]/10 to-transparent rounded-2xl"></div>
                </div>
                
                {/* Design overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#C9A47A]/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                      <span className="text-3xl">✨</span>
                    </div>
                    <p className="text-[#8C7E77] text-lg font-medium">Live Preview</p>
                    <p className="text-[#8C7E77]/60 text-sm mt-1">
                      {selectedPart} • {selectedTool}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Design Summary */}
              <div className="mt-8 p-6 bg-gradient-to-r from-[#FAF6F3] to-[#FFFDFC] rounded-2xl border border-[#8C7E77]/10">
                <h4 className="font-serif text-lg text-[#2A1E19] mb-4 flex items-center">
                  <span className="w-6 h-6 bg-[#C9A47A] rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-[#2A1E19]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Design Summary
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-[#8C7E77]">Fabric:</span>
                    <span className="ml-2 font-medium text-[#2A1E19]">{fabrics.find(f => f.id === designState.fabric)?.name}</span>
                  </div>
                  <div>
                    <span className="text-[#8C7E77]">Color:</span>
                    <span className="ml-2 font-medium text-[#2A1E19]">{colors.find(c => c.hex === designState.color)?.name}</span>
                  </div>
                  {designState.text && (
                    <div className="col-span-2">
                      <span className="text-[#8C7E77]">Text:</span>
                      <span className="ml-2 font-medium text-[#2A1E19]">"{designState.text}"</span>
                    </div>
                  )}
                  <div>
                    <span className="text-[#8C7E77]">Embroidery:</span>
                    <span className="ml-2 font-medium text-[#2A1E19]">{embroideryOptions.find(e => e.id === designState.embroidery)?.name}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Design Tools */}
          <div className="lg:col-span-3">
            <div className="bg-[#FFFDFC]/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-[#8C7E77]/10">
              <h3 className="font-serif text-xl text-[#2A1E19] mb-6 flex items-center">
                <span className="w-8 h-8 bg-[#C9A47A] rounded-xl flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-[#2A1E19]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </span>
                Design Tools
              </h3>
              
              {/* Tool Selection */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {tools.map((tool) => (
                  <button
                    key={tool.id}
                    onClick={() => setSelectedTool(tool.id)}
                    className={`p-4 rounded-2xl text-sm transition-all duration-300 group ${
                      selectedTool === tool.id
                        ? 'bg-[#C9A47A] text-[#2A1E19] shadow-lg'
                        : 'bg-[#FAF6F3] text-[#8C7E77] hover:bg-[#C9A47A]/20 hover:text-[#2A1E19]'
                    }`}
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">{tool.icon}</div>
                    <div className="font-medium">{tool.label}</div>
                    <div className="text-xs opacity-75">{tool.description}</div>
                  </button>
                ))}
              </div>

              {/* Tool Options */}
              <div className="space-y-6">
                {selectedTool === 'fabric' && (
                  <div>
                    <h4 className="font-medium text-[#2A1E19] mb-4 flex items-center">
                      <span className="w-5 h-5 bg-[#C9A47A] rounded-lg flex items-center justify-center mr-2">
                        <span className="text-xs">🧵</span>
                      </span>
                      Choose Fabric
                    </h4>
                    <div className="space-y-3">
                      {fabrics.map((fabric) => (
                        <button
                          key={fabric.id}
                          onClick={() => setDesignState({...designState, fabric: fabric.id})}
                          className={`w-full p-4 rounded-2xl text-left transition-all duration-300 group ${
                            designState.fabric === fabric.id
                              ? 'bg-[#C9A47A] text-[#2A1E19] shadow-lg'
                              : 'bg-[#FAF6F3] text-[#8C7E77] hover:bg-[#C9A47A]/20 hover:text-[#2A1E19]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div 
                                className="w-6 h-6 rounded-full border-2 border-[#8C7E77]/30 shadow-sm"
                                style={{ backgroundColor: fabric.color }}
                              ></div>
                              <div>
                                <div className="font-medium">{fabric.name}</div>
                                <div className="text-xs opacity-75">{fabric.description}</div>
                              </div>
                            </div>
                            <span className="text-sm font-semibold text-[#C9A47A]">{fabric.price}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {selectedTool === 'color' && (
                  <div>
                    <h4 className="font-medium text-[#2A1E19] mb-4 flex items-center">
                      <span className="w-5 h-5 bg-[#C9A47A] rounded-lg flex items-center justify-center mr-2">
                        <span className="text-xs">🎨</span>
                      </span>
                      Choose Color
                    </h4>
                    <div className="grid grid-cols-3 gap-3">
                      {colors.map((color) => (
                        <button
                          key={color.hex}
                          onClick={() => setDesignState({...designState, color: color.hex})}
                          className={`aspect-square rounded-2xl border-2 transition-all duration-300 hover:scale-110 ${
                            designState.color === color.hex
                              ? 'border-[#2A1E19] scale-110 shadow-lg'
                              : 'border-[#8C7E77]/30 hover:border-[#C9A47A]'
                          }`}
                          style={{ backgroundColor: color.hex }}
                          title={color.name}
                        ></button>
                      ))}
                    </div>
                  </div>
                )}

                {selectedTool === 'text' && (
                  <div>
                    <h4 className="font-medium text-[#2A1E19] mb-4 flex items-center">
                      <span className="w-5 h-5 bg-[#C9A47A] rounded-lg flex items-center justify-center mr-2">
                        <span className="text-xs">✏️</span>
                      </span>
                      Add Text
                    </h4>
                    <input
                      type="text"
                      placeholder="Enter your text..."
                      value={designState.text}
                      onChange={(e) => setDesignState({...designState, text: e.target.value})}
                      className="w-full p-4 border-2 border-[#8C7E77]/20 rounded-2xl bg-[#FAF6F3] text-[#2A1E19] focus:border-[#C9A47A] focus:outline-none transition-colors duration-300"
                    />
                    <div className="mt-3 text-xs text-[#8C7E77]">
                      Add personalization like your name or a special message
                    </div>
                  </div>
                )}

                {selectedTool === 'embroidery' && (
                  <div>
                    <h4 className="font-medium text-[#2A1E19] mb-4 flex items-center">
                      <span className="w-5 h-5 bg-[#C9A47A] rounded-lg flex items-center justify-center mr-2">
                        <span className="text-xs">✨</span>
                      </span>
                      Embroidery
                    </h4>
                    <div className="space-y-3">
                      {embroideryOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => setDesignState({...designState, embroidery: option.id})}
                          className={`w-full p-4 rounded-2xl text-left transition-all duration-300 group ${
                            designState.embroidery === option.id
                              ? 'bg-[#C9A47A] text-[#2A1E19] shadow-lg'
                              : 'bg-[#FAF6F3] text-[#8C7E77] hover:bg-[#C9A47A]/20 hover:text-[#2A1E19]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium">{option.name}</div>
                              {option.description && <div className="text-xs opacity-75">{option.description}</div>}
                            </div>
                            <span className="text-sm font-semibold text-[#C9A47A]">{option.price}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
