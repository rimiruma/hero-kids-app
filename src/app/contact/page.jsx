'use client';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-base-100 rounded-3xl shadow-2xl overflow-hidden">

                {/* Contact Info Section */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-primary p-10 text-primary-content flex flex-col justify-center"
                >
                    <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
                    <p className="mb-8 text-lg">We'd love to hear from you! Whether you have a question about our programs or just want to say hello.</p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <FaPhoneAlt className="text-2xl" />
                            <span className="text-lg">+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-2xl" />
                            <span className="text-lg">hello@herokids.com</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaMapMarkerAlt className="text-2xl" />
                            <span className="text-lg">123 Adventure Lane, Fun City</span>
                        </div>
                    </div>
                </motion.div>

                {/* Form Section */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="p-10"
                >
                    <form className="space-y-4">
                        <h3 className="text-2xl font-bold text-base-content mb-4">Send us a Message</h3>

                        <div className="form-control">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input type="text" placeholder="Your Name" className="input input-bordered w-full focus:input-primary" />
                        </div>

                        <div className="form-control">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email" placeholder="email@example.com" className="input input-bordered w-full focus:input-primary" />
                        </div>

                        <div className="form-control">
                            <label className="label"><span className="label-text">Message</span></label>
                            <textarea className="textarea textarea-bordered h-32 w-full focus:textarea-primary" placeholder="Your message..."></textarea>
                        </div>

                        <button className="btn btn-secondary w-full text-lg mt-4">Send Message</button>
                    </form>
                </motion.div>

            </div>
        </div>
    );
}
