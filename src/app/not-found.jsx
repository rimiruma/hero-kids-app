import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function NotFound() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <div className="flex justify-center mb-6">
                        <FaExclamationTriangle className="text-8xl text-warning" />
                    </div>
                    <h1 className="text-9xl font-bold text-primary">404</h1>
                    <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>
                    <p className="py-6 text-lg">
                        Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
                    </p>
                    <Link href="/" className="btn btn-primary btn-lg">
                        Return Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
