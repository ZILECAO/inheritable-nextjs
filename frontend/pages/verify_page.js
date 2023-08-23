import React, { Component, useEffect } from 'react';
import Writer from '../components/Writer';
import Reader from '../components/Reader';
import Oracle from '../components/Oracle';
import Verify from '../components/Verify';
import logo2 from '../public/logo2.svg';
import solana from '../public/solana.svg'
import inherilogo from '../public/inheri-logo.svg';
import verifySvg from "../public//verify.svg";
import signSvg from "../public/ri_quill-pen-fill.svg";
import witnessSvg from "../public/witness.svg";

import { NavBar } from '../components/navBar';
import Image from 'next/image';



class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            screen: 0
        };
    }

    switchView() {
        this.setState({
            screen: (this.state.screen + 1) % 3
        });
    }

    SidebarVerify() {
        return (
            <div className='text-white h-2/5 mt-10 text-md pl-8 flex flex-col justify-around'>
                <div className='my-2'>
                    <div className='flex items-center justify-left'>
                        <Image
                            src="ri_quill-pen-fill.svg"
                            alt="image"
                            width={25}
                            height={25}
                        />
                        <a className='text-center ml-2' >Verify Claim Integrity</a>
                    </div>
                    <p className='font-light ml-7 text-zinc-500 text-xs'>Verified that claim is untampered</p>
                </div>



                {/* <div className='flex items-center justify-left hover:underline hover:text-white hover:cursor-pointer' onClick={() => this.setState({ screen: 1 })}>
                              <img src={witnessSvg} className="w-5 h-5 mr-2" alt="logo" />
                              <p className='text-center'> Bear witness to passing </p>
                          </div>
      
                          <div className='flex items-center justify-left hover:underline hover:text-white hover:cursor-pointer' onClick={() => this.setState({ screen: 2 })}>
                              <img src={verifySvg} className="w-5 h-5 mr-2" alt="logo" />
                              <p className='text-center'> Verify and release will </p>
                          </div> */}
            </div>
        )
    }




    render() {
        return (
            <div className="font-serif ">
                {/* sidebar */}
                {/* <div className="fixed w-1/4 h-4/6	 flex flex-col justify-between">
                    <div className='max-h-2/5'>

                        <this.SidebarVerify />

                    </div>



                    <div className='flex flex-col justify-end items-center'>

                        <div className='flex flex-col items-center text-zinc-300 border-2 rounded p-4 m-2'>
                            <div className='justify-center flex-nowrap flex items-center'>
                                <a className='font-sm pb-2 text-md'>Smart Contracts deployed on</a>
                                <Image className='mx-2'
                                    src="solana.svg"
                                    alt="image"
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <a target="_blank" href={"https://explorer.solana.com/address/3uCfjcPxnvWyNRSpBQKcDwpBmuAaXraPw8v7SzKicfmq?cluster=testnet"} className="text-xs font-light underline hover:text-indigo-300 hover:ease-in-out hover:transition hover:duration-700">Writing Hashes of the Will</a>
                            <a target="_blank" href={"https://explorer.solana.com/address/G9nmhaToGZr2ih7X24Zo72w6fYLAEYU9EMjSo5M5D3vf?cluster=testnet"} className="text-xs font-light underline hover:text-indigo-300 hover:ease-in-out hover:transition hover:duration-700">Oracle Signing</a>
                        </div>
                        <div className='flex flex-nowrap items-center place m-1'>
                            <span className='text-white font-light text-m'>Anchored on</span>
                            <Image className='mx-2'
                                src="solana.svg"
                                alt="image"
                                width={40}
                                height={40}
                            />
                        </div>

                        <div className='flex flex-nowrap items-center pb-6'>

                            <span className='text-white font-light text-m'>Powered by</span>
                            <Image className='mx-2 my-2'
                                src="logo2.svg"
                                alt="image"
                                width={150}
                                height={150}
                            />
                        </div>

                    </div>
                </div> */}


                {/* main page section */}


                <Verify />

            </div>
        )
    }
}

export default Dashboard;
