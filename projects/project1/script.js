
import React, { useState, useCallback } from 'react';
import { PassengerApp } from './components/PassengerApp.js';
import { DriverApp } from './components/DriverApp.js';
import { RideStatus } from './types.js';

const App = () => {
    const [appState, setAppState] = useState({
        status: RideStatus.IDLE,
        currentRide: null,
        selectedRickshaw: null,
    });

    const handleBooking = useCallback((rickshaw) => {
        setAppState(prev => ({
            ...prev,
            status: RideStatus.REQUESTED,
            selectedRickshaw: rickshaw,
            currentRide: {
                passengerName: 'Rahul Sharma',
                pickupLocation: 'MG Road',
                destination: 'Indiranagar',
                fare: 85,
                rickshawId: rickshaw.id
            }
        }));
    }, []);

    const handleCancel = useCallback(() => {
        setAppState({
            status: RideStatus.IDLE,
            currentRide: null,
            selectedRickshaw: null
        });
    }, []);

    const handlePay = useCallback(() => {
        setAppState(prev => ({
            ...prev,
            status: RideStatus.PAID
        }));
    }, []);

    const handleAccept = useCallback(() => {
        setAppState(prev => ({
            ...prev,
            status: RideStatus.ACCEPTED
        }));
    }, []);

    const handleDecline = useCallback(() => {
        handleCancel();
    }, [handleCancel]);

    const handleArriveAtPickup = useCallback(() => {
        setAppState(prev => ({
            ...prev,
            status: RideStatus.ARRIVED
        }));
    }, []);

    const handleStartRide = useCallback(() => {
        setAppState(prev => ({
            ...prev,
            status: RideStatus.IN_PROGRESS
        }));
    }, []);

    const handleFinishRide = useCallback(() => {
        setAppState(prev => ({
            ...prev,
            status: RideStatus.COMPLETED
        }));
    }, []);

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 bg-[#f0f2f5]">
            <div className="max-w-7xl w-full flex flex-col items-center">
                <header className="text-center mb-10">
                    <h1 className="text-4xl font-black text-gray-900 mb-2">Local Transport System <span className="text-yellow-500 italic">Prototype</span></h1>
                    <p className="text-gray-500 font-medium">Simulation of Passenger and Driver real-time interaction</p>
                </header>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full">
                    <div className="flex flex-col items-center">
                        <span className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">Passenger Interface</span>
                        <div className="mobile-screen">
                            <PassengerApp
                                appState={appState}
                                onBook={handleBooking}
                                onCancel={handleCancel}
                                onPay={handlePay}
                            />
                            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gray-200 rounded-full z-50 shadow-inner" />
                        </div>
                    </div>

                    <div className="hidden lg:flex flex-col items-center gap-4 text-gray-300">
                        <div className="w-12 h-1 bg-gray-200 rounded-full" />
                        <div className="flex flex-col items-center text-gray-400">
                            <svg className="w-8 h-8 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                            <span className="text-[10px] font-bold mt-2 uppercase tracking-tighter">Real-time Sync</span>
                        </div>
                        <div className="w-12 h-1 bg-gray-200 rounded-full" />
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">Driver Interface</span>
                        <div className="mobile-screen">
                            <DriverApp
                                appState={appState}
                                onAccept={handleAccept}
                                onDecline={handleDecline}
                                onArrive={handleArriveAtPickup}
                                onStart={handleStartRide}
                                onFinish={handleFinishRide}
                                onCancelByDriver={handleCancel}
                            />
                            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gray-800 rounded-full z-50 shadow-inner opacity-40" />
                        </div>
                    </div>
                </div>

                <footer className="mt-16 text-center text-gray-400 text-sm">
                    Built with React & Tailwind CSS • JavaScript Version
                </footer>
            </div>
        </div>
    );
};

export default App;






import React, { useState } from 'react';
import { SideNav } from './SideNav.js';
import { RideStatus } from '../types.js';
import { MAP_SVG } from '../constants.js';

export const DriverApp = ({
    appState,
    onAccept,
    onDecline,
    onArrive,
    onStart,
    onFinish,
    onCancelByDriver
}) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const navItems = [
        { label: 'Home', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> },
        { label: 'Active Rides', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
        { label: 'Earnings', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
        { label: 'Profile', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
    ];

    return (
        <div className="flex flex-col h-full bg-slate-50 relative overflow-hidden">
            <header className="p-4 bg-gray-900 text-white flex items-center justify-between border-b border-gray-800 z-10">
                <button onClick={() => setIsNavOpen(true)} className="p-2 hover:bg-gray-800 rounded-full transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>
                <div className="flex flex-col items-center">
                    <span className="font-bold text-yellow-400 text-lg tracking-tight">Driver Portal</span>
                    <span className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">QuickRick Partner</span>
                </div>
                <div className="relative">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full overflow-hidden border-2 border-yellow-300">
                        <img src="https://picsum.photos/seed/driver-avatar/100/100" alt="Avatar" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-gray-900 rounded-full" />
                </div>
            </header>

            <SideNav
                isOpen={isNavOpen}
                onClose={() => setIsNavOpen(false)}
                title="Driver Dashboard"
                items={navItems}
            />

            <div className="flex-1 relative">
                <div className="absolute inset-0 bg-slate-100">
                    {MAP_SVG}
                </div>

                <div className="absolute top-1/2 left-1/3">
                    <div className="relative">
                        <div className="w-8 h-8 bg-gray-900 rounded-lg shadow-xl flex items-center justify-center transform rotate-12 transition-all duration-1000">
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" /></svg>
                        </div>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/10 rounded-full blur-[1px]" />
                    </div>
                </div>

                {(appState.status !== RideStatus.IDLE && appState.status !== RideStatus.PAID) && (
                    <div className={`absolute transition-all duration-1000 ${appState.status === RideStatus.IN_PROGRESS ? 'top-1/4 left-2/3' : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}`}>
                        <div className="relative">
                            <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-2xl animate-bounce flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            </div>
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-white px-2 py-0.5 rounded-full shadow text-blue-600 whitespace-nowrap">Passenger</div>
                        </div>
                    </div>
                )}

                <div className="absolute inset-x-0 bottom-0 p-4">
                    {appState.status === RideStatus.IDLE && (
                        <div className="bg-white p-5 rounded-3xl shadow-2xl border border-gray-100 text-center animate-in fade-in slide-in-from-bottom-4">
                            <div className="mb-4">
                                <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Status</span>
                                <div className="text-green-600 font-black text-xl">ONLINE</div>
                            </div>
                            <p className="text-gray-500 text-sm mb-6">Waiting for nearby ride requests...</p>
                            <div className="flex justify-between p-4 bg-gray-50 rounded-2xl mb-2">
                                <div className="text-center flex-1">
                                    <div className="text-xs text-gray-400 font-bold">TODAY</div>
                                    <div className="text-lg font-bold text-gray-800">₹1,240</div>
                                </div>
                                <div className="w-px bg-gray-200" />
                                <div className="text-center flex-1">
                                    <div className="text-xs text-gray-400 font-bold">RIDES</div>
                                    <div className="text-lg font-bold text-gray-800">12</div>
                                </div>
                            </div>
                        </div>
                    )}

                    {appState.status === RideStatus.REQUESTED && (
                        <div className="bg-gray-900 text-white p-6 rounded-3xl shadow-2xl border-4 border-yellow-400 animate-pulse">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-black text-yellow-400 uppercase italic">New Ride!</h3>
                                    <p className="text-gray-400 text-sm">Pickup: MG Road, Bengaluru</p>
                                </div>
                                <div className="bg-white/10 p-3 rounded-2xl text-center">
                                    <div className="text-[10px] text-gray-400 font-bold uppercase">Fare</div>
                                    <div className="text-xl font-black text-white">₹85.00</div>
                                </div>
                            </div>
                            <div className="flex space-x-3">
                                <button
                                    onClick={onAccept}
                                    className="flex-1 bg-yellow-400 text-gray-900 py-4 rounded-2xl font-black text-lg active:scale-95 transition-all shadow-lg"
                                >
                                    ACCEPT
                                </button>
                                <button
                                    onClick={onDecline}
                                    className="px-6 bg-red-500/20 text-red-400 py-4 rounded-2xl font-bold hover:bg-red-500/30 transition-colors"
                                >
                                    DECLINE
                                </button>
                            </div>
                        </div>
                    )}

                    {appState.status === RideStatus.ACCEPTED && (
                        <div className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 animate-in slide-in-from-bottom-4">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-14 h-14 bg-gray-200 rounded-2xl overflow-hidden shadow-inner">
                                    <img src="https://picsum.photos/seed/passenger/100/100" alt="Passenger" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-800">Rahul Sharma</h4>
                                    <div className="flex items-center text-xs text-green-600 font-bold uppercase tracking-widest">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5 animate-pulse" />
                                        Heading to Pickup
                                    </div>
                                </div>
                                <button className="p-3 bg-gray-100 rounded-2xl text-gray-600 hover:bg-gray-200 transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 5z" /></svg>
                                </button>
                            </div>
                            <button
                                onClick={onArrive}
                                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-100"
                            >
                                ARRIVED AT PICKUP
                            </button>
                        </div>
                    )}

                    {appState.status === RideStatus.ARRIVED && (
                        <div className="bg-white p-6 rounded-3xl shadow-2xl border-4 border-blue-500 animate-in slide-in-from-bottom-4">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">At Pickup Location</h3>
                            <p className="text-sm text-gray-500 mb-6">Waiting for Rahul to board...</p>
                            <button
                                onClick={onStart}
                                className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold shadow-xl"
                            >
                                START RIDE
                            </button>
                        </div>
                    )}

                    {appState.status === RideStatus.IN_PROGRESS && (
                        <div className="bg-white p-6 rounded-3xl shadow-2xl border border-blue-100 animate-in slide-in-from-bottom-4">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">En Route</span>
                                    <h3 className="text-xl font-bold text-gray-800">MG Road → Indiranagar</h3>
                                </div>
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                                    <svg className="w-6 h-6 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                            </div>
                            <div className="w-full bg-gray-100 h-2 rounded-full mb-6 overflow-hidden">
                                <div className="bg-blue-500 h-full w-2/3 animate-pulse" />
                            </div>
                            <button
                                onClick={onFinish}
                                className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-green-100"
                            >
                                COMPLETE RIDE
                            </button>
                        </div>
                    )}

                    {appState.status === RideStatus.COMPLETED && (
                        <div className="bg-white p-6 rounded-3xl shadow-2xl border-4 border-green-500 text-center animate-in zoom-in-95">
                            <div className="text-green-600 font-black text-xl mb-1 italic">RIDE FINISHED</div>
                            <p className="text-sm text-gray-500 mb-6">Awaiting payment from Rahul...</p>
                            <div className="bg-gray-50 p-4 rounded-2xl mb-2 flex justify-between items-center">
                                <span className="text-gray-500 font-medium">Final Fare</span>
                                <span className="font-bold text-gray-900 text-lg">₹112.00</span>
                            </div>
                        </div>
                    )}

                    {appState.status === RideStatus.PAID && (
                        <div className="bg-gray-900 text-white p-6 rounded-3xl shadow-2xl border-4 border-green-400 text-center animate-in zoom-in-95">
                            <div className="w-16 h-16 bg-green-400 text-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-1 uppercase tracking-tight">Payment Received!</h3>
                            <p className="text-green-400 text-sm mb-6 font-bold">+₹112.00 added to wallet</p>
                            <button
                                onClick={onCancelByDriver}
                                className="w-full bg-white text-gray-900 py-3 rounded-2xl font-bold shadow-lg"
                            >
                                GO BACK ONLINE
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
