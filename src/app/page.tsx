import Image from "next/image";
import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import Header from "@/components/Layout/Header";
import CategoryTabs from "@/components/CategoryTabs";
import UserList from "@/components/UserList";
import ProjectList from "@/components/ProjectList";

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

export default function Home() {
  return (
    <div>
      <DynamicContextProvider
        settings={{
          environmentId: "37e18cad-e1f1-4822-b1b9-1cbde0957aa3", 
          walletConnectors: [EthereumWalletConnectors],
        }}
      >
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="container mx-auto py-12 px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <CategoryTabs />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ProjectList title="Most Popular Projects" />
              <UserList title="Most Active Users" />
            </div>
          </main>
        </div>
      </DynamicContextProvider>
    </div>
  );
}
