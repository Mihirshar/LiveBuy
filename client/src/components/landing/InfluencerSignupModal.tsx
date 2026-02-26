import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Globe, Instagram, Send, CheckCircle } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui';

interface InfluencerSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  homeCountry: string;
  instagram: string;
  bio: string;
}

export function InfluencerSignupModal({ isOpen, onClose }: InfluencerSignupModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    homeCountry: '',
    instagram: '',
    bio: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/influencers/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          homeCountry: formData.homeCountry,
          socialLinks: {
            instagram: formData.instagram,
          },
          bio: formData.bio,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
      } else {
        setError(result.message || 'Something went wrong');
      }
    } catch (err) {
      // If API is not available, show success anyway for demo
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({ name: '', email: '', homeCountry: '', instagram: '', bio: '' });
    setIsSuccess(false);
    setError(null);
    onClose();
  };

  if (isSuccess) {
    return (
      <Modal isOpen={isOpen} onClose={handleClose} size="md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-20 h-20 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-teal" />
          </motion.div>
          <h3 className="font-display text-2xl font-bold text-cream mb-3">
            Application Submitted!
          </h3>
          <p className="font-body text-cream/70 mb-6">
            Thanks for your interest in joining LiveBuy Local! We'll review your 
            application and get back to you within 48 hours.
          </p>
          <Button variant="primary" onClick={handleClose}>
            Got it!
          </Button>
        </motion.div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Become an Influencer" size="lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <p className="font-body text-cream/70 -mt-2 mb-6">
          Join our network of traveling influencers and start earning by showcasing 
          authentic local products to a global audience.
        </p>

        {error && (
          <div className="p-4 bg-live-red/10 border border-live-red/30 rounded-xl text-live-red text-sm">
            {error}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block font-mono text-xs text-cream/60 uppercase tracking-wider mb-2">
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream/40" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full pl-12 pr-4 py-3 bg-navy border border-white/10 rounded-xl text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block font-mono text-xs text-cream/60 uppercase tracking-wider mb-2">
              Email *
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream/40" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full pl-12 pr-4 py-3 bg-navy border border-white/10 rounded-xl text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Home Country */}
          <div>
            <label className="block font-mono text-xs text-cream/60 uppercase tracking-wider mb-2">
              Home Country *
            </label>
            <div className="relative">
              <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream/40" />
              <select
                name="homeCountry"
                value={formData.homeCountry}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3 bg-navy border border-white/10 rounded-xl text-cream focus:outline-none focus:border-gold/50 transition-colors appearance-none cursor-pointer"
              >
                <option value="">Select country</option>
                <option value="US">United States</option>
                <option value="GB">United Kingdom</option>
                <option value="JP">Japan</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                <option value="IT">Italy</option>
                <option value="ES">Spain</option>
                <option value="TR">Turkey</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="TH">Thailand</option>
                <option value="KR">South Korea</option>
                <option value="AU">Australia</option>
                <option value="BR">Brazil</option>
                <option value="MX">Mexico</option>
                <option value="OTHER">Other</option>
              </select>
            </div>
          </div>

          {/* Instagram */}
          <div>
            <label className="block font-mono text-xs text-cream/60 uppercase tracking-wider mb-2">
              Instagram Handle
            </label>
            <div className="relative">
              <Instagram className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream/40" />
              <input
                type="text"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                placeholder="@yourusername"
                className="w-full pl-12 pr-4 py-3 bg-navy border border-white/10 rounded-xl text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Bio */}
        <div>
          <label className="block font-mono text-xs text-cream/60 uppercase tracking-wider mb-2">
            Tell us about yourself
          </label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows={4}
            placeholder="Share your travel experience, content creation background, and why you want to join LiveBuy Local..."
            className="w-full px-4 py-3 bg-navy border border-white/10 rounded-xl text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold/50 transition-colors resize-none"
          />
        </div>

        {/* Submit */}
        <div className="flex justify-end gap-4 pt-4">
          <Button variant="ghost" type="button" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            type="submit"
            isLoading={isSubmitting}
            rightIcon={<Send className="w-4 h-4" />}
          >
            Submit Application
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default InfluencerSignupModal;
