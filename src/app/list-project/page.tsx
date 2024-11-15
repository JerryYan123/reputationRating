import React from 'react';
import Header from '@/components/Layout/Header';
import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum';

const ListProjectPage = () => {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "37e18cad-e1f1-4822-b1b9-1cbde0957aa3", 
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-center mb-12 text-black">List Your Project</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <form className="space-y-6">
                {['Name', 'Description', 'Tags', 'Website', 'X'].map((field) => (
                  <div key={field}>
                    <label htmlFor={field.toLowerCase()} className="block text-sm font-semibold text-black mb-2">{field}</label>
                    <div className="relative">
                      {field === 'Description' ? (
                        <textarea 
                          id={field.toLowerCase()} 
                          name={field.toLowerCase()} 
                          rows={4} 
                          placeholder={field === 'Description' ? "Enter Your Description" : field === 'Tags' ? "Beautiful Castle, Monkeys ETC" : "http://"}
                          className="w-full px-4 py-3 bg-gray-100 rounded-xl text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 border border-gray-300"
                        />
                      ) : (
                        <input 
                          type={field === 'Website' || field === 'X' ? "url" : "text"}
                          id={field.toLowerCase()} 
                          name={field.toLowerCase()} 
                          placeholder={field === 'Name' ? "Project Name" : field === 'Tags' ? "DeFi, NFT, GameFi, Web3, DAO, etc." : "http://"}
                          className="w-full px-4 py-3 bg-gray-100 rounded-xl text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 border border-gray-300"
                        />
                      )}
                      <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </div>
                  </div>
                ))}
              </form>
            </div>
            <div className="md:col-span-1 flex flex-col">
              <div className="flex flex-col items-center justify-center bg-gray-100 rounded-3xl shadow-md p-8 h-80 mb-6">
                <svg className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                <p className="mt-4 text-sm text-gray-500">PNG, JPG.</p>
              </div>
              <button className="w-full bg-black text-white py-3 rounded-xl text-sm font-medium">
                Upload
              </button>
            </div>
          </div>
          <button type="submit" className="w-full bg-black text-white py-3 rounded-xl text-sm font-medium mt-12">
            Create
          </button>
        </div>
      </main>
      </div>
      </DynamicContextProvider>
  );
};

export default ListProjectPage;