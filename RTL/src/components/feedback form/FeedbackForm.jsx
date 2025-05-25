// FeedbackForm.jsx
import { useState } from 'react';

export default function FeedbackForm() {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(!message.trim())
    if (!message.trim()) return;
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Send Feedback</h2>
      <textarea
        placeholder="Enter your feedback"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" disabled={!message.trim() || loading}>
        {loading ? 'Sending...' : 'Submit'}
      </button>
      {submitted && <p role="status">Thank you for your feedback!</p>}
    </form>
  );
}
