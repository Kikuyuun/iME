import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SuggestionBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [suggestion, setSuggestion] = useState('');
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!suggestion.trim()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "a4931b12-bc5f-4949-96ab-840f43c4dcfc",
          subject: "New Suggestion from Portfolio",
          message: suggestion,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSent(true);
        setSuggestion('');
        setTimeout(() => {
          setSent(false);
          setIsOpen(false);
        }, 2000);
      }
    } catch (error) {
      console.error("Suggestion submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = (name: string): React.CSSProperties => ({
    background: focused === name ? 'rgba(59,130,246,0.03)' : '#f8fafc',
    border: `1px solid ${focused === name ? 'rgba(59,130,246,0.3)' : 'rgba(226,232,240,0.8)'}`,
    transition: 'all 0.2s',
  });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-80 rounded-xl overflow-hidden shadow-xl shadow-slate-200/50"
            style={{ background: 'rgba(255,255,255,0.98)', border: '1px solid rgba(226,232,240,0.8)', backdropFilter: 'blur(10px)' }}
          >
            <div className="px-5 py-4 border-b" style={{ borderColor: 'rgba(226,232,240,0.8)' }}>
              <div className="flex justify-between items-center">
                <h3 className="text-slate-800 font-semibold flex items-center gap-2">
                  <span className="text-blue-500">💡</span> Suggestion Box
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-slate-700 transition-colors"
                >
                  ✕
                </button>
              </div>
              <p className="text-slate-500 text-xs mt-1">Help me improve! Share your ideas.</p>
            </div>

            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="py-8 text-center text-emerald-600 text-sm font-medium flex flex-col items-center gap-2"
                >
                  <span className="text-2xl">✨</span>
                  Thank you for your feedback!
                </motion.div>
              ) : (
                <>
                  <div>
                    <textarea
                      value={suggestion}
                      onChange={(e) => setSuggestion(e.target.value)}
                      onFocus={() => setFocused('suggestion')}
                      onBlur={() => setFocused(null)}
                      required
                      rows={4}
                      className="w-full px-3 py-2 rounded-lg text-slate-800 text-sm placeholder-slate-300 focus:outline-none resize-none"
                      style={inputStyle('suggestion')}
                      placeholder="What would you like to see here?"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2.5 rounded-lg text-sm font-semibold text-white shadow-md shadow-blue-500/15"
                    style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', opacity: isSubmitting ? 0.7 : 1 }}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Suggestion →'}
                  </motion.button>
                </>
              )}
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/15"
        style={{
          background: 'linear-gradient(135deg, #ffffff, #f1f5f9)',
          border: '1px solid rgba(59, 130, 246, 0.2)'
        }}
      >
        <span className="text-2xl">{isOpen ? '✕' : '💡'}</span>
      </motion.button>
    </div>
  );
};
