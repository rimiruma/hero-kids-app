"use client";

import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";


const error = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <div className="flex justify-center mb-6">
                        <FaExclamationTriangle className="text-8xl text-warning" />
                    </div>
                    <h2 className="text-3xl font-bold mt-4">Something went wrong!</h2>
                    <Link href="/" className="btn btn-primary btn-lg px-20">
                        Go To Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default error;