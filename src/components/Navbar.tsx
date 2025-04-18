import { TrendingUp, Wallet, ListFilter, Settings } from 'lucide-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useReadContract } from 'wagmi';
import { ABI, contractAddress } from '../utils/contractDetails';
import { Link } from 'react-router-dom';

function Navbar() {

    const {address} = useAccount();

    const {data , isSuccess , isPending} = useReadContract({
        abi : ABI,
        address : contractAddress,
        functionName : "isOwner", 
        account : address
    })

    if(!isPending && data && isSuccess){
      return (
        <nav className="bg-gray-800 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo and Brand */}
              <div className="flex items-center">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => {}}>
                  <Link to={"/"} className='flex gap-x-2'>
                    <TrendingUp className="w-8 h-8 text-purple-500" />
                    <span className="text-xl font-bold text-white">PredictX</span>
                  </Link>
                </div>
                
                {/* Navigation Links */}
                <div className="hidden md:block ml-10">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => {}}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                    >
                      <Link to={"/user"} className="flex text-white items-center gap-2">
                        <ListFilter className="w-4 h-4" />
                        Questions
                      </Link>
                    </button>
    
                    <button
                      onClick={() => {}}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                    >
                      <Link to={'/userbets'} className="flex text-white items-center gap-2">
                        <Wallet className="w-4 h-4" />
                        My Bets
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
    
              {/* Right side buttons */}
              <div className="flex items-center gap-4">
                <ConnectButton/>
                <button
                  onClick={() => {}}
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors"
                >
                  <Link to={"/admin"} className="flex items-center gap-2">
                    <Settings className="w-4 h-4" />
                    Admin
                  </Link>
                </button>
              </div>
            </div>
          </div>
    
          {/* Mobile Navigation */}
          <div className="md:hidden border-t border-gray-700">
            <div className="px-2 py-3 space-y-1">
              <button
                onClick={() => {}}
                className={`w-full px-3 py-2 rounded-md text-sm font-medium transition-colors `}
              >
                <Link to={"/user"} className="flex text-white items-center gap-2">
                  <ListFilter className="w-4 h-4" />
                  Questions
                </Link>
              </button>
              <button
                onClick={() => {}}
                className={`w-full px-3 py-2 rounded-md text-sm font-medium transition-colors`}
              >
                <Link to={'/userbets'} className="flex text-white items-center gap-2">
                  <Wallet className="w-4 h-4" />
                  My Bets
                </Link>
              </button>
            </div>
          </div>
        </nav>
      );
    }
    else{
      return (
        <nav className="bg-gray-800 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo and Brand */}
              <div className="flex items-center">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => {}}>
                  <Link to={"/"} className='flex gap-x-2'>
                    <TrendingUp className="w-8 h-8 text-purple-500" />
                    <span className="text-xl font-bold text-white">PredictX</span>
                  </Link>
                </div>
                
                {/* Navigation Links */}
                <div className="hidden md:block ml-10">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => {}}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                    >
                      <Link to={"/user"} className="flex text-white items-center gap-2">
                        <ListFilter className="w-4 h-4" />
                        Questions
                      </Link>
                    </button>
    
                    <button
                      onClick={() => {}}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                    >
                      <Link to={'/userbets'} className="flex text-white items-center gap-2">
                        <Wallet className="w-4 h-4" />
                        My Bets
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
    
              {/* Right side buttons */}
              <div className="flex items-center gap-4">
                <ConnectButton/>
              </div>
            </div>
          </div>
    
          {/* Mobile Navigation */}
          <div className="md:hidden border-t border-gray-700">
            <div className="px-2 py-3 space-y-1">
              <button
                onClick={() => {}}
                className={`w-full px-3 py-2 rounded-md text-sm font-medium transition-colors `}
              >
                <Link to={"/user"} className="flex text-white items-center gap-2">
                  <ListFilter className="w-4 h-4" />
                  Questions
                </Link>
              </button>
              <button
                onClick={() => {}}
                className={`w-full px-3 py-2 rounded-md text-sm font-medium transition-colors`}
              >
                <Link to={'/userbets'} className="flex text-white items-center gap-2">
                  <Wallet className="w-4 h-4" />
                  My Bets
                </Link>
              </button>
            </div>
          </div>
        </nav>
      );
    }
}

export default Navbar;