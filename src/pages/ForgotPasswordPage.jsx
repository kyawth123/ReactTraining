import { useState } from 'react'
import { Link } from 'react-router-dom'

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Check Your Email</h2>
        <p>We sent a password reset link to {email}</p>
        <Link to="/login">Back to Login</Link>
      </div>
    )
  }

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Forgot Password</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send Reset Link</button>
      </form>
      <p style={{ marginTop: '1rem', textAlign: 'center' }}>
        <Link to="/login">Back to Login</Link>
      </p>
    </div>
  )
}

export default ForgotPasswordPage
